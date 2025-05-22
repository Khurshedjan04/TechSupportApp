import "./globals.css";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Head>
          <title>Tech Support</title>
          <meta
            name="description"
            content="Advanced cybersecurity solutions tailored to keep you safe"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
