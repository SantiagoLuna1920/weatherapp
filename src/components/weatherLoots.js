import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow, faWind, faCloud } from '@fortawesome/free-solid-svg-icons'

export const WeatherLoots = ( { city, clouds, country, description, icon, wind, pressure, temp } ) => {

    const [temps, settemps] = useState({
        data: [temp-273.15],
        aux: true,
        grade: "°C"
    })

    const Degrees = () => {
        const [ data ] = temps.data
        
        if (temps.aux) {
            settemps({
                data: [( data * 9/5 ) + 32 ],
                aux: false,
                grade: "°F"
            })
        } else {
            settemps({
                data: [( data - 32 ) * 5/9 ],
                aux: true,
                grade: "°C"
            })
        }
    }

    return (
        <div className="container">
            <div className="container-weather">
            <h1>Weather App</h1>
            <h2>{`${city}, ${country}`}</h2>
            </div>
            
            <div className="container-two">
            <div className="container-icon">
            <img src={ `http://openweathermap.org/img/wn/${ icon }@2x.png` } alt={"Image cloud"} />
            <p className="p-icon">{ `${ temps.data[0].toFixed(2) }` } <span className="span-p">{ `${ temps.grade }` }</span></p>
            
            </div>
            
            <div className="container-info">
            <p className="colortext">{`"${description}"`}</p>
            <p><FontAwesomeIcon icon={ faWind } /> <span className="colortext">Wind speed:</span> {wind} m/s</p>
            <p><FontAwesomeIcon icon={ faCloud } />  <span className="colortext">Clouds:</span> {clouds} %</p>
            <p><FontAwesomeIcon icon={ faTemperatureLow } /><span className="colortext">Pressure:</span> {pressure} mb</p>
            </div>
            </div>

            <div className="cointainer-button">
            <button onClick={ Degrees }>DEGREES °F/°C</button>
            </div>
        </div>
    )
}
