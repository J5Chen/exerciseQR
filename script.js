import { exercise, routine } from "./routineModule.js";

let testRoutine = routine();

function handleNewExercise(event) {
  event.preventDefault();
  let newExercise = exercise(
    document.getElementById("name").value,
    document.getElementById("weight").value,
    document.getElementById("sets").value,
    document.getElementById("reps").value,
    document.getElementById("note").value
  );

  if (newExercise.weight && newExercise.sets && newExercise.reps && (newExercise.name.length!=0) && (document.getElementById("lbs").checked || document.getElementById("kg").checked )) {
    if (document.getElementById("lbs").checked){
      newExercise.unit = "lbs"
    } else {
      newExercise.unit = "kg"
    }

    testRoutine.addExercise(newExercise);
    let exerciseDoc = document.createElement("div");
    let exerciseContainer = document.getElementById("workout");
    exerciseDoc.className = "card";
    exerciseDoc.innerHTML = `
    <div class="card-body">
    <h5 class="card-title"><b>${newExercise.name}</h5></b>
    <div class="card-text">
    ${newExercise.sets} x ${newExercise.reps}  ${newExercise.weight}${newExercise.unit}<br>
    ${newExercise.note}<br>
    </div>
    </div>
  `;
    exerciseContainer.appendChild(exerciseDoc);
  }
}

function handleNewRoutine() {
  event.preventDefault();
  testRoutine = routine();
  let exerciseContainer = document.getElementById("workout");
  exerciseContainer.innerHTML = "";
  let qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = ""
  console.log("pop")
}

function generateQRCode(data) {
  event.preventDefault();
  let qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = ""
  if (testRoutine.exerciseList.length != 0) {
    new QRCode(document.getElementById("qrcode"), testRoutine.printRoutine());
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("finish");
  form.addEventListener("click", handleNewExercise);
  const generateQRButton = document.getElementById("generateQRButton");
  const routineButton = document.getElementById("newRoutineButton");

  generateQRButton.addEventListener("click", function () {
    generateQRCode(testRoutine);
  });

  routineButton.addEventListener("click", function () {
    handleNewRoutine();
  });
});
