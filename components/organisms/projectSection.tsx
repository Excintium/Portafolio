import { styles } from "app/styles";
import { profile } from "components/atoms/profile/profile";
import { SectionTitle } from "components/atoms/sectionTitle";
import { ProjectCard } from "../molecules/projectCard";

export interface ProjectsSectionProps {}

export function ProjectsSection(_: ProjectsSectionProps) {
    return (
        <section id="proyectos" style={styles.section}>
            <div className="container" style={styles.container}>
                <SectionTitle text="Proyectos" />
                <div className="project-grid">
                    {profile.projects.map((p) => (
                        <ProjectCard
                            key={p.title}
                            title={p.title}
                            summary={p.summary}
                            tags={p.tags}
                            image={p.image}
                            link={p.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
