import GlobalLayout from "~/components/layouts/GlobalLayout";
import "~/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GlobalLayout>{children}</GlobalLayout>;
}
