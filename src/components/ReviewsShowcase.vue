<template>
  <section class="reviews-showcase">
    <div class="reviews-background">
      <div class="tech-grid"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>
    </div>

    <div class="reviews-container">
      <div class="section-header">
        <h2 class="section-title">Resultados que Impressionam</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">
          Clientes satisfeitos que transformaram seus negócios com nossas soluções
        </p>
      </div>

      <div class="reviews-grid">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="review-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="review-header">
            <div class="rating">
              <svg 
                v-for="star in 5" 
                :key="star"
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                :fill="star <= review.rating ? '#1fa7a1' : 'none'"
                :stroke="star <= review.rating ? '#1fa7a1' : '#cbd5e0'"
                stroke-width="2"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
          </div>

          <blockquote class="review-text">
            "{{ review.text }}"
          </blockquote>

      

          <div class="review-author">
            <div class="author-avatar">
              <i :class="review.authorIcon"></i>
            </div>
            <div class="author-info">
              <div class="author-name">{{ review.author }}</div>
              <div class="author-role">{{ review.role }}</div>
              <div class="author-company">{{ review.company }}</div>
            </div>
            <div class="verified-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12L20.56 9.22L20.9 5.54L17.29 4.72L15.4 1.54L12 3L8.6 1.54L6.71 4.72L3.1 5.53L3.44 9.21L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12Z"/>
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface ReviewResult {
  icon: string
  value: string
  label: string
}

interface Review {
  rating: number
  text: string
  author: string
  role: string
  company: string
  authorIcon: string
}

const reviews: Review[] = [
  {
    rating: 5,
    text: 'A automatização desenvolvida pela GeoQuantum reduziu nosso tempo de processamento de 8 horas para apenas 45 minutos. Conseguimos identificar 15.000 hectares com precisão cirúrgica e aumentamos nossa produtividade em 28%.',
    author: 'Roberto Silva',
    role: 'Gerente de Operações',
    company: 'AgroTech Solutions',
    authorIcon: 'mdi mdi-account-tie',
  },
  {
    rating: 5,
    text: 'O monitoramento ambiental implementado nos permitiu detectar alterações críticas 3 dias antes do previsto. A precisão dos dados salvou 200 hectares de vegetação nativa e evitou multas de R$ 2 milhões.',
    author: 'Dra. Ana Paula Costa',
    role: 'Coordenadora Ambiental',
    company: 'Instituto de Preservação',
    authorIcon: 'mdi mdi-account-tie-woman',
  },
  {
    rating: 5,
    text: 'A capacitação em QGIS transformou nossa equipe. Em 3 meses já estávamos produzindo análises complexas de forma autônoma. O ROI foi imediato e a qualidade técnica do treinamento é incomparável.',
    author: 'Carlos Mendes',
    role: 'Diretor de TI',
    company: 'GeoSystems Corp',
    authorIcon: 'mdi mdi-account-tie',
  },
]
</script>

<style scoped>
.reviews-showcase {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.reviews-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
}

.tech-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(26, 54, 93, 0.02) 1px, transparent 1px),
    linear-gradient(rgba(26, 54, 93, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

.floating-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(31, 167, 161, 0.08) 0%, transparent 70%);
  filter: blur(60px);
  animation: float 20s ease-in-out infinite;
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: 10%;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 500px;
  height: 500px;
  bottom: -150px;
  left: -100px;
  animation-delay: 10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.reviews-container {
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(31, 167, 161, 0.1) 0%, rgba(45, 90, 135, 0.1) 100%);
  border: 1px solid rgba(31, 167, 161, 0.3);
  border-radius: 2rem;
  color: #1a365d;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.header-badge svg {
  color: #1fa7a1;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1a365d;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.title-underline {
  width: 4rem;
  height: 3px;
  background: linear-gradient(90deg, #1fa7a1 0%, #2d5a87 100%);
  border-radius: 2px;
  margin: 0 auto 1.25rem;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.review-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1.25rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.review-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1a365d 0%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.review-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.review-card:hover::before {
  transform: scaleX(1);
}

.review-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.review-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(26, 54, 93, 0.06);
  border-radius: 1.5rem;
  color: #1a365d;
  font-size: 0.9375rem;
  font-weight: 600;
}

.review-badge i {
  font-size: 1.125rem;
  color: #1fa7a1;
}

.review-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #2e3a47;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;
}

