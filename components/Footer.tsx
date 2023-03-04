const Footer = () => {
  return (
    <div className="absolute top-[2389px] left-[-1px] w-full h-[638px] text-white">
      <div className="absolute h-[10.03%] w-full top-[89.97%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-blue" />
        <b className="absolute top-[31.25%] left-[42.57%] leading-[150%]">
          © Copyright Finsweet 2021
        </b>
      </div>
      <div className="absolute h-[89.97%] w-full top-[0%] right-[0%] bottom-[10.03%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
        <div className="absolute top-[192px] left-[80px]  h-[286px]">
          <div className="block text-right w-full h-full text-xl">
            <div className="absolute top-[62px] left-[0px] flex flex-col items-start justify-start gap-[32px]">
              <img
                className="relative w-[182.75px] h-8 shrink-0 overflow-hidden"
                alt=""
                src="../apple-podcast.svg"
              />
              <img
                className="relative w-[195.73px] h-8 shrink-0 overflow-hidden"
                alt=""
                src="../google-podcast.svg"
              />
              <img
                className="relative w-[174px] h-8 shrink-0 overflow-hidden"
                alt=""
                src="../soundcloud.svg"
              />
              <img
                className="relative w-[127.82px] h-8 shrink-0 overflow-hidden"
                alt=""
                src="../spotify.svg"
              />
            </div>
            <b className="absolute top-[0%] left-[0%] leading-[150%]">
              Subscribe
            </b>
          </div>
          <div className="absolute top-[0px] left-[750px] w-[92px] h-[126px]">
            <div className="absolute top-[62px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[24px]">Contact</div>
              <div className="relative leading-[24px]">About</div>
            </div>
            <b className="absolute top-[0%] left-[0%] text-xl leading-[150%]">
              Reach Us
            </b>
          </div>
          <div className="absolute top-[0px] left-[438px] w-[69.9px] h-[203.95px]">
            <div className="absolute top-[62px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[24px]">Home</div>
              <div className="relative text-lg inline-block w-[69.9px] h-[21.95px] shrink-0">
                Podcast
              </div>
              <div className="relative leading-[24px]">Host</div>
              <div className="relative leading-[24px]">Blog</div>
            </div>
            <b className="absolute top-[0%] left-[0%] text-xl leading-[150%]">
              Pages
            </b>
          </div>
          <img
            className="absolute top-[3px] left-[0px] w-[200px] h-[40.51px]"
            alt=""
            src="../brand.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
