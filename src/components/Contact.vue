<template>
  <div class="bg-[#111112] h-[90vh]">
    <div class="flex gap-4">
      <img
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752612901/Screenshot_2025-07-16_022421_wqxd3t.png'"
        class="h-[90vh] img fade-up delay-100"
      />

      <div class="flex flex-col justify-center">
        <h1 class="text-white text-6xl font-poppins font-bold h1 fade-up delay-200">Reach Out</h1>

        <p
          class="text-md text-white leading-8 tracking-wide mt-4 font-inter fade-up delay-300 d1 w-160"
        >
          Feel free to reach out to me for any collaboration, internship opportunities, or project
          discussions. I’m always open to meaningful conversations and new connections!
        </p>

        <h1 class="text-white text-xl font-poppins font-bold fade-up delay-400">Rajkumar</h1>

        <p class="text-white text-sm email fade-up delay-500">
          <i class="fa-solid fa-envelope mail"></i>bhootlarajkumar@gmailcom
        </p>

        <p class="text-white text-sm num fade-up delay-600">
          <i class="fa-solid fa-phone i"></i>9347286282
        </p>

        <div class="fade-up delay-700">
          <h1 class="text-white">Connect with me</h1>
          <div class="text-white icons flex gap-4">
            <a href="https://www.linkedin.com/in/raju03" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin i"></i>
            </a>

            <a href="https://www.instagram.com/_raju.uu/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram i"></i>
            </a>

            <a href="https://github.com/rajkumar2004s" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github i"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.num {
  margin-left: 7px;
}
.mail {
  margin-right: 10px;
}
.i {
  margin: 10px;
}
.icons {
  padding: 10px;
  gap: 10px;
  font-size: 20px;
}
.email {
  margin-left: 6px;
  padding: 10px;
}
h1 {
  margin-left: 15px;
}
.d1 {
  margin: 20px;
}
.img {
  padding: 20px;
  margin-left: 40px;
}

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

.fade-up {
  opacity: 0;
  animation: fadeUp 1s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}
.delay-700 {
  animation-delay: 0.7s;
}
</style>
