export interface SectionTitleProps { text: string; }
export function SectionTitle({ text }: SectionTitleProps) {
    return (
        <h2 style={{ marginBottom: 16, paddingBottom: 6, borderBottom: "2px solid var(--border-strong, #0048BA)" }}>
            {text}
        </h2>
    );
}
