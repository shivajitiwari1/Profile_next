# Shivaji Tiwari - Portfolio Website (Next.js)

A modern, professional portfolio website built with **Next.js 14** with **API Routes** for data management. All content is managed through JSON files and served via backend APIs.

## 🚀 Features

- ✨ **Next.js 14** with App Router
- 🎨 Modern, responsive design with dark theme
- 📡 **Backend API Routes** for data management
- 📊 **JSON-based data storage** (easy to update)
- 📱 Mobile-friendly with hamburger navigation
- 🎯 Highlights AI/LLM expertise and automation achievements
- ⚡ Fast performance with server-side rendering
- 🔄 Client-side data fetching from internal APIs

## 📁 Project Structure

```
portfolio-nextjs/
├── public/
│   └── images/
│       └── profile.jpg         # Your profile image
├── src/
│   ├── app/
│   │   ├── api/                # Backend API Routes
│   │   │   ├── portfolio/      # GET all data
│   │   │   ├── profile/        # GET profile + summary
│   │   │   ├── experience/     # GET experience data
│   │   │   ├── projects/       # GET projects data
│   │   │   ├── skills/         # GET skills data
│   │   │   └── services/       # GET services data
│   │   ├── layout.js           # Root layout
│   │   ├── page.js             # Main page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── *.module.css        # Component styles
│   └── data/
│       └── portfolio.json      # ALL DATA HERE! ⭐
├── package.json
├── next.config.js
└── README.md
```

## 🎯 Quick Start

### Prerequisites

- Node.js 18+ (Required for Next.js 14)
- npm or yarn

### Installation

1. **Extract the zip file**

2. **Navigate to project folder:**
   ```bash
   cd portfolio-nextjs
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   ```
   http://localhost:3000
   ```

## 🔧 How to Update Content

### All data is stored in `/src/data/portfolio.json`

This single JSON file contains ALL your portfolio data:

```json
{
  "profile": {
    "name": "Your Name",
    "email": "your@email.com",
    ...
  },
  "experience": [...],
  "projects": [...],
  "skills": {...},
  "services": [...]
}
```

**To update your portfolio:**
1. Open `src/data/portfolio.json`
2. Edit the JSON data
3. Save the file
4. Refresh the browser - changes appear instantly!

### API Endpoints

The project includes these backend API routes:

- `GET /api/portfolio` - Returns ALL data
- `GET /api/profile` - Returns profile, summary, stats
- `GET /api/experience` - Returns experience data
- `GET /api/projects` - Returns projects data
- `GET /api/skills` - Returns skills data
- `GET /api/services` - Returns services data

**Example API call:**
```javascript
fetch('/api/projects')
  .then(res => res.json())
  .then(data => console.log(data.projects))
```

## 🎨 Customization

### Updating Profile Image

Replace `public/images/profile.jpg` with your image

### Changing Colors

Edit colors in CSS module files in `src/components/`

Key colors:
- Primary Blue: `#2563eb`, `#60a5fa`
- Purple: `#8b5cf6`, `#c084fc`
- Background: `#1a1a2e`, `#16213e`

### Adding New Data

Edit `src/data/portfolio.json`:

**Add new project:**
```json
{
  "projects": [
    {
      "id": 5,
      "name": "New Project",
      "company": "Company Name",
      "description": "Project description",
      ...
    }
  ]
}
```

**Add new skill category:**
```json
{
  "skills": {
    "newCategory": ["Skill 1", "Skill 2"]
  }
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

The production build will be optimized and ready to deploy.

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder

### Other Platforms

Next.js works on any platform that supports Node.js:
- AWS
- Google Cloud
- DigitalOcean
- Railway
- Render

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Lucide React** - Icon library
- **CSS Modules** - Scoped styling
- **API Routes** - Backend endpoints

## 📖 API Documentation

### GET /api/portfolio

Returns complete portfolio data.

**Response:**
```json
{
  "profile": {...},
  "summary": {...},
  "stats": [...],
  "education": [...],
  "skills": {...},
  "experience": [...],
  "projects": [...],
  "services": [...]
}
```

### GET /api/profile

Returns profile information only.

**Response:**
```json
{
  "profile": {...},
  "summary": {...},
  "stats": [...]
}
```

### GET /api/experience

Returns work experience.

**Response:**
```json
{
  "experience": [...]
}
```

### GET /api/projects

Returns project portfolio.

**Response:**
```json
{
  "projects": [...]
}
```

### GET /api/skills

Returns technical skills.

**Response:**
```json
{
  "skills": {...}
}
```

### GET /api/services

Returns consulting services.

**Response:**
```json
{
  "services": [...]
}
```

## 🔍 Development Tips

### Adding New API Route

1. Create file in `src/app/api/[route-name]/route.js`
2. Import data from `portfolio.json`
3. Return data with `NextResponse.json()`

Example:
```javascript
import { NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

export async function GET() {
  return NextResponse.json({
    data: portfolioData.someData
  });
}
```

### Hot Reload

Changes to files automatically refresh the browser in development mode.

### Environment Variables

Create `.env.local` for environment variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or run on different port
PORT=3001 npm run dev
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

**Image not loading:**
- Check image is in `public/images/profile.jpg`
- Restart dev server after adding images

## 📧 Support

- Email: shivajitiwari@gmail.com
- LinkedIn: linkedin.com/in/shivajitiwari
- Phone: +91 9555839357

## 📄 License

© 2026 Shivaji Tiwari. All rights reserved.

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React Documentation](https://react.dev)
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
