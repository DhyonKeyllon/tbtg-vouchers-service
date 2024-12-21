type Voucher = {
  id: string;
  code: string;

  createdAt: string;
  updatedAt: string;

  expiredAt?: string;
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
      id: '64e4fd23-6e19-4ddb-bdeb-9e327f924eaa',
      code: 'VoucherCode',
      createdAt: '2024-07-15T15:27:15.700Z',
      updatedAt: '2024-07-15T15:27:15.700Z',
      expiredAt: '2024-07-15T15:27:15.700Z',
    },
  ],
  createdAt: '2024-07-15T15:27:15.700Z',
  updatedAt: '2024-07-15T15:27:15.700Z',
  deletedAt: '2024-07-15T15:27:15.700Z',
};
