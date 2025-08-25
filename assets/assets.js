const isGithubPages =
  typeof window !== 'undefined' &&
  window.location.pathname.startsWith('/Portfolio');

const base = isGithubPages ? '/Portfolio' : '';


export const assets = {
    user_image: `${base}/profile.png`,
    code_icon: `${base}/code-icon.png`,
    code_icon_dark: `${base}/code-icon-dark.png`,
    edu_icon: `${base}/edu-icon.png`,
    edu_icon_dark: `${base}/edu-icon-dark.png`,
    project_icon: `${base}/project-icon.png`,
    project_icon_dark: `${base}/project-icon-dark.png`,
    vscode: `${base}/vscode.png`,
    firebase: `${base}/firebase.png`,
    figma: `${base}/figma.png`,
    git: `${base}/git.png`,
    mongodb: `${base}/mongodb.png`,
    right_arrow_white: `${base}/right-arrow-white.png`,
    logo: `${base}/logo.png`,
    logo_dark: `${base}/dark-logo.png`,
    mail_icon: `${base}/mail_icon.png`,
    mail_icon_dark: `${base}/mail_icon_dark.png`,
    profile_img: `${base}/second.png`,
    download_icon: `${base}/download-icon.png`,
    hand_icon: `${base}/hand-icon.png`,
    header_bg_color: `${base}/header-bg-color.png`,
    moon_icon: `${base}/moon_icon.png`,
    sun_icon: `${base}/sun_icon.png`,
    arrow_icon: `${base}/arrow-icon.png`,
    arrow_icon_dark: `${base}/arrow-icon-dark.png`,
    menu_black: `${base}/menu-black.png`,
    menu_white: `${base}/menu-white.png`,
    close_black: `${base}/close-black.png`,
    close_white: `${base}/close-white.png`,
    web_icon: `${base}/web-icon.png`,
    mobile_icon: `${base}/mobile-icon.png`,
    ui_icon: `${base}/ui-icon.png`,
    graphics_icon: `${base}/graphics-icon.png`,
    right_arrow: `${base}/right-arrow.png`,
    send_icon: `${base}/send-icon.png`,
    right_arrow_bold: `${base}/right-arrow-bold.png`,
    right_arrow_bold_dark: `${base}/right-arrow-bold-dark.png`,
    github_icon: `${base}/github.png`,
    live1: `${base}/live1.png`,
    live2: `${base}/live2.png`,
};

