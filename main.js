function discrim(a, b, c)

 {

 return (b*b - 4*a*c);

} 

 function solucionar(a, b, c, sol)

 {

 let disc = discrim(a,b,c);

 if (disc < 0)

    alert("Sin solución real");

 else

    {

    sol[0] = (-b + Math.sqrt(disc))/(2*a);

    sol[1] = (-b - Math.sqrt(disc))/(2*a);

    } 

} 
function Comprobar(obj){

  if ( !obj.Opciones[0].checked && 

     !obj.Opciones[1].checked &&

     !obj.Opciones[2].checked)

  {

       alert("Debe elegir una opción")

        return false;

  }

  return true 

}
  <div class="rotaryCnt down">

    <div class="digitCnt" id="dig2"></div>

    <div class="digitCnt" id="dig1"></div>

    <div class="digitCnt" id="dig0"></div>
    </div>
    function createDigits(name, max, duration) {

    let dig;

    let blocks=[];              

    let node = document.getElementById(name);

    for (i = 0; i < 2; i++) {

        dig = document.createElement("div");

        dig.innerText = i.toString().padStart(2, '0');

        dig.classList.add("blq" + i);

        dig.classList.add("animation");

        dig.style.setProperty("animation-duration", duration + "s");

        node.appendChild(dig);

        blocks.push(dig);              

    }

    dig.toggleBlqs = true; // true down-up, false up-down

    dig.maxCount = max;

    dig.duration = duration;

    dig.digits = blocks;              

    dig.addEventListener("animationend", endAnim);              

}

function endAnim(event) {

    let value = 0;

    let maxCount;

    let node = event.target;

    let digs = node.digits;

    digs[0].classList.remove("animation");

    digs[1].classList.remove("animation");

    maxCount = digs[1].maxCount;

    
    if (digs[1].toggleBlqs) {

        updatePosValue(digs[1], digs[0], maxCount);

    } else {

        updatePosValue(digs[0], digs[1], maxCount);

    }


    digs[0].classList.add("animation");

    digs[1].classList.add("animation");

    digs[1].toggleBlqs = !digs[1].toggleBlqs;

}


function updatePosValue(visible, novisible, maxCount) {

    let value = 0;

    visible.classList.replace("blq1", "blq0");

    novisible.classList.replace("blq0", "blq1");

    value = parseInt(novisible.innerText) + 2;

    value = (value >= maxCount) ? (value - maxCount) : value;

    novisible.innerText = value.toString().padStart(2, '0');

}

createDigits("dig0", 10, 1);

createDigits("dig1", 10, 10);

createDigits("dig2", 5, 100);     



 function sumar(sum1, sum2)
{
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}
alert("100 + 170 = "+ sumar(100, 170) );

  function saludar(){
  let tiempo = new Date();
  let  hora, cad="son las ";
  with (tiempo){
    hora = getHours();
    cad += hora + ":" + getMinutes()+":"+getSeconds();
  }
if (hora < 12 && hora > 6 )
   cad = "Buenos días, "+ cad;
else if (hora < 18)
   cad = "Buenas tardes, "+ cad;
else 
   cad = "Buenas noches, " + cad;
return cad
}
document.write(saludar());

