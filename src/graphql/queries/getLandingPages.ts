const GET_LANDING_PAGE = /* GraphQL */ `
  # Write your ququeryery or mutation here

  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }
  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }
  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }
  query LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
    }
  }
`
export default GET_LANDING_PAGE
