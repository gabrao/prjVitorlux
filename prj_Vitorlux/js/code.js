$(document).ready(carregou)
    console.log("ok");


    function carregou(){
        var lista = ["img1.jpg", "img2.jpg", "img3.jpg"];
        var i = 0;
        
       
        
        $("#btn_dir").click(rightOnClick);
        
        function rightOnClick(){
            
             i++;
        
            if(i > lista.length-1){
                i = 0;
        }
            
            $("#imagens").html("<img src='imagens/"+ lista[i] + "'>")
        }
        
        $("#btn_esq").click(leftOnClick);
        
        function leftOnClick(){
            
            i--;
            
            if(i < 0){
                i = lista.length-1; 
            }
            $("#imagens").html("<img src='imagens/"+ lista[i] + "'>")
        }
        
        setInterval(rightOnClick, 2000);
    }