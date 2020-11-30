import L from "https://code4sabae.github.io/leaflet-mjs/leaflet.mjs";
import { CSV } from "https://code4sabae.github.io/js/CSV.js";
import { rnd } from "https://code4sabae.github.io/js/rnd.js";

class MapGSICSV extends HTMLElement {
  constructor () {
    super();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://code4sabae.github.io/leaflet-mjs/leaflet.css";
    this.appendChild(link);
    link.onload = () => this.init();
  }
  async init () {
    const div = document.createElement("div");
    this.appendChild(div);
    div.style.width = this.getAttribute("width") || "100%";
    div.style.height = this.getAttribute("height") || "60vh";

    const map = L.map(div);
    // set 国土地理院地図 https://maps.gsi.go.jp/development/ichiran.html
    L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
      attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>"',
      maxZoom: 18,
    }).addTo(map);

    const iconlayer = L.layerGroup();
    iconlayer.addTo(map);

    const posfn = this.getAttribute("pos-src");
    const posname = this.getAttribute("pos-name");
    const pos = CSV.toJSON(await CSV.fetch(posfn));
    console.log(pos);

    const titlename = this.getAttribute("title-name");
    const csvfn = this.getAttribute("src");
    const data = CSV.toJSON(await CSV.fetch(csvfn));
    console.log(data);
    
    const joinData = (data) => {
      const res = [];
      const p = {};
      for (const d of data) {
        const dpos = d[posname];
        const d2 = p[dpos];
        if (d2) {
          d2[titlename] += "<br>" + d[titlename];
        } else {
          p[dpos] = d;
          res.push(d);
        }
      }
      return res;
    };

    const lls = [];
    for (const d of joinData(data)) {
      const dpos = d[posname];
      console.log(dpos);
      const dp = pos.filter((d) => d["schema:name"] === dpos)[0];
      const ll = [dp["schema:latitude"], dp["schema:longitude"]];
      const title = d[titlename];
      const opt = { title };
      const iconsrc = `img/pin${rnd(5) + 1}_by_asuka.png`;
      if (iconsrc) {
        const w = 48;
        opt.icon = L.icon({
          iconUrl: iconsrc, iconSize: [ w, w ], iconAnchor: [ w / 2, w / 2 ]
        });
        // console.log(opt.icon);
      }
      const marker = L.marker(ll, opt);
      marker.bindPopup(title);
      iconlayer.addLayer(marker);
      lls.push(ll);
    }
    if (lls.length) {
      map.fitBounds(lls);
    }
  }
}

customElements.define('map-gsi-csv', MapGSICSV);
