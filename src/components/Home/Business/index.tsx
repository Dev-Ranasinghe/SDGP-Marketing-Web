import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Business = () => {
  return (
    <section>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <h2 className="text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start !leading-140">
              Make smarter career moves with Skillify.
            </h2>
            <h3 className="text-black/75 text-lg font-normal text-center lg:text-start pt-3 !leading-180">
              Navigate your professional growth with confidence—Skillify’s
              dynamic roadmap generator helps you identify the right skills, set
              achievable goals, and track progress toward your dream career.
            </h3>
          </div>
          <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
            <Image
              src="/images/business/business.svg"
              alt="business"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
