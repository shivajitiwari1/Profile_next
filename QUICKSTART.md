# 🚀 QUICK START GUIDE

## Step-by-Step Setup (5 minutes)

### 1️⃣ Extract & Navigate
```bash
# Extract the zip file to your desired location
# Open terminal/command prompt and navigate:
cd portfolio-nextjs
```

### 2️⃣ Install Dependencies
```bash
npm install
```
⏱️ This takes 1-2 minutes

### 3️⃣ Start Development Server
```bash
npm run dev
```

### 4️⃣ Open Browser
```
http://localhost:3000
```

## ✅ You're Done!

Your portfolio is now running!

---

## 📝 Update Your Content

**Everything is in ONE file: `src/data/portfolio.json`**

### To Change Your Info:
1. Open `src/data/portfolio.json`
2. Edit the JSON data (name, email, projects, etc.)
3. Save the file
4. Refresh browser → See changes!

### Example Edits:

**Change your name:**
```json
"profile": {
  "name": "Your New Name",
  ...
}
```

**Add a new project:**
```json
"projects": [
  {
    "id": 5,
    "name": "My New Project",
    "company": "My Company",
    ...
  }
]
```

---

## 🎨 Replace Your Photo

1. Put your photo in: `public/images/`
2. Name it: `profile.jpg`
3. Refresh browser

---

## 🔥 Backend APIs Included!

Your portfolio has built-in API endpoints:

- `/api/portfolio` - All data
- `/api/profile` - Profile info
- `/api/experience` - Work history
- `/api/projects` - Your projects
- `/api/skills` - Technical skills
- `/api/services` - Services offered

**Test in browser:**
```
http://localhost:3000/api/portfolio
```

---

## 📦 Deploy to Production

### Vercel (Easiest - Free):
```bash
npm install -g vercel
vercel
```

### Or build locally:
```bash
npm run build
npm start
```

---

## 🆘 Common Issues

**Port 3000 in use?**
```bash
PORT=3001 npm run dev
```

**Need help?**
- Check README.md for full documentation
- All data structure explained in portfolio.json

---

## 🎯 Next Steps

1. ✅ Update `portfolio.json` with your info
2. ✅ Replace profile photo
3. ✅ Test all sections work
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share your portfolio!

**Happy Coding! 🚀**
