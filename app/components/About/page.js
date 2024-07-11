import React from "react";
import styles from "../../../styles/About.module.css";
import { FaUser } from "react-icons/fa"; // Importa el icono FaUser

const About = () => (
  <section className={styles.about}>
    <div className={styles.icon}>
      <FaUser size={50} />
    </div>
    <div className={styles.content}>
      <h2>Acerca de Mí</h2>
      <p>
        Soy un entusiasta desarrollador frontend con una pasión desbordante por la
        creación de experiencias web excepcionales. Con más de 2 años de
        experiencia en el desarrollo de aplicaciones web modernas, me especializo
        en utilizar tecnologías como React, Next.js y CSS para construir
        interfaces intuitivas y funcionales.
      </p>

      <p>
        Mi enfoque se centra en la usabilidad, el diseño responsive y la
        optimización del rendimiento. Disfruto explorando nuevas herramientas y
        técnicas que mejoran la eficiencia del desarrollo y la calidad del
        producto final. Además, tengo experiencia en integración de APIs, manejo
        de datos dinámicos y seguimiento de las mejores prácticas de SEO y
        accesibilidad.
      </p>
    </div>
  </section>
);

export default About;