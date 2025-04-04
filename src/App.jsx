import './WeatherForcast.css'
import Card from './components/Card/Card.jsx'
import WeatherForecastData from './WeatherForcastData.js'

const App = () => {
  return (
    
    <>
      <section>
        <h1>Local Weather</h1>
        <div className="cardContainer">
          {WeatherForecastData.map((forcast) => (
            < Card
              forcast={forcast}
            />
          ))}
        </div>
      </section>
    </>

  );
}

export default App
