import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import {fetchData} from './api'

import CoronaLogo from './img/logo.png'

const App = () => {

  const [data, setData] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchData();

      setData(fetchedData)
    }

    fetchAPI()
  }, [])

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    setCountry({data: fetchedData, country: country})
    
  }

 
  

    return (
      <div className={styles.container}>
        <img className={styles.image} src={CoronaLogo} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  
}

export default App;