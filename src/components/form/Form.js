import { useState, useEffect } from "react";

import { Convertion } from "../../utils/Convertion";
import { ConvertToNumber } from "../../utils/ConvertToNumber";

import { SimpleModal } from "../modal/Modal";
import { Dropdown } from "../dropdown/Dropdown";

import { formStyle } from "./formStyle";

export function Form({ data, basicCryptos }) {
  const {
    form,
    content,
    label,
    input,
    inputsAndSelectContent,
    maxButton,
    submitButtonContent,
    submitButton,
    verticalLine,
    labelSpanContainer,
    span,
  } = formStyle();

  const [buttonText, setButtonText] = useState("SIMULAR");
  const [count, setCount] = useState(5);
  const [countStarted, setCountStarted] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [firstSelectValue, setFirstSelectValue] = useState(1);
  const [secondSelectValue, setSecondSelectValue] = useState(
    data[0]?.lastPrice
  );
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState("");
  const [avaliableVal, setAvaliableVal] = useState({
    coin: "USDT",
    avaliable: 10,
  });
  const [avaliableSecVal, setAvaliableSecVal] = useState("BTC");

  function handleSubmit(event) {
    event.preventDefault();
    //aqui é para verificar se a simulação foi confirmada
    if (confirmationText === "" || confirmationText === "REFAZER SIMULAÇÃO") {
      setConfirmationText("CONFIRMA SIMULAÇÃO");
      setCount(60);
      setButtonText("60 segundos");
      return;
    }
    //executado caso a simulação for confirmada
    //converte para float se for uma string
    const quant = ConvertToNumber(quantity);
    let secondSelectVal = 0;
    if (secondSelectValue === undefined) {
      secondSelectVal = data[0]?.lastPrice;
    } else {
      secondSelectVal = secondSelectValue;
    }
    const secondslcVal = ConvertToNumber(secondSelectVal);
    // Convertion é reponsável pelo cálculo.
    let res = Convertion(firstSelectValue, secondslcVal, quant);
    // seta o resultado que será exibido no segundo input.
    if (isNaN(res)) {
      setResult("Por favor, informe um número válido");
    } else {
      setResult(res);
    }
    // muda o texto, começa a contagem e disativa o button e os inputs
    setConfirmationText("REFAZER SIMULAÇÃO");
    setCountStarted(true);
    setDisabledButtons(true);
  }

  useEffect(() => {
    // verifica se a contagem começou e exibi o countdown no button.
    if (countStarted) {
      setButtonText(`${count} segundos`);
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    // desativa a contagem quando count chegar em 0 e reativa o buttons e inputs
    if (count === 0) {
      setCount(60);
      setCountStarted(false);
      setDisabledButtons(false);
      return;
    }
    // executa toda vez que estes dois estados sejam alterados
  }, [count, countStarted]);

  // pega o valor selecionado no modal e exibi no primiro input
  function handlePercentChoice(percent) {
    // aqui dinovo assumir que há somente duas casa decimais
    setQuantity((avaliableVal.avaliable * 100 * percent) / 10000);
  }
  //pega o valor da crypto/moeda selecionada em USDT
  function handleFirstDropdown(selected) {
    setFirstSelectValue(selected.value);
    //pega a quantidade fixa que o usário tem e o nome da moeda.
    // está variável também é para impedir que o usário selecion moedas
    // iguais no select dropbox;
    setAvaliableVal({
      coin: selected.coin,
      avaliable: selected.avaliable,
    });
  }
  //mesma função que a função acima mas paro o segundo dropbox
  function handleDropdown(selected) {
    setAvaliableSecVal(selected.coin);
    setSecondSelectValue(selected.lastPrice);
  }
  return (
    <div className={content}>
      <form onSubmit={handleSubmit} className={form}>
        <div className={labelSpanContainer}>
          <label htmlFor="firstInput" className={label}>
            De
          </label>
          <span className={span}>
            <SimpleModal onChange={handlePercentChoice}>
              Disponível: {`${avaliableVal.avaliable} ${avaliableVal.coin}`}
            </SimpleModal>
          </span>
        </div>
        <div className={inputsAndSelectContent}>
          <input
            name="firstInput"
            placeholder="Digite um valor"
            onChange={(event) => setQuantity(event.target.value)}
            value={quantity}
            disabled={disabledButtons}
            className={input}
          />
          <button
            disabled={disabledButtons}
            type="button"
            className={maxButton}
            onClick={() => {
              setQuantity(avaliableVal.avaliable);
            }}
          >
            Máx
          </button>
          <Dropdown
            data={basicCryptos}
            selectedCoin={avaliableSecVal}
            onChange={handleFirstDropdown}
          ></Dropdown>
        </div>
        <label htmlFor="secondInput" className={label}>
          Para
        </label>
        <div className={inputsAndSelectContent}>
          <input name="secondInput" className={input} disabled value={result} />
          <Dropdown
            data={data}
            selectedCoin={avaliableVal.coin}
            onChange={handleDropdown}
          ></Dropdown>
        </div>
        <div className={submitButtonContent}>
          <button
            className={submitButton}
            disabled={disabledButtons}
            type="submit"
          >
            {confirmationText}
            {confirmationText !== "" && <div className={verticalLine}></div>}
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
