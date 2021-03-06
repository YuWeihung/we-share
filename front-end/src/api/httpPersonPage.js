import axios from 'axios';

const baseURL = '';

const http = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
});

const dataHandler = data => {
    // 可以在这里添加一些数据处理。
    return data;
};

export default {
    getUserInfo(userId, callback) {
        http.request({
            url: baseURL=='testData'?'/userInfo.json':'/personalPage',
            method: 'GET',
            params: {
                userId:userId
            }
        }).then(response => {
            // window.console.log(response.data)
            const result = response.data.userInfo;
            // 因为 axios 的请求是异步请求，所以在这里使用了回调函数。
            callback(result);
        }).catch(function (error) {
            window.console.log(error);
        });
    },
    changeUserInfo(uid,avatar,userName,gender,email,intro,callback){
        http.request({
            url:baseURL==='testData'?'/editUserInfoConfirm.json':'/changeInfo',
            method:'GET',
            params:{
                userId:uid,
                avatar:avatar,
                userName:userName,
                gender:gender,
                email:email,
                introduction:intro
            }
        }).then(function (response) {
            const result=response.data;
            callback(result)
        })
    },
    getMyPage(uid, searchType, page, callback){
        http.request({
            url: baseURL === 'testData' ? (
                (searchType === 'myFavorite') ? '/MyFavo.json' : (
                    searchType === 'myPost' ? '/myPost.json' : '/myFocus.json'
                )
            ) : '/personalPage',
            method: 'GET',
            params: {
                userId:uid,
                type: searchType,
                page: page
            }
        }).then(response => {
            // window.console.log(response.data)
            const result = response.data.list.map(item => dataHandler(item));
            // 因为 axios 的请求是异步请求，所以在这里使用了回调函数。
            callback(result);
        }).catch(function (error) {
            window.console.log(error);
        });
    },
    unfollowUser(uid,fid,callback){
        http.request({
            url:baseURL==='testData'?'/editUserInfoConfirm.json':'/personalPage/personalList',
            method:'GET',
            params:{
                userId:uid,
                followedId:fid
            }
            }
        ).then(function (response) {
            var result=response.data;
            callback(result)
        })
    },
    deletePost(uid,postid,callback){
        http.request({
            url:baseURL==='testData'?'/editUserInfoConfirm.json':'/personalPage/personalList',
            method:'GET',
            params:{
                userId:uid,
                postingId:postid
            }
        }).then(function (response) {
            var result=response.data;
            callback(result)
        })
    }
};
