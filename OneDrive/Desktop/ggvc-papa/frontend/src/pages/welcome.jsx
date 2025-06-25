import { useState } from 'react'
import { Header } from '../components/header.jsx'
import { ButtonAreas } from '../components/buttonAreas.jsx'
import { Weather } from '../components/weather.jsx'

// import './welcome.css'
import { Menu } from '../components/Menuh.jsx'

function WelcomePage() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex justify-center items-center w-full h-screen bg-[#fffdef]">
      <Header nav={<Menu/>} text="Bienvenido Quice" img={"/img/bienvenidosGanado.png"}/>

      <div className="mt-[20%] w-full h-[60%] grid grid-cols-[2fr_1fr] grid-rows-1 items-center">
        <div className="grid grid-cols-2 grid-rows-2 w-[80%] h-[90%] ml-[20%] items-center">
          <ButtonAreas img="/img/ganadosobrioia.jpg" text={"Ganado"} ruta="/ganado" />
          <ButtonAreas img="/img/cultivos.jpg" text={"Cultivos"} ruta="#"/>
          <ButtonAreas img="/img/potreros2.jpg" text={"Potreros"} ruta="#"/>
          <ButtonAreas img="/img/nomina.jpg" text={"Nomina"} ruta="#"/>
        </div>
        <div className="w-[60%] h-[70%]bg-gradient-to-r from-[#ccd5ae] to-[#e9edc9] border-4 border-[#2b3701] rounded-[10%] flex justify-center items-center flex-col shadow-[-10px_0px_10px_-2px_rgba(0,0,0,0.164)]">
          <Weather/>
        </div>
      </div>
    </div>
    </>
  )
}

export default WelcomePage