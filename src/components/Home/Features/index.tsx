import Image from "next/image";
import Link from "next/link";
import { featureData } from "@/app/api/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-midnight_text text-center mb-10">
          Amazing Features of Skillify
        </h2>
        <p className="text-black/60 text-lg text-center max-w-70% mx-auto">
          Unlock your full potential with Skillify’s dynamic roadmap generator.
          Get personalized career paths, skill recommendations, and real-time
          progress tracking—all designed to help you achieve your goals faster
          and smarter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {featureData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-featureShadow"
            >
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={55}
                height={55}
                className="mb-2"
              />
              <h3 className="text-2xl font-semibold text-black mt-5">
                {item.heading}
              </h3>
              <h4 className="text-lg text-black/50 my-2">{item.paragraph}</h4>
              <Link
                href={item.link}
                className="text-primary hover:text-blue-700 text-xl font-medium flex items-center gap-2 pt-10 pb-2"
              >
                Check out
                <Icon icon="tabler:arrow-right" className="text-2xl" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
