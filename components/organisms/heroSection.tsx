import { Row, Col, Typography, Space, Button, Card } from "antd";
import { styles } from "app/styles";
import { profile } from "components/atoms/profile/profile";
import { SkillPill } from "components/atoms/skillPill";

export interface HeroSectionProps {}

export function HeroSection(_: HeroSectionProps) {
    return (
        <section id="inicio" style={{ ...styles.section, borderTop: "none" }}>
            <div className="container" style={styles.container}>
                <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={14}>
                        <Typography.Title style={{ marginBottom: 8 }}>
                            {profile.name}
                        </Typography.Title>

                        <Typography.Paragraph style={{ fontSize: 18, marginBottom: 16 }}>
                            {profile.headline}
                        </Typography.Paragraph>

                        <Typography.Paragraph style={{ fontSize: 16 }}>
                            Profesional con experiencia en supervisión de operaciones e-commerce y coordinación de equipos.
                            En formación como Ingeniero en Informática, con dominio en React, TypeScript y Python.
                            Mi enfoque combina la gestión operativa con la analítica de datos y la mejora continua,
                            impulsando eficiencia y resultados medibles.
                        </Typography.Paragraph>

                        <Space wrap size={[8, 8]} style={{ marginInline: 25 }}>
                            <Button type="primary" size="large" href="#proyectos">Ver proyectos</Button>
                            <Button size="large" href="#experiencia">Experiencia laboral</Button>
                        </Space>

                        <Space wrap size={[8, 8]} style={{ marginTop: 24 }}>
                            {profile.skills.map((s) => (<SkillPill key={s} text={s} />))}
                        </Space>
                    </Col>

                    <Col xs={24} md={10}>
                        <Card
                            style={{
                                borderRadius: 16,
                                border: "1px solid var(--border-color, #E5E7EB)",
                                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                                color: "#000000",
                            }}
                        >
                            <div style={{ borderRadius: 14, overflow: "hidden" }}>
                                <img
                                    src={profile.photoUrl}
                                    alt="Foto profesional"
                                    style={{ width: "100%", height: 360, objectFit: "cover" }}
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
}
