import { Link, useSearchParams} from "remix";
import type { LinksFunction } from "remix";

import styleUrl from "../styles/login.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styleUrl}];
}

export default function Login() {
    const [searchParams] = useSearchParams();
    return(
        <div className="container">
      <div className="content" data-light="">
        <h1>Connexion</h1>
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={
              searchParams.get("redirectTo") ?? undefined
            }
          />
          <fieldset>
            
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked
              />{" "}
              Connexion
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="register"
              />{" "}
              S'enregistrer
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Nom d'utilisateur</label>
            <input
              type="text"
              id="username-input"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password-input">Mot de passe</label>
            <input
              id="password-input"
              name="password"
              type="password"
            />
          </div>
          <button type="submit" className="button">
            Soumettre
          </button>
        </form>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}