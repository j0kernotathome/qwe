export interface ButtonProps {
    title: string;
    text: string;
    position?: string;
    size: string;
    url: string;
    newtab?: boolean;
}

const SimpleButton: React.FC<ButtonProps> = ({ title, text, position, size, url, newtab }) => {
    const handleClick = () => {
        if (newtab) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    }

    return (
        <button title={title} onClick={handleClick} className={`flex flex-row items-center justify-center text-${size} ${position} font-medium tracking-wider text-neutral-500 decoration-neutral-500 hover:underline hover:underline-offset-2`}>
            <span>{text}</span>
        </button>
    );
};

export default SimpleButton;
