<template>
  <header class="modern-header" :class="{ 'scrolled': isScrolled, 'menu-open': isMobileMenuOpen }">
    <!-- Indicador de progresso de rolagem -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    
    <div class="header-wrapper">
      <div class="header-container">
        <router-link to="/" class="brand" @click="closeMobileMenu">
          <div class="brand-logo">
            <img src="@/assets/main-logo-removebg-preview.png" alt="GeoQuantum Logo" />
          </div>
          <div class="brand-identity">
            <span class="brand-name">GeoQuantum</span>
            <span class="brand-slogan">Geoprocessamento</span>
          </div>
        </router-link>

        <nav class="main-nav" aria-label="Navegação principal">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: $route.path === item.path }"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>

        <div class="header-actions">

          <router-link to="/contato" class="action-button primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span class="action-text">Fale Conosco</span>
          </router-link>

          <button 
            class="mobile-toggle" 
            :class="{ active: isMobileMenuOpen }"
            @click="toggleMobileMenu"
            aria-label="Menu de navegação"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="toggle-bar"></span>
            <span class="toggle-bar"></span>
            <span class="toggle-bar"></span>
          </button>
        </div>
      </div>
    </div>

    <transition name="mobile-menu-fade">
      <div v-if="isMobileMenuOpen" class="mobile-backdrop" @click="closeMobileMenu"></div>
    </transition>

    <transition name="mobile-menu-slide">
      <aside v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-header">
          <router-link to="/" class="mobile-brand" @click="closeMobileMenu">
            <div class="mobile-brand-logo">
              <img src="@/assets/main-logo-removebg-preview.png" alt="GeoQuantum" />
            </div>
            <span>GeoQuantum</span>
          </router-link>

          <button class="close-button" @click="closeMobileMenu" aria-label="Fechar menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav class="mobile-nav" aria-label="Navegação mobile">
          <router-link
            v-for="(item, index) in navigationItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            :class="{ active: $route.path === item.path }"
            :style="{ '--item-index': index }"
            @click="closeMobileMenu"
          >
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </router-link>
        </nav>

        <div class="mobile-menu-footer">
          <router-link to="/contato" class="mobile-cta" @click="closeMobileMenu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Solicitar Contato</span>
          </router-link>

          <div class="mobile-contact-info">
            <a href="mailto:contato@geoquantum.com" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-10 7L2 7"></path>
              </svg>
              <span>contato@geoquantum.com</span>
            </a>
            <a href="tel:+5511999999999" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>(11) 99999-9999</span>
            </a>
          </div>
        </div>
      </aside>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavigationItem {
  label: string
  path: string
  icon: string
}

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)

