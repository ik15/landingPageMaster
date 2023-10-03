
// FAQ
let sentence = document.querySelectorAll(".sentence-box");

for(let i = 0; i < sentence.length; i++){
  sentence[i].addEventListener("click", function(){
    this.classList.toggle('active');
    let answer = this.nextElementSibling;
    if(answer.style.display === "block"){
      answer.style.display = "none";
    }else {
      answer.style.display = "block";
      answer.style.fontWeight = "500";
    }
  })
};

// Email
let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
let emailInput = document.querySelector('.email-input');
let submitInput = document.querySelector('.contact-us-btn');
let errorMsg = document.getElementById('error-msg');
let form = document.querySelector('.email-input-div');

form.addEventListener('submit', (event)=>{
  event.preventDefault();

  let emailValue = emailInput.value;
  let value = emailRegex.test(emailValue);
  let addNote = document.createTextNode("Please add your Email !");
  let checkNode = document.createTextNode('Please check your Email !');

  if(value === true){
    errorMsg.style.display = "none";
  }else if(emailValue === "" || emailValue == null){
    errorMsg.appendChild(addNote);
  }else if(value === false){
    errorMsg.appendChild(checkNode);
  }
});

// HAMBURGER
let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('header');
let underHeader = document.querySelector('.under-header');

hamburger.addEventListener('click', ()=> {

  if(underHeader.style.display === 'none'){
    underHeader.style.display = 'block'
    header.style.marginBottom = '0';
  }else {
    underHeader.style.display = 'none';
    header.style.marginBottom = '80px';
  }

})
