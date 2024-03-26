import {defineStore} from "pinia";

const usePersonStore = defineStore('PersonStore', {
    actions:{
        inc(value:number){
            this.sum+=value
        }
    },
    state(){
        return  {
            sum:6,
            school:'shangguigu',
        }
    },
    getters:{
        bigSum: state => state.sum*10,
        upperSchool: state => state.school.toUpperCase()
    }
});

export default usePersonStore
