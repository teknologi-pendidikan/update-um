import React from "react";
import Link from "next/link";

// eslint-disable-next-line react/display-name
const CardComponents = React.forwardRef(({ onClick, href, title, published }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div className="artikel-terbaru border-2 border-gray-700 mt-4 p-5 flex hover:cursor-pointer">
        <div className="heading flex-1 pr-3">
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2">Published: {published}</p>
        </div>
      </div>
    </a>
  );
});

export default function CardInformasi({ title, published, link }) {
  return (
    <Link href={link} key={published} passHref>
      <CardComponents title={title} published={published} />
    </Link>
  );
}
