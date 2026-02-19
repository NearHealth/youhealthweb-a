<header class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-y-3 gl-my-5">
<div class="gl-flex gl-flex-wrap gl-justify-between gl-gap-x-5 gl-gap-y-3 gl-w-full @md/panel:gl-flex-nowrap">
<h1 class="gl-heading-1 !gl-m-0" data-testid="page-heading">
Redirecting
</h1>
</div>
</header>

<div>
<a href="https://projects.gitlab.io/auth?code=b8ad4effa4cc2a56a56cf01642fe4a8aa2bfd852a1f3e929ee3b81994a332b73&amp;state=88Ib-cz_KjCrLwU4fDyUBg%3D%3D">Click here to redirect to https://projects.gitlab.io/auth?code=b8ad4effa4cc2a56a56cf01642fe4a8aa2bfd852a1f3e929ee3b81994a332b73&amp;state=88Ib-cz_KjCrLwU4fDyUBg%3D%3D</a>
</div>
<script nonce="PbKLdBWMMdNWJXrzgqJ8Mg==">
//<![CDATA[
(function() {
  // Only permit a basic set of characters in the fragment.
  const allowedRegex = /^#[\w-]+$/g;

  const hash = window.location.hash;
  let redirectUri = "https://projects.gitlab.io/auth?code=b8ad4effa4cc2a56a56cf01642fe4a8aa2bfd852a1f3e929ee3b81994a332b73&state=88Ib-cz_KjCrLwU4fDyUBg%3D%3D";

  if (window.location.hash && window.location.hash.search(allowedRegex) === 0 && redirectUri.indexOf('#') === -1) {
    redirectUri = redirectUri + hash;
  }

  window.location = redirectUri;
})();


//]]>
</script>