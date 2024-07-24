import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export interface PlanCardProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discount?: number;
    cpu: number;
    ram: number;
    ssd: number;
    delay?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ id, title, description, price, discount, cpu, ram, ssd, delay }) => {
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
        <>
            {/* TODO */}
        </>
    );
};

export default PlanCard;
