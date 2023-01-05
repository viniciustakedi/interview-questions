import { useState } from 'react';
import { FixedButton, Tooltip } from '../../assets/styles/styled-components';

interface IScrollButton {
    tooltip?: {
        position?: 'top' | 'bottom' | 'left' | 'right',
        text: string,
        width?: number,
        backgroundColor?: string;
        color?: string;
    },
};

const ScrollButton: React.FC<IScrollButton> = ({ tooltip }) => {
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
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0, 0, 0.32, 1.22)',
                transform: `${visible ? 'scale(1)' : 'scale(0)'}`,
                opacity: `${visible ? 1 : 0}`
            }}
            tooltip={{
                position: "left",
                left: -180,
                top: -5,
                text: "Voltar ao topo",
                backgroundColor: '#122038',
                color: '#fff',
                width: 100,
                removePositionRelative: true,
            }}
            onClick={scrollToTop}
        >
            🚀
        </FixedButton>
    );
}

export default ScrollButton;