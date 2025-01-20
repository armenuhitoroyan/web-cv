import React from "react";
import styles from "../../style/ContactPage.module.css";

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.contact_item}>
      <div>
        <div></div>
        <div className={styles.icon}>{icon}</div>
      </div>

      <a href="#" className={styles.contact_title}>
        {title}
      </a>
      <p className={styles.contact_description}>{description}</p>
    </div>
  );
};

export default ContactCard;
