# Demo for Issue
Demo for issue https://github.com/nativescript-community/ui-drawer/issues/5

Based on `@nativescript/template-hello-world-ng@7.0.10`.

# Description
On Nativescript Android w/ angular. Using the drawer with an async APP_INITIALIZER (https://blog.nativescript.org/angular-launch-animations/) causes the app to crash on boot.

# Running the demo
```shell
npm i
ns platform add android
ns prepare android
ns run android

# on IOS
ns platform add ios
ns prepare ios
ns run ios
```

# Expected
Run on iOS, the app should load the main page and allow for gestures to slide the drawer out.

# Actual
On android the error `JS: ERROR Error: a page is needed to attach a gesture`. Occurs and the app's home screen doesn't load.

# Analysis
Cause appears to be an early call to `install` on `@nativescript-community/gesture-handler`.
