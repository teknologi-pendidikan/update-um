import Link from "next/link";

import Header from "components/header";
import Footer from "components/footer";
import CardInformasi from "components/card-components";
import HomeMenu from "components/menu";
import NavbarBottom from "components/navbar-bottom";

const { parse } = require("rss-to-json");

export default function Index({ newsFromUM }) {
  // Init the News Collections
  const UMNewsCollection = JSON.parse(newsFromUM);

  // Create the News Cards
  const UMNews = [];
  for (let i = 0; i < UMNewsCollection.items.length - 8; i++) {
    const newsLink = UMNewsCollection.items[i].link;
    const newsTitle = UMNewsCollection.items[i].title;
    const newsPublishedDate = new Date(UMNewsCollection.items[i].published).toISOString();

    // Send To Array
    UMNews.push(
      <CardInformasi key={i} title={newsTitle} published={newsPublishedDate} link={newsLink} />
    );
  }
  return (
    <>
      <NavbarBottom />
      <Header />
      <div id="page-title" className="px-8 pt-4 pb-4">
        <h2 className="text-3xl font-bold">UM News Feeder</h2>
        <p className="mt-4">
          UM News Feeder adalah agregator artikel yang dipbulikasikan oleh situs resmi Universitas
          Negeri Malang. Situs ini berguna bagi seseorang yang membutuhkan Informasi dasar dari
          berita Universitas Negeri Malang.
        </p>
      </div>
      <HomeMenu />
      <main>
        <section id="um-news" className="mt-4 py-4 px-8">
          <h3 className="text-2xl font-bold">Berita dari UM</h3>
          <p>
            Sumber Feed: <em className="text-blue-800">https://um.ac.id</em>
          </p>
          {UMNews}
          <Link href="/um-news" passHref>
            <button className="mt-4 w-full h-12 hover:outline-black text-blue-500 text-xl">
              Baca Berita Lainnya
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const dataFeedUM = await parse("https://rss-rengga.vercel.app/blogs/wordpress/um.ac.id/https");
  const newsFromUM = JSON.stringify(dataFeedUM);
  return {
    props: {
      newsFromUM,
    },
  };
}
