var wxs=0 
function webs() {
  wxs=0
  document.querySelectorAll("a").forEach(function(o) {
  o.remove();
});
document.querySelectorAll("img").forEach(function(O) {
  if (O.id !== "busqueda") {
    O.remove();
  }
});

}
function imga() {
  wxs=1
  document.querySelectorAll("a").forEach(function(o) {
  o.remove();
});
document.querySelectorAll("img").forEach(function(O) {
  if (O.id !== "busqueda") {
    O.remove();
  }
});

}
function documen() {
  wxs=2
  document.querySelectorAll("a").forEach(function(o) {
  o.remove();
});
document.querySelectorAll("img").forEach(function(O) {
  if (O.id !== "busqueda") {
    O.remove();
  }
});

}
window.addEventListener("DOMContentLoaded", function () {
var adsc= 0



fetch('webs.json')
  .then(response => response.json())
  .then(data => {
 
var x = data
//alert("este sitio esta en desarrollo, automaticamente luego de aceptar esta alerta usted se hace responsable del sitio, las web que se encuentran nuestra web no tienen nada que ver con nuestro sitio solo tomamos su link y su descripcion, aclarado esto puede ingresar al sitio con su resposabilidad")

fetch('plm.json')
  .then(response => response.json())
  .then(mp => {
    for (let h = 0; h < mp.length; h++) {
      for (let i = x.length - 1; i >= 0; i--) {
        if (x[i].toLowerCase().includes(mp[h].toLowerCase())) {
          x.splice(i, 1);
        }
      }
    }
  });

 var boto =  document.getElementById("boto")
boto.addEventListener("click",()=>{
buscar()
})
window.addEventListener("keydown",(e)=>{
if (e.keyCode===13) {
buscar()
}
})


function buscar() {

  if (wxs===0) {
    
var input = document.getElementById("input").value.trim().toLowerCase();
  for (const  C in x) {
for (let i = 0; i < x[C].length; i++) {
var f = x[C][i].split("|")    
var link=f[0]
var linknombre = link.substring(0, link.lastIndexOf("."));
var mensaje = f[1].trim().toLowerCase();
if (input===link) {
var a = document.createElement("a")
a.href=link
a.textContent=mensaje+"(web)"
document.body.appendChild(a)
}
if (input.includes(mensaje)) {
var a = document.createElement("a")
a.href=link
a.textContent=mensaje
document.body.appendChild(a)
}
var M= mensaje.split(" ")
var hh =false 
for (let w = 0; w < M.length; w++) {
if (M[w].length > 3 && (M[w].startsWith(input) || input.startsWith(M[w]))) {
var a = document.createElement("a")
a.href=link
a.textContent=mensaje
document.body.appendChild(a)
hh=true
break}}}}
if(!hh){
console.log("huy!")
return
}
  }



  fetch('imgLI.json')
  .then(response => response.json())
  .then(data => {
    var dato=data 
if (wxs===1) {

var input = document.getElementById("input").value.trim().toLowerCase();
  for (const  C in dato) {
for (let i = 0; i < dato[C].length; i++) {
var f = dato[C][i].split("|")    
var link=f[0]
var linknombre = link.substring(0, link.lastIndexOf("."))
var mensaje = f[1].trim().toLowerCase();
if (input===link) {
var img = document.createElement("img")
img.alt=mensaje
img.src=link
const Ymax = 800;
const Xmax =800;
img.onload = () => {
  let widthImg = img.naturalWidth;
  let heightImg = img.naturalHeight;
if (widthImg >Xmax || heightImg> Ymax)  {
img.style.height=heightImg*50+"px"
img.style.width=widthImg*50+"px"
}
}
//img.style.background="black"
document.body.appendChild(img)
}
if (input.includes(mensaje)) {
var img = document.createElement("img")
img.src=link
const Ymax = 800;
const Xmax =800;
img.onload = () => {
  let widthImg = img.naturalWidth;
  let heightImg = img.naturalHeight;
if (widthImg >Xmax ||heightImg> Ymax)  {
img.style.height=heightImg*50+"px"
img.style.width=widthImg*50+"px"
}
}
//img.style.background="black"
document.body.appendChild(img)
}
var M= mensaje.split(" ")
var hh =false 
for (let w = 0; w < M.length; w++) {
if (M[w].length > 3 && (M[w].startsWith(input) || input.startsWith(M[w]))) {
var img = document.createElement("img")
img.src=link
const Ymax = 800;
const Xmax =800;
img.onload = () => {
  let widthImg = img.naturalWidth;
  let heightImg = img.naturalHeight;
if (widthImg >Xmax || heightImg> Ymax)  {
img.style.height=heightImg*50+"px"
img.style.width=widthImg*50+"px"
}
}
//img.style.background="black"
img.alt=mensaje
document.body.appendChild(img)
hh=true
break}}}}
if(!hh){
console.log("huy!")
return
}






}
 })

}



  })


 

})



  //  fecha finalizacion  de extraccion de info con autorizacon del robots.txt":"1 agosto de 2025 2:17 AM (horario argentino)
