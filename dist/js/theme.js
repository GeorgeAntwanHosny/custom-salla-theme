/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*************************************!*\
  !*** ./src/assets/scripts/theme.js ***!
  \*************************************/
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * MyCustomTheme — src/assets/scripts/theme.js
 *
 * Covers:
 *  - Sticky header
 *  - Hero slider
 *  - Mobile drawer
 *  - Shop sidebar on mobile
 *  - Product page gallery + tabs
 *  - Filter collapse / sort redirect
 *  - Dynamic category products via Salla JS SDK
 *  - View toggle (grid / list)
 */

/* ══════════════════════════════════════════════════
   1. STICKY HEADER SHADOW
══════════════════════════════════════════════════ */
(function () {
  var header = document.getElementById('site-header');
  if (!header) return;
  var onScroll = function onScroll() {
    return header.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
})();

/* ══════════════════════════════════════════════════
   2. MOBILE MENU DRAWER
══════════════════════════════════════════════════ */
(function () {
  var toggleBtns = document.querySelectorAll('.js-mobile-menu-toggle');
  var drawer = document.getElementById('mobile-nav');
  var overlay = document.getElementById('mobile-overlay');
  if (!drawer) return;
  var open = function open() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  };
  var close = function close() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  };
  toggleBtns.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      return drawer.classList.contains('is-open') ? close() : open();
    });
  });
})();

/* ══════════════════════════════════════════════════
   3. HERO SLIDER
══════════════════════════════════════════════════ */
(function () {
  var slider = document.getElementById('hero-slider');
  if (!slider) return;
  var track = document.getElementById('hero-track');
  var dots = document.querySelectorAll('.hero-slider__dot');
  var prevBtn = document.getElementById('hero-prev');
  var nextBtn = document.getElementById('hero-next');
  var autoplay = slider.dataset.autoplay === 'true';
  var total = dots.length;
  if (total < 2) return; // nothing to slide

  var current = 0;
  var timer;
  var goTo = function goTo(index) {
    current = (index + total) % total;
    track.style.transform = "translateX(".concat(document.documentElement.dir === 'rtl' ? current : -current, ' * ', "100%)");
    // Use inline calc for correct direction
    track.style.transform = "translateX(calc(".concat(document.documentElement.dir === 'rtl' ? '' : '-').concat(current * 100, "%))");
    dots.forEach(function (d, i) {
      return d.classList.toggle('active', i === current);
    });
  };
  if (prevBtn) prevBtn.addEventListener('click', function () {
    goTo(current - 1);
    resetTimer();
  });
  if (nextBtn) nextBtn.addEventListener('click', function () {
    goTo(current + 1);
    resetTimer();
  });
  dots.forEach(function (dot) {
    return dot.addEventListener('click', function () {
      goTo(+dot.dataset.index);
      resetTimer();
    });
  });

  // Touch/swipe support
  var touchStartX = 0;
  slider.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, {
    passive: true
  });
  slider.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    resetTimer();
  });
  var startTimer = function startTimer() {
    if (autoplay) timer = setInterval(function () {
      return goTo(current + 1);
    }, 4500);
  };
  var resetTimer = function resetTimer() {
    clearInterval(timer);
    startTimer();
  };
  startTimer();
})();

/* ══════════════════════════════════════════════════
   4. PRODUCT PAGE — GALLERY + TABS
══════════════════════════════════════════════════ */
(function () {
  // Gallery thumbnails
  var thumbs = document.querySelectorAll('.product-gallery__thumb');
  var mainImg = document.getElementById('gallery-main-img');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (mainImg) mainImg.src = thumb.dataset.src;
      thumbs.forEach(function (t) {
        return t.classList.remove('active');
      });
      thumb.classList.add('active');
    });
  });

  // Product tabs
  var tabBtns = document.querySelectorAll('.product-tabs__tab');
  var tabPanels = document.querySelectorAll('.product-tabs__panel');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(function (p) {
        return p.classList.remove('active');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var target = document.querySelector(".product-tabs__panel[data-panel=\"".concat(btn.dataset.tab, "\"]"));
      if (target) target.classList.add('active');
    });
  });
})();

