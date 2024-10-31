import {MobileAndDesktopHomeContainer} from "@/Layouts/MobileAndDesktopContainer.jsx";
import {FirstHomeMainContainer} from "@/Layouts/FirstHomeMainContainer.jsx";
import {FunctionsGrid} from "@/Layouts/FunctionsGrid.jsx";
import MainLayout from "@/Layouts/MainLayout.jsx";
import {Head} from "@inertiajs/react";
export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
            <MainLayout>
                <Head title="Home" />
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
            </MainLayout>
    );
}
