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
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ══════════════════════════════════════════════════
   2. MOBILE MENU DRAWER
══════════════════════════════════════════════════ */
(function () {
    const toggleBtns = document.querySelectorAll('.js-mobile-menu-toggle');
    const drawer     = document.getElementById('mobile-nav');
    const overlay    = document.getElementById('mobile-overlay');
    if (!drawer) return;

    const open  = () => { drawer.classList.add('is-open'); overlay.classList.add('is-visible'); document.body.style.overflow = 'hidden'; };
    const close = () => { drawer.classList.remove('is-open'); overlay.classList.remove('is-visible'); document.body.style.overflow = ''; };

    toggleBtns.forEach(btn => btn.addEventListener('click', () => drawer.classList.contains('is-open') ? close() : open()));
})();


/* ══════════════════════════════════════════════════
   3. HERO SLIDER
══════════════════════════════════════════════════ */
(function () {
    const slider   = document.getElementById('hero-slider');
    if (!slider) return;

    const track    = document.getElementById('hero-track');
    const dots     = document.querySelectorAll('.hero-slider__dot');
    const prevBtn  = document.getElementById('hero-prev');
    const nextBtn  = document.getElementById('hero-next');
    const autoplay = slider.dataset.autoplay === 'true';
    const total    = dots.length;

    if (total < 2) return; // nothing to slide

    let current = 0;
    let timer;

    const goTo = (index) => {
        current = (index + total) % total;
        track.style.transform = `translateX(${document.documentElement.dir === 'rtl' ? current : -current}${' * '}100%)`;
        // Use inline calc for correct direction
        track.style.transform = `translateX(calc(${document.documentElement.dir === 'rtl' ? '' : '-'}${current * 100}%))`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    };

    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetTimer(); });
    dots.forEach(dot => dot.addEventListener('click', () => { goTo(+dot.dataset.index); resetTimer(); }));

    // Touch/swipe support
    let touchStartX = 0;
    slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
        resetTimer();
    });

    const startTimer = () => { if (autoplay) timer = setInterval(() => goTo(current + 1), 4500); };
    const resetTimer = () => { clearInterval(timer); startTimer(); };
    startTimer();
})();


/* ══════════════════════════════════════════════════
   4. PRODUCT PAGE — GALLERY + TABS
══════════════════════════════════════════════════ */
(function () {
    // Gallery thumbnails
    const thumbs  = document.querySelectorAll('.product-gallery__thumb');
    const mainImg = document.getElementById('gallery-main-img');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            if (mainImg) mainImg.src = thumb.dataset.src;
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Product tabs
    const tabBtns   = document.querySelectorAll('.product-tabs__tab');
    const tabPanels = document.querySelectorAll('.product-tabs__panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
            tabPanels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            const target = document.querySelector(`.product-tabs__panel[data-panel="${btn.dataset.tab}"]`);
            if (target) target.classList.add('active');
        });
    });
})();


