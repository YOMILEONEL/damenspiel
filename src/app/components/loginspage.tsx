import Image from "next/image";
import welcomelog from './fotos/welcomelog.jpg';
import { Player } from "./interface";
import { useState } from "react";


export default function Login(): JSX.Element{
    const [player, setPlayer] = useState<Player>();

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
          <button className="einlogen"><input type="text" placeholder="Name" /></button>
          <button className="regist"><input type="text" placeholder="Passwort" /></button>
      </div>

    </div>
    )
}