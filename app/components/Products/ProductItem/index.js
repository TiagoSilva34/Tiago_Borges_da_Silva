"use client"
import Image from "next/image";
import img from '../../../assets/img01.png'
import { useContext } from "react";
import { ProductContext } from "../../../Context/productState";
import { useRouter } from "next/navigation";
export const ProductItem = ({product}) => {
  const router = useRouter()
  const { setProductState } = useContext(ProductContext)

  const handleProductData = (product) => {
    setProductState(product)
    router.push('/details')
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image className="rounded-t-lg" src={product.image} alt="Imagem do produto" width={400} height={400} />
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
        <button onClick={() => handleProductData(product)}>Detalhes do produto</button>
      </div>
    </div>
  );
};
