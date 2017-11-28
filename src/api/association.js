import axios from 'axios'

export function getAssociationList () {
  const url = '/api/getAssociationList'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
