const anana = document.getElementById("anana");
const contador = document.getElementById("contador");
const manzana = document.getElementById("manzana");
const tallom = document.getElementById("tallo");
const cuerpom = document.getElementById("cuerpom");
const tall = document.getElementById("tall");
const cuerp = document.getElementById("cuerp");
const tallo = document.querySelector("tallo");
const cuerpo = document.getElementById("cuerpo");
const naranja = document.getElementById("naranja");
const mitad = document.createElement("div");
const c1 =  document.getElementById("c1")
const c2 =  document.getElementById("c2")
const c3 =  document.getElementById("c3")
const perder = document.getElementById("perder");
const cpe = document.getElementById("cpe")
window.addEventListener("click", empezar, { once: true });


function empezar() {
cpe.remove()
 var coA = 0;
var coM = 0;
var coN = 0;
var act = 0;
var q = 0;
var velocidad=0
var X = Math.floor(Math.random() * window.innerWidth);
var Ym = -200;
var Xn = Math.floor(Math.random() * window.innerWidth);
var Yn = -200;
var Xa = Math.floor(Math.random() * window.innerWidth);
var Ya = -200;
var puntos = 0;
manzana.style.left = X + "px";
anana.style.left = Xa + "px";
naranja.style.left = Xn + "px";
Activar();
function Activar() {
    window.addEventListener("mousemove", (e) => {
   
        var x = e.clientX;
        var y = e.clientX
    });
    manzana.addEventListener("mousemove", (e) => {
  c1.play()
        if (coM === 0) {
            puntos += 1
        };
        coM = 1;
velocidad +=10
        contador.textContent = puntos;
        tallom.style.left = "100px";
        cuerpom.style.width = "90px";
        cuerpom.style.height = "90px";
        cuerpom.style.border = "10px solid red";
        cuerpom.style.background = "rgb(255, 216, 131)";
        q = 9;
        cuerpom.style.rotate = q + "deg"
    });
    naranja.addEventListener("mousemove", (e) => {
         c2.play()
        if (coN === 0) {
            puntos += 1
        };
        coN = 1;
        velocidad +=10
        contador.textContent = puntos;
        tall.style.left = "100px";
        cuerp.style.width = "90px";
        cuerp.style.height = "90px";
        cuerp.style.border = "10px solid rgb(255, 136, 0)";
        cuerp.style.background = "rgb(255, 216, 131)";
        q = 18;
        cuerp.style.rotate = q + "deg"
    });
    anana.addEventListener("mousemove", (e) => {
          c3.play()
        if (coA === 0) {
            puntos += 1
        };
        coA = 1;
        velocidad +=10
        contador.textContent = puntos;
        cuerpo.style.width = "190px";
        cuerpo.style.height = "290px";
        cuerpo.style.border = "10px solid rgb(255, 187, 39)";
        cuerpo.style.background = "rgb(255, 202, 88)"
    })
};
setInterval(() => {
    Yn += 1;
    naranja.style.top = Yn +  "px"
},
20);
setInterval(() => {
    Ya += 2;
    anana.style.top = Ya + "px"
},
3);
setInterval(() => {
    Ym += 1;
    manzana.style.top = Ym + "px";
    if (Ya > 1126) {
        if (coA === 0) {
            perder.style.visibility = "visible";
            return
        };
        coA = 0;
        Xa = Math.floor(Math.random() * window.innerWidth);
        Ya = -200;
        cuerpo.style.width = "200px";
        cuerpo.style.height = "300px";
        cuerpo.style.border = "";
        cuerpo.style.background = "rgb(255, 187, 39)";
        anana.style.left = Xa + "px"
    };
    if (Ym > 1126) {
        if (coM === 0) {
            perder.style.visibility = "visible";
            return
        };
        coM = 0;
        X = Math.floor(Math.random() *  window.innerWidth);
        Ym = -200;
        manzana.style.left = X + "px";
        tallom.style.left = "40px";
        cuerpom.style.width = "100px";
        cuerpom.style.height = "100px ";
        cuerpom.style.border = "";
        cuerpom.style.rotate = "0deg";
        cuerpom.style.background = "red"
    };
    if (Yn > 1126) {
        if (coN === 0) {
            perder.style.visibility = "visible";
            return
        };
        Xn = Math.floor(Math.random() *  window.innerWidth);
        Yn = -200;
        naranja.style.top = Yn + "px";
        naranja.style.left = Xn +   "px";
        tall.style.left = "40px";
        cuerp.style.width = "100px";
        cuerp.style.height = "100px";
        cuerp.style.border = "";
        cuerp.style.rotate = "0deg";
        cuerp.style.background = "rgb(255, 136, 0)"
    }
},
10);
window.addEventListener("click", (a) => {
    var x = a.clientX;
    var y = a.clientX;
    console.log(`y: $ {
        Ya
    }`)
});
perder.addEventListener("click", () => {
    window.location.reload()
})   
}
