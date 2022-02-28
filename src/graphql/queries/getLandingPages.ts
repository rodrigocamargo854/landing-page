const GET_LANDING_PAGE = /* GraphQL */ `
  query LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`
export default GET_LANDING_PAGE
