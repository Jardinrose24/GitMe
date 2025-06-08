"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowLeft, Download, Copy, Eye } from "lucide-react"
import { generateReadme } from "@/lib/readme-generator"
import { ReadmePreview } from "@/components/readme-preview"
import { useToast } from "@/components/ui/use-toast"

interface ReadmeData {
  projectName: string
  description: string
  template: string
  author: string
  githubUsername: string
  repoUrl: string
  demoUrl: string
  technologies: string[]
  features: string[]
  installation: string
  usage: string
  contributing: boolean
  license: string
  badges: string[]
}

export default function GeneratorPage() {
  const { toast } = useToast()

  const [readmeData, setReadmeData] = useState<ReadmeData>({
    projectName: "",
    description: "",
    template: "web-app",
    author: "",
    githubUsername: "",
    repoUrl: "",
    demoUrl: "",
    technologies: [],
    features: [],
    installation: "",
    usage: "",
    contributing: true,
    license: "MIT",
    badges: [],
  })

  const [generatedMarkdown, setGeneratedMarkdown] = useState("")
  const [activeTab, setActiveTab] = useState("form")

  const handleInputChange = (field: keyof ReadmeData, value: any) => {
    setReadmeData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayInput = (field: "technologies" | "features" | "badges", value: string) => {
    const items = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
    handleInputChange(field, items)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedMarkdown)
    toast({
      title: "Copied to clipboard",
      description: "README markdown has been copied to your clipboard",
    })
  }

  const handleDownload = () => {
    const blob = new Blob([generatedMarkdown], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "README.md"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "Downloaded",
      description: "README.md has been downloaded",
    })
  }

  const handleGenerate = () => {
    const markdown = generateReadme(readmeData)
    setGeneratedMarkdown(markdown)
    setActiveTab("preview")
  }

  return (
    <div className="min-h-screen page-transition">
      {/* Header */}
      <header className="glass-header sticky top-0 z-50 animate-fade-in-down">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 animate-fade-in-left">
            <Link href="/" className="flex items-center gap-2 group">
              <ArrowLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <Github className="w-6 h-6 text-orange-500 icon-hover" />
              <span className="text-xl font-bold text-white text-glow">GitMe</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 animate-fade-in-right">
            <Button onClick={handleCopy} disabled={!generatedMarkdown} className="glass-button-outline">
              <Copy className="w-4 h-4 mr-2 icon-hover" />
              Copy
            </Button>
            <Button onClick={handleDownload} disabled={!generatedMarkdown} className="glass-button">
              <Download className="w-4 h-4 mr-2 icon-hover" />
              Download
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-white mb-2 text-glow">README Generator</h1>
          <p className="text-gray-300">Fill out the form below to generate your perfect README file</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full animate-fade-in-up animate-delay-200">
          <TabsList className="glass-tabs">
            <TabsTrigger value="form" className="glass-tab">
              Form
            </TabsTrigger>
            <TabsTrigger value="preview" disabled={!generatedMarkdown} className="glass-tab">
              <Eye className="w-4 h-4 mr-2 icon-hover" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8 stagger-animation">
              {/* Basic Information */}
              <Card className="glass-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-white">Basic Information</CardTitle>
                  <CardDescription className="text-gray-300">Essential details about your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="animate-fade-in-up animate-delay-100">
                    <Label htmlFor="projectName" className="text-gray-200">
                      Project Name *
                    </Label>
                    <Input
                      id="projectName"
                      value={readmeData.projectName}
                      onChange={(e) => handleInputChange("projectName", e.target.value)}
                      placeholder="My Awesome Project"
                      className="glass-input"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-200">
                    <Label htmlFor="description" className="text-gray-200">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={readmeData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="A brief description of what your project does..."
                      rows={3}
                      className="glass-input"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-300">
                    <Label htmlFor="template" className="text-gray-200">
                      Template
                    </Label>
                    <Select value={readmeData.template} onValueChange={(value) => handleInputChange("template", value)}>
                      <SelectTrigger className="glass-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-card">
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="api">API & Backend</SelectItem>
                        <SelectItem value="library">Library & Package</SelectItem>
                        <SelectItem value="cli">CLI Tool</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="animate-fade-in-up animate-delay-400">
                    <Label htmlFor="author" className="text-gray-200">
                      Author
                    </Label>
                    <Input
                      id="author"
                      value={readmeData.author}
                      onChange={(e) => handleInputChange("author", e.target.value)}
                      placeholder="Your Name"
                      className="glass-input"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Links & URLs */}
              <Card className="glass-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-white">Links & URLs</CardTitle>
                  <CardDescription className="text-gray-300">Repository and demo links</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="animate-fade-in-up animate-delay-100">
                    <Label htmlFor="githubUsername" className="text-gray-200">
                      GitHub Username
                    </Label>
                    <Input
                      id="githubUsername"
                      value={readmeData.githubUsername}
                      onChange={(e) => handleInputChange("githubUsername", e.target.value)}
                      placeholder="yourusername"
                      className="glass-input"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-200">
                    <Label htmlFor="repoUrl" className="text-gray-200">
                      Repository URL
                    </Label>
                    <Input
                      id="repoUrl"
                      value={readmeData.repoUrl}
                      onChange={(e) => handleInputChange("repoUrl", e.target.value)}
                      placeholder="https://github.com/yourusername/repo"
                      className="glass-input"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-300">
                    <Label htmlFor="demoUrl" className="text-gray-200">
                      Demo URL (optional)
                    </Label>
                    <Input
                      id="demoUrl"
                      value={readmeData.demoUrl}
                      onChange={(e) => handleInputChange("demoUrl", e.target.value)}
                      placeholder="https://your-demo.vercel.app"
                      className="glass-input"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Technologies & Features */}
              <Card className="glass-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-white">Technologies & Features</CardTitle>
                  <CardDescription className="text-gray-300">
                    What technologies and features does your project use?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="animate-fade-in-up animate-delay-100">
                    <Label htmlFor="technologies" className="text-gray-200">
                      Technologies (comma-separated)
                    </Label>
                    <Input
                      id="technologies"
                      value={readmeData.technologies.join(", ")}
                      onChange={(e) => handleArrayInput("technologies", e.target.value)}
                      placeholder="React, TypeScript, Tailwind CSS, Next.js"
                      className="glass-input"
                    />
                    <div className="flex flex-wrap gap-1 mt-2">
                      {readmeData.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          className="glass-badge animate-scale-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="animate-fade-in-up animate-delay-200">
                    <Label htmlFor="features" className="text-gray-200">
                      Key Features (comma-separated)
                    </Label>
                    <Input
                      id="features"
                      value={readmeData.features.join(", ")}
                      onChange={(e) => handleArrayInput("features", e.target.value)}
                      placeholder="Responsive design, Dark mode, Real-time updates"
                      className="glass-input"
                    />
                    <div className="flex flex-wrap gap-1 mt-2">
                      {readmeData.features.map((feature, index) => (
                        <Badge
                          key={index}
                          className="glass-badge-outline animate-scale-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="animate-fade-in-up animate-delay-300">
                    <Label htmlFor="badges" className="text-gray-200">
                      Badges (comma-separated)
                    </Label>
                    <Input
                      id="badges"
                      value={readmeData.badges.join(", ")}
                      onChange={(e) => handleArrayInput("badges", e.target.value)}
                      placeholder="license, version, build-status"
                      className="glass-input"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Instructions */}
              <Card className="glass-card animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-white">Instructions</CardTitle>
                  <CardDescription className="text-gray-300">Installation and usage instructions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="animate-fade-in-up animate-delay-100">
                    <Label htmlFor="installation" className="text-gray-200">
                      Installation Instructions
                    </Label>
                    <Textarea
                      id="installation"
                      value={readmeData.installation}
                      onChange={(e) => handleInputChange("installation", e.target.value)}
                      placeholder="npm install&#10;npm run dev"
                      rows={4}
                      className="glass-input"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-200">
                    <Label htmlFor="usage" className="text-gray-200">
                      Usage Instructions
                    </Label>
                    <Textarea
                      id="usage"
                      value={readmeData.usage}
                      onChange={(e) => handleInputChange("usage", e.target.value)}
                      placeholder="How to use your project..."
                      rows={4}
                      className="glass-input"
                    />
                  </div>
                  <div className="flex items-center space-x-2 animate-fade-in-up animate-delay-300">
                    <Checkbox
                      id="contributing"
                      checked={readmeData.contributing}
                      onCheckedChange={(checked) => handleInputChange("contributing", checked)}
                      className="border-gray-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 transition-all duration-300"
                    />
                    <Label htmlFor="contributing" className="text-gray-200">
                      Include Contributing Guidelines
                    </Label>
                  </div>
                  <div className="animate-fade-in-up animate-delay-400">
                    <Label htmlFor="license" className="text-gray-200">
                      License
                    </Label>
                    <Select value={readmeData.license} onValueChange={(value) => handleInputChange("license", value)}>
                      <SelectTrigger className="glass-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-card">
                        <SelectItem value="MIT">MIT</SelectItem>
                        <SelectItem value="Apache-2.0">Apache 2.0</SelectItem>
                        <SelectItem value="GPL-3.0">GPL 3.0</SelectItem>
                        <SelectItem value="BSD-3-Clause">BSD 3-Clause</SelectItem>
                        <SelectItem value="ISC">ISC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center animate-scale-in animate-delay-600">
              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={!readmeData.projectName || !readmeData.description}
                className="glass-button"
              >
                Generate README
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="animate-fade-in-up">
            <ReadmePreview markdown={generatedMarkdown} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
