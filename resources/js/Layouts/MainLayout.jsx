import {Head} from "@inertiajs/react";
import {Header} from "@/Layouts/Header.jsx";
import {Footer} from "@/Layouts/Footer.jsx";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";

export default function MainLayout({ children,auth, laravelVersion, phpVersion }) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Actualizar posición del cursor
    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <>
            <div className='grid grid-rows-[auto,1fr,auto]'>
                <Header></Header>
                <main className='mt-14 p-2 bg-black'>
                    <motion.div
                        className="fixed pointer-events-none bg-white rounded-full"
                        style={{
                            width: "1400px",
                            height: "1400px",
                            background: 'radial-gradient(circle, rgba(106, 5, 116, 0.6), transparent 55%)',
                            x: cursorPosition.x-700,
                            y: cursorPosition.y-750,
                        }}
                        // Opcional: ajustar transición para hacerlo más suave
                        transition={{type: "spring", damping: 20, stiffness: 500}}
                    />
                    {children}
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}
