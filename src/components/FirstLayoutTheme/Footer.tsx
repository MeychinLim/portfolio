import next from "@/../package.json";
import SocialMedia from "./SocialMedia";

function Footer() {
    return (
        <footer className='footer footer-center p-10 bg-gray-400/10 rounded'>
            <div className='block lg:hidden'>
                <SocialMedia />
            </div>
            <aside>
                <p>Built with NextJs {next?.dependencies?.next}</p>
            </aside>
        </footer>
    );
}

export default Footer;
