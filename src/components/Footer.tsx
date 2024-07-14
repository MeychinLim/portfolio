import { GithubCircle, Instagram, Linkedin, Telegram, X } from 'iconoir-react';

function Footer() {
    return (
        <div className='bottom-0 w-full font-mono'>
            <footer className='footer footer-center p-10 bg-gray-400/10 rounded'>
                <nav>
                    <div className='grid grid-flow-col gap-4'>
                        <a href='https://t.me/meychinlim' target='_blank'>
                            <Telegram className='w-10 h-10' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/meychin-lim-b9a81125b/'
                            target='_blank'
                        >
                            <Linkedin className='w-10 h-10' />
                        </a>
                        <a href='https://github.com/meychinlim' target='_blank'>
                            <GithubCircle className='w-10 h-10' />
                        </a>
                        <a href='https://github.com/meychinlim' target='_blank'>
                            <X className='w-10 h-10' />
                        </a>
                        <a href='https://github.com/meychinlim' target='_blank'>
                            <Instagram className='w-10 h-10' />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by LIM MEYCHIN</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
