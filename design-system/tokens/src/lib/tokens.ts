export const tokens = {
  color: {
    brand: {
      50: "#eef6ff",
      500: "#2563eb",
      600: "#1d4ed8",
    },
    neutral: {
      0: "#ffffff",
      900: "#0b1220",
    },
    danger: {
      500: "#ef4444",
    },
  },
  space: { 1: "4px", 2: "8px", 3: "12px", 4: "16px", 5: "20px"},
  radius: { sm: "6px", md: "10px", lg: "14px"},
  font: {
    family: { sans: "Inter, system-ui, Arial"},
    size: { sm: "14px", md: "16px", lg: "18px", xl: "24px"},
    weight: { regular: 400, medium: 500, bold: 700},
  },
} as const;
