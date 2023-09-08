import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Schlagball',
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
  themeColor: "#fff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
