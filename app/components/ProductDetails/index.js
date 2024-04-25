import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../context/productState";
import { useRouter } from "next/navigation";

export const ProductDetailsItem = ({ productDetailsItem }) => {
  const [campaignInfo, setCampaignInfo] = useState({});
  const [discount, setDiscount] = useState(0);

  const router = useRouter();
  const { setStorageType, setStorageData } = useContext(ProductContext);

  const handleProductData = (productDetailsItem) => {
    setStorageType("updateCampaign");
    setStorageData(productDetailsItem);
    router.push("/cadastrar");
  };

  useEffect(() => {
    localStorage.removeItem('updateCampaign')

    setTimeout(() => {
      let storageCampaign = JSON.parse(localStorage.getItem("campaignData"));

      storageCampaign.filter((item) => {
        if (item.productName === productDetailsItem.title) {
          item.economize = campaignInfo.de - campaignInfo.por;
          setDiscount(item.economize);
          setCampaignInfo(item);
        }
      });
    }, 100);
  }, [campaignInfo, discount, productDetailsItem.title]);

  return (
    <div onClick={() => router.push('/cadastrar')} className="productImage max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800">
      <a href="/">
        <Image
          className="p-3"
          src={productDetailsItem.image}
          alt="Imagem do produto"
          width={400}
          height={400}
        />
      </a>
      <div className="p-5">
        {discount &&
          campaignInfo.tipo === "de-por" && (
              <>
                <p className="mb-3 font-normal text-sky-400">
                  Economize: R$ {discount}
                </p>
              </>
            )}

        {discount &&
          campaignInfo.tipo ===
            "leve-pague" && (
              <>
                <p className="mb-3 font-normal text-sky-400">
                  Leve {campaignInfo.leve} pague {campaignInfo.pague}
                </p>
              </>
            )}

        <p>
          <span className="font-normal text-sky-600 mr-2">
            R$ {productDetailsItem.price - discount}
          </span>
          <small className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            R$ {productDetailsItem.price}
          </small>
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {productDetailsItem.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <b>Desconto: </b>
          {campaignInfo.nome}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {productDetailsItem.description}
        </p>
        <button
          onClick={() => handleProductData(productDetailsItem)}
          className="text-sky-600"
        >
          editar do produto
        </button>
      </div>
    </div>
  );
};
