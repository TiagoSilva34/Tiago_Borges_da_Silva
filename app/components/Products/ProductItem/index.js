"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/productState";
import { useRouter } from "next/navigation";
export const ProductItem = ({ product }) => {
  const [campaignInfo, setCampaignInfo] = useState({})
  const { setStorageType, setStorageData, getStorageData } = useContext(ProductContext);
  const router = useRouter();

  const handleProductData = (product) => {
    setStorageType("productData");
    setStorageData(product);
    router.push("/detalhes");
  };

  // useEffect(() => {
  //   localStorage.removeItem('updateCampaign')

  //   setTimeout(() => {
  //    let storageCampaign = JSON.parse(localStorage.getItem('campaignData'))

  //    storageCampaign.filter(item => {
  //     if (item.productName === product.title) {
  //      setCampaignInfo(item)
  //     }
  //    })
  //   }, 1000)
  // }, [getStorageData, product.title]);

  return (
    <div className="productImage my-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 border-blue-400">
      <Image
        className="p-3"
        src={product && product.image}
        alt="Imagem do produto"
        width={400}
        height={400}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product && product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product && product.description}
        </p>
        {campaignInfo.nome && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <b>Desconto:</b> {campaignInfo.nome}
          </p>
        )}
         {campaignInfo.inativacao  && campaignInfo.ativacao && (
          <div className="mb-3 font-normal justify-between flex text-gray-700 dark:text-gray-400">
            <span>
              <b>Data da inativação: </b>
              <p>{campaignInfo.inativacao}</p>
            </span>
            <span>
              <b>Data da ativação: </b>
              <p>{campaignInfo.ativacao}</p>
            </span>
          </div>
        )}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          R$ {product && product.price}
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
