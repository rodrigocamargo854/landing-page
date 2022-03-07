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
  title:string
  modules: Modules[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAbouProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
}
