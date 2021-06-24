// Creation of arrays for potential beginning, middle, and ends of the random message

function generateSelection(arr) { // Function to randomly select part of a message from an array or slice of an array
    let number = Math.floor(Math.random() * arr.length);
    return arr[number]
}

function generateMessage() { // Function to generate message

    let gameSegmants = {
        beginning: ['Of the servers in Chaos, ', 'Beware ', 'Tanks, ', 'DPS players, ', 'Healers, '],
        middle: ['Louisoix ', 'Ragnarok ', 'Spriggan ', 'Cerberus ', 'Moogle ', 'savage content, ','the red chocobos, ',
        'the stropers, ', 'Hildabrand, ', 'use your goddamn ', 'mind out for ', 'why '],
        end: ['is the greatest!', 'contains the losers.', 'holds the tryhards.', 'is the worst.', 'it is brutal.', 'make sure you wear your belt!',
        'always wear your best gear!', 'it requires a high DPS check.', 'the endgame challenge awaits.', 'the meteor skill will obliterate you!', 'they\'re cute but deadly',
        'do not pet them in the wild!', 'bad breath really is bad!', 'the heliostroper will protect them.', 'his quests will have you dying from laughter.',
        'his quests contain a deadly chicken.', 'a lovable but courageous idiot awaits', 'Rotations!', 'Mitigation!', 'oGCDs!', 'AOEs!', 'Death Boundaries!', 'The tankbuster!',
        'are you like this?!']
    };

    let gameMessage = generateSelection(gameSegmants.beginning); // Creating variable and using generateSelection function to add a random string from beginning

    if (gameMessage === 'Of the servers in Chaos, ') { //If loop and nested if loops check current string and create slices of middle and end to add to message
        gameMessage += generateSelection(gameSegmants.middle.slice(0, 5));
        gameMessage += generateSelection(gameSegmants.end.slice(0, 4));
    } else if (gameMessage === 'Beware ') {
        gameMessage += generateSelection(gameSegmants.middle.slice(5, 9));
        if (gameMessage === 'Beware savage content, ') {
            gameMessage += generateSelection(gameSegmants.end.slice(4, 9));
        } else if (gameMessage === 'Beware the red chocobos, ') {
            gameMessage += generateSelection(gameSegmants.end.slice(9, 12));
        } else if (gameMessage === 'Beware the stropers, ') {
            gameMessage += generateSelection(gameSegmants.end.slice(12, 14));
        } else if (gameMessage === 'Beware Hildabrand, ') {
            gameMessage += generateSelection(gameSegmants.end.slice(14, 17));
        } else {
            return 'Error in \'Beware\' if loop'
        }
    } else if (gameMessage === 'Tanks, ' || gameMessage === 'DPS players, ' || gameMessage === 'Healers, ') {
        gameMessage += generateSelection(gameSegmants.middle.slice(9));
        if (gameMessage === 'Tanks, use your goddamn ' || gameMessage === 'Healers, use your goddamn ' || gameMessage === 'DPS players, use your goddamn ') {
            gameMessage += generateSelection(gameSegmants.end.slice(17, 20));
        } else if (gameMessage === 'Tanks, mind out for ' || gameMessage === 'Healers, mind out for ' || gameMessage === 'DPS players, mind out for ') {
            gameMessage += generateSelection(gameSegmants.end.slice(20, 23));
        } else if (gameMessage === 'Tanks, why ' || gameMessage === 'Healers, why ' || gameMessage === 'DPS players, why ') {
            gameMessage += generateSelection(gameSegmants.end.slice(23));
        } else {
            return 'Error in \'Job\' if loop'
        }
    } else {
        gameMessage = 'Error in loop'
    }

    return gameMessage
}

console.log(generateMessage())