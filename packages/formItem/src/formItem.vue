<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'LgFormItemItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
