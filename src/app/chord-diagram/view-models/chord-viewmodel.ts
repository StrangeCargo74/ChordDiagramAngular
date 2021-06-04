
import { Chord, ribbon } from "d3-chord";
import { PhoneBrandViewModel } from "./phone-brand.viewmodel";

export class ChordViewModel {

    private innerRadius: number;

    public path:string | null;

    public get tooltip(): string{

        const sourceToTarget = `${this.chord.source.value} ${this.targetPhoneBrand.name} → ${this.sourcePhoneBrand.name}`;
        const targetToSource = `\n${this.chord.target.value} ${this.sourcePhoneBrand.name} → ${this.targetPhoneBrand.name}`;
        return  this.sourcePhoneBrand.name === this.targetPhoneBrand.name? sourceToTarget : sourceToTarget + targetToSource;
    }

    constructor(private chord: Chord, radius: number, public sourcePhoneBrand: PhoneBrandViewModel, public targetPhoneBrand: PhoneBrandViewModel){

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