import { Link, usePage } from '@inertiajs/react';
import { HomeIcon, ClipboardDocumentListIcon, DocumentTextIcon, UsersIcon, ChartBarIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-arcilla flex flex-col">
            
            {/* BARRA DE NAVEGACIÓN SUPERIOR */}
            <nav className="bg-carbon text-white shadow-lg z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        
                        {/* SECCIÓN IZQUIERDA: LOGO Y MENÚS */}
                        <div className="flex">
                            {/* Logo */}
                            <div className="shrink-0 flex items-center mr-8">
                                <h1 className="text-xl font-black text-arcilla tracking-widest uppercase">
                                    Taller Cerámica
                                </h1>
                            </div>
                            
                            {/* Enlaces (Visible en PC) */}
                            <div className="hidden sm:flex sm:space-x-2 items-center">
                                <Link href={route('dashboard')} className="flex items-center px-3 py-2 bg-talavera text-white rounded-md text-sm font-semibold transition-colors">
                                    <HomeIcon className="w-5 h-5 mr-2" /> 
                                    Dashboard
                                </Link>
                                
                                <Link href="#" className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md text-sm font-semibold transition-colors">
                                    <ClipboardDocumentListIcon className="w-5 h-5 mr-2" /> 
                                    Producción
                                </Link>

                                <Link href="#" className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md text-sm font-semibold transition-colors">
                                    <DocumentTextIcon className="w-5 h-5 mr-2" /> 
                                    Cotizaciones
                                </Link>

                                <Link href="#" className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md text-sm font-semibold transition-colors">
                                    <UsersIcon className="w-5 h-5 mr-2" /> 
                                    Usuarios
                                </Link>

                                <Link href="#" className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md text-sm font-semibold transition-colors">
                                    <ChartBarIcon className="w-5 h-5 mr-2" /> 
                                    Reportes
                                </Link>
                            </div>
                        </div>

                        {/* SECCIÓN DERECHA: PERFIL Y CERRAR SESIÓN */}
                        <div className="hidden sm:flex sm:items-center">
                            <div className="flex items-center space-x-4 border-l border-gray-700 pl-4">
                                <div className="flex flex-col text-right">
                                    <span className="text-sm font-bold text-white">{user.name}</span>
                                    <span className="text-xs text-gray-400">Admin</span>
                                </div>
                                <Link href={route('logout')} method="post" as="button" className="p-2 text-gray-400 hover:text-terracota hover:bg-gray-800 rounded-lg transition-colors">
                                    <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* TÍTULO DE LA PÁGINA (Dinámico) */}
            {header && (
                <header className="bg-white/60 backdrop-blur-md shadow-sm border-b border-gray-200 z-10">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            
            {/* ÁREA DE TRABAJO (Aquí carga el Dashboard o cualquier vista) */}
            <main className="flex-1">
                <div className="py-8">
                    {children}
                </div>
            </main>
            
        </div>
    );
}