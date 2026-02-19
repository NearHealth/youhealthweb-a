<header class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-y-3 gl-my-5">
<div class="gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-3 gl-w-full @md/panel:gl-flex-nowrap">
<h1 class="gl-heading-1 !gl-m-0" data-testid="page-heading">
Redirecting
</h1>
</div>
</header>

<div>
<a href="https://projects.gitlab.io/auth?code=098432a088a5a309f6ee1018d648869884e49e8728a3bd394606a1b90faa3e13&amp;state=ZLYXmCeIp7CSeru-OADCAg%3D%3D">Click here to redirect to https://projects.gitlab.io/auth?code=098432a088a5a309f6ee1018d648869884e49e8728a3bd394606a1b90faa3e13&amp;state=ZLYXmCeIp7CSeru-OADCAg%3D%3D</a>
</div>
<script nonce="ChsL0hMtCaaxCLR7qyMi+g==">
//<![CDATA[
(function() {
  // Only permit a basic set of characters in the fragment.
  const allowedRegex = /^#[\w-]+$/g;

  const hash = window.location.hash;
  let redirectUri = "https://projects.gitlab.io/auth?code=098432a088a5a309f6ee1018d648869884e49e8728a3bd394606a1b90faa3e13&state=ZLYXmCeIp7CSeru-OADCAg%3D%3D";

  if (window.location.hash && window.location.hash.search(allowedRegex) === 0 && redirectUri.indexOf('#') === -1) {
    redirectUri = redirectUri + hash;
  }

  window.location = redirectUri;
})();


//]]>
</script>