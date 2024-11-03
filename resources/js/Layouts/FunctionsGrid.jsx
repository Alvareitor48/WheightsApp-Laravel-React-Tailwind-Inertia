import { motion } from 'framer-motion'
import buscarRutina from '@/assets/images/buscarRutina.png'
import rm from '@/assets/images/rm.png'
import calorias from '@/assets/images/calorias3.png'
import tutorialesGif from '@/assets/images/tutorialesGif.gif'
import tutorialesImg from '@/assets/images/tutorialesImg.png'
import { useState } from 'react'
import { HomeGrid } from './HomeGrid'

export const FunctionsGrid = () => {
    const [isHover, setHover] = useState(false);
    return (
        <div className='mt-40 px-28 relative grid grid-cols-3 grid-rows-3 custom-flex-wrap-first-title:grid-cols-2 custom-flex-wrap-first-title:grid-rows-4 custom-flex-wrap-first-title:px-14 custom-flex-wrap-little-devices:px-2'>
            <HomeGrid
                classNameDiv='m-2 p-16 rounded-xl bg-custom-gradient3 col-start-1 col-end-3 row-start-1 row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2'
                textH2='Crea tu rutina'
            ></HomeGrid>
            <HomeGrid
                classNameDiv='m-2 p-2 rounded-xl col-start-1 col-end-2 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'
                DivExtras={{style: { backgroundImage: `url(${rm})`, backgroundSize: 'cover' }}}
                textH2='1RM'
            ></HomeGrid>
            <HomeGrid
                classNameDiv='m-2 p-2 rounded-xl bg-custom-gradient5 col-start-2 col-end-3 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-2 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'
                DivExtras={{style: { backgroundImage: `url(${calorias})`, backgroundSize: 'cover' }}}
                textH2='Calorias'
                textColorAndExtrasH2={'text-azulFondo'}
            ></HomeGrid>
            <HomeGrid
                classNameDiv='relative m-2 rounded-xl bg-custom-gradient4 col-start-3 col-end-4 row-start-1 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4'
                Img={<img className='h-[100%] m-auto' src={buscarRutina} alt='Buscar rutina' draggable="false"></img>}
                textH2='Busca la rutina perfecta'
                textColorAndExtrasH2={'text-azulFondo absolute right-0 w-[100%] z-10'}
            ></HomeGrid>
            <HomeGrid
                classNameDiv='overflow-hidden relative m-2 p-2 rounded-xl bg-custom-gradient3 col-start-1 col-end-4 row-start-3 row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-4 custom-flex-wrap-first-title:row-end-5'
                DivExtras={{onMouseEnter: () => setHover(true),onMouseLeave: () => setHover(false)}}
                Img={<motion.img className='h-[100%] m-auto'
                                 src={(isHover ? tutorialesGif : tutorialesImg)}
                                 alt='Buscar rutina'
                                 transition={{ duration: 0.3 }}
                                 draggable="false"
                ></motion.img>}
                textH2='Tutorial de ejercicios'
                textColorAndExtrasH2={'absolute right-0 w-[100%] z-10'}
            ></HomeGrid>
        </div>
    )
}
