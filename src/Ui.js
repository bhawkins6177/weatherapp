


function Ui(props){
    return(
        <div className= 'main-content'>
            <div className = 'main-weather-display'>
                <div className = 'display'>
                
                    <p className = 'condition'>{props.condition}</p>
                    <h1 className = 'location'>{props.location}</h1>
                    <span className = 'degrees' typeof = "degrees">{props.temp}</span>
                    <div className='details'>
                        <p>Feels Like: {props.feelsLike}</p>
                        <p>Wind Speed: {props.wind} Mph</p>
                        <p>Humidty: {props.humidity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ui;