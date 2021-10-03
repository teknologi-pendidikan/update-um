import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-gray-100 py-4 px-8">
      <Link href="/" passHref>
        <h1 className="text-xl font-bold hover:cursor-auto md:mx-24">UM News Feeder</h1>
      </Link>
    </header>
  );
}
