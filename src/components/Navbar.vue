<template>
  <div class="min-h-screen w-full">
    <nav class="flex justify-around items-center h-[10vh] bg-[#2c2c2c] text-white">
      <h1 class="text-xl font-bold ml-8">Portfolio</h1>

      <div class="flex gap-6 font-inter">
        <router-link to="/" class="hover:underline hover:text-[#00ffcc]">Home</router-link>
        <router-link to="/about" class="hover:underline hover:text-[#00ffcc]">About</router-link>
        <router-link to="/skills" class="hover:underline hover:text-[#00ffcc]">Skills</router-link>
        <router-link to="/projects" class="hover:underline hover:text-[#00ffcc]"
          >Projects</router-link
        >
        <router-link to="/contact" class="hover:underline hover:text-[#00ffcc]"
          >Contact</router-link
        >
      </div>
    </nav>

    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>
