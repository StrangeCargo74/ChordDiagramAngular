
import { Chord, ribbon } from "d3-chord";
import { ChordGroupViewModel } from "./chord-group.viewmodel";

export class ChordViewModel {

    private innerRadius: number;

    public path:string | null;

    public get tooltip(): string{

        const sourceToTarget = `${this.chord.source.value} ${this.targetGroup.name} → ${this.sourceGroup.name}`;
        const targetToSource = `\n${this.chord.target.value} ${this.sourceGroup.name} → ${this.targetGroup.name}`;
        return  this.sourceGroup.name === this.targetGroup.name? sourceToTarget : sourceToTarget + targetToSource;
    }

    constructor(private chord: Chord, radius: number, public sourceGroup: ChordGroupViewModel, public targetGroup: ChordGroupViewModel){

        this.innerRadius = radius - 10;

        var ribbonGen = ribbon()

        this.path = <string | null> <unknown>ribbonGen({
            source: {
                startAngle: chord.source.startAngle,
                endAngle: chord.source.endAngle,
                radius: this.innerRadius,
            },
            target:{
                startAngle: chord.target.startAngle,
                endAngle: chord.target.endAngle,
                radius: this.innerRadius,
            }
        });
    }

}