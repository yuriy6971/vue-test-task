<template>
    <form class="login-form" novalidate @submit.prevent="checkForm">
      
        <my-loader class="loader" v-show="$store.state.login.loaderVisible" />
        <div class="group-input">
            <div class="form-element">
                <input type="text" name="name" placeholder="your name..." v-model.trim="form.name"
                :class="v$.form.name.$error ? 'is-invalid' : ''"
                >
               <p v-if="v$.form.name.$dirty && v$.form.name.required.$invalid"  class="invalid-message" >
                   {{ v$.form.name.required.$message }}
               </p>

               <p v-if="v$.form.name.$dirty && v$.form.name.minLength.$invalid"  class="invalid-message" >
                   {{ v$.form.name.minLength.$message }}
               </p> 
            </div> 
            <div class="form-element">
                <input type="email" name="email" placeholder="email..." v-model.trim="form.email"
                :class="v$.form.email.$error ? 'is-invalid' : ''"
                >
                <p v-if="v$.form.email.$dirty && v$.form.email.required.$invalid" class="invalid-message">
                    {{ v$.form.email.required.$message }}
                </p>
                <p v-if="v$.form.email.$dirty && v$.form.email.emailRegexp.$invalid" class="invalid-message">
                    Email is invalid!
                </p>
            </div>
            <div class="form-element">
                <input type="text" name="phone" placeholder="phone..." v-model.trim="form.phone"
                :class="v$.form.phone.$error ? 'is-invalid' : ''"
                >
                <p v-if="v$.form.phone.$dirty && v$.form.phone.required.$invalid" class="invalid-message">
                    {{ v$.form.phone.required.$message }}
                </p>
                <p v-if="v$.form.phone.$dirty && v$.form.phone.phoneRegexp.$invalid" class="invalid-message">
                    Phone is invalid!
                </p>
            </div>

        </div>
        <div class="group-radio">
            <h2>Select you position :</h2>
            <ul class="radio-buttons-block">
                <li v-for="position in positions" :key="position.id">
                    <input type="radio" name="pos" checked :value="position.id" v-model="form.position_id"> <label>{{
                        position.name }} </label>
                </li>
            </ul>

        </div>

        <div class="input-file">
            <input type="file" name="file" size="35" @change="onPhotoChange">
            <p v-if="v$.form.photo.$dirty && v$.form.photo.required.$invalid" class="invalid-message">
                {{ v$.form.photo.required.$message }}
            </p>
        </div>
        <my-button class="butt">Sign Up</my-button>

    </form>
</template>


<script>
import {useVuelidate} from '@vuelidate/core'
import {required, minLength, helpers} from "@vuelidate/validators"

const emailRegexp = helpers.regex(/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)
const phoneRegexp = helpers.regex(/^[+]{0,1}380([0-9]{9})$/)
export default {
    name: "LoginForm",
   setup(){
       return {v$ : useVuelidate()}
   },

    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                position_id: 4,
                photo : null
            },
            isUser : null
            
        }
    },
 
    computed: {
        positions(){
            return this.$store.getters.Positions
        },
        token(){
            return this.$store.getters.Token
        },
       User(){
        return this.$store.state.login.isUser
       }
    },
    methods : {
        onPhotoChange(event){
          this.form.photo = event.target.files[0]
        },
        checkForm(){
            this.v$.form.$touch()
            if (!this.v$.form.$error){
                 this.$store.dispatch("setLoader",true)
                const formData = new FormData()
                formData.append("position_id", this.form.position_id)
                formData.append("name", this.form.name)
                formData.append("email", this.form.email)
                formData.append("phone", this.form.phone)
                formData.append("photo", this.form.photo)

                
                 
                 this.$store.dispatch("setUser",{formData})
                 
            }
            
        },


        getUsers(){
            return this.$router.push('/users')
        }
    },

    watch : {
        User(newValue, prevValue){
           console.log(newValue)
           console.log(prevValue)
            this.$router.push('/users')
        }
      },
    
    mounted(){
      this.$store.commit ("setIsUser", false)
    },

    validations() {
      return {
        form : {
          name : {required, minLength : minLength(3)},
          email : {required, emailRegexp },
          phone : {required, phoneRegexp},
           photo : {required}
        }
      }
    }
}
</script>


<style scoped >
.login-form {
    width: 100%;
    margin: 50px auto 0;
    position: relative;
}

.group-input,
.group-radio {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
}

.group-input {
    display: flex;
    flex-direction: column;
    align-items: left;
    /* margin-top: 55px; */
}

.form-element {
    width: 100%;
    margin-bottom: 50px;
}

.form-element>input {
    width: 100%;
    font-size: 16px;
    padding: 14px;
    color: #7E7E7E;
    background-color: white;
    border: 1px solid #7E7E7E;
    border-radius: 4px;

}

.group-radio h2 {
    text-align: left;
    margin-bottom: 20px;
}

.radio-buttons-block {
    list-style: none;
    text-align: left;
    margin-bottom: 30px;
}

.radio-buttons-block>li {
    margin-bottom: 10px;
}


.input-file {
    padding-left: 80px;
    text-align: left;

}

.butt {
    position: absolute;
    bottom: 50px;
    right: 200px;
}
.is-invalid {
    border: 2px solid red !important;
}

.invalid-message {
    font-size: 14px;
    color: red;
}
</style>