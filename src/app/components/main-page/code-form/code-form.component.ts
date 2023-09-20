import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { PageInfo } from 'src/app/models/interfaces/page-info.interface';
import { ResponseBody } from 'src/app/models/interfaces/response-body.interface';
import { SuccessfullResponseBody } from 'src/app/models/interfaces/successfull-response-body.interface';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'qr-code-form',
  templateUrl: './code-form.component.html',
  styleUrls: ['./code-form.component.scss'],
})
export class CodeFormComponent {
  @Input() activePageInfo!: PageInfo;

  code!: string;
  response$!: Observable<ResponseBody>;
  successfulResponseBody: SuccessfullResponseBody = {
    qrCode: '',
    expirationDate: '',
  };
  isValid: boolean = false;
  btnClicked: boolean = false;

  constructor(private paramsService: ParamsService, private router: Router) {}

  submitCode() {
    this.btnClicked=true;
    switch (this.activePageInfo.pageOptionType) {
      case 'collection':
        // this.response$ = this.paramsService.response$
        this.response$ = this.paramsService.getCollectionForCode(this.code);
        break;
      case 'return':
        this.response$ = this.paramsService.getReturnForCode(this.code);
        break;
      default:
        break;
    }

    if (this.validateRequest(this.response$)) {
      this.unwrapData(this.response$);
      this.router.navigate([
        'qr/',
        this.code,
        {
          activePageInfo: this.activePageInfo.imperative,
          qrCode: this.successfulResponseBody.qrCode,
          expectedExpirationDate: this.successfulResponseBody.expirationDate,
          multicompartment: this.successfulResponseBody.multicompartment,
          size: this.successfulResponseBody.size,
        },
      ]);
    }
  }

  private validateRequest(response$: Observable<ResponseBody>): boolean {
    response$.pipe(map((res) => res?.qrCode)).subscribe((qr) => {
      this.isValid = qr != undefined ? true : false;
    });

    return this.isValid;
  }

  unwrapData(response$: Observable<ResponseBody>): void {
    response$.forEach((res) => {
      this.successfulResponseBody.qrCode = res.qrCode;
      this.successfulResponseBody.expirationDate = res.expirationDate;
      this.successfulResponseBody.multicompartment = res?.multicompartment;
      this.successfulResponseBody.size = res?.size;
    });
  }
}
