// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
planets = planets.reverse();

/*******************Remove Pluto ************************/
document.getElementById("check").onclick = function () {
  if (this.checked) {
    var removePluto = document.getElementById("planets");
    removePluto.remove(10);
  } else {
    var addPluto = document.getElementById("planets");
    var el = document.createElement("option");
    //var planetGrav = planets[10][1];
    var planetSelect = planets[10][0];
    el.textContent = planetSelect;
    //el.value = planetGrav;
    addPluto.appendChild(el);
  }
}

/*******************Drop Down ************************/
for (var i = 0; i < planets.length; i++) {
  var select = document.getElementById("planets");
  var el = document.createElement("option");
  //var planetGrav = planets[i][1];
  var planetSelect = planets[i][0];
  el.textContent = planetSelect;
  //el.value = planetGrav;
  select.appendChild(el);
}

/*******************Calculate Weight ************************/
function calculateWeight(weight, planetName) {

  for (var i = 0; i < planets.length; i++) {

    if (planetName === planets[i][0]) {
      var planetWeight = weight * planets[i][1];
      // planetWeight = planetWeight.toFixed(1);
      return planetWeight;
    }


  }
}


/*******************Button Click ************************/
function handleClickEvent() {
  var userWeight = document.getElementById("user-weight").value;
  var weight = document.getElementById("user-weight").value;
  var e = document.getElementById("planets");
  var planetName = e.options[e.selectedIndex].value;
  var planet = e.options[e.selectedIndex].text;
  $("#user-weight").val("");
  /*******************Form Validation************************/
  if (isNaN(userWeight)) {
    document.getElementById("user-weight").style.borderColor = "red";
    document.getElementById("output").innerHTML = "Please Enter Your Weight";

    return false;
  }
  if (userWeight === "") {
    document.getElementById("output").innerHTML = "Please Enter a value";
    document.getElementById("user-weight").style.borderColor = "red";
    return false;
  }
  /*******************Output**********************************/

  var result = "If you were on " + planet + ", you would weigh " + calculateWeight(weight, planetName) + "lbs!";

  document.getElementById("output").innerHTML = result;

}