export const workData = [
        {
        title: 'DiVi',
        description: 'Shared Expense Tracker with Real-time Collaboration',
        summary: 'Mobile-first expense splitting app with group management, receipt scanning, and automatic calculations',
        bgImage: `${base}/DIVI.png`,
        liveLink: 'https://divi-ai-4l5m.vercel.app/',
        githubLink: 'https://github.com/chloe-ek/Divi-Ai',
        technologies: ['TypeScript', 'Next.js', 'Supabase', 'CSS'],
        category: 'Full Stack',
        status: 'In Development',
        duration: 'In Development...',
        teamSize: 'Solo Project',
        impact: 'MVP with core splitting features completed'
    },
        {
        title: 'PrepTalk AI',
        description: 'AI-Powered Interview Practice Platform',
        summary: 'Voice-interactive AI interview coach with personalized feedback, question analysis, and performance tracking',
        bgImage: `${base}/preptalk.png`,
        liveLink: 'https://prep-talk-ai-three.vercel.app/',
        githubLink: 'https://github.com/chloe-ek/PrepTalk_ai',
        technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'Vapi AI'],
        category: 'Full Stack',
        status: 'In Development',
        duration: 'In Development...',
        teamSize: 'Solo Project',
        impact: 'Voice AI integration and real-time feedback system implemented'
    },
    {
        title: 'Brats & Bavaria',
        description: 'Car Event Management Platform with Payment Processing',
        summary: 'Production car enthusiast platform serving 200+ users with event registration, admin dashboard, and Stripe integration',
        bgImage: `${base}/Bratsandbavaria.png`,
        liveLink: 'https://bratsandbavaria.com',
        githubLink: 'https://github.com/chloe-ek/Brats-bavaria',
        technologies: ['TypeScript', 'Next.js', 'Supabase', 'Stripe API'],
        category: 'Full Stack',
        duration: '3 weeks',
        teamSize: 'Solo Project',
        impact: 'Served 200+ users with 100% successful payment processing rate'
    },
    {
        title: 'Tadpool',
        description: 'Mobile Dating App with Distance-based Matching',
        summary: 'Cross-platform dating app with AWS Rekognition for photo verification and real-time geolocation',
        bgImage: `${base}/tadpool.png`,
        githubLink: 'https://github.com/chloe-ek/Tadpool-my-part',
        technologies: ['Flutter', 'Django', 'AWS S3', 'AWS Rekognition', 'Docker', 'EC2'],
        category: 'Mobile App',
        duration: '4 weeks',
        teamSize: '5-person team',
        impact: 'MVP with AI photo verification and geolocation matching'
    },
    {
        title: 'Chat App',
        description: 'Multi-room chat platform with user management',
        summary: 'Group chat application with user authentication, room management, and message reactions',
        bgImage: `${base}/chatapp.png`,
        liveLink: 'https://chat-app-mxjo.onrender.com',
        githubLink: 'https://github.com/chloe-ek/Chat-app',
        technologies: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'EJS'],
        category: 'Full Stack',
        duration: '2 weekss',
        teamSize: 'Solo Project',
        impact: 'Built complete user management system with room-based messaging architecture'
    },
    {
        title: 'Assignment Tracker',
        description: 'Native Android Task Management Application',
        summary: 'Feature-rich Android app with custom UI components, local database management, and notification system for academic tracking',
        bgImage: `${base}/AssignmentTracker.png`,
        githubLink: 'https://github.com/chloe-ek/Assignment_tracker',
        technologies: ['Kotlin', 'Android SDK', 'SQLite', 'Material Design'],
        category: 'Mobile App',
        duration: '3 weeks',
        teamSize: 'Solo Project',
        impact: 'Full CRUD functionality with local data persistence'
    },
    {
        title: 'Dark Night Maze',
        description: 'Object-Oriented JavaFX Adventure Game',
        summary: 'Desktop game demonstrating advanced OOP principles, custom algorithms for maze generation, and JavaFX scene management',
        bgImage: `${base}/darknightmaze.png`,
        githubLink: 'https://github.com/chloe-ek/Dark_Night_Maze',
        technologies: ['Java', 'JavaFX', 'Maven', 'JUnit5'],
        category: 'Desktop Game',
        duration: '6 weeks',
        teamSize: 'Solo Project',
        impact: 'Clean architecture following SOLID principles with custom algorithms and realistic lighting'
    },
    {
        title: 'Neighbourly',
        description: 'Community Connection Platform',
        summary: 'Local community app for neighborhood events, services, and resident networking',
        bgImage: `${base}/neighbourly.png`,
        liveLink: 'https://comp1800-neighbourly.web.app',
        githubLink: 'https://github.com/chloe-ek/neighbourly',
        technologies: ['HTML', 'Tailwind CSS', 'Firebase', 'Google Maps API'],
        category: 'Full Stack',
        duration: '4 weeks',
        teamSize: '3-person Team',
    },
];

export const serviceData = [
    { icon: assets.graphics_icon, title: 'Frontend', description: 'React, Next.js, Tailwind CSS, HTML/CSS, Jetpack Compose, Flutter', link: '' },
    { icon: assets.mobile_icon, title: 'Backend / APIs', description: 'Node.js, Express, Django, EJS, RESTful APIs', link: '' },
    { icon: assets.ui_icon, title: 'Databases / Storage', description: 'PostgreSQL, MongoDB, MySQL, Firebase', link: '' },
    { icon: assets.web_icon, title: 'DevOps / Tools', description: 'AWS EC2/S3/Rekognition, Docker, Git, GitHub, Jira, Trello', link: '' },
];

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: ' Computer Systems Technology Student at BCIT' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: 'Built 5+ full-stack projects with modern technologies' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Collaboration', description: 'Experienced in working with cross-functional teams' },
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
