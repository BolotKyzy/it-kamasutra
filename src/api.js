import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b84e879a-0a8d-44f2-adcc-95a4cf0f4d56"
    }

});


export const usersAPI = {
    getUsers() {
        return instance.get('users')
        .then(res => {
            return res.data;
        })
   
   },
   follow(id) {
       return instance.post(`follow/${id}`)


   },
   unfollow(id) {
    return instance.delete(`follow/${id}`)


   },
   getProfile(userId) {
    return instance.get('profile/'+ userId)

}


}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

