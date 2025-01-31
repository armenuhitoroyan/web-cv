import { useEffect, useState } from "react";

export function useScrolling() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Սեթ արա true, եթե scrollY > 200
      setIsScrolled(window.scrollY > 20);
    };

    // Ավելացրու event listener-ը
    window.addEventListener("scroll", handleScroll);

    // Մաքրիր listener-ը unmount-ի ժամանակ
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled };
}
