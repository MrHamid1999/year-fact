// getting elements from index

const form = document.querySelector('form');
const input = Array.from(form.children)[0].value;
const infoPlaceholder = document.querySelector('.info');
async function factFinder(year){
  const year = year ? year : 2021;
  let response = await fetch(`http://numbersapi.com/${year}/year`)
  let info =  await response.text()
  infoPlaceholder.innerText = info
}
// prevent default on submit
form.addEventListener("submit" , e =>{
  e.preventDefault()
  factFinder(input);
})
