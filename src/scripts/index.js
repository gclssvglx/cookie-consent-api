window.onload = function (event) {
  console.log("Site loaded...");

  var acceptAllCookies = JSON.stringify({
    "essential": true,
    "campaigns": false,
    "settings": false,
    "usage": false
  });

  window.Consent.setStatus(
    acceptAllCookies,
    (status) => {
      console.log("Consent status successfully updated to", status)
    }
  );

  window.Consent.onStatusLoaded((status) => {
    console.log("Consent Status:")
    console.log(`- Essential cookies (${status.essential})`)
    console.log(`- Campaign cookies (${status.campaigns})`)
    console.log(`- Settings cookies (${status.settings})`)
    console.log(`- Usage cookies (${status.usage})`)
  });
}
