import axios from 'axios'

export function getAssociationList () {
  const url = '/api/getAssociationList'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getAssociation (assId) {
  const url = '/api/getAssociation'

  const data = {
    'assId': assId
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getAssociationDetail (assId) {
  const url = '/api/getAssociationDetail'

  const data = {
    'assId': assId
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getPiCiInfo (assId) {
  const url = '/api/getPiCiInfo'

  const data = {
    'assId': assId
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getPiCi (assId) {
  const url = '/api/getPiCi'

  const data = {
    'assId': assId
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
