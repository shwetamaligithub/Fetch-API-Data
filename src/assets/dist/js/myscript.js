window.onscroll = function() {myScroll()};

function myScroll() {
    
   if(window.scrollY>((lastrow-1)*50)){
    myFunction();
   }
}
let lastIndex = 0; 
let lastrow = 0;
function myFunction() {
  let varFrom = lastIndex; 
  let varTo = lastIndex+3; 
  
  const cards = document.getElementsByName('album');
  for (let i = varFrom; i < varTo ; i++) {
    cards[i].classList.remove('d-none');
    lastIndex = i+1; 
  }
  console.log(varTo);
  lastrow =lastrow + 1;
}
let i=200;
function scroller() {
  // Scroll the element to 200px from the left
  document.getElementById('scrollableElement').scrollTo({
    left:i,
    behavior:'smooth' //smooth scrolling
  })
  i+=200;
}

