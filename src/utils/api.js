import axiso from 'axios';
import {Message} from "element-ui";
import router from "../router";
import da from "element-ui/src/locale/lang/da";

/*封装全局请求结果提示*/
axiso.interceptors.response.use(
    //响应能进入到成功来，响应也未必是成功的,所以还要进行判断
    //success.status代表的是http的响应码
    //success.data代表的是我们后端传输到前端的数据
    success=>{
        if(success.status && success.status==200 && success.data.status==500){
           Message.error(success.data.msg);
           return;
        }
        if(success.data.msg){
            Message.success(success.data.msg);
        }
        return success.data;
    },error=>{
        if (error.response.status==404 || error.response.status==504){
            Message.error("服务器被吃啦!🤣");
        }else if(error.response.status==403){
            Message.error("权限不足，请联系管理员!");
        }else if(error.response.status==401){
            Message.error("未登入，请重新登入!");
            //跳转至登入界面
            router.replace('/');
        }else {
            if (error.response.data.msg) {
                Message.error( error.response.data.msg);
            }else {
                Message.error("未知错误!");
            }
        }
        return;
}

)

/*使用axios封装请求方法 */

