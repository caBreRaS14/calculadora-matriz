
const dato = document.querySelector(".num");
const aca = document.querySelector(".aca");

let numeros = [];

const mostrar = document.querySelector("#solve");

mostrar.addEventListener("click", ()=>{
    const mos = document.createElement("P");
    // const textIt = document.createTextNode(input.value);
    // mos.appendChild(textIt);
    // aca.appendChild(mos)
    let inputs = document.querySelectorAll('input[type="number"]');

    for (let i = 0; i<12; i++){

        let input = inputs[i];
        let res = input.value
        let res1 = Number(res)
    

        const mos = document.createElement("P");
        const textIt = document.createTextNode(res1);
        mos.appendChild(textIt);
        aca.appendChild(mos);

        numeros.push(Number(res1));
        
        
    }

    for (let i = 0; i<4; i++){

        let div = numeros[0];
        let ResDiv = numeros[i]/div;

        let decimal = new Fraction(ResDiv);

        const mos = document.createElement("P");
        const textIt = document.createTextNode(decimal);
        mos.appendChild(textIt);
        aca.appendChild(mos);
        let NewArray = [];
        NewArray.push(Number(decimal));
    }

    




    console.log(numeros);


});



