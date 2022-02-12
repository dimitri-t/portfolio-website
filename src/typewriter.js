const terminalContent = `<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span> cd DimitriT/secret_file <br/><br/>
<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span> cat secret_file.txt<br/><br/>
My favorite code quote, "<span>Build fast, Code big</span>".

If you would like to get in touch with me, feel free to send me an email at <a href="mailto: dimitri.tsardakas@gmail.com">dimitri.tsardakas@gmail.com</a>.

<p>Cheers!</p>
<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span> exit `;

// Typewriter starts after 3000ms
setTimeout(function () {
  // Get the terminalText element
  const element = document.getElementById('terminalText');
  const terminalTypeText = terminalContent;

  // type code
  let i = 0,
    isTag,
    text;
  (function type() {
    text = terminalTypeText.slice(0, ++i);
    if (text === terminalTypeText) return;
    element.innerHTML = text;
    let char = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;
    if (isTag) return type();
    setTimeout(type, 10);
  })();
}, 3000);
