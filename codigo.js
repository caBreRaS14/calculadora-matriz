
const dato = document.querySelector(".num");
const aca = document.querySelector(".aca");

let numeros = [];

const mostrar = document.querySelector("#solve");

mostrar.addEventListener("click", ()=>{

    let k = 0;
    
    let inputs = document.querySelectorAll('input[type="number"]');
    let arrayAns = [[],[],[]];
    let newArray = [];
    for(let i = 0; i<inputs.length; i++){
        let input = inputs[i];
        newArray.push(Number(input.value));
    }

    for(let i = 0; i<3;i++){
        for(let j=0; j<4; j++){
            arrayAns[i].splice(j,0,newArray[k]);
            k=k+1;
        }
    }

    //Primera divicion del primer elemento --falta limitarlo
    //para cuando el valor sea 0 o 1;

    const res = arrayAns[0][0];

    for (let i = 0; i <4; i++){
        arrayAns[0][i] = arrayAns[0][i]/res;

    }

    mostrar(arrayAns);

    //Convertir en 0 los valores de las filas inferiores

    let OperFirst = (arrayAns[1][0]*(-1));
    let Opersecond = (arrayAns[2][0]*(-1));

    for (let i = 0; i <4; i++){
        arrayAns[1][i] = (OperFirst*arrayAns[0][i])+arrayAns[1][i];
        arrayAns[2][i] = (Opersecond*arrayAns[0][i])+arrayAns[2][i];
    }

    mostrar(arrayAns);

    //segunda divicion del segundo elemento 
    const res1 = arrayAns[1][1];

    for (let i = 1; i <4; i++){
        arrayAns[1][i] = arrayAns[1][i]/res1;
    }

    mostrar(arrayAns);

    //Convertir en 0 los valores de las filas inferior y superior

    OperFirst = (arrayAns[0][1]*(-1));
    Opersecond = (arrayAns[2][1]*(-1));

    for (let i = 0; i <4; i++){
        arrayAns[0][i] = (OperFirst*arrayAns[1][i])+arrayAns[0][i];
        arrayAns[2][i] = (Opersecond*arrayAns[1][i])+arrayAns[2][i];
    }

    mostrar(arrayAns);

    //tercera divicion del tercer elemento 
    const res2 = arrayAns[2][2];

    for (let i = 2; i <4; i++){
        arrayAns[2][i] = arrayAns[2][i]/res2;
    }

    mostrar(arrayAns);

    //Convertir en 0 los valores de las filas inferior y superior

    OperFirst = (arrayAns[0][2]*(-1));
    Opersecond = (arrayAns[1][2]*(-1));

    for (let i = 0; i <4; i++){
        arrayAns[0][i] = (OperFirst*arrayAns[2][i])+arrayAns[0][i];
        arrayAns[1][i] = (Opersecond*arrayAns[2][i])+arrayAns[1][i];
    }

    mostrar(arrayAns);

    //Funcion imprime por pantalla cada operacion

    function mostrar(arrayAns){
        const aca = document.querySelector(".aca");
        const item = document.createElement("DIV");
        item.classList.add("mi-clase");
        item.innerHTML = 
        `<p>(${Number(arrayAns[0][0])})x </p>
        <p>(${Number(arrayAns[0][1])})y</p>
        <p>(${Number(arrayAns[0][2])})z = </p>
        <p>${Number(arrayAns[0][3])}</p>

        <p>(${Number(arrayAns[1][0])})x</p>
        <p>(${Number(arrayAns[1][1])})y</p>
        <p>(${Number(arrayAns[1][2])})z = </p>
        <p>${Number(arrayAns[1][3])}</p>

        <p>(${Number(arrayAns[2][0])})x</p>
        <p>(${Number(arrayAns[2][1])})y</p>
        <p>(${Number(arrayAns[2][2])})z = </p>
        <p>${Number(arrayAns[2][3])}</p>
        <br>
        `
        aca.appendChild(item);
    }

});


