// uma alternativa para não precisar usar o argumento props a todo momento
// maneira destrut (eu acho que escrevi assim rs
function Pessoa({name, idade, profession, photo}){

    return (
    <div>
        <img src={photo} alt={name}/>
        <h2>Name: {name}</h2>
        <p>Idade: {idade}</p>
        <p>Profession: {profession}</p>
    </div>
    )
}

export default Pessoa