function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function() {
  var name = getParameterByName("name");
  var price = getParameterByName("price");
  document.getElementById("merchandise-content").innerHTML =
  `
    <div>
      <div class="merchandise-focused">
        <div class="merchandise-info">
          <div class="merchanise-name">
            ${name}
          </div>
          <div class="merchanise-price">
            $${price}
          </div>
        </div>
      </div>
      <div class="merchandise-focused blue">
        <div class="merchandise-info">
          <div class="merchanise-name">
            ${name}
          </div>
          <div class="merchanise-price">
            $${price}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="merchandise-focused blue">
        <div class="merchandise-info">
          <div class="merchanise-name">
            ${name}
          </div>
          <div class="merchanise-price">
            $${price}
          </div>
        </div>
      </div>
      <div class="merchandise-focused">
        <div class="merchandise-info">
          <div class="merchanise-name">
            ${name}
          </div>
          <div class="merchanise-price">
            $${price}
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById("merchandise-media").innerHTML =
  `
  <div class="merchandise-images">
    <img src="./img/${name}.jpg" height="100%" width="100%"/>
  </div>
  `
}
