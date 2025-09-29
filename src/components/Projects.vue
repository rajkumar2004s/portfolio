<template>
  <div class="bg-[#111112] h-[92vh] font-poppins">
    <h1
      class="p-12 text-5xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575E6] transition-all duration-500 hover:from-pink-500 hover:to-yellow-500"
    >
      Projects
    </h1>

    <div class="cards flex flex-row justify-center items-center gap-8">
      <div
        class="c1 flex flex-col justify-center items-center gap-2 hack opacity-0 translate-y-6 animate-fade-up animation-delay-300 animation-fill-forwards"
      >
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752637629/download_h8y7hk.png'"
          class="w-[15vw] h-[23vh]"
        />
        <h1
          class="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text transition-all duration-500"
        >
          Hack Hazards
        </h1>

        <p class="text-white">
          <span class="font-bold text-xl x">Techstack: </span>
          Vue js, vue router, pinia, Tailwind Css.
        </p>
        <button
          class="relative overflow-hidden px-6 py-3 rounded-md group border border-white bg-gradient-to-r from-blue-black to-[#1c222e] text-white transition-all duration-300 ease-in-out"
        >
          <a
            href="https://hackazards.vercel.app/"
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

      <div
        class="c1 flex flex-col justify-center items-center gap-2 opacity-0 translate-y-6 animate-fade-up animation-delay-500 animation-fill-forwards"
      >
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753697191/4c4d2d25-321f-4867-a2b7-1bbcd9834125.png'"
          class="w-[15vw] h-[23vh] border border-white card"
        />
        <h1
          class="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text transition-all duration-500"
        >
          Zenflix
        </h1>

        <p class="text-white">
          <span class="font-bold text-xl x">Techstack: vue.js, vue router</span>
        </p>
        <button
          class="relative overflow-hidden px-6 py-3 rounded-md group border border-white bg-gradient-to-r from-blue-black to-[#1c222e] text-white transition-all duration-300 ease-in-out"
        >
          <a
            href="https://zenflix-two.vercel.app/"
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

      <div
        class="c1 flex flex-col justify-center items-center gap-2 hack opacity-0 translate-y-6 animate-fade-up animation-delay-700 animation-fill-forwards"
      >
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1759160604/4753716a-8f9a-4600-a9a7-ae3f4c640ea9.png'"
          class="w-[15vw] h-[23vh] card"
        />
        <h1
          class="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text transition-all duration-500"
        >
          Neuro Flow
        </h1>

        <p class="text-white">
          <span class="font-bold text-xl x">Techstack: </span>Nuxt.js, vue router, pinia, Tailwind
          Css.
        </p>
        <button
          class="relative overflow-hidden px-6 py-3 rounded-md group border border-white bg-gradient-to-r from-blue-black to-[#1c222e] text-white transition-all duration-300 ease-in-out"
        >
          <a
            href="https://github.com/rajkumar2004s/Neuro-Flow"
            target="_blank"
            class="relative z-10 font-semibold"
          >
            Git Repo
          </a>
          <span
            class="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
          ></span>
          <span
            class="absolute left-0 top-0 w-full h-full transform scale-0 group-hover:scale-100 bg-white opacity-10 transition-transform duration-500 ease-in-out"
          ></span>
        </button>
      </div>

      <div
        class="c1 flex flex-col justify-center items-center gap-2 opacity-0 translate-y-6 animate-fade-up animation-delay-900 animation-fill-forwards"
      >
        <img
          :src="' https://res.cloudinary.com/dwdekki8t/image/upload/v1759161190/64fe6db5-ec51-4420-869c-56feb84976ab.png'"
          class="card w-[15vw] h-[23vh]"
        />
        <h2
          class="text-2xl text-center font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text transition-all duration-500"
        >
          Skillify
        </h2>

        <p class="text-white">
          <span class="font-bold text-xl x">Techstack: </span>Nuxt js, vue router.
        </p>
        <button
          class="relative overflow-hidden px-6 py-3 rounded-md group border border-white bg-gradient-to-r from-blue-black to-[#1c222e] text-white transition-all duration-300 ease-in-out"
        >
          <a
            href="https://github.com/rajkumar2004s/Learning-Platform"
            target="_blank"
            class="relative z-10 font-semibold"
          >
            Git Repo
          </a>
          <span
            class="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
          ></span>
          <span
            class="absolute left-0 top-0 w-full h-full transform scale-0 group-hover:scale-100 bg-white opacity-10 transition-transform duration-500 ease-in-out"
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}
.animation-delay-500 {
  animation-delay: 0.5s;
}
.animation-delay-700 {
  animation-delay: 0.7s;
}
.animation-delay-900 {
  animation-delay: 0.9s;
}

.animation-fill-forwards {
  animation-fill-mode: forwards;
}
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 1px solid white;
}
button {
  padding: 5px;
  width: 120px;
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
}
.hack {
  position: relative;
  top: 130px;
  left: 20px;
}
img {
  border-radius: 10px;
}
.x {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  margin: 10px;
}
.c1 {
  padding: 10px;
}
</style>
