import { useState } from 'react';

const useTooltip = () => {
    const [tooltipStyle, setTooltipStyle] = useState({ visibility: 'hidden', opacity: 0 });

    const handleMouseEnter = () => {
        setTooltipStyle((prevStyle) => ({ ...prevStyle, visibility: 'visible', opacity: 1 }));
    };

    const handleMouseMove = (e) => {
        const windowWidth = window.innerWidth;
        const tooltipWidth = 300; // Assuming the tooltip width is 300px
        let left = e.clientX + 10;
        let top = e.clientY + 10;

        if (windowWidth - e.clientX < tooltipWidth) {
            left = e.clientX - tooltipWidth - 10;
        }

        setTooltipStyle((prevStyle) => ({ ...prevStyle, left: `${left}px`, top: `${top}px` }));
    };

    const handleMouseLeave = () => {
        setTooltipStyle((prevStyle) => ({ ...prevStyle, visibility: 'hidden', opacity: 0 }));
    };

    return { tooltipStyle, handleMouseEnter, handleMouseMove, handleMouseLeave };
};

export default useTooltip;
