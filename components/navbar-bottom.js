import Link from "next/link";

export default function NavbarBottom() {
  return (
    <nav className="fixed bottom-0 bg-gray-600 w-screen h-16 px-8 flex flex-row gap-4 justify-center text-white z-10">
      <Link href="/" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 border-2 active:bg-gray-800 hover:bg-gray-700">
          <p>Beranda</p>
        </div>
      </Link>
      <Link href="/um-news" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 border-2 active:bg-gray-800 hover:bg-gray-700">
          <p>UM</p>
        </div>
      </Link>
      <Link href="/kemahasiswaan" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 border-2 active:bg-gray-800 hover:bg-gray-700">
          <p>Kemahasiswaan</p>
        </div>
      </Link>
      <Link href="/fip" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 border-2 active:bg-gray-800 hover:bg-gray-700">
          <p>FIP</p>
        </div>
      </Link>
    </nav>
  );
}
