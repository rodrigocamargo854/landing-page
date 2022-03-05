export type LogoProps = {
  url: string
  alternativeText: string
}

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

export type SectionAbouProjectProps = {
  title: string
  description: string
  image:{
      alternativeText: string
      url: string
    }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectioAboutProject: SectionAbouProjectProps
}
