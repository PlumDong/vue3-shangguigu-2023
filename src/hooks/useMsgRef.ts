import {customRef} from "vue";

export default (initValue: string, delay: number) => {

    let msg = customRef((track, trigger) => {
        let timeout: number
        return {
            get() {
                track()
                console.log('getMsg')
                //告诉vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
                return initValue
            },
            set(value) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    console.log('setMsg', value)
                    initValue = value
                    //通知vue 数据msg变化了
                    trigger()
                }, delay);
            }
        }
    });
    return {
        msg
    }

}
