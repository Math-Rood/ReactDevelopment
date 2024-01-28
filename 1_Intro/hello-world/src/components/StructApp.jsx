//rafce importa um modelo pronto para ser editado
const StructApp = () => {
    const a = 10;
    const b = 15;
    const math = function(){
        const result = a + b;
        console.log(result);
    }  
  return (
    <div>
        <p>
            A tem o valor {a} e B tem o valor {b} a soma dos dois é igual a...
        </p>
        <button onClick={math}>Clique para ver a soma</button>
    </div>
  )
}

export default StructApp