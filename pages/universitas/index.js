import HomeMenu from "components/menu";
import Pagelayout from "components/page-layout";

const menuItems = [
  {
    title: "Berita Universitas - Umum",
    description: "Berita Universitas Negeri Malang",
    link: "/universitas/um",
  },
  {
    title: "Berita Universitas - Berita",
    description: "Berita Universitas Negeri Malang",
    link: "/universitas/um-berita",
  },
  {
    title: "Berita Universitas - Pengumuman",
    description: "Berita Universitas Negeri Malang",
    link: "/universitas/um-pengumuman",
  },
  {
    title: "Berita Universitas - Rilis",
    description: "Berita Universitas Negeri Malang",
    link: "/universitas/um-rilis",
  },
  {
    title: "Berita Universitas - Info Akademik",
    description: "Berita Universitas Negeri Malang",
    link: "/universitas/um-akademik",
  },
  {
    title: "PTIK UM",
    description: "Artikel Web Pusat Teknologi Informasi Komunikasi UM",
    link: "/universitas/ptik",
  },
  {
    title: "Kemahasiswaaan",
    description: "Artikel Web  Kemahasiswaan UM",
    link: "/universitas/kemahasiswaan",
  },
];

const seo = {
  title: "Berita UM",
  description:
    "Agregator konten dan artikel yang dipublikasikan di situs Universitas Negeri Malang. Dibuat untuk proyek pribadi serta independen",
  pageTitle: "Berita dan Artikel UM & UPT",
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
