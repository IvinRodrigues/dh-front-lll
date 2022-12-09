import { useEffect, useReducer } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import { useTheme } from '../../hooks/useTheme'

import './style.scss'

export function DecimaQuintaAula() {

    const navigate = useNavigate()
    const [locations, setLocations] = useState([])








    // const [counter, setCounter] = useState(0)

    // function addCounter() {

    //     setCounter(counter + 1)

    // }

    // function removeCounter() {

    //     setCounter(counter - 1)

    // }

    function counterReducer(state, action) {

        switch (action.type) {

            case 'add':
                return state + 1

            case 'remove':
                return state - 1

            default:
                throw new Error('Action não encontrada')

        }

    }
    const [counter, dispatchCounter] = useReducer(counterReducer, 0)
    const [cep, setCep] = useState('')
    const { theme } = useTheme()

    // const { id } = useParams()

    useEffect(() => {

        // request baseada no Id

    }, [])

    function searchCep(cepRecieved) {

        setCep(cepRecieved)

        if (cepRecieved.length === 8) {

            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                response => {
                    response.json().then(
                        address => {

                            if (address.erro !== undefined) {

                                // Deu erro

                            } else {

                                // Deu Sucesso
                                setLocations([...locations, address])

                            }
                        }
                    )
                }
            )

        }

    }



    function deleteLocation(currentLocation) {

        console.log(currentLocation)

    }

    function redirectUser() {

        navigate('/to-do')

    }













    const questions = [
        {
            title: 'Pergunta 1?', answers: [
                { title: 'Resposta 1 da primeira pergunta' },
                { title: 'Resposta 2 da primeira pergunta' },
            ]
        }, {
            title: 'Pergunta 2?', answers: [
                { title: 'Resposta 1 da segunda pergunta' },
                { title: 'Resposta 2 da segunda pergunta' },
            ]
        }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState([])




    return (

        <div className={`decima-quarta-aula-component ${theme}`}>

            {/* <p>O número atual do contador é: {counter}</p>

            <button onClick={() => dispatchCounter({ type: 'add' })}>Adicionar</button>
            <button onClick={() => dispatchCounter({ type: 'removedfsfsdf' })}>Remover</button> */}

            <h1>{questions[currentQuestionIndex].title}</h1>

            {
                questions[currentQuestionIndex].answers.map(
                    answer => ( <p>{answer.title}</p> )
                )
            }

            <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Proxima pergunta</button>

            {/* <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input
                        type="number"
                        value={cep}
                        aria-label="cep"
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>

                <button
                    aria-label="submit-button"
                >Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => (
                            <DecimaQuintaAulaItem
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                            />
                        )
                    )
                }

            </section> */}

        </div>

    )

}