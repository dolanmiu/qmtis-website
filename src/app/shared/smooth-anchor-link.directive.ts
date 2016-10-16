import { Directive, ElementRef, HostListener } from '@angular/core';

enum Direction {
    Down,
    Up
}

@Directive({ selector: '[appSmoothAnchorLink]' })
export class SmoothAnchorLinkDirective {

    constructor(el: ElementRef) {
    }

    @HostListener('click', ['$event'])
    onMouseEnter(e) {
        let id = e.target.hash.substring(1);
        let element = document.getElementById(id);
        let rect = this.cumulativeOffset(element);

        this.smoothScroll(rect.top);
        return false;
    }

    private cumulativeOffset(element: any) {
        let top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    };

    private recursiveScroll(from: number, to: number, direction: Direction, speed: number) {
        if (direction === Direction.Down && from >= to) {
            return;
        }

        if (direction === Direction.Up && from <= to) {
            return;
        }

        window.scrollTo(0, from);
        setTimeout(() => {
            if (direction === Direction.Down) {
                this.recursiveScroll(from + 40, to, direction, speed);
            } else {
                this.recursiveScroll(from - 40, to, direction, speed);
            }
        }, 1);

    }

    private smoothScroll(yPos: number) {
        let targetY = yPos;
        let currentY = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        let direction;

        if (targetY < currentY) {
            direction = Direction.Up;
        } else {
            direction = Direction.Down;
        }
        this.recursiveScroll(currentY, targetY, direction, 40);
    }
}
