export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

export const mediaQueries = {
  xs: `@media (max-width: ${breakpoints.sm - 0.02}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 0.02}px)`,
  md: `@media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 0.02}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 0.02}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,

  // Breakpoints para baixo
  smDown: `@media (max-width: ${breakpoints.md - 0.02}px)`,
  mdDown: `@media (max-width: ${breakpoints.lg - 0.02}px)`,
  lgDown: `@media (max-width: ${breakpoints.xl - 0.02}px)`,

  // Breakpoints para cima
  smUp: `@media (min-width: ${breakpoints.sm}px)`,
  mdUp: `@media (min-width: ${breakpoints.md}px)`,
  lgUp: `@media (min-width: ${breakpoints.lg}px)`,
  xlUp: `@media (min-width: ${breakpoints.xl}px)`,
}

export const deviceTypes = {
  mobile: `@media (max-width: ${breakpoints.md - 0.02}px)`,
  tablet: `@media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 0.02}px)`,
  desktop: `@media (min-width: ${breakpoints.lg}px)`,
  largeDesktop: `@media (min-width: ${breakpoints.xl}px)`,
}

export const orientation = {
  portrait: `@media (orientation: portrait)`,
  landscape: `@media (orientation: landscape)`,
}

export const accessibility = {
  reducedMotion: `@media (prefers-reduced-motion: reduce)`,
  highContrast: `@media (prefers-contrast: high)`,
  darkMode: `@media (prefers-color-scheme: dark)`,
  lightMode: `@media (prefers-color-scheme: light)`,
}

export const display = {
  retina: `@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
  print: `@media print`,
}
