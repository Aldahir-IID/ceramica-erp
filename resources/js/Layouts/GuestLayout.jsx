import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-arcilla">
            <div>
                <Link href="/">
                    <h1 className="text-4xl font-black text-carbon tracking-widest uppercase text-center">
                        Tienda de Cerámica
                    </h1>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-8 px-6 py-8 bg-white shadow-lg overflow-hidden sm:rounded-lg border-t-4 border-talavera">
                {children}
            </div>
        </div>
    );
}