window.addEventListener('scroll' , () => {
        if (window.pageYOffset >= 60) {
            document.getElementById('nav').style.position = "fixed";
            document.getElementById('nav').style.top = "0";
        } else {
            document.getElementById('nav').style.position = "absolute";
            document.getElementById('nav').style.top = "70px";
        }
    })
let page = document.getElementById('products-page');
let page2 = document.getElementById('home-page');
let bands = document.querySelectorAll('.product');
window.addEventListener('scroll' , function(){
         for (let i = 0; i < bands.length; i++)
       if(bands[i].getBoundingClientRect().top <= this.innerHeight - page.getBoundingClientRect().height /3){
        bands[i].classList.add('show');
        bands[i].classList.remove('hide');
       }
       else {
        bands[i].classList.remove('show');
        bands[i].classList.add('hide');

    }
    }
    
    )

let text = document.querySelectorAll('.P-text');
    window.addEventListener('scroll' , function(){
             for (let i = 0; i < bands.length; i++)
           if(bands[i].getBoundingClientRect().top <=this.innerHeight - page.getBoundingClientRect().height /3){
            text[i].classList.add('show-text');
           }
           else {
            text[i].classList.remove('show-text');
    
        }
        }
        )
let enTitle = document.getElementById('entreprise-page');
let children = enTitle.children;
    window.addEventListener('scroll' ,function(){
      if( enTitle.getBoundingClientRect().top <= this.innerHeight / 4) {
        for ( let i = 0 ; i < 4 ; i++)
       children[i].classList.replace('enHidden' , 'enActive')
        }
      else{for ( i = 0 ; i < 4 ; i++)
        children[i].classList.replace('enActive' , 'enHidden')
      }
     if( enTitle.getBoundingClientRect().top <= -200) {
            for ( let i = 4 ; i < 6 ; i++)
           children[i].classList.replace('enHidden' , 'enActive')
            }
      else{for ( i = 4 ; i < 6 ; i++)
                children[i].classList.replace('enActive' , 'enHidden')
              }
      
    } )

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


