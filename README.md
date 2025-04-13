# Rock-Paper-Scissors Game 🪨📄✂️

A simple Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. This interactive game lets the user play against the computer with dynamic score updates and a fun light/dark theme toggle.

## 💡 Features

- 🕹️ Rock-Paper-Scissors gameplay logic
- 🧠 Random computer choice
- 🎯 Score tracking for both user and computer
- 🎨 Theme toggle (Light/Dark Mode)
- ✨ Interactive UI with real-time feedback
- 📜 Hover effects for better UX

## 🚀 How to Play

1. Click on either **Stone**, **Paper**, or **Scissors**.
2. The computer will randomly choose one option.
3. The result will be displayed:
   - **Win**
   - **Lose**
   - **Draw**
4. The scores will update accordingly.
5. Click on the title heading to toggle between **Light** and **Dark** mode.

## 🛠️ Code Structure

### `compChoice()`
Returns a random choice for the computer: `"Stone"`, `"Paper"`, or `"Scissors"`.

### `draw()`
Handles the draw situation and updates the UI accordingly.

### `showWinner(usrwin)`
Updates the score and message depending on whether the user won or not.

### `game(optionId)`
Main function that executes each time the user makes a choice. It:
- Displays the user's and computer's choices.
- Compares them to decide the winner.
- Calls the appropriate function to display the result.

### Theme Switching:
- **`dark()`** and **`light()`** functions manage switching between dark and light modes respectively.
- Event listener on `.H1` toggles between themes on click.

## 🧩 DOM Elements Used

- `#mass` – displays result messages
- `#user-score` & `#comp-score` – shows scores
- `#uch` & `#cch` – shows user and computer choices
- `.option` – clickable options for the user
- `.H1` – click to toggle theme


## 📁 Installation

No installation required! Just clone the repo and open the `index.html` file in any browser:

```bash
git clone https://github.com/IAmBiswabhusan/Stone-Paper-Scissors.git
cd Stone-Paper-Scissors
open index.html
