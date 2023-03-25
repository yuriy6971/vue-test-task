import axios from "axios"

export const UserModule = {
  state: () => {
    return {
      users: [],
      total_users: 0,
      page: 1,
      count: 6,
      positions: [],
      isLoaderVisible : false
    };
  },

  getters: {
    sortedUsers: (state) => {
      return state.users.sort((a, b) =>
        a.registration_timestamp < b.registration_timestamp ? 1 : -1
      );
    },
 
    LoadUsers: (state) => {
      return state.users.length;
    },
  },

  mutations: {

    setUsers : (state,users) => {
        state.users = [...users]
        
      },
      setMoreUsers : (state,users) => {
        state.users = [...state.users,...users]
        

      },
      setTotal_users :  (state,total_users) => {
        state.total_users = total_users
      },
      
      incremmentPage : state => {
        state.page += 1
      },
      setIsLoaderVisible : (state,boolean) => {
        state.isLoaderVisible = boolean
      },
  },

  actions: {
    getUsers : ({state,commit}) => {
        commit("setIsLoaderVisible",true)
       axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/users",{
         params : {
             page : state.page,
             count : state.count
         }
       })
       .then(response => {
         commit("setUsers",response.data.users)
         commit("setTotal_users",response.data.total_users)
          commit("setIsLoaderVisible",false)
       })
      },
      getMoreUsers : ({state,commit}) => {
        commit("setIsLoaderVisible",true)
        commit("incremmentPage")
        axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/users",{
         params : {
           page : state.page,
           count :state.count
         }
        })
        .then(response => {
         commit("setMoreUsers",response.data.users)
         commit("setIsLoaderVisible",false)
        })
      },
  },
};
