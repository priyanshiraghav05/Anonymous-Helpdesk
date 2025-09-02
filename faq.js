const FAQs=document.getElementsByClassName('item');
for (let i=0;i<FAQs.length;i++){
    FAQs[i].addEventListener('click',function(){
        
        this.classList.toggle('active');
    })
}