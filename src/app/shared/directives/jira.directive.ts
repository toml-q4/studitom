import { Directive, OnChanges, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[q4Jira]'
})
export class JiraDirective implements OnChanges {
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
      const matcher = /((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-\d+)/g;

      const matchedIds = currentHTML.match(matcher);

      matchedIds.forEach(matchId => {
        currentHTML = currentHTML.replace(matchId, `<a class="support-link ${this.darkBackground ? 'dark-background' : 'jira'}" href="http://jira.com/${matchId}" target="_blank" title="Open in new tab">JIRA ${matchId}</a>`)
      });

      this.el.nativeElement.innerHTML = currentHTML;
    }
  }
}
