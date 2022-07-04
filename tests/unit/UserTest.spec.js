import { mount } from '@vue/test-utils'
import fetch from 'node-fetch'
import Persons from '@/views/Users.vue'
import PersonsCreateForm from '@/components/UserCreateForm'
import Users from '@/views/Users'
import UserCreateForm from '@/components/UserCreateForm'

describe('Testing Persons.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Users)

    // then
    expect(wrapper.text()).toMatch('Members')
  })

  it('should have users create form component', () => {
    // when
    const wrapper = mount(UserCreateForm)

    // then
    const createForm = wrapper.findComponent(UserCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
