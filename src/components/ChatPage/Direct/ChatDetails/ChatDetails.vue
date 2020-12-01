<template>
  <div class="details">
    <div class="chat-detls flex flex-wrap">
      <div class="user-card shadow-md bg-white ml-2 mr-2 rounded-md">
        <div class="user-picture rounded-t-md">
          <img
            src="../../../../assets/images/avatar1.jpg"
            class=""
            alt="bg image"
          />
        </div>
        <div class="mt-8 w-full pb-3">
            <div class="mt-3 text-center">
                <h1 class="font-bold">Harerimana Egide</h1>
                <span class="">Ui/Ux & backend developer</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatDetails",
};
</script>

<style scoped>
.details {
  height: 100%;
  flex: 0 0 320px;
}
.chat-detls {
  height: 100%;
  width: 100%;
  display: block;
  float: none;
  flex: none;
}
.user-card {
  margin-top: 10px;
}
.user-picture {
  flex: none;
  display: block;
  height: 15vh;
  width: 100%;
  overflow: visible;
  background: #4a81e2;
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.user-picture img {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  top: 35%;
  border: 3px solid white;
}
</style>