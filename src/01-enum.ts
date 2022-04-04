export enum ROLES {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner"
}

export type User = {
  username: string
  role:ROLES
}

const fabiouser: User = {
  username:'fabio',
  role: ROLES.ADMIN
}

console.log(fabiouser)
