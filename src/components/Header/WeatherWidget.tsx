import React from 'react'
import { WeatherData } from '@types/common'
import styles from '@styles/components/WeatherWidget.module.css'

interface WeatherWidgetProps {
  weatherData?: WeatherData
  className?: string
}

// 默认天气数据（示例）
const defaultWeatherData: WeatherData = {
  temperature: '25°C',
  condition: '晴',
  humidity: '45%',
  windSpeed: '3.2m/s'
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  weatherData = defaultWeatherData,
  className = ''
}) => {
  return (
    <div className={`${styles.weatherWidget} ${className}`}>
      <div className={styles.weatherIcon}>
        <span className={styles.weatherEmoji}>☀️</span>
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.temperature}>
          {weatherData.temperature}
        </div>
        <div className={styles.condition}>
          郑州 · {weatherData.condition}
        </div>
      </div>
      <div className={styles.weatherDetails}>
        <span className={styles.humidity}>
          💧 {weatherData.humidity}
        </span>
        <span className={styles.windSpeed}>
          🌬️ {weatherData.windSpeed}
        </span>
      </div>
    </div>
  )
}

export default WeatherWidget