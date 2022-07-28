//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import MainBook from '../pages/MainBook'
import BookList from '../pages/BookList'
import BookListMore from '../pages/BookListMore'
import BookDetail from '../pages/BookDetail'
import User from '../pages/User'


//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/MainBook',
            component:MainBook
        },
        {
            path:'/BookList',
            component:BookList
        },
        {
            path:'/User',
            component:User

        },
        {
            path:'/BookListMore',
            component:BookListMore
        },
        {
            path:'/BookDetail',
            component:BookDetail
        }
    ]
})