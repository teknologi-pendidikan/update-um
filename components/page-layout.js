import Head from "next/head";
import NavbarBottom from "./navbar-bottom";
import PageTitle from "./page-title";
import Header from "./header";
import Footer from "./footer";

export default function Pagelayout({ children, title, description, pageTitle, pageDescription }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarBottom />
      <Header />
      <PageTitle title={pageTitle} description={pageDescription} />
      {children}
      <Footer />
    </>
  );
}
