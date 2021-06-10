<template>
  <footer class="bottom-0 footer bottom">
    <div class="flex flex-wrap justify-center footer-bg p-6 w-full">
      <div class="flex flex-wrap mb-4 w-full content-center py-6">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <h3 class="text-lg py-4 font-bold">GET OUR APPS</h3>
          <ul>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i><span>Get mobile app</span></a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Download desktop app</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Our apps features</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Get updates</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
          <h3 class="text-lg py-4 font-bold">OUR COMPANY</h3>
          <ul>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Visit our website</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Get our Location</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Other Products</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <h3 class="text-lg py-4 font-bold">ABOUT US</h3>
          <ul>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>About r-connect</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Contact Us</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Our history</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
          <h3 class="text-lg py-4 font-bold">COMMUNITY</h3>
          <ul>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Community Portal</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Get community Help</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Community live events</a
              >
            </li>
            <li>
              <a href="#" class="text-md"
                ><i class="ri-arrow-right-s-line"></i>Join Community</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-footer-sm p-2 py-4 pl-6 w-full text-center">
      <span class="text-white text-sm">© Copyright 2020 - RCONNECT.Inc</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
    .footer {
      position: -webkit-sticky;
      position: sticky;
      top: 100%
    }
    .footer-bg {
      /* background-color: #2B2C7C; */
      background-color: #102C54;
      /* background-color: #3B5998; */
    }
    .bg-footer-sm {
      background-color: #0d223f;
    }
    .font-bold {
        font-weight: bolder;
    }
    .w-1\/4 {
    padding: 10px;
    }
    h3,p,a {
    color: rgb(243, 243, 243);
    }
    h3 {
        font-weight: bolder !important;
    }
    li {
    padding-top: 5px;
    }
    a:hover {
    color: rgb(0, 102, 235);
    }
    a {
        color: rgba(255, 255, 255, 0.8);
        /* font-family: "Lato" !important */
    }
    @media (max-width: 642px) {
        .w-full,
        .bottom {
            text-align: center;
        }
        .pl-8 {
            padding-left: 0px;
        }
    }
</style>