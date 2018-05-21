addEventListener('keydown', moveC)
addEventListener('keydown', moveC)
addEventListener('keyup', stopM)
var VTX = parseFloat(0)
var VTY = parseFloat(0)
var VBX = parseFloat(750)
var VBY = parseFloat(500)

var PX = parseFloat(325)
var PY = parseFloat(220)

var MMenX = parseFloat(440)
var portraitX = parseFloat(440)
var equX = parseFloat(445)
var equCX = parseFloat(446)
var wepX = parseFloat(445)
var wepCX = parseFloat(446)
var cheX = parseFloat(445)
var cheCX = parseFloat(446)
var helX = parseFloat(445)
var helCX = parseFloat(446)
var armX = parseFloat(445)
var armCX = parseFloat(446)
var legX = parseFloat(445)
var legCX = parseFloat(446)
var masX = parseFloat(445)
var masCX = parseFloat(446)
var sl1X = parseFloat(540)
var sl2X = parseFloat(540)
var sl3X = parseFloat(540)
var sl4X = parseFloat(540)
var sl5X = parseFloat(540)
var sl6X = parseFloat(540)
var sl7X = parseFloat(540)
var sl8X = parseFloat(540)
var sl9X = parseFloat(540)
var sl10X = parseFloat(540)
var sl1CX = parseFloat(541)
var sl2CX = parseFloat(541)
var sl3CX = parseFloat(541)
var sl4CX = parseFloat(541)
var sl5CX = parseFloat(541)
var sl6CX = parseFloat(541)
var sl7CX = parseFloat(541)
var sl8CX = parseFloat(541)
var sl9CX = parseFloat(541)
var sl10CX = parseFloat(541)

var MMenY = parseFloat(50)
var portraitY = parseFloat(50)
var equY = parseFloat(252)
var equCY = parseFloat(235)
var wepY = parseFloat(277)
var wepCY = parseFloat(260)
var cheY = parseFloat(302)
var cheCY = parseFloat(285)
var helY = parseFloat(327)
var helCY = parseFloat(310)
var armY = parseFloat(352)
var armCY = parseFloat(335)
var legY = parseFloat(377)
var legCY = parseFloat(360)
var masY = parseFloat(402)
var masCY = parseFloat(385)
var sl1Y = parseFloat(80)
var sl2Y = parseFloat(113)
var sl3Y = parseFloat(146)
var sl4Y = parseFloat(179)
var sl5Y = parseFloat(212)
var sl6Y = parseFloat(245)
var sl7Y = parseFloat(278)
var sl8Y = parseFloat(311)
var sl9Y = parseFloat(344)
var sl10Y = parseFloat(377)
var sl1CY = parseFloat()
var sl2CY = parseFloat()
var sl3CY = parseFloat()
var sl4CY = parseFloat()
var sl5CY = parseFloat()
var sl6CY = parseFloat()
var sl7CY = parseFloat()
var sl8CY = parseFloat()
var sl9CY = parseFloat()
var sl10CY = parseFloat()

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
