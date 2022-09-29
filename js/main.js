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

let city = document.getElementById('location');
let kTemp = document.getElementById('kelvin');
let cTemp = document.getElementById('celcius');
let fTemp = document.getElementById('fahrenheit');
let condition = document.getElementById('description');
let icon = document.getElementById('image');


btn.addEventListener('click', importData);
    async function importData(){
    
        let zipcode = document.getElementById('formID').value;

        try{
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=2ac06639cc28fd36cdb411b506b44376`);
            console.log(response.data);
            data = await response.data;

            city.innerText = data.name;
            kTemp.innerText = Math.round(data.main.temp) + '°' + 'K';
            fTemp.innerText = Math.round((data.main.temp - 273.15) * 1.8 + 32) + '°' + 'F';
            cTemp.innerText = Math.round((data.main.temp - 273.15)) + '°';
            condition.innerText = data.weather[0].main;
            // image.innerText = data.weather[1].icon;
            // icon.src = 'https://openweathermap.org/img/wn' + data.weather[0].icon + '@2x.png';
            }
        catch(error){
            // alert("hello");
            console.log(error);
        };
    };
    importData();
    