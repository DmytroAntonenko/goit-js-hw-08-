import throttle from 'lodash.throttle';
const KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
// const submit = document.querySelector('.feedback-form');

const formData = {};

populateTextInput();

form.addEventListener ('input', throttle(onTextInput, 500));

function onTextInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('KEY', JSON.stringify(formData));  
};

form.addEventListener ('submit', (event) =>{
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem('KEY');
    console.log(formData);
    
});

function populateTextInput() {
    const saveData = localStorage.getItem('KEY');
    const parsedData = JSON.parse(saveData);
    if(parsedData) {
    form.email.value = parsedData.email || '';
    form.message.value = parsedData.message || '';
    }
    
};


