let pottery = [];
let potteryId = 1;
let selectedPottery = 0;
let temp = 0;

export const inputDimensions = () => {
  const shape = prompt("What shape is the pottery (plate, cup, saucer, bowl)?");
  const weight = prompt("How heavy (pounds) is the pottery?");
  const height = prompt("How tall (inches) is the pottery?");

  shapePottery(shape, weight, height);
};

const shapePottery = (shape, weight, height) => {
  const newPotteryObject = {
    id: potteryId,
    shape: shape,
    weight: weight,
    height: height,
  };

  pottery.push(newPotteryObject);
  potteryId++;
  kilnSetup(pottery);
};

const kilnSetup = (potteryArray) => {
  alert(
    potteryArray.map(
      (pottery) =>
        `
        ID:${pottery.id} 
        SHAPE:${pottery.shape} 
        WEIGHT:${pottery.weight} 
        HEIGHT: ${pottery.height}
        `
    )
  );
  let potteryNumber = parseInt(
    prompt("Enter the number of the pottery piece you would like", "1")
  );
  selectedPottery = potteryArray[potteryNumber - 1];
  temp = parseInt(prompt("Enter a temperature (intervals of 100)", "100"));
  firePottery(selectedPottery, temp);
};

const firePottery = (potteryObject, temp) => {
  if (temp > 2200) {
    potteryObject.cracked = true;
    return console.log(pottery);
  } else {
    potteryObject.cracked = false;
    return console.log(pottery);
  }
};

const evaluatePottery = (potteryArray) => {};
