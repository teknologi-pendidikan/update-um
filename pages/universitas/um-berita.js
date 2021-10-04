import Header from "components/header";
import Footer from "components/footer";
import CardInformasi from "components/card-components";
import NavbarBottom from "components/navbar-bottom";

const { parse } = require("rss-to-json");

export default function Index({ newsFromUM }) {
  // Init the News Collections
  const UMNewsCollection = JSON.parse(newsFromUM);

  // Create the News Cards
  const UMNews = [];
  for (let i = 0; i < UMNewsCollection.items.length; i++) {
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
        <h2 className="text-3xl font-bold">Berita dari UM</h2>
        <p className="mt-4">Agregasi Berita UM</p>
        <p>
          Sumber Feed: <em className="text-blue-800">https://um.ac.id</em>
        </p>
      </div>
      <main>
        <section id="um-news" className="py-4 px-8">
          {UMNews}
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const dataFeedUM = await parse("https://um.ac.id/kategori/berita/feed");
  const newsFromUM = JSON.stringify(dataFeedUM);
  return {
    props: {
      newsFromUM,
    },
  };
}
