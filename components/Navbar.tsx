const Navbar = () => {
  return (
    <div
      className="  bg-white flex flex-row py-[18px] px-[83px] items-center justify-between
     md:flex-col md:gap-[100px]"
    >
      <img
        className="relative w-[130px] h-[26.33px] shrink-0 overflow-hidden"
        alt=""
        src="../logo.svg"
      />
      <div className="relative w-[46px] h-7 shrink-0">
        <div className="absolute top-[0%] left-[0%] leading-[28px]">{`About `}</div>
      </div>
    </div>
  );
};

export default Navbar;
