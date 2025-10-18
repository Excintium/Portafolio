import { useState } from "react";
import { Button, Space, Switch, Drawer, Grid, Typography } from "antd";
import {
    MenuOutlined,
    GithubOutlined,
    LinkedinFilled,
    FileTextOutlined,
} from "@ant-design/icons";
import { styles } from "app/styles";

export interface HeaderBarProps {
    dark: boolean;
    onToggleDark: (val: boolean) => void;
}

export function HeaderBar({ dark, onToggleDark }: HeaderBarProps) {
    const [open, setOpen] = useState(false);
    const screens = Grid.useBreakpoint();
    const isMobile = !screens.md;

    const navLinks = (
        <Space size={[16, 12]} wrap>
            <a className="site-nav-link" href="#inicio">Inicio</a>
            <a className="site-nav-link" href="#proyectos">Proyectos</a>
            <a className="site-nav-link" href="#experiencia">Experiencia</a>
            <a className="site-nav-link" href="#educacion">Educación</a>
            <a className="site-nav-link" href="#contacto">Contacto</a>
        </Space>
    );

    const actionButtons = (
        <Space size={[8, 8]} wrap>
            <Switch
                checked={dark}
                onChange={onToggleDark}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
                className="theme-switch"
                aria-label="Cambiar tema"
            />

            <Button
                size="middle"
                icon={<FileTextOutlined />}
                href="/cv.pdf"
                target="_blank"
                className="site-action"
            >
                Currículum
            </Button>

            {/* GitHub – visible en dark y con brand en hover */}
            <Button
                size="middle"
                icon={<GithubOutlined className="brand-icon brand-icon--github" />}
                href="https://github.com/Excintium"
                target="_blank"
                className="site-action site-action--github"
                aria-label="GitHub"
            >
                GitHub
            </Button>

            {/* LinkedIn – azul oficial + animación */}
            <Button
                size="middle"
                icon={<LinkedinFilled className="brand-icon brand-icon--linkedin" />}
                href="https://www.linkedin.com/in/nicolas-fonseca-olivares/"
                target="_blank"
                className="site-action site-action--linkedin"
                aria-label="LinkedIn"
            >
                LinkedIn
            </Button>
        </Space>
    );

    return (
        <header className="site-header" style={{ ...styles.headerBar, margin: 0, padding: 0 }}>
            <div
                className="container"
                style={{
                    ...styles.container,
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                }}
            >
                {/* IZQUIERDA: Logo con animación */}
                <a
                    href="#inicio"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                        color: "inherit",
                        position: "relative",
                    }}
                    aria-label="Ir al inicio"
                >
                    <span className="brand-logo" aria-label="Excintium">Excintium</span>
                </a>

                {/* CENTRO: Nav (oculto en móvil) */}
                {!isMobile && (
                    <nav style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        {navLinks}
                    </nav>
                )}

                {/* DERECHA: Acciones / Toggle (desktop) */}
                {!isMobile ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        {actionButtons}
                    </div>
                ) : (
                    <Button
                        aria-label="Abrir menú"
                        icon={<MenuOutlined />}
                        onClick={() => setOpen(true)}
                        className="site-action"
                    />
                )}
            </div>

            {/* Drawer móvil */}
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                placement="right"
                width={320}
                styles={{
                    body: { padding: 16, background: "var(--surface-bg)" },
                    header: { borderBottom: "1px solid var(--border-color)" },
                }}
            >
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography.Text style={{ fontWeight: 600 }}>Tema</Typography.Text>
                        <Switch
                            checked={dark}
                            onChange={onToggleDark}
                            checkedChildren="🌙"
                            unCheckedChildren="☀️"
                            className="theme-switch"
                            aria-label="Cambiar tema"
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        <a className="site-nav-link" href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
                        <a className="site-nav-link" href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
                        <a className="site-nav-link" href="#experiencia" onClick={() => setOpen(false)}>Experiencia</a>
                        <a className="site-nav-link" href="#educacion" onClick={() => setOpen(false)}>Educación</a>
                        <a className="site-nav-link" href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
                    </div>

                    <div style={{ height: 8 }} />

                    {/* Acciones con iconos de marca también en el Drawer */}
                    {actionButtons}
                </Space>
            </Drawer>
        </header>
    );
}
