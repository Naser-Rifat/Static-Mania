import type { NextPage } from "next";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Client from "../components/Client";
import EpisodeCard from "../components/EpisodeCard";

const Home: NextPage = () => {
  return (
    <div className="w-[95%] bg-white mx-auto  text-left text-base text-black font-see-more overflow-x-hidden">
      <Navbar />
      <Hero />
      <Client />
      <EpisodeCard />

      {/* ------------Footer section------------------ */}
      {/* <Footer /> */}

      {/*------------- Sponsors section --------------*/}
      {/* <Sponsors /> */}
      {/* ---------------------------------- */}
      {/* <div className="absolute top-[1556px] left-[79px] w-[1280px] h-[516px]">
        <div className="absolute top-[0px] left-[432px] w-[848px] h-[516px]">
          <div className="absolute top-[0px] left-[432px] w-[416px] h-[516px]">
            <div className="absolute top-[352px] left-[0px] w-[412.99px] h-[164px]">
              <div className="absolute top-[140px] left-[1px] leading-[150%] font-semibold text-blue flex items-center w-[88.43px]">
                Read Now
              </div>
              <div className="absolute top-[76px] right-[40.19px] leading-[150%] inline-block w-[372.79px]">
                Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                rebum.
              </div>
              <div className="absolute top-[0px] right-[0px] text-2xl leading-[125%] font-semibold inline-block w-[412.99px]">
                Apparently we had reached a great height in the atmosphere, ...
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[416px] h-80 object-cover"
              alt=""
              src="../httpswwwpexelscomphototopviewofassortedgadgetsondesk3568520@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[416px] h-[516px]">
            <div className="absolute top-[352px] left-[0px] w-[411px] h-[164px]">
              <div className="absolute top-[140px] left-[0px] leading-[150%] font-semibold text-blue">
                Read Now
              </div>
              <div className="absolute top-[76px] right-[40px] leading-[150%] inline-block w-[371px]">
                Lorem ipsum at vero eos et accusam et justo duo dolores et ea
                rebum.
              </div>
              <div className="absolute top-[0px] right-[0px] text-2xl leading-[125%] font-semibold inline-block w-[411px]">
                Getting the first 100 customers for your business
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[416px] h-80 object-cover"
              alt=""
              src="../httpswwwpexelscomphotobitcoinsandusdollarbills730547@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[416px] h-[516px] text-blue">
          <div className="absolute top-[0px] left-[0px] bg-off-white w-[416px] h-[516px]" />
          <div className="absolute top-[196px] left-[0px] w-[416px] h-80">
            <div className="absolute top-[0px] left-[-52.38px] w-[535.38px] h-[520.51px]">
              <div className="absolute top-[485.66px] left-[52.82px] bg-green w-[74.43px] h-[614.9px] [transform:_rotate(-135.21deg)] [transform-origin:0_0]" />
              <div className="absolute top-[251.21px] left-[59.87px] bg-blue w-[74.43px] h-[232.45px] [transform:_rotate(-135.21deg)] [transform-origin:0_0]" />
              <div className="absolute top-[520.51px] left-[237.15px] bg-blue w-[74.43px] h-[420.24px] [transform:_rotate(-135.21deg)] [transform-origin:0_0]" />
            </div>
          </div>
          <div className="absolute top-[132px] left-[41px] leading-[150%] font-semibold">
            See More
          </div>
          <b className="absolute top-[40px] right-[43px] text-3xl leading-[120%] inline-block text-black w-[333px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Read our `}</p>
            <p className="m-0">{`articles & news`}</p>
          </b>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
