import Image from "next/image";

const Client = () => {
  return (
    <div className=" space-x-14  w-full md:block flex justify-center items-center  h-[37px] text-2xl   my-11 ">
      <div className=" ml-16 tracking-[-1px] leading-[36px]  text-lg font-semibold">
        Podcast Available On
      </div>
      <div className="ml-14">
        <Image
          width={150}
          height={100}
          className="w-8 h-8 "
          alt=""
          src="/spotify1.svg"
        />
      </div>
      <div>
        <Image
          width={200}
          height={100}
          className="w-11 h-11 "
          alt=""
          src="/google-podcast1.svg"
        />
      </div>
      <div>
        <Image
          width={200}
          height={100}
          className="w-11 h-11 "
          alt=""
          src="/sound-cloud.svg"
        />
      </div>
      <div>
        <Image
          width={200}
          height={100}
          className="w-11 h-11 "
          alt=""
          src="/apple-podcast1.svg"
        />
      </div>
    </div>
  );
};

export default Client;
