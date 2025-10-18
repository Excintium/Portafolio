// app/theme.tsx
import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

/* =========================================================
   🔵 TEMA CLARO – Azul corporativo (elegante, menos blanco)
   ========================================================= */
export const corporateLightTheme: ThemeConfig = {
    algorithm: antdTheme.defaultAlgorithm,
    token: {
        // 🎨 Colores principales
        colorPrimary: "#0048BA",        // Azul base corporativo
        colorPrimaryHover: "#2F80ED",   // Hover/foco más brillante
        colorLink: "#0048BA",
        colorLinkHover: "#2F80ED",

        // 🖋️ Texto y contraste
        colorTextBase: "#0A2540",       // Texto principal (azul oscuro)
        colorTextSecondary: "#0048BA",  // Enlaces / acentos azules

        // 🧱 Fondos
        colorBgBase: "#E6F0FF",         // Fondo principal azul pastel
        colorBgContainer: "#F5F8FF",    // Tarjetas, secciones internas
        colorBgLayout: "#EBF3FF",       // Fondo de layout general

        // 🪶 Bordes
        colorBorder: "#99BFFF",         // Bordes azul claro
        colorBorderSecondary: "#AFC8FF",

        // 🧩 Sombra y profundidad
        boxShadowSecondary: "0 4px 10px rgba(0,72,186,0.12)",

        // 🔠 Tipografía
        fontFamily: "Inter, system-ui, sans-serif",

        // 🧭 Bordes redondeados
        borderRadius: 12,
    },
};

/* =========================================================
   🌙 TEMA OSCURO – Azul violeta elegante (tecnológico)
   ========================================================= */
export const corporateDarkTheme: ThemeConfig = {
    algorithm: antdTheme.darkAlgorithm,
    token: {
        // 🎨 Colores principales
        colorPrimary: "#7C3AED",        // Violeta principal (profesional)
        colorPrimaryHover: "#9F67FF",   // Hover/foco
        colorLink: "#A78BFA",           // Enlaces claros
        colorLinkHover: "#C4B5FD",

        // 🖋️ Texto y contraste
        colorTextBase: "#E5E7EB",       // Texto base claro
        colorTextSecondary: "#C7CBD1",  // Texto suave

        // 🧱 Fondos
        colorBgBase: "#0F172A",         // Fondo principal (slate-900)
        colorBgContainer: "#1E293B",    // Paneles / tarjetas
        colorBgLayout: "#111827",       // Layout general

        // 🪶 Bordes
        colorBorder: "#7C3AED",         // Bordes principales
        colorBorderSecondary: "#4C1D95",

        // 🧩 Sombra y profundidad
        boxShadowSecondary: "0 4px 10px rgba(124,58,237,0.25)",

        // 🔠 Tipografía
        fontFamily: "Inter, system-ui, sans-serif",

        // 🧭 Bordes redondeados
        borderRadius: 12,
    },
};
