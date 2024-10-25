import { motion } from "framer-motion"
export const HomeGrid=({classNameDiv,DivExtras,textH2,textColorAndExtrasH2,Img})=>{
    return(
        <motion.div className={classNameDiv}
                    {...DivExtras}
                    whileHover={{ scale: 1.02, cursor: 'pointer' }}
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{
                        margin: "-20px",
                        once: true
                    }}
        >
            <h2 className={`text-shadow-md text-responsive-h2 inline-block  ${textColorAndExtrasH2}`}>{textH2}</h2>
            {Img}
        </motion.div>
    )
}
