addEventListener('keydown', moveC)
addEventListener('keydown', moveC)
addEventListener('keyup', stopM)
var VTX = parseFloat(0)
var VTY = parseFloat(0)
var VBX = parseFloat(750)
var VBY = parseFloat(500)

var PX = parseFloat(325)
var PY = parseFloat(220)

var PUYC = 0
var PRXC = 0
var PDYC = 0
var PLXC = 0

var UYC = 0
var RXC = 0
var DYC = 0
var LXC = 0
var ZO = 0
var ZI = 0


UpdatePos()
function UpdatePos(){

  if(RXC == 1){
    VTX += 2
  }
   if(UYC == 1){
     VTY -= 2
  }
   if(LXC == 1){
     VTX -= 2
  }
   if(DYC == 1){
    VTY += 2
  }
  if(ZO == 1){
    VBX += 2
      VBY += 2
  }
  if(ZI == 1){
   VBX -= 2
      VBY -= 2
  }
//player down
  if(PRXC == 1){
    PX += 2
  }
   if(PUYC == 1){
     PY -= 2
  }
   if(PLXC == 1){
     PX -= 2
  }
   if(PDYC == 1){
  PY += 2
  }

  document.getElementById("canvas").setAttribute("viewBox", "" +VTX + " " + VTY +" "+ VBX +" "+ VBY);
  document.getElementById("player").setAttribute("x", PX)
  document.getElementById("player").setAttribute("y", PY)

  requestAnimationFrame(UpdatePos)

}
function stopM(event){
  if(event.key == "z"){
    ZI = 0

  }
  if(event.key == "x"){
    ZO = 0
  }
  if(event.key == "w" ){
    UYC = 0
    PUYC = 0

    // VTY -= 1
    // VBY += 1
  }

  if(event.key == "s"){
    DYC = 0
    PDYC = 0

   // VTY += 1


  }
  if(event.key == "d"){
    RXC = 0
    PRXC = 0

   // VTX += 1


  }
  if(event.key == "a"){
   LXC = 0
   PLXC = 0

   // VTX -= 1


  }

}

function moveC(event){
  console.log("hu")
  if(event.key == "z"){
    ZI = 1

  }
  if(event.key == "x"){
    ZO = 1
  }
  if(event.key == "w" ){
    UYC = 1
    PUYC = 1

    // VTY -= 1
    // VBY += 1
  }

  if(event.key == "s"){
    DYC = 1
    PDYC = 1

   // VTY += 1


  }
  if(event.key == "d"){
    RXC = 1
    PRXC = 1

   // VTX += 1


  }
  if(event.key == "a"){
   LXC = 1
   PLXC = 1

   // VTX -= 1


  }

}
