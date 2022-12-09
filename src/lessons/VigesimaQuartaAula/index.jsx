import { convertCurrency } from "../../hooks/convertCurrency"
import { useLocalStorage } from "../../hooks/useLocalStorage"

export function VigesimaQuartaAula() {

    const [email, setEmail] = useLocalStorage('', 'email')
    const [name, setName] = useLocalStorage('', 'name')

    const data = {
        name: '',
        email: '',
        saldo: 1500000.22
    }

    return (

        <>

            <h1>Vigésima Quarta Aula</h1>

            <label htmlFor="">E-mail</label>
            <input
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)} />

            <label htmlFor="">Name</label>
            <input
                type="text"
                value={name}
                onChange={event => setName(event.target.value)} />

            <h2>Saldo atual: {convertCurrency(data.saldo)}</h2>


        </>

    )

}