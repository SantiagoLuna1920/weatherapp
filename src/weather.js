import React, { useEffect, useState } from 'react'
import { promise } from './components/promise';
import { WeatherLoots } from './components/weatherLoots';

export const Weather = () => {

    const [value, setValue] = useState([])
    const eather = () => { navigator.geolocation.getCurrentPosition(( { coords } ) => {
        return promise( coords.latitude, coords.longitude )
                            .then( setValue )
                            .catch( console.error )
    }); 
}

    useEffect(()=> {
        eather()
    },[])   

    return (
        <>
            { value.map(element=> {
               return <WeatherLoots key={ element.id } { ...element } />
            }) }
        </>
    )
}
