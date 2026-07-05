# WebDemo Generator 🚀

WebDemo is a powerful Next.js application designed for Web Development Agencies and Freelancers. It generates stunning, industry-specific website mockups dynamically using URL parameters, serving as a highly effective lead generation and pitching tool.

## How It Works

Instead of sending generic templates to prospective clients, you send them a link customized with their exact business name. The application automatically parses the business name and integrates it into a premium, responsive landing page template tailored to their industry.

### Example Usage
Simply share a URL formatted like this:
`https://yourdomain.com/[industry]/[BusinessName]`

- **Clinic Demo**: `https://yourdomain.com/clinic/AlShifaClinic` -> Becomes "Al Shifa Clinic"
- **Salon Demo**: `https://yourdomain.com/salon/GlowUpStudio` -> Becomes "Glow Up Studio"
- **Construction Demo**: `https://yourdomain.com/construction/ApexBuilders` -> Becomes "Apex Builders"

*Note: The app automatically spaces out PascalCase and CamelCase names for a natural look!*

## Features

- **Next.js 14+ App Router**: Built on the latest, fastest React framework.
- **Dynamic Routing**: One codebase handles infinite business names.
- **Premium Vanilla CSS**: Custom-built CSS modules utilizing CSS variables and modern glassmorphism—no Tailwind required.
- **Demo Switcher**: A floating UI component that allows clients to instantly switch templates and see their business name on different layouts.
- **Extensible Template Registry**: Easily add new industries by dropping a new React component into `src/templates` and registering it in `registry.tsx`.

## Getting Started

First, install dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the main landing page and Demo Directory.

## Designed and Developed By
**[Centre for Information Technology India](https://cit.org.in)**
