import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mx-auto my-14 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
            <h1 className="text-2xl font-semibold tracking-tight text-center">Log In</h1>

            <form action="#" className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Username
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="username"
                        placeholder="Enter username"
                        name="username"
                        type="text"
                        required
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        type="password"
                        required
                    />
                    <div className="flex justify-end text-xs">
                        <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="rounded-md w-full bg-[#331A15] px-4 py-2 text-white transition-colors hover:bg-[#E3B577]">Login</button>
            </form>
            <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                Don&apos;t have an account?
                <Link to='/register' className="font-semibold underline">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;