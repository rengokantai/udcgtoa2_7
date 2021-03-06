import {Component} from 'angular2/core';
import {RPipe} from "./r.pipe";
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
    <section class="main">
    date
    <p>today is {{today | date: 'short'}} {{today | date: 'ymd'}}</p>
    </section>
        <section class="main">
        uppercase
    <p><input type="text" #case (keyup)="0"> {{case.value|uppercase}}</p>
    </section>
    <section class="main">
    slice
    <input type="text" #slicepipe (keyup)="0"> -from <input type="text" #start (keyup)="0">-to <input type="text" #end (keyup)="0">
    output:{{slicepipe.value|slice:start.value:end.value}}
    </section>
    <section class="main">
    numbers
    <input type="text" #numberpipe (keyup)="0">
    <input type="text" #currency value="EUR" (change)="0">
    decimal:{{1.0 * numberpipe.value |number:'1.1-2'}}
    currency:{{1.0 * numberpipe.value |currency:currency.value:currencyshort.checked:'1.2-2'}}
    <input type="checkbox" #currencyshort checked (change)="0">short
    </section>
    <section class="main">
    multiple pipes
    <input type="text" #multipipe (keyup)="0">
    {{multipipe.value|slice:1-3|uppercase}}
    </section>
    <section class="main">
    custompipe
    <input type="text" #custompipe (keyup)="0">
    {{custompipe.value|mr}}
    </section>
    <section class="main">
    {{state|async}}
    </section>`,
    pipes:[RPipe]

})
export class AppComponent {
today=new Date();
    state=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('resolve'),1000);
    })
}