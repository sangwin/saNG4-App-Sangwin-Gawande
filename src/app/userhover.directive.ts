// Created By : Sangwin Gawande (http://sangw.in)

import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({ selector: '[appUserhover]' })

export class UserhoverDirective {
	@Input() myHighlight: string;
	constructor(private el: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellow');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

// Created By : Sangwin Gawande (http://sangw.in)