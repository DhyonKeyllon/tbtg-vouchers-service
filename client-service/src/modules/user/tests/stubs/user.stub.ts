import { type VoucherStatus } from '@/shared/enums';

type Voucher = {
  id: string;
  code: string;
  status: VoucherStatus;

  createdAt: string;
  updatedAt: string;

  userId?: string;

  expirationDate?: string;
};

type UserStubType = {
  id: string;
  email: string;
  name: string;

  createdAt: string;
  updatedAt: string;

  vouchers?: Voucher[];
  deletedAt?: string;
};

export const userStub: UserStubType = {
  id: '64e4fd23-6e19-4ddb-bdeb-9e327f924eaa',
  email: 'johndoe@examplemail.com',
  name: 'John Doe',
  createdAt: '2024-07-15T15:27:15.700Z',
  updatedAt: '2024-07-15T15:27:15.700Z',
  deletedAt: null,
};

export const userStubWithDeletedAt: UserStubType = {
  id: '64e4fd23-6e19-4ddb-bdeb-9e327f924eaa',
  email: 'johndoe@examplemail.com',
  name: 'John Doe',
  createdAt: '2024-07-15T15:27:15.700Z',
  updatedAt: '2024-07-15T15:27:15.700Z',
  deletedAt: '2024-07-15T15:27:15.700Z',
};

export const userStubWithAssociatedVouchers: UserStubType = {
  id: '64e4fd23-6e19-4ddb-bdeb-9e327f924eaa',
  email: 'johndoe@examplemail.com',
  name: 'John Doe',
  vouchers: [
    {
      id: 'af94fcca-b796-4a05-9a19-04a66b28db7f',
      code: 'CODEEXAMPLE',
      status: 'ACTIVE',
      expirationDate: '2024-12-21T17:00:17.303Z',
      userId: 'f0f364a4-3f05-4eaf-95e4-7a60ea6f8ed3',
      createdAt: '2024-12-21T17:02:35.007Z',
      updatedAt: '2024-12-21T20:48:41.035Z',
    },
  ],
  createdAt: '2024-07-15T15:27:15.700Z',
  updatedAt: '2024-07-15T15:27:15.700Z',
  deletedAt: '2024-07-15T15:27:15.700Z',
};
