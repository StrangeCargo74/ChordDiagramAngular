import { descending } from 'd3-array';
import { chord } from 'd3-chord';
import { IPhoneBrand } from '../interfaces/phone-brand.interface';
import { PhoneBrandViewModel } from './phone-brand.viewmodel';
import { ChordViewModel } from './chord-viewmodel';

export class ChordDiagramViewModel{

    public phoneBrandVms: Array<PhoneBrandViewModel> = [];
    public chordVms: Array<ChordViewModel>=[];

    public constructor(inputMatrix:number[][], radius: number, groupDetails : IPhoneBrand[]){
        const chordLayout = chord().padAngle(10 / (radius-10))
                                    .sortSubgroups(descending)
                                    .sortChords(descending)
                                    
        const chords = chordLayout(inputMatrix);
    
        if(chords){
            chords.groups.forEach((group, index)=>{
                this.phoneBrandVms.push(new PhoneBrandViewModel(group, radius, groupDetails[index].name, groupDetails[index].colour));
            });
            this.chordVms = chords.map(chord=>new ChordViewModel(chord, radius, this.phoneBrandVms[chord.source.index], this.phoneBrandVms[chord.target.index]));
        }
    }
}