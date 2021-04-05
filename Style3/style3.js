function makeStyle3() {
  let elementsToStyle = document.getElementsByClassName("style-3");
  console.log(elementsToStyle);
  let index = 0;
  for (let textElement of elementsToStyle) {
    let height = textElement.clientHeight * 2;
    let width = textElement.clientWidth + 50;

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "id", "style-3-svg-" + index);
    svg.setAttributeNS(null, "height", "" + height);
    svg.setAttributeNS(null, "width", "" + width);
    svg.setAttributeNS(null, "viewBox", "0 0 " + width + " " + height);
    svg.setAttributeNS(null, "class", textElement.className);

    const pathId = "style-3-svg-" + index + "-path";
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "id", pathId);
    path.setAttributeNS(null, "fill", "none");
    const curve =
      "M30," +
      height +
      " C" +
      (30 + width / 5) +
      "," +
      (height - height / 3) +
      " " +
      (width - 30 - width / 5) +
      "," +
      (height - height / 3) +
      " " +
      (width - 30) +
      "," +
      height;
    path.setAttributeNS(null, "d", curve);

    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttributeNS(null, "width", width);
    text.setAttributeNS(null, "height", height);

    let textPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "textPath"
    );
    textPath.setAttributeNS(null, "alignment-baseline", "top");
    textPath.setAttributeNS(null, "href", "#" + pathId);
    textPath.setAttributeNS(null, "fill", "black");
    //textPath.setAttributeNS(null, "class", "style-3-svg-text");

    textPath.appendChild(document.createTextNode(textElement.textContent));
    text.appendChild(textPath);

    svg.appendChild(path);
    svg.appendChild(text);

    textElement.replaceWith(svg);

    console.log(svg);
    index++;
  }
}

window.onload = makeStyle3;
