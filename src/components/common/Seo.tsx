import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description?: string;
};

const SITE_NAME = "SIRE — Sustainable Infrastructure Research";

export default function Seo({ title, description }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | SIRE`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
