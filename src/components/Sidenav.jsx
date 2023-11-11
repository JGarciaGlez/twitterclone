import Link from "next/link";

export function SideNav( ) {
  return (
    <nav className="stycky top-0 left-0 px-2 py-2">
      <ul className="flex flex-col items-start gap-2 py-8 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profiles">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
