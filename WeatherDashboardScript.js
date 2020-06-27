


function myfunction() {
    
        
    var City = document.getElementById('input').value;
    console.log(City)
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q="+City+"&appid=dc171ae0b3b507207c6605cbab0a5f98",
        function(data){
            console.log(data);


            var icon ="https://openweathermap.org/img/w/" + data.list[0].weather[0].icon +".png";
            var temp=Math.floor(data.list[0].main.temp);
            var weather=data.list[0].weather[0].main;
            var city=data.city.name;
            var date= data.list[0].dt_txt;
            var humidity=data.list[0].main.humidity;
            var wind=data.list[0].wind.speed;
        
            $(".icon").attr("src",icon);
            $(".weather").append(weather);
            $(".temp").append("Temp:"+temp);
            $(".city").append(city);    
            $(".date").append(date);
            $(".humidity").append("Humidity:"+humidity);
            $(".wind").append("Wind Speed:"+wind);

            $(".icon1").attr("src",icon);
            $(".weather1").append(weather);
            $(".temp1").append("Temp:"+temp);
            $(".city1").append(city);    
            $(".date1").append(date);
            $(".humidity1").append("Humidity:"+humidity);
            $(".wind1").append("Wind Speed:"+wind);

            var icon ="https://openweathermap.org/img/w/" + data.list[8].weather[0].icon +".png";
            var temp=Math.floor(data.list[8].main.temp);
            var weather=data.list[8].weather[0].main;
            var city=data.city.name;
            var date= data.list[8].dt_txt;
            var humidity=data.list[8].main.humidity;
            var wind=data.list[8].wind.speed;

            $(".icon2").attr("src",icon);
            $(".weather2").append(weather);
            $(".temp2").append("Temp:"+temp);
            $(".city2").append(city);    
            $(".date2").append(date);
            $(".humidity2").append("Humidity:"+humidity);
            $(".wind2").append("Wind Speed:"+wind);

            var icon ="https://openweathermap.org/img/w/" + data.list[16].weather[0].icon +".png";
            var temp=Math.floor(data.list[16].main.temp);
            var weather=data.list[16].weather[0].main;
            var city=data.city.name;
            var date= data.list[16].dt_txt;
            var humidity=data.list[16].main.humidity;
            var wind=data.list[16].wind.speed;

            $(".icon3").attr("src",icon);
            $(".weather3").append(weather);
            $(".temp3").append("Temp:"+temp);
            $(".city3").append(city);    
            $(".date3").append(date);
            $(".humidity3").append("Humidity:"+humidity);
            $(".wind3").append("Wind Speed:"+wind);

            var icon ="https://openweathermap.org/img/w/" + data.list[24].weather[0].icon +".png";
            var temp=Math.floor(data.list[24].main.temp);
            var weather=data.list[24].weather[0].main;
            var city=data.city.name;
            var date= data.list[24].dt_txt;
            var humidity=data.list[24].main.humidity;
            var wind=data.list[24].wind.speed;

            $(".icon4").attr("src",icon);
            $(".weather4").append(weather);
            $(".temp4").append("Temp:"+temp);
            $(".city4").append(city);    
            $(".date4").append(date);
            $(".humidity4").append("Humidity:"+humidity);
            $(".wind4").append("Wind Speed:"+wind);

            var icon ="https://openweathermap.org/img/w/" + data.list[32].weather[0].icon +".png";
            var temp=Math.floor(data.list[32].main.temp);
            var weather=data.list[32].weather[0].main;
            var city=data.city.name;
            var date= data.list[32].dt_txt;
            var humidity=data.list[32].main.humidity;
            var wind=data.list[32].wind.speed;

            $(".icon5").attr("src",icon);
            $(".weather5").append(weather);
            $(".temp5").append("Temp:"+temp);
            $(".city5").append(city);    
            $(".date5").append(date);
            $(".humidity5").append("Humidity:"+humidity);
            $(".wind5").append("Wind Speed:"+wind);

            const buttonSubmit = document.getElementById("buttonsubmit");
            const input = document.getElementById("input");
            const CityName = document.getElementById("CityName");
          

    });


}

const add = document.getElementById("buttonadd");
const textArea = document.getElementById("input");
const Text = document.getElementById("CityName");

add.addEventListener("click",function (){
  const key = textArea.value;


if (key) {
localStorage.setItem(key,null);
location.reload();
console.log(key);
}



});

for (let i =0;i<localStorage.length;i++){
const key=localStorage.key(i);

Text.innerHTML+= key,"-------- ";
}

