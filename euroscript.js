function generateRows() {
    var numRows = document.getElementById('numRows').value;
    var lotteryRowsDiv = document.getElementById('lotteryRows');
    lotteryRowsDiv.innerHTML = '';

    for (var i = 0; i < numRows; i++) {
        var row = generateRow();
        lotteryRowsDiv.appendChild(row);
    }
}

function generateRow() {
    var rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    var numbers = generateRandomNumbers(5, 1, 50);
    for (var i = 0; i < 5; i++) {
        var numberDiv = createNumberDiv(numbers[i]);
        rowDiv.appendChild(numberDiv);
    }

    var extraNumbers = generateRandomNumbers(2, 1, 12);
    for (var i = 0; i < 2; i++) {
        var extraNumberDiv = createNumberDiv(extraNumbers[i]);
        extraNumberDiv.classList.add('special'); // Legg til klassen "special" for de to siste tallene
        rowDiv.appendChild(extraNumberDiv);
    }

    return rowDiv;
}

function createNumberDiv(number) {
    var numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.innerText = number;
    return numberDiv;
}

function generateRandomNumbers(numCount, min, max) {
    var numbers = [];

    while (numbers.length < numCount) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
}

function resetRows() {
    var lotteryRowsDiv = document.getElementById('lotteryRows');
    lotteryRowsDiv.innerHTML = '';
}