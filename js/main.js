

/*function hey()
{
    alert ('hey');
}*/

    
var i=0;

        function bike(){
            if(i==0){document.getElementById("hedha").innerHTML = "<center>Paragraph changed.</center>";}
            else if(i==1){
                document.getElementById("hedha").innerHTML = "<center>Paragraph .</center>";
            }
            i++;
            if (i==2){i=0;}
        }

    setInterval(bike,3000)
