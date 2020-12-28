<template>
  <div class="Main-view">
    <div class="main grid">
      <img class="avatar" src="../assets/images/codeavatar.png" alt="">
      <h1 class="py-3">Email Verification</h1>
      <p class="mt-4">
        For better account verification please enter the code we sent to your email
        to verify that this is your email.
      </p>
      <div class="form-container">
        <div class="verification-code">
          <form class="shadow">
            <label for="code">Enter the code</label>
            <input type="text" v-model="enteredCode" id="code">
            <p class="mt-3 w-full pt-2 font-bold text-sm" :class="[errorColor]">{{errorMsg}}</p>
            <h4 class="resend" @click="reload">Resend code?</h4>
            <button type="button" :disabled="gotCode? false:true" @click="verifyCode">Verify</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
​
<script>
import {VerifyEmail,registerUser} from "../lib/user"
export default{
  name:"CodeVerification",
  data(){
    return{
      user_data: localStorage.getItem("user-data") || false,
      gotCode: false,
      code:"",
      enteredCode: "",
      errorMsg:"",
      errorColor:"text-red-700"
    }
  },
  mounted(){
    this.sendCode()
  },
  methods:{
    reload(){
      location.reload(true)
    },
    sendCode(){
      VerifyEmail(JSON.parse(localStorage.getItem("user-data")))
      .then(response=>{
        this.code = response.data.code
        this.gotCode = true
      })
      .catch(err=>{
        console.log(err);
        alert("Error occured: "+err.message)
      })
    },
    verifyCode(){
      this.errorMsg=""
      if(this.code.trim()==this.enteredCode.trim()) {
        this.errorColor ="text-green-700 text-md"
        this.errorMsg=" Creating Account... "
        registerUser(JSON.parse(localStorage.getItem("user-data")))
        .then((data) => {
          if(data.data.err){
            this.errorColor="text-red-600"
            this.errorMsg = data.data.message
            if(data.data.message.trim()=="That email was already taken!"){
              alert(data.data.message.trim())
              localStorage.removeItem("user-data")
              this.$router.push({name: "Register"});
            }
            return;
          }else{
            alert("Account created successfully!")
            localStorage.removeItem("user-data")
            this.$router.push({name: "Login"});
          }
        })
        .catch((err) => {
          this.errorColor="text-red-600"
          this.errorMsg = err.message;
        });
      }else{
        this.errorMsg="* Incorrect code *"
      }
    }
  }
}
</script>
​
<style scoped>
.Main-view {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0;
  display: block;
  overflow: auto;
  /* background-color: white; */
  /* background-image: url("../assets/images/email-marketing-campaign-flat-illustration_183665-67.jpg"); */
  /* background-image: url(../assets/images/group_illustration.jpg); */
  /* background-image: url(../assets/images/wrkspc.png); */
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
  /* background-attachment: fixed; */
}
.avatar {
  width: 10em;
  margin: 2em 0 0 10em;
}
input[type="text"] {
  width: 13em;
  border-bottom: 1px solid dotted;
  text-decoration: dashed;
  height: 36px;
  border-bottom:dashed;
}
.main {
  width: 30em;
  height: 36em;
  /* background: #f4f6fc; */
  background-color: white;
  box-shadow: 0 1px 4px 1px #bdbdbd;
  margin: auto;
  margin-top: 3%;
   border-radius: 10px;
    /* box-shadow: 1px 6px 14px -10px; */
}
h1 {
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase
}
p {
  /* margin: -54px 0 0 78px; */
  margin: auto;
  width: 22em;
  text-align: justify;
  font-weight: 350;
}
form {
  width: 21em;
  height: 12em;
  background: white;
  /* margin: -2em 0 0 6em; */
  margin: auto;
  margin-bottom: 5em;
  margin-top: 2em;
  padding: 1em 0 0 3em;
  /* box-shadow: 0 1px 4px 1px #bdbdbd; */
  border-radius: 8px;
}
.resend{
  float: left;
  margin: 29px 0 0 -10px;
  text-decoration: underline;
  cursor: pointer;
}
button{
  float: right;
  margin: 23px 28px 0 0;
  width: 6em;
  height: 2.6em;
  background: rgb(22, 96, 255);
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
}
button:hover {
  background: rgb(0, 59, 187);
}
@media only screen and (max-width: 700px){
  .main{
    margin: 0;
    padding: 0;
    height: 100vh;
    box-shadow: 0 1px 4px 1px #ffffff;
    border-radius:0;
    background: #ffffff;
  }
}
@media only screen and (min-width: 748px) and (max-width: 1024px) {
  .main{
    width: 100%;
    height: 100pc;
    margin: 0;
    box-shadow: 0 1px 4px 1px #ffffff;
    border-radius:0;
  }
  .avatar{
    width: 18em;
    margin: 3em 0 0 16em;
  }
  h1{
    font-size: 50px;
  }
  p {
    margin: -98px 0 0 106px;
    font-size: 30px;
    width: 100%;
    padding-left: 3%;
  }
  form {
    width: 40em;
    height: 18em;
  }
  input[type="text"] {
    width: 30em;
    border-bottom: 1px solid dashed;
    margin: 0 0 0 1em;
    border-bottom:dotted ;
  }
  .resend{
    font-size: 28px;
  }
  button{
    width: 12em;
    height: 3.6em;
    font-size: 20px;
  }
}
</style>