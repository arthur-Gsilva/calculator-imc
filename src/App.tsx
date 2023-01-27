import { FormEvent, useState } from 'react';
import styles from './App.module.css'
import { calculateIMC, level } from './helpers/calc'
import { Result } from './components/results/results'

const App = () => {


    const [heightField, setHeightField] = useState<number>(0)
    const [weightField, setWeightField] = useState<number>(0)
    const [toShow, setToShow] = useState<level | null>(null)

    const calculate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(weightField && heightField){
            setToShow(calculateIMC(heightField, weightField))
            

            setHeightField(0)
            setWeightField(0)
            setTimeout(() => {
                setToShow(null)
            }, 4500)
        } else{
            alert('preencha todos os campos')
        }
    }


  return(
    <div className={styles.main}>
        <div className={styles.container}>
            <h1>Calculadora IMC</h1>
            <div className={styles.line}></div>

            <form className={styles.form} onSubmit={calculate}>
                <input 
                    type= 'number'
                    placeholder='Digite sua Altura. Ex: 1.8'
                    value={heightField === 0 ? '' : heightField}
                    onChange= {e => setHeightField(+e.target.value)}
                    disabled= {toShow ? true : false}
                />

                <input 
                    type= 'number'
                    placeholder='Digite seu Peso. Ex: 70'
                    value={weightField === 0 ? '' : weightField}
                    onChange= {e => setWeightField(+e.target.value)} 
                    disabled= {toShow ? true : false}
                />

                <button disabled= {toShow ? true : false}>Calcular</button>
            </form>


            <div className={styles.result}>
                {toShow &&
                    
                    <Result item={toShow}/>
                    
                }
            </div>

        </div>
    </div>
  )
}

export default App;
