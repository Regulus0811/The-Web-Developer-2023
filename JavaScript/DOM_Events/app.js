const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("you clicked me!");
  console.log("i hope i work!");
};

function scream() {
  console.log("aaaaaaaa");
  console.log("stop touching me!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("you clicked h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", scream);

function twist() {
  console.log("TWIST!");
}

function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);
