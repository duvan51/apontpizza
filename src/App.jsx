import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

import logo from "/logoPizza.png";
import pizzaHawaiana from "/pizzaHawaiana.png";

function App() {
  const data = [
    {
      id: 1,
      nombre: "Hawaiana",
      imagen: pizzaHawaiana, // ❌ No necesitas llaves aquí
      tamanos: [
        {
          id:1,
          nombre: "Pizza Hawaiana Familiar",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 60000, // ❌ Mejor manejar los precios como número, no string
        },
        {
          id:2,
          nombre: "Pizza Hawaiana Mediana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 45000,
        },
      ],
    },
    {
      id: 2,
      nombre: "Llanera",
      imagen: pizzaHawaiana, // Agregar imagen si la tienes
      tamanos: [
        { 
          id:1,
          nombre: "Pizza Llanera Familiar",
          ingredientes:
            "Plátano maduro, carne llanera, chorizo, queso, bocadillo",
          precio: 65000,
        },
        {
          id:2,
          nombre: "Pizza Llanera Mediana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 50000,
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white w-100 ">
      <div className="">
        <div className="flex justify-center text-[#B41D24] text-4xl font-bold">
          -- Menu --
        </div>
        <div className="flex justify-center">
          <div className="w-80">
            <img src={logo} className="w-100 h-100" />
          </div>
        </div>

        {/**aqui vienen las pizzas */}
        {data?.map((x) => (
          console.log(x),
          <div className="px-4" key={x.id}>
            {x.nombre}
            {
              x.tamanos.map((z)=>(
                <div className="w-full border border-indigo-600 " key={z.id}>
                <div className="flex">
                  <div className="w-1/3">
                    <img src={pizzaHawaiana} />
                  </div>
                  <div className="w-2/3 flex flex-col justify-around px-2">
                    <div className="font-bold flex justify-center">
                      Pizza Xl Hawaiana
                    </div>
                    <div>
                      Trozos de pina, mortadela, Queso, Cabanos, bocadillo
                    </div>
                    <div className="flex justify-between">
                      <div className="font-bold text-[#B41D24]">
                        Nuevo producto
                      </div>
                      <div>$2500</div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
