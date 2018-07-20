var i=0, j=0;
var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var fulltext1 = document.getElementById('text1').value;
var interval_var;

document.getElementById('forward').addEventListener('click',function(){
    transferltor();
    j=0;
});

document.getElementById('stop').addEventListener('click',function(){

    clearInterval(interval_var); 
});

document.getElementById('backward').addEventListener('click',transferrtol);


function transferltor(){
    

 text1len =  text1.value.length;

function transfer(){
    i=0;
    text2.value += text1.value.charAt(i);
    i++;
    var strleft = text1.value.substring(i, text1len);
   //console.log(strleft);
   text1.value = strleft;
      
    }

 interval_var = setInterval(function(){
   
  transfer();
        
}, 1000);

setTimeout(function(){
clearInterval(interval_var);
},text1len*1000);
   
}

function transferrtol(){
text2.value;
}

function transferrtol(){

    var text2len=text2.value.length;
     
    function transfer(){
        if(text1.value.length === fulltext1){
            j=0;
        }
        i=0;
        var char= text2.value.charAt(i);
    
        text1.value = text1.value.substr(i, j) + char  + text1.value.substr(j);
        //console.log(text1.value);
         j++;
        i++;
        text2.value = text2.value.substring(i, text2len);
       
    }
    
     interval_var = setInterval(function(){
    
        transfer();
    },1000);
    
    setTimeout(() => {
        clearInterval(interval_var);
    }, text2len*1000);
    
    }