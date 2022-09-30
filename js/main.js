
const   myDiv = document.getElementById('main');

const   header = document.createElement('h2');
        header.textContent = 'Weather App';
        header.id = 'headerID';

const   form = document.createElement('input');
        form.placeholder = 'Enter Zipcode';
        form.id = 'formID';

const   button = document.createElement('button');
        button.textContent = 'Get Weather';
        button.id = 'buttonID';

const   city = document.createElement('p');
        city.textContent = ' ';
        city.id = 'location';

const   kTemp = document.createElement('p');
        kTemp.textContent = ' ';
        kTemp.id = 'kelvin';

const   cTemp = document.createElement('p');
        cTemp.textContent = ' ';
        cTemp.id = 'celcius';

const   fTemp = document.createElement('p');
        fTemp.textContent = ' ';
        fTemp.id = 'fahrenheit';

const   condition = document.createElement('p');
        condition.textContent = ' ';
        condition.id = 'description';
        
const   icons = document.createElement('div');
        icons.innerHTML = ' ';
        icons.id = 'images';

        myDiv.append(header,form,button,city,kTemp,cTemp,fTemp,condition,icons);

button.addEventListener('click', importData);

    
    async function importData(){
    
        let zipcode = document.getElementById('formID').value;

        try{
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=2ac06639cc28fd36cdb411b506b44376`);
            console.log(response.data);
            data = await response.data;

            city.innerText = data.name;
            kTemp.innerText = Math.round(data.main.temp) + '°' + 'K';
            fTemp.innerText = Math.round((data.main.temp - 273.15) * 1.8 + 32) + '°F';
            cTemp.innerText = Math.round((data.main.temp - 273.15)) + '°C';
            condition.innerText = data.weather[0].main;
            icons.innerText = data.weather[1].icon;
            icons.src = 'https://openweathermap.org/img/wn' + data.weather[0].icon;
            }
        catch(error){
            console.log(error);
        };
};
    importData();

