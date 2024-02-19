const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const input = document.getElementById('inputCity');
const btnSearch = document.getElementById('btnSearch');
const nameCountry = document.getElementById('nameCountry');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const icon = document.getElementsByTagName('img');
const APIKEY = `e77792d283acf73e09f3c700ceead2e7`;

const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
    const responseData = await getDataFromAPIWeather.json();
    return responseData;
}

btnSearch.addEventListener('click', () => {
    loader[0].classList.add('show');

    openWeather(inputCity.value)
    .then((respuestaDelClima) => {
        
    loader[0].classList.remove('show');
    loader[0].classList.add('none');
       nameCountry.innerText = "Pais:" + " " + respuestaDelClima.sys.country
       city.innerText = "Clima en" + " " + respuestaDelClima.name
       temp.innerText = "Tem:" + " " + (respuestaDelClima.main.temp - 273.15).toFixed(1);
       wind.innerHTML = "Viento:" + " " + respuestaDelClima.wind.speed
       const iconWeather = respuestaDelClima.weather[0].icon;
       icon[0].setAttribute('src',`https://openweathermap.org/img/wn/${iconWeather}@2x.png`);
       })

    .catch((error) => console.log(error));    
})






/*setTimeout(() => {
    loadP.classList.add('show')
    loader[0].style.display = 'none';
}, 3000)*/



