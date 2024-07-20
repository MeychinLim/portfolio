import { Mail, MapPin, Phone } from 'iconoir-react';

function Page() {
    return (
        <div>
            <div className='flex justify-center items-center my-20'>
                <div className='card bg-gray-900/70 rounded-box p-14'>
                    <div className='pb-4'>CONTACT</div>
                    <div className='p-4 flex flex-row gap-3'>
                        <Phone />
                        <a href='tel:+85577738709' className='py-1 text-lg'>
                            077 738 709
                        </a>
                    </div>
                    <div className='p-4 flex flex-row gap-3'>
                        <Mail />
                        <a
                            href='mailto:meychin.lm@gmail.com'
                            target='_blank'
                            className='py-1 text-lg'
                        >
                            meychin.lm@gmail.com
                        </a>
                    </div>
                    <div className='p-4 flex flex-row gap-3'>
                        <MapPin />
                        <a
                            href='https://maps.app.goo.gl/PLXYqk4xpdRn3fBP6'
                            target='_blank'
                            className='py-1 text-lg'
                        >
                            Phnom Penh Capital City, Cambodia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
