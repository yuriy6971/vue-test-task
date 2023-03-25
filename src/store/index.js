import {createStore} from 'vuex'
import axios from 'axios'
import {UserModule} from "./UserModule"
import {LoginModule} from "./LoginModule"

export default createStore({

  

    modules : {
     users : UserModule,
     login : LoginModule
    }
})