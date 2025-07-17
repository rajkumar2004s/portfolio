<template>
  <div class="bg-[#111112] h-[90vh]">
    <div class="flex gap-4">
      <img
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752612901/Screenshot_2025-07-16_022421_wqxd3t.png'"
        class="h-[90vh] img"
      />
      <div class="flex flex-col justify-center">
        <h1 class="text-white text-6xl fade-up font-poppins font-bold h1">Reach Out</h1>
        <p
          class="text-md text-white leading-8 tracking-wide mt-4 font-inter fade-up delay animate-fade-up delay-300 d1 w-160"
        >
          Feel free to reach out to me for any collaboration, internship opportunities, or project
          discussions. I’m always open to meaningful conversations and new connections!
        </p>
        <h1 class="text-white text-xl fade-up delay font-poppins font-bold">Rajkumar</h1>
        <p class="text-white text-sm email">
          <i class="fa-solid fa-envelope mail"></i>bhootlarajkumar@gmailcom
        </p>
        <p class="text-white text-sm num"><i class="fa-solid fa-phone i"></i>9347286282</p>
        <div>
          <h1 class="text-white">Connect with me</h1>
          <div class="text-white icons">
            <i class="fa-brands fa-linkedin i"></i>
            <i class="fa-brands fa-instagram i"></i>
            <i class="fa-brands fa-twitter i"></i>
            <i class="fa-brands fa-github i"></i>
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
  /* padding: 10px; */
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
  animation: fadeUp 1s ease-out forwards;
}

.delay {
  animation-delay: 0.3s;
}
</style>
