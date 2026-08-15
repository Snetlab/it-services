import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Serhii IT Services", description: "Consulenza IT, Proxmox, Kubernetes, Microsoft 365 e supporto sistemistico a Roma e da remoto.", other: { "codex-preview": "development" }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="it"><body>{children}</body></html>}
