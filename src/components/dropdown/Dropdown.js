import React, { useState } from "react";
import { dropdownStyle } from "./dropdownStyle";

export function Dropdown(props) {
  const classes = dropdownStyle();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption({ coin: value.coin, icon: value.icon });
    props.onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={classes.dropDownContainer}>
      <button
        type="button"
        className={classes.dropDownHeader}
        onClick={toggling}
      >
        {/* caso não tenha nenhuma opção selecionada exibirá a primeira */}
        {selectedOption === null ? (
          <p className={classes.headerItems}>
            <img
              className={classes.icons}
              src={props.data[0]?.icon}
              alt={props.data[0]?.coin}
            />
            {props.data[0]?.coin}
          </p>
        ) : (
          <p className={classes.headerItems}>
            <img
              className={classes.icons}
              src={selectedOption.icon}
              alt={selectedOption.coin}
            />
            {selectedOption.coin}
          </p>
        )}
      </button>
      {isOpen && (
        <ul className={classes.dropDownList}>
          {props.data.map((option) => {
            // verrifica se a moeda seleciona no outro select é a mesma
            // a ser exibida neste select, caso sim não a exibi
            if (option.coin !== props.selectedCoin) {
              return (
                <li
                  className={classes.listItem}
                  onClick={onOptionClicked(option)}
                  key={option.idPrice}
                >
                  <img
                    className={classes.icons}
                    src={option.icon}
                    alt={option.coin}
                  />
                  {option.coin}
                </li>
              );
            } else return "";
          })}
        </ul>
      )}
    </div>
  );
}
