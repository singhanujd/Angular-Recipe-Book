import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector : '[appCustomIf]'
})
export class CustomIfDirective{
    @Input() set appCustomIf(condition){
        if(condition){
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }else{
            this.viewContainerRef.clear();
        }
    } 
    constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef){

    }
}