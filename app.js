import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configuration for marked
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false
});

// Tech Stack Data
const TECH_DATA = [
  // Frontend
  { id: 'html5', name: 'HTML5', category: 'Frontend', logo: 'html5', color: 'E34F26' },
  { id: 'css3', name: 'CSS3', category: 'Frontend', logo: 'css3', color: '1572B6' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', logo: 'javascript', color: 'F7DF1E' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', logo: 'typescript', color: '3178C6' },
  { id: 'react', name: 'React', category: 'Frontend', logo: 'react', color: '61DAFB' },
  { id: 'vue', name: 'Vue.js', category: 'Frontend', logo: 'vue.js', color: '4FC08D' },
  { id: 'angular', name: 'Angular', category: 'Frontend', logo: 'angular', color: 'DD0031' },
  { id: 'svelte', name: 'Svelte', category: 'Frontend', logo: 'svelte', color: 'FF3E00' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', logo: 'next.js', color: '000000' },
  { id: 'tailwindcss', name: 'TailwindCSS', category: 'Frontend', logo: 'tailwindcss', color: '06B6D4' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', logo: 'bootstrap', color: '7952B3' },
  { id: 'sass', name: 'Sass', category: 'Frontend', logo: 'sass', color: 'CC6699' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend', logo: 'node.js', color: '339933' },
  { id: 'express', name: 'Express', category: 'Backend', logo: 'express', color: '000000' },
  { id: 'nestjs', name: 'NestJS', category: 'Backend', logo: 'nestjs', color: 'E0234E' },
  { id: 'python', name: 'Python', category: 'Backend', logo: 'python', color: '3776AB' },
  { id: 'django', name: 'Django', category: 'Backend', logo: 'django', color: '092E20' },
  { id: 'flask', name: 'Flask', category: 'Backend', logo: 'flask', color: '000000' },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend', logo: 'fastapi', color: '009688' },
  { id: 'go', name: 'Go', category: 'Backend', logo: 'go', color: '00ADD8' },
  { id: 'rust', name: 'Rust', category: 'Backend', logo: 'rust', color: '000000' },
  { id: 'java', name: 'Java', category: 'Backend', logo: 'openjdk', color: 'ED8B00' },
  { id: 'springboot', name: 'Spring Boot', category: 'Backend', logo: 'springboot', color: '6DB33F' },
  { id: 'php', name: 'PHP', category: 'Backend', logo: 'php', color: '777BB4' },
  { id: 'laravel', name: 'Laravel', category: 'Backend', logo: 'laravel', color: 'FF2D20' },
  { id: 'csharp', name: 'C#', category: 'Backend', logo: 'c-sharp', color: '239120' },

  // Database
  { id: 'mysql', name: 'MySQL', category: 'Database', logo: 'mysql', color: '4479A1' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', logo: 'postgresql', color: '4169E1' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', logo: 'mongodb', color: '47A248' },
  { id: 'redis', name: 'Redis', category: 'Database', logo: 'redis', color: 'DC382D' },
  { id: 'sqlite', name: 'SQLite', category: 'Database', logo: 'sqlite', color: '003B57' },
  { id: 'firebase', name: 'Firebase', category: 'Database', logo: 'firebase', color: 'FFCA28' },
  { id: 'supabase', name: 'Supabase', category: 'Database', logo: 'supabase', color: '3ECF8E' },
  { id: 'graphql', name: 'GraphQL', category: 'Database', logo: 'graphql', color: 'E10098' },
  { id: 'prisma', name: 'Prisma', category: 'Database', logo: 'prisma', color: '2D3748' },

  // Cloud & DevOps
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps', logo: 'docker', color: '2496ED' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'Cloud & DevOps', logo: 'kubernetes', color: '326CE5' },
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps', logo: 'amazon-web-services', color: '232F3E' },
  { id: 'gcp', name: 'GCP', category: 'Cloud & DevOps', logo: 'google-cloud', color: '4285F4' },
  { id: 'azure', name: 'Azure', category: 'Cloud & DevOps', logo: 'microsoft-azure', color: '0089D6' },
  { id: 'vercel', name: 'Vercel', category: 'Cloud & DevOps', logo: 'vercel', color: '000000' },
  { id: 'netlify', name: 'Netlify', category: 'Cloud & DevOps', logo: 'netlify', color: '00C7B7' },
  { id: 'githubactions', name: 'GitHub Actions', category: 'Cloud & DevOps', logo: 'github-actions', color: '2088FF' },
  { id: 'terraform', name: 'Terraform', category: 'Cloud & DevOps', logo: 'terraform', color: '7B42BC' },
  { id: 'nginx', name: 'Nginx', category: 'Cloud & DevOps', logo: 'nginx', color: '009639' },

  // Mobile & Desktop
  { id: 'reactnative', name: 'React Native', category: 'Mobile & Desktop', logo: 'react', color: '61DAFB' },
  { id: 'flutter', name: 'Flutter', category: 'Mobile & Desktop', logo: 'flutter', color: '02569B' },
  { id: 'swift', name: 'Swift', category: 'Mobile & Desktop', logo: 'swift', color: 'F05138' },
  { id: 'kotlin', name: 'Kotlin', category: 'Mobile & Desktop', logo: 'kotlin', color: '7F52FF' },
  { id: 'android', name: 'Android', category: 'Mobile & Desktop', logo: 'android', color: '3DDC84' },
  { id: 'electron', name: 'Electron', category: 'Mobile & Desktop', logo: 'electron', color: '47848F' },

  // Tools & Design
  { id: 'git', name: 'Git', category: 'Tools & Design', logo: 'git', color: 'F05032' },
  { id: 'vscode', name: 'VS Code', category: 'Tools & Design', logo: 'visual-studio-code', color: '007ACC' },
  { id: 'figma', name: 'Figma', category: 'Tools & Design', logo: 'figma', color: 'F24E1E' },
  { id: 'photoshop', name: 'Photoshop', category: 'Tools & Design', logo: 'adobe-photoshop', color: '31A8FF' },
  { id: 'postman', name: 'Postman', category: 'Tools & Design', logo: 'postman', color: 'FF6C37' },
  { id: 'jira', name: 'Jira', category: 'Tools & Design', logo: 'jira', color: '0052CC' }
];

// Presets Definition
const PRESETS = {
  minimalist: {
    greeting: "Hi there 👋, I'm",
    name: "Elena Rostova",
    title: "Backend developer specializing in distributed systems",
    subtitle: "Focusing on Go, Rust, and building highly reliable, clean APIs.",
    layout: "classic",
    about: "🔭 I’m currently developing cloud native architectures.\n🌱 I’m learning low-level networking in Rust.\n⚡ Fun fact: I write compiler prototypes in my spare time.",
    banner: "",
    social_github: "elenarostova",
    social_linkedin: "https://linkedin.com/in/elena-rostova-dev",
    social_twitter: "elena_codes",
    social_email: "elena@example.dev",
    social_portfolio: "https://elena.codes",
    social_devto: "",
    social_medium: "",
    social_youtube: "",
    badge_style: "flat-square",
    stats_theme: "nord",
    show_stats: true,
    show_langs: true,
    show_streak: false,
    show_trophies: false,
    show_activity: false,
    stats_border: false,
    stats_icons: true,
    stats_private: true,
    visitor_badge: true,
    visitor_style: "flat-square",
    visitor_color: "555555",
    sponsorship: false,
    dev_joke: false,
    readme_quotes: true,
    selected_techs: ['rust', 'go', 'postgresql', 'redis', 'docker', 'kubernetes', 'git', 'vscode']
  },
  fullstack: {
    greeting: "Hello World 🌎, I'm",
    name: "Alex Morgan",
    title: "Full Stack Engineer",
    subtitle: "Crafting beautiful frontends and highly reliable server systems.",
    layout: "centered",
    about: "🚀 Currently building SaaS products using Next.js and NestJS.\n🎨 Loving CSS, animations, and micro-interactions.\n✉️ Drop me an email if you'd like to collaborate!",
    banner: "https://raw.githubusercontent.com/39712alex/39712alex/master/banner.gif",
    social_github: "alexmorgan",
    social_linkedin: "https://linkedin.com/in/alexmorgan",
    social_twitter: "alex_codes",
    social_email: "alex@example.com",
    social_portfolio: "https://alexmorgan.dev",
    social_devto: "alexmorgan",
    social_medium: "@alexmorgan",
    social_youtube: "",
    badge_style: "for-the-badge",
    stats_theme: "tokyonight",
    show_stats: true,
    show_langs: true,
    show_streak: true,
    show_trophies: true,
    show_activity: false,
    stats_border: true,
    stats_icons: true,
    stats_private: true,
    visitor_badge: true,
    visitor_style: "for-the-badge",
    visitor_color: "6366f1",
    sponsorship: true,
    sponsor_username: "alexmorgan",
    dev_joke: true,
    readme_quotes: true,
    selected_techs: ['html5', 'css3', 'javascript', 'typescript', 'react', 'nextjs', 'tailwindcss', 'nodejs', 'express', 'nestjs', 'postgresql', 'mongodb', 'docker', 'vercel', 'git', 'figma']
  },
  datascience: {
    greeting: "Greetings! 📊 I'm",
    name: "Dr. Clara Winters",
    title: "Data Scientist & AI Researcher",
    subtitle: "Turning complex messy datasets into predictive insights and models.",
    layout: "classic",
    about: "🧬 Researching natural language processing algorithms.\n🔬 Expert in Python statistical libraries and machine learning pipelines.\n📈 Sharing data visualization techniques and datasets.",
    banner: "",
    social_github: "clarawinters",
    social_linkedin: "https://linkedin.com/in/clara-winters-phd",
    social_twitter: "",
    social_email: "clara.winters@domain.edu",
    social_portfolio: "",
    social_devto: "",
    social_medium: "@clarawinters",
    social_youtube: "",
    badge_style: "flat",
    stats_theme: "vision-friendly-dark",
    show_stats: true,
    show_langs: true,
    show_streak: false,
    show_trophies: false,
    show_activity: true,
    stats_border: true,
    stats_icons: true,
    stats_private: false,
    visitor_badge: true,
    visitor_style: "flat",
    visitor_color: "4285F4",
    sponsorship: false,
    dev_joke: false,
    readme_quotes: false,
    selected_techs: ['python', 'fastapi', 'postgresql', 'sqlite', 'aws', 'gcp', 'docker', 'git', 'vscode']
  },
  creative: {
    greeting: "Hi, I'm",
    name: "René Vance",
    title: "Creative Developer & UX Architect",
    subtitle: "Merging design guidelines with technical code to construct digital art.",
    layout: "centered",
    about: "🎨 Specialized in interactive vector graphics, 3D WebGL, and styling systems.\n🕹️ Building playful games and web interfaces.\n💡 Fun fact: I color-coordinate my setup to my current coding project.",
    banner: "",
    social_github: "renevance",
    social_linkedin: "https://linkedin.com/in/renevance",
    social_twitter: "rene_ux",
    social_email: "rene@design.studio",
    social_portfolio: "https://rene.studio",
    social_devto: "",
    social_medium: "",
    social_youtube: "",
    badge_style: "for-the-badge",
    stats_theme: "radical",
    show_stats: true,
    show_langs: false,
    show_streak: true,
    show_trophies: true,
    show_activity: false,
    stats_border: false,
    stats_icons: true,
    stats_private: true,
    visitor_badge: true,
    visitor_style: "for-the-badge",
    visitor_color: "a855f7",
    sponsorship: true,
    sponsor_username: "renevance",
    dev_joke: false,
    readme_quotes: true,
    selected_techs: ['html5', 'css3', 'javascript', 'typescript', 'react', 'vue', 'tailwindcss', 'sass', 'nodejs', 'supabase', 'firebase', 'vercel', 'netlify', 'git', 'figma', 'photoshop']
  }
};

// Application State
const state = {
  layout: 'classic',
  greeting: "Hi there 👋, I'm",
  name: "Alex Morgan",
  title: "Full Stack Software Engineer",
  subtitle: "Passionate about building scalable web apps and open source",
  banner: "",
  about: "🔭 I’m currently working on Next.js & Node.js projects\n🌱 I’m currently learning Kubernetes and Advanced DevOps\n💬 Ask me about React, Cloud Architecture, or Web Performance",
  
  social_github: "alexmorgan",
  social_linkedin: "https://linkedin.com/in/alexmorgan",
  social_twitter: "",
  social_email: "alex@example.com",
  social_portfolio: "",
  social_devto: "",
  social_medium: "",
  social_youtube: "",
  badge_style: 'for-the-badge',
  
  stats_theme: 'tokyonight',
  show_stats: true,
  show_langs: true,
  show_streak: true,
  show_trophies: true,
  show_activity: false,
  stats_border: true,
  stats_icons: true,
  stats_private: true,
  
  visitor_badge: true,
  visitor_style: 'flat-square',
  visitor_color: 'indigo',
  
  sponsorship: false,
  sponsor_username: 'alexmorgan',
  dev_joke: false,
  readme_quotes: false,

  selected_techs: new Set(['html5', 'css3', 'javascript', 'typescript', 'react', 'nodejs', 'postgresql', 'docker', 'git', 'vscode']),
  isDirty: false // tracks manual edits in editor
};

// DOM Elements
const elements = {
  themeToggle: document.getElementById('theme-toggle-btn'),
  presetSelector: document.getElementById('preset-selector'),
  tabBtns: document.querySelectorAll('.tab-btn'),
  tabContents: document.querySelectorAll('.sidebar-content'),
  layoutCards: document.querySelectorAll('.layout-selector .selector-card'),
  
  // Text Inputs
  inputGreeting: document.getElementById('input-greeting'),
  inputName: document.getElementById('input-name'),
  inputTitle: document.getElementById('input-title'),
  inputSubtitle: document.getElementById('input-subtitle'),
  inputBanner: document.getElementById('input-banner'),
  inputAbout: document.getElementById('input-about'),
  
  // Socials
  selectBadgeStyle: document.getElementById('select-badge-style'),
  socialGithub: document.getElementById('social-github'),
  socialLinkedin: document.getElementById('social-linkedin'),
  socialTwitter: document.getElementById('social-twitter'),
  socialEmail: document.getElementById('social-email'),
  socialPortfolio: document.getElementById('social-portfolio'),
  socialDevto: document.getElementById('social-devto'),
  socialMedium: document.getElementById('social-medium'),
  socialYoutube: document.getElementById('social-youtube'),
  
  // Stats Options
  selectStatsTheme: document.getElementById('select-stats-theme'),
  chkShowStats: document.getElementById('chk-show-stats'),
  chkShowLangs: document.getElementById('chk-show-langs'),
  chkShowStreak: document.getElementById('chk-show-streak'),
  chkShowTrophies: document.getElementById('chk-show-trophies'),
  chkShowActivity: document.getElementById('chk-show-activity'),
  chkStatsBorder: document.getElementById('chk-stats-border'),
  chkStatsIcons: document.getElementById('chk-stats-icons'),
  chkStatsPrivate: document.getElementById('chk-stats-private'),
  
  // Add-ons
  chkVisitorBadge: document.getElementById('chk-visitor-badge'),
  visitorBadgeOptions: document.getElementById('visitor-badge-options'),
  selectVisitorStyle: document.getElementById('select-visitor-style'),
  visitorBadgeColor: document.getElementById('visitor-badge-color'),
  
  chkSponsorship: document.getElementById('chk-sponsorship'),
  sponsorshipOptions: document.getElementById('sponsorship-options'),
  sponsorUsername: document.getElementById('sponsor-username'),
  
  chkDevJoke: document.getElementById('chk-dev-joke'),
  chkReadmeQuotes: document.getElementById('chk-readme-quotes'),
  
  // Output and Buttons
  btnSplitView: document.getElementById('btn-split-view'),
  btnPreviewOnly: document.getElementById('btn-preview-only'),
  btnCodeOnly: document.getElementById('btn-code-only'),
  workspacePanels: document.getElementById('workspace-panels'),
  panelEditor: document.getElementById('panel-editor'),
  panelPreview: document.getElementById('panel-preview'),
  
  btnCopyReadme: document.getElementById('btn-copy-readme'),
  btnDownloadReadme: document.getElementById('btn-download-readme'),
  markdownEditor: document.getElementById('markdown-editor'),
  markdownPreview: document.getElementById('markdown-preview'),
  editorCharCounter: document.getElementById('editor-char-counter'),
  clipboardToast: document.getElementById('clipboard-toast'),
  
  techSearch: document.getElementById('tech-search'),
  techStackContainer: document.getElementById('tech-stack-container')
};

// Initialize Application
function init() {
  renderTechGrid();
  setupEventListeners();
  syncUIFromState();
  generateMarkdown();
  
  // Auto-dark theme check
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
    elements.themeToggle.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    elements.themeToggle.textContent = '🌙';
  }
}

// Render Tech Stack selection grids dynamically
function renderTechGrid() {
  elements.techStackContainer.innerHTML = '';
  
  // Group by category
  const categories = [...new Set(TECH_DATA.map(t => t.category))];
  
  categories.forEach(category => {
    const catBox = document.createElement('div');
    catBox.className = 'tech-category-box';
    catBox.setAttribute('data-category', category);
    
    const title = document.createElement('div');
    title.className = 'tech-category-title';
    title.textContent = category;
    catBox.appendChild(title);
    
    const grid = document.createElement('div');
    grid.className = 'tech-grid';
    
    const items = TECH_DATA.filter(t => t.category === category);
    items.forEach(tech => {
      const item = document.createElement('div');
      item.className = `tech-badge-item ${state.selected_techs.has(tech.id) ? 'active' : ''}`;
      item.setAttribute('data-id', tech.id);
      
      const simpleLogo = tech.logo.toLowerCase();
      // Shields.io logo colors need hex format without #
      const img = document.createElement('img');
      img.src = `https://cdn.simpleicons.org/${simpleLogo}`;
      img.alt = tech.name;
      img.onerror = () => { img.style.display = 'none'; }; // fallback if logo not found
      
      const nameSpan = document.createElement('span');
      nameSpan.textContent = tech.name;
      
      item.appendChild(img);
      item.appendChild(nameSpan);
      grid.appendChild(item);
      
      // Toggle selection click handler
      item.addEventListener('click', () => {
        if (state.selected_techs.has(tech.id)) {
          state.selected_techs.delete(tech.id);
          item.classList.remove('active');
        } else {
          state.selected_techs.add(tech.id);
          item.classList.add('active');
        }
        state.isDirty = false;
        generateMarkdown();
      });
    });
    
    catBox.appendChild(grid);
    elements.techStackContainer.appendChild(catBox);
  });
}

// Synchronize inputs/checkboxes/selects with JS state
function syncUIFromState() {
  elements.inputGreeting.value = state.greeting;
  elements.inputName.value = state.name;
  elements.inputTitle.value = state.title;
  elements.inputSubtitle.value = state.subtitle;
  elements.inputBanner.value = state.banner;
  elements.inputAbout.value = state.about;
  
  elements.selectBadgeStyle.value = state.badge_style;
  elements.socialGithub.value = state.social_github;
  elements.socialLinkedin.value = state.social_linkedin;
  elements.socialTwitter.value = state.social_twitter;
  elements.socialEmail.value = state.social_email;
  elements.socialPortfolio.value = state.social_portfolio;
  elements.socialDevto.value = state.social_devto;
  elements.socialMedium.value = state.social_medium;
  elements.socialYoutube.value = state.social_youtube;
  
  elements.selectStatsTheme.value = state.stats_theme;
  elements.chkShowStats.checked = state.show_stats;
  elements.chkShowLangs.checked = state.show_langs;
  elements.chkShowStreak.checked = state.show_streak;
  elements.chkShowTrophies.checked = state.show_trophies;
  elements.chkShowActivity.checked = state.show_activity;
  elements.chkStatsBorder.checked = state.stats_border;
  elements.chkStatsIcons.checked = state.stats_icons;
  elements.chkStatsPrivate.checked = state.stats_private;
  
  elements.chkVisitorBadge.checked = state.visitor_badge;
  elements.selectVisitorStyle.value = state.visitor_style;
  elements.visitorBadgeColor.value = state.visitor_color;
  elements.visitorBadgeOptions.style.display = state.visitor_badge ? 'block' : 'none';
  
  elements.chkSponsorship.checked = state.sponsorship;
  elements.sponsorUsername.value = state.sponsor_username;
  elements.sponsorshipOptions.style.display = state.sponsorship ? 'block' : 'none';
  
  elements.chkDevJoke.checked = state.dev_joke;
  elements.chkReadmeQuotes.checked = state.readme_quotes;
  
  // Layout Active State
  elements.layoutCards.forEach(card => {
    if (card.getAttribute('data-layout') === state.layout) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Re-render tech stack badges to show correct actives
  const badgeItems = document.querySelectorAll('.tech-badge-item');
  badgeItems.forEach(item => {
    const id = item.getAttribute('data-id');
    if (state.selected_techs.has(id)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Setup listeners to watch all form element events
function setupEventListeners() {
  // Theme Toggle
  elements.themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    elements.themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
  });

  // Preset loading dropdown
  elements.presetSelector.addEventListener('change', (e) => {
    const presetKey = e.target.value;
    if (PRESETS[presetKey]) {
      const p = PRESETS[presetKey];
      state.greeting = p.greeting;
      state.name = p.name;
      state.title = p.title;
      state.subtitle = p.subtitle;
      state.layout = p.layout;
      state.about = p.about;
      state.banner = p.banner;
      state.social_github = p.social_github;
      state.social_linkedin = p.social_linkedin;
      state.social_twitter = p.social_twitter;
      state.social_email = p.social_email;
      state.social_portfolio = p.social_portfolio;
      state.social_devto = p.social_devto;
      state.social_medium = p.social_medium;
      state.social_youtube = p.social_youtube;
      state.badge_style = p.badge_style;
      state.stats_theme = p.stats_theme;
      state.show_stats = p.show_stats;
      state.show_langs = p.show_langs;
      state.show_streak = p.show_streak;
      state.show_trophies = p.show_trophies;
      state.show_activity = p.show_activity;
      state.stats_border = p.stats_border;
      state.stats_icons = p.stats_icons;
      state.stats_private = p.stats_private;
      state.visitor_badge = p.visitor_badge;
      state.visitor_style = p.visitor_style;
      state.visitor_color = p.visitor_color;
      state.sponsorship = p.sponsorship;
      state.sponsor_username = p.sponsor_username || '';
      state.dev_joke = p.dev_joke;
      state.readme_quotes = p.readme_quotes;
      
      state.selected_techs = new Set(p.selected_techs);
      state.isDirty = false;
      
      syncUIFromState();
      generateMarkdown();
      showToast('✨ Loaded template preset successfully!');
    }
  });

  // Tabs Switcher
  elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.tabBtns.forEach(b => b.classList.remove('active'));
      elements.tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Layout selection
  elements.layoutCards.forEach(card => {
    card.addEventListener('click', () => {
      elements.layoutCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.layout = card.getAttribute('data-layout');
      state.isDirty = false;
      generateMarkdown();
    });
  });

  // Simple Tech Search Filter
  elements.techSearch.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    const items = document.querySelectorAll('.tech-badge-item');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(val)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    // Hide empty categories
    const categories = document.querySelectorAll('.tech-category-box');
    categories.forEach(box => {
      const childBadges = box.querySelectorAll('.tech-badge-item');
      let hasVisible = false;
      childBadges.forEach(b => {
        if (b.style.display !== 'none') hasVisible = true;
      });
      if (hasVisible) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });

  // Standard Inputs bindings
  const inputBindings = [
    { el: elements.inputGreeting, key: 'greeting' },
    { el: elements.inputName, key: 'name' },
    { el: elements.inputTitle, key: 'title' },
    { el: elements.inputSubtitle, key: 'subtitle' },
    { el: elements.inputBanner, key: 'banner' },
    { el: elements.inputAbout, key: 'about' },
    { el: elements.socialGithub, key: 'social_github' },
    { el: elements.socialLinkedin, key: 'social_linkedin' },
    { el: elements.socialTwitter, key: 'social_twitter' },
    { el: elements.socialEmail, key: 'social_email' },
    { el: elements.socialPortfolio, key: 'social_portfolio' },
    { el: elements.socialDevto, key: 'social_devto' },
    { el: elements.socialMedium, key: 'social_medium' },
    { el: elements.socialYoutube, key: 'social_youtube' },
    { el: elements.sponsorUsername, key: 'sponsor_username' }
  ];

  inputBindings.forEach(binding => {
    binding.el.addEventListener('input', (e) => {
      state[binding.key] = e.target.value;
      state.isDirty = false;
      generateMarkdown();
    });
  });

  // Select dropdowns bindings
  const selectBindings = [
    { el: elements.selectBadgeStyle, key: 'badge_style' },
    { el: elements.selectStatsTheme, key: 'stats_theme' },
    { el: elements.selectVisitorStyle, key: 'visitor_style' },
    { el: elements.visitorBadgeColor, key: 'visitor_color' }
  ];

  selectBindings.forEach(binding => {
    binding.el.addEventListener('change', (e) => {
      state[binding.key] = e.target.value;
      state.isDirty = false;
      generateMarkdown();
    });
  });

  // Checkbox bindings
  const checkboxBindings = [
    { el: elements.chkShowStats, key: 'show_stats' },
    { el: elements.chkShowLangs, key: 'show_langs' },
    { el: elements.chkShowStreak, key: 'show_streak' },
    { el: elements.chkShowTrophies, key: 'show_trophies' },
    { el: elements.chkShowActivity, key: 'show_activity' },
    { el: elements.chkStatsBorder, key: 'stats_border' },
    { el: elements.chkStatsIcons, key: 'stats_icons' },
    { el: elements.chkStatsPrivate, key: 'stats_private' },
    { el: elements.chkDevJoke, key: 'dev_joke' },
    { el: elements.chkReadmeQuotes, key: 'readme_quotes' }
  ];

  checkboxBindings.forEach(binding => {
    binding.el.addEventListener('change', (e) => {
      state[binding.key] = e.target.checked;
      state.isDirty = false;
      generateMarkdown();
    });
  });

  // Visitor & Sponsor show/hide secondary fields
  elements.chkVisitorBadge.addEventListener('change', (e) => {
    state.visitor_badge = e.target.checked;
    elements.visitorBadgeOptions.style.display = state.visitor_badge ? 'block' : 'none';
    state.isDirty = false;
    generateMarkdown();
  });

  elements.chkSponsorship.addEventListener('change', (e) => {
    state.sponsorship = e.target.checked;
    elements.sponsorshipOptions.style.display = state.sponsorship ? 'block' : 'none';
    state.isDirty = false;
    generateMarkdown();
  });

  // Split Panel view settings
  elements.btnSplitView.addEventListener('click', () => {
    elements.btnSplitView.classList.add('active');
    elements.btnPreviewOnly.classList.remove('active');
    elements.btnCodeOnly.classList.remove('active');
    elements.workspacePanels.style.gridTemplateColumns = '1fr 1fr';
    elements.panelEditor.style.display = 'flex';
    elements.panelPreview.style.display = 'flex';
  });

  elements.btnPreviewOnly.addEventListener('click', () => {
    elements.btnSplitView.classList.remove('active');
    elements.btnPreviewOnly.classList.add('active');
    elements.btnCodeOnly.classList.remove('active');
    elements.workspacePanels.style.gridTemplateColumns = '1fr';
    elements.panelEditor.style.display = 'none';
    elements.panelPreview.style.display = 'flex';
  });

  elements.btnCodeOnly.addEventListener('click', () => {
    elements.btnSplitView.classList.remove('active');
    elements.btnPreviewOnly.classList.remove('active');
    elements.btnCodeOnly.classList.add('active');
    elements.workspacePanels.style.gridTemplateColumns = '1fr';
    elements.panelEditor.style.display = 'flex';
    elements.panelPreview.style.display = 'none';
  });

  // Copy Markdown
  elements.btnCopyReadme.addEventListener('click', () => {
    const text = elements.markdownEditor.value;
    navigator.clipboard.writeText(text).then(() => {
      showToast('✅ Copied README.md markdown to clipboard!');
    }).catch(err => {
      showToast('❌ Copy failed: ' + err, true);
    });
  });

  // Download README.md file
  elements.btnDownloadReadme.addEventListener('click', () => {
    const text = elements.markdownEditor.value;
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('📥 Downloaded README.md file!');
  });

  // Manual editor edits: When user edits code panel directly
  elements.markdownEditor.addEventListener('input', (e) => {
    state.isDirty = true;
    const content = e.target.value;
    elements.editorCharCounter.textContent = `${content.length} chars`;
    renderPreview(content);
  });
}

// Show Alert Notification toast
function showToast(msg, isError = false) {
  elements.clipboardToast.textContent = msg;
  if (isError) {
    elements.clipboardToast.classList.add('toast-error');
  } else {
    elements.clipboardToast.classList.remove('toast-error');
  }
  elements.clipboardToast.classList.add('show');
  setTimeout(() => {
    elements.clipboardToast.classList.remove('show');
  }, 3000);
}

// Render HTML Preview container safely
function renderPreview(markdown) {
  // Marked compiles markdown to HTML, DOMPurify cleans it up to avoid script injections
  const rawHtml = marked.parse(markdown);
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ADD_ATTR: ['target', 'align'], // allow target="_blank" and align tags
    ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span', 'img', 'a', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'em', 'strong', 'code', 'pre', 'blockquote', 'hr']
  });
  elements.markdownPreview.innerHTML = cleanHtml;
}

// Markdown Compiler Logic
function generateMarkdown() {
  if (state.isDirty) return; // do not overwrite manual edits

  let md = '';

  // 1. Title Banner Image
  if (state.banner && state.banner.trim() !== '') {
    md += `<p align="center">\n  <img src="${state.banner.trim()}" alt="Banner" width="100%">\n</p>\n\n`;
  }

  // Centered vs Classic Left layouts
  if (state.layout === 'centered') {
    md += `<h1 align="center">${state.greeting} ${state.name}</h1>\n`;
    md += `<p align="center"><strong>${state.title}</strong></p>\n`;
    md += `<p align="center"><em>${state.subtitle}</em></p>\n\n`;
    
    // Visitor badge (centered)
    if (state.visitor_badge && state.social_github) {
      const color = state.visitor_color || 'indigo';
      md += `<p align="center">\n  <img src="https://img.shields.io/badge/visits-counter-${color}?style=${state.visitor_style}&label=VIEWS&logo=github&logoColor=white" alt="views">\n</p>\n\n`;
    }
  } else {
    md += `# ${state.greeting} ${state.name}\n\n`;
    md += `### ${state.title}\n\n`;
    md += `**${state.subtitle}**\n\n`;

    // Visitor badge (classic)
    if (state.visitor_badge && state.social_github) {
      const color = state.visitor_color || 'indigo';
      md += `![Views](https://img.shields.io/badge/visits-counter-${color}?style=${state.visitor_style}&label=VIEWS&logo=github&logoColor=white)\n\n`;
    }
  }

  // 2. Social Links row
  const hasSocials = [
    state.social_github, state.social_linkedin, state.social_twitter,
    state.social_email, state.social_portfolio, state.social_devto,
    state.social_medium, state.social_youtube
  ].some(x => x && x.trim() !== '');

  if (hasSocials) {
    const badges = [];
    const style = state.badge_style;

    if (state.social_github && state.social_github.trim() !== '') {
      badges.push(`[![GitHub](https://img.shields.io/badge/GitHub-181717?style=${style}&logo=github&logoColor=white)](https://github.com/${state.social_github.trim()})`);
    }
    if (state.social_linkedin && state.social_linkedin.trim() !== '') {
      badges.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=${style}&logo=linkedin&logoColor=white)](${state.social_linkedin.trim()})`);
    }
    if (state.social_twitter && state.social_twitter.trim() !== '') {
      badges.push(`[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=${style}&logo=twitter&logoColor=white)](https://twitter.com/${state.social_twitter.trim()})`);
    }
    if (state.social_email && state.social_email.trim() !== '') {
      badges.push(`[![Email](https://img.shields.io/badge/Email-D14836?style=${style}&logo=gmail&logoColor=white)](mailto:${elements.socialEmail.value.trim()})`);
    }
    if (state.social_portfolio && state.social_portfolio.trim() !== '') {
      badges.push(`[![Portfolio](https://img.shields.io/badge/Website-000000?style=${style}&logo=react&logoColor=white)](${state.social_portfolio.trim()})`);
    }
    if (state.social_devto && state.social_devto.trim() !== '') {
      badges.push(`[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=${style}&logo=devto&logoColor=white)](https://dev.to/${state.social_devto.trim()})`);
    }
    if (state.social_medium && state.social_medium.trim() !== '') {
      // Handles username with @
      const username = state.social_medium.trim().startsWith('@') ? state.social_medium.trim() : `@${state.social_medium.trim()}`;
      badges.push(`[![Medium](https://img.shields.io/badge/Medium-12100E?style=${style}&logo=medium&logoColor=white)](https://medium.com/${username})`);
    }
    if (state.social_youtube && state.social_youtube.trim() !== '') {
      badges.push(`[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=${style}&logo=youtube&logoColor=white)](https://youtube.com/${state.social_youtube.trim()})`);
    }

    if (badges.length > 0) {
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${badges.join('\n  ')}\n</p>\n\n`;
      } else {
        md += badges.join(' ') + '\n\n';
      }
    }
  }

  // 3. About Me / Bio
  if (state.about && state.about.trim() !== '') {
    md += `## About Me\n\n`;
    md += state.about.trim() + '\n\n';
  }

  // 4. Tech Stack Badges
  if (state.selected_techs.size > 0) {
    md += `## Technologies & Tools\n\n`;
    
    // Group selected techs by category to keep it structured
    const selectedList = TECH_DATA.filter(t => state.selected_techs.has(t.id));
    const categories = [...new Set(selectedList.map(t => t.category))];
    
    let techBadgesBlock = '';
    categories.forEach(category => {
      const items = selectedList.filter(t => t.category === category);
      techBadgesBlock += `**${category}**\n\n`;
      const badges = items.map(t => {
        // Construct Shields.io badge URL
        // Style defaults to flat-square/for-the-badge. Let's make it look uniform with for-the-badge for premium feel.
        const cleanName = encodeURIComponent(t.name);
        return `![${t.name}](https://img.shields.io/badge/${cleanName}-${t.color}?style=for-the-badge&logo=${t.logo}&logoColor=white)`;
      });
      techBadgesBlock += badges.join(' ') + '\n\n';
    });

    if (state.layout === 'centered') {
      // Centered tech stack block
      let centeredBlock = `<div align="center">\n`;
      categories.forEach(category => {
        const items = selectedList.filter(t => t.category === category);
        centeredBlock += `  <h4>${category}</h4>\n  <p>\n`;
        const badges = items.map(t => {
          const cleanName = encodeURIComponent(t.name);
          return `    <img src="https://img.shields.io/badge/${cleanName}-${t.color}?style=for-the-badge&logo=${t.logo}&logoColor=white" alt="${t.name}">`;
        });
        centeredBlock += badges.join('\n') + `\n  </p>\n`;
      });
      centeredBlock += `</div>\n\n`;
      md += centeredBlock;
    } else {
      md += techBadgesBlock;
    }
  }

  // 5. GitHub Stats Cards
  const statsTheme = state.stats_theme || 'tokyonight';
  const showBorder = state.stats_border ? 'false' : 'true'; // shields/stats uses hide_border
  const showIcons = state.stats_icons ? 'true' : 'false';
  const countPrivate = state.stats_private ? 'true' : 'false';

  const hasStatsCards = state.show_stats || state.show_langs || state.show_streak || state.show_trophies || state.show_activity;

  if (hasStatsCards && state.social_github && state.social_github.trim() !== '') {
    md += `## GitHub Analytics\n\n`;
    const username = state.social_github.trim();
    
    // Trophies are usually placed full-width
    if (state.show_trophies) {
      if (state.layout === 'centered') {
        md += `<p align="center">\n  <a href="https://github.com/ryo-ma/github-profile-trophy">\n    <img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${statsTheme === 'tokyonight' ? 'tokyonight' : statsTheme}" alt="Github Trophies" />\n  </a>\n</p>\n\n`;
      } else {
        md += `[![Github Trophies](https://github-profile-trophy.vercel.app/?username=${username}&theme=${statsTheme === 'tokyonight' ? 'tokyonight' : statsTheme})](https://github.com/ryo-ma/github-profile-trophy)\n\n`;
      }
    }

    // Stack side by side if centered/grid
    const cards = [];
    if (state.show_stats) {
      cards.push(`<img src="https://github-readme-stats.vercel.app/api?username=${username}&theme=${statsTheme}&show_icons=${showIcons}&hide_border=${showBorder}&count_private=${countPrivate}" alt="GitHub Stats" />`);
    }
    if (state.show_langs) {
      cards.push(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${statsTheme}&hide_border=${showBorder}&layout=compact" alt="Top Languages" />`);
    }

    if (cards.length > 0) {
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${cards.join('\n  ')}\n</p>\n\n`;
      } else {
        md += `<p align="left">\n  ${cards.join('\n  ')}\n</p>\n\n`;
      }
    }

    // Streak Stats
    if (state.show_streak) {
      const streakCard = `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${statsTheme}&hide_border=${showBorder}" alt="GitHub Streak" />`;
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${streakCard}\n</p>\n\n`;
      } else {
        md += `<p align="left">\n  ${streakCard}\n</p>\n\n`;
      }
    }

    // Activity Graph
    if (state.show_activity) {
      // Activity graph layout
      const actGraph = `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${statsTheme === 'tokyonight' ? 'tokyo-night' : statsTheme}" alt="Activity Graph" width="100%" />`;
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${actGraph}\n</p>\n\n`;
      } else {
        md += `${actGraph}\n\n`;
      }
    }
  }

  // 6. Addons (Jokes, Quotes, Buy me a coffee)
  const hasAddons = state.dev_joke || state.readme_quotes || state.sponsorship;
  if (hasAddons) {
    md += `## Support & Extras\n\n`;
    
    // Sponsorship Buy Me Coffee badge
    if (state.sponsorship && state.sponsor_username && state.sponsor_username.trim() !== '') {
      const sponsorName = state.sponsor_username.trim();
      const coffeeBadge = `[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/${sponsorName})`;
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${coffeeBadge}\n</p>\n\n`;
      } else {
        md += `${coffeeBadge}\n\n`;
      }
    }

    // Dev joke card
    if (state.dev_joke) {
      // Choose joke theme matching selected stats theme roughly
      const jokeCard = `[![Dev Joke](https://readme-jokes.vercel.app/api?theme=${statsTheme === 'github_dark' ? 'dark' : statsTheme})](https://github.com/shurcooL/github-readme-joke)`;
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${jokeCard}\n</p>\n\n`;
      } else {
        md += `${jokeCard}\n\n`;
      }
    }

    // README quote
    if (state.readme_quotes) {
      const quoteCard = `[![README Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${statsTheme})](https://github.com/piyushsuthar/github-readme-quotes)`;
      if (state.layout === 'centered') {
        md += `<p align="center">\n  ${quoteCard}\n</p>\n\n`;
      } else {
        md += `${quoteCard}\n\n`;
      }
    }
  }

  // Set editor content & update character counter
  elements.markdownEditor.value = md;
  elements.editorCharCounter.textContent = `${md.length} chars`;
  
  // Render html preview panel
  renderPreview(md);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
