"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/productState";
import { useRouter } from "next/navigation";
export const ProductItem = ({ product }) => {
  const [campaignInfo, setCampaignInfo] = useState({})
  const router = useRouter();
  const { setStorageType, setStorageData, getStorageData } = useContext(ProductContext);

  const handleProductData = (product) => {
    setStorageType("productData");
    setStorageData(product);
    router.push("/detalhes");
  };

  useEffect(() => {
    setTimeout(() => {
     let [ storageCampaign ] = JSON.parse(localStorage.getItem('campaignData'))

     setCampaignInfo(storageCampaign)
    }, 4000)
  }, [getStorageData]);

  return (
    <div className="productImage my-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 border-blue-400">
      <Image
        className="p-3"
        src={product.image}
        alt="Imagem do produto"
        width={400}
        height={400}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Desconto: {campaignInfo.nome}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          R$ {product.price}
        </p>
        <button
          onClick={() => handleProductData(product)}
          className="text-blue-600"
        >
          ver desconto
        </button>
      </div>
    </div>
  );
};
