import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector : '[appTurnRed]'
})
export class TurnRedDirective{
    constructor(private _el : ElementRef,private renderer : Renderer2){}

    @HostBinding("style.color") textColor : string;

    @HostListener("mouseenter",['$event']) mouseEnter(event : Event){
        // this.textColor = 'red';
        this.renderer.setStyle(this._el.nativeElement,"color","red");
    }

    @HostListener('mouseleave') mouseLeave(){
        // this.textColor = 'white';
        this.renderer.setStyle(this._el.nativeElement,"color","black");
    }
}