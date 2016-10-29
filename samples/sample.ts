import * as vscode from 'vscode';
import {CanIUse} from './can-i-use';

export function activate(context: vscode.ExtensionContext) {
    var disposable = vscode.commands.registerCommand('extension.canIUse', () => {
        let caniuse = new CanIUse();

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        var expandedSelection = undefined;
        expandedSelection = getSelection(editor);
        if (expandedSelection) {
            var word = editor.document.getText(expandedSelection);
            if (word) {
                caniuse.retrieveInformation(caniuse.getNormalizedRule(word).toLowerCase(), showOutput);
            }
        }
    });

    context.subscriptions.push(disposable);
}