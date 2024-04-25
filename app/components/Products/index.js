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
      <div className="flex flex-wrap gap-1 justify-between my-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
