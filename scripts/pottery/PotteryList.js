let pottery = [];
let potteryId = 1;
let selectedPottery = 0;
let temp = 0;

// const makePottery = () => {
//   //prompt "Are you ready?"
//   inputDimensions();
//   //prompt "Now let's fire it!"
//   selectPottery(pottery);
//   firePottery(selectedPottery);
// };

const inputDimensions = () => {
  const shape = prompt("What shape is the pottery?");
  const weight = prompt("How heavy is the pottery?");
  const height = prompt("How tall is the pottery?");

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
};

const kilnSetup = (potteryArray) => {
  potteryArray.map((pottery) => console.log(pottery.id && pottery.shape));
  let potteryNumber = parseInt(
    prompt("Enter the number of the pottery piece you would like:", "1")
  );
  selectedPottery = potteryArray[potteryNumber + 1];
  temp = parseInt(prompt("Enter a temperature (intervals of 100)", "100"));
};

const firePottery = (potteryObject, temperature) => {
  if (temp > 2200) {
      
  }
};
