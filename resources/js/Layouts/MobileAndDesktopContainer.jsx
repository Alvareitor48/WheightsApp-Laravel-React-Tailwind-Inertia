import desktopAndMobile from '@/assets/images/desktopAndMobile.png'
import { motion } from 'framer-motion'

export const MobileAndDesktopHomeContainer = ({Imageorientation,title,li}) => {
    return (
        <div className='mt-40 relative grid grid-cols-2 grid-rows-2 custom-flex-wrap-first-title:grid-cols-1 custom-flex-wrap-first-title:grid-rows-3'>
            <motion.h2 className={`mb-16 text-responsive-h2 inline-block ${Imageorientation == 'left' ? 'col-start-2 col-end-3' : 'col-start-1 col-end-2'} row-start-1 row-end-2 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:pt-96 custom-flex-wrap-little-devices:pt-16`}
                       initial={{ opacity: 0, x: "60%"}}
                       whileInView={{ opacity: 1, x: 0}}
                       transition={{ duration: 1 }}
                       viewport={{
                           margin:"-115px",
                           once:true
                       }}
            >{title}</motion.h2>
            <motion.div className={`flex justify-center items-center${Imageorientation == 'left' ? 'col-start-1 col-end-2' : 'col-start-2 col-end-3'} row-start-1 row-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-little-devices:-mt-14`}
                        initial={{ opacity: 0, scale:0 }}
                        whileInView={{ opacity: 1, scale:1 }}
                        transition={{ duration: 1 }}
                        viewport={{
                            once:true
                        }}
            >
                <div className='glassTintCircle p-9 relative'>
                    <img className='h-responsive-height-second-image z-2 opacity-70' src={desktopAndMobile} alt='Desktop and mobile view' draggable="false"></img>
                </div>
            </motion.div>
            <motion.div className={`-m-24 flex justify-center ${Imageorientation == 'left' ? 'col-start-2 col-end-3' : 'col-start-1 col-end-2'} row-start-2 row-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:mt-6`}
                        initial={{ opacity: 0, x: "60%" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{
                            once:true
                        }}
            >
                <ul className={`text-responsive-ul ${Imageorientation == 'left' ? 'text-start' : 'text-end'} custom-flex-wrap-first-title:text-center`}>
                    {li}
                </ul>
            </motion.div>
        </div>
    )
}
