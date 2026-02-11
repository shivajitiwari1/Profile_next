import './globals.css'

export const metadata = {
  title: 'Shivaji Tiwari - Solutions Architect | Full-Stack Developer',
  description: 'Solutions Architect and Senior Full-Stack Developer with 16+ years experience. Specializing in AI/LLM integration, automation, and full-stack development.',
  keywords: 'Solutions Architect, Full-Stack Developer, React, Next.js, Node.js, PHP, AI/LLM Integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
