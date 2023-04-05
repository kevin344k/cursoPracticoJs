const input1=document.querySelector('#input1')
const input2=document.querySelector('#input2')
const btn=document.querySelector('#btn')
const form=document.querySelector('form')

const pResult=document.querySelector('#result')


form.addEventListener('submit',sumarInputs)


function sumarInputs(event){
  console.log(event)
 // event.preventDefault()
  const suma=Number(input1.value) + Number(input2.value);
  pResult.innerText="Resultado : " + suma;
  
}