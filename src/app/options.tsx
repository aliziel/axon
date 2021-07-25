import monaco from 'monaco-editor'

const options: monaco.editor.IEditorOptions = {
  selectOnLineNumbers: true,
  autoIndent: 'advanced',
  colorDecorators: true,
  wrappingIndent: 'indent',
  wordWrap: 'off',
  automaticLayout: true,
  minimap: {
    enabled: false,
  },

  fontFamily: 'Arial',
};

export default options;
