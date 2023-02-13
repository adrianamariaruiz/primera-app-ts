export interface Sub {
  name: {
    first: string
  },
  email: string,
  picture: {
    medium: string
  },
  login: {
    uuid: string
  }
}

export type UserFromApi = {
  results: {
    name: {
      first: string
    },
    email: string,
    picture: {
      medium: string
    },
    login: {
      uuid: string
    }
  }[]
}