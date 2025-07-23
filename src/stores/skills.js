import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skill', () => {
  const skills = ref({
    tech: ['Html', 'Css', 'Javascript', 'Python', 'Vue js'],
    tools: ['Vs code', 'Chrome dev Tools', 'Vite (for Vue project setup)'],
    lang: ['Telugu', 'English'],
  })

  return { skills }
})
