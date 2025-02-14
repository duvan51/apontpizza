import React from "react";
import { RiShoppingBasketFill } from "react-icons/ri";

const Carrito = ({ data }) => {
  return (
    <div className="bg-blue-100">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <RiShoppingBasketFill />
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-[#1C2029]">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="py-4">
            <table class="table-auto">
              <thead>
                <tr>
                  <th className="w-50">Producto</th>
                  <th>Cantidad</th>
                  <th>button</th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex gap-2">
                  <td className="w-50">Pizzeta hawaiana</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>pizzeta hawaiana</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Carrito;
