import { useState, useEffect, useRef, useCallback } from 'react';

function useKonamiCode() {
  const [konami, setKonami] = useState<boolean>(false);
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66];
  const keyRef = useRef(0);

  const handleKonami = useCallback((e: KeyboardEvent) => {
    if (e.keyCode === code[keyRef.current]) {
      keyRef.current++;

      if (keyRef.current === code.length) {
        setKonami(true);
        document.removeEventListener("keydown", handleKonami);
      }
    } else {
      keyRef.current = 0;
    }
  }, [code]);

  useEffect(() => {
    document.addEventListener("keydown", handleKonami);
    return () => {
      document.removeEventListener("keydown", handleKonami);
    };
  }, [handleKonami]);

  return konami;
}

export default useKonamiCode;