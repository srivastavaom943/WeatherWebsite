const apiKey="2f87c82daebc566b1809e15ec7852ad1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput=document.querySelector(".search input")
const weathericon=document.querySelector(".weather-icon")

const searchbutton=document.querySelector(".search button")
async function checkweather(city){

    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    if(response.status==404){
        document.querySelector(".error ").style.display="block";
        document.querySelector(".weather ").style.display="none";
    }
   
    var data=await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"&#8451;";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";    
    document.querySelector(".wind").innerHTML=data.wind.speed +"Kmph";    

    if(data.weather[0].main=="Clear"){
        weathericon.src="image/clear-weather.png"
        }
        else if(data.weather[0].main=="Haze"){
            weathericon.src="image/haze.png"
        }
        else if(data.weather[0].main=="Clouds"){
            weathericon.src="image/cloudy.jpg"
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="image/rain4.jpg"
        }
        else if(data.weather[0].main=="Snow"){
            weathericon.src="image/snow.jpg"
        }


}
document.querySelector(".error ").style.display="none";
document.querySelector(".weather ").style.display="block";
searchbutton.addEventListener("click",()=>{
    checkweather(searchinput.value);
    document.querySelector(".error ").style.display="none";
    document.querySelector(".weather ").style.display="block";
})