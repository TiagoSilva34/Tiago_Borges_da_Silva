"use client";

import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/productState";
import { ProductService } from "@/app/services/ProductService";
import moment from 'moment'

export const RegisterCampaign = () => {
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [de, setDe] = useState("");
  const [por, setPor] = useState("");

  const [leve, setLeve] = useState("");
  const [pague, setPague] = useState("");
  const [inativacao, setInativacao] = useState("");
  const [ativacao, setAtivacao] = useState("");
  const [productName, setProductName] = useState("")
  const [products, setProducts] = useState([]);

  const { setStorageType, setStorageData, getStorageData } = useContext(ProductContext);

  const handleCampaign = () => {
    const date = new Date()
    let hours = date.getHours()
    let seconds = date.getSeconds()
    const formattedHours = `${hours}:${seconds}`

    setStorageType("campaignData");
    let campaignData = {
      productName,
      tipo,
      nome,
      descricao,
      de: parseFloat(de),
      por: parseFloat(por),
      leve,
      pague,
      inativacao: moment(inativacao).format('DD/MM/YYYY') + '-' + formattedHours,
      ativacao: moment(ativacao).format('DD/MM/YYYY') + '-' + formattedHours
    };

    setStorageData(campaignData);
  };

  const handleGetDescription = (e) => {
    setProductName(e.target.value)

    products.map((product) => {
      if (product.title.includes(productName)) setDescricao(product.description)
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getStorageData();
    }, 1000);
  }, [getStorageData])

  useEffect(() => {
    if (!getStorageData())
    ProductService.getAllProducts().then((response) => {
      setProducts(response);
    });
  }, [getStorageData]);

  return (
    <div className="px-8 py-8">
      <form>
        <div className="mb-6">
          <label for="nome" className="block mb-2 font-medium text-blue-600">
            Nome do desconto
          </label>
          <select
            id="tipo"
            value={getStorageData() && getStorageData().title !== undefined ? getStorageData().title : productName}
            onChange={(e) => handleGetDescription(e)}
            className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
            disabled={getStorageData().title ? true : false}
          >
            <option>{getStorageData() && getStorageData().title !== undefined ? getStorageData().title : 'geSelecione o produto'}</option>
            {products.map((product) => (
              <option key={product.id} value={product.title}>{product.title}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label for="nome" className="block mb-2 font-medium text-blue-600">
            Nome do desconto
          </label>
          <input
            type="text"
            value={nome}
            id="nome"
            className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            for="descricao"
            className="block mb-2 font-medium text-blue-600"
          >
            Descrição
          </label>
          <textarea
            onChange={(e) => setDescricao(e.target.value)}
            value={getStorageData() && getStorageData().description !== undefined ? getStorageData().description : descricao}
            id="descricao"
            rows="4"
            className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
            disabled={getStorageData().description ? true : false}
          ></textarea>
        </div>
        <div className="mb-6">
          <label for="tipo" className="block mb-2 font-medium text-blue-600">
            Tipo de desconto
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
          >
            <option selected>Selecione o tipo de desconto</option>
            <option value="de-por">DE / POR</option>
            <option value="leve-pague">Leve + / Pague -</option>
          </select>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {tipo === "de-por" && (
            <>
              <div>
                <label
                  for="de"
                  className="block mb-2 font-medium text-blue-600"
                >
                  Preço DE
                </label>
                <input
                  type="text"
                  value={de}
                  id="de"
                  className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
                  required
                  onChange={(e) => setDe(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="por"
                  className="block mb-2 font-medium text-blue-600"
                >
                  Preço POR
                </label>
                <input
                  type="text"
                  value={por}
                  id="por"
                  className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
                  required
                  onChange={(e) => setPor(e.target.value)}
                />
              </div>
            </>
          )}

          {tipo === "leve-pague" && (
            <>
              <div>
                <label
                  for="de"
                  className="block mb-2 font-medium text-blue-600"
                >
                  Leve
                </label>
                <input
                  type="text"
                  value={leve}
                  id="leve"
                  className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
                  required
                  onChange={(e) => setLeve(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="por"
                  className="block mb-2 font-medium text-blue-600"
                >
                  Pague
                </label>
                <input
                  type="text"
                  value={pague}
                  id="pague"
                  className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
                  required
                  onChange={(e) => setPague(e.target.value)}
                />
              </div>
            </>
          )}

          <div>
            <label
              for="ativacao"
              className="block mb-2 font-medium text-blue-600"
            >
              Data de ativação
            </label>
            <input
              type="date"
              value={ativacao}
              id="ativacao"
              className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
              required
              onChange={e => setAtivacao(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inativacao"
              className="block mb-2 font-medium text-blue-600"
            >
              Data de inativação
            </label>
            <input
              type="date"
              value={inativacao}
              id="inativacao"
              className="border border-blue-600 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-2"
              required
              onChange={e => setInativacao(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-2 w-200 bg-blue-600 text-white border rounded-lg"
          onClick={handleCampaign}
        >
          salvar
        </button>
      </form>
    </div>
  );
};
