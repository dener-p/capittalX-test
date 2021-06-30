import { headerStyle } from "./headerStyle";

import { Parallax } from "react-parallax";

import bgCryptos from "../../assets/images/bg.jpg";

export function Header() {
  const classes = headerStyle();
  return (
    <header className={classes.header}>
      <div className={classes.purpleLine}></div>
      <div className={classes.whiteBar}></div>
      <div className={classes.purpleBar}></div>
      <Parallax bgImage={bgCryptos} bgClassName={classes.img} strength={500}>
        <div className={classes.parallexContainer}>
          <h1 className={classes.title}>Convert &#38; OTC Portal</h1>
          <p className={classes.text}>
            Faça trades de Bitcoin e outras criptomoedas em minutos
          </p>
        </div>
      </Parallax>
    </header>
  );
}
