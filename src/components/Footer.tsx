import { Instagram, Linkedin, X } from 'iconoir-react';

function Footer() {
    return (
        <div className='fixed bottom-0 w-full font-mono'>
            <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
                <nav>
                    <div className='grid grid-flow-col gap-4'>
                        <a>
                            <X className='w-10 h-10' />
                        </a>
                        <a>
                            <Linkedin className='w-10 h-10' />
                        </a>
                        <a>
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
