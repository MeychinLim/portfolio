import { GithubCircle, Linkedin, Telegram } from 'iconoir-react';

function SocialMedia() {
    return (
        <div className='md:fixed top-96 right-10 z-50'>
            <div className='flex flex-row md:flex-col gap-4'>
                <a href='https://t.me/meychinlim' target='_blank'>
                    <Telegram className='w-10 h-10 hover:text-accent hover:scale-125 transition-transform duration-500 block' />
                </a>
                <a
                    href='https://www.linkedin.com/in/meychin-lim-b9a81125b/'
                    target='_blank'
                >
                    <Linkedin className='w-10 h-10 hover:text-accent hover:scale-125 transition-transform duration-500 block' />
                </a>
                <a href='https://github.com/meychinlim' target='_blank'>
                    <GithubCircle className='w-10 h-10 hover:text-accent hover:scale-125 transition-transform duration-500 block' />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
