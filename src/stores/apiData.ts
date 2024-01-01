import { ref, computed, Ref } from 'vue'
import { defineStore } from 'pinia'



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
  
  actions: {
    async fill(city: string, currency: string) {
      const responce: Results = await (await fetch(`http://localhost:3000/:${city}?${currency}`)).json()
      this.city = responce.city
      this.currency = responce.currency
      this.costs = responce.costs
    },
  },

  
})


