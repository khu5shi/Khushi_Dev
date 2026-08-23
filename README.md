# Khushi Agrawal - Personal Portfolio 🚀

Hi there! Welcome to the repository for my personal portfolio. I built this website to showcase my journey as a Full-Stack Software Engineer, my projects, and my skills in a clean, interactive, and modern way.

## 🌟 What does this portfolio do?

This isn't just a static HTML page. It's a dynamic web application built with modern tools to provide a seamless user experience. Here is what makes it special:

- **Live Coding Stats**: Instead of hardcoding my GitHub or GeeksForGeeks stats, the site actually fetches my real-time data using custom API routes. 
- **Direct WhatsApp Connect**: Instead of a boring contact form that sends emails into the void, I built a direct integration that lets recruiters or collaborators chat with me straight on WhatsApp using pre-formatted messages.
- **Bento Grid Design**: The UI uses a modern "bento box" style layout that keeps information organized, clean, and easy to read.
- **Dark Mode / Light Mode**: A fully integrated theme toggle that remembers the user's preference.

## 🛠️ Built With

- **Next.js (App Router)** - For server-side rendering, routing, and building the API endpoints.
- **TypeScript** - To keep the code reliable and bug-free.
- **Tailwind CSS** - For styling everything without writing custom CSS files (mostly!).
- **React Icons** - For the sleek icons used throughout the site.

## 📁 How is it structured?

If you're exploring the code, here is a quick map of where everything lives:

- **`src/config/portfolio.config.ts`**: This is the most important file! It acts as the brain of the portfolio. All the text, projects, skills, and links are stored here. If I need to update my CGPA or add a new project, I only change this one file.
- **`src/components/sections/`**: This folder contains all the big blocks you see on the screen (Hero, Projects, Skills, Experience, LiveStats, Contact).
- **`src/app/`**: This is where Next.js handles the routing and the main layout of the page.
- **`tailwind.config.js`**: Contains the custom color themes (dark and light palettes) used across the site.

## 🚀 Running it locally

If you want to run this code on your own machine, it's super simple. 

1. **Clone the repo**
   ```bash
   git clone https://github.com/khu5shi/Khushi_Dev.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **View the magic** 
   Open `http://localhost:3000` in your browser.

## 🤝 Let's Connect

If you like what you see or want to collaborate on a project, feel free to reach out to me! You can find my contact details directly on the live portfolio.

Thanks for stopping by! ☕
