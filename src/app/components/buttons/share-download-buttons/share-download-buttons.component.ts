import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-share-download-buttons',
  templateUrl: './share-download-buttons.component.html',
  styleUrls: ['./share-download-buttons.component.css']
})
export class ShareDownloadButtonsComponent implements OnInit {

  constructor() { }
  @Input()
  message: string = ''
  ngOnInit(): void {
  }

}



