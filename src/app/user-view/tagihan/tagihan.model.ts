import { Member } from '../user.model';

export interface Bill {
  id: string;
  uuid: string;
  token: string;
  type: string;
  amount: number;
  fee: number;
  lastStatus: number;
  lastStatusAt: string;
  receiptFile: string;
  createdAt: string;
  member: Member;
}
