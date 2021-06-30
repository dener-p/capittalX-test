import { useEffect, useState } from "react";

import { Form } from "../components/form/Form";
import { Header } from "../components/header/Header";

import { Cryptos } from "../services/Cryptos";

export function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [specificCryptos, setSpecificCryptos] = useState([]);
  async function getCryptos() {
    // pega todas as cryptos da api e as do especificas do primeiro input
    const [getAllCryptos, coins] = await Cryptos();
    setSpecificCryptos(coins);
    setCryptos(getAllCryptos);
  }
  useEffect(() => {
    getCryptos();
  }, []);

  return (
    <div>
      <Header />
      <Form data={cryptos} basicCryptos={specificCryptos} />
    </div>
  );
}
