import {onMounted, reactive} from "vue";
import axios from "axios";

export default () => {
    // 数据
    let dogList: string[] = reactive([]);
    // 方法
    async function getDog() {
        let res = await axios.get('https://dog.ceo/api/breeds/image/random');
        let message: string = res.data.message;
        console.log(message)
        dogList.push(message)
    }
    onMounted(()=>{
        getDog()
    })
    //向外部提供数据，方法
    return {
        dogList,
        getDog
    }
}
