export default function PageTitle({ title, description }) {
  return (
    <div id="page-title" className="px-8 pt-4 pb-4  md:mx-24">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
    </div>
  );
}
