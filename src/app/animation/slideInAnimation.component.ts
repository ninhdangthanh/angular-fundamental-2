import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-in'),
  ]),
  transition('* => void', [
    animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
  ]),
]);

export const slideInAnimation2 = trigger('slideIn1', [
  state('out', style({
    opacity: 0
  })),
  state('in',  style({
    opacity: 1
  })),
  transition('out=>in', [
    animate('5s')
  ])
]);
