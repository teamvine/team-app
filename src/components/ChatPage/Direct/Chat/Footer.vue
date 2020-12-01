<template>
  <div class="chat-foot rounded-xl shadow-md lg:px-4 px-2 bg-white flex flex-wrap items-center lg:py-0">
      <form @submit.prevent="alert('hi')">
          <div class="icon">
              <img src="https://img.icons8.com/emoji/48/000000/slightly-smiling-face.png"/>
          </div>
          <div class="field">
              <input type="text" placeholder="Write to John...">
          </div>
          <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"/>
              </svg>
          </div>
          <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"/>
              </svg>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.chat-foot {
    height: 50px;
}
form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.5% 0;
}
form .icon {
    height: 100%;
    width: 100%;
    flex: 0 0 40px;
    justify-content: center;
    text-align: center;
    align-content: center;
}
form .icon svg {
    margin: auto;
    margin-top: 10%;
    fill: #2f74eb;
    fill: linear-gradient(180deg, #2f74eb 0%, #83eaf1 74%);
}
form .icon img {
    cursor: pointer;
}
form .icon svg:hover {
    fill: #164ba7;
    fill: linear-gradient(180deg, #164ba7 0%, #83eaf1 74%);
    cursor: pointer;
}
form .field {
    height: 100%;
    width: 100%;
}
form .field input {
    height: 100%;
    width: 100%;
    padding: 0 2%;
}

</style>