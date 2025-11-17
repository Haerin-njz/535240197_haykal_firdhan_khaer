import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Quiz React Praktikum",
  description: "Next.js Mini Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mt-5">
          {children}
        </div>
      </body>
    </html>
  );
}