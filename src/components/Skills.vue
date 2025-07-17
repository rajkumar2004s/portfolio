<template>
  <div>
    <h1
      class="text-5xl text-center font-poppins leading-[1.5] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575E6] transition-all duration-500 hover:from-pink-500 hover:to-yellow-500"
    >
      Skills
    </h1>
    <div class="flex">
      <img
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1752610587/f13289bf0c893853fc6311b918351221_mww0qj.jpg'"
        class="h-[68vh] w-[26vw]"
      />
      <div class="grid grid-cols-2 grid gap-2 card">
        <div>
          <h1 class="font-bold text-2xl text-[#0d152e] font-sans hover:text-[#5925b3]">
            Technical Skills:
          </h1>
          <u1 class="text-[18px] font-sans gap-4 font-semibold text-[#17191f] u2">
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript (Basics to Intermediate)</li>
            <li>Python</li>
            <li>Vue.js 3</li>
          </u1>
        </div>
        <div class="c1">
          <h1 class="font-bold text-2xl text-[#0d152e] font-sans hover:text-[#5925b3]">
            Tools & Frameworks:
          </h1>
          <u1 class="text-[18px] font-sans gap-4 text-[#17191f] u2 font-semibold">
            <li>Vs code</li>
            <li>Chrome Dev Tools</li>
            <li>Vite (for Vue project setup)</li>
          </u1>
        </div>

        <div>
          <h1 class="font-bold text-2xl text-[#0d152e] font-sans hover:text-[#5925b3]">
            Languages:
          </h1>
          <ul class="text-[18px] font-sans gap-4 text-[#17191f] font-semibold u1">
            <li>Telugu</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.u2 {
  padding: 2px;
}
.card {
  margin-left: 70px;
}
.u1 {
  padding-top: 15px;
}
.c1 {
  margin-left: 120px;
}
.skills {
  padding: 10px;
  margin: 40px;
  margin-left: 50px;
}
li {
  list-style: none;
}
</style>
