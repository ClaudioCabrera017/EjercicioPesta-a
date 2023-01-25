import React, {useState} from  'react';

const Pestaña = ({pestaña, setpestaña}) => {

    const [pest, setpest] = useState("")

    const createpestaña = (e) => {
        e.preventDefault();
        const newPest =  {pest} 
        console.log("Welcome", newPest);
        setpestaña([...pestaña, pest])
    };
    return (
    <form onSubmit={ createpestaña }>
        <div className="caja">
            <div>
                <label>1: </label> 
                <button type="submit" >Add</button>
                <input type="text" onChange={ (e) => setpest(e.target.value) } />
                {(pest.length <5 ) ? <p>Menos de 5 letras</p> : null}
            </div>
            <div>
                <label>2: </label> 
                <button type="submit" >Add</button>
                <input type="text" onChange={ (e) => setpest(e.target.value) } />
                {(pest.length <5 ) ? <p>Menos de 5 letras</p> : null}
            </div>
            <div>
                <label>3: </label>
                <button type="submit" >Add</button>
                <input type="text" onChange={ (e) => setpest(e.target.value) } />
                {(pest.length <5 ) ? <p>Menos de 5 letras</p> : null}
            </div>   
        </div>
    </form>
    )
}
export default Pestaña;
