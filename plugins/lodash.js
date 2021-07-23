import _ from 'lodash'

export default ({ app }, inject) => {
  inject('lodash', _)
}
