<template>
  <section class="hero-improved">
    <div class="hero-background">
      <div class="hero-pattern"></div>
      <div class="hero-gradient"></div>
    </div>

    <v-container class="hero-content">
      <div class="hero-main">
        <div class="hero-badge">
          <i class="mdi mdi-star-circle"></i>
          <span>Líder em Soluções Geoespaciais no Brasil</span>
        </div>

        <h1 class="hero-title">
          Transforme Dados Geoespaciais em
          <span class="highlight-text">Decisões Estratégicas</span>
        </h1>

        <p class="hero-subtitle">
          Mais de 20 empresas já economizaram milhões e aumentaram sua produtividade em até 45%
          com nossas soluções de geoprocessamento
        </p>

        <div class="hero-features">
          <div class="feature-item">
            <i class="mdi mdi-check-decagram"></i>
            <span>98% de Satisfação</span>
          </div>
          <div class="feature-item">
            <i class="mdi mdi-lightning-bolt"></i>
            <span>Resultados em 24h</span>
          </div>
          <div class="feature-item">
            <i class="mdi mdi-shield-check"></i>
            <span>Suporte Especializado</span>
          </div>
        </div>

        <div class="hero-ctas">
          <router-link to="/contato" class="btn-primary-hero">
            <span>Solicitar Orçamento Grátis</span>
            <i class="mdi mdi-arrow-right"></i>
          </router-link>
          <button class="btn-secondary-hero" @click="handleWatchDemo">
            <i class="mdi mdi-play-circle"></i>
            <span>Ver Demonstração</span>
          </button>
        </div>

        <div class="hero-trust-bar">
          <span class="trust-label">Confiado por:</span>
          <div class="trust-logos">
            <div class="trust-logo">
              <i class="mdi mdi-domain"></i>
              <span>Empresas</span>
            </div>
            <div class="trust-logo">
              <i class="mdi mdi-bank"></i>
              <span>Governos</span>
            </div>
            <div class="trust-logo">
              <i class="mdi mdi-leaf"></i>
              <span>ONGs</span>
            </div>
            <div class="trust-logo">
              <i class="mdi mdi-school"></i>
              <span>Universidades</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-card">
          <div class="card-header">
            <div class="card-icon">
              <i class="mdi mdi-map-marker-radius"></i>
            </div>
            <div class="card-badge success">Ativo</div>
          </div>
          <div class="card-body">
            <div class="metric-row">
              <span class="metric-label">Projetos Ativos</span>
              <span class="metric-value">150+</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
            <div class="metric-row">
              <span class="metric-label">Taxa de Conclusão</span>
              <span class="metric-value success-text">98%</span>
            </div>
          </div>
        </div>

        <div class="visual-stats">
          <div class="stat-bubble" style="--delay: 0.2s">
            <i class="mdi mdi-clock-fast"></i>
            <span>-60% Tempo</span>
          </div>
          <div class="stat-bubble" style="--delay: 0.4s">
            <i class="mdi mdi-chart-line"></i>
            <span>+45% Eficiência</span>
          </div>
          <div class="stat-bubble" style="--delay: 0.6s">
            <i class="mdi mdi-cash-multiple"></i>
            <span>R$ 2M+ Economizados</span>
          </div>
        </div>
      </div>
    </v-container>

    <div class="hero-scroll-indicator">
      <span>Role para descobrir</span>
      <i class="mdi mdi-chevron-down"></i>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleWatchDemo = () => {
  console.log('Watch demo')
}
</script>

