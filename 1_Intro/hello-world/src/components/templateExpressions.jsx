const TemplateExpressions = () => {
    //estrutura de uma expressão. Data é como se fosse um array multivalorado
    const name = "Matheus";
    const data = {
        age: 25,
        job: "Programador"
    };
    return(
        <div>
            <h1>Meu nome é {name}</h1>
            <h1>Tenho {data.age}</h1>
            <h1>E trabalho como {data.job}</h1>
        </div>
    )
}

export default TemplateExpressions;