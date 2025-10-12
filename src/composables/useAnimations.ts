import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  const isVisible = ref(false)
  const animationObserver = ref<IntersectionObserver | null>(null)

  const initScrollAnimations = () => {
    // Configurar Intersection Observer para animações de scroll
    animationObserver.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement

            // Adicionar classes de animação baseadas no data-attribute
            const animationType = element.dataset.animation || 'fade-in-up'
            const delay = element.dataset.delay || '0'

            element.style.animationDelay = `${delay}ms`
            element.classList.add(`animate-${animationType}`)
            element.classList.add('revealed')

            // Parar de observar o elemento após a animação
            animationObserver.value?.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    // Observar todos os elementos com a classe scroll-reveal
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((element) => {
      animationObserver.value?.observe(element)
    })
  }

  const addStaggeredAnimation = (selector: string, baseDelay: number = 100) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.animationDelay = `${index * baseDelay}ms`
    })
  }

  const addParallaxEffect = () => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax-element')

      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement
        const speed = parseFloat(htmlElement.dataset.speed || '0.5')
        const yPos = -(scrolled * speed)
        htmlElement.style.setProperty('--scroll-offset', `${yPos}px`)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }

  const triggerRippleEffect = (event: MouseEvent, element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
      pointer-events: none;
    `

    element.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  onMounted(() => {
    // Pequeno delay para garantir que o DOM esteja totalmente carregado
    setTimeout(() => {
      initScrollAnimations()
      addParallaxEffect()
    }, 100)
  })

  onUnmounted(() => {
    if (animationObserver.value) {
      animationObserver.value.disconnect()
    }
  })

  return {
    isVisible,
    initScrollAnimations,
    addStaggeredAnimation,
    addParallaxEffect,
    triggerRippleEffect,
  }
}

export function useHoverAnimations() {
  const addHoverEffect = (element: HTMLElement, effect: string) => {
    element.classList.add(`hover-${effect}`)
  }

  const addGlowEffect = (element: HTMLElement) => {
    element.classList.add('hover-glow')
  }

  const addLiftEffect = (element: HTMLElement) => {
    element.classList.add('hover-lift')
  }

  const addShimmerEffect = (element: HTMLElement) => {
    element.classList.add('hover-shimmer')
  }

  return {
    addHoverEffect,
    addGlowEffect,
    addLiftEffect,
    addShimmerEffect,
  }
}

export function useLoadingAnimations() {
  const showSkeleton = (element: HTMLElement) => {
    element.classList.add('loading-skeleton')
  }

  const hideSkeleton = (element: HTMLElement) => {
    element.classList.remove('loading-skeleton')
  }

  const createPulsingLoader = () => {
    const loader = document.createElement('div')
    loader.className = 'animate-pulse'
    loader.style.cssText = `
      width: 100%;
      height: 20px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      border-radius: 4px;
      animation: shimmer 1.5s infinite;
    `
    return loader
  }

  return {
    showSkeleton,
    hideSkeleton,
    createPulsingLoader,
  }
}

// Utility functions
export const animationUtils = {
  // Adicionar delay escalonado a uma lista de elementos
  staggerElements: (elements: NodeListOf<Element> | Element[], delay: number = 100) => {
    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.animationDelay = `${index * delay}ms`
    })
  },

  // Animar números (counter animation)
  animateCounter: (element: HTMLElement, start: number, end: number, duration: number = 2000) => {
    const startTime = performance.now()

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * easedProgress)

      element.textContent = current.toString()

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  },

  // Adicionar efeito de typing
  typeWriter: (element: HTMLElement, text: string, speed: number = 50) => {
    element.textContent = ''
    let i = 0

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, speed)

    return typeInterval
  },
}
