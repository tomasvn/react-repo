// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
export const time = s => new Date(s * 1e3).toISOString().slice(-13, -5)