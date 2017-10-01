import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
@Output() toggledTab = new EventEmitter<{selectedTab: string}>();


onTabClick(tab) {
    this.toggledTab.emit({selectedTab: tab});
}

}
