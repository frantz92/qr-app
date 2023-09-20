import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from 'src/app/models/interfaces/page-info.interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'qr-generated',
  templateUrl: './generated.component.html',
  styleUrls: ['./generated.component.scss'],
})
export class GeneratedComponent implements OnInit {
  expectedExpirationDate?: string | null;
  qrCode?: string | null;
  size?: string | null;
  multicompartment?: boolean;

  constructor(private route: ActivatedRoute, public sharedService: SharedService) {}

  ngOnInit(): void {
    this.expectedExpirationDate = this.route.snapshot.paramMap.get(
      'expectedExpirationDate'
    );
    this.qrCode = this.route.snapshot.paramMap.get('qrCode');
    this.size = this.route.snapshot.paramMap.get('size');
    this.multicompartment =
    this.route.snapshot.paramMap.get('multicompartment') === 'true';
  }
}
