import React from "react";
import styles from "../../../styles/Interests.module.css";
import { FaDesktop } from "react-icons/fa";

const Interests = () => (
  <section className={styles.interests}>
    <h2>Intereses</h2>
    <FaDesktop />
    <ul>
      <li>Desarrollo de aplicaciones web</li>
      <li>Tecnologías frontend como React y Next.js</li>
      <li>Diseño de interfaces de usuario</li>
      <li>Integración de APIs</li>
      <li>Exploración de nuevas herramientas y frameworks</li>
    </ul>
  </section>
);

export default Interests;
