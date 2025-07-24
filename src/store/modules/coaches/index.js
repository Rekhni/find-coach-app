import coachesGetters from './getters';
import coachesMutations from './mutations';
import coachesActions from './actions';

export default {
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: "c3",
          name: "Rakhymzhan",
          hourlyRate: 26,
          areas: ["frontend", "backend", "career"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel consequat elit. Quisque placerat suscipit orci id feugiat. Morbi lobortis ligula eu mauris consectetur porta",
        },
        {
          id: "c2",
          name: "Omirzhan",
          hourlyRate: 30,
          areas: ["backend"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel consequat elit. Quisque placerat suscipit orci id feugiat. Morbi lobortis ligula eu mauris consectetur porta",
        },
        {
          id: "c1",
          name: "Zhanar",
          hourlyRate: 45,
          areas: ["frontend", "career"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel consequat elit. Quisque placerat suscipit orci id feugiat. Morbi lobortis ligula eu mauris consectetur porta",
        },
      ],
    };
  },
  getters: coachesGetters,
  mutations: coachesMutations,
  actions: coachesActions
};