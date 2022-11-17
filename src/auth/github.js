const GithubStrategy = require("passport-github2");
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

        if (!user) {
            return done(undefined, false);
        }

        return done(undefined, user);
    }

    async getUser(email) {
        return DataManager.get("lowDb").from("users").eq("email", email).single();
    }
}

module.exports = GithubAuth;
