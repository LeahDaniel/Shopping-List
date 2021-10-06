const shoppingItemsArr = [
    {
        id: 1,
        name: "Milk",
        price: 3
    },
    {
        id: 2,
        name: "Eggs",
        price: 2.50
    },
    {
        id: 3,
        name: "Pizza Rolls",
        price: 5.60
    },
    {
        id: 4,
        name: "Chicken",
        price: 8.90
    },
    {
        id: 5,
        name: "Blackberries",
        price: 5.25
    },
    {
        id: 6,
        name: "Sandwich Buns",
        price: 3.40
    },
    {
        id: 7,
        name: "Ketchup",
        price: 3.15
    }
]

const currentDay = new Date
//returns day of the month
const date = currentDay.getDate()
//returns year
const year = currentDay.getFullYear()
//returns month number
const month = currentDay.getMonth() + 1
//returns full date
const fullDate = `${month}-${date}-${year}`

const addShoppingItem = (newShoppingItem) => {
    const lastIndex = shoppingItemsArr.length - 1;
    const lastObj = shoppingItemsArr[lastIndex];
    const lastID = lastObj.id;
    const newID = lastObj.id + 1
    newShoppingItem.id = newID
    newShoppingItem.dateCreated  = fullDate
    shoppingItemsArr.push(newShoppingItem)
}

const Strawberries = {
    name: "Strawberries",
    price: 8
}

const Peaches = {
    name: "Peaches",
    price: 4
}

const SparklingWater = {
    name: "Sparkling Water",
    price: 10
}

const Wine = {
    name: "Wine",
    price: 16
}

const Lettuce = {
    name: "Lettuce",
    price: 7
}

addShoppingItem(Strawberries)
addShoppingItem(Peaches)
addShoppingItem(SparklingWater)
addShoppingItem(Wine)
addShoppingItem(Lettuce)

// for (const shoppingItemObj of shoppingItemsArr) {
//     console.log (`The ${shoppingItemObj.name} costs $${shoppingItemObj.price}.`)
// }

// console.log(shoppingItemsArr)

for (const shoppingItemObj of shoppingItemsArr) {
    if (shoppingItemObj.price > 8) {
        console.log(shoppingItemObj)
    }
}
