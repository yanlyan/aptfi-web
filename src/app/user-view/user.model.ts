import { RegForum } from '../master/reg-forum.model';

export interface Role {
  id: number;
  name: string;
}
export interface User {
  id: bigint;
  name: string;
  email: string;
  emailVerifiedAt: Date;
  role: Role;
}

export interface Prodi {
  id: bigint;
  uuid: string;
  prodiName: string;
  prodiPermit: string;
  prodiAccreditedBy: string;
  prodiAccreditedNo: string;
  prodiEmail: string;
  prodiStudents: number;
  prodiStudentsYear: number;
  prodiPhone: string;
  prodiHead: string;
  prodiHeadPhone: string;
  prodiHeadEmail: string;
  prodiType: string;
  isDeleted: boolean;
  deletedAt: Date;
  deletedBy: bigint;
  createdAt: Date;
  updatedAt: Date;
}

export interface Dosen {
  id: bigint;
  uuid: string;
  dosenName: string;
  dosenTitle: string;
  dosenNidn: string;
  dosenBirthDate: Date;
  dosenPosition: string;
  dosenExpertise: string;
  dosenProdi: string;
  dosenType: string;
}

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
}
