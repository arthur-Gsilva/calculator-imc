export type level = {
    classification: string,
    color: string,
    imc: number[],
    yourIMC?: number,
}

export const levels: level[] = [
    {classification: 'Você está abaixo do peso ideal', color: '#F4D03F', imc: [0, 18.5]},
    {classification: 'Você está no peso ideal, Parabéns!!!', color: '#1E8449', imc: [18.6, 24.9]},
    {classification: 'Você está acima do peso ideal', color: '#EC7063', imc: [25, 30]},
    {classification: 'Você está com obesidade ', color: 'red', imc: [31, 99999999999]}
]

export const calculateIMC = (height: number, weight: number) => {
    const imc = weight / (height * height)
    
    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            levels[i].yourIMC = +imc.toFixed(1)
            return levels[i]
        }
    }

    return null
}