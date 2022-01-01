import LgInput from '../'

export default {
  title: 'Example/LgInput',
  component: LgInput
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LgInput },
  template: '<lg-input v-bind="$props"></lg-input>',
})

export const Text = Template.bind({})
Text.args = {
  value: 'admin',
  type: 'text'
}

export const Password =  Template.bind({})
Password.args = {
  value: 'password',
  type: 'password'
}
