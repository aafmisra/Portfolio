// body background
// card background and color
// nav dotted border color
// button color
// h2 color
// link hover color
// footer color

document.body.className = localStorage.getItem('color');

const colorSwitcher = document.querySelector('.switcher');

colorSwitcher.addEventListener('click', changeColor);

function changeColor(evt) {
  const buttonColorClicked = evt.target.dataset.color;
  if (buttonColorClicked === 'teal') {
    document.body.className = '';
    document.body.classList.add('teal');
    window.localStorage.setItem('color', 'teal');
  } else if (buttonColorClicked === 'blue') {
    document.body.className = '';
    document.body.classList.add('blue');
    window.localStorage.setItem('color', 'blue');
  } else if (buttonColorClicked === 'maroon') {
    document.body.className = '';
    document.body.classList.add('maroon');
    window.localStorage.setItem('color', 'maroon');
  }
}
