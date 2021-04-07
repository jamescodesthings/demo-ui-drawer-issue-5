import {
    platformNativeScriptDynamic,
    AppLaunchView,
} from "@nativescript/angular";
import { GridLayout } from "@nativescript/core";
import { AppModule } from "./app/app.module";

export class LaunchAnimation extends GridLayout implements AppLaunchView {
    circle: GridLayout;
    finished = false;
    complete: () => void;

    constructor() {
        super();
        this.backgroundColor = "#4caef7";
        this.className = "w-full h-full";

        // construct any creative animation
        this.circle = new GridLayout();
        this.circle.width = 30;
        this.circle.height = 30;
        this.circle.borderRadius = 15;
        this.circle.horizontalAlignment = "center";
        this.circle.verticalAlignment = "middle";
        this.circle.backgroundColor = "#fff";

        this.addChild(this.circle);
    }

    async startAnimation() {
        await this.circle.animate({
            scale: { x: 2, y: 2 },
            duration: 800,
        });

        await this.circle.animate({
            scale: { x: 1, y: 1 },
            duration: 800,
        });

        if (this.finished) {
            await this.circle.animate({
                scale: { x: 30, y: 30 },
                duration: 400,
            });
            this.fadeOut();
        } else {
            // keep looping
            this.startAnimation();
        }
    }

    cleanup() {
        return new Promise((resolve) => {
            this.complete = resolve;
            this.finished = true;
        });
    }

    async fadeOut() {
        await this.animate({
            opacity: 0,
            duration: 400,
        });
        this.complete();
    }
}
