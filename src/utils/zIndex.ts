/**
 * Sistema padronizado de z-index para o projeto GeoQuantum
 *
 * Hierarquia de camadas:
 * - Background: 1-99
 * - Content: 100-999
 * - Header/Navigation: 1000-1999
 * - Modals/Overlays: 2000-2999
 * - Tooltips/Popovers: 3000-3999
 * - Notifications: 4000-4999
 * - Critical/System: 5000+
 */

export const Z_INDEX = {
  // Background layers
  BACKGROUND: 1,
  BACKGROUND_OVERLAY: 2,

  // Content layers
  CONTENT: 100,
  CONTENT_OVERLAY: 200,
  CARD_OVERLAY: 300,

  // Header and navigation
  HEADER: 1000,
  HEADER_DROPDOWN: 1001,
  HEADER_MOBILE_MENU: 1002,

  // Modals and overlays
  MODAL_BACKDROP: 2000,
  MODAL: 2001,
  MODAL_OVERLAY: 2002,

  // Tooltips and popovers
  TOOLTIP: 3000,
  POPOVER: 3001,

  // Notifications
  NOTIFICATION: 4000,
  TOAST: 4001,

  // Critical system elements
  CRITICAL: 5000,
  SYSTEM_ALERT: 5001,
} as const

export type ZIndexKey = keyof typeof Z_INDEX
