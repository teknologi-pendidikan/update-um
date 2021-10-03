import Link from "next/link";

export default function HomeMenu({ menu }) {
  let componentList = [];
  componentList = menu.map(item => {
    return (
      <Link key={item.link} href={item.link} passHref>
        <div
          key={item.link}
          className="flex flex-col border-2 border-gray-700 p-4 active:bg-gray-400 hover:bg-gray-100"
        >
          <h3 className="font-bold text-lg uppercase">{item.title}</h3>
          <p className="mt-1">{item.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <div id="home-menu" className="px-8 pt-4">
      <h2 className="text-2xl font-bold">Menu Berita</h2>
      <div className="mt-4 flex flex-col md:grid md:grid-cols-2 w-full gap-4 flex-wrap">
        {componentList}
      </div>
    </div>
  );
}
