"use client";
import Sidebar from "../sidbar/index";
import { Container, Wrap } from "./style";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <Container>
        {pathname !== "/login" && <Sidebar />}
        <Wrap isSign={pathname == "/sign" ? false : true}>{children}</Wrap>
      </Container>
    </>
  );
};

export default Layout;
