import { browser, by, element } from 'protractor';

export class AppPage {
    // tslint:disable-next-line:no-any
    public navigateTo(): Promise<any> {
        // tslint:disable-next-line:no-any
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    public getTitleText(): Promise<string> {
        return element(by.css('app-root .content span')).getText() as Promise<string>;
    }
}
