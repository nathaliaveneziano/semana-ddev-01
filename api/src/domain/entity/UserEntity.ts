export default class UserEntity {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public createdAt: Date;
  public updatedAt: Date;
  public deletedAt: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
