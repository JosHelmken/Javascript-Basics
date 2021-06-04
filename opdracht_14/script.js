const buttonAlert = document.querySelector('.btn-alert');
const buttonBackground = document.querySelector('.btn-bg');
const bodyClass = document.querySelector('.blue-background');

buttonAlert.addEventListener('click',function () {
  alert('button clicked');  
})

const chanceBackground = () => {
  //bodyClass.classList.remove('blue-background');
  bodyClass.classList.add('red-background');
}

const toggleBackground = () => {
  bodyClass.classList.toggle('red-background');
}

//buttonBackground.addEventListener('click', chanceBackground);

buttonBackground.addEventListener('click', toggleBackground);