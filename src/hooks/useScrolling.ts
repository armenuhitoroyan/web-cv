import { useState, useEffect } from "react";

export const useScrolling = (): { isScrolled: boolean } => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Վերահսկում ենք սքրոլի շարժումը
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true); // Եթե սքրոլի դիրքը 200px-ից ավել է
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Բեռնելիս հանելու ենք լիստենեռ-ն event-ից
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isScrolled,
  };
};
