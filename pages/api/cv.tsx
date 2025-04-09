import { renderToStream } from "@react-pdf/renderer";
import { NextApiRequest, NextApiResponse } from "next";
import PDFContent from "components/pages/CV/PDFContent";
import { i18n } from "next-i18next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!i18n?.hasLoadedNamespace('main')) {
      await i18n?.loadNamespaces('main');
    }
    const t = i18n!.getFixedT(req.query.locale as string, 'main');

    const stream = await renderToStream(<PDFContent t={t} />);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="test.pdf"');

    stream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate PDF", stacktrace: error });
  }
}
