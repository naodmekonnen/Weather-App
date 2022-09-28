// const axios = require('axios')



    let header = document.createElement('h1');
    header.innerText = "WeatherApp";
    document.body.appendChild(header);
    header.id = 'headerID';
    
    let btn = document.createElement("button");
    btn.innerText = "Get Weather";
    document.body.appendChild(btn);
    btn.id = 'buttonID';
    
    let zipform = document.createElement('input');
    zipform.placeholder = 'Enter Zipcode';
    document.body.appendChild(zipform);
    zipform.id = 'formID';
    
    let weatherInfo = [];
    let displayState = {
        city:[],
        kTemp:[],
        cTemp:[],
        fTemp:[],
        condition:[],
        image:[]  
    };

    btn.addEventListener('click', importData);
        let API = 'https://api.openweathermap.org/data/2.5/weather?zip=94087,us&appid=2ac06639cc28fd36cdb411b506b44376';

    async function importData(url){
        let zipcode = document.getElementById("formID").value;

        
        try{
            let response = await axios.get(url);
            console.log(response.data);
            weatherInfo = await response.data;

            city.innerText = data.name;
            kTemp.innerText = data.main.temp + '°' + 'K';
            fTemp.innerText = (data.main.temp - 273.15) * 1.8 + 32 + 'f';
            cTemp.innerText = (data.main.temp - 273.15);
            condition = data.weather[0].description;
            image.innerText = data.weather[0].icon;
            
        }
        catch(error){
            city.innerText = "Enter a valid zip"
            console.log(error);
        }
    }

    
    importData(API);
    