import { API_KEY } from '../api'

// export const url = page => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&lang=cs`

export const url = page => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
export const setData = data => ({ data })
export const setTotalPages = totalPages => ({ totalPages })
export const isLoading = isLoading => ({ isLoading })
export const isError = isError => ({ isError })
export const loadMore = val => state => ({ isVisible: state.isVisible += val })
export const errorMsg = errMsg => ({ errMsg })
export const nextPage = state => ({ page: state.page += 1 })
export const prevPage = state => ({ page: state.page -= 1 })
export const setDefaultVisible = isVisible => ({ isVisible })
export const setButtonDisabled = isDisabled => ({ isDisabled })
export const setOpenState = isSettingsOpen => ({ isSettingsOpen })
export const smoothScroll = (target, duration) => {
  const targetPosition = document.querySelector(target).getBoundingClientRect().top; //Gets a relative position of an element to the window
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if(startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)

    if(timeElapsed < duration) requestAnimationFrame(animation)
  }

  const easeInOutQuad = Math.easeInOutQuad = (t, b, c, d) => {
      t /= d/2
      if (t < 1) return c/2*t*t + b
      t--
      return -c/2 * (t*(t-2) - 1) + b
  }

  requestAnimationFrame(animation)
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
export const promise = param => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(param)
  }, 300)
})