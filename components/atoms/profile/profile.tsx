/**
 * Este archivo, 'profile.tsx', es el corazón de mi portafolio.
 *
 * Actúa como mi "única fuente de verdad" (Single Source of Truth).
 * Primero defino todas las estructuras de datos (Interfaces de TypeScript)
 * y luego creo y exporto un único objeto 'profile' que contiene
 * toda mi información personal, profesional y de proyectos.
 *
 * De esta forma, si necesito cambiar mi titular, añadir un proyecto o
 * actualizar una habilidad, solo tengo que editar este archivo,
 * y todos los componentes (HeroSection, ProjectSection, etc.)
 * se actualizan automáticamente.
 */

// --- 1. DEFINICIÓN DE TIPOS (INTERFACES) ---

/**
 * Define la "forma" que debe tener cada objeto de proyecto
 * que agrego a mi portafolio.
 */
export interface Project {
    title: string;
    summary: string;
    tags: string[];
    link: string;
    image: string; // URL o Data URI de la imagen
}

/**
 * Define la "forma" de un ítem de mi experiencia laboral.
 */
export interface Experience {
    role: string;       // El puesto (ej. "Supervisor...")
    title: string;      // (Lo mantengo por compatibilidad, aunque 'role' es más descriptivo)
    company: string;
    period: string;
    details?: string;   // El texto largo con saltos de línea (opcional)
    description?: string; // (Lo mantengo por compatibilidad)
}

/**
 * Define la "forma" de un ítem de mi educación.
 */
export interface Education {
    // Mantengo varios campos por si decido usarlos en el futuro
    grade: string;
    degree: string;
    place: string;
    institution: string;
    period: string;
    details?: string;
    description?: string;
}

/**
 * Define la "forma" de un objeto de certificación
 * (específicamente formateado para mis 'CredlyBadge').
 */
export interface Certification {
    certificateName: string;
    issuer: string;
    issued: string;
    credentialUrl: string;
    imageUrl: string;
}

/**
 * Esta es la Interfaz principal.
 * Define la estructura completa de mi perfil, que agrupa
 * todas las interfaces anteriores en listas (arrays).
 */
export interface Profile {
    name: string;
    headline: string;
    description: string;
    photoUrl?: string; // Es opcional, por si no quiero poner foto
    // --- Links Principales ---
    linkedin: string;
    github: string;
    resumeUrl: string;
    email: string;
    // --- Listas de datos ---
    skills: string[];
    projects: Project[];
    experience: Experience[];
    education: Education[];
    certification: Certification[];
}


// --- 2. EL OBJETO DE DATOS (MI INFORMACIÓN) ---

/**
 * ¡Aquí es donde vivo!
 * Este es el único objeto que exporto. Contiene toda mi información
 * personal, siguiendo la estructura de la 'Profile' interface.
 */
