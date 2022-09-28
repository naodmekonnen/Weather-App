// const axios = require('axios')


function initialize(){

    let header = document.createElement('h1');
    header.innerText = "WeatherApp";
    document.body.appendChild(header);
    header.id = 'headerID';
    
    let btn = document.createElement("button");
    btn.innerHTML = "Get Weather";
    document.body.appendChild(btn);
    btn.id = 'buttonID';
    
    let zipform = document.createElement('input');
    zipform.placeholder = 'Enter Zipcode';
    document.body.appendChild(zipform);
    zipform.id = 'formID';
    
    };
    
initialize();
    console.log(initialize);

    // let weatherInfo = [];
    // let displayState = {
    //     city:[],
    //     kTemp:[],
    //     cTemp:[],
    //     fTemp:[],
    //     condition:[],
    //     image:[]  
    // };

    // btn.addEventlistener('click', importData);


    let zipInfo = document.querySelector('')
    
    let API = 'https://api.openweathermap.org/data/2.5/weather?zip=94087,us&appid=2ac06639cc28fd36cdb411b506b44376';

    async function importData(url){
        
        try{
            let response = await axios.get(url);
            console.log(response.data);
            weatherInfo = await response.data;
            // displayData(weatherInfo);
            
        }
        catch(error){
            console.log(error);
        }
    }
    
    importData(API);
    