const apikey = "46a8d541406334d2dddf19c8f2423c1c"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric"


const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")



async function checkweather(city) {
    const response = await fetch(apiurl+ `&q=${city}` + `&APPID=${apikey}`)
    var data = await response.json()

    if(response.status == 404){
        document.querySelector(".error").style.display = "Block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        console.log(data);

        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if(data.weather[0].main == "Clear"){
            weather_icon.src = "Images/clear.png"
        }
        else if(data.weather[0].main == "Clouds"){
            weather_icon.src = "Images/clouds.png"
        }
        else if(data.weather[0].main == "Rain"){
            weather_icon.src = "Images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "Images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weather_icon.src = "Images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            weather_icon.src = "Images/snow.png"
        }
        
        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block"
    }

}



searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value);
})


window.addEventListener("keydown", (dets)=>{
    if(dets.key === "Enter"){
        checkweather(searchbox.value);
    }
})