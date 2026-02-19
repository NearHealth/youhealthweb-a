<header class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-y-3 gl-my-5">
<div class="gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-3 gl-w-full @md/panel:gl-flex-nowrap">
<h1 class="gl-heading-1 !gl-m-0" data-testid="page-heading">
Redirecting
</h1>
</div>
</header>

<div>
<a href="https://projects.gitlab.io/auth?code=01d5ae28701d301cd8a2fb05c794058b853b4ad54c7908dc6aab209a294e872b&amp;state=nyiwcGrsWOzpkYt9M1U4Qg%3D%3D">Click here to redirect to https://projects.gitlab.io/auth?code=01d5ae28701d301cd8a2fb05c794058b853b4ad54c7908dc6aab209a294e872b&amp;state=nyiwcGrsWOzpkYt9M1U4Qg%3D%3D</a>
</div>
<script nonce="uydfJacU7WK5U7fllWSCqQ==">
//<![CDATA[
(function() {
  // Only permit a basic set of characters in the fragment.
  const allowedRegex = /^#[\w-]+$/g;

  const hash = window.location.hash;
  let redirectUri = "https://projects.gitlab.io/auth?code=01d5ae28701d301cd8a2fb05c794058b853b4ad54c7908dc6aab209a294e872b&state=nyiwcGrsWOzpkYt9M1U4Qg%3D%3D";

  if (window.location.hash && window.location.hash.search(allowedRegex) === 0 && redirectUri.indexOf('#') === -1) {
    redirectUri = redirectUri + hash;
  }

  window.location = redirectUri;
})();


//]]>
</script>