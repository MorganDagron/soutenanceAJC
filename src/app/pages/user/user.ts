export class User {
  constructor(
    public Mail: string,
    public Nom: string,
    public Prenom: string,
    public AdressePostale: string,
    public Telephone: string,
    public IsAdmin: boolean
  ) {}
}
