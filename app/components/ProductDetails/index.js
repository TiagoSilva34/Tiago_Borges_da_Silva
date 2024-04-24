import Image from "next/image";

export const ProductDetailsItem = ({ productDetailsItem }) => {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800">
      <a href="/">
        <Image
          src={productDetailsItem.image}
          alt="Imagem do produto"
          width={400}
          height={400}
        />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          R$ {productDetailsItem.price}
        </p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          R$ {productDetailsItem.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {productDetailsItem.description}
        </p>
        <button
        onClick={() => handleProductData(product)}
        className="text-blue-600"
      >
        editar do produto
      </button>
      </div>
    </div>
  );
};
