import {Head} from "@inertiajs/react";
import {Header} from "@/Layouts/Header.jsx";
import {Footer} from "@/Layouts/Footer.jsx";

export default function MainLayout({ children,auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Home" />
            <div className='grid grid-rows-[auto,1fr,auto]'>
                <main className='p-2 bg-custom-gradient'>
                    {children}
                </main>
            </div>
        </>
    );
}
