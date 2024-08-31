import { GiphyFetch } from '@giphy/js-fetch-api'

const giphyApiKey = process.env.REACT_APP_GIPHYAPI_APIKEY
export const giphyApi = new GiphyFetch(giphyApiKey)
