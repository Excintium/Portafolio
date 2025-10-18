import { Card, Space, Tag } from "antd";

export interface ProjectCardProps {
    title: string;
    summary: string;
    tags: string[];
    image: string;
    link: string;
}

export function ProjectCard({ title, summary, tags, image, link }: ProjectCardProps) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Card
                hoverable
                className="project-card"
                cover={
                    <img
                        src={image}
                        alt={title}
                        /* tamaño lo controla CSS (200px) */
                    />
                }
                style={{
                    borderRadius: 16,
                    border: "1px solid var(--border-color, #E5E7EB)",
                }}
            >
                <Card.Meta title={title} description={summary} />
                <Space wrap size={[6, 6]} style={{ marginTop: 12 }}>
                    {tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                    ))}
                </Space>
            </Card>
        </a>
    );
}
