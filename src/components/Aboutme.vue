<template>
  <div class="bg-[#c0bbb5] h-[90vh] flex items-center justify-center px-4 gap-12">
    <div class="max-w-xl font-poppins">
      <h1 class="text-5xl font-extrabold text-[#1c1c1c] mb-10 animate-fade-up about">About Me</h1>

      <p
        class="text-lg text-[#2c2c2c] leading-8 tracking-wide mt-4 font-inter animate-fade-up delay-300 dsp"
      >
        I'm Rajkumar, a dedicated Frontend Developer with a strong foundation in Vue.js, JavaScript,
        HTML, and CSS. I love building interactive web interfaces and continuously improving my
        skills through hands-on projects and learning. I'm curious, creative, and committed to
        crafting user-friendly digital experiences.
      </p>
    </div>

    <img
      src="https://res.cloudinary.com/dwdekki8t/image/upload/v1752607442/profile_photo_s10933_8e66a5.jpg"
      class="h-[60vh] rounded-xl shadow-lg border-[3px] border-black"
    />
  </div>
</template>

<style scoped>
.about {
  padding-bottom: 20px;
}
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
}

.delay-300 {
  animation-delay: 0.3s;
}
.dsp {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
