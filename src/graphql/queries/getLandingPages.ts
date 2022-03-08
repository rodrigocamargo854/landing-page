const GET_LANDING_PAGE = /* GraphQL */ `
  # Write your ququeryery or mutation here
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
  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }
  fragment sectionModules on LandingPage {
    sectionModules {
      modules {
        title
        subtitle
        description
      }
    }
  }
  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
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

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
        id
      }
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      benefits
      priceInstallment
      button {
        label
        url
      }
    }
  }
  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        photo {
          url
          alternativeText
        }
        name
        role
        description
      }
    }
  }

  fragment sectionReviews on LandingPage{
  sectionReviews{
    title
    reviews{
      name
      text
      photo{
        url
      }
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
      ...sectionModules
      ...sectionAgenda
      ...sectionFaq
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
    }
  }
`
export default GET_LANDING_PAGE
