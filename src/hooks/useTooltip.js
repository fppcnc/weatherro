import { useState } from 'react';

const useTooltip = () => {
    const [tooltipStyle, setTooltipStyle] = useState({ visibility: 'hidden', left: '0px', top: '0px' });

    const handleMouseEnter = () => {
        setTooltipStyle(prevStyle => ({ ...prevStyle, visibility: 'visible' }));
    };

    const handleMouseMove = (e) => {
        setTooltipStyle({ visibility: 'visible', left: `${e.clientX + 10}px`, top: `${e.clientY + 10}px` });
    };

    const handleMouseLeave = () => {
        setTooltipStyle(prevStyle => ({ ...prevStyle, visibility: 'hidden' }));
    };

    return {
        tooltipStyle,
        handleMouseEnter,
        handleMouseMove,
        handleMouseLeave,
    };
};

export default useTooltip;
