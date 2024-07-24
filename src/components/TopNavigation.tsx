import React, { useState, useEffect, useRef } from 'react';
import BrandButton from './buttons/BrandButton';
import DefaultButton from './buttons/DefaultButton';
import IconButton from './buttons/IconButton';

const TopNavigation: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header id='gau-topnav' className='z-10 fixed top-0 left-0 w-screen p-4 flex flex-row items-center justify-between bg-neutral-950 border-b border-b-neutral-900'>
            <div className='flex flex-row items-center justify-start space-x-8'>
                <div className='flex flex-row items-center justify-start'>
                    <BrandButton title='Главная' brand='Gaurin' path={'/assets/img/favicon.png'} note='' /> {/* "note" - это уведомление о важном событии под названием сайта. */}
                </div>
                <div className='hidden lg:flex flex-row items-center justify-start'>
                    <div className='w-1 h-5 bg-neutral-900 rounded-full'></div>
                </div>
                <div className='hidden lg:flex flex-row items-center justify-start'>
                    <DefaultButton title='Тарифы' url={'/#plans'} text={'Тарифы'} width='px-4' />
                    <DefaultButton title='Документация' url={'/docs'} text={'Документация'} width='px-4' />
                    <DefaultButton title='Панель управления' url={'https://panel.gaurin.org'} text={'Панель управления'} width='px-4' openInNewTab={true} />
                </div>
            </div>
            <div className='flex flex-row items-center justify-end lg:space-x-8'>
                <div className='hidden lg:flex flex-row items-center justify-end'>
                    <IconButton title='Telegram' url={'https://t.me/gaurinorg'} fa={'telegram'} size={'text-lg'} brand={true} newtab={true} />
                    <IconButton title='Discord' url={'https://discord.gaurin.org'} fa={'discord'} size={'text-lg'} brand={true} newtab={true} />
                    <IconButton title='VKontakte' url={'https://vk.com/gaurinorg'} fa={'vk'} size={'text-lg'} brand={true} newtab={true} />
                </div>
                <div className='hidden lg:flex flex-row items-center justify-end'>
                    <div className='w-1 h-5 bg-neutral-900 rounded-full'></div>
                </div>
                <div className='relative flex flex-row items-center justify-end'>
                    <IconButton title='Профиль' onClick={toggleDropdown} fa={'user'} size={'text-lg'} brand={false} />
                    <div ref={dropdownRef} className={`absolute top-full mt-10 right-0 py-4 px-8 w-max lg:w-auto flex flex-col items-start justify-start bg-neutral-950 border border-neutral-900 rounded-2xl ${isDropdownOpen ? '' : 'hidden'}`}>
                        <DefaultButton title='Открыть профиль' url='/profile' text='Открыть профиль' whitespace='nowrap' width='w-full' hidden={false} />
                        <DefaultButton title='Настроить профиль' url='/profile/settings' text='Настроить&nbsp;профиль' width='w-full' hidden={false} />
                        <DefaultButton title='Выйти из аккаунта' url='/auth/logout' text='Выйти из аккаунта' width='w-full' hidden={false} />
                        <DefaultButton title='Войти в аккаунт' url='/auth/signin' text='Вход в аккаунт' width='w-full' hidden={false} />
                        <DefaultButton title='Регистрация' url='/auth/signup' text='Регистрация' width='w-full' hidden={false} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopNavigation;
