const drinks = [
    {name:"sprite", price:"0.99"},
    {name:"coca cola", price:"0.69"},
    {name:"pepsi max", price:"0.89"}
]

sortDrinksByPrice = drinks => {
    let sortedList = drinks.sort((a, b) => (a.price > b.price) ? 1 : -1)
    console.log(sortedList)
}

sortDrinksByPrice(drinks)