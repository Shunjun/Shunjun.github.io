import NavBar from "../NavBar";

export default function GlobalLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <>
      <NavBar />
      <main className="ml-navbar">{children}</main>
    </>
  );
}
