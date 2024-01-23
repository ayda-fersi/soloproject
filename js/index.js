var slideIndex = 0;
function showSlides() {
  
  var slides = document.getElementsByClassName("mySlidesFade");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display =   "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
}    
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 900); 
}
showSlides();
function toggleProductsMenu() {
    var productsMenu = document.getElementById('products-menu');
    productsMenu.classList.toggle('hidden');
}

function showProduct(product) {
    
    console.log(`Showing ${product}`);

    if (product === 'Screens') {
        
        window.location.href = 'screens.html';  
    } 
    else if (product ==='headphones'){
        window.location.href = "headphones.html"
    }

    else if (product ==='mouses'){
        window.location.href = "mouses.html"
    }
    else if (product ==='netflix'){
        window.location.href = "sub.html"
    }
    else if (product ==='spotify'){
        window.location.href = "spotify.html"
    }
}
function togglesub() {
    var subscribe = document.getElementById('subs');
    subscribe.classList.toggle('hidden');
}

 var elementVar = document.getElementById("cartBadge"); 
 elementVar.setAttribute("value", add);      
  var n = 0 
   function add (){ 
            console.log(n)        
            return n+=1   }   

 $( ".button" ).on( "click", function() {   
     alert( "Handler for click called." );
      elementVar.setAttribute("value",add() );   } );


