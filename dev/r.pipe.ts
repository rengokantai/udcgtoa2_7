/**
 * Created by Hernan Y.Ke on 2016/2/22.
 */
    import {Pipe,PipeTransform} from 'angular2/core';
//import {PipeTransform} from "../node_modules/angular2/src/core/change_detection/pipe_transform";
@Pipe({
    name:'mr'
})
export class RPipe implements PipeTransform{
    transform(value:string, args:any[]){
        const lg =value.length;
        let res ='';
        for(let i =0;i<lg;i++){
            res=value[i]+res;
        }
        return res;
    }
}