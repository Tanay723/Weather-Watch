apikey = 'af048fa749f14f14bf7140444241907';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
// http://api.weatherapi.com/v1/current.json?key=af048fa749f14f14bf7140444241907&q=London&aqi=yes
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')



async function getData(apikey, cityName){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${cityName}&aqi=yes`);
    return await promise.json();
}

searchBtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData( apikey,input);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;
    

})