const part = document.getElementById("part")
document.addEventListener('mousemove', function(e){
let element = document.createElement('div')
element.className = 'element'
element.style.position = 'absolute'
element.style.left = e.clientX + 'px'
element.style.top = (e.clientY - 10) + 'px'
element.style.transition = 'all 1s ease'
document.body.prepend(element)
setTimeout(function(){
let directionX = Math.random() < -10 ? -1 : 1
let directionY = Math.random() < -10 ? -1 : 1
let offsetX = directionX * (Math.random() * 300)
let offsetY = directionY * (Math.random() * 300)
element.style.left = (parseInt(element.style.left) + offsetX) + 'px'
element.style.top = (parseInt(element.style.top) + offsetY) + 'px'
element.style.opacity = 0
element.style.transform = 'scale(0.25)'
},10)
setTimeout(function(){
element.remove()
},1100)
})




window.addEventListener("mousemove",(e)=>{
var X=e.clientX
var Y=e.clientY
part.style.left=X-30+"px"
part.style.top=Y-20+"px"
})
