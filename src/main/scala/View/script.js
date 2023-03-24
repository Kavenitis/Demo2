var JSONString = '{"playerParty":{"characters":[{"name":"char1", "hp":50,  "maxHP":70,"battleOptions": ["Attack","Heal","Magic attack","Level attack"]},{"name":"char2", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"char3", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack3","Magic attack","Level attack"]},{"name":"char4", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack1","Magic attack"]}]},"enemyParty":{"characters":[{"name":"enem1", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"enem2", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack3","Magic attack","Level attack"]},{"name":"enem3", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"enem4", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack1","Magic attack","Level attack"]}]}}'

var charIDList = []
var chosenAction = ""
var chosenChar = ""
var chosenName = ""
var JSONData = ""
var id = ""

function myAnimate(name1, name2, dmg){
  for (character of charIDList) {
    if (character[0] == name1) {
      var char1elem = document.getElementById(character[1]);
    }
    else if (character[0] == name2) {
      var char2elem = document.getElementById(character[1]);
    }
  }

  if(dmg > 0) {
    char1elem.style.width = "150px"
    char1elem.style.height = "150px"
    char2elem.style.width = "150px"
    char2elem.style.height = "150px"
    char2elem.style.background = "green"
    setTimeout(() => {
    char1elem.style.width = "100px"
    char1elem.style.height = "100px"
    char2elem.style.width = "100px"
    char2elem.style.height = "100px"
    char2elem.style.background = "yellow"
    update(JSONData)
    }, 1000);
  }
  if (dmg == 0) {
    char1elem.style.width = "150px"
    char1elem.style.height = "150px"
    char2elem.style.width = "150px"
    char2elem.style.height = "150px"
    char2elem.style.background = "orange"
    setTimeout(() => {
    char1elem.style.width = "100px"
    char1elem.style.height = "100px"
    char2elem.style.width = "100px"
    char2elem.style.height = "100px"
    char2elem.style.background = "lightblue"
    update(JSONData)
    }, 1000);
  }
  if (dmg < 0){
    char1elem.style.width = "150px"
    char1elem.style.height = "150px"
    char2elem.style.width = "150px"
    char2elem.style.height = "150px"
    char2elem.style.background = "red"
    setTimeout(() => {
    char1elem.style.width = "100px"
    char1elem.style.height = "100px"
    char2elem.style.width = "100px"
    char2elem.style.height = "100px"
    char2elem.style.background = "lightblue"
    update(JSONData)
    }, 1000);
  }
}

function action(Id) {

  var button = document.getElementById(Id)
  chosenAction = button.innerHTML

  for (i = 1; i <= 4; i++) {
    eval("var abutton" + i + '= ' + 'document.getElementById("a' + i + '")' + ';');
    eval("abutton" + i + ".style.visibility" + '= "hidden"')
  }
}

function choose(Id, chosenAction) {
  var button = document.getElementById(Id)
  chosenChar = button.innerHTML

  for (i = 1; i <= 8; i++) {
    eval("var button" + i + '= ' + 'document.getElementById("' + i + '")' + ';');
    eval("button" + i + ".style.visibility" + '= "hidden"')
  }
  data = JSON.parse(JSONString)
  if (chosenAction == "Heal") {
    console.log("Attack method: ", chosenAction, " Target: ", chosenChar)

  }
  else {

    console.log("Action method: ", chosenAction, " Target: ", chosenChar, "Attacker: ", chosenName)

    var dict = {
        "action": chosenAction,
        "source": chosenName,
        "target": chosenChar};
    JSONDic = JSON.stringify(dict)
  }
  setTimeout(() => {socket.emit("battleAction", JSONDic)}, 1001);

}

function startBattle() {
    var array = id.split("_")
    if (parseInt(array[1]) % 2 == 0) {
    var enemyID = parseInt(array[1]) - 1
    socket.emit("startBattle", "party_" + enemyID.toString())
    }
    else {
    var enemyID = parseInt(array[1]) + 1
    socket.emit("startBattle", "party_" + enemyID.toString())
    }
}

function lose() {
let JSONStringLose = '{"playerParty":{"characters":[{"name":"char1", "hp":0,  "maxHP":100,"battleOptions": ["Attack","Special attack1","Magic attack","Level attack"]},{"name":"character2", "hp":0, "maxHP":100,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"char3", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack3","Magic attack","Level attack"]},{"name":"char4", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack1","Magic attack"]}]},"enemyParty":{"characters":[{"name":"enem1", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"enem2", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack3","Magic attack","Level attack"]},{"name":"enem3", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"enem4", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack1","Magic attack","Level attack"]}]}}'
  update(JSONStringLose)
}

function win() {
let JSONStringWin = '{"playerParty":{"characters":[{"name":"char1", "hp":50,  "maxHP":100,"battleOptions": ["Attack","Special attack1","Magic attack","Level attack"]},{"name":"character2", "hp":50, "maxHP":100,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"char3", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack3","Magic attack","Level attack"]},{"name":"char4", "hp":50, "maxHP":70,"battleOptions": ["Attack","Special attack1","Magic attack"]}]},"enemyParty":{"characters":[{"name":"enem1", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"enem2", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack3","Magic attack","Level attack"]},{"name":"enem3", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack2","Magic attack"]},{"name":"enem4", "hp":0, "maxHP":70,"battleOptions": ["Attack","Special attack1","Magic attack","Level attack"]}]}}'
  update(JSONStringWin)
}

function refresh() {
  update(JSONString)
}