"use client";

import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { ProductService } from "@/app/services/ProductService";
import { Header } from "../Header";
import Image from "next/image";
import logo from "../../assets/MARCA-FUNDO-BRANCO.png";
import { useRouter } from "next/navigation";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productName, setProductName] = useState("")

  const router = useRouter()

  const handleSearchProduct = (value) => {
        setProductName(value)
        let filteredProduct = products
    
        filteredProduct = products.filter((product) => product.title.includes(value))

       setFilteredProducts(filteredProduct)
  }
  

  useEffect(() => {
    ProductService.getAllProducts().then((response) => {
      setProducts(response);
      setFilteredProducts(response);
    });
  }, []);

  return (
    <>
      <Header>
        <button onClick={() => router.push('/cadastrar')} className="top-1 right-0 absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          cadastrar desconto
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
                value={productName}
                placeholder="Busque produtos por nome ou desconto"
                required
                className="px-2 py-2 bg-white border-sky-600 border-2 rounded-full w-full"
                onChange={e => handleSearchProduct(e.target.value)}
              />
            </div>
          </form>

          <div></div>
        </div>
        <div className="lg:w-full text-white flex bg-blue-600">
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
      {/* <div
        id="default-carousel"
        className="relative w-full container mx-auto"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          Item 1
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}
      <div className="flex flex-wrap gap-1 justify-between my-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
