const editor = document.querySelector("#editor");
const preview = document.querySelector("#preview");

marked.setOptions({
  breaks: true,
});

function getEditorInput() {
  preview.innerHTML = marked.parse(editor.value);
}

editor.addEventListener("keyup", getEditorInput);

const markdownText = `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**!
Or _italic_.
Or **_both!_**
And feel free to ~~cross stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want, even tables:

 Header 1 | Header 2 | Header 3 
------------ | ------------- | -------------
Content 1 | Content 2 | Content 3
And here | Okay | I think we get it

- Of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
editor.textContent = markdownText;
