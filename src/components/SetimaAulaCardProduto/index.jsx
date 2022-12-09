import './style.scss'

export function SetimaAulaCardProduto(props) {

    // function comprarProduto() {

    //     console.log(props.productData)

    // }

    return (

        <div className="setima-aula-card-produto-component">
            <img src={props.productData.picture} />
            <div className="card-body">
                <h1>{props.productData.name}</h1>
                <span>R$ {props.productData.price},00</span>
            </div>
            <button onClick={() => props.onDeleteProduct(props.productData.id)}>Deletar</button>
        </div>

    )

}