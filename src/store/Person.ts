import {defineStore} from "pinia";

const usePersonStore = defineStore('PersonStore', {
    state(){
        return  {
            sum:6
        }
    },
});

export default usePersonStore
