const signUp = document.getElementById('sign-up');
const subscribed = document.getElementById('subscribed');

const form = document.querySelector('form');
const input = document.querySelector('input');
const emailDisplay = document.getElementById('email-display');
const error = document.getElementById('error');

const resetPage = () => {
  subscribed.style.display = 'none';
  signUp.style.display = 'block';
  error.style.display = 'none';
  input.value = '';
  input.classList.remove('error');
};

const main = () => {
  resetPage();

  dismiss.addEventListener('click', () => {
    resetPage();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === '' || !input.validity.valid) {
      input.classList.add('error');
      error.style.display = 'block';
    } else {
      subscribed.style.display = 'flex';
      signUp.style.display = 'none';
      emailDisplay.textContent = input.value;
    }
  });
};

main();
