export interface ButtonProps {
    id?: string;
    title: string;
    url?: string;
    onClick?: () => void;
    fa?: string;
    size?: string;
    brand?: boolean;
    newtab?: boolean;
}

const IconButton: React.FC<ButtonProps> = ({ title, url, onClick, fa, size, brand, newtab }) => {
    const handleClick = () => {
        if (url) {
            if (newtab) {
                window.open(url, '_blank');
            } else {
                window.location.href = url;
            }
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <button title={title} onClick={handleClick} onMouseDown={e => e.stopPropagation()} className={`flex flex-row items-center justify-center w-12 h-12 ${size} font-medium tracking-wider text-neutral-500 hover:text-neutral-200 focus:text-neutral-200 onhover onfocus`} {...(onclick && { onClick: handleClick })}>
            <span className={`${brand ? 'fab' : 'fas'} fa-${fa}`}></span>
        </button>
    );
};

export default IconButton;
