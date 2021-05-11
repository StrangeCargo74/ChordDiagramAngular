
import { Chord, ribbonArrow } from "d3-chord";
import { ChordGroupViewModel } from "./chord-group.viewmodel";

export class ChordViewModel {

    private innerRadius: number;

    public path:string | null;

    public get gradient_x1(): number {
        return this.innerRadius*Math.cos((this.chord.source.endAngle-this.chord.source.startAngle)/2 +
        this.chord.source.startAngle-Math.PI/2);
    }
    public get gradient_y1(): number {
        return this.innerRadius*Math.sin((this.chord.source.endAngle-this.chord.source.startAngle)/2 + 
        this.chord.source.startAngle-Math.PI/2);
    }
    public get gradient_x2(): number {
        return this.innerRadius*Math.cos((this.chord.target.endAngle-this.chord.target.startAngle)/2 + 
        this.chord.target.startAngle-Math.PI/2);
    }
    public get gradient_y2(): number {
        return this.innerRadius*Math.sin((this.chord.target.endAngle-this.chord.target.startAngle)/2 + 
        this.chord.target.startAngle-Math.PI/2);
    }

    public get gradient_id(): string{
        return `source-${this.chord.source.index}-target-${this.chord.target.index}`;
    }

    public get gradient_URL(): string{
        return `url(#${this.gradient_id})`;
    }

    constructor(private chord: Chord, radius: number, public sourceGroup: ChordGroupViewModel, public targetGroup: ChordGroupViewModel){

        this.innerRadius = radius - 10;

        var ribbon = ribbonArrow()

        this.path = <string | null> <unknown>ribbon({
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