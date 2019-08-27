import { key } from './key'

export const url = city => `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
