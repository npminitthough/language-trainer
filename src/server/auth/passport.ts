import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "../db/prisma";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/api/auth/google/callback",
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const googleId = profile.id;

        if (!email) {
          return done(new Error("Google account has no email"));
        }

        let user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              oauthProvider: "google",
              oauthId: googleId,
            },
          });
        }

        // passport adds this to req.user
        done(null, {
            id: user.id, // best not to pass full ORM user obj
            email: user.email
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

export default passport;
