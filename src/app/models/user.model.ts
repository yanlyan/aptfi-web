import { Role } from './role.model';

export interface User {
  id: bigint;
  name: string;
  email: string;
  emailVerifiedAt: Date;
  role: Role;
}
