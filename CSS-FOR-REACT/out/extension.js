"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
function toPascalCase(name) {
    return name
        .replace(/[-_ ]+/g, ' ')
        .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1))
        .replace(/\s/g, '');
}
function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.createCSS', (fileUri) => {
        if (!fileUri) {
            vscode.window.showErrorMessage('No file selected');
            return;
        }
        const componentPath = fileUri.fsPath;
        const rawName = path.basename(componentPath, '.jsx');
        const componentName = toPascalCase(rawName);
        const cssFilePath = path.join(path.dirname(componentPath), `${componentName}.css`);
        if (fs.existsSync(cssFilePath)) {
            vscode.window.showWarningMessage(`${componentName}.css already exists`);
            return;
        }
        const cssContent = `/* ${componentName} styles */

.${componentName} {
    /* Add your styles here */
}
`;
        fs.writeFileSync(cssFilePath, cssContent);
        vscode.window.showInformationMessage(`${componentName}.css created`);
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map