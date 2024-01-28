const Events = () => {
    //colocando e dentro do () ele exibe as caracterisitcas por tras da função ao ser executada
    const handleMyEvent = () => {
        console.log("Ativou o evento!");
    }
    const renderSomething = (x) => {
        if(x){
            return <h1> Renderizando A</h1>
        }else{
            return <h1> Renderizando B</h1>
        }
    }
    return(
        <div>
            <div>
                {/*funções triggadas por cliques geralmente possuem handleNameEvent, se por () no handle a função
                é executada dentro do proprio codigo e nao no clique geralmente.*/}
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                {/*pode ser colocado funções diretamente no cliques tambem mas não é recomendado*/}
                <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
            </div>
            {/*é possivel colocar funções direto na pagina para renderizar algo seletivamente */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;