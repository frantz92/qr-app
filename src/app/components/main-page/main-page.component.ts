import { Component } from '@angular/core';
import { PageInfo } from '../../models/interfaces/page-info.interface';
import { PageOption } from '../../models/enums/page-option.enum';
import { SharedService } from '../../services/shared.service'

@Component({
  selector: 'qr-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  packageReceivePageInfo: PageInfo = {
    pageOptionType: "collection",
    genitive: 'odbioru',
    imperative: 'odbierz',
    infinitive: 'odebrać',
  }

  packageReturnPageInfo: PageInfo = {
    pageOptionType: "return",
    genitive: 'zwrotu',
    imperative: 'zwróć',
    infinitive: 'zwrócić',
  }

  pageOptions: typeof PageOption = PageOption;
  activePageInfo: PageInfo = this.packageReceivePageInfo;
  activePageOption: PageOption = PageOption.packageReceive;

  constructor(private sharedService: SharedService) {}

  choosePageOption(pageOption: PageOption): void {
    this.activePageOption = pageOption;
    this.sharedService.pageInfo = this.activePageInfo;
    this.loadPageInfo();
  }

  private loadPageInfo(): void {
    switch (this.activePageOption) {
      case PageOption.packageReceive:
        this.activePageInfo = this.packageReceivePageInfo;
        break;
      case PageOption.packageReturn:
        this.activePageInfo = this.packageReturnPageInfo;
        break;
      default:
        break;
    }
  }
}
