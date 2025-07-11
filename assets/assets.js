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
        title: 'Brats & Bavaria',
        description: 'Car Event Website',
        bgImage: `${base}/Bratsandbavaria.png`,
        liveLink: 'https://bratsandbavaria.com',
        githubLink: 'https://github.com/chloe-ek/Brats-bavaria',

    },
    {
        title: 'Tadpool',
        description: 'Dating App',
        bgImage: `${base}/tadpool.png`,
        githubLink: 'https://github.com/chloe-ek/Tadpool-my-part',

    },
    {
        title: 'Real Estate',
        description: 'Web Site',
        bgImage: `${base}/realEstate.png`,
        liveLink: 'https://realestate-gek4.onrender.com/',
        githubLink: 'https://github.com/chloe-ek/RealEstate_website',

    },
    {
        title: 'Chat App',
        description: 'Chat Web',
        bgImage: `${base}/chatapp.png`,
        liveLink: 'https://chat-app-mxjo.onrender.com',
        githubLink: 'https://github.com/chloe-ek/Chat-app',

    },
    {
        title: 'Assignment Tracker',
        description: 'Android App',
        bgImage: `${base}/AssignmentTracker.png`,
        githubLink: 'https://github.com/chloe-ek/Assignment_tracker',

    },
    {
        title: 'Pennywise',
        description: 'Finance App',
        bgImage: `${base}/pennywise.png`,
        githubLink: 'https://github.com/chloe-ek/pennywise',

    },
    {
        title: 'Dark Night Maze',
        description: 'JavaFX Game',
        bgImage: `${base}/darknightmaze.png`,
        githubLink: 'https://github.com/chloe-ek/Dark_Night_Maze',

    },
    {
        title: 'Neighbourly',
        description: 'Community App',
        bgImage: `${base}/neighbourly.png`,
        liveLink: 'https://comp1800-neighbourly.web.app',
        githubLink: 'https://comp1800-neighbourly.web.app',

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
