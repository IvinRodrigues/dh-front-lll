export function convertCurrency(value) {

    const valueConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

    return valueConverted

}