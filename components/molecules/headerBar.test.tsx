import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// ====== Mocks compartidos ======
const useBreakpointMock = vi.fn().mockReturnValue({ md: true }); // desktop por defecto
const switchSpy = vi.fn();

// Mock de estilos de la app
vi.mock("app/styles", () => ({
    styles: {
        headerBar: { borderBottom: "1px solid #eee" },
        container: { maxWidth: 1200, margin: "0 auto" },
    },
}));

// Mock de íconos
vi.mock("@ant-design/icons", () => ({
    MenuOutlined: () => <span data-testid="icon-menu" />,
    GithubOutlined: (p: any) => <span data-testid="icon-github" {...p} />,
    LinkedinFilled: (p: any) => <span data-testid="icon-linkedin" {...p} />,
    FileTextOutlined: () => <span data-testid="icon-cv" />,
}));

// Mock de antd
vi.mock("antd", () => {
    const Space = ({ children, ...rest }: any) => (
        <div data-testid="space" {...rest}>
            {children}
        </div>
    );

    const Button = ({ children, onClick, href, ...rest }: any) => {
        if (href) {
            return (
                <a data-testid="button-link" href={href} {...rest}>
                    {children}
                </a>
            );
        }
        return (
            <button data-testid="button" onClick={onClick} {...rest}>
                {children}
            </button>
        );
    };

    const Switch = ({ checked, onChange, ...rest }: any) => {
        switchSpy({ checked });
        return (
            <button
                data-testid="switch"
                aria-pressed={checked}
                onClick={() => onChange(!checked)}
                {...rest}
            />
        );
    };

    const Drawer = ({ open, onClose, children, ...rest }: any) => {
        if (!open) return null;
        return (
            <aside data-testid="drawer" {...rest}>
                <button data-testid="drawer-close" onClick={onClose} />
                {children}
            </aside>
        );
    };

    const Grid = {
        useBreakpoint: () => useBreakpointMock(),
    };

    const Typography = {
        Text: ({ children, ...rest }: any) => (
            <span data-testid="typography-text" {...rest}>
        {children}
      </span>
        ),
    };

    return { Button, Space, Switch, Drawer, Grid, Typography };
});

// ====== SUT ======
import { HeaderBar } from "./headerBar";

// ====== Helpers ======
beforeEach(() => {
    vi.clearAllMocks();
    useBreakpointMock.mockReturnValue({ md: true }); // reset a desktop
});

describe("headerBar (desktop)", () => {
    it("renderiza nav, acciones y links con hrefs correctos", () => {
        render(<HeaderBar dark={false} onToggleDark={() => {}} />);

        // Nav links
        expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute("href", "#inicio");
        expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute("href", "#proyectos");
        expect(screen.getByRole("link", { name: "Experiencia" })).toHaveAttribute("href", "#experiencia");
        expect(screen.getByRole("link", { name: "Educación" })).toHaveAttribute("href", "#educacion");
        expect(screen.getByRole("link", { name: "Contacto" })).toHaveAttribute("href", "#contacto");

        // Acciones a la derecha
        const cv = screen.getAllByTestId("button-link").find((el) => el.textContent?.includes("Currículum"))!;
        expect(cv).toHaveAttribute("href", "/cv.pdf");
        expect(cv).toHaveAttribute("target", "_blank");

        const gh = screen.getAllByTestId("button-link").find((el) => el.textContent?.includes("GitHub"))!;
        expect(gh).toHaveAttribute("href", "https://github.com/Excintium");
        expect(gh).toHaveAttribute("target", "_blank");
        expect(screen.getByTestId("icon-github")).toBeInTheDocument();

        const li = screen.getAllByTestId("button-link").find((el) => el.textContent?.includes("LinkedIn"))!;
        expect(li).toHaveAttribute("href", "https://www.linkedin.com/in/nicolas-fonseca-olivares/");
        expect(li).toHaveAttribute("target", "_blank");
        expect(screen.getByTestId("icon-linkedin")).toBeInTheDocument();
    });

    it("muestra el switch de tema y llama onToggleDark al click", () => {
        const onToggleDark = vi.fn();
        render(<HeaderBar dark={false} onToggleDark={onToggleDark} />);

        const sw = screen.getByTestId("switch");
        // estado inicial (false)
        expect(sw).toHaveAttribute("aria-pressed", "false");
        fireEvent.click(sw);
        // debe pedir cambiar a true
        expect(onToggleDark).toHaveBeenCalledWith(true);
    });

    it("muestra el logo con aria-label y link a #inicio", () => {
        render(<HeaderBar dark={false} onToggleDark={() => {}} />);
        const logoLink = screen.getByRole("link", { name: "Ir al inicio" });
        expect(logoLink).toHaveAttribute("href", "#inicio");
        // marca
        expect(screen.getByLabelText("Excintium")).toBeInTheDocument();
    });
});

describe("headerBar (mobile)", () => {
    it("oculta nav central y muestra botón de menú; abre y cierra el Drawer", () => {
        useBreakpointMock.mockReturnValue({ md: false }); // móvil
        render(<HeaderBar dark={false} onToggleDark={() => {}} />);

        // El botón de menú aparece
        const menuBtn = screen.getByRole("button", { name: "Abrir menú" });
        expect(menuBtn).toBeInTheDocument();

        // Abre drawer
        fireEvent.click(menuBtn);
        expect(screen.getByTestId("drawer")).toBeInTheDocument();

        // Dentro del drawer hay links
        const linkEdu = screen.getByRole("link", { name: "Educación" });
        expect(linkEdu).toBeInTheDocument();

        // Al hacer click en un link, el componente llama setOpen(false) → el Drawer debería desaparecer
        fireEvent.click(linkEdu);
        expect(screen.queryByTestId("drawer")).toBeNull();
    });

    it("tiene otro switch de tema dentro del drawer y también invoca onToggleDark", () => {
        useBreakpointMock.mockReturnValue({ md: false });
        const onToggleDark = vi.fn();

        render(<HeaderBar dark={false} onToggleDark={onToggleDark} />);

        // Abrir drawer
        fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));
        const swInDrawer = screen.getByTestId("switch");
        fireEvent.click(swInDrawer);
        expect(onToggleDark).toHaveBeenCalledWith(true);
    });
});
