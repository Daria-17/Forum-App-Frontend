import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/views/SignUp'
import Topics from '@/views/Topics'
import Users from '@/views/Users'
import Home from '@/views/Home'
import About from '@/views/About'
import TopicNewForm from '@/views/TopicNewForm'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/users',
    name: 'user',
    component: Users
  },
  {
    path: '/topics',
    name: 'topics',
    component: Topics
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: SignUp
  },
  {
    path: '/topics/new',
    name: 'new_topic',
    component: TopicNewForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
