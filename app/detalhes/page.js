"use client";

import { Header } from "../components/Header";
import Image from "next/image";
import logo from "../assets/MARCA-FUNDO-BRANCO.png";
import { ProductContext } from "../context/productState";
import { useContext, useEffect } from "react";
import { ProductDetailsItem } from "../components/ProductDetails";
export default function ProductDetails() {
  const { getStorageData } = useContext(ProductContext);

  useEffect(() => {
    setTimeout(() => {
      getStorageData();
    }, 1000);
  }, [getStorageData]);

  return (
    <div className="container mx-auto my-2">
      <Header>
        <button className="top-1 right-0 absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cadastrar desconto
        </button>
        <div className="lg:flex items-center lg:justify-between">
          <a href="/">
            <Image src={logo} width={200} height={100} alt="Logo" />
          </a>

          <form className="w-full max-w-lg my-6">
            <div className="w-full">
              <input
                type="email"
                id="email"
                placeholder="Busque produtos por nome ou desconto"
                required
                className="px-2 py-2 bg-white border-sky-600 border-2 rounded-full w-full"
              />
            </div>
          </form>

          <div></div>
        </div>
        <div className="bg-blue-600 flex text-white rounded">
          <a href="#" className="block w-full md:px-4 py-2">
            Roupas masculinas
          </a>
          <a href="#" className="block w-full md:px-4 py-2">
            Roupas femininas
          </a>
          <a href="#" className="block w-full md:px-4 py-2">
            Eletronicos
          </a>
          <a href="#" className="block w-full md:px-4 py-2">
            Jóias
          </a>
        </div>
      </Header>
      {getStorageData && (
        <div className="my-4 max-w-sm border rounded-lg shadow dark:bg-gray-800 border-blue-400">
          <ProductDetailsItem productDetailsItem={getStorageData()} />
        </div>
      )}
    </div>
  );
}
