import { ArrowUpCircle } from 'iconoir-react';
import { useEffect, useState } from 'react';

function ScrollToTop() {
    const [showButton, setShowButton] = useState<boolean>(false);

    function scrollToTop(): void {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScrollButtonVisible = () => {
            window.pageYOffset > 300
                ? setShowButton(true)
                : setShowButton(false);
        };

        window.addEventListener('scroll', handleScrollButtonVisible);

        return () => {
            window.addEventListener('scroll', handleScrollButtonVisible);
        };
    }, []);

    return (
        <div className='fixed bottom-10 right-10 z-50'>
            {showButton && (
                <button
                    className='animate-bounce'
                    onClick={() => scrollToTop()}
                >
                    <ArrowUpCircle className='w-10 h-10' />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
