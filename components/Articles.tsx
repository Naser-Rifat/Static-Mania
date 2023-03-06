import articlebg from "../src/assets/images/a-bg.png";

const Articles = () => {
  return (
    <div className=" lg:grid lg:grid-cols-3 lg:gap-5 space-y-10 md:space-y-0  ">
      <div
        style={{
          backgroundImage: `url('${articlebg.src}')`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center" /* Center the image */,
          backgroundRepeat: "no-repeat" /* Do not repeat the image */,
          backgroundSize: "cover",
        }}
        className="lg:col-span-1 text-blue h-full   block "
      >
        <b className=" p-2 text-3xl leading-[20%] inline-block text-black ">
          <p className="">{`Read our `}</p>
          <p className="m-0">{`articles & news`}</p>
        </b>
        <div className=" p-2 mt-2 font-semibold">See More</div>
      </div>
      {/* --------------------- */}

      <div className=" col-span-1 overflow-hidden ">
        <img
          className=" h-80 object-cover inline-block"
          alt=""
          src="../httpswwwpexelscomphototopviewofassortedgadgetsondesk3568520@2x.png"
        />
        <div className=" space-y-5 mt-5 inline-block">
          <div className=" text-2xl leading-[125%] font-semibold inline-block ">
            Apparently we had reached a great height in the atmosphere, ...
          </div>

          <div className=" leading-[150%] inline-block ">
            Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
          </div>
          <div className=" leading-[150%] font-semibold text-blue flex items-center ">
            Read Now
          </div>
        </div>
      </div>
      <div className=" col-span-1 overflow-hidden ">
        <img
          className="  h-80 object-cover"
          alt=""
          src="../httpswwwpexelscomphotobitcoinsandusdollarbills730547@2x.png"
        />
        <div className=" space-y-5 mt-5 inline-block">
          <div className=" text-2xl leading-[125%] font-semibold inline-block ">
            Apparently we had reached a great height in the atmosphere, ...
          </div>

          <div className=" leading-[150%] inline-block ">
            Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
          </div>
          <div className=" leading-[150%] font-semibold text-blue flex items-center ">
            Read Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
