import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    socket: {
        isConnected: false,
        message: '',
        reconnectError: false,
    }
  },
  mutations: {
    SOCKET_ONOPEN (state, event)  {
        Vue.prototype.$socket = event.currentTarget
        state.socket.isConnected = true
    },
    // eslint-disable-next-line
    SOCKET_ONCLOSE (state, event)  {
        state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
        // eslint-disable-next-line
        console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message)  {
        state.socket.message = message
        // eslint-disable-next-line
        console.log('received message', message.data)
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
        // eslint-disable-next-line
        console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
        state.socket.reconnectError = true;
    },
    increment (state) {
      state.count++
    },
    decrement: state => state.count--
  },
  actions: {
    sendMessage: function(context, message) {
      //.....
      Vue.prototype.$socket.send(message)
      //.....
    }
  }
})