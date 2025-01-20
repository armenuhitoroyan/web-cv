import React, { useEffect } from "react";
import styles from "../style/ContactPage.module.css";
import { Link } from "react-router-dom";

interface ParticlesContainerProps {
  title: string;
  img: string;
}

declare global {
  interface Window {
    particlesJS?: (id: string, config: object) => void;
  }
}

const ParticlesContainer: React.FC<ParticlesContainerProps> = ({
  title,
  img,
}) => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-container", {
        particles: {
          number: { value: 400 }, // Մասնիկների քանակը
          size: { value: 3 }, // Մասնիկների չափը
          color: { value: "#adb5bd" }, // Մասնիկների գույնը (օր.՝ վառ նարնջագույն)
          opacity: {
            value: 0.3, // Թափանցիկության մակարդակը (0-ից 1)
            random: false, // Եթե true է, ապա պատահական թափանցիկություն է
            anim: {
              enable: true, // Եթե true է, թափանցիկությունը անիմացվում է
              speed: 1, // Անիմացիայի արագությունը
              opacity_min: 0.3, // Առավելագույն թափանցիկությունը
              sync: false, // Եթե true է, բոլոր մասնիկները համաժամանակյա են
            },
          },
          move: { speed: 5 }, // Շարժի արագությունը
          line_linked: {
            enable: true,
            color: "#adb5bd", // Գծերի գույնը (սպիտակ)
            opacity: 0.5, // Գծերի թափանցիկությունը
          },
        },
      });
    } else {
      console.warn("particlesJS is not loaded.");
    }
  }, []);

  return (
    <div
      className={styles.particles_container}
      id="particles-container"
      style={{
        background: `url(${img})`,
      }}
    >
      <h2>{title}</h2>
      <div className="w-full  flex-col items-center justify-center md:flex-row">
        <ul className="flex gap-10 justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ParticlesContainer;
