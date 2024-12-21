import { HttpService } from '@nestjs/axios';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// ? Aqui não vou usar um try catch pois precisaria criar um ErrorHandlerService para tratar error de escopos 'THIRD-PARTY'
@Injectable()
export class VoucherServiceClient {
  private readonly url: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.url = configService.get('VOUCHER_SERVICE_URL');
  }

  public async isVoucherUsed(code: string) {
    const urlWithResource = `${this.url}/api/vouchers/${code}/is-used`;

    const response = await this.httpService.axiosRef.get(urlWithResource);

    if (response.status !== HttpStatus.OK)
      throw new BadRequestException(response.data);

    const { data } = response;

    return { data };
  }

  async isVoucherActive(voucherCode: string): Promise<boolean> {
    const response = await this.httpService
      .get<boolean>(`http://vouchers-service/vouchers/${voucherCode}/is-active`)
      .toPromise();
    return response.data;
  }
}
