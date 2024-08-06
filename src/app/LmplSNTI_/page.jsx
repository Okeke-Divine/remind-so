"use client";
import { useState } from 'react';

export default function Page() {

    const pswd = "hLu3%D$D_MDO";

    // React component for managing form state
    function AuthForm() {
        const [inputSecret, setInputSecret] = useState('');
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        const handleSubmit = (event) => {
            event.preventDefault();
            if (inputSecret === pswd) {
                setIsAuthenticated(true);
            } else {
                alert('Incorrect secret. Please try again.');
            }
        };

        return (
            <div className="flex flex-col justify-center items-center px-5 py-10 bg-base-200 h-[100vh]">
                {!isAuthenticated ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="password"
                            value={inputSecret}
                            onChange={(e) => setInputSecret(e.target.value)}
                            placeholder="Enter secret"
                            className="input input-bordered"
                        />
                        <button type="submit" className="btn bg-yellow-700 text-white">Submit</button>
                    </form>
                ) : (
                    <iframe
                        src="/lmdiMS_292Nm"
                        className="w-full border-none h-[100vh]"
                        title="Authenticated Content"
                    ></iframe>
                )}
            </div>
        );
    }

    return <AuthForm />;
}
