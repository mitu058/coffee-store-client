import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffees, setCoffees}) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffees;
console.log(coffees);

  const handelDelet = (_id) => {
    console.log(_id);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
      // if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                 "Deleted!",
               "Your file has been deleted.",
                 "success",
              );
              const remaining = coffees.filter(coffee => coffee._id !== _id);
              setCoffees(remaining);
            }

          });
        }
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 flex items-center space-x-4">
      <img
        src={photo} 
        alt="Coffee Cup"
        className="w-40 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-800">Name: {name}</h3>
        <p className="text-sm text-gray-600">Chef: {supplier}</p>
        <p className="text-sm text-gray-600">Price: {quantity}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded hover:bg-yellow-600"
          title="View"
        >
          <FaEye />
        </button>
       <Link to={`updateCoffee/${_id}`}>
       <button
          className="w-8 h-8 flex items-center justify-center bg-gray-400 text-white rounded hover:bg-gray-500"
          title="Edit"
        >
          <FaEdit />
        </button>
       </Link>
        <button
          onClick={() => handelDelet(_id)} // Add the delete function here
          className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
