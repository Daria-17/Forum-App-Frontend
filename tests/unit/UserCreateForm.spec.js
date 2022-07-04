import { mount } from '@vue/test-utils'
import PersonsCreateForm from '@/components/UserCreateForm'
import UserCreateForm from '@/components/UserCreateForm'
import Users from '@/views/Users'

describe('Testing UserCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(UserCreateForm)

    // then
    expect(wrapper.find('#users-create-offcanvas').classes()).not.toContain('show')
  })
})
