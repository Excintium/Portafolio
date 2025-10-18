import { Card } from "antd";
import { styles } from "app/styles";
import { profile } from "components/atoms/profile/profile";
import { SectionTitle } from "components/atoms/sectionTitle";

export interface EducationSectionProps {}

export function EducationSection(_: EducationSectionProps) {
    return (
        <section id="educacion" style={styles.section}>
            <div className="container" style={styles.container}>
                {/* Educación formal */}
                <SectionTitle text="Educación" />
                <div style={{ display: "grid", gap: 12 }}>
                    {profile.education.map((e) => (
                        <Card
                            key={`${e.grade}-${e.place}`}
                             
                            style={{
                                borderRadius: 16,
                                border: "1px solid var(--border-color, #E5E7EB)",
                            }}
                        >
                            <div className="stack-sm" style={{ justifyContent: "space-between" }}>
                                <div>
                                    <h3 style={{ margin: 0 }}>{e.grade}</h3>
                                    <span style={{ color: "#888" }}>{e.place}</span>
                                </div>
                                <span>{e.period}</span>
                            </div>
                            {e.details && <p style={{ marginTop: 8 }}>{e.details}</p>}
                        </Card>
                    ))}
                </div>

                {/* Certificaciones */}
                <div style={{ marginTop: 24 }}>
                    <SectionTitle text="Certificaciones" />

                    {Array.isArray(profile.certification) && profile.certification.length > 0 ? (
                        <>
                            <div className="certification-grid">
                                {profile.certification.map((c) => (
                                    <a
                                        key={c.credentialUrl || `${c.certificateName}-${c.issuer}-${c.issued}`}
                                        href={c.credentialUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <Card
                                            hoverable
                                             
                                            className="certification-card"
                                            style={{
                                                borderRadius: 16,
                                                textAlign: "center",
                                                height: "100%",
                                                border: "1px solid var(--border-color, #E5E7EB)",
                                                transition: "border-color 0.2s ease",
                                            }}
                                        >
                                            <img
                                                src={c.imageUrl}
                                                alt={c.certificateName}
                                                onError={(e) => ((e.currentTarget as HTMLImageElement).src = "/badges/fallback.png")}
                                            />
                                            <h4 style={{ margin: "8px 0 4px", fontSize: 14, lineHeight: 1.2 }}>
                                                {c.certificateName}
                                            </h4>
                                            <small style={{ display: "block", color: "#888" }}>
                                                {c.issuer} · {c.issued}
                                            </small>
                                        </Card>
                                    </a>
                                ))}
                            </div>

                            {/* Link a Credly SIEMPRE visible */}
                            <Card
                                style={{
                                    borderRadius: 16,
                                    marginTop: 12,
                                    border: "1px solid var(--border-color, #E5E7EB)",
                                }}
                            >
                                <p style={{ margin: 0 }}>
                                    Vea todas mis certificaciones en{" "}
                                    <a
                                        href="https://www.credly.com/users/nicolas-esteban-fonseca-olivares"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        mi perfil de Credly
                                    </a>.
                                </p>
                            </Card>
                        </>
                    ) : (
                        // Estado vacío
                        <Card
                            style={{
                                borderRadius: 16,
                                border: "1px solid var(--border-color, #E5E7EB)",
                            }}
                        >
                            <p style={{ margin: 0 }}>
                                Puedes ver todas mis certificaciones en{" "}
                                <a
                                    href="https://www.credly.com/users/nicolas-esteban-fonseca-olivares"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    mi perfil de Credly
                                </a>.
                            </p>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
}
