export enum VoucherStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  USED = 'USED',
}

export const VoucherStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  USED: 'USED',
} as const;

export type VoucherStatus = (typeof VoucherStatus)[keyof typeof VoucherStatus];
