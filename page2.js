let deco = document.getElementById('solid-display');
let decoChildren = deco.children;
   window.addEventListener('load' ,function(){
    for ( let i = 0 ; i < 7 ; i++)
    decoChildren[i].classList.replace('hidden' , 'active')
   });

   
   let burgerIcon = document.querySelector('.burger-nav');
   let burgerList = document.querySelector('.burger-list');
   buregerIsClicked = false ;
   function burgerClick(){
     buregerIsClicked = true ;}
   document.addEventListener('click' , ()=>{
     if( buregerIsClicked === true){
       burgerList.classList.toggle('show');
       burgerIcon.classList.toggle('active');
       buregerIsClicked = false ;
     }
     else{burgerList.classList.remove('show');
     burgerIcon.classList.remove('active');}
   })