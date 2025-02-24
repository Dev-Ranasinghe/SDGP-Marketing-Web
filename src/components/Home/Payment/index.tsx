import Image from 'next/image';
import Link from 'next/link';
import { Icon } from "@iconify/react/dist/iconify.js";

const Payment = () => {

    return (
        <section>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6'>
                        <Image src="/images/roadmap/roadmap.jpg" alt="learning roadmap" width={600} height={500} />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start !leading-140'>
                            It's time to take control of your career growth.
                        </h2>
                        <p className='text-black/75 text-lg font-normal text-center lg:text-start !leading-180 pt-3'>
                            Skillify’s dynamic roadmap generator helps you build the perfect learning path, track your progress, and reach your career goals faster than ever.
                        </p>
                        <Link href={'/'} className="text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0">
                            Learn more
                            <Icon
                                icon="tabler:arrow-right"
                                className="text-2xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Payment;