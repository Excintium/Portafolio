export interface NavLinkItemProps { id: string; label: string; }
export function NavLinkItem({ id, label }: NavLinkItemProps) {
    return <a href={`#${id}`} style={{ paddingInline: 12 }}>{label}</a>;
}
