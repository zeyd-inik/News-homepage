import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

function toPascalCase(name: string): string {
  return name
    .replace(/[-_ ]+/g, ' ')
    .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1))
    .replace(/\s/g, '');
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'extension.createCSS',
    (fileUri: vscode.Uri) => {
      if (!fileUri) {
        vscode.window.showErrorMessage('No file selected');
        return;
      }

      const componentPath = fileUri.fsPath;
      const rawName = path.basename(componentPath, '.jsx');
      const componentName = toPascalCase(rawName);

      const cssFilePath = path.join(
        path.dirname(componentPath),
        `${componentName}.css`
      );

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
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
