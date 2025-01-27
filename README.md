# Portfolio Website

## Description
This portfolio website showcases my projects, skills, and experience as a developer. It features a modern and responsive design, built using React and styled with Tailwind CSS. Visitors can learn more about me, explore my work, and get in touch via the contact form.

## Features
- **About Section:** Highlights my background, skills, and interests.
- **Projects Section:** Displays a gallery of my key projects with descriptions and links to live demos or repositories.
- **Contact Form:** Allows visitors to send me messages directly.
- **Responsive Design:** Optimized for viewing on different devices (desktop, tablet, mobile).
- **Dark Mode Support:** Provides an aesthetically pleasing experience in both light and dark themes.

## Technologies Used
- **Frontend:** React
- **Styling:** Tailwind CSS
- **Contact Form:** Web3Forms API
- **Hosting:** GitHub Pages

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
1. Create a `.env` file in the root directory and add the following line, replacing `your-access-key` with your Web3Forms API key:
   ```plaintext
   REACT_APP_ACCESS_KEY=your-access-key
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open your browser and visit [http://localhost:3000](http://localhost:3000).

### Building for Production
To create an optimized production build, run:
```bash
npm run build
```
The build files will be available in the `build/` directory.

### Deployment
This project is hosted using GitHub Pages. To deploy, follow these steps:
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following lines to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the site:
   ```bash
   npm run deploy
   ```

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
If you have any questions or feedback, feel free to reach out:
- **Email:** [chitesh2024@gmail.com](mailto:chitesh2024@gmail.com)
- **GitHub:** [ChiteshSarve](https://github.com/ChiteshSarve)
- **LinkedIn:** [Chitesh Sarve](https://linkedin.com/in/chiteshsarve)

