import { Injectable } from '@angular/core';
import { PageInfo } from '../models/interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  pageInfo: PageInfo = {
    pageOptionType: "collection",
    genitive: 'odbioru',
    imperative: 'odbierz',
    infinitive: 'odebrać',
  }
}
