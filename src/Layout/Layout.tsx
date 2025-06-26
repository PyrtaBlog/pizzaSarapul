import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <section>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
