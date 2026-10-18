import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { OSProvider } from "@/lib/os";
import Desktop from "@/components/Desktop";

export const metadata: Metadata = {
  title: "Athaillah Sulthan Firasyal Ilmi — Portfolio",
  description:
    "macOS-style interactive portfolio of Athaillah Sulthan Firasyal Ilmi — web, app & game developer, project manager, and tech leader.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="h-full">
        <LangProvider>
          <OSProvider>
            <Desktop>{children}</Desktop>
          </OSProvider>
        </LangProvider>
      </body>
    </html>
  );
}
