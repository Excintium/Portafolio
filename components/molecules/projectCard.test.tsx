import React from "react";
import { describe, it, expect, vi } from "vitest";
// Importa 'within' para selecciones más precisas
import { render, screen } from "@testing-library/react";

// ====== Mocks ======
const cardSpy = vi.fn();
const metaSpy = vi.fn();

vi.mock("antd", () => ({
    Card: Object.assign(
        // Corrección: Destructuramos props no-HTML para que no pasen al div
        ({ children, hoverable, cover, ...rest }: any) => {
            cardSpy({ hoverable, ...rest });
            return (
                <div data-testid="card" {...rest}>
                    {cover}
                    {children}
                </div>
            );
        },
        {
            Meta: ({ title, description }: any) => {
                metaSpy({ title, description });
                return (
                    <div data-testid="meta">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                );
            },
        }
    ),
    // Corrección: Destructuramos 'wrap' para que no pase al div
    Space: ({ children, wrap, ...rest }: any) => (
        <div data-testid="space" {...rest}>
            {children}
        </div>
    ),
    Tag: ({ children }: any) => <span data-testid="tag">{children}</span>,
}));

// ====== SUT ======
import { ProjectCard } from "./projectCard";

// ====== Data ======
const props = {
    title: "GameZone",
    summary: "Tienda de videojuegos full responsive.",
    tags: ["React", "TypeScript", "Ant Design"],
    image: "https://example.com/gamezone.png",
    link: "https://gamezone.vercel.app",
};

// ====== Tests ======
describe("projectCard", () => {
    it("renderiza el enlace externo con los atributos correctos", () => {
        render(<ProjectCard {...props} />);

        // Corrección: Busca el título primero
        const heading = screen.getByRole('heading', { name: props.title });
        // Luego, encuentra el enlace 'a' más cercano que lo contiene
        const link = heading.closest('a');

        expect(link).toBeInTheDocument(); // Verifica que el enlace existe

        // Verifica los atributos en el enlace encontrado
        expect(link).toHaveAttribute("href", props.link);
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noreferrer");
    });

    it("renderiza la imagen con src y alt", () => {
        render(<ProjectCard {...props} />);
        const img = screen.getByRole("img", { name: props.title });
        expect(img).toHaveAttribute("src", props.image);
        expect(img).toHaveAttribute("alt", props.title);
    });

    it("usa Card.Meta con el título y la descripción correctos", () => {
        render(<ProjectCard {...props} />);
        expect(metaSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                title: props.title,
                description: props.summary,
            })
        );

        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.summary)).toBeInTheDocument();
    });

    it("renderiza las tags dentro de Space", () => {
        render(<ProjectCard {...props} />);
        const tags = screen.getAllByTestId("tag");
        expect(tags).toHaveLength(props.tags.length);
        props.tags.forEach((t) => {
            expect(screen.getByText(t)).toBeInTheDocument();
        });
    });

    it("aplica estilos básicos al Card (borde y radio)", () => {
        render(<ProjectCard {...props} />);
        const card = screen.getByTestId("card") as HTMLElement;
        const style = card.style;
        expect(style.borderRadius).toBe("16px");
        expect(style.border).toContain("1px solid var(--border-color");
    });

    it("snapshot del componente", () => {
        const { container } = render(<ProjectCard {...props} />);
        expect(container).toMatchSnapshot();
    });
});