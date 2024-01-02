import { ref, computed, Ref } from 'vue'
import { defineStore } from 'pinia'
import { useFormData } from './formData'



interface Results {
  city: string,
  currency : string,
  costs: Awaited<Cost>[]
}

interface Cost {
  item: string,
  cost: string,
  range: string
}


export const useApiStore = defineStore('counter', {
  state: () => ({ 
    city: '', 
    currency: '',
    costs : []
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
        const responce: Results = await (await fetch(`https://cost-of-living-api-ruddy.vercel.app/:${city.trim()}?${currency}`)).json()
        this.city = responce.city
        this.currency = responce.currency
        this.costs = responce.costs
      }else{
        let newCity = myCity.join('-')
        const responce: Results = await (await fetch(`https://cost-of-living-api-ruddy.vercel.app/:${newCity}?${currency}`)).json()
        this.city = responce.city
        this.currency = responce.currency
        this.costs = responce.costs
      }
      
    },
  },

  
})




