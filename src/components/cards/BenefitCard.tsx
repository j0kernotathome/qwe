import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export interface BenefitCardProps {
    title: string;
    line1: string;
    line2?: string;
    delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, line1, line2, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                setIsVisible(true);
            }, delay);
        }
    }, [inView, delay]);

    return (
        <div ref={ref} className={`flex flex-col items-start justify-start p-8 bg-neutral-950 border border-neutral-900 rounded-2xl hover:scale-[1.025] onhover ${isVisible ? 'animate-slideIn' : 'opacity-0'}`}>
            <h1 className={`text-lg font-semibold mb-4 ${isVisible ? 'animate-fadeIn' : ''}`}>{title}</h1>
            <p className={`text-sm font-medium tracking-wider text-neutral-500 ${isVisible ? 'animate-fadeIn' : ''}`}>{line1}</p>
            {line2 && (<p className={`text-sm font-medium tracking-wider text-neutral-500 mt-1 ${isVisible ? 'animate-fadeIn' : ''}`}>{line2}</p>)}
        </div>
    );
};

export default BenefitCard;
