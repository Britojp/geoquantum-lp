<template>
  <div class="blog-page">
    <!-- Hero Section com Mapa de Fundo -->
    <section class="hero-section">
      <!-- Mapa Interativo -->
      <div ref="mapContainer" class="map-container"></div>

      <!-- Overlay com Filtro Azul e Conteúdo -->
      <div class="hero-overlay">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" md="8" class="mx-auto">
              <div class="hero-badge mb-4">
                <i class="mdi mdi-newspaper-variant-outline"></i>
                <span>Blog & Insights</span>
              </div>
              <h1
                class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow animate-fade-in-down"
              >
                Conhecimento em Geoprocessamento
              </h1>
              <p class="text-h6 text-grey-lighten-2 mb-6 animate-fade-in-up animate-delay-300">
                Artigos, tutoriais e insights sobre tecnologias geoespaciais, análise de dados e
                tendências do setor
              </p>
              <div class="hero-stats animate-fade-in-up animate-delay-600">
                <div class="stat-item">
                  <i class="mdi mdi-post"></i>
                  <span class="stat-number">{{ posts.length }}+</span>
                  <span class="stat-label">Artigos</span>
                </div>
                <div class="stat-item">
                  <i class="mdi mdi-account-group"></i>
                  <span class="stat-number">{{ uniqueAuthors }}</span>
                  <span class="stat-label">Autores</span>
                </div>
                <div class="stat-item">
                  <i class="mdi mdi-tag-multiple"></i>
                  <span class="stat-number">{{ tags.length }}</span>
                  <span class="stat-label">Categorias</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Filtros e Busca -->
    <section class="filters-section py-8">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="searchQuery"
              label="Buscar artigos..."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              clearable
              @input="filterPosts"
              class="search-input"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="selectedCategory"
              label="Categoria"
              :items="categories"
              variant="outlined"
              clearable
              @update:model-value="filterPosts"
              class="category-select"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="selectedTag"
              label="Tag"
              :items="tags"
              variant="outlined"
              clearable
              @update:model-value="filterPosts"
              class="tag-select"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-btn
              color="primary"
              variant="elevated"
              @click="resetFilters"
              block
              class="reset-filters-btn"
            >
              Limpar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Posts em Destaque -->
    <section class="featured-posts py-16" v-if="featuredPosts.length > 0">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Artigos em Destaque</h2>
          <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto">
            Os artigos mais populares e relevantes sobre geoprocessamento.
          </p>
        </div>

        <v-row>
          <v-col v-for="post in featuredPosts" :key="post.id" cols="12" md="6" lg="4" class="mb-6">
            <v-card class="featured-post-card h-100" elevation="4">
              <v-img :src="post.image" height="200" cover class="post-image">
                <div class="post-overlay">
                  <div class="post-date">{{ formatDate(post.date) }}</div>
                  <v-chip :color="post.category.color" size="small" class="category-chip">
                    {{ post.category.name }}
                  </v-chip>
                </div>
              </v-img>

              <v-card-item class="pa-6">
                <v-card-title class="text-h6 font-weight-bold mb-2">
                  {{ post.title }}
                </v-card-title>
                <v-card-text class="text-body-2 text-grey-darken-1 mb-3">
                  {{ post.excerpt }}
                </v-card-text>

                <div class="d-flex flex-wrap gap-2 mb-3">
                  <v-chip
                    v-for="tag in post.tags"
                    :key="tag"
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ tag }}
                  </v-chip>
                </div>

                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center">
                    <v-avatar size="24" color="primary" class="me-2">
                      <v-icon size="16" color="white">{{ post.author.icon }}</v-icon>
                    </v-avatar>
                    <span class="text-body-2">{{ post.author.name }}</span>
                  </div>
                  <v-btn color="primary" variant="text" size="small" @click="readPost(post)">
                    Ler Mais
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Lista de Posts -->
    <section class="posts-section py-16">
      <v-container>
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <v-icon icon="mdi-magnify" size="64" color="grey" class="mb-4"></v-icon>
          <h3 class="text-h5 text-grey-darken-1 mb-2">Nenhum artigo encontrado</h3>
          <p class="text-body-1 text-grey">Tente ajustar os filtros de busca.</p>
        </div>

        <v-row v-else>
          <v-col v-for="post in paginatedPosts" :key="post.id" cols="12" md="6" lg="4" class="mb-6">
            <v-card class="post-card h-100" elevation="4">
              <v-img :src="post.image" height="200" cover class="post-image">
                <div class="post-overlay">
                  <div class="post-date">{{ formatDate(post.date) }}</div>
                  <v-chip :color="post.category.color" size="small" class="category-chip">
                    {{ post.category.name }}
                  </v-chip>
                </div>
              </v-img>

              <v-card-item class="pa-6">
                <v-card-title class="text-h6 font-weight-bold mb-2">
                  {{ post.title }}
                </v-card-title>
                <v-card-text class="text-body-2 text-grey-darken-1 mb-3">
                  {{ post.excerpt }}
                </v-card-text>

                <div class="d-flex flex-wrap gap-2 mb-3">
                  <v-chip
                    v-for="tag in post.tags"
                    :key="tag"
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ tag }}
                  </v-chip>
                </div>

                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center">
                    <v-avatar size="24" color="primary" class="me-2">
                      <v-icon size="16" color="white">{{ post.author.icon }}</v-icon>
                    </v-avatar>
                    <span class="text-body-2">{{ post.author.name }}</span>
                  </div>
                  <v-btn color="primary" variant="text" size="small" @click="readPost(post)">
                    Ler Mais
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <!-- Paginação -->
        <div class="text-center mt-8">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="7"
            color="primary"
          ></v-pagination>
        </div>
      </v-container>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section py-16">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Fique por Dentro</h2>
            <p class="text-h6 text-grey-darken-1 max-width-600 mx-auto mb-6">
              Inscreva-se em nossa newsletter para receber os melhores artigos sobre
              geoprocessamento e tecnologia geoespacial.
            </p>

            <v-form @submit.prevent="subscribeNewsletter">
              <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                  <v-text-field
                    v-model="newsletterEmail"
                    label="Seu e-mail"
                    type="email"
                    variant="outlined"
                    prepend-inner-icon="mdi-email"
                    :rules="emailRules"
                    required
                    class="newsletter-input"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="3">
                  <v-btn
                    type="submit"
                    color="primary"
                    size="large"
                    variant="elevated"
                    :loading="newsletterLoading"
                    block
                    class="newsletter-btn"
                  >
                    Inscrever-se
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-16 bg-gradient-primary">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-white mb-4">
              Pronto para Aplicar o Conhecimento?
            </h2>
            <p class="text-h6 text-grey-lighten-2 mb-6">
              Entre em contato conosco e descubra como podemos ajudar você a transformar seus dados
              geoespaciais em insights valiosos.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-6 justify-center">
              <v-btn
                color="accent"
                size="large"
                variant="elevated"
                to="/contato"
                class="text-dark font-weight-bold"
              >
                <v-icon start>mdi-phone</v-icon>
                Solicitar Orçamento
              </v-btn>

              <v-btn size="large" variant="outlined" to="/servicos" class="text-white border-white">
                <v-icon start>mdi-cog</v-icon>
                Nossos Serviços
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Modal de Leitura do Post -->
    <v-dialog
      v-model="showPostModal"
      max-width="1000"
      @click:outside="closePostModal"
      :z-index="2000"
    >
      <v-card v-if="selectedPost" class="post-modal" @click.stop>
        <!-- Header do Modal -->
        <div class="modal-header">
          <div class="modal-header-content">
            <v-btn icon @click="closePostModal" class="close-btn" variant="text">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="modal-title-container">
              <h1 class="modal-title">{{ selectedPost.title }}</h1>
              <div class="modal-meta">
                <v-chip
                  :color="selectedPost.category.color"
                  size="small"
                  class="category-chip-modal"
                >
                  {{ selectedPost.category.name }}
                </v-chip>
                <span class="post-date-modal">{{ formatDate(selectedPost.date) }}</span>
              </div>
              <div class="modal-hint">
                <small class="text-grey-lighten-2">Clique fora para fechar</small>
              </div>
            </div>
            <v-btn icon @click="sharePost" class="share-btn" variant="text">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </div>
        </div>

        <!-- Imagem de Capa -->
        <div class="modal-image-container">
          <v-img :src="selectedPost.image" height="400" cover class="modal-cover-image">
            <div class="image-overlay">
              <div class="image-overlay-content">
                <div class="author-info">
                  <v-avatar size="60" color="primary" class="author-avatar">
                    <v-icon size="30" color="white">{{ selectedPost.author.icon }}</v-icon>
                  </v-avatar>
                  <div class="author-details">
                    <h3 class="author-name">{{ selectedPost.author.name }}</h3>
                    <p class="author-title">{{ selectedPost.author.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </v-img>
        </div>

        <!-- Conteúdo do Modal -->
        <div class="modal-content">
          <!-- Tags -->
          <div class="tags-section">
            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="tag in selectedPost.tags"
                :key="tag"
                size="small"
                color="primary"
                variant="outlined"
                class="tag-chip-modal"
              >
                {{ tag }}
              </v-chip>
            </div>
          </div>

          <!-- Conteúdo do Post -->
          <div class="post-content-modal">
            <!-- Introdução com destaque visual -->
            <div class="content-intro">
              <div class="intro-container">
                <div class="intro-icon">
                  <v-icon size="24" color="white">mdi-lightbulb-on</v-icon>
                </div>
                <div class="intro-content">
                  <h2 class="intro-title">Resumo</h2>
                  <p class="intro-text">{{ selectedPost.content }}</p>
                </div>
              </div>
            </div>

            <!-- Seções do conteúdo com cards -->
            <div v-if="selectedPost.sections" class="content-sections">
              <div
                v-for="(section, index) in selectedPost.sections"
                :key="section.title"
                class="content-section"
              >
                <div class="section-card">
                  <div class="section-header">
                    <div class="section-number">{{ index + 1 }}</div>
                    <h3 class="section-title">{{ section.title }}</h3>
                  </div>
                  <div class="section-content-wrapper">
                    <p class="section-content">{{ section.content }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Conclusão com destaque especial -->
            <div v-if="selectedPost.conclusion" class="content-conclusion">
              <div class="conclusion-card">
                <div class="conclusion-header">
                  <div class="conclusion-icon">
                    <v-icon size="24" color="white">mdi-check-circle</v-icon>
                  </div>
                  <h3 class="conclusion-title">Conclusão</h3>
                </div>
                <div class="conclusion-content-wrapper">
                  <p class="conclusion-text">{{ selectedPost.conclusion }}</p>
                </div>
              </div>
            </div>

            <!-- Separador visual -->
            <div class="content-separator">
              <v-divider class="content-divider"></v-divider>
              <div class="separator-icon">
                <v-icon size="20" color="white">mdi-arrow-down</v-icon>
              </div>
            </div>
          </div>

          <!-- Seção de Compartilhamento -->
          <div class="sharing-section">
            <v-divider class="sharing-divider"></v-divider>

            <div class="sharing-content">
              <div class="sharing-info">
                <h4 class="sharing-title">Compartilhe este artigo</h4>
                <p class="sharing-subtitle">Ajude outros a descobrirem este conteúdo</p>
              </div>

              <div class="social-buttons">
                <v-btn
                  icon
                  variant="outlined"
                  color="primary"
                  @click="shareOnSocial('facebook')"
                  class="social-btn"
                  size="large"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  color="primary"
                  @click="shareOnSocial('twitter')"
                  class="social-btn"
                  size="large"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  color="primary"
                  @click="shareOnSocial('linkedin')"
                  class="social-btn"
                  size="large"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="outlined"
                  color="primary"
                  @click="shareOnSocial('whatsapp')"
                  class="social-btn"
                  size="large"
                >
                  <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
              </div>
            </div>

            <div class="contact-section">
              <v-btn
                color="primary"
                variant="elevated"
                @click="contactAuthor"
                class="contact-author-btn"
                size="large"
              >
                <v-icon start>mdi-email</v-icon>
                Contatar Autor
              </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedTag = ref('')
const currentPage = ref(1)
const showPostModal = ref(false)
interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  category: { name: string; color: string }
  tags: string[]
  author: {
    name: string
    title: string
    icon: string
  }
  date: string
  image: string
  featured: boolean
  sections?: Array<{
    title: string
    content: string
  }>
  conclusion?: string
}

const selectedPost = ref<Post | null>(null)
const newsletterEmail = ref('')
const newsletterLoading = ref(false)

const posts = [
  {
    id: 1,
    title: 'O Futuro do Geoprocessamento com IA',
    excerpt:
      'Como a inteligência artificial está revolucionando o geoprocessamento e análise geoespacial.',
    content:
      'A inteligência artificial está transformando radicalmente o campo do geoprocessamento. Com algoritmos avançados de machine learning, conseguimos processar grandes volumes de dados geoespaciais de forma mais eficiente e precisa do que nunca.',
    category: { name: 'Tecnologia', color: 'primary' },
    tags: ['IA', 'Machine Learning', 'Geoprocessamento', 'Inovação'],
    author: {
      name: 'Dr. Carlos Silva',
      title: 'Diretor Técnico',
      icon: 'mdi-account-tie',
    },
    date: '2024-01-15',
    image: '/api/placeholder/400/200',
    featured: true,
    sections: [
      {
        title: 'Machine Learning em Análise Espacial',
        content:
          'Os algoritmos de machine learning estão sendo aplicados com sucesso em análise espacial, permitindo a identificação de padrões complexos em dados geoespaciais.',
      },
      {
        title: 'Automação de Processos',
        content:
          'A automação de processos de geoprocessamento está aumentando significativamente a produtividade e reduzindo erros humanos.',
      },
    ],
    conclusion:
      'O futuro do geoprocessamento está intimamente ligado ao desenvolvimento de tecnologias de IA. As empresas que se adaptarem a essas mudanças terão uma vantagem competitiva significativa.',
  },
  {
    id: 2,
    title: 'Sistemas SIG na Gestão Municipal',
    excerpt:
      'Como os Sistemas de Informação Geográfica estão melhorando a gestão de cidades inteligentes.',
    content:
      'Os Sistemas de Informação Geográfica (SIG) estão se tornando essenciais para a gestão municipal moderna. Eles permitem uma visão integrada de todos os aspectos da cidade.',
    category: { name: 'Gestão Pública', color: 'success' },
    tags: ['SIG', 'Gestão Municipal', 'Cidades Inteligentes'],
    author: {
      name: 'Dra. Ana Santos',
      title: 'Coordenadora de Projetos',
      icon: 'mdi-account-tie-woman',
    },
    date: '2024-01-10',
    image: '/api/placeholder/400/200',
    featured: true,
    sections: [
      {
        title: 'Benefícios para a Gestão Municipal',
        content:
          'Os SIGs oferecem múltiplos benefícios para a gestão municipal, incluindo melhor planejamento urbano e otimização de recursos.',
      },
    ],
    conclusion:
      'A implementação de SIGs na gestão municipal é um investimento que se paga rapidamente através da melhoria na eficiência e qualidade dos serviços públicos.',
  },
  {
    id: 3,
    title: 'Agricultura de Precisão no Brasil',
    excerpt: 'Tecnologias geoespaciais estão revolucionando a agricultura brasileira.',
    content:
      'A agricultura de precisão está transformando a forma como cultivamos no Brasil. Com tecnologias geoespaciais, conseguimos otimizar cada metro quadrado de terra.',
    category: { name: 'Agricultura', color: 'info' },
    tags: ['Agricultura de Precisão', 'Tecnologia', 'Sustentabilidade'],
    author: {
      name: 'Eng. Roberto Lima',
      title: 'Desenvolvedor SIG',
      icon: 'mdi-account-cog',
    },
    date: '2024-01-05',
    image: '/api/placeholder/400/200',
    featured: false,
    conclusion:
      'A agricultura de precisão representa o futuro da agricultura sustentável no Brasil.',
  },
  {
    id: 4,
    title: 'Monitoramento Ambiental com Drones',
    excerpt: 'Como os drones estão revolucionando o monitoramento ambiental.',
    content:
      'Os drones estão se tornando ferramentas essenciais para o monitoramento ambiental, oferecendo uma perspectiva única e detalhada de áreas de difícil acesso.',
    category: { name: 'Meio Ambiente', color: 'warning' },
    tags: ['Drones', 'Monitoramento', 'Meio Ambiente'],
    author: {
      name: 'Tec. Maria Costa',
      title: 'Analista de Dados',
      icon: 'mdi-account-search',
    },
    date: '2023-12-28',
    image: '/api/placeholder/400/200',
    featured: false,
    conclusion:
      'A combinação de drones com tecnologias geoespaciais está criando novas possibilidades para o monitoramento ambiental.',
  },
  {
    id: 5,
    title: 'Big Data em Geoprocessamento',
    excerpt: 'Como o Big Data está transformando a análise geoespacial.',
    content:
      'O Big Data está revolucionando o geoprocessamento, permitindo análises mais complexas e insights mais profundos.',
    category: { name: 'Tecnologia', color: 'primary' },
    tags: ['Big Data', 'Análise', 'Tecnologia'],
    author: {
      name: 'Eng. Lucas Mendes',
      title: 'Desenvolvedor Full Stack',
      icon: 'mdi-account-code',
    },
    date: '2023-12-20',
    image: '/api/placeholder/400/200',
    featured: false,
    conclusion: 'O Big Data está redefinindo os limites do que é possível em geoprocessamento.',
  },
  {
    id: 6,
    title: 'Sustentabilidade e Geoprocessamento',
    excerpt: 'Como o geoprocessamento contribui para a sustentabilidade ambiental.',
    content:
      'O geoprocessamento está se tornando uma ferramenta essencial para promover a sustentabilidade ambiental.',
    category: { name: 'Sustentabilidade', color: 'success' },
    tags: ['Sustentabilidade', 'Meio Ambiente', 'Conservação'],
    author: {
      name: 'Tec. Fernanda Rocha',
      title: 'Analista Ambiental',
      icon: 'mdi-account-leaf',
    },
    date: '2023-12-15',
    image: '/api/placeholder/400/200',
    featured: false,
    conclusion:
      'A integração de geoprocessamento com práticas sustentáveis é fundamental para o futuro do planeta.',
  },
]

const categories = computed(() => {
  const uniqueCategories = [...new Set(posts.map((p) => p.category.name))]
  return uniqueCategories
})

const tags = computed(() => {
  const allTags = posts.flatMap((p) => p.tags)
  const uniqueTags = [...new Set(allTags)]
  return uniqueTags
})

const featuredPosts = computed(() => {
  return posts.filter((post) => post.featured)
})

const filteredPosts = computed(() => {
  let filtered = posts

  if (searchQuery.value) {
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter((post) => post.category.name === selectedCategory.value)
  }

  if (selectedTag.value) {
    filtered = filtered.filter((post) => post.tags.includes(selectedTag.value))
  }

  return filtered
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * 6
  const end = start + 6
  return filteredPosts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / 6)
})

const uniqueAuthors = computed(() => {
  const authors = new Set(posts.map((post) => post.author.name))
  return authors.size
})

const emailRules = [
  (v: string) => !!v || 'E-mail é obrigatório',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
]

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

onMounted(() => {
  // Adicionar listener para tecla Escape
  document.addEventListener('keydown', handleKeydown)

  if (mapContainer.value) {
    // Inicializar mapa focado na região do Brasil
    map = L.map(mapContainer.value, {
      center: [-15.6014, -47.7308], // Centro do Brasil (Brasília)
      zoom: 5,
      zoomControl: false,
      attributionControl: false,
      minZoom: 4,
      maxZoom: 10,
    })

    // Adicionar tile layer com estilo mais imponente (Satellite)
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '© Esri',
        maxZoom: 10,
      },
    ).addTo(map)

    // Adicionar tile layer de estradas para contexto
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '© Esri',
        maxZoom: 10,
        opacity: 0.3,
      },
    ).addTo(map)

    // Projetos em todo o Brasil para mostrar abrangência nacional
    const projects = [
      {
        lat: -15.6014,
        lng: -47.7308,
        title: 'Brasília - Capital Federal',
        type: 'capital',
        size: 'large',
      },
      {
        lat: -23.5505,
        lng: -46.6333,
        title: 'São Paulo - SP',
        type: 'metropolis',
        size: 'large',
      },
      {
        lat: -22.9068,
        lng: -43.1729,
        title: 'Rio de Janeiro - RJ',
        type: 'metropolis',
        size: 'large',
      },
      {
        lat: -12.9716,
        lng: -38.5011,
        title: 'Salvador - BA',
        type: 'capital',
        size: 'medium',
      },
      {
        lat: -3.119,
        lng: -60.0217,
        title: 'Manaus - AM',
        type: 'capital',
        size: 'medium',
      },
      {
        lat: -30.0346,
        lng: -51.2177,
        title: 'Porto Alegre - RS',
        type: 'capital',
        size: 'medium',
      },
      {
        lat: -16.6864,
        lng: -49.2653,
        title: 'Goiânia - GO',
        type: 'capital',
        size: 'medium',
      },
    ]

    // Adicionar marcadores dos projetos
    projects.forEach((project) => {
      const markerColor = project.type === 'capital' ? '#0B5FA5' : '#1FA7A1'
      const markerSize = project.size === 'large' ? 12 : 8

      const marker = L.circleMarker([project.lat, project.lng], {
        radius: markerSize,
        fillColor: markerColor,
        color: '#FFFFFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      })

      if (map) {
        marker.addTo(map)
      }

      // Tooltip com informações do projeto
      marker.bindTooltip(
        `<div class="project-tooltip">
           <strong>${project.title}</strong><br>
           <small>Projeto GeoQuantum</small>
         </div>`,
        {
          permanent: false,
          direction: 'top',
          className: 'custom-tooltip',
        },
      )
    })

    // Ajustar o mapa para mostrar todos os marcadores
    if (map) {
      const bounds = L.latLngBounds(projects.map((p) => [p.lat, p.lng]))
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }
})