/* ══════════════════════════════════════════════════
   5. SHOP PAGE — SIDEBAR, SORT, VIEW TOGGLE, FILTERS
══════════════════════════════════════════════════ */
(function () {
    const sidebar   = document.getElementById('shop-sidebar');
    const openBtns  = document.querySelectorAll('.js-open-filters');
    const closeBtns = document.querySelectorAll('.js-close-filters');

    if (sidebar) {
        openBtns.forEach(btn => btn.addEventListener('click', () => {
            sidebar.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }));
        closeBtns.forEach(btn => btn.addEventListener('click', () => {
            sidebar.classList.remove('is-open');
            document.body.style.overflow = '';
        }));
    }

    // Sort — redirect with sort param
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const url = new URL(window.location.href);
            url.searchParams.set('sort', sortSelect.value);
            window.location.href = url.toString();
        });
    }

    // View toggle (grid / list)
    const grid       = document.getElementById('products-grid');
    const gridBtn    = document.querySelector('.js-view-grid');
    const listBtn    = document.querySelector('.js-view-list');

    const setView = (view) => {
        if (!grid) return;
        grid.dataset.view = view;
        gridBtn?.classList.toggle('active', view === 'grid');
        listBtn?.classList.toggle('active', view === 'list');
        localStorage.setItem('salla_theme_view', view);
    };

    // Restore saved preference
    const savedView = localStorage.getItem('salla_theme_view');
    if (savedView) setView(savedView);

    gridBtn?.addEventListener('click', () => setView('grid'));
    listBtn?.addEventListener('click', () => setView('list'));

    // Filter collapse
    document.querySelectorAll('.js-filter-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const body = btn.nextElementSibling;
            const isOpen = btn.getAttribute('aria-expanded') !== 'false';
            btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
            body.style.display = isOpen ? 'none' : '';
        });
    });

    // Filter checkboxes — auto-submit on change
    document.querySelectorAll('.js-filter-input').forEach(input => {
        input.addEventListener('change', () => {
            const url = new URL(window.location.href);
            // Collect all checked filters
            const allFilters = document.querySelectorAll('.js-filter-input:checked');
            // Clear existing filter params
            [...url.searchParams.keys()].filter(k => k.startsWith('filter')).forEach(k => url.searchParams.delete(k));
            allFilters.forEach(f => url.searchParams.append(f.name, f.value));
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
    window.loadCategoryProducts = async function (categoryId, containerId, limit = 8) {
        const container = document.getElementById(containerId);
        if (!container) return;

        try {
            // Salla SDK products endpoint
            const response = await salla.api.product.list({
                category_id: categoryId,
                per_page:    limit,
                page:        1,
            });

            const products = response?.data?.data || [];

            if (!products.length) {
                container.innerHTML = '<p class="products-empty__msg">No products found.</p>';
                return;
            }

            container.innerHTML = products.map(p => buildProductCardHTML(p)).join('');

        } catch (err) {
            console.error('Salla: failed to load products for category', categoryId, err);
        }
    };

    /**
     * Build product card HTML client-side (mirrors product-card.twig)
     */
    function buildProductCardHTML(p) {
        const price     = p.price ? salla.money(p.price) : '';
        const salePrice = p.sale_price ? salla.money(p.sale_price) : '';

        return `
        <article class="product-card" data-product-id="${p.id}">
            <div class="product-card__image-wrap">
                <a href="${p.url}" class="product-card__image-link">
                    <img src="${p.thumbnail || p.image?.url || ''}" alt="${p.name}" class="product-card__img product-card__img--primary" loading="lazy">
                </a>
                <div class="product-card__badges">
                    ${!p.is_available ? '<span class="badge badge--out">نفذت الكمية</span>' : ''}
                    ${p.discount_percentage > 0 ? `<span class="badge badge--sale">-${p.discount_percentage}%</span>` : ''}
                </div>
                <div class="product-card__actions">
                    <salla-button-wishlist product-id="${p.id}" class="product-card__action-btn"></salla-button-wishlist>
                </div>
            </div>
            <div class="product-card__body">
                <h3 class="product-card__name"><a href="${p.url}">${p.name}</a></h3>
                <div class="product-card__price">
                    ${salePrice ? `<span class="price price--sale">${salePrice}</span><span class="price price--old">${price}</span>` : `<span class="price">${price}</span>`}
                </div>
                <div class="product-card__footer">
                    ${p.is_available
                        ? `<salla-add-product-button product-id="${p.id}" class="product-card__add-btn btn btn--primary">أضف للسلة</salla-add-product-button>`
                        : `<button class="btn btn--disabled" disabled>نفذت الكمية</button>`
                    }
                </div>
            </div>
        </article>`;
    }

    // Auto-load any containers with [data-category-id] attribute
    // (used in the featured-categories component as a fallback)
    document.querySelectorAll('.products-loading[data-category-id]').forEach(el => {
        window.loadCategoryProducts(el.dataset.categoryId, el.id || (() => {
            const id = 'cat-load-' + el.dataset.categoryId;
            el.id = id;
            return id;
        })(), 4);
    });
})();


/* ══════════════════════════════════════════════════
   7. SALLA SDK — LISTEN TO STORE EVENTS
   The salla object is ready after DOMContentLoaded
   because Twilight injects it via body:end hook.
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof salla === 'undefined') return;

    // Cart updated — show mini toast
    salla.event.on('cart::updated', (data) => {
        console.log('Cart updated:', data);
        // salla.cart.show(); // optionally auto-open cart
    });

    // After add to cart
    salla.event.on('cart::item.added', () => {
        salla.cart.show();
    });

    // Wishlist changed
    salla.event.on('wishlist::item.added', () => {
        console.log('Added to wishlist');
    });

    // Product quick view
    document.addEventListener('product::quick-view', async (e) => {
        const productId = e.detail?.id;
        if (productId) {
            try {
                await salla.product.quickView(productId);
            } catch (err) {
                // Fallback: navigate to product page
                const response = await salla.api.product.fetch(productId);
                if (response?.data?.url) window.location.href = response.data.url;
            }
        }
    });
});
