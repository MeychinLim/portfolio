import { Instagram, X } from 'iconoir-react';
import { dependencies } from '@/../package.json';
import SocialMedia from './SocialMedia';

function Footer() {
    return (
        <div className='bottom-0 w-full font-mono'>
            <footer className='footer footer-center p-10 bg-gray-400/10 rounded'>
                <div className='block md:hidden'>
                    <SocialMedia />
                </div>
                <aside>
                    <p>Built with NextJs {dependencies?.next}</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
