<template>
  <div class="bg-[#111112] h-[90vh] font-poppins">
    <h1
      class="text-5xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575E6] transition-all duration-500 hover:from-pink-500 hover:to-yellow-500"
    >
      Projects
    </h1>

    <div class="cards flex flex-row justify-center items-center gap-8">
      <div class="flex flex-col justify-center items-center gap-2 hack">
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752637629/download_h8y7hk.png'"
          class="w-[15vw] h-[23vh]"
        />
        <h1 class="text-white text-xl font-poppins font-bold h1">Hack Hazards</h1>
        <p class="text-white text-center dsp">
          A responsive website clone of Hack Hazards built using HTML, Tailwind CSS, and JavaScript,
          focused on clean UI and modern design.
        </p>
        <p class="text-white">
          <span class="font-bold text-xl text-white tech">Techstack: </span>Html, Css, javascript,
          Tailwind Css.
        </p>
        <button
          class="relative overflow-hidden px-6 py-3 rounded-md group border border-white bg-gradient-to-r from-blue-black to-[#1c222e] text-white transition-all duration-300 ease-in-out"
        >
          <a
            href="https://hackhazards.niat.tech"
            target="_blank"
            class="relative z-10 font-semibold"
          >
            Check here
          </a>
          <span
            class="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
          ></span>
          <span
            class="absolute left-0 top-0 w-full h-full transform scale-0 group-hover:scale-100 bg-white opacity-10 transition-transform duration-500 ease-in-out"
          ></span>
        </button>
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752741972/Screenshot_2025-07-17_141520_tuoywi.png'"
          class="w-[15vw] h-[23vh]"
        />
        <h1 class="text-white text-xl font-poppins font-bold h1">App Store</h1>
        <p class="text-white text-center dsp">
          A mini app store built with React featuring multiple small apps and a search bar for easy
          navigation.
        </p>
        <p class="text-white">
          <span class="font-bold text-xl text-white tech">Techstack: </span>React js
        </p>
      </div>
      <div class="flex flex-col justify-center items-center gap-2 hack">
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752744694/59861e55-5c8e-4385-abba-b1261ebda472_kgkapr.png'"
          class="w-[15vw] h-[23vh]"
        />
        <h1 class="text-white text-xl font-poppins font-bold h1">Movie Matrix</h1>
        <p class="text-white text-center dsp">
          Movie discovery site with recommendations, community, and rich film info..
        </p>
        <p class="text-white">
          <span class="font-bold text-xl text-white tech">Techstack: </span>Html, Css, javascript,
          Tailwind Css.
        </p>
        <button
          class="relative overflow-hidden px-6 py-3 rounded-md group border border-white bg-gradient-to-r from-blue-black to-[#1c222e] text-white transition-all duration-300 ease-in-out"
        >
          <a
            href="https://hackhazards.niat.tech"
            target="_blank"
            class="relative z-10 font-semibold"
          >
            Check here
          </a>
          <span
            class="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
          ></span>
          <span
            class="absolute left-0 top-0 w-full h-full transform scale-0 group-hover:scale-100 bg-white opacity-10 transition-transform duration-500 ease-in-out"
          ></span>
        </button>
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752741735/Task-Management-Advantages-scaled_ibvig6.jpg'"
          class="w-[15vw] h-[23vh]"
        />
        <h1 class="text-white text-xl font-poppins font-bold h1">Task Management</h1>
        <p class="text-white text-center dsp">
          Task management application built with Vue.js featuring seamless task creation, tracking,
          and intuitive user experience.
        </p>
        <p class="text-white">
          <span class="font-bold text-xl text-white tech">Techstack: </span>Vue js, vue router.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
button {
  padding: 5px;
  width: 120px;
}
.h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.project {
  padding-top: 15px;
}
.cards {
  padding-top: 35px;
}
.dsp {
  width: 20vw;
  font-size: 14px;
  font-family:;
}
.hack {
  position: relative;
  top: 130px;
  left: 20px;
}
img {
  border-radius: 10px;
}
.tech {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
}
</style>
