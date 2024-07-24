import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export const Weather = () => {

    const [city,setCity] = useState("")
    const [weather, setWeather] = useState();
    const[temp,setTemp] = useState();
    const[desc, setDesc] = useState();


    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const getWeather = () => {
        var weartherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7542f459aeb0b4470ebb5d050c84242`)

        weartherData.then((Success) => {
            console.log(Success.data)
            setWeather(Success.data.weather[0].main)
            setTemp(Success.data.main.temp)
            setDesc(Success.data.weather[0].description)
        })

    }

  return (
    <div className='bg-black p-20'>
        <div className='bg-sky-300 p-20 rounded-md flex m-2 items-center justify-around'>
        <div>
        <h1 className='text-2xl font-medium'> Weather Report</h1>
            <p>I can give you a weather report about your city</p>
            <input type='text' className='m-2 border border-black rounded-md p-2'onChange={handleCity}/>
            <button className='bg-black text-white p-2 rounded-md mx-2' onClick={getWeather}>Get Report</button>
            <div className='mt-2'>
                <h1><b>Weather:: </b> {weather}</h1>
                <p><b>Temperature:: </b>{temp}</p>
                <p><b>Description:: </b>{desc}</p>
            </div>
        </div>
            
            <div className='m-2'>
            <img src="/assest/Weather.jpg" alt="" className='w-80 rounded-md'/>
        </div>
        </div>
        
    </div>
  )
}
