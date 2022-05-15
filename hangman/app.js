let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = document.getElementById('alphabet');
const passwordBoard = [
  'voir midi à sa porte',
  'soupe au lait',
  'coeur d’artichaut',
  'pédé comme un phoque',
  'fleur bleue',
  'tomber de Charybde en Scylla',
  'tailler une pipe',
  'peigner la girafe',
  'enculer des mouches',
  'être au taquet',
  'à bon entendeur, salut',
  'un de ces quatre',
  'ne pas être sorti de l’auberge',
  'aller à vau-l’eau',
  'tomber dans les pommes',
  'haut les coeurs !',
  'les doigts dans le nez',
  'pisser dans un violon',
  'par monts et par vaux',
  'toucher du bois',
  'Gros-Jean comme devant',
  'bon vent',
  'poser un lapin',
  'se cogner le petit juif',
  'l’habit ne fait pas le moine',
  'une madeleine de Proust',
  'prendre son pied',
  'tomber des nues',
  'tête de linotte',
  'bayer aux corneilles',
  'cucul la praline',
  'froid de canard',
  'l’Arlésienne',
  'ouvrir la boîte de Pandore',
  'tirer le diable par la queue',
  'dindon de la farce',
  'franchir le Rubicon',
  'au diable Vauvert',
  'dès potron-minet',
  'tremper son biscuit',
  'la quille',
  'il y a anguille sous roche',
  'à l’article de la mort',
];
const passwordDiv = document.querySelector('#board');
const imgDiv = document.querySelector('#hangin-dude');
const random = Math.floor(Math.random() * passwordBoard.length);
const password = passwordBoard[random];
const yes = new Audio('yes.wav');
const no = new Audio('no.wav');
const win = new Audio('nice-work.wav');
const lose = new Audio('oh-my-god-1.wav');
let fail = 1;
let countDown;

const start = function () {
  letters.split('').forEach(letter => {
    const html = `<div class="letter">${letter}</div>`;
    alphabet.insertAdjacentHTML('beforeend', html);
  });

  let hint = 'HINT';
  const html = `<div class="hintButton">${hint}</div>`;
  alphabet.insertAdjacentHTML('beforeend', html);

  showPassword();
  showHangman(fail);
};
window.onload = start;

const passwordDashed = password.split('').map(letter => {
  if (letter === ' ') return ' ';
  else if (letter === '’') return '’';
  else if (letter === ',') return ',';
  else if (letter === '-') return '-';
  else return '_';
});
const showPassword = function () {
  passwordDiv.innerHTML = passwordDashed.join('');
};
const showHangman = function (nr) {
  imgDiv.innerHTML = `<img src="img/${nr}.svg" alt="" />`;
};

const checkForLetter = function (e) {

  if (e.target.classList.contains('hintButton')) {

    let letra = letters[Math.floor(Math.random() * 26)];
    while (passwordDashed.includes(letra) || !password.toUpperCase().split('').includes(letra)) {
      letra = letters[Math.floor(Math.random() * 26)];
    } 
    yes.play();
    password
      .toUpperCase()
      .split('')
      .forEach((letter, i, arr) => {
        if (letter === letra) {
          passwordDashed[i] = letter;
          showPassword();
        }
      });
    deactivateLetter(true, e.target);
    if (password.toUpperCase() === passwordDashed.join('')) {
      finish(true);
    }

  }


  if (e.target.classList.contains('letter')) {
    if (password.toUpperCase().split('').includes(e.target.textContent)) {
      yes.play();
      password
        .toUpperCase()
        .split('')
        .forEach((letter, i, arr) => {
          if (letter === e.target.textContent) {
            passwordDashed[i] = letter;
            showPassword();
          }
        });

      deactivateLetter(true, e.target);
    } else {
      no.play();
      fail++;
      showHangman(fail);
      deactivateLetter(false, e.target);
    }
    if (fail == 6) {
      finish(false);
    }
    if (password.toUpperCase() === passwordDashed.join('')) {
      finish(true);
    }
  }
};

alphabet.addEventListener('click', checkForLetter);

const deactivateLetter = function (hit, letter, audio) {
  letter.style.border = hit
    ? '1px solid rgb(50, 177, 149)'
    : '1px solid rgba(255, 0, 0, 0.338)';
  letter.style.backgroundColor = hit
    ? 'rgb(50, 177, 149)'
    : 'rgba(255, 0, 0, 0.338)';
  letter.style.color = 'white';
  letter.style.cursor = 'default';
};

const finish = function (succes) {
  if (succes) {
    alphabet.innerHTML = `<h1>BON TRAVAIL!!</h1><div class='btn'>REJOUER</div>`;
    win.play();
    clearInterval(countDown);
  } else {
    alphabet.innerHTML = `<h1>TU AS PERDU!</h1><div class='btn'>RÉESSAYER</div>`;
    lose.play();
    clearInterval(countDown);
  }
  document
    .querySelector('.btn')
    .addEventListener('click', () => location.reload());
};

const timer = function () {
  const timer = document.querySelector('#timer');
  let time = new Date(181000);
  const options = {
    minute: '2-digit',
    second: '2-digit',
  };
  const tick = function () {
    time -= 1000;
    timer.textContent = Intl.DateTimeFormat('pt-BR', options).format(time);
    if (time == 0) {
      finish(false);
      clearInterval(countDown);
    }
  };
  tick();
  countDown = setInterval(tick, 1000);
  return countDown;
};
timer();
