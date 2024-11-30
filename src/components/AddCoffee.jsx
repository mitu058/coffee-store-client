import React from "react";
import Swal from 'sweetalert2'
const AddCoffee = () => {

const handelAddCoffee = e =>{
    e.preventDefault();
    // handle form submission
  const form = e.target
  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
const newCoffee = {name, quantity, supplier, taste, category, details, photo}
console.log(newCoffee);

// send data to the server
fetch('http://localhost:5000/coffee',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCoffee)  // send form data as JSON
 
})
.then(res =>res.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'close'
          }) 
    }
})
}

  return (
    <div className="flex flex-col justify-center items-center my-10">
      
      <div className="w-[40%] mx-auto space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight ">Add new Coffee</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <form onSubmit={handelAddCoffee} className="space-y-6">
            {/* form name and quantity */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-sm ">
                <label
                  className="text-xl font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="first_name"
                >
                   Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="first_name"
                  placeholder="Enter coffee name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="last_name"
                >
                 Quantity
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="last_name"
                  placeholder="Enter coffee quantity "
                  name="quantity"
                  type="text"
                />
              </div>
            </div>
            {/* form supplier and taste */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="first_name"
                >
                 Supplier
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="first_name"
                  placeholder="Enter coffee supplier"
                  name="supplier"
                  type="text"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="last_name"
                >
                Taste
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="last_name"
                  placeholder="Enter coffee taste "
                  name="taste"
                  type="text"
                />
              </div>
            </div>
            {/* form category and details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="first_name"
                >
                  Category
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="first_name"
                  placeholder="Enter coffee category"
                  name="category"
                  type="text"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="last_name"
                >
                 Details
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="last_name"
                  placeholder="Enter coffee details "
                  name="details"
                  type="text"
                />
              </div>
            </div>


            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="email"
              >
                Photo
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="email"
                placeholder="Enter your photo URL"
                name="photo"
                type="photo"
              />
            </div>
           
            <button className="rounded-md bg-[#331A15] px-4 py-2 text-white transition-colors hover:bg-[#E3B577] btn btn-block">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
