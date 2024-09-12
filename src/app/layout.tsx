import type { Metadata } from "next";
import "./globals.scss";
import Nav from "./nav";

export const metadata: Metadata = {
  title: "React UI Components",
  description: "[React / VanillaJS] UI 요소 직접 만들기",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Layout;
