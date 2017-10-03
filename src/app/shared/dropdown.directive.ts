import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    constructor(private elem: ElementRef, private renderer: Renderer2) {

    }
@HostBinding('class.open')isOpen = false;
    
@HostListener('click') onTabClick() {
        this.isOpen = !this.isOpen;
    }

}
