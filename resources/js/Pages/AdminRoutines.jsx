import {PrincipalTable} from "@/Components/PrincipalTable.jsx";
import MainLayout from "@/Layouts/MainLayout.jsx";
import {motion} from "framer-motion";
import {Head, router} from "@inertiajs/react";
import homeImage from "@/assets/images/HomeImage.png";
import React from "react";

export default function AdminRoutines(){
    return(
        <MainLayout>
            <Head title="Routines"/>
            <div className="bg-transparent flex flex-col items-center min-h-screen text-white">
                {/* Título y usuario */}
                <div className="text-center mb-4">
                    <h1 className="text-responsive-h2 font-semibold">Hombro-Biceps-Triceps</h1>
                    <p className="text-gray-400 text-responsive-h4 my-4 mx-8">Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Animi consectetur dicta dolore ducimus nemo, nihil odio quibusdam. Aspernatur atque beatae
                        illo in quos reprehenderit saepe! Aliquid animi earum non quisquam.</p>
                    <span className="text-gray-200 text-responsive-h4 font-semibold my-4">Created by alvareitor48</span>
                </div>

                {/* Botón de Comenzar Rutina*/}
                <motion.button
                    className="bg-lilaPrincipal pb-1 mt-10 w-responsive-normal-button-width h-responsive-normal-button-height text-responsive-h4 rounded-xl"
                    whileHover={{backgroundColor: "#8F3985", scale: 1.1}}
                    onClick={() => router.visit(route('AdminRoutines'))}
                >
                    Comenzar Rutina
                </motion.button>
                <PrincipalTable></PrincipalTable>
                <PrincipalTable></PrincipalTable>
                <PrincipalTable></PrincipalTable>
            </div>

        </MainLayout>
    )
}
