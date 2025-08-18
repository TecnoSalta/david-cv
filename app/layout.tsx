import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Mendez - Senior Backend Developer | C# | .NET",
  description: "Senior Backend Developer specializing in C#, .NET, and scalable system architecture. Building robust APIs and clean code solutions.",
  authors: [{ name: "David Mendez" }],
  keywords: ["Senior Backend Developer", "C#", ".NET", "ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "Software Engineer"],
  openGraph: {
    title: "David Mendez - Senior Backend Developer",
    description: "Senior Backend Developer specializing in C#, .NET, and scalable system architecture.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "David Mendez - Senior Backend Developer",
    description: "Senior Backend Developer specializing in C#, .NET, and scalable system architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}