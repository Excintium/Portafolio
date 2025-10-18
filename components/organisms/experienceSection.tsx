import { Card } from "antd";
import { styles } from "app/styles";
import { profile } from "components/atoms/profile/profile";
import { SectionTitle } from "components/atoms/sectionTitle";

export interface ExperienceSectionProps {}

export function ExperienceSection(_: ExperienceSectionProps) {
    return (
        <section id="experiencia" style={styles.section}>
            <div className="container" style={styles.container}>
                <SectionTitle text="Experiencia" />
                <div style={{ display: "grid", gap: 12 }}>
                    {profile.experience.map((e) => (
                        <Card
                            key={`${e.role}-${e.company}`}
                            style={{
                                borderRadius: 16,
                                border: "1px solid var(--border-color, #E5E7EB)",
                            }}
                        >
                            <div className="stack-sm" style={{ justifyContent: "space-between" }}>
                                <div>
                                    <h3 style={{ margin: 0 }}>{e.role}</h3>
                                    <span style={{ color: "#888" }}>{e.company}</span>
                                </div>
                                <span>{e.period}</span>
                            </div>
                            <p style={{ marginTop: 8 }}>{e.details}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
