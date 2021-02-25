<template>
  <div id="login-view">
    <div class="login-content">
      <div class="cont">
        <div class="left">
          <div>
            <h2 class="font-bold app-title">RCONNECT</h2>

            <p class="mt-8 desc bring-more">
              Bring your teams,companies,schools and all your groups to join
              RCONNECT where sharing skills and ideas and your staffs made
              easier and secure.
            </p>
          </div>
          <img
            class="img mt-4"
            src="../assets/images/marketing_img.png"
            alt=""
          />
        </div>
        <div class="login-container focus right rounded-md">
          <form @submit.prevent="onSignIn">
            <h2 class="head font-bold">Sign In</h2>
            <span class="line"></span>
            <label class="block w-full text-left">
              <span class="text-dark font-bold">Email</span>
              <input type="email" v-model="email" class="form-input mt-1 block w-full border border border-gray-500" placeholder="">
            </label>
            <label class="block w-full text-left mt-4">
              <span class="text-dark font-bold">Password</span>
              <input type="password" v-model="password" class="form-input mt-1 block w-full border border-gray-500" placeholder="">
            </label>
            <br>
            <a href="#" class="mt-4 text-md font-bold">Forgot Password?</a>
            <p v-if="errorMsg != ''" :class="[errorColor, 'mt-2']">
              {{ errorMsg }}
            </p>

            <button class="btn font-bold">Login</button>

            <p class="mt-4 mb-2 float-left no-account">
              Do you have account?
              <router-link to="/register" class="link">Sign Up.</router-link>
            </p>

            <div class="google-div mt-3">
              <h4 class="or-heading">OR</h4>
            </div>
            <button class="google-button mt-3 font-bold">Continue with google</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {authorize} from "../lib/login"
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
      errorColor: "text-red-600",
    };
  },
  methods: {
    onSignIn(e) {
      e.preventDefault()
      this.errorMsg = ""
      if (this.email == "" || this.password == "") {
        this.errorColor="text-red-600"
        this.errorMsg = "* All fields are required *";
        return 0;
      }
      authorize(this.email, this.password)
        .then((response) => {
          if(response.data.err){
            this.errorColor = "text-red-600"
            this.errorMsg = response.data.message
          }else{
            this.errorColor = "text-green-600"
            this.errorMsg = "Logging In..."
            localStorage.setItem("rconnectToken",response.data.data.token)
            // this.$store.commit("all/setToken", response.data.data.token);
            this.$router.push({ name: "Home" });
          }
        })
        .catch((err) => {
          console.log(err)
          this.errorMsg ="Unknown error occured";
        });
    },
    focusFunc($event) {
      let parent = $event.target.parentNode.parentNode;
      parent.classList.add("focus");
    },
    blurFunc($event) {
      let parent = $event.target.parentNode.parentNode;
      if ($event.target.value == "") {
        parent.classList.remove("focus");
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.app-title {
  font-family: "LatoBold";
  font-size: 30px;
  color: #2a68d3;
}
.bring-more {
  font-family: "Lato";
  font-weight: 550 !important;
  font-size: 18px;
}
#login-view {
  width: 100% !important;
  height: 100% !important;
  overflow-y: scroll;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#login-view::-webkit-scrollbar {
  width: 0px;
}
.login-content {
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
.cont .right {
  width: 40%;
}
.img {
  width: 80%;
  margin: auto;
  margin-top: 0;
}
.desc {
  font-weight: bold;
}

.no-account .link {
  color: #2a68d3;
  margin: -23px -64px 0 0;
}

.login-container {
  display: flex;
  align-items: center;
  text-align: center;
  width: 1em;
  height: 34em;
  margin: 6.8em 0 0 0;
  border: none;
  box-shadow: 0 0 4px 1px rgb(219, 219, 219);
  /* border: 1px solid rgb(0, 0, 0, 0.2); */
}
form {
  width: 70%;
  /* margin: -4em 15%; */
  margin: auto;
  height: auto;
}
form h2 {
  color: #2a68d3;
  font-weight: 100px;
  font-size: 150% !important;
  margin-top: 10%;
  margin-bottom: 0;
}
form .line {
  display: block;
  width: 27%;
  background-color: #2763ca;
  height: 2px;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 12%;
}
.input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 1px solid rgb(175, 175, 175);
}
.input-div::after,
.input-div::before {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 100%;
  display: none;
  height: 2px;
  background-color: #2f74eb;
  transition: 0.3s;
  left: 0;
  right: 0;
}
.input-div::after {
  right: 50%;
}
.input-div::before {
  right: 50%;
}
.input-div.one {
  margin-bottom: 4px;
}

.i {
  display: flex;
  justify-content: center;
  align-items: center;
}

.i svg {
  fill: #d9d9d9 !important;
  transition: 0.3s;
}
.input-div > div {
  position: relative;
  height: 45px;
}
.input-div.focus .i svg {
  fill: #2f74eb !important;
}
.input-div.focus div h5 {
  top: -5px;
  font-size: 15px;
}
.input-div.focus::after,
.input-div.focus::before {
  width: 100%;
  display: initial;
  animation-name: fadeIn;
  animation-duration: 1.5s;
}
.or-heading[data-v-15717af5] {
  margin-left: -4% !important;
  top: -15px;
  background: #2f74eb;
  width: 30px;
  border: none;
  border-radius: 50%;
  height: 30px;
  color: white;
  position: absolute;
  display: inline-block;
  text-align: center;
  padding: 1%;
  font-size: 100%;
}

.google-div {
  margin: 5em 0 0 0;
  position: relative;
  background: #2f74eb;
  width: 100%;
  height: 3px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
.google-button {
  width: 17em;
  height: 2.5em;
  background: #2f74eb;
  margin: 1.5em 0 0 0;
  margin-bottom: 7%;
  color: white;
  border-radius: 2px;
  cursor: pointer;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.input-div > div h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: 0.3s;
}
.input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  color: #555;
}
a {
  display: block;
  text-align: right;
  text-decoration: none;
  color: #2a68d3;
  font-size: 0.9rem;
  transition: 0.3s;
  margin: -18px 0 0 0;
}
a:hover {
  color: #2a68d3;
}

.btn {
  display: block;
  width: 65%;
  height: 45px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #2f74eb;
  font-family: "Poppins", sans-serif;
  color: #fff;
  text-transform: uppercase;
  transition: 0.3s;
  transition-property: "background";
  cursor: pointer;
  margin: 14px 0 0 5em;
}
.btn:hover {
  background-color: #1852b6;
}

@media only screen and (max-width: 700px) {
  .or-heading[data-v-15717af5] {
    margin-left: -4% !important;
  }
  .login-content {
    min-height: initial;
  }
  .login-container {
    box-shadow: none;
  }
  .cont {
    width: 100%;
    flex-direction: column-reverse;
  }
  .cont .left {
    width: 100%;
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
    border-radius: 0px;
    width: 100%;
    margin: -4em 10%;
    /* margin: auto; */
    box-shadow: none;
  }
  .input-div {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  form h1 {
    margin-top: 0%;
  }
  .btn {
    margin: 14px 20%;
    width: 54%;
  }
  a {
    margin: -19px 40px 0 0;
  }
}
</style>

