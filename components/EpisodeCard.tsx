const EpisodeCard = () => {
  return (
    <div className=" w-full space-y-10 ">
      <div className=" w-full  text-white  md:flex  justify-between space-y-3">
        <div className=" h-full   text-black">
          <b className=" text-3xl leading-[120%]">Recent Episodes</b>

          <div className=" h-3/6 w-[99.73%]  leading-[150%] inline-block bloc">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black.
          </div>
        </div>
        <div>
          <div className="   bg-blue flex justify-center flex-row py-3 px-8 box-border items-start md:justify-start ">
            <div className=" leading-[24px] font-medium ">
              See All Episiodes
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------- */}
      <div className="md:grid grid-cols-3   gap-10 space-y-10 md:space-y-0">
        {/* ----------------------- */}
        <div className=" col-span-1 h-full ">
          <div className="  space-y-4 ">
            <div className=" relative">
              <img
                className=" h-full w-full   "
                alt=""
                src="../httpswwwpexelscomphotophotoofwomenhavingconversation3194524@2x.png"
              />
              <div
                className="  absolute right-5 top-5
               "
              >
                <div className=" h-7 w-7 flex justify-center items-center  rounded-small bg-blue">
                  <img
                    className=" h-3 w-3   overflow-hidden "
                    alt=""
                    src="../vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full  text-2xl leading-[125%] font-semibold inline-block">
              Ep 3: Should I raise money for my startup, or not?
            </div>
            <div className="   leading-[150%] inline-block">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </div>

            <div className="  flex  items-center gap-2">
              <div className=" flex h-7 w-7 rounded-base bg-blue justify-center items-center">
                <img
                  loading="lazy"
                  className=" h-2 w-2 "
                  alt=""
                  src="../triangle.svg"
                />
              </div>

              <div className=" text-blue leading-[150%] font-semibold">
                Listen Now
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------- */}
        <div className=" col-span-1 h-full ">
          <div className="  space-y-4 ">
            <div className=" relative">
              <img
                className=" h-full w-full   "
                alt=""
                src="../httpswwwpexelscomphotophotoofwomenhavingconversation3194524@2x.png"
              />
              <div
                className="  absolute right-5 top-5
               "
              >
                <div className=" h-7 w-7 flex justify-center items-center  rounded-small bg-blue">
                  <img
                    className=" h-3 w-3   overflow-hidden "
                    alt=""
                    src="../vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full  text-2xl leading-[125%] font-semibold inline-block">
              Ep 3: Should I raise money for my startup, or not?
            </div>
            <div className="   leading-[150%] inline-block">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </div>

            <div className="  flex  items-center gap-2">
              <div className=" flex h-7 w-7 rounded-base bg-blue justify-center items-center">
                <img
                  loading="lazy"
                  className=" h-2 w-2 "
                  alt=""
                  src="../triangle.svg"
                />
              </div>

              <div className=" text-blue leading-[150%] font-semibold">
                Listen Now
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------- */}
        <div className=" col-span-1 h-full ">
          <div className="  space-y-4 ">
            <div className=" relative">
              <img
                className=" h-full w-full   "
                alt=""
                src="../httpswwwpexelscomphotophotoofwomenhavingconversation3194524@2x.png"
              />
              <div
                className="  absolute right-5 top-5
               "
              >
                <div className=" h-7 w-7 flex justify-center items-center  rounded-small bg-blue">
                  <img
                    className=" h-3 w-3   overflow-hidden "
                    alt=""
                    src="../vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full  text-2xl leading-[125%] font-semibold inline-block">
              Ep 3: Should I raise money for my startup, or not?
            </div>
            <div className="   leading-[150%] inline-block">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </div>

            <div className="  flex  items-center gap-2">
              <div className=" flex h-7 w-7 rounded-base bg-blue justify-center items-center">
                <img
                  loading="lazy"
                  className=" h-2 w-2 "
                  alt=""
                  src="../triangle.svg"
                />
              </div>

              <div className=" text-blue leading-[150%] font-semibold">
                Listen Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
