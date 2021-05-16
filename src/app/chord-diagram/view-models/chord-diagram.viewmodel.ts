import { descending } from 'd3-array';
import { chord } from 'd3-chord';
import { IGroupDetails } from './chord-group-details.interface';
import { ChordGroupViewModel } from './chord-group.viewmodel';
import { ChordViewModel } from './chord-viewmodel';

export class ChordDiagramViewModel{

    public chordGroups: Array<ChordGroupViewModel> = [];
    public chordVms: Array<ChordViewModel>=[];

    public constructor(inputMatrix:number[][], radius: number, groupDetails : IGroupDetails[]){
        const chordLayout = chord().padAngle(10 / (radius-10))
                                    .sortSubgroups(descending)
                                    .sortChords(descending)
                                    
        const chords = chordLayout(inputMatrix);
    
        if(chords){
            chords.groups.forEach((group, index)=>{
                this.chordGroups.push(new ChordGroupViewModel(group, radius, groupDetails[index].name, groupDetails[index].colour));
            });
            this.chordVms = chords.map(chord=>new ChordViewModel(chord, radius, this.chordGroups[chord.source.index], this.chordGroups[chord.target.index]));
        }
    }
}