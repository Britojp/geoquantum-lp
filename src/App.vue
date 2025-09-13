<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <!-- Header -->
    <Header />

    <!-- Conteúdo Principal -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<style>
/* Estilos globais */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Utilitários */
.bg-gradient-primary {
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
}

.border-white {
  border-color: white !important;
}

.h-100 {
  height: 100%;
}

/* Sistema de Grid Responsivo */
.container-fluid {
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
}

.container {
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* Tipografia Responsiva */
.text-h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
}

.text-h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.3;
}

.text-h3 {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  line-height: 1.4;
}

.text-h4 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.4;
}

.text-h5 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  line-height: 1.5;
}

.text-h6 {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
}

.text-body-1 {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

.text-body-2 {
  font-size: clamp(0.875rem, 1.8vw, 1rem);
  line-height: 1.6;
}

/* Espaçamentos Responsivos */
.py-16 {
  padding-top: clamp(3rem, 6vw, 6rem);
  padding-bottom: clamp(3rem, 6vw, 6rem);
}

.py-12 {
  padding-top: clamp(2rem, 4vw, 4rem);
  padding-bottom: clamp(2rem, 4vw, 4rem);
}

.py-8 {
  padding-top: clamp(1.5rem, 3vw, 2.5rem);
  padding-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.mb-12 {
  margin-bottom: clamp(2rem, 4vw, 4rem);
}

.mb-8 {
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.mb-6 {
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.mb-4 {
  margin-bottom: clamp(0.75rem, 1.5vw, 1rem);
}

/* Utilitários de Visibilidade */
.d-none {
  display: none !important;
}

.d-block {
  display: block !important;
}

.d-flex {
  display: flex !important;
}

.d-grid {
  display: grid !important;
}

/* Responsividade por breakpoint */
@media (max-width: 575.98px) {
  .d-xs-none {
    display: none !important;
  }
  .d-xs-block {
    display: block !important;
  }
  .d-xs-flex {
    display: flex !important;
  }
  .d-xs-grid {
    display: grid !important;
  }

  .text-xs-center {
    text-align: center !important;
  }
  .text-xs-left {
    text-align: left !important;
  }
  .text-xs-right {
    text-align: right !important;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-grid {
    display: grid !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-grid {
    display: grid !important;
  }

  .text-md-center {
    text-align: center !important;
  }
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-grid {
    display: grid !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-grid {
    display: grid !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
  .text-xl-center {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
}

/* Acessibilidade e UX */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Suporte para telas de alta densidade */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .high-dpi-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Suporte para modo escuro do sistema */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff;
    --bg-color: #121212;
  }
}

/* Suporte para impressão */
@media print {
  .no-print {
    display: none !important;
  }

  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}
</style>