/* ══════════════════════════════════════════════════
   5. SHOP PAGE — SIDEBAR, SORT, VIEW TOGGLE, FILTERS
══════════════════════════════════════════════════ */
(function () {
  var sidebar = document.getElementById('shop-sidebar');
  var openBtns = document.querySelectorAll('.js-open-filters');
  var closeBtns = document.querySelectorAll('.js-close-filters');
  if (sidebar) {
    openBtns.forEach(function (btn) {
      return btn.addEventListener('click', function () {
        sidebar.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });
    closeBtns.forEach(function (btn) {
      return btn.addEventListener('click', function () {
        sidebar.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Sort — redirect with sort param
  var sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      var url = new URL(window.location.href);
      url.searchParams.set('sort', sortSelect.value);
      window.location.href = url.toString();
    });
  }

  // View toggle (grid / list)
  var grid = document.getElementById('products-grid');
  var gridBtn = document.querySelector('.js-view-grid');
  var listBtn = document.querySelector('.js-view-list');
  var setView = function setView(view) {
    if (!grid) return;
    grid.dataset.view = view;
    gridBtn === null || gridBtn === void 0 || gridBtn.classList.toggle('active', view === 'grid');
    listBtn === null || listBtn === void 0 || listBtn.classList.toggle('active', view === 'list');
    localStorage.setItem('salla_theme_view', view);
  };

  // Restore saved preference
  var savedView = localStorage.getItem('salla_theme_view');
  if (savedView) setView(savedView);
  gridBtn === null || gridBtn === void 0 || gridBtn.addEventListener('click', function () {
    return setView('grid');
  });
  listBtn === null || listBtn === void 0 || listBtn.addEventListener('click', function () {
    return setView('list');
  });

  // Filter collapse
  document.querySelectorAll('.js-filter-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var body = btn.nextElementSibling;
      var isOpen = btn.getAttribute('aria-expanded') !== 'false';
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      body.style.display = isOpen ? 'none' : '';
    });
  });

  // Filter checkboxes — auto-submit on change
  document.querySelectorAll('.js-filter-input').forEach(function (input) {
    input.addEventListener('change', function () {
      var url = new URL(window.location.href);
      // Collect all checked filters
      var allFilters = document.querySelectorAll('.js-filter-input:checked');
      // Clear existing filter params
      _toConsumableArray(url.searchParams.keys()).filter(function (k) {
        return k.startsWith('filter');
      }).forEach(function (k) {
        return url.searchParams["delete"](k);
      });
      allFilters.forEach(function (f) {
        return url.searchParams.append(f.name, f.value);
      });
      window.location.href = url.toString();
    });
  });
})();

/* ══════════════════════════════════════════════════
   6. SALLA JS SDK — LOAD CATEGORY PRODUCTS DYNAMICALLY
   Use this when Twig products() filter is not available
   on a particular page (e.g. custom landing pages).
══════════════════════════════════════════════════ */
(function () {
  /**
   * loadCategoryProducts(categoryId, containerId, limit = 8)
   * Fetches products for a category from Salla REST API and renders cards.
   * The `salla` global is injected by Twilight via {% hook 'body:end' %}.
   */
  window.loadCategoryProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(categoryId, containerId) {
      var limit,
        container,
        _response$data,
        response,
        products,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            limit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 8;
            container = document.getElementById(containerId);
            if (container) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return salla.api.product.list({
              category_id: categoryId,
              per_page: limit,
              page: 1
            });
          case 2:
            response = _context.v;
            products = (response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || [];
            if (products.length) {
              _context.n = 3;
              break;
            }
            container.innerHTML = '<p class="products-empty__msg">No products found.</p>';
            return _context.a(2);
          case 3:
            container.innerHTML = products.map(function (p) {
              return buildProductCardHTML(p);
            }).join('');
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('Salla: failed to load products for category', categoryId, _t);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Build product card HTML client-side (mirrors product-card.twig)
   */
  function buildProductCardHTML(p) {
    var _p$image;
    var price = p.price ? salla.money(p.price) : '';
    var salePrice = p.sale_price ? salla.money(p.sale_price) : '';
    return "\n        <article class=\"product-card\" data-product-id=\"".concat(p.id, "\">\n            <div class=\"product-card__image-wrap\">\n                <a href=\"").concat(p.url, "\" class=\"product-card__image-link\">\n                    <img src=\"").concat(p.thumbnail || ((_p$image = p.image) === null || _p$image === void 0 ? void 0 : _p$image.url) || '', "\" alt=\"").concat(p.name, "\" class=\"product-card__img product-card__img--primary\" loading=\"lazy\">\n                </a>\n                <div class=\"product-card__badges\">\n                    ").concat(!p.is_available ? '<span class="badge badge--out">نفذت الكمية</span>' : '', "\n                    ").concat(p.discount_percentage > 0 ? "<span class=\"badge badge--sale\">-".concat(p.discount_percentage, "%</span>") : '', "\n                </div>\n                <div class=\"product-card__actions\">\n                    <salla-button-wishlist product-id=\"").concat(p.id, "\" class=\"product-card__action-btn\"></salla-button-wishlist>\n                </div>\n            </div>\n            <div class=\"product-card__body\">\n                <h3 class=\"product-card__name\"><a href=\"").concat(p.url, "\">").concat(p.name, "</a></h3>\n                <div class=\"product-card__price\">\n                    ").concat(salePrice ? "<span class=\"price price--sale\">".concat(salePrice, "</span><span class=\"price price--old\">").concat(price, "</span>") : "<span class=\"price\">".concat(price, "</span>"), "\n                </div>\n                <div class=\"product-card__footer\">\n                    ").concat(p.is_available ? "<salla-add-product-button product-id=\"".concat(p.id, "\" class=\"product-card__add-btn btn btn--primary\">\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629</salla-add-product-button>") : "<button class=\"btn btn--disabled\" disabled>\u0646\u0641\u0630\u062A \u0627\u0644\u0643\u0645\u064A\u0629</button>", "\n                </div>\n            </div>\n        </article>");
  }

  // Auto-load any containers with [data-category-id] attribute
  // (used in the featured-categories component as a fallback)
  document.querySelectorAll('.products-loading[data-category-id]').forEach(function (el) {
    window.loadCategoryProducts(el.dataset.categoryId, el.id || function () {
      var id = 'cat-load-' + el.dataset.categoryId;
      el.id = id;
      return id;
    }(), 4);
  });
})();

/* ══════════════════════════════════════════════════
   7. SALLA SDK — LISTEN TO STORE EVENTS
   The salla object is ready after DOMContentLoaded
   because Twilight injects it via body:end hook.
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof salla === 'undefined') return;

  // Cart updated — show mini toast
  salla.event.on('cart::updated', function (data) {
    console.log('Cart updated:', data);
    // salla.cart.show(); // optionally auto-open cart
  });

  // After add to cart
  salla.event.on('cart::item.added', function () {
    salla.cart.show();
  });

  // Wishlist changed
  salla.event.on('wishlist::item.added', function () {
    console.log('Added to wishlist');
  });

  // Product quick view
  document.addEventListener('product::quick-view', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var _e$detail;
      var productId, _response$data2, response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            productId = (_e$detail = e.detail) === null || _e$detail === void 0 ? void 0 : _e$detail.id;
            if (!productId) {
              _context2.n = 5;
              break;
            }
            _context2.p = 1;
            _context2.n = 2;
            return salla.product.quickView(productId);
          case 2:
            _context2.n = 5;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            _context2.n = 4;
            return salla.api.product.fetch(productId);
          case 4:
            response = _context2.v;
            if (response !== null && response !== void 0 && (_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.url) window.location.href = response.data.url;
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
});
})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./src/assets/styles/theme.css ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=theme.js.map