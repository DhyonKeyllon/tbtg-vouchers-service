export enum VoucherStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const VoucherStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

export type VoucherStatus = (typeof VoucherStatus)[keyof typeof VoucherStatus];
