import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mx-auto my-14 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col space-y-1">
        <h3 className="text-2xl text-center font-bold tracking-tight">Register Now</h3>
        <p className="text-sm text-center text-zinc-500 dark:text-zinc-400">
          Please fill in the form to create an account.
        </p>
      </div>
      <div>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="first_name"
                placeholder="Enter first name"
                name="first_name"
                type="text"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="last_name"
                placeholder="Enter last name"
                name="last_name"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              id="email"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="password_"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              id="password_"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <button className="rounded-md w-full bg-[#331A15] px-4 py-2 text-white transition-colors hover:bg-[#E3B577]">
            Submit
          </button>
        </form>
        <p className="text-center text-sm text-zinc-700 pt-4 dark:text-zinc-300">
                Don&apos;t have an account?
                <Link to='/login' className="font-semibold underline"> 
                    Login
                </Link>
            </p>
      </div>
    </div>
  );
};

export default Register;
