//para indicador 1.2
let karhemK=[]
let karhemC=[]
let contador=0
// para indicador 1.3
let cicloOcompra=[]
let contador1=0
// para indicador 2.1
let costoInv=[]
let diasM=[]
let contador2=0
// para indicador 2.2
let contador3=0
let promedio=[]

const karhem1=()=>{
    let a = Number(document.getElementById("NPE").value)
    let b = Number(document.getElementById("RDPP").value)
    let cariño = ""
    let pet = a/b*100
    cariño+=`<h1>=${pet}%</h1>`
    document.getElementById("resultado").insertAdjacentHTML("beforeend",cariño);
    evaluar(pet)
}

const karhem2=()=>{
    let a = Number(document.getElementById("CRS").value)
    let b = Number(document.getElementById("CRE").value)
    let cariño = ""
    karhemK[contador]=a
    karhemC[contador]=b
    contador++
    cariño+=`<table class="default">
    <tr>
        <td>${contador}</td>
        <td>${a}</td>
        <td>${b}</td>
    </tr>
     
    </table>`
    document.getElementById("resultado1").insertAdjacentHTML("beforeend",cariño);
}
const karhem21=()=>{
    let total = karhemK.reduce((a, b) => a + b, 0);
    let total1 = karhemC.reduce((c, d) => c + d, 0);
    let pec = total/total1*100
    let cariño = ""
    cariño+=`<table class="default">
    <tr>
        <td>TOTALES</td>
        <td>${total}</td>
        <td>${total1}</td>
    </tr>
     
    </table><h1>=${pec}%</h1>`
    document.getElementById("resultado1").insertAdjacentHTML("beforeend",cariño);
    evaluar(pec)
}
const karhem3=()=>{
    let a = Number(document.getElementById("COC").value)
    cicloOcompra[contador1]=a
    let cariño = ""
    contador1++
    cariño+=`<table class="default">
    <tr>
        <td>${contador1}</td>
        <td>${a}</td>
    </tr></table>`
    document.getElementById("resultado2").insertAdjacentHTML("beforeend",cariño);
}
const karhem31=()=>{
    let total =cicloOcompra.reduce((a, b) => a + b, 0);
    let n=cicloOcompra.length
    let cdo = total/n
    let cariño = ""
    cariño+=`<h1>=${cdo}</h1>`
    document.getElementById("resultado2").insertAdjacentHTML("beforeend",cariño);
    evaluar(cdo)
}
const karhem4=()=>{
    let a = Number(document.getElementById("CPI").value)
    let b = Number(document.getElementById("DM").value)
    costoInv[contador2]=a
    diasM[contador2]=b
    let cariño = ""
    contador2++
    cariño+=`<table class="default">
    <tr>
        <td>${b}</td>
        <td>${a}</td>
    </tr></table>`
    document.getElementById("resultado3").insertAdjacentHTML("beforeend",cariño);
}
const karhem41=()=>{
    let total =costoInv.reduce((a, b) => a + b, 0);
    let dias =diasM.reduce((a, b) => a + b, 0);
    let cnmv= Number(document.getElementById("CNMVP").value)
    let n=costoInv.length
    let cp = total/n
    let di = cp*dias/cnmv
    let cariño = ""
    cariño+=`<h1>=${di} dias</h1>`
    document.getElementById("resultado3").insertAdjacentHTML("beforeend",cariño);
    evaluar(di)
}

const karhem5=()=>{
    let a = Number(document.getElementById("NRR").value)
    let b = Number(document.getElementById("NRS").value)
    promedio[contador3]=a/b*100
    
    let cariño = ""
    contador3++
    cariño+=`<table class="default">
    <tr>
        <td>${contador3}</td>
        <td>${a}</td>
        <td>${b}</td>
        <td>${promedio[contador3-1]}%</td>
    </tr></table>`
    document.getElementById("resultado4").insertAdjacentHTML("beforeend",cariño);
}
const karhem51=()=>{
    let total = promedio.reduce((a, b) => a + b, 0);
    let n = promedio.length
    let prom = total/n
    let cariño=""
    cariño+=`<table class="default">
    <tr>
        <td>PROMEDIO</td>
        <td>${prom}%</td>
        
    </tr></table>`
    document.getElementById("resultado4").insertAdjacentHTML("beforeend",cariño);
    evaluar(prom)
}


const karhem6=()=>{
    let a = Number(document.getElementById("CDP").value)
    let b = Number(document.getElementById("VNP").value)
    let cariño = ""
    let pet = a/b*100
    cariño+=`<h1>=${pet}%</h1>`
    document.getElementById("resultado5").insertAdjacentHTML("beforeend",cariño);
    evaluar(pet)
}
const karhem7=()=>{
    let a = Number(document.getElementById("CDP1").value)
    let b = Number(document.getElementById("TUEV").value)
    let cariño = ""
    let pet = a/b
    cariño+=`<h1>=${pet}</h1>`
    document.getElementById("resultado6").insertAdjacentHTML("beforeend",cariño);
    evaluar(pet)
}
const karhem8=()=>{
    let a = Number(document.getElementById("CDP2").value)
    let b = Number(document.getElementById("TKM").value)
    let cariño = ""
    let pet = a/b
    cariño+=`<h1>=${pet}</h1>`
    document.getElementById("resultado7").insertAdjacentHTML("beforeend",cariño);
    evaluar(pet)
}
function yampi(kpi){
    // document.getElementById('seccion1').style.display = 'none';
    // document.getElementById('seccion2').style.display = 'none';
    // document.getElementById('seccion3').style.display = 'none';
    for(i=1;i<10;i++){
        let a=`kpi${i}`
        // console.log(a)
        document.getElementById(a).style.display = 'none';
    }
    let intro = document.getElementById(kpi)
    intro.style.display = 'flex';
}

const pintar=(pasada)=>{
    document.getElementById("red").style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    document.getElementById("green").style.backgroundColor =  'rgba(13, 156, 13, 0.2)';
    if(pasada=="valido"){
        document.getElementById("green").style.backgroundColor =  'rgba(13, 156, 13, 100)';
    }else if(pasada=="nValido"){
        document.getElementById("red").style.backgroundColor =  'rgba(255, 0, 0, 100)';
    }
}
const evaluar=(resultado)=>{
    let a = Number(document.getElementById("LI").value)
    let b = Number(document.getElementById("LS").value) 
    if (resultado>=a && resultado<=b ){
        pintar('valido')        
    }else{
        pintar('nValido')
    }
}
