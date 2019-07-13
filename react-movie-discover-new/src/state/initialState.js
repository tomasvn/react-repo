export const initialState = Object.freeze({
  page: 1,
  totalPages: undefined,
  data: [],
  isVisible: 5,
  isLoading: false,
  isError: false,
  isDisabled: true,
  errMsg: undefined,
  lang: ['en', 'cs', 'pl', 'de', 'sk'],
})