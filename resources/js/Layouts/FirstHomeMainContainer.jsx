import homeImage from '@/assets/images/HomeImage.png'
import { motion } from 'framer-motion'
import {Link} from "@inertiajs/react";
export const FirstHomeMainContainer = () => {
    return (
        <div className='mt-8 relative flex flex-wrap justify-around'>
            <motion.div className='w-responsive-width text-start custom-flex-wrap-first-title:text-center'
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
            >
                <h1 className='text-responsive-h1 inline-block leading-tight'>La web que mejora tus entrenamientos</h1>
                <h4 className='text-responsive-h4 inline-block pt-8'>Maneja tu estilo de vida de la forma correcta con ayuda de expertos en el fitness</h4>
            </motion.div>
            <motion.div className='relative py-8 w-responsive-width'
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
            >
                <img className='h-responsive-height-first-image rounded-full m-auto' src={homeImage} alt='People doing exercise'></img>

                <div className="relative bottom-48 custom-flex-wrap-little-devices:bottom-28">
                    <motion.button
                        className="bg-lilaPrincipal pb-1 mt-10 w-responsive-first-button-width h-responsive-first-button-height text-responsive-h4 rounded-xl"
                        whileHover={{ backgroundColor: "#8F3985", scale: 1.1 }}
                    >
                        <Link href={route('AdminRoutines')}>Empezar</Link>

                    </motion.button>
                </div>


            </motion.div>
        </div>
    )
}
