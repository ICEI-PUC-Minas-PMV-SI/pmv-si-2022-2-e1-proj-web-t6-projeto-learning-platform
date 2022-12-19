const GithubStrategy = require("passport-github2");
const random = require("random-seed");
const { JsonDbAuthStrategy, DataManager } = require("@jmilanes/hotbars");

class GithubAuth extends JsonDbAuthStrategy {
    constructor() {
        super("github");
        this.successRedirect = "/profile";
    }

    createStrategy() {
        console.log("REDIRECT URI", this.getCallbackUrl());
        return new GithubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: this.getCallbackUrl(),
            },
            this.authenticate.bind(this)
        );
    }

    configure() {
        return {
            scope: ["user:email"],
            failureRedirect: this.failureRedirect,
            successRedirect: this.successRedirect,
        };
    }

    async authenticate(...args) {
        const [accessToken, refreshToken, profile, done] = args;

        try {
            const user = await this.getOrCreateUser(profile, accessToken, refreshToken);

            if (user) {
                await this.sendEmailConfirmation(user, this.name);

                return done(undefined, user);
            }

            return done(undefined, false);
        } catch (e) {
            return done(e, false);
        }
    }

    async getOrCreateUser(profile, accessToken, refreshToken) {
        const user = await this.getUser(profile.emails[0].value);

        if (!user) {
            return this.createUser(profile, accessToken, refreshToken);
        }

        return user;
    }

    async createUser(profile, accessToken, refreshToken) {
        return DataManager.get("jsonDb")
            .from("users")
            .insert({
                confirmed: false,
                provider: profile.provider,
                accessToken,
                refreshToken,
                username: profile.username,
                email: profile.emails?.length ? profile.emails[0].value : null,
                avatar: profile.photos?.length
                    ? profile.photos[0].value
                    : `https://avatars.dicebear.com/api/bottts/${random.create()}.svg`,
                firstName: profile.name?.givenName || null,
                lastName: profile.name?.familyName || null,
            });
    }

    async getUser(email) {
        return DataManager.get("jsonDb").from("users").eq("email", email).single();
    }
}

module.exports = GithubAuth;
