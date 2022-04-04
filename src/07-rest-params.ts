  import {ROLES,User} from './01-enum'

  const currentUser : User ={username:'fabio',role:ROLES.USER}

   const checkAdminRole = () => {
     if(currentUser.role === ROLES.ADMIN) {
       return true
     }
     return false
   }

     const checkRole= (...roles: string[]) => {
     if(roles.includes(currentUser.role)) {
       return true
     }
     return false
   }

   console.log(checkRole(ROLES.ADMIN,ROLES.OWNER,ROLES.USER))