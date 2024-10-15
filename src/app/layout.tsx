import {
  Footer,
  Header,
  NextAuthProvider,
  ProgressBar,
  Slogan,
  Swr,
} from "@/components/common";
import { Box } from "@mui/material";
import { Fredoka } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhà Thiệp",
  description: "Nhà Thiệp. Thiết kế riêng thiệp mừng, thiệp cưới.",
  keywords: [
    "nhathiep",
    "thiệp",
    "thiệp cưới",
    "thiệp sinh nhậtt",
    "thiep cuoi",
    "thiep sinh nhat",
    "thiep mung",
    "thiệp mừng",
    "các loại thiệp",
    "cac loai thiep",
    "bao li xi",
    'bao lì xì'
  ],
  metadataBase: new URL("https://www.nhathiep.com"),
};

export const maxDuration = 60;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <ProgressBar></ProgressBar>
        <NextAuthProvider>
          <Swr>
            <Box component={"header"}>
              <Header></Header>
            </Box>
            <Box component={"main"}>{children}</Box>
            <Slogan></Slogan>
            <Box component={"footer"}>
              <Footer></Footer>
            </Box>
          </Swr>
        </NextAuthProvider>
      </body>
    </html>
  );
}
