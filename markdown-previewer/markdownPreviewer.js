marked.setOptions({
  breaks: true
});

$(document).ready(function () {
  /* if there is editorText in sessionStorage, load that into
   * the editor, otherwise load the default text into the editor */
  if (sessionStorage.hasOwnProperty("editorText")) {
    $("#editor").val(sessionStorage.editorText);
  } else {
    $("#editor").val(defaultText);
  }

  // render the editor contents to the preview element
  $("#preview").html(getMarkUp($("#editor").val()));

  /* on every input event in the editor, store the editor
   * contents in sessionStorage and also render the contents
   * of the editor to the preview element */
  $("#editor").on("input", function () {
    sessionStorage.setItem("editorText", $(this).val());
    $("#preview").html(getMarkUp($(this).val()));
    scrollSync();
  });

  // handle eraseButton
  $("#eraseButton").click(function () {
    $("#editor").val("");
    sessionStorage.setItem("editorText", $("#editor").val());
    $("#preview").html(getMarkUp($("#editor").val()));
  });

  // handle reloadButton
  $("#reloadButton").click(function () {
    $("#editor").val(defaultText);
    sessionStorage.setItem("editorText", defaultText);
    $("#preview").html(getMarkUp(defaultText));
  });

  $("#editor").on("scroll", scrollSync);
});

const scrollSync = () => {
  const editorScrollable = document.getElementById("editor").scrollHeight - $("#editor").height();
  const previewScrollable = document.getElementById("preview").scrollHeight - $("#preview").height();
  let editorScrollRatio = $("#editor").scrollTop() === 0 ? 0 : $("#editor").scrollTop() / editorScrollable;
  if (editorScrollRatio > 0.90) { editorScrollRatio = 1.5; }
  const previewScrollPosition = previewScrollable * editorScrollRatio;
  $("#preview").scrollTop(previewScrollPosition);
};

const getMarkUp = (text) => {
  return marked(text);
}
