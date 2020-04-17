let pottery = []
let potteryId = 1


const inputDimensions = () => {
    const shape = prompt('What shape is the pottery?')
    const weight = prompt('How heavy is the pottery?')
    const height = prompt('How tall is the pottery?')

    makePottery(shape, weight, height)
}

const makePottery = (shape, weight, height) => {
    const newPotteryObject = {
        id: potteryId,
        shape: shape,
        weight: weight,
        height: height
    }
    
    pottery.push(newPotteryObject)
    potteryId++

}

const firePottery = (potteryObject, temperature) => {
    
}
