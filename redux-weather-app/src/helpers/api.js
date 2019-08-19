import { key } from './key'

export const url = (city, code) => `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=${key}`