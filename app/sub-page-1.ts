import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

console.log('sub-page-1.ts');

let page: Page;

export function onBackButtonTap() {
  page.frame.goBack();
}

export function navigatingTo(args: EventData) {
  console.log('navigatingTo (sub-page-1)');
  page = <Page>args.object;
  page.bindingContext = new HelloWorldModel();
}