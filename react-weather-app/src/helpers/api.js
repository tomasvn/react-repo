const dotenv = require('dotenv')
dotenv.config()

//export const url = () => `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.API_KEY}`
export const api = (query) => `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=6040b8d1b83f1f7f6797b8e343583949`