// @ts-ignore
import type { CSSProperties } from "react";

export interface Styles {
    shell: CSSProperties;
    headerBar: CSSProperties;
    container: CSSProperties;
    section: CSSProperties;
    grid: CSSProperties;
    cardImage: CSSProperties;
    footer: CSSProperties;
}

/* 🎨 LIGHT THEME */
// @ts-ignore
export const stylesLight: Styles = {
    shell: { minHeight: "100vh", backgroundColor: "var(--surface-bg, #F7F9FC)", color: "var(--text-color, #000)" },
    headerBar: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        paddingInline: 16,
        background: "var(--header-bg, #FFFFFF)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        color: "var(--text-color, #000)",
    },
    container: { maxWidth: 1200, margin: "0 auto", paddingInline: 16 },
    section: { padding: "var(--section-pad, 72px 0)", borderTop: "1px solid var(--border-color, #E5E7EB)" },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
        gap: 16,
    },
    cardImage: { height: 160, objectFit: "cover" },
    footer: {
        borderTop: "1px solid var(--border-strong, #0048BA)",
        paddingBlock: 24,
        textAlign: "center",
        background: "#FFFFFF",
    },
};

/* 🌙 DARK THEME */
export const stylesDark: Styles = {
    shell: { minHeight: "100vh", backgroundColor: "var(--surface-bg, #0F172A)", color: "var(--text-color, #E5E7EB)" },
    headerBar: {
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        paddingInline: 16,
        background: "var(--header-bg, #0F172A)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
        color: "var(--text-color, #E5E7EB)",
    },
    container: { maxWidth: 1200, margin: "0 auto", paddingInline: 16 },
    section: { padding: "var(--section-pad, 72px 0)", borderTop: "1px solid var(--border-color, #1F2937)" },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
        gap: 16,
    },
    cardImage: { height: 160, objectFit: "cover" },
    footer: {
        borderTop: "1px solid var(--border-strong, #7C3AED)",
        paddingBlock: 24,
        textAlign: "center",
        background: "#0B1220",
    },
};

export const styles = stylesLight;
