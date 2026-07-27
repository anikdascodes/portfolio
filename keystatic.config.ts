import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'production' && process.env.KEYSTATIC_GITHUB_CLIENT_ID
    ? {
        kind: 'github',
        repo: {
          owner: process.env.GITHUB_OWNER || 'your-github-username',
          name: process.env.GITHUB_REPO || 'portfolio-new',
        },
      }
    : {
        kind: 'local',
      },

  ui: {
    brand: { name: 'Portfolio CMS' },
    navigation: {
      'Global Settings': ['siteSettings'],
      'Home Page Sections': ['hero', 'about', 'homeSections'],
      'Page Headers & Titles': ['projectsPage', 'educationPage', 'contactPage'],
      'Content Collections': ['projects', 'skills', 'education', 'experience'],
    },
  },

  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings/',
      schema: {
        siteName: fields.text({ label: 'Your Full Name', defaultValue: 'Anik Kumar' }),
        siteTitle: fields.text({ label: 'Professional Title', defaultValue: 'Full-Stack Developer & Product Builder' }),
        siteUrl: fields.text({ label: 'Production Site URL', defaultValue: 'https://your-portfolio-domain.com' }),
        tagline: fields.text({ 
          label: 'Tagline / Elevator Pitch', 
          defaultValue: 'Full-stack developer building fast, well-crafted web applications and digital products.' 
        }),
        avatarUrl: fields.text({ 
          label: 'Avatar / Photo URL', 
          defaultValue: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' 
        }),
        location: fields.text({ label: 'Location', defaultValue: 'San Francisco, CA / Remote' }),
        email: fields.text({ label: 'Contact Email', defaultValue: 'alex@example.com' }),
        githubUrl: fields.text({ label: 'GitHub Profile URL', defaultValue: 'https://github.com' }),
        linkedinUrl: fields.text({ label: 'LinkedIn Profile URL', defaultValue: 'https://linkedin.com' }),
        twitterUrl: fields.text({ label: 'Twitter / X URL', defaultValue: 'https://x.com' }),
        blogUrl: fields.text({ label: 'Blog URL (Hashnode)', defaultValue: 'https://blog.yoursite.com' }),
        availableForHire: fields.checkbox({ label: 'Available for Freelance / Full-time', defaultValue: true }),
        footerCopyrightText: fields.text({ label: 'Footer Copyright Text', defaultValue: 'All rights reserved.' }),
        footerTagline: fields.text({ label: 'Footer Tagline', defaultValue: 'Crafted with care' }),
        hireMeButtonText: fields.text({ label: 'Header Hire Me Button Text', defaultValue: 'Hire Me' }),
        hireMeButtonLink: fields.text({ label: 'Header Hire Me Button Link', defaultValue: '/contact' }),
      },
    }),

    hero: singleton({
      label: 'Hero Section',
      path: 'src/content/hero/',
      schema: {
        greeting: fields.text({ label: 'Greeting Badge', defaultValue: '👋 Welcome to my portfolio' }),
        headline: fields.text({ label: 'Main Headline', defaultValue: 'Transforming Ideas into Production-Grade Web Apps' }),
        subheadline: fields.text({ 
          label: 'Subheadline', 
          defaultValue: 'I specialize in clean architecture, lightning-fast web performance, and intuitive user experiences built for scale.' 
        }),
        ctaPrimaryText: fields.text({ label: 'Primary CTA Button Text', defaultValue: 'View Projects' }),
        ctaPrimaryLink: fields.text({ label: 'Primary CTA Link', defaultValue: '/projects' }),
        ctaSecondaryText: fields.text({ label: 'Secondary CTA Button Text', defaultValue: 'Get in Touch' }),
        ctaSecondaryLink: fields.text({ label: 'Secondary CTA Link', defaultValue: '/contact' }),
        resumeText: fields.text({ label: 'Resume Button Text', defaultValue: 'Resume ↗' }),
        resumeUrl: fields.text({ label: 'Resume Redirect URL', defaultValue: 'https://example.com/resume.pdf' }),
        yearsOfExperience: fields.text({ label: 'Years of Experience Badge', defaultValue: '5+ Years' }),
        projectsCompleted: fields.text({ label: 'Projects Completed Badge', defaultValue: '30+ Delivered' }),
        clientSatisfaction: fields.text({ label: 'Client Satisfaction Badge', defaultValue: '100% Rating' }),
      },
    }),

    about: singleton({
      label: 'About Myself',
      path: 'src/content/about/',
      schema: {
        heading: fields.text({ label: 'About Heading', defaultValue: 'About Me' }),
        subheading: fields.text({ label: 'Subheading', defaultValue: 'Engineer. Problem Solver. Creator.' }),
        bioText: fields.text({ 
          label: 'Bio Summary', 
          multiline: true,
          defaultValue: 'I am a passionate software engineer focused on building robust, accessible, and scalable applications. With experience across frontend, backend, and cloud integrations, I help businesses turn complex challenges into seamless digital solutions.'
        }),
        highlights: fields.array(
          fields.text({ label: 'Highlight Bullet Point' }),
          {
            label: 'Key Value Highlights',
            itemLabel: props => props.value,
          }
        ),
      },
    }),

    homeSections: singleton({
      label: 'Selected Works & Contact Banner',
      path: 'src/content/home-sections/',
      schema: {
        featuredProjectsBadge: fields.text({ label: 'Featured Projects Section Badge', defaultValue: 'Selected Works' }),
        featuredProjectsHeading: fields.text({ label: 'Featured Projects Heading', defaultValue: 'Featured Projects' }),
        featuredProjectsViewAllText: fields.text({ label: 'View All Button Text', defaultValue: 'View All' }),
        featuredProjectsViewAllLink: fields.text({ label: 'View All Button Link', defaultValue: '/projects' }),
        contactBannerHeading: fields.text({ label: 'Contact Banner Heading', defaultValue: 'Ready to build something remarkable?' }),
        contactBannerSubheading: fields.text({ label: 'Contact Banner Subheading', defaultValue: 'Open for freelance projects, contract leads, and engineering positions.' }),
        contactBannerButtonText: fields.text({ label: 'Contact Banner Button Text', defaultValue: 'Get in Touch' }),
        contactBannerButtonLink: fields.text({ label: 'Contact Banner Button Link', defaultValue: '/contact' }),
      },
    }),

    projectsPage: singleton({
      label: 'Projects Page Settings',
      path: 'src/content/projects-page/',
      schema: {
        badge: fields.text({ label: 'Page Badge', defaultValue: 'Portfolio' }),
        heading: fields.text({ label: 'Page Heading', defaultValue: 'Projects & Case Studies' }),
        description: fields.text({ 
          label: 'Page Subtitle / Description', 
          multiline: true,
          defaultValue: 'A collection of web applications built with modern frontend frameworks, scalable backends, and measurable results.' 
        }),
      },
    }),

    educationPage: singleton({
      label: 'Education & Experience Page Settings',
      path: 'src/content/education-page/',
      schema: {
        badge: fields.text({ label: 'Page Badge', defaultValue: 'Background & Stack' }),
        heading: fields.text({ label: 'Page Heading', defaultValue: 'Education, Skills & Experience' }),
        description: fields.text({ 
          label: 'Page Subtitle / Description', 
          multiline: true,
          defaultValue: 'Technical stack competencies, formal academic background, and work history.' 
        }),
        skillsSectionHeading: fields.text({ label: 'Skills Section Heading', defaultValue: 'Technical Skills' }),
        experienceSectionHeading: fields.text({ label: 'Experience Section Heading', defaultValue: 'Work & Career History' }),
        educationSectionHeading: fields.text({ label: 'Education Section Heading', defaultValue: 'Education & Certifications' }),
      },
    }),

    contactPage: singleton({
      label: 'Contact Page Settings',
      path: 'src/content/contact-page/',
      schema: {
        badge: fields.text({ label: 'Page Badge', defaultValue: 'Contact' }),
        heading: fields.text({ label: 'Page Heading', defaultValue: 'Let\'s Work Together' }),
        description: fields.text({ 
          label: 'Page Subtitle / Description', 
          multiline: true,
          defaultValue: 'Have a project idea, freelance opportunity, or engineering inquiry? Drop a message below.' 
        }),
        directInfoHeading: fields.text({ label: 'Direct Info Sidebar Heading', defaultValue: 'Direct Info' }),
        socialNetworksHeading: fields.text({ label: 'Social Networks Sidebar Heading', defaultValue: 'Social Networks' }),
        formHeading: fields.text({ label: 'Form Heading', defaultValue: 'Send Message' }),
        formNameLabel: fields.text({ label: 'Name Input Label', defaultValue: 'Your Name' }),
        formNamePlaceholder: fields.text({ label: 'Name Input Placeholder', defaultValue: 'John Doe' }),
        formEmailLabel: fields.text({ label: 'Email Input Label', defaultValue: 'Your Email' }),
        formEmailPlaceholder: fields.text({ label: 'Email Input Placeholder', defaultValue: 'john@example.com' }),
        formSubjectLabel: fields.text({ label: 'Subject Input Label', defaultValue: 'Subject' }),
        formSubjectPlaceholder: fields.text({ label: 'Subject Input Placeholder', defaultValue: 'e.g. Freelance Web Application' }),
        formMessageLabel: fields.text({ label: 'Message Input Label', defaultValue: 'Message' }),
        formMessagePlaceholder: fields.text({ label: 'Message Input Placeholder', defaultValue: 'Project details...' }),
        formButtonText: fields.text({ label: 'Form Submit Button Text', defaultValue: 'Send Message' }),
      },
    }),
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        summary: fields.text({ label: 'Short Summary', multiline: true }),
        featured: fields.checkbox({ label: 'Featured on Homepage', defaultValue: true }),
        imageUrl: fields.text({ 
          label: 'Cover Image URL', 
          defaultValue: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop' 
        }),
        demoUrl: fields.text({ label: 'Live Demo URL', defaultValue: '#' }),
        githubUrl: fields.text({ label: 'GitHub Repository URL', defaultValue: '#' }),
        techStack: fields.array(
          fields.text({ label: 'Tech Name' }),
          {
            label: 'Technologies Used',
            itemLabel: props => props.value,
          }
        ),
        impactMetric: fields.text({ label: 'Key Impact Metric (e.g. 40% faster load speed)', defaultValue: '10k+ Active Users' }),
        order: fields.number({ label: 'Display Order', defaultValue: 1 }),
      },
    }),

    skills: collection({
      label: 'Skills & Tech Stack',
      slugField: 'name',
      path: 'src/content/skills/*',
      schema: {
        name: fields.slug({ name: { label: 'Skill Name' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Frontend', value: 'frontend' },
            { label: 'Backend', value: 'backend' },
            { label: 'Database & Cloud', value: 'database' },
            { label: 'Tools & DevOps', value: 'tools' },
          ],
          defaultValue: 'frontend',
        }),
        iconName: fields.text({ label: 'Icon Name (e.g. Code, Database, Server, Layout, Globe, Cpu, Zap, Cloud)', defaultValue: 'Code' }),
        proficiency: fields.text({ label: 'Proficiency Level (e.g. Expert, Advanced)', defaultValue: 'Expert' }),
        order: fields.number({ label: 'Display Order', defaultValue: 1 }),
      },
    }),

    education: collection({
      label: 'Education & Certifications',
      slugField: 'degree',
      path: 'src/content/education/*',
      schema: {
        degree: fields.slug({ name: { label: 'Degree / Certificate Title' } }),
        institution: fields.text({ label: 'Institution / Platform Name' }),
        fieldOfStudy: fields.text({ label: 'Field of Study' }),
        period: fields.text({ label: 'Time Period (e.g. 2020 - 2024)' }),
        logoUrl: fields.text({ label: 'Institution Logo / Image URL', defaultValue: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=200&auto=format&fit=crop' }),
        description: fields.text({ label: 'Key Highlights / Details', multiline: true }),
        order: fields.number({ label: 'Display Order', defaultValue: 1 }),
      },
    }),

    experience: collection({
      label: 'Work Experience',
      slugField: 'role',
      path: 'src/content/experience/*',
      schema: {
        role: fields.slug({ name: { label: 'Job Role / Title' } }),
        company: fields.text({ label: 'Company / Client Name' }),
        location: fields.text({ label: 'Location / Work Type (e.g. Remote, Hybrid)' }),
        period: fields.text({ label: 'Duration (e.g. 2022 - Present)' }),
        isCurrent: fields.checkbox({ label: 'Currently Working Here', defaultValue: false }),
        logoUrl: fields.text({ label: 'Company Logo URL', defaultValue: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop' }),
        description: fields.text({ label: 'Role Description', multiline: true }),
        achievements: fields.array(
          fields.text({ label: 'Achievement' }),
          {
            label: 'Key Achievements & Contributions',
            itemLabel: props => props.value,
          }
        ),
        order: fields.number({ label: 'Display Order', defaultValue: 1 }),
      },
    }),
  },
});
