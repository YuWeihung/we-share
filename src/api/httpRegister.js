import axios from 'axios'

const baseURL=''||'testData'

const http=axios.create(
    {
        baseURL:baseURL,
        headers:{
            'Content-Type': 'application/json'
        }
    }
)

export default {
    get(email,name,pwd,callback){
        http.request({
            url:'/register.json',
            method:'GET',
            params:{
                email:email,
                userName:name,
                password:pwd
            }
            }).then(function (response) {
                const result=response.data.registerRe;
                callback(result)
        }).catch(function (error) {
            window.console.log(error)
        })
    }
}