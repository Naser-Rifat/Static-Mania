import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className=" px-10 bg-white flex flex-row py-[18px]  items-center justify-between
     "
    >
      <img className="relative   overflow-hidden" alt="" src="../logo.svg" />
      <Link href="/about">
        <div className=" cursor-pointer hover:text-blue-500">{`About `}</div>
      </Link>
    </div>
  );
};

export default Navbar;
