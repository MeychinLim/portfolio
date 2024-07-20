import { useRouter } from 'next/navigation';
import ThemeController from './ThemeController';

function Navbar() {
    const router = useRouter();

    return (
        <div className='sticky top-0 w-full font-mono shadow-lg z-50 text-base-content'>
            <div className='navbar bg-neutral'>
                <div className='navbar-start'>
                    <a
                        className='btn btn-ghost text-xl'
                        onClick={() => router.push('/')}
                    >
                        Portfolio
                    </a>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <li onClick={() => router.push('/projects')}>
                            <a>Projects</a>
                        </li>
                        <li onClick={() => router.push('/experiences')}>
                            <a>Experiences</a>
                        </li>
                        <li onClick={() => router.push('/contact')}>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <ThemeController />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
