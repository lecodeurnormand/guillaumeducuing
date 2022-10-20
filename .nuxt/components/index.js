export { default as Footer } from '../../components/Footer.vue'
export { default as Form } from '../../components/Form.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Projects } from '../../components/Projects.vue'
export { default as Services } from '../../components/Services.vue'
export { default as Skills } from '../../components/Skills.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
