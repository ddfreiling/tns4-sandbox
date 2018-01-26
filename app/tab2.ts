import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

console.log('tab2.ts');

let page: Page;

export function onNavigate() {
  console.log('onNavigate');

  page.frame.navigate({
    moduleName: 'sub-page-2',
    animated: true,
    transition: {
        name: "slide",
        duration: 200,
        curve: "ease"
    }
});
}

export function navigatingTo(args: EventData) {
  console.log('navigatingTo (tab2)');
  page = <Page>args.object;
}