import "./globals.css";

export const metadata = {
  title: "Better.com Replica",
};

import Navbar from "./Navbar";
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ }}>{children}</main>
      </body>
    </html>
  );
}
