import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { InboxStackIcon, CogIcon, CheckBadgeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-black text-2xl text-carbon tracking-tight uppercase">Resumen General del Taller</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* TARJETAS DE MÉTRICAS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tarjeta 1 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-terracota flex items-center justify-between hover:shadow-md transition-shadow duration-300">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pedidos Activos</p>
                            <p className="text-4xl font-black text-carbon">12</p>
                        </div>
                        <div className="p-4 bg-terracota/10 rounded-full">
                            <InboxStackIcon className="w-8 h-8 text-terracota" />
                        </div>
                    </div>
                    
                    {/* Tarjeta 2 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-talavera flex items-center justify-between hover:shadow-md transition-shadow duration-300">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">En Proceso</p>
                            <p className="text-4xl font-black text-carbon">450</p>
                        </div>
                        <div className="p-4 bg-talavera/10 rounded-full">
                            <CogIcon className="w-8 h-8 text-talavera" />
                        </div>
                    </div>
                    
                    {/* Tarjeta 3 */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-green-500 flex items-center justify-between hover:shadow-md transition-shadow duration-300">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Terminadas</p>
                            <p className="text-4xl font-black text-carbon">89</p>
                        </div>
                        <div className="p-4 bg-green-500/10 rounded-full">
                            <CheckBadgeIcon className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                </div>

                {/* TABLA DE PRODUCCIÓN */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                        <h3 className="text-base font-bold text-carbon uppercase tracking-wider">
                            Estado físico de las piezas (Lotes en curso)
                        </h3>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-600">
                            <thead className="text-xs text-gray-400 uppercase bg-white border-b border-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-bold">Lote / Descripción</th>
                                    <th scope="col" className="px-6 py-4 text-center font-bold">Moldeado</th>
                                    <th scope="col" className="px-6 py-4 text-center font-bold">Horneado</th>
                                    <th scope="col" className="px-6 py-4 text-center font-bold">Pintura</th>
                                    <th scope="col" className="px-6 py-4 text-center font-bold text-talavera">Estatus Global</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {/* Fila de ejemplo 1 */}
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-carbon">
                                        #103 - Macetas Barro Grande
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Completado</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">En Horno</span>
                                    </td>
                                    <td className="px-6 py-4 text-center text-gray-400 font-medium">En espera</td>
                                    <td className="px-6 py-4 text-center font-bold text-talavera">40%</td>
                                </tr>
                                {/* Fila de ejemplo 2 */}
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-carbon">
                                        #104 - Tazas Esmaltadas
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Completado</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">Completado</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">En Pintura</span>
                                    </td>
                                    <td className="px-6 py-4 text-center font-bold text-talavera">80%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ALERTAS */}
                <div className="bg-red-50 rounded-2xl shadow-sm border border-red-100 p-6 flex items-start space-x-4">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-bold text-red-800 uppercase tracking-widest text-sm">Alertas Recientes</h3>
                        <p className="text-red-600 mt-1 text-sm font-medium">El lote #102 tiene un retraso de 2 días en la fase de pintura.</p>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}