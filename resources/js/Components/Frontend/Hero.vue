<template>
  
  <section id="home" class="lg:h-[85vh]
   flex items-center
    bg-light-primary
    dark:bg-dark-primary
      py-48 lg:py-0
      overflow-hidden">
      <div class="container mx-auto h-full"  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="200">
        <div class="flex flex-col md:flex-row  items-center h-full pt-8">
            <div class="flex-1 flex flex-col items-center lg:items-start">
                <p class="text-lg text-accent text-md mb-[22px]">
                    Hi, Iam Osama 👋
                </p>
                    <h1 class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        I Build & Design <br /> Web Interfaces
                    </h1>
                    <p class="pt-4 pb-8 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius debitis ut sequi dolorum,
                    </p>
                    <button class="btn btn-md
                     bg-accent
                     hover:bg-light-secondary
                     hover:text-light-tail-500
                     dark:hover:bg-dark-secondary
                     dark:hover:text-dark-navy-100
                     md:btn-lg transition-all">
                        Work With Me
                    </button>
                    <div class="pt-12">
                        <h5 class="text-lg flex items-center mb-2 justify-center lg:justify-start text-black dark:text-white" >
                            Follow Me on
                        </h5>
                        <div class="flex items-center mb-6">
                            <a class="w-6 h-6 rounded-full flex items-center justify-center border border-x-light-tail-100  dark:border-dark-secondary  text-black dark:text-white  hover:border-dark-secondary dark:hover:border-light-secondary mr-3 sm:mr-4 " href="www.facebook.com">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="50" viewBox="0,0,256,256">
<g fill="#1c2dc8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
</svg>
                        </a>
                            <a class="w-6 h-6 rounded-full flex items-center justify-center border border-x-light-tail-100  dark:border-dark-secondary  text-black  hover:border-dark-secondary  dark:hover:border-light-secondary mr-3 sm:mr-4" href="www.twitter.com">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="50" viewBox="0,0,256,256">
<g fill="#1c2dc8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636z"></path></g></g>
</svg>
                        </a>
                            <a class="w-7 h-7 rounded-full flex items-center justify-center border border-x-light-tail-100  dark:border-dark-secondary text-black dark:text-white  hover:border-dark-secondary dark:hover:border-light-secondary mr-3 sm:mr-4" href="www.linkdn.com">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="50" viewBox="0,0,256,256">
<g fill="#1c2dc8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path></g></g>
</svg>
                        </a>
                        </div>
                    </div>
               
            </div>
            <div class="lg:flex flex-1 justify-end items-center mt-8 md:mt-0  h-full">
                <img class= "rounded-lg" :src="imagePath" alt="">
            </div>
        </div>
      </div>

  </section>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    const  imagePath = 'img/hero.jpg'
  </script>