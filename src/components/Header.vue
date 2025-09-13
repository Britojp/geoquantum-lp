<template>
  <header class="custom-header" :class="{ scrolled: isScrolled }">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo-section">
        <router-link to="/" class="logo-link">
          <img src="@/assets/main-logo-removebg-preview.png" alt="GeoQuantum" class="logo-image" />
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="nav-link"
          :class="{ active: $route.path === item.path }"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </nav>

      <!-- Contact Button -->
      <div class="contact-section d-none d-md-flex">
        <router-link to="/contato" class="contact-button">
          <i class="mdi mdi-phone"></i>
          <span>Contato</span>
        </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-nav-header">
        <div class="mobile-logo">
          <span class="logo-text">GeoQuantum</span>
        </div>
      </div>

      <nav class="mobile-nav-menu">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="mobile-nav-link"
          :class="{ active: $route.path === item.path }"
          @click="closeMobileMenu"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </nav>

      <div class="mobile-contact">
        <router-link to="/contato" class="mobile-contact-button" @click="closeMobileMenu">
          <i class="mdi mdi-phone"></i>
          <span>Fale Conosco</span>
        </router-link>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      class="mobile-overlay"
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/', icon: 'mdi mdi-home' },
  { name: 'Sobre', path: '/sobre', icon: 'mdi mdi-information' },
  { name: 'Serviços', path: '/servicos', icon: 'mdi mdi-cog' },
  { name: 'Projetos', path: '/projetos', icon: 'mdi mdi-folder' },
  { name: 'Documentos', path: '/documentos', icon: 'mdi mdi-file-document' },
  { name: 'Blog', path: '/blog', icon: 'mdi mdi-post' },
  { name: 'Equipe', path: '/equipe', icon: 'mdi mdi-account-group' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  // Verificar scroll inicial
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Reset e Base */
.custom-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  backdrop-filter: none;
  border-bottom: none;
  transition: all 0.3s ease;
  height: 80px;
}

.custom-header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.custom-header.scrolled .nav-link {
  color: #2e3a47;
  text-shadow: none;
}

.custom-header.scrolled .nav-link:hover {
  background: rgba(11, 95, 165, 0.05);
}

.custom-header.scrolled .nav-link.active {
  background: rgba(11, 95, 165, 0.1);
  color: #0b5fa5;
}

.custom-header.scrolled .logo-text {
  color: #0b5fa5;
  text-shadow: none;
}

.custom-header.scrolled .contact-button {
  background: #0b5fa5;
  border: none;
  box-shadow: 0 4px 15px rgba(11, 95, 165, 0.2);
}

/* Container Principal */
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

/* Logo */
.logo-section {
  flex-shrink: 0;
  position: relative;
  z-index: 1001;
  margin-left: -32px;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-link:hover {
  opacity: 0.9;
}

.logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  transition: all 0.3s ease;
}

.logo-link:hover .logo-image {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

/* Navegação Desktop */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  min-width: 70px;
  text-align: center;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(11, 95, 165, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.15);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: #0b5fa5;
  border-radius: 2px;
}

/* Botão de Contato */
.contact-section {
  flex-shrink: 0;
  z-index: 1001;
  margin-right: -32px;
}

.contact-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  white-space: nowrap;
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.contact-button:hover::before {
  left: 100%;
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.3);
}

.custom-header.scrolled .contact-button:hover {
  box-shadow: 0 8px 25px rgba(11, 95, 165, 0.3);
  background: #1fa7a1;
}

.custom-header.scrolled .mobile-menu-toggle span {
  background: #0b5fa5;
  box-shadow: none;
}

.contact-button i {
  font-size: 18px;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1002;
}

.mobile-menu-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}

.custom-header.scrolled .mobile-menu-toggle:hover {
  background: rgba(11, 95, 165, 0.1);
}

.mobile-menu-toggle span {
  width: 28px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  left: -100%;
  width: 320px;
  height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 1001;
  overflow-y: auto;
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 100vw;
  }
}

