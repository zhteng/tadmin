// Plugins for Alaska
// ------------------

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/docs/3.3/customize/?id=e689653e4bc43eef065432924b0685d7)
 * Config saved to config.json and https://gist.github.com/e689653e4bc43eef065432924b0685d7
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', o = function (e) {
        t(e).on("click", i, this.close)
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var n = t(this), s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.button"), s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }

    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", o = this.$element, n = o.is("input") ? "val" : "html", s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e), o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1, s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"), s = o || this.getItemForDirection(e, n), a = this.interval,
            r = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this), s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()), r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this), n = e(o), s = {relatedTarget: this};
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }

    var n = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.7", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n), a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {relatedTarget: this};
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o), a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a", l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.modal"), a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this, n = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this), n = o.attr("href"), s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tooltip"), s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this, s = this.tip(), a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(), p = s[0].offsetWidth, c = s[0].offsetHeight;
            if (h) {
                var f = r, u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var v = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(), n = o[0].offsetWidth, s = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth, h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i), c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }

        var n = this, s = t(this.$tip), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], o = "BODY" == i.tagName, n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {width: n.right - n.left, height: n.bottom - n.top}));
        var s = window.SVGElement && i instanceof window.SVGElement, a = o ? {top: 0, left: 0} : s ? null : e.offset(),
            r = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = o ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, n, r, l, a)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {top: 0, left: 0};
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll, l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s, d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.popover"), s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                a = t.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }

        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.affix"), s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(), s = this.$element.offset(), a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed, l = r ? n : s.top, h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), o = this.options.offset, n = o.top, s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({top: a - e - s})
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0}, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0,
                            this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n), a = s.data("bs.collapse"), r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.scrollspy"), s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), n = e.data("target") || e.attr("href"), s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
