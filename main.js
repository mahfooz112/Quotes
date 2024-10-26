//Quotes Genertor

//document.querySelector
//addeventlistener
//math object
//innertext


//Variable

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes=[{
quote: `" The best way to find yourself is the lose yourself in the
services of other."`,
person: `"Mahatma Gandhi"`
},
{
quote: `" The best way to find yourself is the lose yourself in the
services of other."`,
person: `"Mahatma Gandhi"`,
},

{
  quote: `" The best way to find yourself is the lose yourself in the
  services of other."`,
  person: `"Mahatma Gandhi"`,
},

{
  quote: `"“Our prime purpose in this life is to help others. And if you can’t help them, at least don’t hurt them.”"`,
  person: `"Dalai lama`,
},

{
  quote:`"He who has a why to live can bear almost any how.”"`,
  person: `"Friedrich Nietzsche`,
}];

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})

