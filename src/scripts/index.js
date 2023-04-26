window.onload = function (event) {
  console.log("Site loaded...");

  window.Consent.setStatus({
    "essential": true,
    "campaigns": false,
    "settings": false,
    "usage": false
  });

  window.Consent.onStatusLoaded((status) => {
    console.log("Consent Status:")
    console.log(`- Essential cookies (${status.essential})`)
    console.log(`- Campaign cookies (${status.campaigns})`)
    console.log(`- Settings cookies (${status.settings})`)
    console.log(`- Usage cookies (${status.usage})`)
  });
}