// ******

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-touch-shiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;window.Modernizr = function (a, b, c) {
    function C(a) {
        j.cssText = a
    }

    function D(a, b) {
        return C(n.join(a + ";") + (b || ""))
    }

    function E(a, b) {
        return typeof a === b
    }

    function F(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function G(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c))
    }

    function J() {
        e.input = function (c) {
            for (var d = 0, e = c.length; d < e; d++) t[c[d]] = c[d] in k;
            return t.list && (t.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), t
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), s[a[d]] = !!e;
            return s
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style,
        k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {}, s = {}, t = {}, u = [],
        v = u.slice, w, x = function (a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
            if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
        }, y = function (b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b) && c(b).matches || !1;
            var d;
            return x("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
                d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
            }), d
        }, z = function () {
            function d(d, e) {
                e = e || b.createElement(a[d] || "div"), d = "on" + d;
                var f = d in e;
                return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
            }

            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return d
        }(), A = {}.hasOwnProperty, B;
    !E(A, "undefined") && !E(A.call, "undefined") ? B = function (a, b) {
        return A.call(a, b)
    } : B = function (a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = v.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(v.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(v.call(arguments)))
        };
        return e
    }), r.flexbox = function () {
        return I("flexWrap")
    }, r.flexboxlegacy = function () {
        return I("boxDirection")
    }, r.canvas = function () {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }, r.canvastext = function () {
        return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function")
    }, r.touch = function () {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    }, r.indexedDB = function () {
        return !!I("indexedDB", a)
    }, r.hashchange = function () {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, r.history = function () {
        return !!a.history && !!history.pushState
    }, r.draganddrop = function () {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, r.rgba = function () {
        return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
    }, r.hsla = function () {
        return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
    }, r.multiplebgs = function () {
        return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, r.backgroundsize = function () {
        return I("backgroundSize")
    }, r.borderimage = function () {
        return I("borderImage")
    }, r.borderradius = function () {
        return I("borderRadius")
    }, r.boxshadow = function () {
        return I("boxShadow")
    }, r.textshadow = function () {
        return b.createElement("div").style.textShadow === ""
    }, r.opacity = function () {
        return D("opacity:.55"), /^0.55$/.test(j.opacity)
    }, r.cssanimations = function () {
        return I("animationName")
    }, r.csscolumns = function () {
        return I("columnCount")
    }, r.cssgradients = function () {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            c = "linear-gradient(left top,#9f9, white);";
        return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient")
    }, r.cssreflections = function () {
        return I("boxReflect")
    }, r.csstransforms = function () {
        return !!I("transform")
    }, r.csstransforms3d = function () {
        var a = !!I("perspective");
        return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, r.csstransitions = function () {
        return I("transition")
    }, r.fontface = function () {
        var a;
        return x('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet,
                g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }), a
    }, r.generatedcontent = function () {
        var a;
        return x(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
            a = b.offsetHeight >= 3
        }), a
    }, r.video = function () {
        var a = b.createElement("video"), c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {
        }
        return c
    }, r.audio = function () {
        var a = b.createElement("audio"), c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {
        }
        return c
    }, r.localstorage = function () {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, r.applicationcache = function () {
        return !!a.applicationCache
    };
    for (var K in r) B(r, K) && (w = K.toLowerCase(), e[w] = r[K](), u.push((e[w] ? "" : "no-") + w));
    return e.input || J(), e.addTest = function (a, b) {
        if (typeof a == "object") for (var d in a) B(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, C(""), i = k = null, function (a, b) {
        function l(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function n(a) {
            var b = j[a[h]];
            return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }

        function o(a, c, d) {
            c || (c = b);
            if (k) return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
            a || (a = b);
            if (k) return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
            for (; e < g; e++) d.createElement(f[e]);
            return d
        }

        function q(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }

        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }

        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g, h = "_html5shiv", i = 0, j = {}, k;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0, k = !0
            }
        })();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s, r(b)
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = y, e.hasEvent = z, e.testProp = function (a) {
        return G([a])
    }, e.testAllProps = I, e.testStyles = x, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
}(this, this.document);

/*!
 * animsition v3.4.1
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
!function (a) {
    "use strict";
    var b = "animsition", c = {
        init: function (d) {
            d = a.extend({
                inClass: "fade-in",
                outClass: "fade-out",
                inDuration: 1500,
                outDuration: 800,
                linkElement: ".animsition-link",
                loading: !0,
                loadingParentElement: "body",
                loadingClass: "animsition-loading",
                unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
                overlay: !1,
                overlayClass: "animsition-overlay-slide",
                overlayParentElement: "body"
            }, d);
            var e = c.supportCheck.call(this, d);
            if (!e) return "console" in window || (window.console = {}, window.console.log = function (a) {
                return a
            }), console.log("Animsition does not support this browser."), c.destroy.call(this);
            var f = c.optionCheck.call(this, d);
            return f && c.addOverlay.call(this, d), d.loading && c.addLoading.call(this, d), this.each(function () {
                var e = this, f = a(this), g = a(window), h = f.data(b);
                h || (d = a.extend({}, d), f.data(b, {options: d}), g.on("load." + b + " pageshow." + b, function () {
                    c.pageIn.call(e)
                }), g.on("unload." + b, function () {
                }), a(d.linkElement).on("click." + b, function (b) {
                    b.preventDefault();
                    var d = a(this);
                    c.pageOut.call(e, d)
                }))
            })
        }, addOverlay: function (b) {
            a(b.overlayParentElement).prepend('<div class="' + b.overlayClass + '"></div>')
        }, addLoading: function (b) {
            a(b.loadingParentElement).append('<div class="' + b.loadingClass + '"></div>')
        }, removeLoading: function () {
            var c = a(this), d = c.data(b).options, e = a(d.loadingParentElement).children("." + d.loadingClass);
            e.fadeOut().remove()
        }, supportCheck: function (b) {
            var c = a(this), d = b.unSupportCss, e = d.length, f = !1;
            0 === e && (f = !0);
            for (var g = 0; e > g; g++) if ("string" == typeof c.css(d[g])) {
                f = !0;
                break
            }
            return f
        }, optionCheck: function (b) {
            var c, d = a(this);
            return c = b.overlay || d.data("animsition-overlay") ? !0 : !1
        }, animationCheck: function (c, d, e) {
            var f = a(this), g = f.data(b).options, h = typeof c, i = !d && "number" === h,
                j = d && "string" === h && c.length > 0;
            return i || j ? c = c : d && e ? c = g.inClass : !d && e ? c = g.inDuration : d && !e ? c = g.outClass : d || e || (c = g.outDuration), c
        }, pageIn: function () {
            var d = this, e = a(this), f = e.data(b).options, g = e.data("animsition-in-duration"),
                h = e.data("animsition-in"), i = c.animationCheck.call(d, g, !1, !0),
                j = c.animationCheck.call(d, h, !0, !0), k = c.optionCheck.call(d, f);
            f.loading && c.removeLoading.call(d), k ? c.pageInOverlay.call(d, j, i) : c.pageInBasic.call(d, j, i)
        }, pageInBasic: function (b, c) {
            var d = a(this);
            d.css({"animation-duration": c / 1e3 + "s"}).addClass(b).animateCallback(function () {
                d.removeClass(b).css({opacity: 1})
            })
        }, pageInOverlay: function (c, d) {
            var e = a(this), f = e.data(b).options;
            e.css({opacity: 1}), a(f.overlayParentElement).children("." + f.overlayClass).css({"animation-duration": d / 1e3 + "s"}).addClass(c)
        }, pageOut: function (d) {
            var e = this, f = a(this), g = f.data(b).options, h = d.data("animsition-out"),
                i = f.data("animsition-out"), j = d.data("animsition-out-duration"),
                k = f.data("animsition-out-duration"), l = h ? h : i, m = j ? j : k,
                n = c.animationCheck.call(e, l, !0, !1), o = c.animationCheck.call(e, m, !1, !1),
                p = c.optionCheck.call(e, g), q = d.attr("href");
            p ? c.pageOutOverlay.call(e, n, o, q) : c.pageOutBasic.call(e, n, o, q)
        }, pageOutBasic: function (b, c, d) {
            var e = a(this);
            e.css({"animation-duration": c / 1e3 + "s"}).addClass(b).animateCallback(function () {
                location.href = d
            })
        }, pageOutOverlay: function (d, e, f) {
            var g = this, h = a(this), i = h.data(b).options, j = h.data("animsition-in"),
                k = c.animationCheck.call(g, j, !0, !0);
            a(i.overlayParentElement).children("." + i.overlayClass).css({"animation-duration": e / 1e3 + "s"}).removeClass(k).addClass(d).animateCallback(function () {
                h.css({opacity: 0}), location.href = f
            })
        }, destroy: function () {
            return this.each(function () {
                var c = a(this);
                a(window).unbind("." + b), c.css({opacity: 1}).removeData(b)
            })
        }
    };
    a.fn.animateCallback = function (b) {
        var c = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
        return this.each(function () {
            a(this).bind(c, function () {
                return a(this).unbind(c), b.call(this)
            })
        })
    }, a.fn.animsition = function (d) {
        return c[d] ? c[d].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof d && d ? void a.error("Method " + d + " does not exist on jQuery." + b) : c.init.apply(this, arguments)
    }
}(jQuery);

// ******

/*
 *  Bootstrap Auto-Hiding Navbar - v1.0.0
 *  An extension for Bootstrap's fixed navbar which hides the navbar while the page is scrolling downwards and shows it the other way. The plugin is able to show/hide the navbar programmatically as well.
 *  http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.element = a(b), this.settings = a.extend({}, w, c), this._defaults = w, this._name = m, this.init()
    }

    function f(b) {
        v && (b.element.addClass("navbar-hidden").animate({top: -b.element.height()}, {
            queue: !1,
            duration: b.settings.animationDuration
        }), a(".dropdown.open .dropdown-toggle", b.element).dropdown("toggle"), v = !1)
    }

    function g(a) {
        v || (a.element.removeClass("navbar-hidden").animate({top: 0}, {
            queue: !1,
            duration: a.settings.animationDuration
        }), v = !0)
    }

    function h(a) {
        var b = n.scrollTop(), c = b - t;
        if (t = b, 0 > c) {
            if (v) return;
            (a.settings.showOnUpscroll || l >= b) && g(a)
        } else if (c > 0) {
            if (!v) return void(a.settings.showOnBottom && b + u === o.height() && g(a));
            b >= l && f(a)
        }
    }

    function i(a) {
        a.settings.disableAutohide || (s = (new Date).getTime(), h(a))
    }

    function j(a) {
        o.on("scroll." + m, function () {
            (new Date).getTime() - s > r ? i(a) : (clearTimeout(p), p = setTimeout(function () {
                i(a)
            }, r))
        }), n.on("resize." + m, function () {
            clearTimeout(q), q = setTimeout(function () {
                u = n.height()
            }, r)
        })
    }

    function k() {
        o.off("." + m), n.off("." + m)
    }

    var l, m = "autoHidingNavbar", n = a(b), o = a(c), p = null, q = null, r = 70, s = 0, t = null, u = n.height(),
        v = !0,
        w = {disableAutohide: !1, showOnUpscroll: !0, showOnBottom: !0, hideOffset: "auto", animationDuration: 200};
    e.prototype = {
        init: function () {
            return this.elements = {navbar: this.element}, this.setDisableAutohide(this.settings.disableAutohide), this.setShowOnUpscroll(this.settings.showOnUpscroll), this.setShowOnBottom(this.settings.showOnBottom), this.setHideOffset(this.settings.hideOffset), this.setAnimationDuration(this.settings.animationDuration), l = "auto" === this.settings.hideOffset ? this.element.height() : this.settings.hideOffset, j(this), this.element
        }, setDisableAutohide: function (a) {
            return this.settings.disableAutohide = a, this.element
        }, setShowOnUpscroll: function (a) {
            return this.settings.showOnUpscroll = a, this.element
        }, setShowOnBottom: function (a) {
            return this.settings.showOnBottom = a, this.element
        }, setHideOffset: function (a) {
            return this.settings.hideOffset = a, this.element
        }, setAnimationDuration: function (a) {
            return this.settings.animationDuration = a, this.element
        }, show: function () {
            return g(this), this.element
        }, hide: function () {
            return f(this), this.element
        }, destroy: function () {
            return k(this), g(this), a.data(this, "plugin_" + m, null), this.element
        }
    }, a.fn[m] = function (b) {
        var c = arguments;
        if (b === d || "object" == typeof b) return this.each(function () {
            a.data(this, "plugin_" + m) || a.data(this, "plugin_" + m, new e(this, b))
        });
        if ("string" == typeof b && "_" !== b[0] && "init" !== b) {
            var f;
            return this.each(function () {
                var d = a.data(this, "plugin_" + m);
                d instanceof e && "function" == typeof d[b] && (f = d[b].apply(d, Array.prototype.slice.call(c, 1)))
            }), f !== d ? f : this
        }
    }
}(jQuery, window, document);

// ******

/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1
    };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = []
        }

        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return a.notSupported = !0, a.prototype.observe = function () {
        }, a
    }()), d = this.getComputedStyle || function (a) {
        return this.getPropertyValue = function (b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c
        }

        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function () {
                        var a, b, e, f;
                        for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c));
                        return f
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(a) : void 0
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c], a["" + c] = d, f.push(function () {
                var b, f, g, h;
                for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                return h
            }.call(this));
            return f
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b);
            return c
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);

// ******

// Slidebars 0.10.2 (http://plugins.adchsm.me/slidebars/) written by Adam Smith (http://www.adchsm.me/) released under MIT License (http://plugins.adchsm.me/slidebars/license.txt)
!function (t) {
    t.slidebars = function (s) {
        function e() {
            !c.disableOver || "number" == typeof c.disableOver && c.disableOver >= T ? (y = !0, t("html").addClass("sb-init"), c.hideControlClasses && k.removeClass("sb-hide"), i()) : "number" == typeof c.disableOver && c.disableOver < T && (y = !1, t("html").removeClass("sb-init"), c.hideControlClasses && k.addClass("sb-hide"), g.css("minHeight", ""), (C || w) && a())
        }

        function i() {
            g.css("minHeight", ""), g.css("minHeight", t("html").height() + "px"), m && m.hasClass("sb-width-custom") && m.css("width", m.attr("data-sb-width")), p && p.hasClass("sb-width-custom") && p.css("width", p.attr("data-sb-width")), m && (m.hasClass("sb-style-push") || m.hasClass("sb-style-overlay")) && m.css("marginLeft", "-" + m.css("width")), p && (p.hasClass("sb-style-push") || p.hasClass("sb-style-overlay")) && p.css("marginRight", "-" + p.css("width")), c.scrollLock && t("html").addClass("sb-scroll-lock")
        }

        function n(t, s, e) {
            var n;
            if (n = t.hasClass("sb-style-push") ? g.add(t).add(O) : t.hasClass("sb-style-overlay") ? t : g.add(O), "translate" === x) n.css("transform", "translate(" + s + ")"); else if ("side" === x) "-" === s[0] && (s = s.substr(1)), "0px" !== s && n.css(e, "0px"), setTimeout(function () {
                n.css(e, s)
            }, 1); else if ("jQuery" === x) {
                "-" === s[0] && (s = s.substr(1));
                var o = {};
                o[e] = s, n.stop().animate(o, 400)
            }
            setTimeout(function () {
                "0px" === s && (n.removeAttr("style"), i())
            }, 400)
        }

        function o(s) {
            function e() {
                y && "left" === s && m ? (t("html").addClass("sb-active sb-active-left"), m.addClass("sb-active"), n(m, m.css("width"), "left"), setTimeout(function () {
                    C = !0
                }, 400)) : y && "right" === s && p && (t("html").addClass("sb-active sb-active-right"), p.addClass("sb-active"), n(p, "-" + p.css("width"), "right"), setTimeout(function () {
                    w = !0
                }, 400))
            }

            "left" === s && m && w || "right" === s && p && C ? (a(), setTimeout(e, 400)) : e()
        }

        function a(s) {
            (C || w) && (C && (n(m, "0px", "left"), C = !1), w && (n(p, "0px", "right"), w = !1), setTimeout(function () {
                t("html").removeClass("sb-active sb-active-left sb-active-right"), m && m.removeClass("sb-active"), p && p.removeClass("sb-active"), "undefined" != typeof s && (window.location = s)
            }, 400))
        }

        function l(t) {
            "left" === t && m && (C ? a() : o("left")), "right" === t && p && (w ? a() : o("right"))
        }

        function r(t, s) {
            t.stopPropagation(), t.preventDefault(), "touchend" === t.type && s.off("click")
        }

        var c = t.extend({siteClose: !0, scrollLock: !1, disableOver: !1, hideControlClasses: !1}, s),
            h = document.createElement("div").style, d = !1, f = !1;
        ("" === h.MozTransition || "" === h.WebkitTransition || "" === h.OTransition || "" === h.transition) && (d = !0), ("" === h.MozTransform || "" === h.WebkitTransform || "" === h.OTransform || "" === h.transform) && (f = !0);
        var u = navigator.userAgent, b = !1, v = !1;
        /Android/.test(u) ? b = u.substr(u.indexOf("Android") + 8, 3) : /(iPhone|iPod|iPad)/.test(u) && (v = u.substr(u.indexOf("OS ") + 3, 3).replace("_", ".")), (b && 3 > b || v && 5 > v) && t("html").addClass("sb-static");
        var g = t("#sb-site, .sb-site-container");
        if (t(".sb-left").length) var m = t(".sb-left"), C = !1;
        if (t(".sb-right").length) var p = t(".sb-right"), w = !1;
        var y = !1, T = t(window).width(),
            k = t(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"), O = t(".sb-slide");
        e(), t(window).resize(function () {
            var s = t(window).width();
            T !== s && (T = s, e(), C && o("left"), w && o("right"))
        });
        var x;
        d && f ? (x = "translate", b && 4.4 > b && (x = "side")) : x = "jQuery", this.slidebars = {
            open: o,
            close: a,
            toggle: l,
            init: function () {
                return y
            },
            active: function (t) {
                return "left" === t && m ? C : "right" === t && p ? w : void 0
            },
            destroy: function (t) {
                "left" === t && m && (C && a(), setTimeout(function () {
                    m.remove(), m = !1
                }, 400)), "right" === t && p && (w && a(), setTimeout(function () {
                    p.remove(), p = !1
                }, 400))
            }
        }, t(".sb-toggle-left").on("touchend click", function (s) {
            r(s, t(this)), l("left")
        }), t(".sb-toggle-right").on("touchend click", function (s) {
            r(s, t(this)), l("right")
        }), t(".sb-open-left").on("touchend click", function (s) {
            r(s, t(this)), o("left")
        }), t(".sb-open-right").on("touchend click", function (s) {
            r(s, t(this)), o("right")
        }), t(".sb-close").on("touchend click", function (s) {
            if (t(this).is("a") || t(this).children().is("a")) {
                if ("click" === s.type) {
                    s.preventDefault();
                    var e = t(this).is("a") ? t(this).attr("href") : t(this).find("a").attr("href");
                    a(e)
                }
            } else r(s, t(this)), a()
        }), g.on("touchend click", function (s) {
            c.siteClose && (C || w) && (r(s, t(this)), a())
        })
    }
}(jQuery);
