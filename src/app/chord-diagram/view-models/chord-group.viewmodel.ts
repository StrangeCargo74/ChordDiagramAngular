import { ChordGroup } from "d3-chord";
import { arc } from "d3-shape";


import { IGroupDetails } from "./chord-group-details.interface";

export class ChordGroupViewModel implements IGroupDetails{

    public path:string | null;

    constructor(group: ChordGroup, radius: number, public name:string, public colour:string){

        const arcGenerator = arc();
        this.path=arcGenerator({startAngle: group.startAngle, endAngle: group.endAngle, innerRadius:radius-10, outerRadius: radius});
    }


}