export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export interface authenticationData {
   id: string,
   role: string
};

export class User {
   constructor(
      private id: string,
      private name: string,
      private nickname: string,
      private email: string,
      private password: string,
      private role: USER_ROLES
   ) { }

   getId() {
      return this.id
   }

   getNickname() {
      return this.nickname
   }

   getName() {
      return this.name
   }

   getEmail() {
      return this.email
   }

   getPassword() {
      return this.password
   }

   getRole() {
      return this.role
   }

   setId(newId: string) {
      this.id = newId
   }

   setNickname(newNickname: string) {
      this.nickname = newNickname
   }

   setName(newName: string) {
      this.name = newName
   }

   setEmail(newEmail: string) {
      this.email = newEmail
   }

   setPassword(newPassword: string) {
      this.password = newPassword
   }

   setRole(newRole: USER_ROLES) {
      this.role = newRole
   }

   static toUserModel(data: any): User {
      return new User(data.id, data.name, data.nickname, data.email, data.password, data.role);
   };
}