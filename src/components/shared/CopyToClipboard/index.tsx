import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// Custom
import { CopyToClipboardSpan } from "./styles";

export default function CopyToClipboard({ text }) {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "banner" });
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function copyToClipboard(e) {
    e.stopPropagation();
    e.preventDefault();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      timeout.current = setTimeout(() => setCopied(false), 2000);
    });
  }

  useEffect(() => {
    return () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  if (!ready) return null;
  return (
    <OverlayTrigger children={<></>} placement="bottom" overlay={<Tooltip>{`${copied ? t("resume.copied") : t("resume.copy")}`}</Tooltip>}>
      <CopyToClipboardSpan onClick={copyToClipboard}>
        {/*text*/}
        <i className="far fa-clone" />
      </CopyToClipboardSpan>
    </OverlayTrigger>
  );
}