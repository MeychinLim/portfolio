import { useRouter } from 'next/navigation';
import ThemeController from './ThemeController';

function Navbar() {
    const router = useRouter();

    return (
        <div className='w-full font-mono'>
            <div className='navbar bg-base-100'>
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
                        <li onClick={() => router.push('/about')}>
                            <a>About</a>
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