@media (max-width: 360px) {
  .mobile-nav {
    width: 100vw;
  }

  .mobile-nav-header {
    padding: 16px;
  }

  .mobile-nav-menu {
    padding: 16px 0;
  }

  .mobile-nav-link {
    padding: 12px 16px;
    font-size: 0.9rem;
  }

  .mobile-contact {
    padding: 16px;
  }
}

.mobile-nav.open {
  left: 0;
}

.mobile-nav-header {
  padding: 24px;
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
  color: white;
}

.mobile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.mobile-logo .logo-text {
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.mobile-nav-menu {
  padding: 24px 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  text-decoration: none;
  color: #2e3a47;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover {
  background: rgba(11, 95, 165, 0.05);
  border-left-color: #0b5fa5;
  transform: translateX(8px);
}

.mobile-nav-link.active {
  background: rgba(11, 95, 165, 0.1);
  color: #0b5fa5;
  border-left-color: #0b5fa5;
}

.mobile-nav-link i {
  font-size: 20px;
  width: 24px;
  text-align: center;
}

.mobile-contact {
  padding: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  background: #0b5fa5;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.mobile-contact-button:hover {
  background: #1fa7a1;
  transform: translateY(-2px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Responsividade */
@media (max-width: 1200px) {
  .header-container {
    padding: 0 24px;
  }

  .desktop-nav {
    gap: 12px;
  }

  .nav-link {
    padding: 12px 14px;
    font-size: 0.9rem;
  }
}

@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .header-container {
    padding: 0 20px;
  }

  /* Em telas menores, voltar ao layout normal */
  .logo-section,
  .contact-section {
    position: relative;
    z-index: auto;
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 768px) {
  .header-container {
    height: 70px;
    padding: 0 20px;
  }

  .logo-image {
    height: 45px;
  }

  .logo-text {
    font-size: 1.4rem;
  }

  .contact-button {
    padding: 12px 24px;
    font-size: 0.875rem;
  }
}

@media (max-width: 576px) {
  .header-container {
    height: 65px;
    padding: 0 16px;
  }

  .logo-image {
    height: 40px;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .contact-button {
    padding: 10px 20px;
    font-size: 0.8rem;
  }

  /* Resetar margens em telas pequenas */
  .logo-section {
    margin-left: 0;
  }

  .contact-section {
    margin-right: 0;
  }
}

@media (max-width: 480px) {
  .header-container {
    height: 60px;
    padding: 0 16px;
  }

  .logo-image {
    height: 35px;
  }

  .logo-text {
    display: none;
  }

  .contact-button span {
    display: none;
  }

  .contact-button {
    padding: 12px;
    border-radius: 50%;
  }

  .mobile-nav {
    width: 100vw;
  }

  /* Resetar margens em telas muito pequenas */
  .logo-section {
    margin-left: 0;
  }

  .contact-section {
    margin-right: 0;
  }
}

@media (max-width: 360px) {
  .header-container {
    height: 55px;
    padding: 0 12px;
  }

  .logo-image {
    height: 30px;
  }

  .contact-button {
    padding: 10px;
  }

  .mobile-menu-toggle {
    padding: 8px;
  }

  .mobile-menu-toggle span {
    width: 24px;
    height: 2px;
  }
}

/* Orientação landscape em dispositivos móveis */
@media (max-height: 500px) and (orientation: landscape) {
  .header-container {
    height: 60px;
  }

  .logo-text {
    font-size: 1.2rem;
  }
}

/* Animações */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logoGlow {
  0%,
  100% {
    filter: drop-shadow(0 2px 8px rgba(11, 95, 165, 0.3));
  }
  50% {
    filter: drop-shadow(0 4px 12px rgba(11, 95, 165, 0.5));
  }
}

.custom-header {
  animation: fadeInDown 0.6s ease-out;
}

/* Scrollbar personalizada para mobile nav */
.mobile-nav::-webkit-scrollbar {
  width: 6px;
}

.mobile-nav::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
}

.mobile-nav::-webkit-scrollbar-thumb {
  background: rgba(11, 95, 165, 0.3);
  border-radius: 3px;
}

.mobile-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(11, 95, 165, 0.5);
}
</style>
