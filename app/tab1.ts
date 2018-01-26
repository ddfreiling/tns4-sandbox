import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

console.log('tab1.ts');

let page: Page;

export function onNavigate() {
  console.log('onNavigate');

  page.frame.navigate({
    moduleName: 'sub-page-1',
    animated: true,
    transition: {
        name: "slide",
        duration: 200,
        curve: "ease"
    }
});
}

export function navigatingTo(args: EventData) {
  console.log('navigatingTo (tab1)');
  page = <Page>args.object;
}