<template>
  <section class="products-showcase">
    <v-container class="mobile-padding">
      <div class="section-header">
        <h2 class="section-title">Nossas Soluções</h2>
        <p class="section-subtitle">
          Produtos e serviços especializados para transformar seus dados geoespaciais em decisões estratégicas
        </p>
      </div>

      <div class="products-grid">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="product-header">
            <div class="product-icon">
              <i :class="product.icon"></i>
            </div>
            <div class="product-badge" v-if="product.badge">
              {{ product.badge }}
            </div>
          </div>

          <div class="product-content">
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-description">{{ product.description }}</p>

            <div class="product-features">
              <div
                v-for="(feature, idx) in product.features"
                :key="idx"
                class="feature-item"
              >
                <i class="mdi mdi-check-circle"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <div class="product-footer">
            <button class="btn-learn-more" @click="handleLearnMore(product)">
              <span>Saiba Mais</span>
              <i class="mdi mdi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface ProductFeature {
  text: string
}

interface Product {
  title: string
  description: string
  icon: string
  badge?: string
  features: string[]
  link?: string
}

const products: Product[] = [
  {
    title: 'Cadastro Técnico Geoespacial',
    description: 'Sistema integrado para gestão de cadastro territorial com análise espacial e integração de múltiplas fontes de dados.',
    icon: 'mdi mdi-database-settings',
    badge: 'Mais Popular',
    features: [
      'Integração com sistemas tributários',
      'Atualização em tempo real',
      'Análise de alterações territoriais',
      'Geração automática de relatórios'
    ],
  },
  {
    title: 'Monitoramento por Satélite',
    description: 'Monitoramento contínuo de áreas extensas utilizando imagens de satélite para detectar alterações e eventos.',
    icon: 'mdi mdi-satellite-variant',
    badge: 'Inovação',
    features: [
      'Alertas automáticos de mudanças',
      'Histórico temporal completo',
      'Análise multispectral',
      'Integração com sensores IoT'
    ],
  },
  {
    title: 'Automação de Processos GIS',
    description: 'Desenvolvimento de fluxos automatizados para otimizar operações repetitivas e aumentar a produtividade.',
    icon: 'mdi mdi-robot',
    features: [
      'Scripts Python personalizados',
      'Modelador gráfico QGIS',
      'Processamento em lote',
      'Validação automática de dados'
    ],
  },
  {
    title: 'Plataforma de Geomarketing',
    description: 'Análise espacial avançada para identificar oportunidades de negócio e otimizar estratégias de mercado.',
    icon: 'mdi mdi-map-marker-radius',
    features: [
      'Análise de mercado potencial',
      'Segmentação geográfica',
      'Localização inteligente',
      'Dashboard interativo'
    ],
  },
  {
    title: 'Gestão Ambiental Digital',
    description: 'Solução completa para licenciamento, monitoramento e gestão de processos ambientais.',
    icon: 'mdi mdi-leaf-circle',
    features: [
      'Controle de licenças ambientais',
      'Monitoramento de áreas protegidas',
      'Relatórios de conformidade',
      'Integração com órgãos ambientais'
    ],
  },
  {
    title: 'Capacitação Profissional',
    description: 'Programas de treinamento do básico ao avançado em QGIS, Python e tecnologias geoespaciais.',
    icon: 'mdi mdi-school',
    badge: 'Certificado',
    features: [
      'Aulas práticas e aplicadas',
      'Material didático completo',
      'Suporte pós-curso',
      'Certificado reconhecido'
    ],
  },
]

const handleLearnMore = (product: Product) => {
  console.log('Learn more about:', product.title)
}
</script>

<style scoped>
.products-showcase {
  padding: 5rem 0;
  background: #ffffff;
  position: relative;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.product-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
  position: relative;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a365d 0%, #2d5a87 50%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-header {
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.product-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(26, 54, 93, 0.2);
  transition: all 0.3s ease;
}

.product-card:hover .product-icon {
  transform: scale(1.05) rotate(-5deg);
}

.product-icon i {
  font-size: 2rem;
  color: #ffffff;
}

.product-badge {
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #1fa7a1 0%, #2d5a87 100%);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 1.25rem;
  box-shadow: 0 4px 12px rgba(31, 167, 161, 0.3);
}

.product-content {
  padding: 0 2rem 2rem 2rem;
  flex: 1;
}

.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.product-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.product-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.9375rem;
  color: #2e3a47;
}

.feature-item i {
  color: #1fa7a1;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.product-footer {
  padding: 0 2rem 2rem 2rem;
}

.btn-learn-more {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  border: 2px solid #1a365d;
  color: #1a365d;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-learn-more::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.btn-learn-more:hover::before {
  transform: scaleX(1);
}

.btn-learn-more span,
.btn-learn-more i {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn-learn-more:hover {
  color: #ffffff;
  border-color: #1a365d;
}

.btn-learn-more i {
  font-size: 1.125rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.btn-learn-more:hover i {
  transform: translateX(0.25rem);
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
  .products-showcase {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .product-header {
    padding: 1.5rem;
  }

  .product-content {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .product-footer {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }

  .product-icon {
    width: 3.5rem;
    height: 3.5rem;
  }

  .product-icon i {
    font-size: 1.75rem;
  }

  .product-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-card {
    animation: none;
  }
}
</style>

