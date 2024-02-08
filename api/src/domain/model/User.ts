export interface UserModel {
  userId: number;
  name: string | null;
  email: string;
  password: string;
  pictureUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}