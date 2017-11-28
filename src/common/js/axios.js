import originAxios from "axios"

export default function getJson(url, data){
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

    return new Promise((resolve, reject) => {
        originAxios.get(url).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export function param(data) {
    let url = ''
    for (var k in data) {
      let value = data[k] !== undefined ? data[k] : ''
      url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
  }