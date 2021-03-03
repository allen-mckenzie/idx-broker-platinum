import actions from './actions'
import getters from './getters'

const state = {
    enableSyndication: false,
    autopublish: 'autopublish',
    postDay: 'sun',
    postType: 'post'
}

export default {
    namespaced: true,
    actions,
    getters,
    state
}
