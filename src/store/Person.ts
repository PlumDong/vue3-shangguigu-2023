import {defineStore} from "pinia";

const usePersonStore = defineStore('PersonStore', {
    actions:{
        inc(value:number){
            this.sum+=value
        }
    },
    state(){
        return  {
            sum:6
        }
    },
});

export default usePersonStore
