import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <span><h1>Task-List App</h1></span>
      <nav>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
