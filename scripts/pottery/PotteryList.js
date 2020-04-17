let pottery = []
let potteryId = 1

const makePottery = (shape, weight, height) => {
    const newPotteryObject = {
        id: potteryId
        shape: shape,
        weight: weight,
        height: height,
    }
    
    pottery.push(newPotteryObject)
    potteryId++

}