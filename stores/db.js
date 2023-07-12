import { defineStore } from 'pinia'

export const useStore = defineStore('store',{
    state:()=>{
        return {
            mode:'start',
            components:['timer','musicWidget']
        }
    }
})

