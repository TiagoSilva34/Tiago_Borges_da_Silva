"use client";

import { useState, useContext } from "react";
import { ProductContext } from "../../context/productState";

export const RegisterCampaign = () => {
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [de, setDe] = useState("");
  const [por, setPor] = useState("");

  const [leve, setLeve] = useState("");
  const [pague, setPague] = useState("");
  const [inativacao, setTInativacao] = useState("");
  const [ativacao, setTAtivacao] = useState("");

  const { setStorageType, setStorageData} = useContext(ProductContext)


  const handleCampaign = () => {
    debugger
    setStorageType("campaignData")
    const campaignData = {
      tipo,
      nome,
      descricao,
      de,
      por,
      leve,
      pague,
      inativacao,
      ativacao
    }

    setStorageData(campaignData)
  }

  return (
    <div>
      <form>
        <div class="mb-6">
          <label
            for="nome"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome do desconto
          </label>
          <input
            type="text"
            value={nome}
            id="nome"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="descricao"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descrição
          </label>
          <textarea
            onChange={e => setDescricao(e.target.value)}
            value={descricao}
            id="descricao"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div class="mb-6">
          <label
            for="tipo"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tipo de desconto
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Selecione o tipo de desconto</option>
            <option value="de-por">DE / POR</option>
            <option value="leve-pague">Leve + / Pague -</option>
          </select>
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
          {tipo === "de-por" && (
            <>
              <div>
                <label
                  for="de"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Preço DE
                </label>
                <input
                  type="text"
                  value={de}
                  id="de"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={e => setDe(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="por"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Preço POR
                </label>
                <input
                  type="text"
                  value={por}
                  id="por"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={e => setPor(e.target.value)}
                />
              </div>
            </>
          )}

          {tipo === "leve-pague" && (
            <>
              <div>
                <label
                  for="de"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Leve
                </label>
                <input
                  type="text"
                  value={leve}
                  id="leve"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={e => setLeve(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="por"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pague
                </label>
                <input
                  type="text"
                  value={pague}
                  id="pague"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={e => setPague(e.target.value)}
                />
              </div>
            </>
          )}

          <div>
            <label
              for="ativacao"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Data de ativação
            </label>
            <input
              type="date"
              value={ativacao}
              id="ativacao"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="inativacao"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Data de inativação
            </label>
            <input
              type="date"
              value={inativacao}
              id="inativacao"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleCampaign}
        >
          salvar
        </button>
      </form>
    </div>
  );
};
