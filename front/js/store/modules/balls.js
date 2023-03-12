export const balls = {
  state: {
      ballsArray: []
  },
  mutations: {
      addBall(state, ball) {
          state.ballsArray.push(ball)
      }
  },
  actions: {
      addBall({ commit }, ball) {
          commit('addBall', ball);
      }
  },
  getters: {}
}