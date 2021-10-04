import HomeMenu from "components/menu";
import Pagelayout from "components/page-layout";

const menuItems = [
  {
    title: "FIP UM",
    description: "Fakultas Ilmu Pendididikan",
    link: "/fakultas/fip",
  },
  {
    title: "FMIPA UM",
    description: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
    link: "/fakultas/fmipa",
  },
  {
    title: "FT UM",
    description: "FakultasTeknik",
    link: "/fakultas/ft",
  },
  {
    title: "FE UM",
    description: "Fakultas Ekonomi",
    link: "/fakultas/fe",
  },
  {
    title: "FS UM",
    description: "Fakultas Sastra",
    link: "/fakultas/fs",
  },
  {
    title: "FIK UM",
    description: "Fakultas Ilmu Keolahragaan",
    link: "/fakultas/fik",
  },
];

const seo = {
  title: "Berita Fakultas",
  description:
    "Agregator konten dan artikel yang dipublikasikan di situs Fakultas Universitas Negeri Malang. Dibuat untuk proyek pribadi serta independen",
  pageTitle: "Berita dan Artikel Fakultas",
  pageDescription:
    "Agregator konten dan artikel yang dipublikasikan di situs Fakultas Universitas Negeri Malang. Dibuat untuk proyek pribadi serta independen",
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
