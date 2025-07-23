<template>
  <div class="bg-[#111112] flex items-center h-[90vh]">
    <img
      src="https://res.cloudinary.com/dwdekki8t/image/upload/v1752602367/IMG_20250612_114213_ga01fs.jpg"
      class="h-full object-cover"
      alt="Profile"
    />
    <div class="flex flex-col gap-4 justify-center items-center w-full font-poppins font-bold">
      <h1 class="text-white text-center text-8xl fade-up">Hi, I'm</h1>
      <h1 class="text-white text-8xl text-center fade-up delay">Rajkumar..</h1>
      <p
        class="text-[#00ffcc] text-xl mt-[40px] tracking-wide uppercase font-semibold fade-up delay p1"
      >
        Frontend Developer
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.p1 {
  padding: 20px;
}
.fade-up {
  animation: fadeUp 1s ease-out forwards;
}

.delay {
  animation-delay: 0.3s;
}
</style>
