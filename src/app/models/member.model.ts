import { RegForum } from './reg-forum.model';
import { Dosen } from './dosen.model';
import { Prodi } from './prodi.model';

export interface Member {
  id: bigint;
  uuid: string;
  foundationName: string;
  headOfFoundation: string;
  universityName: string;
  rectorName: string;
  universityAddress: string;
  facultyName: string;
  deanName: string;
  facultyAddress: string;
  facultyPhone: string;
  facultyWebsite: string;
  facultyEmail: string;
  registerLastStatus: number;
  registerLastAt: Date;
  registerMonth: number;
  regForumId: bigint;
  regForum: RegForum;
  dosenFileS1: string;
  dosenFilePspa: string;
  dosenFileSarpra: string;
  prodis: Prodi[];
  userId: bigint;
  isDeleted: boolean;
  deletedAt: Date;
  deletedBy: bigint;
  createdAt: Date;
  updatedAt: Date;
  annualPaid: boolean;
  registerPaid: boolean;
  skFile: string;
  skFileUrl: string;
  noSk: number;
  skString: string;
  prodi: Prodi;
  dosens: Dosen[];
  rejectReason: string;
}
