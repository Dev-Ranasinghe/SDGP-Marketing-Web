import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-header pt-52">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 flex flex-col justify-evenly relative">
            <Image
              src="/images/hero/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px]"
            />
            <Image
              src="/images/hero/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px]"
            />
            <h1 className="text-midnight_text text-4xl md:text-86 text-center lg:text-start font-semibold pt-5">
              SKILLIFY <br />
              Elevate Your Skills. Unlock Your Potential.
            </h1>
            <h3 className="text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8">
              No more guesswork—Skillify’s dynamic roadmap generator helps you
              map out your skills, set clear goals, and track progress in
              real-time. Get the guidance you need to stay on track and achieve
              success faster.
            </h3>
            <div className="pt-8 mx-auto lg:mx-0"></div>
          </div>
          <div className="col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 lg:pt-0 -mt-56">
            <Image
              src="/images/hero/banner.svg"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
