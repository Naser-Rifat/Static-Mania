const Footer = () => {
  return (
    <div className="relative font-see-more mt-72">
      <div className=" hidden md:block absolute -top-56 left-28  w-[80%] mx-auto h-[285px] text-3xl text-white bg-blue mt-10 -mb-10  ">
        <b className=" flex justify-center pt-20">Our Sponsors</b>
        <div className="  md:flex md:justify-evenly  md:mt-20 space-y-5 md:space-y-0  ">
          <img className="block" alt="" src="/Logoipsum.png" />
          <img className="block" alt="" src="/Logoipsum2.png" />
          <img className="block" alt="" src="/Logoipsum3.png" />
          <img className="block" alt="" src="/Logoipsum4.png" />
        </div>
      </div>
      <div className="   w-full h-96  text-white ">
        <div className=" lg:grid grid-cols-4 pt-44 px-10 bg-black pb-10 space-y-10 lg:space-y-0">
          <div className="col-span-1 ">
            <img className=" w-32 " alt="" src="../brand.svg" />
          </div>
          <div className="col-span-1 space-y-5">
            <b className="  text-xl leading-[150%]">Pages</b>

            <div className="  flex flex-col  gap-[16px]">
              <div className=" leading-[24px]">Home</div>
              <div className=" text-lg inline-block">Podcast</div>
              <div className=" leading-[24px]">Host</div>
              <div className=" leading-[24px]">Blog</div>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <b className="  block text-xl leading-[150%]">Reach Us</b>

            <div className=" flex flex-col  gap-[16px]">
              <div className="leading-[24px]">Contact</div>
              <div className=" leading-[24px]">About</div>
            </div>
          </div>
          <div className=" col-span-1 space-y-5 text-left w-full h-full text-xl">
            <b className="  leading-[150%]">Subscribe</b>

            <div className=" flex flex-col gap-[32px] ">
              <img className="  w-40 h-8 " alt="" src="/Apple Podcast.png" />
              <img className=" w-40 h-8  " alt="" src="/Google Podcast.png" />
              <img className="  w-40 h-8 " alt="" src="/Soundcloud.png" />
              <img className="w-40 h-8 " alt="" src="/Spotify.png" />
            </div>
          </div>
        </div>

        <div className=" py-2 w-full  bg-blue flex justify-center ">
          <b className=" leading-[150%] ">© Copyright Finsweet 2021</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
