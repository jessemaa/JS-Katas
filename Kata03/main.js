const ogDeck = [1, 2, 3, 4, 5, 6, 7, 8]
const deck = [1, 2, 3, 4, 5, 6, 7, 8]
let count = 0

function shuffleCount(deck, ogDeck, count) {
let shuffledDeck = []

   	const halfDeckSize = deck.length / 2
    let j = halfDeckSize

    for (let i = 0; i < halfDeckSize; i++) {
        shuffledDeck.push(deck[i])
        shuffledDeck.push(deck[j])
		j++
    }
    console.log(JSON.stringify(shuffledDeck) == JSON.stringify(ogDeck))
    
    if (JSON.stringify(shuffledDeck) != JSON.stringify(ogDeck)) {
    	count++
    	shuffleCount(shuffledDeck, ogDeck)
    } else {
    	return count
    }
}

console.log(shuffleCount(deck, ogDeck, count))