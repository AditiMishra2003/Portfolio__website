/*cript src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
   <!-- Setup and start animation! -->*/
   src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"

  src="https://kit.fontawesome.com/7848b3672b.js"


    var typed = new Typed('#element', {
      strings: ['Web Developer','UI/UX designer'],
      typeSpeed: 50,
    });

 /* <script src="https://kit.fontawesome.com/7848b3672b.js" crossorigin="anonymous"></script>
  <script>*/
     /*SCROLL REVEAL*/
      ScrollReveal({ 
        reset: true,
        distance:'60px',
        duration:2500,
        delay:300
       });
       
      ScrollReveal().reveal('.social', { delay: 300,origin:'right'});
      ScrollReveal().reveal('.effect', { delay: 300,origin:'left'});
      ScrollReveal().reveal('.main-title', { delay: 300,origin:'left'});
      ScrollReveal().reveal('.box', { delay: 300,origin:'left'});
      ScrollReveal().reveal('.item', { delay: 300,origin:'left'});
      


 
   
     
    const hamburger = document.querySelector('.hamburger');
    const ul = document.querySelector('ul');
    hamburger.addEventListener('click',()=>{
       ul.classList.toggle('ham_active');
       let ham_child = hamburger.firstElementChild;
       if(ul.classList.contains('ham_active')){
        ham_child.classList.replace('fa-bars','fa-xmark');
       }
       else{
        ham_child.classList.replace('fa-xmark','fa-bars');
       }
    });
   
   