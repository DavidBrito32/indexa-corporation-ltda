/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  //CONFIGURANDO O METODO POST NESTE HOOK
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [itemId, setItemId] = useState(null)
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod("POST");
      //DELETE
    }else if(method === 'DELETE'){
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        }
      });
      setMethod('DELETE');
      setItemId(data);
    }
  };

  //tratando erros
  const [error, setError] = useState(null);

  //--------------------------------------------
  //este USEEFFECT SERVE SOMENTE PARA O GET
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setLoading(false);
        setData(result);
      } catch (error) {
        console.log(error.message);
        setError("houve um erro ao carregar os dados")
      }
    };
    fetchData();
  }, [url, callFetch]);
  //--------------------------------------------

  //CONFIGURANDO O POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        setLoading(true);
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
        setLoading(false);
      }else if(method === 'DELETE'){
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config)
        const json = await res.json();
        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
