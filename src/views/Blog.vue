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
              <h1 class="text-h2 text-h3-sm font-weight-bold text-white mb-4 text-shadow">Blog</h1>
              <p class="text-h6 text-grey-lighten-2 mb-6">
                Fique por dentro das últimas novidades em geoprocessamento e tecnologia geoespacial.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Filtros e Busca -->
    <section class="filters-section py-8 bg-grey-lighten-4">
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
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-btn color="primary" variant="elevated" @click="resetFilters" block> Limpar </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Posts em Destaque -->
    <section class="featured-posts py-16" v-if="featuredPosts.length > 0">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold text-primary mb-4">Artigos em Destaque</h2>
          <p class="text-h6 text-grey-darken-1">
            Os artigos mais populares e relevantes sobre geoprocessamento.
          </p>
        </div>

        <v-row>
          <v-col v-for="post in featuredPosts" :key="post.id" cols="12" md="6" lg="4" class="mb-6">
            <v-card class="featured-post-card h-100" elevation="4">
              <v-img :src="post.image" height="200" cover class="post-image">
                <div class="post-overlay">
                  <v-chip :color="post.category.color" size="small" class="mb-2">
                    {{ post.category.name }}
                  </v-chip>
                  <div class="post-date">{{ formatDate(post.date) }}</div>
                </div>
              </v-img>

              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold mb-2">
                  {{ post.title }}
                </v-card-title>
                <v-card-text class="text-body-2 text-grey-darken-1 mb-3">
                  {{ post.excerpt }}
                </v-card-text>

                <div class="d-flex flex-wrap gap-1 mb-3">
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
                  <v-chip :color="post.category.color" size="small" class="mb-2">
                    {{ post.category.name }}
                  </v-chip>
                  <div class="post-date">{{ formatDate(post.date) }}</div>
                </div>
              </v-img>

              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold mb-2">
                  {{ post.title }}
                </v-card-title>
                <v-card-text class="text-body-2 text-grey-darken-1 mb-3">
                  {{ post.excerpt }}
                </v-card-text>

                <div class="d-flex flex-wrap gap-1 mb-3">
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
    <section class="newsletter-section py-16 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" class="mx-auto">
            <h2 class="text-h3 font-weight-bold text-primary mb-4">Fique por Dentro</h2>
            <p class="text-h6 text-grey-darken-1 mb-6">
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

    <!-- Modal de Leitura do Post -->
    <v-dialog v-model="showPostModal" max-width="900" fullscreen>
      <v-card v-if="selectedPost">
        <v-toolbar color="primary" dark>
          <v-btn icon @click="showPostModal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ selectedPost.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="sharePost">
            <v-icon>mdi-share</v-icon>
          </v-btn>
        </v-toolbar>

        <v-img :src="selectedPost.image" height="300" cover></v-img>

        <v-card-text class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-chip :color="selectedPost.category.color" class="me-3">
              {{ selectedPost.category.name }}
            </v-chip>
            <span class="text-body-2 text-grey">{{ formatDate(selectedPost.date) }}</span>
          </div>

          <div class="d-flex align-center mb-4">
            <v-avatar size="32" color="primary" class="me-3">
              <v-icon size="20" color="white">{{ selectedPost.author.icon }}</v-icon>
            </v-avatar>
            <div>
              <div class="text-body-1 font-weight-bold">{{ selectedPost.author.name }}</div>
              <div class="text-body-2 text-grey">{{ selectedPost.author.title }}</div>
            </div>
          </div>

          <div class="mb-4">
            <div class="d-flex flex-wrap gap-1">
              <v-chip
                v-for="tag in selectedPost.tags"
                :key="tag"
                size="small"
                color="primary"
                variant="outlined"
              >
                {{ tag }}
              </v-chip>
            </div>
          </div>

          <div class="post-content text-body-1">
            <p class="mb-4">{{ selectedPost.content }}</p>

            <div v-if="selectedPost.sections" class="mb-4">
              <div v-for="section in selectedPost.sections" :key="section.title" class="mb-4">
                <h3 class="text-h6 font-weight-bold mb-2">{{ section.title }}</h3>
                <p>{{ section.content }}</p>
              </div>
            </div>

            <div v-if="selectedPost.conclusion" class="mb-4">
              <h3 class="text-h6 font-weight-bold mb-2">Conclusão</h3>
              <p>{{ selectedPost.conclusion }}</p>
            </div>
          </div>

          <v-divider class="my-6"></v-divider>

          <div class="d-flex justify-space-between align-center">
            <div>
              <h4 class="text-h6 font-weight-bold mb-2">Compartilhe este artigo:</h4>
              <div class="d-flex gap-2">
                <v-btn icon variant="outlined" color="primary" @click="shareOnSocial('facebook')">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon variant="outlined" color="primary" @click="shareOnSocial('twitter')">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon variant="outlined" color="primary" @click="shareOnSocial('linkedin')">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </div>
            </div>

            <v-btn color="primary" variant="elevated" @click="contactAuthor">
              Contatar Autor
            </v-btn>
          </div>
        </v-card-text>
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

const emailRules = [
  (v: string) => !!v || 'E-mail é obrigatório',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
]

const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

onMounted(() => {
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
        lat: -3.1190,
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
      const bounds = L.latLngBounds(projects.map(p => [p.lat, p.lng]))
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }
})

onUnmounted(() => {
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
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank')
  }
}

const contactAuthor = () => {
  showPostModal.value = false
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

.bg-gradient-primary {
  background: linear-gradient(135deg, #0b5fa5 0%, #1fa7a1 100%);
}

.featured-post-card,
.post-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featured-post-card:hover,
.post-card:hover {
  transform: translateY(-4px);
}

.post-image {
  position: relative;
}

.post-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
}

.post-date {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
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
  background: linear-gradient(135deg, rgba(11, 95, 165, 0.85) 0%, rgba(31, 167, 161, 0.85) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section,
  .filters-section,
  .featured-posts,
  .posts-section,
  .newsletter-section {
    padding: 3rem 0;
  }
}
</style>
