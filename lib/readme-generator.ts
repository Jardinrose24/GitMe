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

export function generateReadme(data: ReadmeData): string {
  let readme = ""

  // Title and badges
  readme += `# ${data.projectName}\n\n`

  if (data.badges.length > 0) {
    data.badges.forEach((badge) => {
      switch (badge.toLowerCase()) {
        case "license":
          readme += `![License](https://img.shields.io/badge/license-${data.license}-blue.svg) `
          break
        case "version":
          readme += `![Version](https://img.shields.io/badge/version-1.0.0-green.svg) `
          break
        case "build-status":
          readme += `![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg) `
          break
        case "npm":
          readme += `![npm](https://img.shields.io/npm/v/${data.projectName.toLowerCase()}.svg) `
          break
        default:
          readme += `![${badge}](https://img.shields.io/badge/${badge}-blue.svg) `
      }
    })
    readme += "\n\n"
  }

  // Description
  readme += `${data.description}\n\n`

  // Demo link
  if (data.demoUrl) {
    readme += `🚀 **[Live Demo](${data.demoUrl})**\n\n`
  }

  // Features
  if (data.features.length > 0) {
    readme += `## ✨ Features\n\n`
    data.features.forEach((feature) => {
      readme += `- ${feature}\n`
    })
    readme += "\n"
  }

  // Technologies
  if (data.technologies.length > 0) {
    readme += `## 🛠️ Built With\n\n`
    data.technologies.forEach((tech) => {
      readme += `- ${tech}\n`
    })
    readme += "\n"
  }

  // Installation
  if (data.installation) {
    readme += `## 🚀 Getting Started\n\n`
    readme += `### Prerequisites\n\n`

    if (data.template === "web-app") {
      readme += `Make sure you have Node.js installed on your machine.\n\n`
    }

    readme += `### Installation\n\n`
    readme += "```bash\n"
    readme += data.installation
    readme += "\n```\n\n"
  }

  // Usage
  if (data.usage) {
    readme += `## 📖 Usage\n\n`
    readme += `${data.usage}\n\n`
  }

  // API Documentation (for API template)
  if (data.template === "api") {
    readme += `## 📚 API Documentation\n\n`
    readme += `### Endpoints\n\n`
    readme += `- \`GET /api/example\` - Get example data\n`
    readme += `- \`POST /api/example\` - Create new example\n`
    readme += `- \`PUT /api/example/:id\` - Update example\n`
    readme += `- \`DELETE /api/example/:id\` - Delete example\n\n`
  }

  // Screenshots section
  readme += `## 📸 Screenshots\n\n`
  readme += `![Screenshot](https://via.placeholder.com/800x400?text=Add+Your+Screenshot+Here)\n\n`

  // Contributing
  if (data.contributing) {
    readme += `## 🤝 Contributing\n\n`
    readme += `Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.\n\n`
    readme += `1. Fork the Project\n`
    readme += `2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)\n`
    readme += `3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)\n`
    readme += `4. Push to the Branch (\`git push origin feature/AmazingFeature\`)\n`
    readme += `5. Open a Pull Request\n\n`
  }

  // License
  readme += `## 📄 License\n\n`
  readme += `This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.\n\n`

  // Contact
  if (data.author || data.githubUsername) {
    readme += `## 👤 Author\n\n`
    if (data.author) {
      readme += `**${data.author}**\n\n`
    }
    if (data.githubUsername) {
      readme += `- GitHub: [@${data.githubUsername}](https://github.com/${data.githubUsername})\n`
    }
    if (data.repoUrl) {
      readme += `- Project Link: [${data.repoUrl}](${data.repoUrl})\n`
    }
    readme += "\n"
  }

  // Acknowledgments
  readme += `## 🙏 Acknowledgments\n\n`
  readme += `- Hat tip to anyone whose code was used\n`
  readme += `- Inspiration\n`
  readme += `- etc\n\n`

  // Support
  readme += `## ⭐ Show your support\n\n`
  readme += `Give a ⭐️ if this project helped you!\n\n`

  return readme
}
