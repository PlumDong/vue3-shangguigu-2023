import {defineStore} from "pinia";
import {reactive} from "vue";

const useLoveTalkStore = defineStore('LoveTalkStore', {
    state() {
        return {
            talkList: []
        }
    },
});
export default useLoveTalkStore
