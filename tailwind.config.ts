module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,css}", // Asegúrate de incluir *.css en el contenido
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#6b7280",
        success: "#10b981",
        danger: "#ef4444",
        warning: "#f59e0b",
        info: "#0ea5e9",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
