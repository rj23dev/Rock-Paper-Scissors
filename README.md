# Rock Paper Scissors

This is a simple **Rock Paper Scissors** game built with JavaScript.  
The game lets the user play against the computer for **5 rounds**, and declares the final winner based on the score.

✅ Built as the first JavaScript project of the **Foundations Path** in [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## 🔗 Live Preview

[Click here to play the game](https://rj23lolwa.github.io/Rock-Paper-Scissors/)

## Features

- Plays 5 rounds of Rock, Paper, Scissors
- Alerts and logs the result of each round
- Declares a final winner at the end

## How it works

1. The computer randomly chooses between `rock`, `paper`, or `scissors`.
2. The user is prompted to input their choice each round.
3. The game compares the two choices and determines a winner for each round.
4. After 5 rounds, the final scores are shown via an alert and console log.

## Assumptions

⚠️ **Note**:  
- The game assumes the user will input one of the following exactly: `rock`, `paper`, or `scissors`.  
- Input is **case-insensitive**, but must be a valid word from the three choices.
- No input validation is currently implemented for incorrect entries.

## How to run locally

1. Clone the repository or download the source files.
2. Open the `index.html` file in your web browser.
3. The game will start immediately and prompt you to enter your choice each round.
4. View round results in **alerts** and the **developer console** (`F12` or right-click → Inspect → Console).

## Example Output

<pre>
Round 1: Rock crushes Scissors! You Win!
Round 2: It's a Tie!
Round 3: Computer Wins!
Round 4: Scissors cut Paper! You Win!
Round 5: It's a Tie!

Final Score → You: 2, Computer: 1  
Wohoo! You Won!
</pre>

