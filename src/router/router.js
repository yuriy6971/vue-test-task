import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/MainPage"
import UsersPage from "@/pages/UsersPage"
import LoginPage from "@/pages/LoginPage"

const routes = [
   {
    path : '/',
    component : MainPage
   },
   {
    path : "/users",
    component : UsersPage
   },
   {
    path : '/login',
    component : LoginPage
   }
]


const router = createRouter({
    history : createWebHashHistory(),
    routes
})

export default router