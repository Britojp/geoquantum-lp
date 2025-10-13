<template>
  <section class="testimonials-section">
    <v-container class="mobile-padding">
      <div class="section-header">
        <h2 class="section-title">O que nossos clientes dizem</h2>
        <p class="section-subtitle">
          Depoimentos reais de profissionais que transformaram seus projetos com nossas soluções
        </p>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="quote-icon">
            <i class="mdi mdi-format-quote-open"></i>
          </div>

          <p class="testimonial-text">{{ testimonial.text }}</p>

          <div class="testimonial-author">
            <div class="author-avatar">
              <i :class="testimonial.icon"></i>
            </div>
            <div class="author-info">
              <h4 class="author-name">{{ testimonial.name }}</h4>
              <p class="author-role">{{ testimonial.role }}</p>
              <p v-if="testimonial.company" class="author-company">{{ testimonial.company }}</p>
            </div>
          </div>

          <div v-if="testimonial.results" class="testimonial-results">
            <div
              v-for="(result, idx) in testimonial.results"
              :key="idx"
              class="result-badge"
            >
              <i :class="result.icon"></i>
              <span>{{ result.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonials-stats">
        <div class="stat-item">
          <div class="stat-number">98%</div>
          <div class="stat-label">Taxa de Satisfação</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">20+</div>
          <div class="stat-label">Clientes Fidelizados</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">150+</div>
          <div class="stat-label">Projetos Entregues</div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface TestimonialResult {
  icon: string
  value: string
}

interface Testimonial {
  text: string
  name: string
  role: string
  company?: string
  icon: string
  results?: TestimonialResult[]
}

const testimonials: Testimonial[] = [
  {
    text: 'A GeoQuantum transformou completamente nossa forma de trabalhar com dados geoespaciais. O treinamento em QGIS foi excepcional, com foco prático e aplicado. Em apenas 3 meses, nossa equipe já estava produzindo análises complexas de forma autônoma.',
    name: 'Dr. Carlos Silva',
    role: 'Coordenador de Geoprocessamento',
    company: 'Secretaria de Meio Ambiente - GO',
    icon: 'mdi mdi-account-tie',
    results: [
      { icon: 'mdi mdi-chart-line', value: '+45% Produtividade' },
      { icon: 'mdi mdi-clock-fast', value: '60% Tempo Reduzido' },
    ],
  },
  {
    text: 'Precisávamos de um mapeamento agrícola detalhado para 15.000 hectares. A equipe da GeoQuantum entregou não apenas mapas precisos, mas também insights valiosos que aumentaram nossa produtividade em 28%. O suporte pós-projeto foi excepcional.',
    name: 'Ana Paula Oliveira',
    role: 'Gerente de Operações',
    company: 'Fazenda Santa Maria',
    icon: 'mdi mdi-account-tie-woman',
    results: [
      { icon: 'mdi mdi-sprout', value: '+28% Produção' },
      { icon: 'mdi mdi-cash', value: 'R$ 450k Economizados' },
    ],
  },
  {
    text: 'A automação desenvolvida pela GeoQuantum em Python reduziu nosso tempo de processamento de dados de 8 horas para apenas 45 minutos. Isso nos permitiu tomar decisões mais rápidas e aumentar significativamente nossa capacidade de análise.',
    name: 'Roberto Santos',
    role: 'Analista de Dados Sênior',
    company: 'Empresa de Mineração XYZ',
    icon: 'mdi mdi-account-tie',
    results: [
      { icon: 'mdi mdi-speedometer', value: '90% Mais Rápido' },
      { icon: 'mdi mdi-check-circle', value: '100% Precisão' },
    ],
  },
]
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(26, 54, 93, 0.1), transparent);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(26, 54, 93, 0.08);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a365d 0%, #2d5a87 50%, #1fa7a1 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.testimonial-card:hover::before {
  opacity: 1;
}

.quote-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.quote-icon i {
  font-size: 1.5rem;
  color: #ffffff;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #2e3a47;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(26, 54, 93, 0.08);
}

.author-avatar {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(45, 90, 135, 0.08) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-avatar i {
  font-size: 1.75rem;
  color: #1a365d;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.25rem;
}

.author-role {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d5a87;
  margin-bottom: 0.125rem;
}

.author-company {
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0;
}

.testimonial-results {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.result-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  background: linear-gradient(135deg, rgba(31, 167, 161, 0.08) 0%, rgba(45, 90, 135, 0.08) 100%);
  border: 1px solid rgba(31, 167, 161, 0.2);
  border-radius: 1.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #1a365d;
}

.result-badge i {
  font-size: 1rem;
  color: #1fa7a1;
}

.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 3rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.testimonials-stats::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.stat-item {
  text-align: center;
  position: relative;
  z-index: 1;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }

  .testimonials-stats {
    padding: 2rem 1rem;
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .testimonial-text {
    font-size: 0.9375rem;
  }

  .testimonials-stats {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .testimonial-card {
    animation: none;
  }
}
</style>

