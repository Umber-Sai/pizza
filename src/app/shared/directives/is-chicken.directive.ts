import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  isChicken: string = '';

  ngOnInit() {
    if(this.isChicken.toLocaleLowerCase().includes('кур')) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
  }


  // set isChicken(description : string) {
  //   if(description.toLocaleLowerCase().includes('кур')) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

}
