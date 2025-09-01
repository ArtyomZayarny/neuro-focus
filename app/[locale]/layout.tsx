import ThemeToggle from "../../components/ThemeToggle";
import type { ReactNode } from "react";

export default function LocaleLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  return (
    <html lang={params.locale}>
      <body>
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-adaptive-quaternary">
            Locale: {params.locale}
          </div>
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
