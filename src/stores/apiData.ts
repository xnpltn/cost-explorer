import { ref, computed, Ref, AriaAttributes } from 'vue'
import { defineStore } from 'pinia'
import { useFormData } from './formData'



interface Results<T> {
  city: string,
  currency : string,
  costs: T[]
}

interface Cost {
  item: string,
  cost: number,
  range: { high: string, low: string}
}


export const useApiStore = defineStore('counter', {
  state: ():{city: string, currency: string, costs: Cost[]} => ({ 
    city: '', 
    currency: '',
    costs:[]
  }),

  getters: {
    getMonthlyTotal(state){
      return Number(String(this.costs[30].cost).replace(",", "")) + Number(String(this.costs[32].cost).replace(",", "")) + Number(String(this.costs[36].cost).replace(",","")) + Number(String(this.costs[37].cost).replace(",","")) + Number(String(this.costs[49].cost).replace(",", "")) + Number(String(this.costs[47].cost).replace(",","")) + Number(String(this.costs[51].cost).replace(",",""))
    }
  },
  
  actions: {
    async fill(city: string, currency: string) {
      let myCity = city.trim().split(' ')
      if(myCity.length === 1){
        const responce: Results<Cost> = await (await fetch(`https://cost-of-living-api-ruddy.vercel.app/:${city.trim()}?${currency}`)).json()
        this.city = responce.city
        this.currency = responce.currency
        this.costs = responce.costs
      }else{
        let newCity = myCity.join('-')
        const responce: Results<Cost> = await (await fetch(`https://cost-of-living-api-ruddy.vercel.app/:${newCity}?${currency}`)).json()
        this.city = responce.city
        this.currency = responce.currency
        this.costs = responce.costs
      }
      
    },
  },

  
})




