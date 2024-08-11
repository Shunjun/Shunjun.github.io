import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar flex flex-col">
      <div className="logo p-content">Logo</div>
      <div className="flex-1 flex items-center p-content">
        <ul className="text-secondary w-full">
          <li>
            <NavBarItem href="/">About Me</NavBarItem>
          </li>
          <li>
            <Line />
          </li>
          <li>
            <NavBarItem href="/blog">Blog</NavBarItem>
          </li>
          <li>
            <NavBarItem href="/">Photograph</NavBarItem>
          </li>
          <li>
            <NavBarItem href="/">Notes</NavBarItem>
          </li>
          <li>
            <Line />
          </li>
          <li>
            <NavBarItem href="/">Projects</NavBarItem>
          </li>
        </ul>
      </div>
      <div className="text-secondary">footer</div>
    </header>
  );
}

function Line() {
  return (
    <div className="border-b border-[color:--color-secondary] border-dashed mt-3 mb-6" />
  );
}

function NavBarItem({
  children,
  href,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="py-2 flex" href={href}>
      {children}
    </Link>
  );
}
