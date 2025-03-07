import { useState, useEffect } from 'react';

function useKonamiCode() {
  const [konami, setKonami] = useState<boolean>(false);
  let key = 0;
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66];

  function handleKonami(e: KeyboardEvent) {
    if (e.keyCode === code[key]) {
      key++;

      if (key === code.length) {
        setKonami(true);
        document.removeEventListener("keydown", handleKonami);
      }
    } else {
      key = 0;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKonami);
    return () => {
      document.removeEventListener("keydown", handleKonami);
    };
  }, []);

  return konami;
}

export default useKonamiCode;