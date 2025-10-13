<template>
  <section class="blog-preview">
    <v-container class="mobile-padding">
      <div class="section-header">
        <div class="header-content">
          <h2 class="section-title">{{ title }}</h2>
          <p class="section-subtitle">{{ subtitle }}</p>
        </div>
        <router-link to="/blog" class="btn-view-all">
          <span>Ver Todos os Artigos</span>
          <i class="mdi mdi-arrow-right"></i>
        </router-link>
      </div>

      <div class="articles-grid">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="article-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="article-image">
            <img :src="article.image" :alt="article.title" loading="lazy" />
            <div class="article-category">{{ article.category }}</div>
          </div>

          <div class="article-content">
            <div class="article-meta">
              <span class="article-date">
                <i class="mdi mdi-calendar"></i>
                {{ article.date }}
              </span>
              <span class="article-reading-time">
                <i class="mdi mdi-clock-outline"></i>
                {{ article.readingTime }}
              </span>
            </div>

            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-excerpt">{{ article.excerpt }}</p>

            <div class="article-footer">
              <div class="article-author">
                <div class="author-avatar">
                  <i class="mdi mdi-account"></i>
                </div>
                <span class="author-name">{{ article.author }}</span>
              </div>

              <button class="btn-read-more" @click="handleReadMore(article)">
                <span>Ler Artigo</span>
                <i class="mdi mdi-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Article {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readingTime: string
  author: string
  link?: string
}

interface Props {
  title?: string
  subtitle?: string
  articles: Article[]
}

withDefaults(defineProps<Props>(), {
  title: 'Últimas do Blog',
  subtitle: 'Insights, tutoriais e novidades sobre geoprocessamento e análise espacial',
})

const handleReadMore = (article: Article) => {
  console.log('Read more:', article.title)
}
</script>

<style scoped>
.blog-preview {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.header-content {
  flex: 1;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #4a5568;
  max-width: 600px;
  line-height: 1.6;
  margin: 0;
}

.btn-view-all {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  border: 2px solid #1a365d;
  color: #1a365d;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-view-all::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.btn-view-all:hover::before {
  transform: scaleX(1);
}

.btn-view-all span,
.btn-view-all i {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn-view-all:hover {
  color: #ffffff;
}

.btn-view-all i {
  transition: transform 0.3s ease, color 0.3s ease;
}

.btn-view-all:hover i {
  transform: translateX(0.25rem);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.article-card {
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.08);
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: var(--delay);
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(26, 54, 93, 0.12);
  border-color: rgba(26, 54, 93, 0.15);
}

.article-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(26, 54, 93, 0.9);
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 0.5rem;
}

.article-content {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.article-date,
.article-reading-time {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.article-date i,
.article-reading-time i {
  font-size: 1rem;
}

.article-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-excerpt {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(26, 54, 93, 0.08);
  gap: 1rem;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.author-avatar {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.1) 0%, rgba(45, 90, 135, 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-avatar i {
  font-size: 1.125rem;
  color: #1a365d;
}

.author-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2e3a47;
}

.btn-read-more {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  color: #1a365d;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.btn-read-more:hover {
  background: rgba(26, 54, 93, 0.05);
}

.btn-read-more i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.btn-read-more:hover i {
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
  .blog-preview {
    padding: 3rem 0;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .btn-view-all {
    width: 100%;
    justify-content: center;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-image {
    height: 200px;
  }

  .article-content {
    padding: 1.5rem;
  }

  .article-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .article-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-read-more {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .article-card {
    animation: none;
  }
}
</style>

