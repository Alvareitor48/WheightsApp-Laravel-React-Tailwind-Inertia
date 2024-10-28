import React from 'react';

export function PrincipalTable(props) {
    return (
        <table className="min-w-full bg-black shadow-md rounded-lg overflow-hidden">
            <thead>
            <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-center">Office</th>
                <th className="py-3 px-6 text-center">Age</th>
                <th className="py-3 px-6 text-center">Start date</th>
                <th className="py-3 px-6 text-center">Salary</th>
            </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap">John Doe</td>
                <td className="py-3 px-6 text-left">Developer</td>
                <td className="py-3 px-6 text-center">New York</td>
                <td className="py-3 px-6 text-center">35</td>
                <td className="py-3 px-6 text-center">2023-01-15</td>
                <td className="py-3 px-6 text-center">$3200</td>
            </tr>
            <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap">Jane Smith</td>
                <td className="py-3 px-6 text-left">Designer</td>
                <td className="py-3 px-6 text-center">London</td>
                <td className="py-3 px-6 text-center">29</td>
                <td className="py-3 px-6 text-center">2021-03-12</td>
                <td className="py-3 px-6 text-center">$4200</td>
            </tr>
            <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap">Alice Brown</td>
                <td className="py-3 px-6 text-left">Project Manager</td>
                <td className="py-3 px-6 text-center">San Francisco</td>
                <td className="py-3 px-6 text-center">41</td>
                <td className="py-3 px-6 text-center">2018-06-22</td>
                <td className="py-3 px-6 text-center">$5000</td>
            </tr>
            {/* Agrega más filas según sea necesario */}
            </tbody>
        </table>
    );
}
