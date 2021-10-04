import HomeMenu from "components/menu";
import Pagelayout from "components/page-layout";

const menuItems = [
  {
    title: "",
    description: "",
    link: "/ormawa/",
  },
];

const seo = {
  title: "Berita Ormawa - Belum Tersedia",
  description:
    "Agregator konten dan artikel yang dipublikasikan di situs Fakultas Universitas Negeri Malang. Dibuat untuk proyek pribadi serta independen",
  pageTitle: "Berita dan Artikel Ormawa UM",
  pageDescription: "Belum Tersedia :(",
};

export default function Index() {
  return (
    <Pagelayout
      title={seo.title}
      description={seo.description}
      pageTitle={seo.pageTitle}
      pageDescription={seo.pageDescription}
    >
      <main className="md:mx-24" />
    </Pagelayout>
  );
}
