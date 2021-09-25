import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200 text-gray-800 py-4 px-8 md:mx-24">
      <Link href="/" passHref>
        <h1 className="text-xl font-bold hover:cursor-auto">UM News Feeder</h1>
      </Link>
    </header>
  );
}
