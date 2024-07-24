import SimpleButton from "./buttons/SimpleButton";

const Footer: React.FC = () => {
    return (
        <footer className="mb-20 lg:mb-0 flex flex-col lg:flex-row items-start justify-between px-4 lg:px-32 py-16 bg-neutral-950 border-t border-t-neutral-900">
            <div className="flex flex-col items-start justify-start space-y-2">
                <div className="flex flex-row items-center justify-start space-x-4">
                    <div className="w-12 h-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/assets/img/favicon.png)` }}></div>
                    <p className="text-sm font-medium tracking-wider text-neutral-500">&copy; 2024 Gaurin LLC</p>
                </div>
                <a href="//www.dmca.com/Protection/Status.aspx?id=a1897ba4-51ce-40fa-96f4-20c1fde46502" title="DMCA.com Protection Status" className="dmca-badge"> <img src="//images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=//www.dmca.com/Protection/Status.aspx?id=a1897ba4-51ce-40fa-96f4-20c1fde46502" alt="DMCA.com Protection Status" /></a>
            </div>
            <div className="flex flex-col items-end justify-end space-y-2">
                <SimpleButton title="Политика конфиденциальности" text="Политика конфиденциальности" position="text-end" size="xs" url="/privacy-policy" newtab={false} />
                <SimpleButton title="Пользовательское соглашение" text="Пользовательское соглашение" position="text-end" size="xs" url="/user-agreement" newtab={false} />
                <SimpleButton title="Политика обработки данных" text="Политика обработки данных" position="text-end" size="xs" url="/privacy-policy" newtab={false} />
                <SimpleButton title="Договор оферты" text="Договор оферты" url="/offer-contract" position="text-end" size="xs" newtab={false} />
                <SimpleButton title="Другое" text="Другое" url="/juridical" position="text-end" size="xs" newtab={false} />
                <SimpleButton title="Контакты" text="Контакты" url="/docs/contact" position="text-end" size="xs" newtab={false} />
            </div>
        </footer>
    );
}

export default Footer;
