import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Encrypted Mental Health Survey",
  description: "Privacy-preserving mental health questionnaire using FHEVM",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mental-health-bg text-foreground antialiased`}>
        <div className="fixed inset-0 w-full h-full mental-health-bg z-[-20]"></div>
        <main className="flex flex-col max-w-screen-lg mx-auto pb-20 px-4">
          <nav className="flex flex-col sm:flex-row w-full h-fit py-6 sm:py-10 justify-between items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Mental Health Survey Logo"
              width={80}
              height={80}
              className="rounded-full sm:w-[120px] sm:h-[120px]"
            />
            <h1 className="text-xl sm:text-3xl font-bold text-white text-center sm:text-left">
              Encrypted Mental Health Survey
            </h1>
          </nav>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}

