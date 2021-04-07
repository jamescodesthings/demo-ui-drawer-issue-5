import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { install } from '@nativescript-community/ui-drawer';

/**
 * This wraps any page that uses it as a root component with the drawer.
 *
 * The idea here is we have app-root > app-drawer > page on pages with a drawer
 * And app-root > page on pages without a drawer
 */
@Component({
    selector: 'app-drawer',
    template: `<Drawer>
        <GridLayout leftDrawer>
            <Label text="This is the side drawer content" color="white" verticalAlignment="center"></Label>
        </GridLayout>

        <page-router-outlet mainContent></page-router-outlet>
    </Drawer>
    `,
})
export class AppDrawerComponent implements OnInit {
    /**
     * @constructor
     */
    constructor(
        private page: Page,
    ) {

    }

    /**
     * ngOnInit
     */
    ngOnInit() {
        install();
        // this is required becasue having two <page-router-outlet>s on a screen causes double action bar in android
        if (this.page) {
            this.page.actionBarHidden = true;
        }
    }
}
