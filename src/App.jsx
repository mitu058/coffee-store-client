import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);

  const handelDelet = (_id) => {
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          const remaining = coffees.filter((coffee) => coffee._id !== _id);
          setCoffees(remaining);
        }
      });
  };
  return (
    <div className="my-14">
      <div className="flex flex-col justify-center items-center space-y-3">
        {/* <h1 className="text-2xl text-center font-semibold text-blue-600">
        Total coffee : {coffees.length}
      </h1> */}
        <h2 className="text-3xl text-center font-semibold text-[#331A15]">
          Our Popular Products
        </h2>
        <Link to="/addCoffee">
          <button className="btn bg-[#E3B577] btn-md">Add Coffee</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10  w-[60%] mx-auto">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="bg-gray-100 rounded-lg shadow-md p-6 flex items-center space-x-4"
          >
            <img
              src={coffee.photo}
              alt="Coffee Cup"
              className="w-40 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800">
                Name: {coffee.name}
              </h3>
              <p className="text-sm text-gray-600">Chef: {coffee.supplier}</p>
              <p className="text-sm text-gray-600">Price: {coffee.quantity}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded hover:bg-yellow-600"
                title="View"
              >
                <FaEye />
              </button>
              <Link to={`updateCoffee/${coffee._id}`}>
                <button
                  className="w-8 h-8 flex items-center justify-center bg-gray-400 text-white rounded hover:bg-gray-500"
                  title="Edit"
                >
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handelDelet(coffee._id)} // Add the delete function here
                className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
