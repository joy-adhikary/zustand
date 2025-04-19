import type { Metadata } from "next";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite';
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
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
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
