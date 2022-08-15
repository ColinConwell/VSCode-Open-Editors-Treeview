# Better Open Editors

This is a replacement for the Open Editors panel, which becomes very cluttered with many open files. Especially in projects with package folders (e.g. in monorepos) you often have many files with the same name open and have difficulties to distinguish them.

Therefore this extension helps by grouping the open files in package folders.

![This is why it is better](./meta/screenshot.fw.png)

## Features

  * Platform independent.
  * Automatically detects packages with a package.json.
  * Specification of RegExp patterns to build custom package folders.
  * Supports multiple workspace folders.


## Extension Settings

* `betterOpenEditors.InsertSpacesAroundSlashes`  
   Insert spaces around path slashes to improve the readability.
* `betterOpenEditors.ShowWorkspaceIcon`  
   Shows a Workspace Icon in front of workspace folders.
* `betterOpenEditors.ShowPackageIcon`  
   Shows a Workspace Icon in front of workspace folders.
* `betterOpenEditors.ShowWorkspaceIcon`  
   Shows a Package Icon in front of packages.
* `betterOpenEditors.PackagePatterns`  
   One glob expression per line which creates a package folder if a parent path of a file matches it, e.g. `**/components/*`. Useful in workspace dependent settings.

## Known Issues

* Meta tabs like the "Settings" tab are currently not visible as the API does not offer a possibility to the internal URI of those tabs.
