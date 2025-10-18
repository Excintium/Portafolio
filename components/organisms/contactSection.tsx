import { Card } from "antd";
import { styles } from "app/styles";
import { profile } from "components/atoms/profile/profile";
import { SectionTitle } from "components/atoms/sectionTitle";
import { ContactForm } from "components/molecules/contactForm";

export interface ContactSectionProps {}

export function ContactSection(_: ContactSectionProps) {
    return (
        <section id="contacto" style={styles.section}>
            <div className="container" style={styles.container}>
                <SectionTitle text="Contacto" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
                    <ContactForm />
                    <Card
                        style={{
                            borderRadius: 16,
                            border: "1px solid var(--border-color, #E5E7EB)",
                        }}
                    >
                        <div><b>Ubicación:</b> Santiago de Chile</div>
                        <div>
                            <b>Email:</b>{" "}
                            <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
