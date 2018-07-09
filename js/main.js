function Cars(name, price, image) {
  this.name = name;
  this.price = price;
  this.image = image;
}

var newcar = []

var car1 = new Cars ("Ford", "$42,000.00", "img/car1.jpg")
var car2 = new Cars ("toyota","$38,000.00", "img/car3.jpg")

newcar.push(car1, car2)

for (var i = 0; i< newcar.length; i++) {
  var cn = document.createTextNode("Car: " + newcar[i].name)
  var cp = document.createTextNode("Price: " + newcar[i].price)
  var cb = document.createTextNode ("Buy Now!")
  var ci = newcar[i].image

  var ccol = document.createElement("div")
  var cdiv = document.createElement("div")
  var cname = document.createElement("h4")
  var cprice = document.createElement("h5")
  var cimage = document.createElement("img")
  var cbutton = document.createElement ("button")
  var ninput = document.createElement("input")
  var pinput = document.createElement("input")
  var addnew = document.getElementById("addnew")

  cimage.src = ci

  cname.appendChild(cn)
  cprice.appendChild(cp)
  cbutton.appendChild(cb)

  cdiv.appendChild(cname)
  cdiv.appendChild(cprice)
  cdiv.appendChild(cbutton)
  cdiv.appendChild(cimage)

  ccol.appendChild(cdiv)

  ccol.className = "col-sm-4"
  cdiv.className= "Carss" + " thumbnail"
  cbutton.className = "btn btn-primary"
  cimage.className = "img-responsive"
  ninput.className = "inputs"
  pinput.className = "inputs"
  pinput.type = "number"

  document.getElementById("Cars").appendChild(ccol)
}

addnew.appendChild(ninput)
addnew.appendChild(pinput)
var h3 = document.createElement("h3")

function add() {
  var Cn = ninput.value
  var Cp = pinput.value
  var Ci = "img/car4.jpg"

  var carx = new Cars (Cn,Cp,Ci)

  newcar.push(carx)

  if(Cn == "" || Cp == "") {
    h3.textContent= "FILL OUT BOTH INPUTS"
    h3.style.color = "red"
    addnew.appendChild(h3)
    return;
  } else {

  var cn = document.createTextNode("Car: " + Cn)
  var cp = document.createTextNode("Price: " + Cp)
  var cb = document.createTextNode ("Buy Now!")
  var ci = carx.image

  var ccol = document.createElement("div")
  var cdiv = document.createElement("div")
  var cname = document.createElement("h4")
  var cprice = document.createElement("h5")
  var cimage = document.createElement("img")
  var cbutton = document.createElement ("button")

    cimage.src = ci

    cname.appendChild(cn)
    cprice.appendChild(cp)
    cbutton.appendChild(cb)

    cdiv.appendChild(cname)
    cdiv.appendChild(cprice)
    cdiv.appendChild(cbutton)
    cdiv.appendChild(cimage)

    ccol.appendChild(cdiv)

    ccol.className = "col-sm-4"
    cdiv.className= "Carss" + " thumbnail"
    cbutton.className = "btn btn-primary"
    cimage.className = "img-responsive"

    document.getElementById("Cars").appendChild(ccol)
    h3.textContent = ""
    remove()
 }
}

function remove() {
  ninput.value = ""
  pinput.value = ""
}
