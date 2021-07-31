export interface User {
  id: bigint;
  name: string;
  email: string;
  emailVerifiedAt: Date;
}

export interface Prodi {
  id: bigint;
  uuid: string;
  prodiName: string;
  prodiPermit: string;
  prodiAccreditedBy: string;
  prodiAccreditedNo: string;
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
  regForumId: bigint;
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
}
