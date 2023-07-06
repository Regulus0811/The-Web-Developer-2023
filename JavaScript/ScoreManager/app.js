const p1btn = document.querySelector("#p1Btn");
const p2btn = document.querySelector("#p2Btn");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const winScore = document.querySelector("#winScore");

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOVer = false;

p1btn.addEventListener("click", function () {
  if (!isGameOVer) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOVer = true;
      p1.classList.add("has-text-success");
      p2.classList.add("has-text-danger");
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
    p1.textContent = p1Score;
  }
});

p2btn.addEventListener("click", function () {
  if (!isGameOVer) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOVer = true;
      p1.classList.add("has-text-danger");
      p2.classList.add("has-text-success");
      p1btn.disabled = true;
      p2btn.disabled = true;
    }
    p2.textContent = p2Score;
  }
});

reset.addEventListener("click", justReset);
function justReset() {
  isGameOVer = false;
  p1Score = 0;
  p1.textContent = p1Score;
  p2Score = 0;
  p2.textContent = p2Score;
  p1.classList.remove("has-text-success", "has-text-danger");
  p2.classList.remove("has-text-success", "has-text-danger");
  p1btn.disabled = false;
  p2btn.disabled = false;
}

winScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  justReset();
});
