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
