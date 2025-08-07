<script setup>
import { useSkillsStore } from '@/stores/skills'

const store = useSkillsStore()
</script>

<template>
  <div class="bg-[#111112] h-[90vh] text-white">
    <h1
      class="text-5xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575E6] transition-all duration-500 hover:from-pink-500 hover:to-yellow-500"
    >
      Skills
    </h1>

    <div class="flex flex-row justify-center items-center gap-10">
      <div class="flex flex-row justify-center items-start gap-24 mt-10">
        <ul
          class="opacity-0 translate-y-4 animate-fade-up animation-delay-300 animation-fill-forwards"
        >
          <h2
            class="text-3xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-500 hover:from-[#00F260] hover:to-[#0575E6]"
          >
            Technical Skills:
          </h2>
          <li v-for="(skill, index) in store.skills.tech" :key="index">{{ skill }}</li>
        </ul>

        <ul
          class="opacity-0 translate-y-4 animate-fade-up animation-delay-500 animation-fill-forwards"
        >
          <h2
            class="text-3xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-500 hover:from-[#00F260] hover:to-[#0575E6]"
          >
            Developer Tools:
          </h2>
          <li v-for="(tool, index) in store.skills.tools" :key="index">{{ tool }}</li>
        </ul>

        <ul
          class="opacity-0 translate-y-4 animate-fade-up animation-delay-700 animation-fill-forwards"
        >
          <h2
            class="text-3xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-500 hover:from-[#00F260] hover:to-[#0575E6]"
          >
            Languages:
          </h2>
          <li v-for="(language, index) in store.skills.lang" :key="index">{{ language }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
h1 {
  padding: 50px;
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

.animation-fill-forwards {
  animation-fill-mode: forwards;
}

li {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  font-size: 18px;
}
</style>
