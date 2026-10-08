export interface Profile {
  firstName: string
  lastName: string
  nickname: string
  title: string
  location: string
  photo: string
  summary: string
}

export interface Contact {
  phone: string
  email: string
  location: string
  line: string
}

export interface Experience {
  company: string
  role: string
  period: string
  current?: boolean
  highlights: string[]
  tags: string[]
}

export interface Skill {
  name: string
  icon: string
  desc: string
}

export interface Education {
  school: string
  degree: string
  field: string
  period: string
}
