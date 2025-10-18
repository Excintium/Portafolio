import { Layout, Typography, ConfigProvider, theme as antdTheme } from "antd";
import { HeaderBar } from "components/molecules/headerBar";
import { corporateLightTheme, corporateDarkTheme } from "app/theme";
import { stylesLight, stylesDark } from "app/styles";
import { useState } from "react";

const { Content, Footer } = Layout;

export interface HomeLayoutProps { children: React.ReactNode; }

function ThemedWrapper({
                           children, styles, dark, setDark,
                       }: {
    children: React.ReactNode;
    styles: any;
    dark: boolean;
    setDark: (v: boolean) => void;
}) {
    const { token } = antdTheme.useToken();

    return (
        <div
            style={
                {
                    "--border-color": token.colorBorder,
                    "--border-strong": token.colorPrimary,
                    "--surface-bg": token.colorBgBase,
                    "--text-color": token.colorTextBase,
                    // Fondo del header (antes era un rgba fijo). Puedes cambiarlo por colorBgElevated si prefieres.
                    "--header-bg": token.colorBgBase,
                    "--section-pad": "clamp(48px, 6vw, 72px)",
                } as React.CSSProperties
            }
        >
            <Layout style={{ ...styles.shell, margin: 0, padding: 0 }}>
                <HeaderBar dark={dark} onToggleDark={setDark} />
                <Content>{children}</Content>
                <Footer style={styles.footer}>
                    <Typography.Text>
                        © {new Date().getFullYear()} Nicolás Fonseca — Todos los derechos reservados.
                    </Typography.Text>
                </Footer>
            </Layout>
        </div>
    );
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    const [dark, setDark] = useState<boolean>(false);
    const theme = dark ? corporateDarkTheme : corporateLightTheme;
    const s = dark ? stylesDark : stylesLight;

    return (
        <ConfigProvider theme={theme}>
            <ThemedWrapper styles={s} dark={dark} setDark={setDark}>
                {children}
            </ThemedWrapper>
        </ConfigProvider>
    );
}
