import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaCar,
  FaTags,
  FaShapes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Swal from "sweetalert2";

function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [cars, setCars] = useState([]);
  const imgUrl = "https://realauto.limsa.uz/api/uploads/images";
  const getCars = () => {
    axios({
      url: "https://realauto.limsa.uz/api/categories",
      method: "GET",
    }).then((res) => {
      setCars(res?.data?.data);
    });
  };
  useEffect(() => {
    getCars();
  }, []);

  const editBtn = ()=>{
    Swal.fire({
      title: "Tugma mavjud emas",
      icon: "question",
      draggable: true
    });
  }

  const btnclick = () => {
    Swal.fire({
      title: "<h2>Xatolik</h2>",
      icon: "info",
      html: `
        Malumot qo'shish mumkin emas
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `Aha Hop?`,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `Chiqish`,
      cancelButtonAriaLabel: "Thumbs down",
    });
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <button
          className="p-4 focus:outline-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <FaChevronRight size={24} />
          ) : (
            <FaChevronLeft size={24} />
          )}
        </button>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center p-2 hover:bg-gray-700">
            <FaTags size={24} />
            {!isCollapsed && <span className="ml-4">Categories</span>}
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700">
            <FaCar size={24} />
            {!isCollapsed && <span className="ml-4">Cars</span>}
          </li>

          <li className="flex items-center p-2 hover:bg-gray-700">
            <FaShapes size={24} />
            {!isCollapsed && <span className="ml-4">Models</span>}
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Categories</h1>
          <button
            onClick={btnclick}
            className="px-3 py-1 transition-all duration-300 border-3 border-cyan-600 hover:bg-transparent hover:text-black bg-cyan-600 text-white font-bold rounded-md"
          >
            Malumot qo'shish
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 overflow-y-scroll no-scrollbar h-140">
          {cars.map((car) => (
            <div key={car.id} className="bg-neutral-300 pb-2 rounded shadow-md">
              <img
                src={`${imgUrl}/${car?.image_src}`}
                alt={car.title}
                className={`w-full  object-cover rounded ${
                  isCollapsed ? "h-90" : "h-70"
                }`}
              />
              <div className="flex justify-between mt-2 px-4">
                <h2 className=" font-semibold text-lg">{car?.name_en}</h2>
                <div className="flex gap-2">
                  <button onClick={editBtn} className="px-3 py-1 cursor-pointer font-bold text-white bg-blue-800 hover:bg-blue-500 rounded-sm">
                    Tahrirlash
                  </button>
                  <button className="px-3 py-1 cursor-pointer font-bold text-white bg-red-800 hover:bg-red-500 rounded-sm ">
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
