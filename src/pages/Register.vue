<template>
  <div id="register-view">
    <div class="register-content">
      <div class="cont">
        <div class="left">
          <div>
            <h2 class="text-2xl font-bold app-title">RCONNECT</h2>
            <p class="mt-8 desc bring-more">
              Bring your Teams,Companies,Schools and Other groups to join
              RCONNECT where sharing skills and ideas and your staffs made
              easier and secure.
            </p>
          </div>
          <img
            class="img mt-4"
            src="../assets/images/Group Chat-amico.svg"
            alt=""
          />
        </div>
        <div class="register-container right focus mb-4 rounded-md">
          <form @submit.prevent="onSignIn" class="pt-4 pb-3">
            <h1 class="f-md mb-3 mt-3 head">SIGN UP TO RCONNECT</h1>
            <span class="line"></span>
            <div class="in-field one">
              <div class="icn"><i class="ri-account-pin-circle-line"></i></div>
              <div class="inpt">
                <h5>Full Name</h5>
                <input
                  type="text"
                  class="input"
                  @focus="onFocusFunc"
                  @blur="onBlurFunc"
                />
              </div>
              <div class="icn check-icon"><i class="ri-check-line"></i></div>
            </div>

            <div class="in-field">
              <div class="icn"><i class="ri-price-tag-line"></i></div>
              <div class="inpt">
                <h5>Display Name</h5>
                <input
                  type="text"
                  class="input"
                  @focus="onFocusFunc"
                  @blur="onBlurFunc"
                />
              </div>
              <div class="icn check-icon"><i class="ri-check-line"></i></div>
            </div>
            <div class="in-field">
              <div class="icn"><i class="ri-at-line"></i></div>
              <div class="inpt">
                <h5>Email</h5>
                <input
                  type="email"
                  class="input"
                  @focus="onFocusFunc"
                  @blur="onBlurFunc"
                />
              </div>
              <div class="icn check-icon"><i class="ri-check-line"></i></div>
            </div>
            <div class="in-field">
              <div class="icn"><i class="ri-lock-line"></i></div>
              <div class="inpt">
                <h5>New Password</h5>
                <input
                  type="password"
                  class="input"
                  @focus="onFocusFunc"
                  @blur="onBlurFunc"
                />
              </div>
              <div class="icn check-icon"><i class="ri-check-line"></i></div>
            </div>
            <div class="in-field">
              <div class="icn">
                <i class="ri-lock-line"></i>
              </div>
              <div class="inpt">
                <h5>Repeat Password</h5>
                <input
                  type="password"
                  class="input"
                  @focus="onFocusFunc"
                  @blur="onBlurFunc"
                />
              </div>
              <div class="icn check-icon"><i class="ri-check-line"></i></div>
            </div>
            <div class="agree-terms">
              <input type="checkbox" id="check-b" /> I agree to the terms and
              conditions of privacy.
            </div>
            <p v-if="errorMsg != ''" :class="[errorColor, 'mt-2']">
              {{ errorMsg }}
            </p>
            <button
              class="btn-create text-white font-bold py-2 px-4 rounded-full items-center mt-4 mb-2"
            >
              <span>New Account</span>
            </button>
            <p class="mt-3 mb-2 no-account">
              Do you have account?
              <router-link to="/login" class="link">Sign In.</router-link>
            </p>
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
      errorMsg: "",
    };
  },
  methods: {
    onSignIn() {
      return;
    },
    onFocusFunc(e) {
      let parent = e.target.parentNode.parentNode;
      parent.classList.add("focus");
    },
    onBlurFunc($e) {
      let parent = $e.target.parentNode.parentNode;
      if ($e.target.value == "") {
        parent.classList.remove("focus");
      }
    },
  },
};
</script>

<style scoped>
.app-title {
  font-family: "PoppinsBold";
  font-size: 30px;
  color: #2A68D3;
}
.bring-more {
  font-family: "PoppinsThin";
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
.cont .right {
  width: 45%;
}
.img {
  width: 80%;
  margin: auto;
  margin-top: 0;
}
.desc {
  font-weight: bold;
}
.register-content {
  width: 100%;
  height: auto;
  /* min-height: 87%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
}
.register-container {
  display: flex;
  align-items: center;
  text-align: center;
  width: 1em;
  margin: 3.8em 0 0 0;
  margin-bottom: 3%;
  border: none;
  box-shadow: 0 0 4px 1px rgb(219, 219, 219);
  height: auto;
}
form {
  width: 70%;
  margin: 0% 15%;
}
form h1 {
  color:#2A68D3;
  font-weight: 100px;
  font-size: 130% !important;
  margin-top: 4%;
  margin-bottom: 0;
}
form .line {
  display: block;
  width: 70%;
  background-color:#2A68D3;
  height: 2px;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 12%;
}

.in-field {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 1px solid #d9d9d9;
}
.in-field::after,
.in-field::before {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 100%;
  display: none;
  height: 2px;
  background-color:#2A68D3;
  transition: 1s;
  left: 0;
  right: 0;
}
.in-field::after {
  right: 50%;
}
.in-field::before {
  right: 50%;
}
.in-field.one {
  margin-bottom: 4px;
}

.in-field .icn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.in-field .icn i {
  color: #d9d9d9 !important;
  transition: 0.3s;
}

.in-field > div {
  position: relative;
  height: 45px;
}
.in-field.focus .icn i {
  color: #2A68D3 !important;
}

.in-field.focus div h5 {
  top: -5px;
  font-size: 15px;
}
.in-field.focus::after,
.in-field.focus::before {
  /* width: 100%; */
  display: initial;
}
.in-field > div h5 {
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
  color: rgb(70, 70, 70);
}

.check-icon {
  margin: -50px 0 0 21em;
}
.check-icon i {
  margin: 18px 0 0 0;
}
.btn-create {
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  outline: none !important;
  background-color:  #2a68d3;
}
.btn-create:hover {
  background-color:  #1751b4;
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
  color: #2A68D3;
}
.or-line,
.or {
  color: white;
  background-color: #2A68D3;
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
  color: #2A68D3;
}
@media only screen and (max-width: 700px) {
  .cont {
    width: 100%;
  }
  .cont .left {
    display: none;
  }
  .cont .right {
    margin-top: 10%;
    width: 100%;
  }
  .form {
    align-items: center;
  }
  form {
    width: 80%;
    margin: 0% 10%;
  }
  .register-container {
    box-shadow: none;
  }
}
</style>
