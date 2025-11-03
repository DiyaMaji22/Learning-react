function calcultaweight(wt){
    return(
        wt*100
    )
}



function JsxBasics(){

    return(

        <div>
            <h1>I have calculated {10*5}</h1>
            <h2>The calculated weight is  :{calcultaweight(5)}</h2>
            <button onClick={()=>{alert("This is an alert")}}>Click me </button>
        </div>
    )   
}



export default JsxBasics;