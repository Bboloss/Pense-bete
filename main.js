let input = document.getElementById("inputNew");
let buttonDone = document.getElementById("buttonDone");
let liste = document.getElementById("list");
let nbLi = 0;

function newRecall() {
    nbLi++;
    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    newLi.id = "li" + nbLi;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = "db" + nbLi;
    liste.appendChild(newLi);
    liste.appendChild(deleteButton);
    input.value = "";
    checkHeight()
    deleteButton.addEventListener("click", () => {deleteLi(newLi.id, deleteButton.id)});
}

function deleteLi(newLiId, dbId) {
    let suprLi = document.getElementById(newLiId);
    let suprDb = document.getElementById(dbId);
    suprLi.remove();
    suprDb.remove();
    nbLi -= 1;
    checkHeight()
}

function checkHeight() {
    if (nbLi >= 10) {
        liste.style.height = 40 * nbLi +20 + "px"
    }
    if (nbLi < 10) {
        liste.style.height = "410px"
    }
}

buttonDone.addEventListener("click", newRecall);