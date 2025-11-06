type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  pdfPath?: string  // Optional PDF file path
}

export type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Raspberry Pi AV Controller',
    description:
      'Touchscreen interface for controlling AV equipment using a Raspberry Pi.',
    link: 'https://github.com/Robotghost718/RPI-AV-Controller',
    video:
      '/videos/RPIAVCtrl.mp4',
    id: 'project1',
  },
   {
    name: 'Subpage Navigation LWC',
    description:
      'navigation component for Salesforce Experience Cloud, dynamically renders list with currentPage highlighted.',
    link: 'https://github.com/Robotghost718/lwcSubPageNavigation',
    video:
      '/videos/SubpageNav.mp4',
    id: 'project2',
  },
    {
    name: 'CMS News Component',
    description:
      'A Lightning Web Component (LWC) that displays News Content Types as RichText for quick content updates. Renders CMS images inline',
    link: 'https://github.com/Robotghost718/cmsLWComponent',
    video:
      '/videos/CMS-LWC.mp4',
    id: 'project2',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Pratt Insititute',
    title: 'Web Developer',
    start: '2017',
    end: 'Present',
    link: 'https://www.pratt.edu/people/daniel-stern/',
    id: 'work1',
  },
  {
    company: 'American Museum of Natural History',
    title: 'Audio Visual Technician',
    start: '2016',
    end: '2017',
    link: 'https://www.amnh.org/',
    id: 'work2',
  },
  {
    company: 'Metropolitan Museum of Art',
    title: 'A/V Specialist',
    start: '2014',
    end: '2016',
    link: 'https://www.metmuseum.org/',
    id: 'work3',
  },
  {
   company: 'My Resume',
    title: '',
    start: '',
    end: '',
    link: '/Daniel_Stern_Resume.pdf',
    id: 'work4',
    pdfPath: 'documents/Daniel_Stern_Resume.pdf', // Path to the PDF file
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building a Raspberry Pi AV Controller',
    description:
      'Learn how to create a touchscreen interface for controlling AV equipment using a Raspberry Pi. Perfect for home automation and professional installations.',
    link: 'https://github.com/Robotghost718/RPI-AV-Controller',
    uid: 'blog1',
  },
  {
    title: 'Salesforce Lightning Web Components',
    description:
      'Explore best practices for building reusable Lightning Web Components. Discover patterns for dynamic navigation and content rendering in Experience Cloud.',
    link: 'https://github.com/Robotghost718/lwcSubPageNavigation',
    uid: 'blog2',
  },
  {
    title: 'Web Development at Scale',
    description:
      'Tips and tricks for managing large-scale web projects. From architecture to deployment, learn how to build robust and maintainable applications.',
    link: 'https://dsweb.dev',
    uid: 'blog3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/robotghost718',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/danstern718/'
  },
  {
    label:'Trailblazer',
    link:'https://www.salesforce.com/trailblazer/dstern9'
  }
]

export const EMAIL = 'ds@dsweb.dev'
