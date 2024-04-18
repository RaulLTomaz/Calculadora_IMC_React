import { useState } from "react"

import styles from "./Formulario.module.css"

function Formulario() {
    const [altura, setAltura] = useState(1)
    const [peso, setPeso] = useState(0)

    const calculaIMC = () => {
        const imc = peso / (altura * altura)

        return (
            <p>O seu IMC é {imc.toFixed(2)}</p>
        )
    }

    return (
        <>
            <form className={styles.form}>
                <div className={styles.altura}>
                    <label>Altura (centimetros):</label>
                    <input onBlur={(e) => setAltura(parseFloat(e.target.value/100))} type="number" />
                </div>
                <div className={styles.peso}>
                    <label>Peso (quilos):</label>
                    <input onBlur={(e) => setPeso(parseFloat(e.target.value))} type="number" />
                </div>
            </form>
            {calculaIMC()}
        </>
    )
}

export default Formulario