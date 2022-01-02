<template>
  <a
    :href="disabled ? null : href"
    :class="[disabled && 'disabled', !underline && 'not-underline']"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'LgMyLink',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    underline: {
      type: Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.disabled{
  cursor: not-allowed;
}
.not-underline {
  text-decoration: none;
}
</style>
