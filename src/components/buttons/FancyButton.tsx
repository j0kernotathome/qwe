export interface ButtonProps {
    title: string;
    url: string;
    text: string;
    width: string;
    height: string;
}

const FancyButton: React.FC<ButtonProps> = ({ title, url, text, width, height }) => {
    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <button title={title} onClick={handleClick} className={`flex flex-row items-center justify-center ${width} ${height} text-sm font-medium tracking-wider bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 rounded-2xl onhover onfocus`}>
            <span>{text}</span>
        </button>
    );
};

export default FancyButton;
