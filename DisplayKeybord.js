let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let caps = document.querySelector('#Caps');
let spacebar=document.querySelector('#spacebar')
let clear=document.querySelector('#clear')
let clearAll=document.querySelector('#clearAll')
let arrowLeft=document.querySelector('#arrowLeft')
let shift=document.querySelector("#shift")
let shift2=document.querySelector("#shift2")
let tab=document.querySelector('#Tab')
let en=document.querySelector('#EN')
let isCapsActive = false;
let isClear=false
for (let elem of buttons) {
  elem.addEventListener('click', function(e) {
    input.value += this.textContent;
  });
}

caps.addEventListener('click', function() {
  
  isCapsActive=!isCapsActive
  if(isCapsActive){
    input.value=String(input.value).toUpperCase()
  }else{
    input.value=String(input.value).toLowerCase()
  }
  if(input.value.includes('caps')){
    input.value=input.value.replace('caps','')
  }
  if(input.value.includes('CAPS')){
    input.value=input.value.replace("CAPS",'')
  }
});
spacebar.addEventListener('click',function(){
    input.value=String(input.value) +' '
    if(input.value.includes('SPACEBAR')){
        input.value=input.value.replace("SPACEBAR","")
    }
})
clear.addEventListener('click',function(){
    input.value=''

})
clearAll.addEventListener('click',function(){
    if(input.value.includes('Выделить все')){
        input.value=input.value.replace('Выделить все','')
    }
    isClear=!isClear
    if(isClear){
      input.select()
      input.style.backgroundColor='red'
    }else{
      input.select()
      input.style.backgroundColor='black'
    }
    
})
arrowLeft.addEventListener('click',function(){
    if(input.value.includes('←')){
        input.value=input.value.replace('←','')
    }
    let inputValue =input.value
    let array =inputValue.split('')
    let popElem=array.pop()
    let result =array.join("")
    input.value=result
})
tab.addEventListener('click',function(){
    input.value=input.value+'  '
    if(input.value.includes('TAB')){
        input.value=input.value.replace('TAB',' ')
    }
})
shift.addEventListener('click',function(){
    if(input.value.includes("Shift")){
        input.value=input.value.replace("Shift","")
    }
})
shift2.addEventListener('click',function(){
    if(input.value.includes("Shift")){
        input.value=input.value.replace("Shift","")
    }
})
en.addEventListener('click',function(){
  if(input.value.includes('EN')){
    input.value=input.value.replace('EN','')
  }
  changeLanguage()
})

function changeLanguage(){
  let elems=document.querySelectorAll('.letter')
  for (let elem of buttons) {
    let originalText = elem.getAttribute('data-value');
    let translatedText = textChange[originalText] || originalText;
    elem.textContent = translatedText;
  }
  }
