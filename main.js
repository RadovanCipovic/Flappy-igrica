document.addEventListener('DOMContentLoaded', () => {
const ptica = document.querySelector('.ptica');
const igricaDisplej = document.querySelector('.game-container');
const zemlja = document.querySelector('.zemlja');
 
 let pticaLijevo = 220;
 let pticaDolje = 100;
 let gravitacija = 2;
 
 function pocniIgru() {
  pticaDolje -= gravitacija;
  ptica.style.bottom = pticaDolje + 'px';
  ptica.style.left = pticaLijevo + 'px';
 }
 pocniIgru();
 
 let tajmerID = setInterval(pocniIgru, 20);
 
// function kontoler(e) {
//   if(e.keyCode === 32){
//     skok();
//   }
// }
 
 function skok() {
   if(pticaDolje < 500) pticaDolje += 50;
   ptica.style.bottom = pticaDolje + 'px';
   console.log(pticaDolje)
 }
 document.addEventListener('keyup', skok);
 
 
 function generisiPrepreku() {
   let preprekaLijevo = 500;
   let randomVisina = Math.random() * 60;
   let preprekaDolje = randomVisina;
   
   const prepreka = document.createElement('div');
   prepreka.classList.add('prepreka')
   igricaDisplej.appendChild(prepreka);
   prepreka.style.left = preprekaLijevo + 'px';
   prepreka.style.bottom = preprekaDolje + 'px';
   
   function pomjeranjePrepreke() {
   preprekaLijevo -= 2;
   prepreka.style.left = preprekaLijevo + 'px';
   
   if (preprekaLijevo === -60) {
     clearInterval();
     igricaDisplej.removeChild(prepreka)
    }
   }
   let timerId = setInterval(pomjeranjePrepreke, 20);
   setTimeout(generisiPrepreku, 3000)
   
 }
 generisiPrepreku();
 
 
 
 
 
}) 