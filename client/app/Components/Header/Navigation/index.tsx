import Link from "next/link";
const Navigation = () => {
  return (
    <section className="flex gap-4">
      <Link
        className="px-5 py-2.5 text-xl rounded-md hover:bg-gray-500 hover:text-white transition-all ease-linear"
        href={'/'}
      >
        home
      </Link>
      <Link
        className="px-5 py-2.5 text-xl rounded-md hover:bg-gray-500 hover:text-white"
        href={'/about'}
      >
        about
      </Link>
    </section>
  );
};

export default Navigation;
