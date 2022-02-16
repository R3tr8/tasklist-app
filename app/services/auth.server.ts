import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import type { User } from "@prisma/client";
import { db } from "./db.server";
import { FormStrategy } from "remix-auth-form";


export let authenticator = new Authenticator<User>(sessionStorage);

