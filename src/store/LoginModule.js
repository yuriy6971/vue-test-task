import axios from "axios";

export const LoginModule = {
  state: () => {
    return {
      positions: [],
      token: "",
      loaderVisible: false,
      isUser : false
    };
  },

  getters: {
    Positions: (state) => {
      return state.positions;
    },
    Token: (state) => {
      return state.token;
    },
    LoaderVisible: (state) => {
      return state.loaderVisible;
    },
  
  
  },

  mutations: {
    setPositions: (state, positions) => {
      state.positions = positions;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setLoaderVisible: (state, boolean) => {
      state.loaderVisible = boolean;
    },
   setIsUser : (state, bool) => {
    state.isUser = bool
   }
  },

  actions: {
    getPositions: ({ commit }) => {
      axios
        .get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
        .then((response) => {
          if (response.data.success) {
            commit("setPositions", response.data.positions);
          } else alert("ku-ku");
        });
    },

    getToken: ({ commit }) => {
      axios
        .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
        .then((response) => {
          if (response.data.success) {
            commit("setToken", response.data.token);
          }
        });
    },
    setUser: ({ commit, getters }, payload) => {
      commit("setLoaderVisible", true)
      axios
        .post(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          payload.formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              token: getters.Token,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
             commit("setIsUser", true)
            commit("setLoaderVisible", false);
            // alert("SERVER OK!")
          }
        });
       // commit("setIsUser", true)
    },
    setLoader: ({ commit }, bool) => {
      commit("setLoaderVisible", bool);
    },
  }
};
