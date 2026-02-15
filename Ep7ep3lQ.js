(function () {
  const _0x_u =
    "https://chienan0617.github.io/layout/dev.cas.brand/product_list.json";

  async function _0x_init() {
    const _0x_c = document.getElementById("_0x6f1a");
    try {
      const _0x_r = await fetch(_0x_u);
      if (!_0x_r.ok) throw new Error();
      const _0x_d = await _0x_r.json();

      _0x_c.innerHTML = "";

      _0x_d.forEach((_0x_i) => {
        const _0x_isL = _0x_i.url !== null;
        const _0x_el = document.createElement(_0x_isL ? "a" : "div");

        if (_0x_isL) {
          _0x_el.href = _0x_i.url;
          _0x_el.target = "_blank";
        } else {
          _0x_el.classList.add("_0x_nlk");
        }
        _0x_el.className += " _0x_crd";

        const _0x_tH = _0x_i.tag
          ? `<span class="_0x_bdg" style="background-color: ${_0x_i.tagColor || "#6366f1"}">${_0x_i.tag}</span>`
          : "";

        const _0x_aH = _0x_isL
          ? `<div class="_0x_icn"><i class="fas fa-arrow-right"></i></div>`
          : "";

        _0x_el.innerHTML = `
          <div class="_0x_lbx">
            <img src="${_0x_i.logo}" alt="${_0x_i.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(_0x_i.name)}&background=random'">
          </div>
          <div class="_0x_ctx">
            <div style="display:flex; align-items:center;">
              <h3>${_0x_i.name}</h3>
              ${_0x_tH}
            </div>
            <p>${_0x_i.desc}</p>
          </div>
          ${_0x_aH}
        `;
        _0x_c.appendChild(_0x_el);
      });
    } catch (_0x_e) {
      _0x_c.innerHTML = `<div class="_0x3d2c">⚠️ 資料載入失敗</div>`;
    }
  }

  _0x_init();
})();
