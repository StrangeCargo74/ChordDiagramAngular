import { ChordGroup } from "d3-chord";
import { arc } from "d3-shape";


import { IPhoneBrand } from "../interfaces/phone-brand.interface";

export class PhoneBrandViewModel implements IPhoneBrand{

    public path:string | null;

    public get href(): string {
        return `#${this.name}`;
    }

    public get tooltip(): string {
        return `${this.name} - ${this.group.value}`;
    }

    constructor(private group: ChordGroup, radius: number, public name:string, public colour:string){

        const arcGenerator = arc();
        this.path=arcGenerator({startAngle: group.startAngle, endAngle: group.endAngle, innerRadius:radius-10, outerRadius: radius});
    }


}