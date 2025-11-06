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

export const BLOG_POSTS: BlogPost[] = []

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
