"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ReactMarkdown from "react-markdown"

interface ReadmePreviewProps {
  markdown: string
}

export function ReadmePreview({ markdown }: ReadmePreviewProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="rendered" className="w-full">
        <TabsList className="glass-tabs">
          <TabsTrigger value="rendered" className="glass-tab">
            Rendered
          </TabsTrigger>
          <TabsTrigger value="markdown" className="glass-tab">
            Markdown
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rendered">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="markdown">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Markdown Source</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-[rgba(44,44,46,0.8)] backdrop-blur-[10px] p-4 rounded-xl overflow-x-auto text-sm text-gray-300 border border-[rgba(255,255,255,0.1)]">
                <code>{markdown}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
