import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[q4Zendesk]'
})
export class ZendeskDirective implements OnChanges {
  @Input() textWithId: string;
  @Input() darkBackground: boolean;

  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes) {
    let currentHTML = this.el.nativeElement.innerHTML;

    if (!currentHTML) {
      currentHTML = changes.textWithId.currentValue;
    }
    if (currentHTML !== undefined && currentHTML !== null) {
      const matcher = /(Z-\d+)/g;

      const matchedIds = currentHTML.match(matcher);

      matchedIds.forEach(matchedId => {
        currentHTML = currentHTML.replace(matchedId, `<a class="support-link ${this.darkBackground ? 'dark-background' : 'zendesk'}" href="http://zendesk.com/${matchedId}" target="_blank">ZENDESK ${matchedId}</a>`)
      });

      this.el.nativeElement.innerHTML = currentHTML;
    }
  }
}
