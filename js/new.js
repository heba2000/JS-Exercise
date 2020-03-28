//alert('WORKING')
var imgs = document.getElementsByClassName('img-item');
var popoverContainer=document.querySelector('.popover-box')
var popoverItem=document.querySelector('.popover-item');
var imgsArray=[];
var currentIndex=0;
var next =document.getElementById('arrow-next');
var prev =document.getElementById('arrow-prev');
var closeWindow = document.getElementById('wClose');

for(var i=0 ; i<imgs.length; i++)
    {
       imgsArray.push(imgs[i]); 
 imgs[i].addEventListener('click',function(e){
 popoverContainer.classList.add('show');
    var imgSrc=e.target.src;
  popoverItem.style.backgroundImage="url("+imgSrc+")";
     
//     console.log(imgsArray.indexOf(e.target));
     currentIndex=imgsArray.indexOf(e.target);
     
    })    
    }


next.addEventListener('click', function(){
 nextImage();
})

function nextImage(){
  currentIndex++;
if(currentIndex==imgsArray.length)    
    {
     currentIndex=0           
    }   
popoverItem.style.backgroundImage="url("+imgsArray[currentIndex].src+")";  
}

prev.addEventListener('click',function(){
prevImage();
})

function prevImage(){
 currentIndex--;
    if(currentIndex<0){
        currentIndex=imgsArray.length-1;
    }
    
popoverItem.style.backgroundImage="url("+imgsArray[currentIndex].src+")";    
}

closeWindow.addEventListener('click', function(){
    popoverContainer.classList.remove('show');
})

document.addEventListener('keydown',function(hambozo){
if (hambozo.keyCode==27)  
{
popoverContainer.classList.remove('show');
} 
})

popoverContainer.addEventListener('click', function(e){
  if (e.target==popoverContainer) 
      {
        popoverContainer.classList.remove('show');
      }
})
