import { useEffect, useState } from "react";

import pizzaHawaiana from "../../assets/pizzaHawaiana.png";
import pizzaLlanera from "../../assets/pizzaLlanera.png";
import porcionLlanera from "../../assets/porcionHawaiana.png";
import porcionHawaiana from "../../assets/porcion.png";
import pizzaCriolla from "../../assets/pizzaCriolla.png";
import porcionCriolla from "../../assets/porcionCriolla.png";

import pizzaPollo from "../../assets/pizzaPollo.png"
import porcionPollo from "../../assets/porcionPollo.png"

import CocacolaMega from "../../assets/cocacolaMega.png";
import PostobonMega from "../../assets/postobonMega.png"
import personalCocacola from "../../assets/personal1.png"
import cocacola15 from "../../assets/cocacola15.png"

import logo from "../../assets/logo.png"

import Carr from "../carrito/carrito.jsx"

import { MdAddShoppingCart } from "react-icons/md";



const Home = () => {

  const [dataCarr, setDataCarr] = useState([])


  const data = [
    {
      id: 1,
      nombre: "🍍 Hawaiana",
      imagen: pizzaHawaiana, // ❌ No necesitas llaves aquí
      tamanos: [
        {
          id: 1,
          nombre: " 🍕Pizza Hawaiana Familiar",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 60000, // ❌ Mejor manejar los precios como número, no string
          medida: "100%",
          imagen: pizzaHawaiana,
        },
        {
          id: 2,
          nombre: "🍕 Pizza Hawaiana Mediana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 45000,
          medida: "90%",
          imagen: pizzaHawaiana,
        },
        {
          id: 3,
          nombre: "🍕 Pizzeta Hawaiana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 45000,
          medida: "80%",
          imagen: pizzaHawaiana,
        },
        {
          id: 4,
          nombre: "🍕 Porcion",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 7000,
          medida: "100%",
          imagen: porcionHawaiana,
        },
      ],
    },
    {
      id: 2,
      nombre: "🐮 Llanera",
      imagen: pizzaLlanera, // Agregar imagen si la tienes
      tamanos: [
        {
          id: 1,
          nombre: "🍕 Pizza Llanera Familiar",
          ingredientes:
            "Plátano maduro, carne llanera, chorizo, queso, bocadillo",
          precio: 65000,
          medida: "100%",
          imagen: pizzaLlanera,
        },
        {
          id: 2,
          nombre: "🍕 Pizza Llanera Mediana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 50000,
          medida: "90%",
          imagen: pizzaLlanera,
        },
        {
          id: 3,
          nombre: "🍕 Pizzeta Llanera",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 30000,
          medida: "80%",
          imagen: pizzaLlanera,
        },
        {
          id: 4,
          nombre: "🍕 Porcion",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 45000,
          medida: "90%",
          imagen: porcionLlanera,
        },
      ],
    },
    {
      id: 3,
      nombre: "🌽 Criolla",
      imagen: pizzaCriolla, // Agregar imagen si la tienes
      tamanos: [
        {
          id: 1,
          nombre: "🍕 Pizza Llanera Familiar",
          ingredientes:
            "Plátano maduro, carne llanera, chorizo, queso, bocadillo",
          precio: 65000,
          medida: "100%",
          imagen: pizzaCriolla,
        },
        {
          id: 2,
          nombre: "🍕 Pizza Llanera Mediana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 50000,
          medida: "90%",
          imagen: pizzaCriolla,
        },
        {
          id: 3,
          nombre: "🍕 Pizzeta Llanera",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 30000,
          medida: "80%",
          imagen: pizzaCriolla,
        },
        {
          id: 4,
          nombre: "🍕 Porcion",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 45000,
          medida: "90%",
          imagen: porcionCriolla,
        },
      ],
    },
    {
      id: 4,
      nombre: "🍗 Pollo",
      imagen: pizzaPollo, // Agregar imagen si la tienes
      tamanos: [
        {
          id: 1,
          nombre: "🍕 Pizza Llanera Familiar",
          ingredientes:
            "Plátano maduro, carne llanera, chorizo, queso, bocadillo",
          precio: 65000,
          medida: "100%",
          imagen: pizzaPollo,
        },
        {
          id: 2,
          nombre: "🍕 Pizza Llanera Mediana",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 50000,
          medida: "90%",
          imagen: pizzaPollo,
        },
        {
          id: 3,
          nombre: "🍕 Pizzeta Llanera",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 30000,
          medida: "80%",
          imagen: pizzaPollo,
        },
        {
          id: 4,
          nombre: "🍕 Porcion",
          ingredientes: "Trozos de piña, mortadela, queso, cabanos, bocadillo",
          precio: 45000,
          medida: "90%",
          imagen: porcionPollo
        },
      ],
    },
  ];

  const bebidas = [
    {
      id: 1,
      nombre: "gaseosas",
      tamanos: [
        {
          nombre: "cocacola mega",
          precio: 12000,
          image: CocacolaMega,
        },
        {
          nombre: "postobon mega",
          precio: 11000,
          image: PostobonMega
        },
        {
          nombre: "cocacola 1.5",
          precio: 8000,
          image: cocacola15
        },
        {
          nombre: "personal",
          precio: 3000,
          image: personalCocacola
        },
      ],
    },
  ];

  
  function formater({currency, value}){
    const fomat= new Intl.NumberFormat('en-US', {
      style: "currency",
      minimumFractionDigits:2,
      currency
    })
    return fomat.format(value)
  }


  const handleSelect = (item) => {
    setDataCarr((prev) => {
      // Verifica si el item ya está seleccionado
      const isSelected = prev.some((selected) => selected.id === item.id);
      
      if (isSelected) {
        // Si ya está seleccionado, lo quitamos
        return prev.filter((selected) => selected.id !== item.id);
      } else {
        // Si no está seleccionado, lo agregamos
        return [...prev, item];
      }
    });
  };



  

  return (
    <div className="bg-black text-white w-100 pb-20 pt-10">
      <div className="">
        <div className="flex justify-center text-[#B41D24] text-4xl font-bold">
          -- Menu --
        </div>
        <div className="flex justify-center">
          <div className="w-80">
            <img src={logo} className="w-100 h-100" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/**aqui vienen las pizzas */}
          {data?.map((x) => (
            <div
              className="px-4 pb-10 flex flex-col gap-6  border-b border-[#584A2B] "
              key={x.id}
            >
              <div className="text-[#D77E16] text-4xl font-bold pb-3">
                <p className="">{x.nombre}</p>
              </div>
              {x.tamanos.map((z) => (
                <div className="w-full " key={z.id}>
                  <div className="flex">
                    <div className="w-1/3">
                      <div
                        style={{ width: `${z.medida}`, height: `${z.medida}` }}
                      >
                        <img src={z.imagen} />
                      </div>
                    </div>
                    <div className="w-2/3 flex flex-col justify-around px-2">
                      <div className="font-bold flex justify-center">
                        {z.nombre}
                      </div>
                      <div>
                        Trozos de pina, mortadela, Queso, Cabanos, bocadillo
                      </div>
                      <div className="flex justify-between">
                        <div className="font-bold text-[#B41D24]">
                          Nuevo producto
                        </div>
                        <div>
                          {formater({currency: "USD", value: z.precio})}</div>
                          <button className="" onClick={()=> handleSelect(z.id)}>
                            <MdAddShoppingCart />
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {bebidas?.map((x) => (
            <div key={x.id} className="px-4">
              <div className="w-full">
                <div className="text-[#D77E16] text-4xl font-bold pb-10">
                  <p className="">{x.nombre}</p>
                </div>
                <div className="flex flex-wrap gap-4">

                  {x?.tamanos?.map((y) => (
                    <div key={y.id} className="border rounded-md p-2 w-32 flex flex-col justify-between">
                      <div className=" h-24 flex justify-center">
                        <img
                          src={y.image}
                          className="w-full h-auto"
                    
                        />
                      </div>
                      <div>
                        <div className="flex justify-center">{y.nombre}</div>
                        <div className="flex justify-end">
                        {formater({currency: "USD", value: y.precio})}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-10 h-10"
           style={{position:"fixed", right:"0", bottom:"0"}}
      >
        <Carr data={dataCarr}/>
      </div>


    </div>
  );
}

export default Home;
