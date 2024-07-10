"use client";
import Sidebar from "src/components/common/sidebar/index";
import { Container, Wrap } from "./style";
import { usePathname, useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <RecoilRoot>
        <Container>
          {pathname !== "/login" && pathname.substring(0, 7) !== "/signup" && <Sidebar />}
          <Wrap isSign={pathname == "/sign" ? false : true}>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
          </Wrap>
        </Container>
      </RecoilRoot>
    </>
  );
};

export default Layout;
