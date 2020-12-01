<template>
  <div id="login-view">
    <div class="login-content">
      <div class="cont">
        <div class="left">
          <div>
            <h2 class="font-bold app-title">TEAM VINE</h2>
            <p class="mt-8 desc bring-more">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatibus ipsam eaque
              reprehenderit earum deleniti repellat totam, nobis adipisci unde aut voluptatum, eum, a laudantium libero?
              Quas pariatur amet ipsum!
            </p>
          </div>

          <img class="img mt-4" src="../assets/images/group-chat-amico.svg" alt="">

        </div>
        <div class="right">
          <form @submit.prevent="onSignIn" class="pt-4 pb-4">
            <h1 class="f-md mb-3 mt-3 head">SIGN IN TO TEAMVINE</h1>
            <span class="line"></span>
            <div class="form-div">
            <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-blue items-center rounded mb-6 pr-10">
              <div class="flex -mr-px justify-center w-15 p-4">
                <span
                  class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
                      fill="rgba(113,128,150,1)" /></svg>
                </span>
              </div>
              <input type="text"
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Email adress" />
            </div>
            <hr>

            <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-blue items-center rounded mb-6 pr-10">
              <div class="flex -mr-px justify-center w-15 p-4">
                <span
                  class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zm-2 0V9A5 5 0 0 0 7 9v1h10zm-6 4v4h2v-4h-2z"
                      fill="rgba(113,128,150,1)" /></svg>
                </span>
              </div>
              <input type="text"
                class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Password" />
            </div>
            <hr>
            </div>
            <p v-if="errorMsg!=''" :class="[errorColor,'mt-2']">{{errorMsg}}</p>
            <button
              class="bg-blue-500 s-in hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center mt-4 mb-2">
              <span>Sign In</span>
            </button>
            <p class="mt-3 mb-3 no-account">Don't have account? <router-link to="/register" class="link">Create one.
              </router-link>
            </p>
            <span class="or-line"><span class="or">OR</span></span>
            <button
              class="bg-blue-500 c-google hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <!-- <i class="ri-google-fill mr-2"></i> -->
              <span>Continue with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import login from "../lib/login";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
      errorColor: "danger",
    };
  },
  methods: {
    onSignIn() {
      if(this.email=="" || this.password==""){
        this.errorMsg = "* All fields are required *"
        return 0;
      }
      return;
    }
  }
}
</script>

<style scoped>
.app-title{
  font-family: 'PoppinsBold';
  font-size: 40px;
  color:#4299E1;
}
.bring-more{
  font-family: 'PoppinsThin';
  font-weight: 500 !important;
  color:grey;
  font-size: 17px;

}
.login-content {
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
  width: 45%;
}
.img {
  width: 80%;
  margin:auto;
  margin-top: 0;
}
form {
   background-color: white;
   border-radius: 7px;
   width: 90%;
   margin-top: 16%;
   padding-bottom: 8%;
   -webkit-box-shadow: 0 0 1.2px 2.4px rgb(219, 219, 219);
   -moz-box-shadow: 0 0 1.2px 2.4px rgb(219, 219, 219);
   box-shadow: 0 0 1.2px 2.4px rgb(219, 219, 219);
}
form h1 {
  color: #00A8FF;
  font-weight: 100px;
  font-size: 110% !important;
  margin-top: 10%;
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
hr{
  position: relative;
  top:-5px;
}
/* --------------------------------- */
.form-div{
  width: 90%;
  margin: 0 auto;
}
.s-in {
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  outline: none !important;
}
.c-google {
  width: 70%;
  text-align: center;
  justify-content: center;
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

.in-field .inpt input:focus{
  border-bottom:2px solid #4299E1;
}

@media only screen and (max-width: 700px){
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