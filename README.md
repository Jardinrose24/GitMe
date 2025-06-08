# GitMe - Beautiful GitHub README Generator

A modern, glassmorphic web application for generating beautiful README files for your GitHub repositories. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Multiple Templates**: Choose from professionally designed templates for different project types
- **Live Preview**: Real-time markdown preview as you type
- **Easy Export**: Download as markdown or copy to clipboard
- **Smart Sections**: Auto-generate badges, installation guides, and contribution sections
- **GitHub Integration**: Optimized for GitHub with proper formatting and best practices
- **Glassmorphic Design**: Modern iOS-inspired design with beautiful glass effects
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/gitme.git
cd gitme
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Markdown** - Markdown rendering
- **Lucide React** - Beautiful icons
- **Class Variance Authority** - Component variant management

## 📁 Project Structure

\`\`\`
gitme/
├── app/                    # Next.js App Router
│   ├── generator/         # README generator page
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Landing page
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── readme-preview.tsx # README preview component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
│   ├── readme-generator.ts # README generation logic
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── ...config files
\`\`\`

## 🎨 Design System

The project uses a glassmorphic design system with:

- **Dark theme** with orange (#FF9900) accents
- **Glass effects** with backdrop blur and subtle borders
- **Smooth animations** and transitions
- **Responsive design** that works on all devices
- **Accessible components** built with Radix UI

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy GitMe is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gitme)

### Other Platforms

GitMe can be deployed to any platform that supports Next.js:

- **Netlify**: Use the `npm run build` command
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Use the Next.js preset

## 📝 Usage

1. **Choose a Template**: Select from web app, API, library, CLI, or mobile templates
2. **Fill the Form**: Add your project details, technologies, and features
3. **Preview**: See your README rendered in real-time
4. **Export**: Download the markdown file or copy to clipboard
5. **Add to GitHub**: Paste into your repository's README.md file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

## ⭐ Show your support

Give a ⭐️ if this project helped you!
\`\`\`

```text file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
