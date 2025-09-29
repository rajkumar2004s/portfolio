<template>
  <div class="min-h-screen w-full">
    <nav class="flex justify-around items-center h-[10vh] bg-[#2c2c2c] text-white">
      <h1 class="text-xl font-bold ml-8 animated-heading">Portfolio</h1>

      <div class="flex gap-6 font-inter">
        <router-link to="/" exact-active-class="active-link">Home</router-link>
        <router-link to="/about" exact-active-class="active-link">About</router-link>
        <router-link to="/skills" exact-active-class="active-link">Skills</router-link>
        <router-link to="/projects" exact-active-class="active-link">Projects</router-link>
        <router-link to="/contact" exact-active-class="active-link">Contact</router-link>
      </div>
    </nav>

    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.animated-heading {
  transition: all 0.4s ease-in-out;
  display: inline-block;
  position: relative;
  color: #fff;
}

.animated-heading:hover {
  color: #38bdf8;
  transform: scale(1.1);
  letter-spacing: 2px;
}

.animated-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: #38bdf8;
  transition: width 0.4s ease;
}

.animated-heading:hover::after {
  width: 100%;
}

/* Active route underline */
.active-link {
  position: relative;
  color: #00ffcc;
  font-weight: 600;
}

.active-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background: #00ffcc;
}
</style>
