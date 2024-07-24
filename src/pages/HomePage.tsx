import React, { useState, useEffect } from 'react';
import SimpleButton from '../components/buttons/SimpleButton';
import FancyButton from '../components/buttons/FancyButton';
import BenefitCard, { BenefitCardProps } from '../components/cards/BenefitCard';

// TODO
// import PlanCard, { PlanCardProps } from '../components/cards/PlanCard';
import { useInView } from 'react-intersection-observer';

// Главная страница
const HomePage: React.FC = () => {
    const benefits: BenefitCardProps[] = [
        {
            title: 'Стабильность',
            line1: 'Обеспечиваем стабильность благодаря круглосуточному мониторингу и производительности серверов.',
            line2: 'Используем современные технологии и резервные системы.',
            delay: 0,
        },
        {
            title: 'Безопасность',
            line1: 'Обеспечиваем изолированную среду, которая защищает ваши данные от внешних угроз и непредвиденных сбоев.',
            line2: 'DDOS защита уровней L3-L7 и частые обновления безопасности.',
            delay: 200, // задержка для второй карточки
        },
        {
            title: 'Цены',
            line1: 'Низкая стоимость тарифов связана с оптимизированной инфраструктурой и минимизацией расходов, благодаря чему мы и предлагаем высокое качество по таким низким ценам.',
            delay: 400, // задержка для третьей карточки
        },
    ];

    // TODO
    // const plans: PlanCardProps[] = [
    //     {
    //         id: '0',
    //         title: 'PLAN0',
    //         price: '100',
    //         // discount: '10%',
    //         cpu: '100',
    //         vcpu: '1',
    //         ram: '2048mb RAM',
    //         ssd: '32gb SSD',
    //     },
    // ];

    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true, // анимация срабатывает только один раз
        threshold: 0.5, // порог в 50% видимости
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <>
            {/* Первая секция на главной странице / Геройский (hero) блок */}
            <section id="gau-hero" className="-mt-20 w-full min-h-screen flex flex-col items-center justify-center">

                <div className="w-full flex flex-row items-center justify-between">

                    <div className="flex flex-col lg:flex-shrink-0 items-start justify-start">

                        {/* Заголовок */}
                        <h1 className="text-4xl font-bold leading-none break-normal hyphens-manual">
                            Ваши <span className="text-blue-500 font-alternates font-black">успехи</span> начинаются&nbsp;
                            <br className="hidden lg:flex"/>
                            со <span className="text-blue-500 font-alternates font-black">стабильного</span> хостинга.
                        </h1>

                        {/* Описание с кнопками */}
                        <p className="flex flex-col lg:flex-row lg:items-center text-sm font-medium tracking-wider mt-4 mb-6 lg:space-x-4">
                            <span>Поэтому люди и выбирают нас.</span>
                            <div className="flex flex-row items-center space-x-2">
                                <SimpleButton title="Подробнее" text="Подробнее" size="sm" url="/#benefits" />
                                <SimpleButton title="Discord" text="Discord" size="sm" url="https://discord.gaurin.org" newtab={true} />
                            </div>
                        </p>

                        {/* Кнопка "Создать сервер" */}
                        <FancyButton title="Создать сервер" url="/#plans" text="Создать сервер" width="px-6" height="py-2.5" />

                    </div>

                    {/* Картинка */}
                    <div className='hidden lg:flex w-full h-80 bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(/assets/img/favicon.png)` }}></div>
                
                </div>

            </section>
            <section id="gau-content" className="w-full flex flex-col items-start justify-start">
                {/* Заголовок "Преимущества" с анимацией */}
                <h1 ref={ref} id="benefits" className={`text-xl font-semibold mt-20 mb-8 ${isVisible ? 'animate-slideInRight' : 'text-transparent'}`}>
                    Преимущества
                </h1>

                {/* Карточки "Преимущества" */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>

                {/* Заголовок "Тарифы" */}
                <h1 id="plans" className="text-xl font-semibold mt-20 mb-8">Доступные тарифы</h1>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* TODO */}
                    {/* {plans.map((plan, index) => (
                        <PlanCard key={index} {...plan} />
                    ))} */}
                </div>
            </section>
        </>
    );
};

export default HomePage;
