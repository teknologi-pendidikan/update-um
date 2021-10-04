import PageLayout from "components/page-layout";
import CardInformasi from "components/card-components";

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

  const seo = {
    title: "Fakultas Ekonomi",
    description: "Fakultas Ekonomi Universitas Negeri Malang",
  };

  return (
    <PageLayout
      title={seo.title}
      description={seo.description}
      pageTitle={seo.title}
      pageDescription={seo.description}
    >
      <main className="md:mx-24">
        <section id="um-news" className="py-4 px-8">
          {UMNews}
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const dataFeedUM = await parse("https://rss-rengga.vercel.app/blogs/wordpress/fe.um.ac.id/http");
  const newsFromUM = JSON.stringify(dataFeedUM);
  return {
    props: {
      newsFromUM,
    },
  };
}
