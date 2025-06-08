import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Sparkles, FileText, Download, Eye, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-header sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">GitMe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">
              Features
            </Link>
            <Link href="#templates" className="text-gray-300 hover:text-white transition-colors duration-300">
              Templates
            </Link>
            <Link href="/generator" className="text-gray-300 hover:text-white transition-colors duration-300">
              Generator
            </Link>
          </nav>
          <Link href="/generator">
            <Button className="glass-button">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="glass-badge mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Free & Open Source
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Create Beautiful
            <span className="text-orange-500 block">README Files</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate professional, eye-catching README files for your GitHub repositories in minutes. Choose from
            templates, customize with ease, and make your projects stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator">
              <Button size="lg" className="glass-button">
                <FileText className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
            </Link>
            <Button size="lg" className="glass-button-outline">
              <Github className="w-5 h-5 mr-2" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 glass-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-300">Powerful features to create the perfect README</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <FileText className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-white">Multiple Templates</CardTitle>
                <CardDescription className="text-gray-300">
                  Choose from professionally designed templates for different project types
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <Eye className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-white">Live Preview</CardTitle>
                <CardDescription className="text-gray-300">
                  See your README come to life with real-time markdown preview
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <Download className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-white">Easy Export</CardTitle>
                <CardDescription className="text-gray-300">
                  Download your README as markdown or copy to clipboard instantly
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-white">Smart Sections</CardTitle>
                <CardDescription className="text-gray-300">
                  Auto-generate badges, installation guides, and contribution sections
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <Github className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-white">GitHub Integration</CardTitle>
                <CardDescription className="text-gray-300">
                  Optimized for GitHub with proper formatting and best practices
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-300">
                  Generate professional READMEs in under 5 minutes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Style</h2>
            <p className="text-xl text-gray-300">Professional templates for every type of project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card group cursor-pointer">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-white">Web Application</CardTitle>
                <CardDescription className="text-gray-300">
                  Perfect for React, Vue, Angular, and other web projects
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card group cursor-pointer">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-white">API & Backend</CardTitle>
                <CardDescription className="text-gray-300">
                  Ideal for REST APIs, GraphQL, and server-side applications
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-card group cursor-pointer">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-white">Library & Package</CardTitle>
                <CardDescription className="text-gray-300">
                  Great for npm packages, Python libraries, and open source tools
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 glass-section">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Create Your Perfect README?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who have improved their GitHub presence with GitMe
          </p>
          <Link href="/generator">
            <Button size="lg" className="glass-button">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 glass-header">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Github className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold text-white">GitMe</span>
          </div>
          <p className="text-gray-300 mb-4">Making GitHub repositories more beautiful, one README at a time.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
