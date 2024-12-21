import { VoucherStatus } from '@/shared/enums';

export const voucherStub = {
  id: '64e4fd23-6e19-4ddb-bdeb-9e327f924eaa',
  code: 'VoucherCode',
  status: VoucherStatus.ACTIVE,
  expirationDate: '2024-07-15T15:27:15.700Z',
  createdAt: '2024-07-15T15:27:15.700Z',
  updatedAt: '2024-07-15T15:27:15.700Z',
};

export const voucherWithAssociatedUser = {
  id: '64e4fd23-6e19-4ddb-bdeb-9e327f924eaa',
  code: 'VoucherCode',
  status: VoucherStatus.ACTIVE,
  userId: '74e4fd23-6e19-4ddb-bdeb-9e327f924eab',
  expirationDate: '2024-07-15T15:27:15.700Z',
  createdAt: '2024-07-15T15:27:15.700Z',
  updatedAt: '2024-07-15T15:27:15.700Z',
};