export const profile: Profile = {

    // --- Sección Hero ---
    name: "Nicolás Fonseca",
    headline:
        "Supervisor de Operaciones E-commerce | Optimización de Procesos",
    description:
        "Profesional con experiencia coordinando operaciones e-commerce y formación en Ingeniería en Informática. Enfoque en KPIs, mejora continua y soluciones web con React/TypeScript.",

    // Ruta a mi foto de perfil (está en /public/assets/)
    photoUrl: "/assets/Nicolas_Portada.jpg",

    // --- Links de Contacto y Redes ---

    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-fonseca", // <--- ASÍ
    github: "https://github.com/Excintium",
    email: "nico.fonseca@duocuc.cl",
    resumeUrl: "https://docs.google.com/document/d/1KSLajagC4F3yaq-9w9qMB9GPWoCWdH4c/edit?usp=sharing&ouid=107969967437438795414&rtpof=true&sd=true", // (Este ya está bien)
    // --- Lista de Habilidades (para las 'SkillPill') ---
    skills: [
        "Gestión de Operaciones E-commerce",
        "Optimización de Procesos",
        "Control de Indicadores (KPIs)",
        "Excel / Google Sheets",
        "React / TypeScript",
        "Python",
        "Comunicación Efectiva",
        "Liderazgo y Coordinación de Equipos",
        "Java"
    ],

    // --- Lista de Proyectos (para las 'ProjectCard') ---
    projects: [
        {
            title: "Central Mine Control (CMC)",
            summary:
                "Dashboard para monitoreo de operaciones y análisis de KPIs; priorización operativa y visualización limpia.",
            tags: ["TypeScript", "Node.js", "GraphQL", "React"],
            link: "https://github.com/Excintium/CentralMineControl",
            // Esta imagen es un enlace externo
            image:
                "https://i.pinimg.com/736x/0f/ce/11/0fce1193395b427320ab72d767a3c155.jpg",
        },
        {
            title: "Inventario de Herramientas — Spring Boot",
            summary:
                "API REST con Spring Boot y MySQL para gestión de inventario; autenticación básica y reportería.",
            tags: ["Java", "Spring Boot", "MySQL"],
            link: "https://github.com/Excintium/InventarioHerramientas",
            image:
                "https://i.pinimg.com/1200x/86/34/c3/8634c3a23aeacc21fe2f0ce6333ecdd5.jpg",
        },
        {
            title: "DataBase — Oracle SQL",
            summary:
                "Proyecto académico enfocado en modelado de bases de datos, creación de vistas, consultas avanzadas, procedimientos almacenados y triggers en Oracle SQL Developer.",
            tags: ["Oracle SQL", "PL/SQL", "Procedures", "Views"],
            link: "https://github.com/Excintium/DataBase",
            image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title:"Test Página Web",
            summary: "Desarrollo académico para realizar test a componentes de una página web creada con React",
            tags: ["TypeScript", "Jasmine", "Karma", "React Router", "antd"],
            link: "https://github.com/Excintium/Reemplazo_Profe",
            // Para esta imagen usé un 'Data URI' (Base64) en lugar de un link
            // Funciona igual que una URL.
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw8NDg0ODw0NDw8QDw0PEA8PDw4PFxEWFxUVFRYYHSggGBolHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi4lHiUtLS0rLi0rLS0rLS8tLS0tLS0tLS0tLSstLS0tKy0tLS0tNS0tLS0tLS0tLS0tLS0rLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAACAQADBAUGB//EAEkQAAEDAgMEBQYKBwYHAAAAAAEAAgMEEQUSIQYTMUEiUWFxgQcUI0KhsTJSYnORkrLB0fAVMzRTcnTSFiRDouHxFyU1goOzwv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAApEQEAAgEEAQIFBQEAAAAAAAAAAQIRAxIhMUEEEyJRYZHhFDJCcaEF/9oADAMBAAIRAxEAPwDtwkFATC6qkBIBQEgEEhIKEgEEgJAKAEgFRICkBUAkAgoBIBUAlZBFlICkBKyKICmylSiIsqspspsgKpKyqyA2VWSsoQGyghNRZBbsosrhCJCAEIkK4QiQgtkIkK4QiQgtkIlXCiQgCJCZRKgBQKuFEoLZUJFFAgmAiEwgkJBQEggkJAKAmFRISCgJBBICQCoBIIKASAVAKUVSlUkAiIspAUgKbIIsqslZVZBFlFk7KrIBZRZOyiyAWUWVyyJCAokJkKEAIRITIRIRQIRITIRIRAIQKuEIlBbKKZRKgBRKZRKC2VCRRQIJhEJhBISChIIEEgFoMd2lipLxsG9n+KD0WfxH7lycmKYlXOLWOlIPqQAtYO8j7ytxSZdqaFrRmeIemhMBeZDZjEjrunX7ZWX96DnYpQak1EbRzJL4vvatbPlLfsRPVoepAJALjsB20bIRFVhsbjoJm6Rk/KHq9/DuXZN6+RWJiY7cb0mk4lIUhUkFGFAJAKgpAQUApspAUoIspU2U2RRsqskqsgNlFkrKLIAQoVwhEhEAhEpokICiQkVBQAhEplEoLZRKZRKAFAq4UCgCJTKJUFsoplFAgkEQmEEhaXarGfNIg1h9PLcN+Q3m78FuwvOcae6sr3MB4yCFnYAbX+m5W6RmXbQpFrc9QyNmNnjWEzzFwgDjzOaZ3PXq6yu3w+eAPkpYmbt0GW8eUNBaRo5vWO1a7FsXiwxsETYszSCMoIaWsbbXtJJ96w5MYpKt8M0M7aeqicAN8C1r4yekxxGhHVrxVnNm7btTmevDBx3aesgqZoY3sDI32aCxpNrDmuyra6OCHezatIaMgGYyOdwaG8yepecbUU8hrZ7Mcc72ltmk5gWi1utdZiFZTRVLZauoYW0zG7mmZd72y26T3getyCs1jhq9IxXEMLanZRpYamlZlIGaSADQjiS0cj2KtgseJIopXX0O4ceVuLPvC2eFbXxVVS2nbE5rXh2WR5Fy4C9so7L81yW1FIaGuLouiCWzxW0ym97d1wVYzPwytYm0e3fvw9UCQVijnEscco4SMa8dxAKyLLk8blf7e0I9So+oz+pbHBNqKaulMMTZQ4ML7va0CwIHInrXFbd4RT0ckAgYWCRr3Ou5zrkOFuJ7V1ew2EU7KeGrawieWMh78ziCC7qvYcAukxXGXqtTTim6HT2SstJje1FHRHJI4vl/dRgOcP4jwC1tFt/RyPDZI5YQTbeOyuaO+xuFjbLjGneYzEOusqsuarduKKCR8LmzOMZsXMa0tOl7g5tQtlHtDS+atrnOMcDrhucdMkEiwAvc6FNspOnaPDaWVWXHt8otEXZTDUBt/h2Zw67ZrrbYTtRS1kz6eHeFzGudnLQGOaCBca35jkm2VnSvHcNzZQuVd5QaDhkqPqM/qV7GNtaOlfugHzPb8IR5crD1Ek8e5NsntX+ToyFBWpwLaSlr7iNxZI0XdFJYODesciFrMQ27ooXljGyTZTYvjyhl+wk6ptkjTtM4w6chWKqYRRvldfLGxzzbjZoubfQsHBNoqWuuInFsjRd0TxZ4HWORHcrO0+MU9LHu6gSltS2Rnow0kC1jxPykxOcJsndjA4JtHT1z3sibICxuY52gC17ciVtyuR2J/R+9l8085z7sZt9ktlzDhbndZlftjSQSvhe2YvicWuLWtIuOrVWa88N30/ixWHQFErQ1G2FGyJkvpCZQS2IAbywcRd2tgNOtWqDbOjmcGOD4SdA6TLkJ7wdPFTbLPtXxnDoCiUytPjO0FNRnLI4uk47pgu4Dt5BSIyxFZmcQ2RRK5mLbimcbOhmYPjdF1u8AroaWqjnYJInh7DwcPceoqzWY7atp2r3BFEplFZYAopFFAgkEQkECavOdmxfEY7/vJT45XL0YLzirvRYgXEaRz7wdsbjfTwJXSnmHp9PzFo+jtca2fgrDvJHPY9rcoe12gFydQdOa5GbZckv3FXTSsjtvHF4ZugfjcR7V21XhcFWWySZ3syjKwPcInDiCWjidVxu1mJRX8ypmsZBGfSZAAHvHLTiB7+5Wkz0uha37Yn8PQKBrGxRtjcHMaxrWuBuCAAL38FwmJbOGWeedtTTNpTKSZnSA5HOOrSBzuVfwWgmFE+nMzo5q4F9NF0gC1mrtfVzD2WWkwLEjRTFsrM0LjkqIXAHQHjY8x+KtYxnDWnSazaay7PAtkaWEx1G+dM9hDmPaQ2O46rcfpWq8pbRvKY8yyQHuzC3vK6ajwSkDmVFPmjBs8CGRzYpARzbwIXE7c1nnFbu2dLctbCAOcl7m3ibeClebJpTNtTOXd7KEmhpb/um/RyW4C1Esv6PoQ4Mz+bQxgsBy3tYHX6SsHZza6OtlMLoxC7LmZd+bOb6gaDXmsYmeXCaTbNo6aTyofrKb5uT7TVtqLEjR4LHO34bYsrP43PIB8L38Fo/KXUsfPDG1wLoo3Z7a5S5wsD26LZ1VE+TAYw0HNHGyW3MtDyT/AJSSun8Yy9GI2Uifm0Wx+z36Skkmne/dRu6ZB6csh1tf2k9oXYV2wtBIwtiY6GS3Rka97tflBx1C0nk0xeKMSUkjmsdI8SREmwecoBbfr0HtXe1dXFAx0sz2sjaLlzj7us9il5nLOte8XxDxikw8itjpJxwqGxSAE6jOAbFdJ5RMPFLHRwwtc2lYJg0ElwEhcDqTztf2rSwVoqcUjqLWEtZG4A8Q3OLX8LL07aGvw5jRBXOZkmBIa5rnXseILRoQtWmYmHXUtMWq5HZaowaSkFPUNhjqCHB75W2LiSbObIeGltLi1lvNl9k4qKTzmOqM7XxuYLNaGkEg3BBPUtZPsFSVMYnoql7WyNzRh4zxkd+jh43Wh2FxCanro6cOO7me6OSO923sekO0EcVJ5ziWJ+KLTWf7gdu8JgoqiOOBpa18QeQXOd0s7hz7l1GAbE0bqeOSpa6WaZge453tDMwuALHt4laTypH+9xfy4+29eh4WR5vB8zF9gKWmdsJqXtGnXl5FtBh5oKuSCJ7rW6Dr2cY3t+CSO8hd1RbC0LYmtla+SUtGaTO5tnW1ygaAd65bygf9SP8ABAvUgRbiFbWnEGre0VriXkVNA6gxRkTXE7qpYwO5ujcQNf8AtcvQNq8KgqYHyStJdTxTPjIc5tnZL6gceAXD40f+cn+bg97F6LjhHmtTqP1E32CpbxJqzOay4XyZ/r5/mR9sJ+ULC4IclQxpEs8r94S5xB6N9AeCHkzPp5/mR9sLYeUw+ip/nX/ZV/m1MzGuxNkdl6eogFRUBz85cGMDnNAaDa5tqTcFYG2eARUZjkhuI5S5pY4l2Vw10J1t+C67Yo/3CD/yf+xy1PlJPoqf5132Ui07krqW93GWVhmJuiwptS7pPjicBfmQ8sZf2LldnaOnqZJJ62oYAHXyvkDXSvOpJ52W+oqczYKY26uyvcGjicsxdb2LntmMLpaxzo5ZXxy6GMNLQHt5gXHEJHlqsREW8cumrKDBpWFofTRnk+ORrXA/Tr4rQ7LVTqWsNPnD4pXFhLTdjnAdF493itxLsVSMaXOnma1ouXExgAduixsEwzDTPGYKqWSSM5w0tsNOs5RomYxLMWrtmMzLryikUVxeMSikUUEhIIhIIEFzW2uDmZgqYxeSIWeBxdHxv4e4rpQmFqJxOWqXmlsw4zZDaJjGikqHAN4RSHgAfUd1dhWxdsZAahkrXWgvmdAbm54gA/F7Fi7QbI7wmalsHG5dAdGk9bTy7uC0VLjGIYed0S5oH+FM0lo7r6gdxXTvmr143fFpziZ7h3dbC41tG9rDkYyoDnAHK27Ra55LExrZOOrqGzh+7B/XADV9uBHUeRK0bdvZwNaaInrDngfQsGs2sr6j0bCIw7TJC05z46n6FIrZmulqR9HT47jUGGwikpbb4NytaDm3IPrOPX2LR7C4K6ebzuQExQuJaT/iTf6ce+ynAtjZpnCSqvFHe5YT6WTv+L3nVehU8LImNjjaGsYLNaNAAkzERiEvetK7a8zPcnLE2RrmPAcx4LXNPAgixC8+xTYKoa8mlcySMm4a92R7ey50PevRAkFitphx09S1OnnmEbAzueHVb2sjBuY2OzPf2XGg79V6LHG1rQwNAaAGhvINta3cpCQSbTJfUtftwWPbAFzjJROYGuN9w+4DT8l3V2Fa+l2DxCVzRO9kcY9Yv3pA+S0fiF6cEgtb5bj1F4jDzat8ntVvH7h8Ihv6PO92fLbn0eKy67Ymslgo4Q+G9O2VshzOsc0uYZej1L0AKbpvk/UXedv2ZxulDqekqc1M69rSCMgHjo74PgVsdkdi3Ub/ADmoc10wBEcbLlsZIsSTzNl2ihTfKTr2mMPLX+T2vJJz0+pPrv8A6V0my2zdRRwVcUroy6obZmVziAcjhrcdoXWkqEm8yW17WjEvLf8Ah7X/AB6f67/6V0eFbOVEOHVNG50ZlnLy0hxLRdrQLm3YutKKTeZLa9rdvMP7AV3x6f67/wClZ9XsdVvpaWAPhzwOnLyXOykPcCLadi74olXfKz6i8vNYthK1rmuzwWDgTZ7+R/hWTjWx1XPUTTMfDkkkLmhznA2PXou/KBTfJ+ovnLkNk9mqiindLK6ItMbmAMc4m5cDzHYsHGtkKueommY+EMkeXNDnOBt26LvCiVN85ynvW3bnIbLbN1FHO6WV0ZaY3NsxxJuSDzHYrWO7G7x5mpXNY4m5idcNzdbSOHcuxKBTfOcp71t2558dmcUlsyWToDm+YvaO4C66jA8EiomENOeR9s8pFiewDkFtygUm0yX1rWjAFFIolYchKKRRQSEggEwgQTCASCoYVSRMeMr2Ne3qcA4e1UEggwTgNCTc0kP1AFm0tHDCLRRRxj5DWt9yuBMJmWt0z5MKQiEgjJBMIBWamvhhIEkjWEi4BvqFBfdUMD2xF3TeHFrddQOKvBc9PidOaqCQStyMjlDna2BI0W1p8Tp5HBjJmucb2aL3KZGcFIWPVT7tjpLXyC5A45edvC6uQyte0PYQ5rhcEcwqm6M7fKzi/wCzz/NP9y8+XotdFvIpGDi9jgO8jRedLVXxf+tE76z9HU1uKbijgjYfSyQt15sZbU9/Jc1BE6RzWMF3OIAHai95da5vYADsAFgF1ey+GbtvnDx03joA+qzr7z7lennrv9XqxXxEfaPy2uGUTaeJsbdTxc74zuZWUSqusDG6ndU8r765S0d7tB71iX6KtYrEVjqAgxqlkeI2S3e42AyvFz3kLPK5qto9xR00rRZ9O6OR3X0jcj6SF0TXhwDhwcAR3EKQrHra6KAAyuyhxsNCbnwWH+n6P97/AJX/AIK1tH8Kk/mG/cto6Fh9Rv1QpyBDOyRuZjg5p5g3QqqhkTS95s0WubE8TbktXhrBFWVETNIyxrso4Ndp+JV7aT9mk72faCueBl0tXHM0ujdmANjoRr4q44rTYYNzO6LgyeJkjOrMBr96yscn3cLrfCfZje8/6XTPAdNiEMxLY35iBe1nDTxCvlabDYBFVOjHqwNv2no39q3JSBiVVfDEcr32JF7WJ08E45GvaHNN2uFwexa+laJp6h5F2tG6H3+72qcFcQx0R4xPc3wv/upkZ5RKRRKoJRUlFBISCATCBBMIBIKhhMIBIILgSCthMIGEggEwikFTmNd8JrT3gFQEgiNZUxM88pxkbYxy3GUWOi2rImDUMaD1hoBUWHGwuOfNIFTATmhwLTwIIPcVyGH4o+idJE4ZmNLhlJtlcOfcuvBXO4lgLqipcb5YHhrnuHEngWt7Tbj2rUPD6zT1JmttLuJx92PsnjMk9VOJHX3rA5g5DKeAHc5YGMQbqolZyzEjuOo96u1GGnDayGdl/NnSBt+OTNoWk+OiztroLPjlHrNLT3g3Hv8AYrHbw+opafTzFu6z/kuZqpsg0+EeHZ2ruNmMYFXCMxG+is2QcL9Th2FcxjuDWp4auMH9W3fDU8eDvbb6FqcHxF9JM2ZuoGj2/HYeIUnln01remvG7qe3qt1oNqpx6CI3LXSB7w0XJY3s8T9C3NNUMlY2Rhux4BaexYDaSR1YZ3gbtkWSM3BuTxNuXErMvvZzHDErsagliki3c/TYWj0fA2059aytnajeUzL8Y7xnw4eyy2d1q8MpJIZagW9DI/PGbjieIt+eCnkY202Y+bZSA7fDKTqAdLFGrbiEbHP38TsoJs1nStztcLKxilklMBYARHKHO1As3RZ7kwNXgUDBHvg4vkm1e93G/MeBuo2j/ZpO9n2gpwukkgfLHb0BdmjNxpfiLfngrmNU75YHxsF3EtsLgcHAp4GHioLI6eoHGDJf+AgA/ntU1RE9TDGNWRN3ruok/B+76VnyQZ4d07nGGnsNlh4TQOgDzI4Oe/KLi5s1osBqmBai/bpfmW//ACs6qlyMc/4rSfYsZlM8VT5bdB0YaDccdOXgqxaGSSIxxjVxAOoFm3uUGtwuvjijs5shc4lziG3BJ7UqKpaal+UODZm3s4WOYfkrcMaGgNHBoAHgsHEIHufFIwXdG7XUDonj+e1MDLKJSKJVBKKkooKCYVsJhAwkEQVIQXAkFbCYVDCYVsJAoLgSBQCQKBhSEQVKBgpAq2EgUDBU3QBU3QGpgZMx0cjczHixH55rHxHDxURtjc8gtIIfYE3Assu6m6MXpW8TFo7WoaZrYmwnptDMhuPhC1tQubfsTGSSKh4FzYZAbDqvfVdTdVdGb6GneIi0dNdgeFmjY6PfGRhN2gttkPO2vNbK6N1F0brWKRtjoiUSquiSjSSUSqJUIKRJUlAlFUUSqJRKIgolSUSggoFSUSghEqSiVASipKKCgmFbCYKBhIIBIIGEwraQKouBIFWwkCguApAq2CkCguApAq2CkCgalAFK6BXU3RVXQO6q6F1N0DuoujdVdArqLqLqLoJuoVKLoJRJVEokoqSUSVRKJKIookqiUSUFEoEqSiSgglEqSiVBBRKkolASipKhBASClUgQSCpUgQSCpUgQKQKhUqECkCqVIECkCoVIFdSCqVIJBU3UqkVV1SpUgpUpVIIuquqVIIuoJVKkEXRJVKkRBKJKpUgJKJKpUgJKJUqkBRKpUoCSgVKpACiqVIP/2Q==",
        }
    ],

    // --- Lista de Experiencia ---
    experience: [
        {
            role: "Supervisor de Operaciones E-commerce",
            title: "Supervisor de Operaciones E-commerce",
            company: "Cencosud Retail S.A.",
            period: "Oct 2024 – Actualidad",
            details:
                "Gestión integral de las operaciones en centros de distribución y darkstores para canales digitales.\n" +
                "Encargado de la coordinación de equipos de picking, control de flujo logístico, y seguimiento de indicadores operativos (OTIF, tiempos de despacho, productividad).\n" +
                "Implementación de estrategias de mejora continua basadas en análisis de datos, optimización de layout y balanceo de carga en tiempo real.\n" +
                "Desarrollo de dashboards internos para el control de KPI y soporte a la toma de decisiones estratégicas en retail omnicanal.",
            description:
                "Coordinación de equipos para preparación y despacho; control de KPIs y propuestas de mejora de flujo y layout.",
        },
        {
            role: "Analista Coordinador de Turnos",
            title: "Analista Coordinador de Turnos",
            company: "Layner Medical",
            period: "Ago 2023 – Feb 2024",
            details:
                "Planificación de recursos humanos en base a matrices de disponibilidad, turnos críticos y cumplimiento normativo.\n" +
                "Diseño de reportes y tableros en Google Sheets para monitorear asistencia, desempeño y cobertura hospitalaria.\n" +
                "Asesoría directa a jefaturas en la optimización de dotaciones y procesos de reemplazo, logrando reducir tiempos de asignación en más de un 30%.\n" +
                "Comunicación efectiva con personal clínico y administrativo, garantizando la continuidad operativa en entornos de alta demanda.",
            description:
                "Planificación y cobertura de turnos, control de personal, onboarding, reportería y gestión en planillas.",
        },
        {
            role: "Asistente Comercial",
            title: "Asistente Comercial",
            company: "Cementos Transex LTDA",
            period: "Feb 2023 – Abr 2023",
            details:
                "Apoyo en la gestión comercial y administrativa mediante la elaboración de informes de ventas, seguimiento de cotizaciones y control documental.\n" +
                "Mantenimiento de base de datos de clientes y coordinación de actividades con el área de marketing y recursos humanos.\n" +
                "Participación activa en la organización de eventos empresariales y en la implementación de herramientas digitales para mejorar la trazabilidad de pedidos.",
            description:
                "Manejo de BD de clientes, apoyo a ventas y gerencia, coordinación de eventos y soporte a RRHH/adquisiciones.",
        },
    ],

    // --- Lista de Educación ---
    education: [
        {
            grade: "Ingeniería en Informática (mención Ciencia de Datos)",
            degree: "Ingeniería en Informática (mención Ciencia de Datos)",
            place: "Duoc UC — San Joaquín",
            institution: "Duoc UC — San Joaquín",
            period: "2023 – Presente",
            details:
                "Formación en desarrollo de software, bases de datos y fundamentos de ciencia de datos.",
            description:
                "Formación en desarrollo de software, bases de datos y fundamentos de ciencia de datos.",
        },
        {
            grade: "Enseñanza Media Técnico Profesional",
            degree: "Enseñanza Media Técnico Profesional",
            place: "Colegio Particular Politécnico Eyzaguirre",
            institution: "Colegio Particular Politécnico Eyzaguirre",
            period: "2018 – 2021",
            details: "Base administrativa y contable.",
            description: "Base administrativa y contable.",
        }
    ],
    // --- Lista de Certificaciones ---
    certification: [
        {
            certificateName: "AWS Academy Graduate - Cloud Foundations - Training Badge",
            issuer: "Amazon Web Services",
            issued: "10/12/2025",
            credentialUrl: "https://www.credly.com/badges/803916f3-dd07-4dfd-89a0-49db7227acb3/public_url",
            imageUrl: "https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
        },
        {
            certificateName: "Big Data Professional Certificate - BDPC",
            issuer: "Certiprof",
            issued: "10/13/2025",
            credentialUrl: "https://www.credly.com/badges/12b5aae7-23a6-47c4-a4be-384c4ac7a895/public_url",
            imageUrl: "https://images.credly.com/images/3f982bc7-f166-4086-b7ef-9357f719661e/blob",
        },
        {
            certificateName: "Cyber Threat Management",
            issuer: "Cisco",
            issued: "5/18/2025",
            credentialUrl: "https://www.credly.com/badges/49c7d0b0-901a-46f9-a504-c55584dd363a/public_url",
            imageUrl: "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
        },
        {
            certificateName: "Red Hat System Administration II (RH134 - RHA) - Ver. 9.3",
            issuer: "Red Hat",
            issued: "9/22/2025",
            credentialUrl: "https://www.credly.com/badges/781104da-1081-4c76-b11d-354d4a7c46a1/public_url",
            imageUrl: "https://images.credly.com/images/95cf22a9-209f-4832-b5d8-6341cfd7f20d/blob",
        },
        {
            certificateName: "Network Defense",
            issuer: "Cisco",
            issued: "5/18/2025",
            credentialUrl: "https://www.credly.com/badges/0aba240c-ffc9-4666-8b37-0aa5464295d8/public_url",
            imageUrl: "https://images.credly.com/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png",
        }
    ],
};