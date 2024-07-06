
const dato = document.querySelector(".num");
const aca = document.querySelector(".aca");

let numeros = [];

const mostrar = document.querySelector("#solve");

mostrar.addEventListener("click", ()=>{

    const aca = document.querySelector(".aca");
    const item = document.createElement("DIV");
    item.classList.add("mi-clase");
    aca.appendChild(item);

    const miClase = document.querySelector(".mi-clase");

    const fragmento = document.createDocumentFragment();
    
    let k = 0;

    let ResData;
    

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

    const res = arrayAns[0][0];

    //Primera divicion del primer elemento --falta limitarlo
    //para cuando el valor sea 0 o 1;

    for (let i = 0; i <4; i++){
        arrayAns[0][i] = arrayAns[0][i]/res;
        console.log(arrayAns);
    }

    //Imprime por pantalla la primera operacion

    for (let i = 0; i <3; i++){
        for (let j = 0; j <4; j++){
            ResData = arrayAns[i][j];
            const Listado = document.createElement("P");
            Listado.innerHTML = ResData;
            fragmento.appendChild(Listado);
        }
    }

    const OperFirst = (arrayAns[1][0]*(-1));

    for (let i = 0; i <4; i++){
        ResData = (OperFirst*arrayAns[0][i])+arrayAns[1][i];
        console.log(ResData);
    }


    

    miClase.appendChild(fragmento);
    
    console.log(arrayAns);

    console.log(newArray);

});


