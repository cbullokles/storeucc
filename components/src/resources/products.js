import axios from 'axios'
import { ENDPOINTS } from '../endpoints'

const URL = ENDPOINTS.getURL('product');

export const products = {
  findById( id ) {
    return new Promise((resolve, reject) => {
      const productsURL=URL+'/products/'+id+'?filter[include]=pictures';
      axios.get(productsURL)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  },
  find( ){
      return new Promise( (resolve,reject) =>{
        const productsURL= URL + '/products?filter[include]=pictures';
        axios.get(productsURL)
        .then(response => resolve(response.data))
        .catch(error => reject(error))

      })
  }
}
