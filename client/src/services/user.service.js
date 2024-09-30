import axios from 'axios';
import { $axios } from '../api.js'

class UserService {
    constructor() {
        this.URL = 'http://localhost:7001/api/users';
    }

    async getUser(id) {
        const { data } = await $axios.get(`${this.URL}/getUser/${id}`);
        return data;
    }

    async updateUser(id, user) {
        const { data } = await $axios.post(`${this.URL}/updateUser/${id}`, {

        });
        return data;
    }
}

export const userService = new UserService();