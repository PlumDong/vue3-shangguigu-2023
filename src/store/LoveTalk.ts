import {defineStore} from "pinia";
import {reactive} from "vue";
import axios from "axios";
import {nanoid} from "nanoid";

// const useLoveTalkStore = defineStore('LoveTalkStore', {
//     actions: {
//         async getATalk() {
//             let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//             this.talkList.unshift({id: nanoid(), title})
//         }
//     },
//     state():{talkList:{id:string,title:string}[]} {
//         return {
//             talkList: JSON.parse(localStorage.getItem('loveTalkStore')??'[]' )
//         }
//     },
// });
const useLoveTalkStore = defineStore('LoveTalkStore', () => {
    let talkList = reactive(JSON.parse(localStorage.getItem('loveTalkStore')??'[]' ))

    async function getATalk() {
        let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        talkList.unshift({id: nanoid(), title})
    }
    return {
        talkList,
        getATalk,
    }
});
export default useLoveTalkStore
