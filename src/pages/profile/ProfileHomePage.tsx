import DefaultButton from "../../components/buttons/DefaultButton";
import SimpleButton from "../../components/buttons/SimpleButton";

// WIP (tomorrow)
// SANITIZE HTML ОБЯЗАТЕЛЬНЫЙ
const ProfileHomePage: React.FC = () => {
    return (
        <>
            <section id='gau-container' className="w-full min-h-screen flex flex-col items-start justify-start">
                <h1 className="w-full text-xl font-semibold text-neutral-200 my-8">Мой профиль</h1>
                <div className="w-full flex flex-row items-start justify-between bg-neutral-950 border border-neutral-900 rounded-2xl">
                    <div className="p-8 flex flex-col flex-shrink-0 items-start justify-start bg-neutral-950 border-r border-r-neutral-900 rounded-l-xl">
                        <DefaultButton title='Мой профиль' url='/profile' text='Мой профиль' width='w-full' whitespace='whitespace-nowrap' openInNewTab={false} hidden={false} />
                        <DefaultButton title='Безопасность' url='/profile/security' text='Безопасность' width='w-full' whitespace='whitespace-nowrap' openInNewTab={false} hidden={false} />
                        <DefaultButton title='Настройки' url='/profile/settings' text='Настройки' width='w-full' whitespace='whitespace-nowrap' openInNewTab={false} hidden={false} />
                    </div>
                    <div className="w-full p-8 flex flex-col items-start justify-start">
                        <h1 className="text-lg font-semibold mb-8">Профиль</h1>
                        <div className="flex flex-row items-center justify-between space-x-8 mb-16">
                            <div className="w-24 h-24 bg-black bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(/assets/img/favicon.png)` }}></div>
                            <div className="flex flex-col items-start justify-start">
                                <h1 className="text-lg font-semibold">О себе</h1>
                                <SimpleButton title='Редактировать профиль' text='Редактировать профиль' size="xs" url='/profile/edit' newtab={false} />
                            </div>
                        </div>
                        <h1 className="text-lg font-semibold mb-8">О себе</h1>
                        <p className="text-xs font-medium tracking-wider text-neutral-500 mb-8">Макс. 256 символов</p>
                        <textarea
                            className="w-full p-4 border-2 bg-neutral-950 text-neutral-400 border-neutral-900 rounded-xl text-start whitespace-pre-wrap resize-none mb-4 onhover outline-none focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-dashed"
                            value={'Ждём Backend :D'}
                            placeholder="Введите описание"
                            rows={5}
                            maxLength={256}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileHomePage;
