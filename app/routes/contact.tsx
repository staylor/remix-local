import { Link, Outlet } from "@remix-run/react";

export default function Contact() {
  return (
    <article>
      <h2 className="text-xl underline">Contact me</h2>
      <nav className="flex gap-10 mb-10">
        <Link to="/contact/phone">Phone</Link>
        <Link to="/contact/message">Message</Link>
      </nav>
      <Outlet />
    </article>
  );
}
