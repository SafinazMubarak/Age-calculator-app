

var btn = document.getElementById('submit')
var dval = document.getElementById('dayval')
var mthval = document.getElementById('monthval')
var yrval = document.getElementById('yearval')



function result() {

  


    var days = 25-  Number(document.getElementById('day').value) 
   
    dval.innerText = days

    var months = 9 - Number(document.getElementById('month').value) 

    mthval.innerText = months


    var years =  2023 - Number(document.getElementById('year').value) 
    
    yrval.innerText = years

}
btn.onclick = result