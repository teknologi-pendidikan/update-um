import HomeMenu from "components/menu";
import Pagelayout from "components/page-layout";

const menuItems = [
  {
    title: "Berita Universitas",
    description: "Agregasi Berita Pada Situs Universitas Negeri Malang",
    link: "/universitas",
  },
  {
    title: "Berita Organisasi Mahasiswa",
    description: "Agregasi Berita Organisasi Mahasiswa",
    link: "/ormawa",
  },
  {
    title: "Berita Fakultas",
    description: "Agregasi Berita berita pada situs Fakultas",
    link: "/fakultas",
  },
];

const seo = {
  title: "Universitas Negeri Malang News Feeder",
  description:
    "Agregator konten dan artikel yang dipublikasikan di situs Universitas Negeri Malang. Dibuat untuk proyek pribadi serta independen",
  pageTitle: "Universitas Negeri Malang News Feeder",
  pageDescription:
    "Agregator konten dan artikel yang dipublikasikan di situs Universitas Negeri Malang. Dibuat untuk proyek pribadi serta independen",
};

export default function Index() {
  return (
    <Pagelayout
      title={seo.title}
      description={seo.description}
      pageTitle={seo.pageTitle}
      pageDescription={seo.pageDescription}
    >
      <main className="md:mx-24">
        <HomeMenu menu={menuItems} />
      </main>
    </Pagelayout>
  );
}
