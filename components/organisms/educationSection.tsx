import { Card } from "antd";
// Importo mis estilos y datos de perfil
import { styles } from "app/styles";
import { profile } from "components/atoms/profile/profile";
// Importo mis átomos reutilizables
import { SectionTitle } from "components/atoms/sectionTitle";

/**
 * Defino las 'props' para esta sección.
 * No necesito ninguna porque todos los datos los jalo
 * directamente desde el objeto 'profile' importado.
 */
export interface EducationSectionProps {}

/**
 * Este es mi componente 'EducationSection', un "organismo".
 * Lo diseñé para que renderice dos sub-secciones en una:
 * 1. Mi educación formal (Ingeniería, etc.).
 * 2. Mis certificaciones (de Credly, etc.).
 */
export function EducationSection(_: EducationSectionProps) {
    return (
        // La <section> principal, con el 'id' para la navegación
        <section id="educacion" style={styles.section}>
            <div className="container" style={styles.container}>

                {/* --- 1. SECCIÓN DE EDUCACIÓN FORMAL --- */}

                {/* Reutilizo mi átomo de título */}
                <SectionTitle text="Educación" />

                {/* Un 'grid' simple para apilar las tarjetas de educación */}
                <div style={{ display: "grid", gap: 12 }}>

                    {/* Hago .map() sobre mi array 'profile.education' */}
                    {profile.education.map((e) => (
                        <Card
                            // Uso una key única combinando el grado y el lugar
                            key={`${e.grade}-${e.place}`}

                            // Estilos para los bordes, usando mi variable CSS
                            style={{
                                borderRadius: 16,
                                border: "1px solid var(--border-color, #E5E7EB)",
                            }}
                        >
                            {/* Un div simple para alinear el título y el período */}
                            <div className="stack-sm" style={{ justifyContent: "space-between" }}>
                                <div>
                                    <h3 style={{ margin: 0 }}>{e.grade}</h3>
                                    <span style={{ color: "#888" }}>{e.place}</span>
                                </div>
                                <span>{e.period}</span>
                            </div>

                            {/* Renderizado condicional:
                                Solo muestro el párrafo <p> si 'e.details' existe.
                            */}
                            {e.details && <p style={{ marginTop: 8 }}>{e.details}</p>}
                        </Card>
                    ))}
                </div>


                {/* --- 2. SECCIÓN DE CERTIFICACIONES --- */}

                {/* Un 'div' que envuelve la segunda sub-sección */}
                <div style={{ marginTop: 24 }}>
                    <SectionTitle text="Certificaciones" />

                    {/* Primero compruebo que 'profile.certification' sea un array
                        y que tenga al menos un ítem.
                    */}
                    {Array.isArray(profile.certification) && profile.certification.length > 0 ? (
                        // Si SÍ tengo certificaciones, muestro la cuadrícula
                        <>
                            {/* Esta clase CSS la defino en 'app.css' para el grid */}
                            <div className="certification-grid">

                                {profile.certification.map((c) => (
                                    // Cada certificación es un enlace '<a>' que...
                                    <a
                                        key={c.credentialUrl || `${c.certificateName}-${c.issuer}-${c.issued}`}
                                        href={c.credentialUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        {/* ...envuelve una 'Card' (mi componente CredlyBadge
                                            pero implementado aquí directamente).
                                        */}
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
                                                // ¡Importante! Si la imagen falla en cargar,
                                                // le asigno una imagen 'fallback' que tengo
                                                // en mi carpeta /public/badges.
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

                            {/* Al final de la cuadrícula, pongo un enlace general a Credly */}
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
                        // Si NO tengo certificaciones (el array está vacío),
                        // muestro SOLO la tarjeta con el enlace general a Credly.
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