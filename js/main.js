$(function() {
  // $('.collapse').collapse('hide');
  $(".list-group-item.active")
    .parent()
    .parent(".collapse")
    .collapse("show");

  var pages = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
    // datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,

    prefetch: baseurl + "/search.json"
  });

  $("#search-box").typeahead(
    {
      minLength: 0,
      highlight: true
    },
    {
      name: "pages",
      display: "title",
      source: pages
    }
  );

  $("#search-box").bind("typeahead:select", function(ev, suggestion) {
    window.location.href = suggestion.url;
  });

  // Markdown plain out to bootstrap style
  $("#markdown-content-container table").addClass("table");
  $("#markdown-content-container img").addClass("img-responsive");

  //Begin no idea what I am doing
  var allCodeBlocksElements = $("code");

  allCodeBlocksElements.each(function(i) {
    var currentId = "codeblock" + (i + 1);
    $(this).attr("id", currentId);

    var clipButton =
      '<button class="btn" data-clipboard-target="#' +
      currentId +
      '"><img src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"></button>';
    $(this).after(clipButton);
  });

  new Clipboard(".btn");
  //End no idea what I am doing
});