onUnmounted(() => {
  // Remover listener para tecla Escape
  document.removeEventListener('keydown', handleKeydown)

  if (map) {
    map.remove()
    map = null
  }
})

const filterPosts = () => {
  currentPage.value = 1
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedTag.value = ''
  currentPage.value = 1
}

const readPost = (post: any) => {
  selectedPost.value = post
  showPostModal.value = true
}

const closePostModal = () => {
  showPostModal.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && showPostModal.value) {
    closePostModal()
  }
}

const sharePost = () => {
  // Implementar compartilhamento
  console.log('Compartilhar post:', selectedPost.value?.title)
}

const shareOnSocial = (platform: string) => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(selectedPost.value?.title || '')

  let shareUrl = ''
  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
      break
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
      break
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      break
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${title} ${url}`
      break
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank')
  }
}

const contactAuthor = () => {
  closePostModal()
  router.push({
    path: '/contato',
    query: { author: selectedPost.value?.author.name },
  })
}

const subscribeNewsletter = async () => {
  newsletterLoading.value = true

  try {
    // Simular inscrição
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mostrar sucesso
    console.log('Inscrito com sucesso:', newsletterEmail.value)
    newsletterEmail.value = ''
  } catch (error) {
    console.error('Erro na inscrição:', error)
  } finally {
    newsletterLoading.value = false
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
}

.max-width-600 {
  max-width: 600px;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 450px;
  overflow: hidden;
}

.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.88) 0%, rgba(45, 90, 135, 0.88) 100%);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 2rem 0;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-badge i {
  font-size: 20px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.4);
}

.stat-item i {
  font-size: 28px;
  color: white;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.featured-post-card,
.post-card {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(26, 54, 93, 0.08);
  box-shadow:
    0 4px 20px rgba(26, 54, 93, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
}

.featured-post-card::before,
.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a365d 0%, #2d5a87 50%, #1fa7a1 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

.featured-post-card:hover::before,
.post-card:hover::before {
  transform: scaleX(1);
}

.featured-post-card:hover,
.post-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(26, 54, 93, 0.2);
  box-shadow:
    0 20px 40px rgba(26, 54, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
}

.post-image {
  position: relative;
}

.post-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.post-date {
  background: #1a365d;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(26, 54, 93, 0.2);
}

.category-chip {
  margin: 0;
}

/* Reset filters button */
:deep(.reset-filters-btn) {
  background-color: #1a365d !important;
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.reset-filters-btn:hover) {
  background-color: #2d5a87 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
}

/* CTA section */
.cta-section {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%) !important;
}

/* Newsletter section */
.newsletter-section {
  background: #f8f9fa;
}

/* Post Modal Styles */
.post-modal {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(26, 54, 93, 0.25);
}

/* Modal Header */
.modal-header {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  padding: 24px;
}

.modal-header-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.close-btn {
  color: white !important;
  margin-top: 4px;
}

.modal-title-container {
  flex: 1;
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.3;
  color: white;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.category-chip-modal {
  margin: 0;
}

.post-date-modal {
  font-size: 0.875rem;
  opacity: 0.9;
}

.modal-hint {
  margin-top: 8px;
  opacity: 0.7;
  font-style: italic;
}

.share-btn {
  color: white !important;
  margin-top: 4px;
}

/* Modal Image */
.modal-image-container {
  position: relative;
}

.modal-cover-image {
  width: 100%;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(26, 54, 93, 0.8));
  padding: 40px 24px 24px;
}

.image-overlay-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.author-details {
  color: white;
}

.author-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: white;
}

.author-title {
  font-size: 0.875rem;
  opacity: 0.9;
  margin: 0;
  color: white;
}

/* Modal Content */
.modal-content {
  padding: 32px;
  background: white;
}

.tags-section {
  margin-bottom: 32px;
}

.tag-chip-modal {
  border-color: #1a365d !important;
  color: #1a365d !important;
}

.tag-chip-modal:hover {
  background-color: rgba(26, 54, 93, 0.1) !important;
}

/* Post Content */
.post-content-modal {
  margin-bottom: 40px;
}

.content-intro {
  margin-bottom: 32px;
}

.intro-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e2f2ff 100%);
  border-radius: 16px;
  border: 1px solid rgba(26, 54, 93, 0.1);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
}

.intro-icon {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
  flex-shrink: 0;
}

.intro-content {
  flex: 1;
}

.intro-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 12px 0;
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #1a202c;
  margin: 0;
}

.content-sections {
  margin-bottom: 32px;
}

.content-section {
  margin-bottom: 24px;
}

.section-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(26, 54, 93, 0.1);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  transition: all 0.3s ease;
}

.section-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(26, 54, 93, 0.15);
  border-color: rgba(26, 54, 93, 0.2);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #e2f2ff 0%, #f0f8ff 100%);
  border-bottom: 1px solid rgba(26, 54, 93, 0.1);
}

.section-number {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  color: white;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
  flex-shrink: 0;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a365d;
  margin: 0;
}

.section-content-wrapper {
  padding: 24px;
}

.section-content {
  font-size: 1rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
}

.content-conclusion {
  margin-bottom: 32px;
}

.conclusion-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(26, 54, 93, 0.1);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  transition: all 0.3s ease;
}

.conclusion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(26, 54, 93, 0.15);
  border-color: rgba(26, 54, 93, 0.2);
}

.conclusion-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #e2f2ff 0%, #f0f8ff 100%);
  border-bottom: 1px solid rgba(26, 54, 93, 0.1);
}

.conclusion-icon {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
  flex-shrink: 0;
}

.conclusion-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a365d;
  margin: 0;
}

.conclusion-content-wrapper {
  padding: 24px;
}

.conclusion-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
}

.content-separator {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
}

.content-divider {
  flex: 1;
  border-color: rgba(26, 54, 93, 0.1);
}

.separator-icon {
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
  flex-shrink: 0;
}

/* Sharing Section */
.sharing-section {
  background: #f8f9fa;
  margin: 0 -32px -32px -32px;
  padding: 32px;
  border-radius: 16px 16px 0 0;
}

.sharing-divider {
  margin-bottom: 24px;
  border-color: rgba(26, 54, 93, 0.1);
}

.sharing-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 20px;
}

.sharing-info {
  flex: 1;
  min-width: 250px;
}

.sharing-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px 0;
}

.sharing-subtitle {
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
}

.social-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-btn {
  border-color: #1a365d !important;
  color: #1a365d !important;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background-color: #1a365d !important;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
}

.contact-section {
  text-align: center;
}

.contact-author-btn {
  background-color: #1a365d !important;
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-author-btn:hover {
  background-color: #2d5a87 !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(26, 54, 93, 0.3);
}

/* Responsive Modal */
@media (max-width: 768px) {
  .modal-header {
    padding: 20px;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-content {
    padding: 24px;
  }

  .sharing-section {
    margin: 0 -24px -24px -24px;
    padding: 24px;
  }

  .sharing-content {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }

  .social-buttons {
    justify-content: center;
    width: 100%;
  }

  .image-overlay {
    padding: 24px 20px 20px;
  }

  .author-info {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  /* Content Responsiveness */
  .intro-container {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 20px;
  }

  .intro-icon {
    align-self: center;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
    padding: 16px 20px;
  }

  .section-number {
    align-self: center;
  }

  .conclusion-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
    padding: 16px 20px;
  }

  .conclusion-icon {
    align-self: center;
  }

  .section-content-wrapper,
  .conclusion-content-wrapper {
    padding: 20px;
  }

  .content-separator {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .separator-icon {
    align-self: center;
  }
}

/* Filters section */
.filters-section {
  background: #f8f9fa;
}

:deep(.search-input .v-field),
:deep(.category-select .v-field),
:deep(.tag-select .v-field) {
  border-color: rgba(26, 54, 93, 0.2) !important;
}

:deep(.search-input .v-field:hover),
:deep(.category-select .v-field:hover),
:deep(.tag-select .v-field:hover) {
  border-color: rgba(26, 54, 93, 0.4) !important;
}

:deep(.search-input .v-field--focused),
:deep(.category-select .v-field--focused),
:deep(.tag-select .v-field--focused) {
  border-color: #1a365d !important;
}

:deep(.newsletter-btn) {
  background-color: #1a365d !important;
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

:deep(.newsletter-btn:hover) {
  background-color: #2d5a87 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.2);
}

.post-content {
  line-height: 1.6;
}

.h-100 {
  height: 100%;
}

.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
}

.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.85) 0%, rgba(45, 90, 135, 0.85) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.border-white {
  border-color: white !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .hero-overlay {
    padding: 2rem 1rem;
  }

  .text-h2 {
    font-size: 2rem;
  }

  .text-h6 {
    font-size: 1rem;
  }

  .hero-section,
  .filters-section,
  .featured-posts,
  .posts-section,
  .newsletter-section,
  .cta-section {
    padding: 3rem 0;
  }
}
</style>