<style scoped>
.hero-improved {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8rem 0 4rem;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(26, 54, 93, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(26, 54, 93, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 20% 50%,
    rgba(26, 54, 93, 0.05) 0%,
    transparent 50%
  ),
  radial-gradient(
    circle at 80% 50%,
    rgba(31, 167, 161, 0.05) 0%,
    transparent 50%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(31, 167, 161, 0.1) 0%, rgba(45, 90, 135, 0.1) 100%);
  border: 1px solid rgba(31, 167, 161, 0.3);
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 2rem;
  animation: fadeInDown 0.6s ease-out;
}

.hero-badge i {
  font-size: 1.125rem;
  color: #1fa7a1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a365d;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.highlight-text {
  background: linear-gradient(135deg, #1a365d 0%, #1fa7a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.highlight-text::after {
  content: '';
  position: absolute;
  bottom: 0.25rem;
  left: 0;
  right: 0;
  height: 0.375rem;
  background: linear-gradient(90deg, rgba(31, 167, 161, 0.3) 0%, rgba(45, 90, 135, 0.3) 100%);
  border-radius: 0.25rem;
  z-index: -1;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2.5rem;
  max-width: 90%;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.hero-features {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 1rem;
  font-weight: 600;
  color: #2e3a47;
}

.feature-item i {
  font-size: 1.5rem;
  color: #1fa7a1;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

.btn-primary-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 2rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0.875rem;
  box-shadow: 0 8px 32px rgba(26, 54, 93, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(31, 167, 161, 0.3) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 48px rgba(26, 54, 93, 0.35);
}

.btn-primary-hero:hover::before {
  opacity: 1;
}

.btn-primary-hero i {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.btn-primary-hero:hover i {
  transform: translateX(0.25rem);
}

.btn-secondary-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 2rem;
  background: transparent;
  border: 2px solid #1a365d;
  color: #1a365d;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0.875rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary-hero:hover {
  background: rgba(26, 54, 93, 0.05);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(26, 54, 93, 0.15);
}

.hero-trust-bar {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(26, 54, 93, 0.1);
  animation: fadeInUp 0.6s ease-out 0.5s backwards;
}

.trust-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.trust-logos {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.trust-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(26, 54, 93, 0.03);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2e3a47;
  transition: all 0.3s ease;
}

.trust-logo:hover {
  background: rgba(26, 54, 93, 0.08);
  transform: translateY(-2px);
}

.trust-logo i {
  font-size: 1.25rem;
  color: #1a365d;
}

.hero-visual {
  position: relative;
  animation: fadeInRight 0.8s ease-out 0.3s backwards;
}

.visual-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(26, 54, 93, 0.15);
  position: relative;
  z-index: 2;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.card-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(26, 54, 93, 0.25);
}

.card-icon i {
  font-size: 1.75rem;
  color: #ffffff;
}

.card-badge {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-badge.success {
  background: rgba(31, 167, 161, 0.1);
  color: #1fa7a1;
  border: 1px solid rgba(31, 167, 161, 0.3);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.metric-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metric-label {
  font-size: 0.9375rem;
  color: #6b7280;
  font-weight: 500;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a365d;
}

.success-text {
  color: #1fa7a1;
}

.progress-bar {
  height: 0.75rem;
  background: rgba(26, 54, 93, 0.08);
  border-radius: 0.5rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 98%;
  background: linear-gradient(90deg, #1a365d 0%, #1fa7a1 100%);
  border-radius: 0.5rem;
  animation: progressAnimation 2s ease-out forwards;
}

.visual-stats {
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;
}

.stat-bubble {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(26, 54, 93, 0.1);
  border-radius: 3rem;
  box-shadow: 0 8px 32px rgba(26, 54, 93, 0.12);
  font-weight: 700;
  color: #1a365d;
  white-space: nowrap;
  animation: floatIn 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.stat-bubble i {
  font-size: 1.5rem;
  color: #1fa7a1;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 600;
  animation: bounce 2s ease-in-out infinite;
}

.hero-scroll-indicator i {
  font-size: 1.5rem;
}

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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateX(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes progressAnimation {
  from {
    width: 0;
  }
  to {
    width: 98%;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-visual {
    order: 2;
  }

  .hero-main {
    text-align: center;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .hero-subtitle {
    max-width: 100%;
  }

  .hero-features,
  .hero-ctas {
    justify-content: center;
  }

  .hero-trust-bar {
    flex-direction: column;
    align-items: center;
  }

  .visual-stats {
    position: static;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
    transform: none;
  }
}

@media (max-width: 768px) {
  .hero-improved {
    padding: 6rem 0 3rem;
    min-height: auto;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 1.0625rem;
  }

  .hero-features {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-ctas {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary-hero,
  .btn-secondary-hero {
    width: 100%;
    justify-content: center;
  }

  .visual-stats {
    flex-wrap: wrap;
  }

  .stat-bubble {
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.875rem;
  }

  .hero-badge {
    font-size: 0.8125rem;
    padding: 0.5rem 1rem;
  }

  .trust-logos {
    justify-content: center;
  }

  .hero-scroll-indicator {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>

