function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;

    document.getElementById('die1').value = die1;
    document.getElementById('die2').value = die2;
    document.getElementById('total').value = total;
}
