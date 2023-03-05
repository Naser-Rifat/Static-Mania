const Hero = () => {
  return (
    <div className="w-[80%] mx-auto my-32  text-grey   md:block flex item-center gap-20">
      {/* Left */}
      <div className="  w-full h-[302px] block">
        <div className="  w-full h-[222px] text-black block">
          <b className=" text-4xl leading-[110%] lg:inline-block ">
            Become The Hero Of Your Own
          </b>
          <div className=" leading-[28px] inline-block ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </div>
        </div>
        <div className="h-12 flex ">
          <input
            placeholder=" Enter Your Email Id"
            className="w-72 p-2 leading-[24px] opacity-[0.87] border-none focus:outline-1"
          />
          <button className=" text-white bg-blue border-none w-40 leading-8 text-lg h-12 flex justify-center items-center ">
            Subscribe
          </button>
        </div>
      </div>
      {/* Right  */}
      <div className=" grid grid-cols-12 items-center w-full h-64  ">
        <div className=" col-span-2 bg-green w-10 h-[178px]" />
        <div className=" col-span-2 bg-blue w-10 h-64" />
        <div className=" col-span-2 bg-green w-10 h-[99px]" />
        <div className=" col-span-2 bg-blue w-10 h-[178px]" />
        <div className=" col-span-2 bg-green w-10 h-64" />
        <div className=" col-span-2 bg-blue w-10 h-[99px]" />
      </div>
    </div>
  );
};

export default Hero;
