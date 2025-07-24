export default {
  // register(state, payload) {
  //   state.coaches.push({
  //     id: payload.id,
  //     name: payload.name,
  //     hourlyRate: payload.hourlyRate,
  //     areas: payload.areas,
  //     description: payload.description,
  //   });
  // },
  register(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
