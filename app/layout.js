// app/layout.js
import "./global.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "@fontsource-variable/inter"; // Inter Variable Font

export const metadata = {
  title: "Yasesvi Reddy Pebbeti | Full Stack Developer & ML Enthusiast",
  description:
    "Official portfolio of Yasesvi Reddy Pebbeti — Full Stack Developer & Machine Learning Enthusiast. Explore my projects, experience, and contact details.",
  keywords: [
    "Yasesvi Reddy Pebbeti",
    "Yash Pebbeti",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Next.js Portfolio",
    "Machine Learning Projects",
    "yasesvireddy.dev",
  ],
  authors: [{ name: "Yasesvi Reddy Pebbeti", url: "https://yasesvireddy.dev" }],
  creator: "Yasesvi Reddy Pebbeti",
  publisher: "Yasesvi Reddy Pebbeti",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Yasesvi Reddy Pebbeti | Full Stack Developer & ML Enthusiast",
    description:
      "Explore the portfolio of Yasesvi Reddy Pebbeti — showcasing software engineering and AI-driven projects.",
    url: "https://yasesvireddy.dev",
    siteName: "Yasesvi Reddy Pebbeti Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Yasesvi Reddy Pebbeti Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yasesvi Reddy Pebbeti | Full Stack Developer & ML Enthusiast",
    description:
      "Portfolio of Yasesvi Reddy Pebbeti — Full Stack Developer, AI & Web Engineer.",
    images: ["/favicon.png"],
  },
  metadataBase: new URL("https://yasesvireddy.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ This line enables true mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
