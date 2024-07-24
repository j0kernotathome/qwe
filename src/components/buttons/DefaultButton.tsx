export interface ButtonProps {
    id?: string;
    title: string;
    url: string;
    text: string;
    width: string;
    whitespace?: string;
    openInNewTab?: boolean;
    hidden?: boolean;
}

const DefaultButton: React.FC<ButtonProps> = ({ id, title, url, text, width, whitespace, openInNewTab, hidden }) => {
    const handleClick = () => {
        if (openInNewTab) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    };

    return (
        <button id={id} title={title} onClick={handleClick} className={`flex flex-row items-center justify-center ${width} h-12 text-sm font-medium tracking-wider whitespace-${whitespace} text-neutral-500 hover:text-neutral-200 focus:text-neutral-200 onhover onfocus ${hidden ? 'hidden' : ''}}`}>
            <span>{text}</span>
        </button>
    );
};

export default DefaultButton;
