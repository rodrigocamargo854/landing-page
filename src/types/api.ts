export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type TechIcon = {
  title: string
  icon: {
    name: string
    url: string
  }
}
export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionAbouProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionAgendaProps = Image
export type Questions = {
  question: string
  answer: string
  id: string
}
export type SectionFaqProps = {
  title: string
  questions: Questions[]
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type Reviews={
    name : string
    text : string
    photo:{
      url:string
    }
}

export type SectionReviewsProps = {
  title:string
  reviews:Reviews[]
}

export type Image = {
  url: string
  alternativeText: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}
export type Author = {
  photo: Image
  name: string
  role: string
  description: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAbouProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  sectionFaq: SectionFaqProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
}
