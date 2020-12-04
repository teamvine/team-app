<template>
  <div class="sidebar-view">
      <div class="my-auto">       
        <div class="text-center icon-div icon-dash">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
        </div>
        <div class="text-center icon-div icon-msg active">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM8 10v2h8v-2H8z"/></svg>
        </div>
        <div class="text-center icon-div icon-team">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z"/></svg>
        </div>
        <div class="text-center icon-div icon-files">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M21 15h-7v7H3.998C3.447 22 3 21.545 3 21.008V2.992C3 2.444 3.445 2 3.993 2h16.014A1 1 0 0 1 21 3.007V15zm0 2l-5 4.997V17h5z"/></svg>
        </div>
        <div class="text-center icon-div icon-apps">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zm0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13zm10.5-10.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13z"/></svg>
        </div>
        <div class="text-center icon-div icon-setting">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z"/><path d="M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SidebarNav"
}
</script>

<style scoped>
    .my-auto{
        position: absolute;
        margin-top: auto 0;
        width: 100%;
    }
    .sidebar-view {
        height: 100%;
        flex: 0 50px;
        color:black;
        position: relative;        
        justify-content: center;
        align-items: center;
        display: flex;
        border-right:1px solid rgb(219, 219, 219);
        justify-content: center;
        align-content: center;
        text-align: center;
    }
    .icon-div{
        width: 100%;
        padding: 18% 0;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
    .icon-div.active {
      border: 1px solid rgb(219, 219, 219);
      border-left: 5px solid  #2f74eb;
      border-right: 0px;
    }
    .icon-div svg path:nth-child(1){
        fill: none;
    }
    .icon-div svg path:nth-child(2){
        fill: rgba(52,72,94,1);
    }
    .icon-div.active svg path:nth-child(2){
        fill:  #2f74eb;
    }
    .icon-div:hover {
      border: 1px solid rgb(219, 219, 219);
      border-left: 5px solid  #2f74eb;
      cursor: pointer;
      border-right: 0px;
      margin-bottom: 28px;
    }
    .icon-div:hover svg path:nth-child(1){
        fill: none;
    }
    .icon-div:hover svg path:nth-child(2){
        fill: rgba(52,72,94,1);
    }
    .icon-div:hover svg path:nth-child(2){
        fill:  #2f74eb;
    }
</style>