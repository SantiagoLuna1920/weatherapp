
export const promise = async ( lat, lon ) => {
    try {
        const api_key = "98f0cb7d475350e79b689f9907ca4a8f"
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&lon=${lon}&lat=${lat}`)
    const data = await res.json()
    const img = [
        {
            clouds: data.clouds.all,
            city: data.name,
            id: data.id,
            country: data.sys.country,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            cloud: data.weather[0].main,
            wind: data.wind.speed,
            pressure: data.main.pressure,
            temp: data.main.temp
        }
    ]

   return img

    } catch (error) {

        return "No se pudo conectar al api, tu navegador no soporta el tipo de ubicacion."

    }
}