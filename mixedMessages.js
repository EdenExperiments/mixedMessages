// Creation of arrays for potential beginning, middle, and ends of the random message

function generateNumber(arr) {
    let number = Math.floor(Math.random() * arr.length);
    return number
}


function generateMessage() {

    let gameSegmants = {
        beginning: ['Of the servers in Chaos, ', 'Beware ', 'Tanks, ', 'DPS players, ', 'Healers, '],
        middle: ['Louisoix ', 'Ragnarok ', 'Spriggan ', 'Cerberus ', 'Moogle ', 'savage content, ','the red chocobos, ',
        'the ochus, ', 'Hildrabrand, ', 'Use your goddamn ', 'mind out for '],
        end: ['is the greatest!', 'contains the losers.', 'holds the tryhards.', 'is the worst.', 'it is brutal.', '']
    };


    let gameMessage = gameSegmants.beginning[generateNumber(gameSegmants.beginning)];

    if (gameMessage === 'Of the servers in Chaos, ') {
        gameMessage += gameSegmants.middle[generateNumber(gameSegmants.middle.slice(0, 5))];
        gameMessage += gameSegmants.end[generateNumber(gameSegmants.end.slice(0, 4))];
    } else if (gameMessage === 'Beware ') {

    } else if (gameMessage === 'Tanks, ') {

    } else if (gameMessage === 'DPS players, ') {

    } else if (gameMessage === 'Healers, ') {

    } else {
        gameMessage = 'Error in loop'
    }

    return gameMessage
}

console.log(generateMessage())