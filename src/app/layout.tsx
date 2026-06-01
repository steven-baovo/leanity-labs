import type { Metadata } from "next";
import { Merriweather, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightSidebar from "@/components/RightSidebar";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leanitylabs.com"),
  title: {
    default: "Leanity Labs | Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học Tích cực & Khoa học về Hiệu suất",
    template: "%s | Leanity Labs"
  },
  description: "Ấn phẩm chuyên biên soạn và chia sẻ kiến thức khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Leanity Labs | Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học Tích cực & Khoa học về Hiệu suất",
    description: "Ấn phẩm chuyên biên soạn và chia sẻ kiến thức khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.",
    url: "https://leanitylabs.com",
    siteName: "Leanity Labs",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leanity Labs",
    description: "Ấn phẩm chuyên biên soạn và chia sẻ kiến thức khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${merriweather.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-primary bg-bg-surface">
        <Header />
        <div className="w-full flex relative min-h-[calc(100vh-57px)]">
          <main className="flex-1 flex min-h-screen relative z-10 min-w-0">
            <section className="flex-1 p-6 md:p-10 border-r border-border-color min-w-0">
              {children}
            </section>
            <RightSidebar />
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
