export class Auth {
  public login: string;
  public mot_de_passe: string;
  constructor(id: number, login: string, mot_de_passe: string) {
    this.login = login;
    this.mot_de_passe = mot_de_passe;
  }
}
