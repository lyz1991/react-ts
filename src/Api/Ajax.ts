import {fetchQuery} from "./interface";
import {rejects} from "assert";
const headers = {
  Accept: 'text/json',
  'content-type': 'application/json'
}
const baseUrl = process.env.NODE_ENV === 'development' ? 'https://api.github.com' : 'https://api.github.com'
const converParam = (query:fetchQuery.query) => query && Object.keys(query).map((item)=> `${item}=${query[item]}`).join('&')
const $ = {
  get: (url: string, query?: fetchQuery.query) => {
    return new Promise((resolve, rejects) => {
      fetch(`${url}?${converParam(query)}`, {
        headers,
      }).then(res => {
        resolve(res.json())
      })
    })
  },
  post: (url:string, query?: fetchQuery.query) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers,
        method: 'POST',
        body: query ? JSON.stringify(query):'',
      }).then(res => {
        resolve(res.json())
      })
    })
  }
}

export default $
