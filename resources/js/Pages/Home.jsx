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
                    title={'CONTROLA TUS RUTINAS'}
                    li={<>
                        <li>Registro de <span className="text-lilaPrincipal">series y repes</span></li>
                        <li>Control preciso del RIR</li>
                        <li><span className="text-lilaPrincipal">Acceso rapido</span> al historial</li>
                        <li>Control de las cargas</li>
                        <li>Monitoreo de <span className="text-lilaPrincipal">descansos</span></li>
                    </>}>
            </MobileAndDesktopHomeContainer>
                <MobileAndDesktopHomeContainer
                    Imageorientation={'right'}
                    title={'PRIORIZA TUS OBJETIVOS'}
                    li={<>
                        <li className="text-lilaPrincipal">Rutinas personalizadas</li>
                        <li>Hechas por profesionales</li>
                        <li>Conoce tus <span className="text-lilaPrincipal">calorias</span> necesarias</li>
                        <li>Busca tu objetivo</li>
                        <li>Calcula tu <span className="text-lilaPrincipal">repeticion maxima</span></li>
                    </>}>
                </MobileAndDesktopHomeContainer>
                <FunctionsGrid></FunctionsGrid>
                <div className=' mt-28 ml-12 mr-12 rounded-xl bg-custom-gradient3'>
                    <h2 className='text-responsive-h2 inline-block'>Empezar</h2>
                </div>
            </MainLayout>
    );
}
