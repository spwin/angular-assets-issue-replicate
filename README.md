# AssetsReplicate
This is replicating following issue https://github.com/angular/angular-cli/issues/18787

## The problem
`ng serve` and `ng build` are using different order of assets defined in `angular.json`.

## How to replicate
* run `npm install`
* run `ng serve`
* navigate to http://localhost:4200/
* see sad face
* ![Happy face](/src/assets/face.png)
* run `ng build`
* check compiled image asset in `dist/assets-replicate/assets/face.png`
* see happy face
* ![Happy face](/src/new-assets/face.png)

So it example above it's working fine for build but wrong for serve.
If we switch the order in `angular.json` the faces will be reversed for these commands as well.
```
diff --git a/angular.json b/angular.json
index 3f22e27..8df7e00 100644
--- a/angular.json
+++ b/angular.json
@@ -24,13 +24,13 @@
             "tsConfig": "tsconfig.app.json",
             "aot": true,
             "assets": [
-              "src/favicon.ico",
-              "src/assets",
               {
                 "glob": "**/*",
                 "input": "src/new-assets/",
                 "output": "/assets/"
-              }
+              },
+              "src/favicon.ico",
+              "src/assets"
             ],
             "styles": [
               "src/styles.scss"
```

* run `ng serve`
* navigate to http://localhost:4200/
* see happy face
* ![Happy face](/src/new-assets/face.png)
* run `ng build`
* check compiled image asset in `dist/assets-replicate/assets/face.png`
* see sad face
* ![Happy face](/src/assets/face.png)
