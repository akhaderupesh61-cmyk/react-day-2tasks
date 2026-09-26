import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/jobs">Jobs</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}
