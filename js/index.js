// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const btnPepperoni = document.querySelector('.btn-pepperoni');
const btnMushrooms = document.querySelector('.btn-mushrooms');
const btnGreenPeppers = document.querySelector('.btn-green-peppers');
const btnWhiteSauce = document.querySelector('.btn-sauce');
const btnGlutenCrust = document.querySelector('.btn-crust');

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

// Visibility of ngredients

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    state.pepperoni
      ? (onePep.style.visibility = 'visible')
      : (onePep.style.visibility = 'hidden');
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    state.mushrooms
      ? (oneMushroom.style.visibility = 'visible')
      : (oneMushroom.style.visibility = 'hidden');
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    state.greenPeppers
      ? (oneGreen.style.visibility = 'visible')
      : (oneGreen.style.visibility = 'hidden');
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  sauce.classList.toggle('sauce-white');
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  crust.classList.toggle('crust-gluten-free');
}

// Add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  state.pepperoni
    ? btnPepperoni.classList.add('active')
    : btnPepperoni.classList.remove('active');
  state.mushrooms
    ? btnMushrooms.classList.add('active')
    : btnMushrooms.classList.remove('active');
  state.greenPeppers
    ? btnGreenPeppers.classList.add('active')
    : btnGreenPeppers.classList.remove('active');
  state.whiteSauce
    ? btnWhiteSauce.classList.add('active')
    : btnWhiteSauce.classList.remove('active');
  state.glutenFreeCrust
    ? btnGlutenCrust.classList.add('active')
    : btnGlutenCrust.classList.remove('active');
}

// Price section

function renderPrice() {
  const priceList = document.querySelector('.panel.price ul');
  const priceElement = document.querySelector('.panel.price strong');

  let totalPrice = basePrice;

  priceList.innerHTML = '';

  for (const key in state) {
    if (state[key]) {
      const ingredient = ingredients[key];
      const li = document.createElement('li');
      li.textContent = `$${ingredient.price} ${ingredient.name}`;
      priceList.append(li);
      totalPrice += ingredient.price;
    }
  }
  priceElement.textContent = `$${totalPrice}`;
}

// Render all
renderEverything();

// Event Listeners

btnPepperoni.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

btnMushrooms.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

btnGreenPeppers.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

btnWhiteSauce.addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

btnGlutenCrust.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
