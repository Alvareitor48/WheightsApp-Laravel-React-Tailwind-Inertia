import { motion } from 'framer-motion'
import { useState } from 'react'
import { HomeGrid } from './HomeGrid'

export const FunctionsGrid = () => {
    const [isHover, setHover] = useState(false);
    return (
        <div className='mt-40 px-28 relative grid grid-cols-3 grid-rows-3 custom-flex-wrap-first-title:grid-cols-2 custom-flex-wrap-first-title:grid-rows-4 custom-flex-wrap-first-title:px-14 custom-flex-wrap-little-devices:px-2'>
            <HomeGrid
                classNameDiv='m-2 p-16 glassTint col-start-1 col-end-3 row-start-1 row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2'
                textH2='Crea tu rutina'
            ></HomeGrid>
            <HomeGrid
                classNameDiv='m-2 p-2 glassTint col-start-1 col-end-2 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'
                textH2='Calcula tu RM'
            ></HomeGrid>
            <HomeGrid
                classNameDiv='m-2 p-2 glassTint col-start-2 col-end-3 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-2 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'
                textH2='Calorias'
            ></HomeGrid>
            <HomeGrid
                classNameDiv='relative m-2 glassTint col-start-3 col-end-4 row-start-1 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4'
                textH2='Busca la rutina perfecta'
            ></HomeGrid>
            <HomeGrid
                classNameDiv='overflow-hidden relative m-2 p-2 glassTint col-start-1 col-end-4 row-start-3 row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-4 custom-flex-wrap-first-title:row-end-5'
                DivExtras={{onMouseEnter: () => setHover(true),onMouseLeave: () => setHover(false)}}
                textH2='Tutorial de ejercicios'
            ></HomeGrid>
        </div>
    )
}
