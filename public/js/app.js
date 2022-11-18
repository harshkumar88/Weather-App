const cityname=document.getElementById("input");
const submitbn =document.getElementById("submit");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");
const city=document.getElementById("city");
const min=document.getElementById("min");
const max=document.getElementById("max");

var a=1;

document.body.addEventListener("keydown", (e) => {

        if(e.key=="Enter"){
             getInfo();
        }
})

const getInfo = async(event)=>{

        if(a==0){
                $("#moving").removeClass("l");
        $("#moving").addClass("h");
        
        a=1;
        }
        else{
                $("#moving").removeClass("h");
                $("#moving").addClass("l");
                a=0;
        }
        let cityVal=cityname.value;
        cityname.value="";
        if(cityVal===""){
                $(".info").addClass("changes");
                $("#temp_status").addClass("changes");
                $(".-one").html("<h1>Pls Enter a City Name.</h1>");
        }
        else{   
                try{
                        $(".info").removeClass("changes");
                $("#temp_status").removeClass("changes");
                $(".-one").html("<div></div>");
                        
                let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d04c75274f851d69c894586ae6474fa2`;
                const response= await fetch(url);
                const data= await response.json();
                const arrData=[data];

                temp.innerText=Math.floor(arrData[0].main.temp);
                min.innerText=Math.floor(arrData[0].main.temp-5);
                max.innerText=Math.floor(arrData[0].main.temp+5);
               // temp_status.innerText=arrData[0].weather[0].main;
                city.innerText=`${arrData[0].name},${arrData[0].sys.country}`;

      const tempStatus=arrData[0].weather[0].main;

 if(tempStatus== "Sunny"){
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
       }
       else if(tempStatus== "Clouds"){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
       }
       else if(tempStatus== "Rain"){
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
       }
       else{
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#44c3de'></i>"
       }
                }
                catch{
                        $(".info").addClass("changes");
                        $("#temp_status").addClass("changes");
                        $(".-one").html("<h1>Pls Enter a Valid City Name.</h1>");
                        
                }
                
        }
}
submitbn.addEventListener('click',getInfo);

const theme=document.getElementById("theme");

theme.addEventListener('click',change);
var btnchange=0;
function change(){
      if(btnchange==0){
        $("body").addClass("light");
        $("#first").addClass("color");
        $("footer #name").addClass("color");
        $("#theme").html("Dark Mode")
        $("#theme").addClass("bg")
        btnchange=1;
      }
      else{
        $("body").removeClass("light");
        $("#first").removeClass("color");
        $("footer #name").removeClass("color");
        $("#theme").html("Light Mode")
        $("#theme").removeClass("bg")
        btnchange=0;

      }
        
}


