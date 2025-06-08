import type React from "react"
import { ToastProvider } from "@/components/ui/toast"

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ToastProvider>{children}</ToastProvider>
    </>
  )
}
