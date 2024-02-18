import Navigation from '@/components/site/navigation'
import Footer from '@/components/ui/footer'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Navigation />
        {children}
        <Footer/>
      </main>
    </ClerkProvider>
  )
}

export default layout
