// body background
// card background and color
// nav dotted border color
// button color
// h2 color
// link hover color
// footer color

const colorSwitcher = document.querySelector('.switcher');

colorSwitcher.addEventListener('click', changeColor);

function changeColor(evt) {
  const buttonColorClicked = evt.target.dataset.color;
  if (buttonColorClicked === 'teal') {
    document.body.className = '';
    document.body.classList.add('teal');
  } else if (buttonColorClicked === 'blue') {
    document.body.className = '';
    document.body.classList.add('blue');
    // window.sessionStorage.setItem('document.body.className', 'blue');
  } else if (buttonColorClicked === 'maroon') {
    document.body.className = '';
    document.body.classList.add('maroon');
  }
}

// let button = document.getElementsByClassName("button");

// for (let i = 0; i < button.length; i++) {
// button[i].addEventListener("click", function() {
//     window.sessionStorage.getItem("document.body.className");
// });
// }

// function getColorScheme() {
//     window.sessionStorage.getItem("className");
// }
