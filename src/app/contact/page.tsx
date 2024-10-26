'use client';

import { Mail, MapPin, Phone } from 'iconoir-react';

function Page() {
    const contactDetail = {
        phone: { number: '077 738 709', link: '+85577738709' },
        email: 'meychin.lm@gmail.com',
        address: {
            location: 'Phnom Penh Capital City, Cambodia',
            map: 'https://maps.app.goo.gl/PLXYqk4xpdRn3fBP6'
        }
    };

    return (
        <div className='mt-10 h-full'>
            <div className='flex justify-center place-content-center items-center h-full lg:my-20 xl:my-44 animate-float'>
                <div className='bg-gray-900/70 rounded-box px-8 py-10 md:p-14'>
                    <div className='text-xl md:text-2xl pb-4'>CONTACT</div>
                    <div className='p-4 flex flex-row gap-3 group'>
                        <Phone className='duration-500 text-primary/75 group-hover:scale-125' />
                        <a
                            href={`tel:${contactDetail?.phone?.link}`}
                            className='py-1 text-lg transform duration-500 group-hover:translate-x-3 group-hover:text-primary/75'
                        >
                            {contactDetail?.phone?.number}
                        </a>
                    </div>
                    <div className='p-4 flex flex-row gap-3 group'>
                        <Mail className='duration-500 text-primary/75 group-hover:scale-125' />
                        <a
                            href={`mailto:${contactDetail?.email}`}
                            className='py-1 text-lg transform duration-500 group-hover:translate-x-3 group-hover:text-primary/75'
                        >
                            {contactDetail?.email}
                        </a>
                    </div>
                    <div className='p-4 flex flex-row gap-3 group'>
                        <MapPin className='duration-500 text-primary/75 group-hover:scale-125' />
                        <a
                            href={contactDetail?.address?.map}
                            target='_blank'
                            className='py-1 text-lg transform duration-500 group-hover:translate-x-3 group-hover:text-primary/75'
                        >
                            {contactDetail?.address?.location}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
