export default {
  // registerCoach(context, payload) {
  //   context.commit("register", payload);
  // },
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      name: data.name,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
      description: data.description
    }

    const token = context.rootGetters.token;

    const response = await fetch(`https://find-a-coach-app-955ad-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    })

    // const responseData = await response.json();

    if (!response.ok) {

    }

    context.commit('register', {
        ...coachData, 
        id: userId
    });
  },

  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch('https://find-a-coach-app-955ad-default-rtdb.europe-west1.firebasedatabase.app/coaches.json')

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        name: responseData[key].name,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        description: responseData[key].description
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
  // setSelectedAreas(context, payload) {
  //   context.commit("updateSelectedAreas", payload);
  // }
};
