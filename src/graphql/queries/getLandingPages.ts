const GET_LANDING_PAGE = /* GraphQL */ `
  # Write your ququeryery or mutation here
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

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      icon {
        name
        url
      }
    }
  }
}
fragment sectionConcepts on LandingPage{
  sectionConcepts{
    title
    concepts{
      title
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
    ...sectionTech
    ...sectionConcepts
  }
}

`
export default GET_LANDING_PAGE
