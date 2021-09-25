import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="mt-8  px-8 pt-4 pb-28">
      <div className="pt-8 px-8 border-t-2 border-gray-200" />
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="flex justify-center font-bold text-lg">update-um.tep.my.id</h2>
        <p>
          UM News Feeder adalah aggregator artikel situs resmi Universitas Negeri Malang. Aplikasi
          ini dibuat secara independen oleh Mahasiswa.
        </p>
        <Link href="https://github.com/teknologi-pendidikan/update-um" passHref>
          <p className="flex justify-center font-bold active:underline hover:underline">
            GitHub Repository
          </p>
        </Link>
      </div>
    </footer>
  );
}
