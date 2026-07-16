import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesión" />

            {/* Título de la caja */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-carbon">INICIAR SESIÓN</h2>
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="CORREO ELECTRÓNICO" className="font-bold text-carbon" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-gray-100 border-transparent focus:border-talavera focus:ring-talavera"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="ejemplo@taller.com"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="CONTRASEÑA" className="font-bold text-carbon" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full bg-gray-100 border-transparent focus:border-talavera focus:ring-talavera"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="********"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-between mt-6">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-talavera rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-talavera"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )}
                    
                    <Link
                        href={route('register')}
                        className="underline text-sm text-gray-600 hover:text-talavera rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-talavera"
                    >
                        ¿No tienes cuenta? Regístrate
                    </Link>
                </div>

                <div className="mt-6">
                    <PrimaryButton disabled={processing}>
                        Iniciar Sesión
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}