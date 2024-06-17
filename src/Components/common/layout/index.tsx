"use client";
import Sidebar from "src/components/Sidebar/index";
import { Container, Wrap } from "./style";
import { usePathname, useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <RecoilRoot>
        <Container>
          {pathname !== "/login" && <Sidebar />}
          <Wrap isSign={pathname == "/sign" ? false : true}>{children}</Wrap>
        </Container>
      </RecoilRoot>
    </>
  );
};

export default Layout;
