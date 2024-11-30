import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
  
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  
    console.log("Registering:", name, email, password);
  
    creatUser(email, password)
      .then((result) => {
        console.log("Firebase user created:", result.user);
        const newUser = { name, email };
  
        // Save new user info to the database
        return fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("User saved to database:", data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'User added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })
      .catch((error) => {
        console.error("ERROR:", error.message);
      });
  };
  

  return (
    <div className="mx-auto my-14 w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col space-y-1">
        <h3 className="text-3xl text-center font-bold tracking-tight">
          Register Now
        </h3>
        <p className="text-lg text-center text-zinc-500 dark:text-zinc-400">
          Please fill in the form to create an account.
        </p>
      </div>
      <div>
        <form onSubmit={handelRegister} className="space-y-6">
         
          <div className="space-y-2 text-sm">
            <label
              className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Name
            </label>
            <input
              className="flex text-lg h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              placeholder="Enter your name"
              name="name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex text-xl h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="password_"
            >
              Password
            </label>
            <input
              className="flex text-xl h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <button className="rounded-md text-2xl w-full bg-[#331A15] px-4 py-2 text-white transition-colors hover:bg-[#E3B577]">
            Register
          </button>
        </form>
        <p className="text-center text-lg text-zinc-700 pt-4 dark:text-zinc-300">
          Don&apos;t have an account?
          <Link to="/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
