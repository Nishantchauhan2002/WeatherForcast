
// const apiKey="5571566b05442a7b5698f0b4e500e6d3";
const apiKey="863242cfb2b1d357e6093d9a4df19a4b";
// const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=rohtak";
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const apiUrl="http://api.openweathermap.org/data/2.5/weather?q={germany},
// {country%20code}&appid={5571566b05442a7b5698f0b4e500e6d3}&units=metric";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

console.log(searchBox)

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    var  data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./images/mist.png";
    }


    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

}
searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value);})

