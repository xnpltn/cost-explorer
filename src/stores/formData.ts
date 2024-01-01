import { ref, computed, Ref } from 'vue'
import { defineStore } from 'pinia'




export const useFormData = defineStore('users', {
  state: () => ({ 
    name: '',
    people: 5,
    city: '',
    children: 0,
    budget: 0,
    currency: 'USD' 
  }),


  actions: {
    setCurrency(){
      localStorage.setItem('currency', this.currency)
    },

    getCurrency(){
      localStorage.getItem('currency')
    }
  }
  
})

