<template>
  <div id="register-view">
    <div class="register-content">
        <div class="cont">
          <div class="left">
            <div>
              <h2 class="text-2xl font-bold app-title">RCONNECT</h2>
              <p class="mt-8 desc bring-more">
                Bring your Teams,Companies,Schools and Other groups to join RCONNECT where 
                sharing skills and ideas and your staffs made easier and secure.
              </p>
            </div>
            <img class="img mt-4" src="../assets/images/illustration.png" alt="">
          </div>
          <div class="right">
            <form @submit.prevent="onSignIn" class="pt-4 pb-3">
              <h1 class="f-md mb-3 mt-3 head">SIGN UP TO RCONNECT</h1>
              <span class="line"></span>
              <div class="in-field">
                <div class="icn"><i class="ri-account-pin-circle-line"></i></div>
                <div class="inpt"><input type="text" placeholder="Full Name"></div>
                <div class="icn"><i class="ri-check-line"></i></div>
              </div>
              <div class="in-field">
                <div class="icn"><i class="ri-price-tag-line"></i></div>
                <div class="inpt"><input type="text" placeholder="Display Name"></div>
                <div class="icn"><i class="ri-check-line"></i></div>
              </div>
              <div class="in-field">
                <div class="icn"><i class="ri-at-line"></i></div>
                <div class="inpt"><input type="email" placeholder="Your Email"></div>
                <div class="icn"><i class="ri-check-line"></i></div>
              </div>
              <div class="in-field">
                <div class="icn"><i class="ri-lock-line"></i></div>
                <div class="inpt"><input type="password" placeholder="New Password"></div>
                <div class="icn"><i class="ri-check-line"></i></div>
              </div>
              <div class="in-field">
                <div class="icn"><i class="ri-lock-line"></i></div>
                <div class="inpt"><input type="password" placeholder="Repeat Password"></div>
                <div class="icn"><i class="ri-check-line"></i></div>
              </div>
              <div class="agree-terms">
                <input type="checkbox" id="check-b"> I agree to the terms and conditions of privacy.
              </div>
              <p v-if="errorMsg!=''" :class="[errorColor,'mt-2']">{{errorMsg}}</p>
              <button class="bg-blue-500 btn-create hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center mt-4 mb-2">
                <i class="ri-check-line mr-2 mt-3"></i>
                <span>New Account</span>
              </button>
              <p class="mt-3 mb-2  no-account">Do you have account? <router-link to="/login" class="link">Sign In.</router-link></p>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      errorColor: "red",
      errorMsg: ""
    };
  },
  methods: {
    onSignIn() {
      return;
    }
  }
}
</script>

<style scoped>

.app-title{
  font-family: 'PoppinsBold';
  font-size: 30px;
  color: #4299e1;
}
.bring-more{
  font-family: 'PoppinsThin';
  font-weight: 600 !important;
  font-size: 18px;
}
#register-view {
  width: 100% !important;
  height: 100% !important;
  overflow-y: auto;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#register-view::-webkit-scrollbar {
  width: 0px;
}
.register-content {
  width: 100%;
  height: auto;
  min-height: 87%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
}
.cont {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
}
.cont .left {
  width: 55%;
  padding: 2%;
  height: auto;
  overflow: hidden;
  text-align: left;
  position: relative;
}
.left div {
  margin-top: 4%;
  padding: 10%;
  padding-bottom: 0%;
}
/* .left div h2 {
  color: orange;
} */
.cont .right {
  width: 45%;
}
.img {
  width: 80%;
  margin:auto;
  margin-top: 0;
}
.desc {
  font-weight: bold;
}
form {
   background-color: white;
   border-radius: 7px;
   width: 90%;
   margin-top: 16%;
   padding-bottom: 4%;
   -webkit-box-shadow: 0 0 5px 2px rgb(219, 219, 219);
   -moz-box-shadow: 0 0 5px 2px rgb(219, 219, 219);
   box-shadow: 0 0 5px 2px rgb(219, 219, 219);
}
form h1 {
  color: #00A8FF;
  font-weight: 100px;
  font-size: 110% !important;
  margin-top: 10%;
  margin-bottom: 0;
}
form .line {
  display: block;
    width: 45%;
    background-color: #00A8FF;
    height: 2px;
    margin:auto;
    margin-top: 1%;
    margin-bottom: 12%;
}
.in-field {
  margin: 2% auto;
  width: 70%;
  height: 45px;
  display: flex;
  flex-direction: row;
  border: 1px solid#00A8FF;
  border-radius: 3px;
  margin-top: 5%;
  box-shadow: 0 0 2px 1px rgb(219, 219, 219);
  background: none !important;
}
.in-field .icn {
  flex: 12%;
  font-size: 150%;
  padding-top: 1%;
  color: #00A8FF;
} 
.in-field .inpt {
  flex: 100%;
}
.in-field .inpt input {
  height: 100%;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  border: none;
  background: none !important;
}
.btn-create {
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  outline: none !important;
}
.c-google {
  width: 70%;
  text-align: center;
  justify-content: center;
}
.ri-google-fill {
  color: orange;
  font-size: 120%;
}
.no-account .link {
  color: #0087ca;
}
.or-line,.or {
  color: white;
  background-color: #0087ca;
}
.or-line {
  display: block;
  width: 70%;
  margin: auto;
  margin-bottom: 5%;
  margin-top: 5%;
  position: relative;
  height: 2px;
}
.or {
  display: inline-block;
  position: absolute;
  top: -800%;
  padding: 3px 5px;
  border-radius: 50%;
}



.d-block {
  display: block;
}
.danger {
  color: crimson;
}
.primary {
  color: #167df0;
}
@media only screen and (max-width: 700px){
  .register-content {
    min-height:initial;
  }
  .cont {
    width: 100%;
    flex-direction: column-reverse;
  }
  .cont .left {
    width: 90%;
    margin: 4% 5%;
    display: none;
  }
  .cont .right {
    margin-top: 10%;
    width: 100%;
  }
  .img {
    width: 100%;
  }
  form {
   background-color: none;
   box-shadow: 0 4px 8px 0 transparent;
   border-radius: 0px;
   width: 100%;
  }
  .in-field {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
  form h1 {
    margin-top: 0%;
  }
}
</style>
