import Image from "next/image";
import welcomelog from './fotos/welcomelog.jpg';

export default function Welcome(): JSX.Element{
    return (
        <div className="page">
      <div className="container">
        <div className="header">
          <button className="settingButton">Einstellung</button>
          <button className="Regelnbutton">Regeln</button>
        </div>
      </div>
      <div className="welcome">
        <h1>Willkomen</h1>
        <div className="logo">
          <div><Image src={welcomelog} alt="Willkommensbild" /></div>
          <h3>DAMESPIEL</h3>
        </div>
      </div>
      <div className="lo_regist">
          <button className="einlogen">EINLOGEN</button>
          <button className="regist">REGISTRIEREN</button>
      </div>
    </div>
    )
}