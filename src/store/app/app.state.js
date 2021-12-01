export default {
  appTitle: process.env.VUE_APP_TITLE,
  appShortTitle: process.env.VUE_APP_SHORT_TITLE,
  networkOnLine: true,
  SWRegistrationForNewContent: null,
  showAddToHomeScreenModalForApple: false,
  refreshingApp: false,
  openMobileNav: false,
  projectsContent: [
    {
      slug: 'web-design',
      content: {
        hero: {
          background: 'image-web-design-background.svg',
          backgroundPosition: 'right',
          title: 'Web design',
          subtitle: 'We build websites that serve as powerful marketing tools<br>and bring memorable brand experiences.'
        },
        projects: [
          {
            image: 'web-design/image-express.jpg',
            title: 'EXPRESS',
            text: 'A multi-carrier shipping website for ecommerce businesses'
          },
          {
            image: 'web-design/image-transfer.jpg',
            title: 'TRANSFER',
            text: 'Site for low-cost money transfers and sending money within seconds'
          },
          {
            image: 'web-design/image-photon.jpg',
            title: 'PHOTON',
            text: 'A state-of-the-art music player with high-resolution audio and DSP effects'
          },
          {
            image: 'web-design/image-builder.jpg',
            title: 'BUILDER',
            text: 'Connects users with local contractors based on their location'
          },
          {
            image: 'web-design/image-blogr.jpg',
            title: 'BLOGR',
            text: 'Blogr is a platform for creating an online blog or publication'
          },
          {
            image: 'web-design/image-camp.jpg',
            title: 'CAMP',
            text: 'Get expert training in coding, data, design, and digital marketing'
          }
        ],
        otherCategories: [
          {
            image: 'image-app-design.jpg',
            slug: 'app-design',
            name: 'App design'
          },
          {
            image: 'image-graphic-design.jpg',
            slug: 'graphic-design',
            name: 'Graphic design'
          }
        ]
      }
    },
    {
      slug: 'app-design',
      content: {
        hero: {
          background: 'image-app-design-background.svg',
          backgroundPosition: 'left',
          title: 'App design',
          subtitle: 'Our mobile designs bring intuitive digital solutions<br>to your customers right at their fingertips.'
        },
        projects: [
          {
            image: 'app-design/image-airfilter.jpg',
            title: 'AIRFILTER',
            text: 'Solving the problem of poor indoor air quality by filtering the air'
          },
          {
            image: 'app-design/image-eyecam.jpg',
            title: 'EYECAM',
            text: 'Product that lets you edit your favorite photos and videos at any time'
          },
          {
            image: 'app-design/image-faceit.jpg',
            title: 'FACEIT',
            text: 'Get to meet your favorite internet superstar with the faceit app'
          },
          {
            image: 'app-design/image-todo.jpg',
            title: 'TODO',
            text: 'A todo app that features cloud sync with light and dark mode'
          },
          {
            image: 'app-design/image-loopstudios.jpg',
            title: 'LOOPSTUDIOS',
            text: 'A VR experience app made for Loopstudios'
          }
        ],
        otherCategories: [
          {
            image: 'image-web-design-small.jpg',
            slug: 'web-design',
            name: 'Web design'
          },
          {
            image: 'image-graphic-design.jpg',
            slug: 'graphic-design',
            name: 'Graphic design'
          }
        ]
      }
    },
    {
      slug: 'graphic-design',
      content: {
        hero: {
          background: 'image-graphic-design-background.svg',
          backgroundPosition: 'left',
          title: 'Graphic design',
          subtitle: 'We deliver eye-catching branding materials that are<br>tailored to meet your business objectives.'
        },
        projects: [
          {
            image: 'graphic-design/image-change.jpg',
            title: 'TIM BROWN',
            text: 'A book cover designed for Tim Brown’s new release, ‘Change’'
          },
          {
            image: 'graphic-design/image-boxed-water.jpg',
            title: 'BOXED WATER',
            text: 'A simple packaging concept made for Boxed Water'
          },
          {
            image: 'graphic-design/image-science.jpg',
            title: 'SCIENCE!',
            text: 'A poster made in collaboration with the Federal Art Project'
          }
        ],
        otherCategories: [
          {
            image: 'image-app-design.jpg',
            slug: 'app-design',
            name: 'App design'
          },
          {
            image: 'image-web-design-small.jpg',
            slug: 'web-design',
            name: 'Web design'
          }
        ]
      }
    }
  ]
}
