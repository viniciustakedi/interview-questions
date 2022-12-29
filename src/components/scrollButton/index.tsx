import { useState } from 'react';
import { FixedButton } from '../../assets/styles/styled-components';

const ScrollButton = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setVisible(true);
        }
        else if (scrolled <= 400) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <FixedButton
            style={{
                transition: 'all 0.35s cubic-bezier(0, 0, 0.32, 1.22)',
                transform: `${visible ? 'scale(1)' : 'scale(0)'}`
            }}
            onClick={scrollToTop}
        >
            🚀
        </FixedButton>
    );
}

export default ScrollButton;