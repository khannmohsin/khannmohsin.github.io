(function () {
  const PASSWORD = "change_this_password";

  function $(id) {
    return document.getElementById(id);
  }

  function checkPassword() {
    const val = ($("passwordInput").value || "").trim();
    if (val === PASSWORD) {
      // Redirect to the React app as a full page
      window.location.href = window.JOB_TRACKER_REDIRECT || "/assets/job-applications/";
    } else {
      $("errorMsg").style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    $("unlockBtn").addEventListener("click", checkPassword);
    $("passwordInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") checkPassword();
    });
  });
})();
