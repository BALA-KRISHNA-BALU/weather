import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const WeatherApp = () => {
  const [place, setPlace] = useState('')
  const [speed, setSpeed] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [status, setStatus] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [humidity, setHumdity] = useState('')
  const [pressure, setPressure] = useState('')
  const [sunrise, setSunrise] = useState('')
  const [sunset, setSunset] = useState('')
  const [temp, setTemp] = useState('')


  const [search, setSearch] = useState('')
  const [value, setValue] = useState('')
  const urlFirst = "https://api.openweathermap.org/data/2.5/weather?q="
  const urlLast = "&appid=bfb12dd01a60ae5bd8c4e6c3e73af357"
  const urlMiddle = search
  const url = urlFirst + urlMiddle + urlLast

  return <div className='weather-container'>
    <div className='serach-container'>
      <input type="text" value={search} placeholder='Ex:bengaluru,goa' onChange={(x) => {
        setSearch(x.target.value)
      }}></input>
      <button onClick={() => {
        
        async function weather() {
          setValue(search)
          const data = await fetch(url)
          const weatherData = await data.json()
          console.log(weatherData)
          // console.log(url)

          const temp = weatherData.main.temp
          const place = weatherData.name
          const longitude = weatherData.coord.lon
          const latitude = weatherData.coord.lat
          const status = weatherData.weather[0].main
          const speed = weatherData.wind.speed
          const min = weatherData.main.temp_min
          const max = weatherData.main.temp_max
          const pressure = weatherData.main.pressure
          const humidity = weatherData.main.humidity
          const sunrise = weatherData.sys.sunrise
          const sunset = weatherData.sys.sunset


          setHumdity(humidity)
          setLatitude(latitude)
          setLongitude(longitude)
          setMax(max)
          setMin(min)
          setPlace(place)
          setPressure(pressure)
          setSpeed(speed)
          setStatus(status)
          setSunrise(sunrise)
          setSunset(sunset)
          setTemp(temp)
        }
        weather()
      }}>Search</button>
    </div>
    <div className='degrees'>
      <i class="bi bi-cloud-sun-fill"></i>
      <h1>{place}</h1>
      <h1>{temp}degrees</h1>
    </div>

    <div className='all-data-container'>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-globe2"></i></h1>
          <h1>longitude</h1>
        </div>
        <h1>{longitude}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-globe-americas"></i></h1>
          <h1>latitude</h1>
        </div>
        <h1>{latitude}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-cloud-lightning-rain-fill"></i></h1>
          <h1>Min Temparature</h1>
        </div>
        <h1>{min}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-sun-fill"></i></h1>
          <h1>Max Temparature</h1>
        </div>
        <h1>{max}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-wind"></i></h1>
          <h1>Pressure</h1>
        </div>
        <h1>{pressure}</h1>
      </div >
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-cloud-haze2-fill"></i></h1>
          <h1>Humidity</h1>
        </div>
        <h1>{humidity}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-speedometer"></i></h1>
          <h1>Wind Speed</h1>
        </div>
        <h1>{speed}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-cloud-sun"></i></h1>
          <h1>Sun Rise</h1>
        </div>
        <h1>{sunrise}</h1>
      </div>
      <div className='data'>
        <div className='icon-flex'>
          <h1><i class="bi bi-cloud-moon-fill"></i></h1>
          <h1>Sun Set</h1>
        </div>
        <h1>{sunset}</h1>
      </div>

    </div>


  </div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WeatherApp />);

