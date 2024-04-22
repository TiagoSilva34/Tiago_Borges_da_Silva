"use client"
import {useEffect} from "react"
import Image from "next/image";
import img from '../../../assets/img01.png'

export const ProductItem = ({product}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={img} alt="Imagem do produto" width={400} height={400} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          R$ {product.price}
        </p>
      </div>
    </div>
  );
};
