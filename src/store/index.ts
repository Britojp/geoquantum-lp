import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoading: false,
    currentTheme: 'light',
    contactForm: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: '',
    },
    searchQuery: '',
    selectedProjectCategory: 'all',
  }),

  getters: {
    isDarkTheme: (state) => state.currentTheme === 'dark',
  },

  actions: {
    setLoading(loading: boolean) {
      this.isLoading = loading
    },

    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
    },

    updateContactForm(field: string, value: string) {
      this.contactForm[field as keyof typeof this.contactForm] = value
    },

    resetContactForm() {
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    setProjectCategory(category: string) {
      this.selectedProjectCategory = category
    },
  },
})
