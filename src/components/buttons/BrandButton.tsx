export interface ButtonProps {
    title: string;
    brand: string;
    path: string;
    note?: string;
}

const BrandButton: React.FC<ButtonProps> = ({ title, brand, path, note }) => {
    const handleClick = () => {
        window.location.href = '/';
    };

    return (
        <button title={title} onClick={handleClick} className='group flex flex-row items-center justify-center space-x-4 pr-4 text-lg font-semibold text-neutral-200 hover:text-blue-500 focus:text-neutral-500 onhover onfocus'>
            <div className='w-12 h-12 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${path})` }}></div>
            <div className="flex flex-col items-center justify-start -space-y-1">
                <h1>{brand}</h1>
                {note && <p className="text-xs bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 to-pink-400 font-bold group-hover:font-medium group-hover:tracking-widest group-hover:bg-transparent group-hover:text-blue-500 tracking-wider onhover">{note}</p>}
            </div>
        </button>
    );
};

export default BrandButton;
