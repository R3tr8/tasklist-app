import { createCookieSessionStorage } from "remix";

export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "remixSession",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: ["remix-secret"],
        secure: process.env.NODE_ENV === "production",
    },
});

export let { getSession, commitSession, destroySession } = sessionStorage;