const navigationItems: NavigationItem[] = [
  { label: 'Home', path: '/', icon: 'mdi mdi-home' },
  { label: 'Sobre', path: '/sobre', icon: 'mdi mdi-information' },
  { label: 'Serviços', path: '/servicos', icon: 'mdi mdi-cog' },
//  { label: 'Blog', path: '/blog', icon: 'mdi mdi-post' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  
  // Calcular progresso de rolagem
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  scrollProgress.value = Math.min(progress, 100)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleSearch = () => {
  console.log('Search functionality')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modern-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Indicador de progresso de rolagem */
.scroll-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #1fa7a1 0%, #1a365d 100%);
  transition: width 0.1s ease-out;
  z-index: 1001;
  box-shadow: 0 0 10px rgba(31, 167, 161, 0.3);
  border-radius: 0 0 2px 0;
}

/* Animação de brilho para o indicador */
.scroll-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.header-wrapper {
  background: transparent;
  backdrop-filter: none;
  border-bottom: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-header.scrolled .header-wrapper {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(26, 54, 93, 0.08);
  box-shadow: 0 4px 24px rgba(26, 54, 93, 0.08);
}

.header-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 3rem);
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-decoration: none;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.brand:hover {
  transform: translateY(-1px);
}

.brand-logo {
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.brand-logo::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.brand:hover .brand-logo::before {
  transform: translateX(100%);
}

.brand:hover .brand-logo {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

.brand-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 1;
}

.brand-identity {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.modern-header.scrolled .brand-name {
  color: #1a365d;
  text-shadow: none;
}

.brand-slogan {
  font-size: 0.6875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.modern-header.scrolled .brand-slogan {
  color: #1a365d;
  text-shadow: none;
}

.main-nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  position: relative;
  padding: 0.625rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.modern-header.scrolled .nav-link {
  color: #4a5568;
  text-shadow: none;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0.375rem;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 2px;
  background: #1a365d;
  border-radius: 1px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.modern-header.scrolled .nav-link:hover {
  color: #1a365d;
  background: rgba(26, 54, 93, 0.05);
}

.nav-link.active {
  color: #ffffff;
}

.modern-header.scrolled .nav-link.active {
  color: #1a365d;
}

.nav-link.active::before {
  transform: translateX(-50%) scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
}

.action-button {
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.625rem;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.action-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #1a365d;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.action-button:hover::after {
  transform: scaleX(1);
}

.action-button.secondary {
  background: rgba(26, 54, 93, 0.06);
  color: #2e3a47;
}

.action-button.secondary:hover {
  background: rgba(26, 54, 93, 0.12);
  color: #1a365d;
}

.action-button.primary {
  background: rgba(255, 255, 255, 0.9);
  color: #1a365d;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-header.scrolled .action-button.primary {
  background: #1a365d;
  color: #ffffff;
}

.action-button.primary:hover {
  background: rgba(255, 255, 255, 1);
}

.modern-header.scrolled .action-button.primary:hover {
  background: #2d5a87;
}

.action-button svg {
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.action-button.primary svg {
  stroke: #1a365d;
}

.modern-header.scrolled .action-button.primary svg {
  stroke: #ffffff;
}

.mobile-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.modern-header.scrolled .mobile-toggle {
  background: rgba(26, 54, 93, 0.06);
  border: 1px solid rgba(26, 54, 93, 0.1);
  backdrop-filter: none;
}

.mobile-toggle:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.35);
}

.modern-header.scrolled .mobile-toggle:hover {
  background: rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.2);
}

.toggle-bar {
  width: 1.125rem;
  height: 2px;
  background: #ffffff;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-header.scrolled .toggle-bar {
  background: #1a365d;
}

.mobile-toggle.active .toggle-bar:nth-child(1) {
  transform: translateY(0.5rem) rotate(45deg);
}

.mobile-toggle.active .toggle-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-toggle.active .toggle-bar:nth-child(3) {
  transform: translateY(-0.5rem) rotate(-45deg);
}

.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(26, 54, 93, 0.4);
  backdrop-filter: blur(4px);
  z-index: 999;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 100vw);
  background: #ffffff;
  box-shadow: -8px 0 32px rgba(26, 54, 93, 0.12);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(26, 54, 93, 0.08);
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.mobile-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
}

.mobile-brand-logo {
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-brand-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: rotate(90deg);
}

.mobile-nav {
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: #2e3a47;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
  animation: slideInRight 0.4s ease-out backwards;
  animation-delay: calc(var(--item-index) * 0.05s);
}

.mobile-nav-link i {
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 54, 93, 0.06);
  border-radius: 0.5rem;
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.mobile-nav-link span {
  flex: 1;
}

.mobile-nav-link svg {
  opacity: 0.3;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: rgba(26, 54, 93, 0.04);
  padding-left: 2rem;
}

.mobile-nav-link:hover i {
  background: rgba(26, 54, 93, 0.12);
}

.mobile-nav-link:hover svg {
  opacity: 1;
  transform: translateX(0.25rem);
}

.mobile-nav-link.active {
  background: rgba(26, 54, 93, 0.08);
  color: #1a365d;
  border-left-color: #1fa7a1;
}

.mobile-nav-link.active i {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: #ffffff;
}

.mobile-menu-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(26, 54, 93, 0.08);
  background: linear-gradient(to bottom, transparent, rgba(248, 250, 252, 0.5));
}

.mobile-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 100%;
  padding: 1rem;
  background: #1a365d;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}

.mobile-cta::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #2d5a87;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-cta:hover {
  background: #2d5a87;
}

.mobile-cta:hover::after {
  transform: scaleX(1);
}

.mobile-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem;
  background: rgba(26, 54, 93, 0.04);
  color: #4a5568;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: rgba(26, 54, 93, 0.08);
  color: #1a365d;
}

.mobile-menu-fade-enter-active,
.mobile-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-fade-enter-from,
.mobile-menu-fade-leave-to {
  opacity: 0;
}

.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-slide-enter-from,
.mobile-menu-slide-leave-to {
  transform: translateX(100%);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (min-width: 768px) {
  .brand-logo {
    width: 3.25rem;
    height: 3.25rem;
    padding: 0.5rem;
  }

  .brand-name {
    font-size: 1.375rem;
  }

  .brand-slogan {
    font-size: 0.75rem;
  }
}

@media (min-width: 1024px) {
  .header-container {
    height: 5rem;
  }

  .main-nav {
    display: flex;
  }

  .action-button {
    display: flex;
  }

  .mobile-toggle {
    display: none;
  }
}

@media (min-width: 1280px) {
  .main-nav {
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }

  .action-button {
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 1023px) {
  .modern-header {
    position: absolute;
  }

  .header-wrapper {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(26, 54, 93, 0.08);
  }

  .brand-name {
    color: #1a365d;
    text-shadow: none;
  }

  .brand-slogan {
    color: #1a365d;
    text-shadow: none;
  }

  .toggle-bar {
    background: #1a365d;
  }

  .mobile-toggle {
    background: rgba(26, 54, 93, 0.06);
    border: 1px solid rgba(26, 54, 93, 0.1);
    backdrop-filter: none;
  }

  .mobile-toggle:hover {
    background: rgba(26, 54, 93, 0.12);
    border-color: rgba(26, 54, 93, 0.2);
  }
}

@media (max-width: 479px) {
  .header-container {
    height: 4rem;
    padding: 0 1rem;
  }

  .brand-logo {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.25rem;
  }

  .brand-name {
    font-size: 1.125rem;
  }

  .brand-slogan {
    font-size: 0.625rem;
  }

  .mobile-toggle {
    width: 2.25rem;
    height: 2.25rem;
  }

  .toggle-bar {
    width: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
