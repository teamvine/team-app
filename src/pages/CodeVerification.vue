<template>
  <div>
    <div class="main grid rounded-md">
      <img class="avatar" src="../assets/images/codeavatar.png" alt="" />
      <h1>Verification</h1>

      <p>
        For better account verification please enter the code we sent to you
        email
      </p>
      <div class="form-container">
        <div class="verification-code">
          <form>
            <label for="code">Enter the code</label>
            <input type="text" id="code" />
            <h4 class="resend">Resend code?</h4>
            <button>Verify</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeVerification",
  data() {
    return {
      errorMssg: "",
      code: "",
      errorColor: "danger",
    };
  },
};
</script>

<style  scoped>
.avatar {
  width: 10em;
  margin: 2em 0 0 10em;
}
input[type="text"] {
  width: 13em;
  border-bottom: 2px solid;
  text-decoration: dashed;
  height: 36px;
  border-bottom: dot-dot-dash;
}
.main {
  width: 30em;
  height: 36em;
  background: #ebeef5;
  margin: 2em 0 0 25em;
}
h1 {
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase;
}
p {
  margin: -54px 0 0 78px;
  width: 22em;
  text-align: justify;
  font-weight: 350;
}
form {
  width: 21em;
  height: 12em;
  background: white;
  margin: -2em 0 0 6em;
  padding: 1em 0 0 3em;
  box-shadow: 0 1px 4px 1px #bdbdbd;
  border-radius: 8px;
}
.resend {
  float: left;
  margin: 29px 0 0 -10px;
  text-decoration: underline;
  cursor: pointer;
}
button {
  float: right;
  margin: 23px 28px 0 0;
  width: 6em;
  height: 2.6em;
  background: blue;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
}
@media only screen and (max-width: 700px) {
  .main {
    margin: 0;
    padding: 0;
    height: 47em;
  }
}
@media only screen and (min-width: 748px) and (max-width: 1024px) {
  .main {
    width: 100%;
    height: 70em;
    margin: 0;
  }
  .avatar {
    width: 18em;
    margin: 3em 0 0 16em;
  }
  h1 {
    font-size: 50px;
  }
  p {
    margin: -98px 0 0 106px;
    font-size: 30px;
  }
  form {
    width: 40em;
    height: 18em;
  }
  input[type="text"] {
    width: 30em;
    border-bottom: 2px solid;
    margin: 0 0 0 1em;
    border-bottom: dot-dot-dash;
  }
  .resend {
    font-size: 28px;
  }
  button {
    width: 12em;
    height: 3.6em;
    font-size: 20px;
  }
}
</style>
