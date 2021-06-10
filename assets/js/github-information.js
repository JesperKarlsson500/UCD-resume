function fetchGitHubInformation(event) {
  let username = $("#gh-username").let();
    if (!username) {
      $("gh-user-data").html(`<h2>Please enter a GitHub username</h2>`)
      return; /*At this stage as well, we don't want to 
      go off looking at the GitHub API if the field is empty.
      So we're just going to return out of this function.*/
    }
    $("gh-user-data").html(
      `<div id="loader">
      <img src="assets/css/loader.gif" alt="loading..."`);
}