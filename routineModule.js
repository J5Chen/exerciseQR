// routineModule.js

export const exercise = (name, weight, sets, reps, note, unit) => {
  return { name, weight, sets, reps, note, unit};
};

export const routine = () => {
  let exerciseList = [];

  const addExercise = (item) => {
    exerciseList.push(item);
  };

  const removeExercise = (item) => {
    let index = exerciseList.findIndex((exercise) => exercise === item);
    exerciseList.splice(index, 1);
  };

  const printRoutine = () => {
    let stringy = "";
    for (let index = 0; index < exerciseList.length; index++) {
      let item = exerciseList[index]
      stringy += `${item.name} ${item.sets}x${item.reps} ${item.weight} ${item.note}\n`
    }
    return stringy;
  };

  return { exerciseList, addExercise, removeExercise, printRoutine };
};