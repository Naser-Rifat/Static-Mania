import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <div className="lg:grid grid-cols-2 font-see-more w-[80%] mx-auto">
        <div className="col-span-1  w-full  block py-10">
          <div className="  w-full  text-black block">
            <b className=" text-4xl leading-[110%] lg:inline-block ">
              About Finsweet Podcast{" "}
            </b>
            <div className=" leading-[28px] block text-justify md:text-start">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
          </div>
          <div className="h-12 flex md:mt-4">
            <button className=" text-white bg-blue border-none w-40  leading-8 text-lg h-12 flex justify-center items-center ">
              Subscribe Now!
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
