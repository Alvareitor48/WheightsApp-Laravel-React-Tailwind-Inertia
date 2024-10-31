import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SignLayout from "@/Layouts/SignLayout.jsx";
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <SignLayout>
            <div className="w-screen h-screen flex items-center justify-center flex-col">
                <Head title="Confirm Password"/>

                <div className="mb-4 text-sm text-white">
                    This is a secure area of the application. Please confirm your
                    password before continuing.
                </div>

                <div className="px-24 py-16 glass">
                    <form onSubmit={submit}>
                        <div className="mt-4">
                            <InputLabel className="text-white" htmlFor="password" value="Password"/>

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full text-black"
                                isFocused={true}
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2"/>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Confirm
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </SignLayout>
);
}
