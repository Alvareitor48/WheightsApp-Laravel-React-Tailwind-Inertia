import { Head, Link } from '@inertiajs/react';
import {Header} from "@/Layouts/Header.jsx";
import {MobileAndDesktopHomeContainer} from "@/Layouts/MobileAndDesktopContainer.jsx";
import {FirstHomeMainContainer} from "@/Layouts/FirstHomeMainContainer.jsx";
import {FunctionsGrid} from "@/Layouts/FunctionsGrid.jsx";
import {Footer} from "@/Layouts/Footer.jsx";
export default function Home({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Home" />
            <div className='grid grid-rows-[auto,1fr,auto]'>
                <Header></Header>
                <main className='p-2 bg-custom-gradient'>
                    <FirstHomeMainContainer></FirstHomeMainContainer>
                    <MobileAndDesktopHomeContainer
                        Imageorientation={'left'}
                        title={'Controla tus rutinas'}
                        li={<>
                            <li>Registro de series y repes</li>
                            <li>Control preciso del RIR</li>
                            <li>Acceso rapido al historial</li>
                            <li>Control de las cargas</li>
                            <li>Monitoreo de descansos</li>
                        </>}>
                    </MobileAndDesktopHomeContainer>
                    <MobileAndDesktopHomeContainer
                        Imageorientation={'right'}
                        title={'Prioriza tus objetivos'}
                        li={<>
                            <li>Calcula tu repeticion maxima</li>
                            <li>Conoce tus calorias necesarias</li>
                            <li>Busca tu objetivo</li>
                            <li>Rutinas personalizadas</li>
                            <li>Hechas por profesionales</li>
                        </>}>
                    </MobileAndDesktopHomeContainer>
                    <FunctionsGrid></FunctionsGrid>
                    <div className=' mt-28 ml-12 mr-12 rounded-xl bg-custom-gradient3'>
                        <h2 className='text-responsive-h2 inline-block'>Empezar</h2>
                    </div>
                </main>
                <Footer></Footer>
            </div>
            {/*auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )*/}
    </>
    );
}
