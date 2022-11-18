const GithubStrategy = require("passport-github2");
const random = require('random-seed');
const { StrategyAbstract, DataManager } = require("@jmilanes/hotbars");

class GithubAuth extends StrategyAbstract {
    constructor() {
        super("github");
    }

    createStrategy() {
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
        const user = await this.getUser(profile.emails[0].value);

        // user is trying to register
        if (!user) {
            const user = await this.createUser(profile, accessToken, refreshToken)
            return done(undefined, user);
        }

        return done(undefined, user);
    }
    
    async createUser(profile, accessToken, refreshToken) {
        return DataManager.get("lowDb").from("users").insert({
            provider: profile.provider,
            accessToken,
            refreshToken,
            username: profile.username,
            email: profile.emails?.length ? profile.emails[0].value : null,
            avatar: profile.photos?.length ? profile.photos[0].value : `https://avatars.dicebear.com/api/bottts/${random.create()}.svg`,
            firstName: profile.name?.givenName || null,
            lastName: profile.name?.familyName || null,
        });
    }

    async getUser(email) {
        return DataManager.get("lowDb").from("users").eq("email", email).single();
    }
}

module.exports = GithubAuth;
