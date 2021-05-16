import { Component, OnInit } from '@angular/core';
import { PhoneData } from '../../data/phone-data';
import { ChordDiagramViewModel } from '../../view-models/chord-diagram.viewmodel';

@Component({
  selector: 'app-chord-diagram',
  templateUrl: './chord-diagram.component.html',
  styleUrls: ['./chord-diagram.component.scss']
})
export class ChordDiagramComponent{

  public chordDiagramVm: ChordDiagramViewModel;

  constructor() { 
    this.chordDiagramVm = new ChordDiagramViewModel(PhoneData.matrix, 230, PhoneData.groups);
  }

}
