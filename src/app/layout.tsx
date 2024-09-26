import type { Metadata } from "next";
import QueryClientProvider from "@/components/common/provider/query-provider";
import Layout from "@/components/common/layout";
import StyledComponentsRegistry from "src/libs/registry";
import { RecoilRoot } from "recoil";

export const metadata: Metadata = {
  title: "Dear",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        <StyledComponentsRegistry>
          <QueryClientProvider>
            <Layout>{children}</Layout>
          </QueryClientProvider>
        </StyledComponentsRegistry>

      </body>
    </html>
  );
}
