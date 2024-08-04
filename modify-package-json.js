const fs = require('fs');
const path = require('path');

// Path to package.json
const packageJsonPath = path.join(__dirname, 'package.json');

// Read package.json
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Check if the contributes section exists, if not, create it
if (!packageJson.contributes) {
    packageJson.contributes = {};
}

// Check if viewsContainers exists, if not, create it
if (!packageJson.contributes.viewsContainers) {
    packageJson.contributes.viewsContainers = {};
}

// Check if activitybar exists in viewsContainers, if not, create it
if (!packageJson.contributes.viewsContainers.activitybar) {
    packageJson.contributes.viewsContainers.activitybar = [];
}

// Check if our custom container already exists
const containerExists = packageJson.contributes.viewsContainers.activitybar.some(
    container => container.id === 'betterOpenEditors'
);

// If the container doesn't exist, add it
if (!containerExists) {
    packageJson.contributes.viewsContainers.activitybar.push({
        id: 'betterOpenEditors',
        title: 'Treeview Open Editors',
        icon: "$(vm-outline)"
    });
}

// Check if views exists, if not, create it
if (!packageJson.contributes.views) {
    packageJson.contributes.views = {};
}

// Check if our custom view already exists
if (!packageJson.contributes.views.betterOpenEditors) {
    packageJson.contributes.views.betterOpenEditors = [
        {
            id: 'betterOpenEditors',
            name: 'Open Editors (Treeview)'
        }
    ];
}

// Remove the view from explorer if it exists
if (packageJson.contributes.views.explorer) {
    packageJson.contributes.views.explorer = packageJson.contributes.views.explorer.filter(
        view => view.id !== 'betterOpenEditors'
    );
    // If explorer is now empty, remove it
    if (packageJson.contributes.views.explorer.length === 0) {
        delete packageJson.contributes.views.explorer;
    }
}

// Write the updated package.json back to file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('package.json has been updated with the new view container.');