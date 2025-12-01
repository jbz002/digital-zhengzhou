import React from 'react'
import styles from '@styles/components/WeatherWidget.module.css'

interface WeatherWidgetProps {
  className?: string
}

// 天气数据接口
interface WeatherData {
  location: string
  temperature: number
  windDirection: string
  windLevel: number
  weather: string
  humidity?: number
  icon?: string
}

// 默认天气数据（示例）
const defaultWeatherData: WeatherData = {
  location: '郑州市',
  temperature: 28,
  windDirection: '东北风',
  windLevel: 3,
  weather: '晴',
  humidity: 65,
  icon: '⛅'
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  className = ''
}) => {
  const weatherData = defaultWeatherData

  return (
    <div className={`${styles.weatherWidget} ${className}`}>
      <div className={styles.weatherIcon}>
        {weatherData.icon}
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.weatherMain}>
          <div className={styles.location}>
            {weatherData.location}
          </div>
          <div className={styles.temperature}>
            {weatherData.temperature}°C
          </div>
        </div>
        <div className={styles.windInfo}>
          {weatherData.windDirection} {weatherData.windLevel}级
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget