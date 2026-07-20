import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://finproiq.com";

const routes = [
  {
    path: "faq",
    title: "FAQ - FinProIQ",
    description:
      "Straight answers on how FinProIQ automates follow-ups and CRM updates, what it costs, how compliance works, and how fast you can get set up.",
  },
  {
    path: "discovery",
    title: "Discovery - FinProIQ",
    description:
      "Answer a few questions about your week and see exactly how much time and revenue slow follow-ups and manual busywork are quietly costing your practice.",
  },
  {
    path: "privacy",
    title: "Privacy Policy - FinProIQ",
    description:
      "How FinProIQ collects, uses, and protects your data and your clients' information. Read our full privacy policy.",
  },
  {
    path: "terms",
    title: "Terms of Service - FinProIQ",
    description:
      "The terms that govern your use of FinProIQ. Please review before getting started.",
  },
];

const escapeAttribute = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

const baseHtml = await readFile(path.join("dist", "index.html"), "utf8");

await Promise.all(
  routes.map(async (route) => {
    const url = `${siteUrl}/${route.path}`;
    const description = escapeAttribute(route.description);
    const html = baseHtml
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      .replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${description}" />`,
      )
      .replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${route.title}" />`,
      )
      .replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${description}" />`,
      )
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${url}" />`,
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${route.title}" />`,
      )
      .replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${description}" />`,
      )
      .replace(
        "</head>",
        `    <link rel="canonical" href="${url}" />\n  </head>`,
      );

    const outputDirectory = path.join("dist", route.path);
    await mkdir(outputDirectory, { recursive: true });
    await writeFile(path.join(outputDirectory, "index.html"), html);
  }),
);

console.log(`Generated static metadata for ${routes.length} routes.`);