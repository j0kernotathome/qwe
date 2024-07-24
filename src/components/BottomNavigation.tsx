import IconButton from "./buttons/IconButton";

const BottomNavigation: React.FC = () => {
    return (
        <header id='gau-botnav' className='z-10 fixed bottom-0 left-0 w-screen p-4 flex flex-row items-center justify-center bg-neutral-950 border-b border-b-neutral-900'>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <IconButton title='Тарифы' url={'/#plans'} fa="credit-card" size="text-lg" brand={false} newtab={false} />
                <IconButton title='Документация' url={'/docs'} fa="book" size="text-lg" brand={false} newtab={false} />
                <IconButton title='Панель управления' url={'https://panel.gaurin.org'} fa="server" size="text-lg" brand={false} newtab={false} />
                <IconButton title='Панель управления' url={'https://panel.gaurin.org'} fa="ellipsis-vertical" size="text-lg" brand={false} newtab={false} />
            </div>
        </header>
    );
};

export default BottomNavigation;