.review-text::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -0.25rem;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(31, 167, 161, 0.15);
  line-height: 1;
}

.review-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.03) 0%, rgba(31, 167, 161, 0.03) 100%);
  border-radius: 0.75rem;
  border: 1px solid rgba(26, 54, 93, 0.08);
}

.result-metric {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.metric-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.15);
}

.metric-icon i {
  font-size: 1.25rem;
  color: #ffffff;
}

.metric-content {
  flex: 1;
}

.metric-value {
  font-size: 1.625rem;
  font-weight: 800;
  color: #1a365d;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.metric-label {
  font-size: 0.8125rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(26, 54, 93, 0.08);
  position: relative;
}

.author-avatar {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(31, 167, 161, 0.08) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid rgba(31, 167, 161, 0.2);
}

.author-avatar i {
  font-size: 2rem;
  color: #1a365d;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.0625rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.25rem;
}

.author-role {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #2d5a87;
  margin-bottom: 0.125rem;
}

.author-company {
  font-size: 0.875rem;
  color: #6b7280;
}

.verified-badge {
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}

.verified-badge svg:first-child {
  fill: #1fa7a1;
}

.verified-badge svg:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.trust-metrics {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 3rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 1.25rem;
  position: relative;
  overflow: hidden;
}

.trust-metrics::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}

.metric-card {
  position: relative;
  z-index: 1;
  text-align: center;
}

.metric-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metric-bar {
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.25rem;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #1fa7a1 0%, rgba(255, 255, 255, 0.9) 100%);
  border-radius: 0.25rem;
  transition: width 1s ease-out;
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

@media (min-width: 768px) {
  .reviews-showcase {
    padding: 5rem 0;
  }

  .reviews-container {
    padding: 0 2rem;
  }

  .section-title {
    font-size: 2.75rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
  }

  .reviews-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2.5rem;
  }

  .review-card {
    padding: 2.5rem;
  }

  .review-text {
    font-size: 1.1875rem;
  }

  .review-badge {
    font-size: 1rem;
  }

  .metric-value {
    font-size: 1.75rem;
  }

  .metric-label {
    font-size: 0.875rem;
  }

  .author-name {
    font-size: 1.125rem;
  }

  .author-role {
    font-size: 1rem;
  }

  .author-company {
    font-size: 0.9375rem;
  }

  .trust-metrics {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .metric-number {
    font-size: 4rem;
  }

  .metric-text {
    font-size: 1.0625rem;
  }
}

@media (min-width: 1024px) {
  .reviews-showcase {
    padding: 6rem 0;
  }

  .section-title {
    font-size: 3.25rem;
  }

  .section-subtitle {
    font-size: 1.375rem;
  }

  .reviews-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .review-text {
    font-size: 1.25rem;
  }

  .metric-value {
    font-size: 2rem;
  }

  .metric-number {
    font-size: 4.5rem;
  }
}

@media (max-width: 767px) {
  .review-results {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 479px) {
  .reviews-showcase {
    padding: 3rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .reviews-grid {
    gap: 1.5rem;
  }

  .review-card {
    padding: 1.5rem;
  }

  .review-text {
    font-size: 1.0625rem;
    padding-left: 1.25rem;
  }

  .review-badge {
    font-size: 0.875rem;
  }

  .review-results {
    padding: 1.25rem;
  }

  .result-metric {
    gap: 0.625rem;
  }

  .metric-icon {
    width: 2.25rem;
    height: 2.25rem;
  }

  .metric-icon i {
    font-size: 1.125rem;
  }

  .metric-value {
    font-size: 1.375rem;
  }

  .metric-label {
    font-size: 0.75rem;
  }

  .author-avatar {
    width: 3.5rem;
    height: 3.5rem;
  }

  .author-avatar i {
    font-size: 1.75rem;
  }

  .author-name {
    font-size: 1rem;
  }

  .author-role {
    font-size: 0.875rem;
  }

  .author-company {
    font-size: 0.8125rem;
  }

  .trust-metrics {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }

  .metric-number {
    font-size: 2.75rem;
  }

  .metric-text {
    font-size: 0.9375rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .review-card,
  .shape {
    animation: none;
  }
}
</style>

