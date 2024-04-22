"use client";

import { Header } from "../components/Header";
import Image from "next/image";
import logo from "../assets/MARCA-FUNDO-BRANCO.png";
import { ProductContext } from "../Context/productState";
import { useContext, useEffect } from "react";
export default function ProductDetails() {
  const { productState, getStoreData } = useContext(ProductContext);

  useEffect(() => {
    getStoreData()
  }, [getStoreData]);

  return (
    <div className="container mx-auto my-2">
      <Header>
        <button className=" top-1 right-0 absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cadastrar desconto
        </button>
        <div className="lg:flex items-center lg:justify-between">
          <Image src={logo} width={200} height={200} alt="Logo" />

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
        <div className="lg:w-full bg-black flex text-sky-600">
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
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src={productState.image}
            alt="Imagem do produto"
            width={400}
            height={400}
          />
        </a>
        <div className="p-5">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {productState.price}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {productState.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {productState.description}
          </p>
        </div>
      </div>
    </div>
  );
}
