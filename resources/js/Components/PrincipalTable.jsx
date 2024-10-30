import React from 'react';
import {motion} from "framer-motion";
import {router} from "@inertiajs/react";
import homeImage from '@/assets/images/HomeImage.png'

export function PrincipalTable(props) {
    return (
        <>
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

            <div className="border border-gray-300 border-b-0 bg-gray-800 grid grid-cols-4 items-center w-full justify-between mt-8">

                <div className="flex justify-center m-2">
                    <img
                        src={homeImage}
                        alt="Ejercicio"
                        className="h-responsive-height-table-image w-responsive-width-table-image rounded-full object-cover"
                    />
                </div>

                {/* Título del Ejercicio */}
                <div className="text-center px-2 py-3">
                    <h2 className="text-responsive-table font-semibold inline-block">Título del Ejercicio</h2>
                </div>

                {/* Notas */}
                <div className="text-center px-2 py-3">
                    <p className="text-responsive-table text-gray-400 inline-block">Notas sobre el ejercicio</p>
                </div>

                {/* Temporizador (No funcional) */}
                <div className="text-center px-2 py-3">
                    <p className="text-responsive-table font-medium text-gray-400 inline-block">00:00</p>
                </div>
            </div>

            <table className="bg-custom-gradient2 border border-gray-300 border-t-0 rounded-lg min-w-full">
                <thead>
                <tr className="bg-gray-800 text-white uppercase text-responsive-table leading-normal">
                    <th className="w-1/4 py-3 px-2 text-center">Serie</th>
                    <th className="w-1/4 py-3 px-2 text-center">Reps</th>
                    <th className="w-1/4 py-3 px-2 text-center">Peso</th>
                    <th className="w-1/4 py-3 px-2 text-center">RIR</th>
                </tr>
                </thead>
                <tbody className="text-gray-700 text-responsive-table">
                <tr className="border-b border-gray-200 hover:bg-gray-600">
                    <td className="py-3 px-2 text-center whitespace-nowrap">1</td>
                    <td className="py-3 px-2 text-center">6</td>
                    <td className="py-3 px-2 text-center">22.5</td>
                    <td className="py-3 px-2 text-center">1</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-600">
                    <td className="py-3 px-2 text-center whitespace-nowrap">1</td>
                    <td className="py-3 px-2 text-center">6</td>
                    <td className="py-3 px-2 text-center">22.5</td>
                    <td className="py-3 px-2 text-center">1</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-600">
                    <td className="py-3 px-2 text-center whitespace-nowrap">1</td>
                    <td className="py-3 px-2 text-center">6</td>
                    <td className="py-3 px-2 text-center">22.5</td>
                    <td className="py-3 px-2 text-center">1</td>
                </tr>
                </tbody>
            </table>
        </div>

    {/*
                {/* Gráfica y filtros }
                <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-300 text-sm">Últimos 3 meses</p>
                        <button className="text-blue-400 text-sm">▼</button>
                    </div>
                    <div className="flex justify-center items-center h-28 bg-gray-700 rounded-lg mt-2">
                        <div className="text-gray-400 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 w-10"
                                 viewBox="0 0 24 24">
                                <path d="M5 13h3v7H5v-7zm6-6h3v13h-3V7zm6 3h3v10h-3V10z"/>
                            </svg>
                            <p className="text-sm mt-2">No hay datos en este período</p>
                        </div>
                    </div>
                </div>

                {/* Tabs de Volumen, Repeticiones, Duración }
                <div className="flex justify-center gap-2 mb-4">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Volumen</button>
                    <button className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm">Repeticiones</button>
                    <button className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm">Duración</button>
                </div>

                {/* Lista de ejercicios }
                <div className="w-full max-w-md bg-gray-900 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Ejercicios</h2>

                    {/* Ejercicio 1 }
                    <div className="mb-4">
                        <div className="flex items-center gap-3">
                            <img src="/path/to/press-hombros.png" alt="Press de Hombros" className="h-10 w-10"/>
                            <p className="text-blue-400 font-medium">Press de Hombros Sentado (Máquina)</p>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <p>SERIE</p>
                            <p>KG</p>
                            <p>REPS</p>
                        </div>
                        <div className="mt-1">
                            <div className="flex justify-between py-1 border-b border-gray-700">
                                <p>1</p>
                                <p>80</p>
                                <p>8</p>
                            </div>
                            <div className="flex justify-between py-1 border-b border-gray-700">
                                <p>2</p>
                                <p>75</p>
                                <p>10</p>
                            </div>
                            <div className="flex justify-between py-1">
                                <p>3</p>
                                <p>70</p>
                                <p>8</p>
                            </div>
                        </div>
                    </div>

                    {/* Ejercicio 2 }
                    <div className="mb-4">
                        <div className="flex items-center gap-3">
                            <img src="/path/to/single-arm-lateral-raise.png" alt="Single Arm Lateral Raise"
                                 className="h-10 w-10"/>
                            <p className="text-blue-400 font-medium">Single Arm Lateral Raise (Cable)</p>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <p>SERIE</p>
                            <p>KG</p>
                            <p>REPS</p>
                        </div>
                        <div className="mt-1">
                            <div className="flex justify-between py-1 border-b border-gray-700">
                                <p>1</p>
                                <p>10</p>
                                <p>12</p>
                            </div>
                            <div className="flex justify-between py-1">
                                <p>2</p>
                                <p>10</p>
                                <p>12</p>
                            </div>
                        </div>
                    </div>
                </div>
                */}

        </>
    );
}
