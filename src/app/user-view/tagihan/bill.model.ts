import { Member } from 'src/app/models/member.model';

export interface Bill {
  id: number;
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
  loading: boolean;
  universityName: string;
  expiredDate: Date;
  isExpired: boolean;
  year: number;
  orderId: string;
}
