//your JS code here. If required.
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

const namePattern = /^[A-Za-z]{3,}$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const mobilePattern = /^[0-9]{10}$/;

nameInput.addEventListener('input', () => {
  if (namePattern.test(nameInput.value)) {
    nameInput.style.backgroundColor = 'lightgreen';
  } else {
    nameInput.style.backgroundColor = 'pink';
  }
});

emailInput.addEventListener('input', () => {
  if (emailPattern.test(emailInput.value)) {
    emailInput.style.backgroundColor = 'lightgreen';
  } else {
    emailInput.style.backgroundColor = 'pink';
  }
});

mobileInput.addEventListener('input', () => {
  if (mobilePattern.test(mobileInput.value)) {
    mobileInput.style.backgroundColor = 'lightgreen';
  } else {
    mobileInput.style.backgroundColor = 'rgb(255, 192, 203)';
  }
});
