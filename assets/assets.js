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
        title: 'DiVi (In Developement)',
        description: 'Expense Tracker for shared expenses',
        summary: 'Mobile-first shared expense tracking with real-time collaboration',
        bgImage: `${base}/DIVI.png`,
        liveLink: 'https://divi-ai-4l5m.vercel.app/',
        githubLink: 'https://github.com/chloe-ek/Divi-Ai',
        technologies: ['TypeScript', 'Next.js', 'Supabase', 'CSS'],
        category: 'Full Stack'
    },
        {
        title: 'PrepTalk AI (In Developement)',
        description: 'AI-powered platform for preparing for mock interviews',
        summary: 'Interactive AI interview practice platform with voice-based Q&A and personalized feedback',
        bgImage: `${base}/preptalk.png`,
        liveLink: 'https://prep-talk-ai-three.vercel.app/',
        githubLink: 'https://github.com/chloe-ek/PrepTalk_ai',
        technologies: ['Next.js', 'Tailwind', 'Firebase' ,'Vapi'],
        category: 'Full Stack'
    },
    {
        title: 'Brats & Bavaria',
        description: 'Car enthusiast event registration and management system',
        summary: 'End-to-end car event management platform with submission forms, admin dashboard, and automated payment processing',
        bgImage: `${base}/Bratsandbavaria.png`,
        liveLink: 'https://bratsandbavaria.com',
        githubLink: 'https://github.com/chloe-ek/Brats-bavaria',
        technologies: ['TypeScript', 'Next.js',  'Supabase', 'Stripe'],
        category: 'Full Stack'
    },
    {
        title: 'Tadpool',
        description: 'Dating App with Real-time Distance & Matching',
        summary: 'Mobile dating application with swipe functionality, real-time distance matching, and user preferences',
        bgImage: `${base}/tadpool.png`,
        githubLink: 'https://github.com/chloe-ek/Tadpool-my-part',
        technologies: ['Flutter', 'Django', 'AWS S3 ', 'Rekognition', 'Docker', 'EC2'],
        category: 'Mobile App'
    },
    {
        title: 'Chat App',
        description: 'Real-time Messaging Platform',
        summary: 'Instant messaging application with group chats, online status, and message history',
        bgImage: `${base}/chatapp.png`,
        liveLink: 'https://chat-app-mxjo.onrender.com',
        githubLink: 'https://github.com/chloe-ek/Chat-app',
        technologies: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'EJS'],
        category: 'Full Stack'
    },
    {
        title: 'Assignment Tracker',
        description: 'Student Task Management Android App',
        summary: 'Native Android app for tracking assignments, deadlines, and academic progress',
        bgImage: `${base}/AssignmentTracker.png`,
        githubLink: 'https://github.com/chloe-ek/Assignment_tracker',
        technologies: ['Kotlink', 'Android SDK', 'SQLite'],
        category: 'Mobile App'
    },
    {
        title: 'Dark Night Maze',
        description: 'Interactive JavaFX Adventure Game',
        summary: 'Desktop game with dynamic maze generation, character progression, and puzzle solving',
        bgImage: `${base}/darknightmaze.png`,
        githubLink: 'https://github.com/chloe-ek/Dark_Night_Maze',
        technologies: ['Java', 'JavaFX', 'Maven', 'JUnit5'],
        category: 'Desktop Game'
    },
    {
        title: 'Neighbourly',
        description: 'Community Connection Platform',
        summary: 'Local community app for neighborhood events, services, and resident networking',
        bgImage: `${base}/neighbourly.png`,
        liveLink: 'https://comp1800-neighbourly.web.app',
        githubLink: 'https://github.com/chloe-ek/neighbourly',
        technologies: ['React', 'Firebase', 'Google Maps API', 'Material-UI'],
        category: 'Full Stack'
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
