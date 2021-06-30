import { GetCryptos } from "../services/GetCryptos";
import { ConvertToNumber } from "../utils/ConvertToNumber";
//icons
import ethIcon from "../assets/images/tether.png";
import brlIcon from "../assets/images/brl.jpg";

export async function Cryptos() {
  const token = window.localStorage.getItem("tokenCapittal");
  const getAllCryptos = await GetCryptos(token);
  // assumir o valor do BRL para 0,2 pois a api não retorna o valor de usdt em real.
  // peguei um random icone pra brl e assumir que o usuário possui 0 reais
  // pois não foi citado o quanto ele deveria possuir
  let coins = [
    { coin: "USDT", value: 1, avaliable: 10, icon: ethIcon, idPrice: 99 },
    { coin: "BRL", value: 0.2, avaliable: 0, icon: brlIcon, idPrice: 100 },
  ];

  getAllCryptos.forEach((coin) => {
    // adiciona o preço do btc e eth para o primeiro input
    // poder usar e já transforma o lastPrice em número
    if (coin.coin === "BTC" || coin.coin === "ETH") {
      let value = ConvertToNumber(coin.lastPrice);
      coins.push({
        coin: coin.coin,
        value: value,
        avaliable: coin.coin === "BTC" ? 0.06 : 2,
        icon: coin.icon,
        idPrice: coin.idPrice,
      });
    }
  });
  return [getAllCryptos, coins];
}
