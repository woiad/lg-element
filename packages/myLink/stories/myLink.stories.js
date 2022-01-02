import LgMyLink from '../'

export default {
title: 'Example/LgMyLink',
component: LgMyLink
}

const Template = (args, { argTypes }) => ({
props: Object.keys(argTypes),
components: { LgMyLink },
template: '<lg-my-link v-bind="$props" >111</lg-my-link>',
})

export const Link = Template.bind({})
Link.args = {
  hrf: 'https://www.baidu.com',
  disabled: true
}
