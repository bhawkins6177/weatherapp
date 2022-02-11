import { useState } from "react";
import Ui from './Ui'

// my api key for this is : 8a78e069bb74338cceace00e40be926d : DONT DO THIS FOR REALI
function Form (){

    
    const [searchCityValue, setSearchCityValue] = useState('');
    const [weatherData, setWeatherData] = useState({
        temp: 70,
        location: 'Charlotte',
        condition: 'Sunny',
        feelsLike:  68,
        humidity: 66,
        wind: 2
    })

   const handleFunction = (e) =>{
        e.preventDefault();
        setSearchCityValue(e.target.value)
    }

   const submitFunction = (e) =>{
        e.preventDefault();
        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchCityValue}&units=imperial&appid=8a78e069bb74338cceace00e40be926d`,{
            mode: 'cors'
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data.name)
        
                setWeatherData({
                    temp: Math.round(data.main.temp),
                    location: data.name,
                    condition: data.weather[0].description,
                    feelsLike: data.main.feels_like, 
                    humidity: data.main.humidity,
                    wind: data.wind.speed

                })
            })
            .catch(err=>{
                console.log(err)

            })
            
        setSearchCityValue('');    
    }
    
    return(
        <div className='main-display'>
            <form className='form' onSubmit = {submitFunction}>
                <input 
                className = 'input'
                name = "city" 
                placeholder = "City"
                onChange = {handleFunction}
                value = {searchCityValue}>
                </input>
                {/* <button>Search!</button> */}
                
            </form>
            <Ui 
            
            temp = {weatherData.temp}
            location= {weatherData.location}
            condition = {weatherData.condition}
            feelsLike = {weatherData.feelsLike}
            humidity = {weatherData.humidity}
            wind = {weatherData.wind}
            />
        </div>
    )
}

export default Form;