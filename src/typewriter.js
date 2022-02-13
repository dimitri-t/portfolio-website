const terminalContent = `<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span> cd DimitriT/secret_file <br/><br/>
<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span> cat info.txt<br/><br/>

<span><span id="d">education</span> - computer science unsw</span>
<br></br>
<span><span id="d">work experience</span> - deloitte (software engineer vacationer), optus (software engineer intern)</span>
<br></br>
<span><span id="d">tech stack</span> - javascript, typescript, react, nextjs, css, api, aws</span>
<br></br>
<span>learn more about me on my linkedin or visit my github to see what i am working on</span>
<br></br>
<span>Cheers!</span>
<br></br>
<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span> exit <br></br>
<span id="a">unknown@visitor</span>:<span id="b">~</span><span id="c">$</span>`;

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
