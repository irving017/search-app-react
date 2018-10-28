import axios from 'axios'

export const getProducts = (query)=>{
    const endPoint = 'http://www.liverpool.com.mx/tienda?'
    const params = {
      s:query,
      d3106047a194921c01969dfdec083925:'json'
    }
    return axios.get(endPoint+ new URLSearchParams(params))
  .then(res=>{
    return res.data
  })
  .catch(e=>{
    return e
  })
}