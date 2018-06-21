import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
export default {
  getAllAddress(){
    return fetchJsonp('https://mwpgw.m.jd.com/mwp/mobileDispatch?api=7fresh.address.get&client=m&appName=7fresh').then(function(response){
      return response.json()
    })
  },
  getDefaultAddress(){
    return fetchJsonp('https://mwpgw.m.jd.com/mwp/mobileDispatch?api=7fresh.address.getDefault&client=m&appName=7fresh').then(function(response){
      return response.json()
    })
  }
}