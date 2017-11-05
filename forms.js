! function(a) {
    function b() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
        }
    }
    a.fn.ajaxSubmit = function(c) {
        function d(b) {
            for (var d = new FormData, e = 0; e < b.length; e++) "file" != b[e].type && d.append(b[e].name, b[e].value);
            if (i.find("input:file:enabled").each(function() {
                    var b = a(this).attr("name"),
                        c = this.files;
                    if (b)
                        for (var e = 0; e < c.length; e++) d.append(b, c[e])
                }), c.extraData)
                for (var f in c.extraData) d.append(f, c.extraData[f]);
            c.data = null;
            var g = a.extend(!0, {}, a.ajaxSettings, c, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: "POST"
            });
            g.context = g.context || g, g.data = null;
            var h = g.beforeSend;
            g.beforeSend = function(a, b) {
                b.data = d, a.upload && (a.upload.onprogress = function(a) {
                    b.progress(a.position, a.total)
                }), h && h.call(b, a, c)
            }, a.ajax(g)
        }

        function e(d) {
            function e(a) {
                var b = a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document;
                return b
            }

            function g() {
                function c() {
                    try {
                        var a = e(p).readyState;
                        b("state = " + a), "uninitialized" == a.toLowerCase() && setTimeout(c, 50)
                    } catch (a) {
                        b("Server abort: ", a, " (", a.name, ")"), h(y), u && clearTimeout(u), u = void 0
                    }
                }
                var d = i.attr("target"),
                    g = i.attr("action");
                v.setAttribute("target", n), f || v.setAttribute("method", "POST"), g != l.url && v.setAttribute("action", l.url), l.skipEncodingOverride || f && !/post/i.test(f) || i.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), l.timeout && (u = setTimeout(function() {
                    t = !0, h(x)
                }, l.timeout));
                var j = [];
                try {
                    if (l.extraData)
                        for (var k in l.extraData) j.push(a('<input type="hidden" name="' + k + '">').attr("value", l.extraData[k]).appendTo(v)[0]);
                    l.iframeTarget || (o.appendTo("body"), p.attachEvent ? p.attachEvent("onload", h) : p.addEventListener("load", h, !1)), setTimeout(c, 15), v.submit()
                } finally {
                    v.setAttribute("action", g), d ? v.setAttribute("target", d) : i.removeAttr("target"), a(j).remove()
                }
            }

            function h(c) {
                if (!q.aborted && !D) {
                    try {
                        C = e(p)
                    } catch (a) {
                        b("cannot access response document: ", a), c = y
                    }
                    if (c === x && q) return void q.abort("timeout");
                    if (c == y && q) return void q.abort("server abort");
                    if (C && C.location.href != l.iframeSrc || t) {
                        p.detachEvent ? p.detachEvent("onload", h) : p.removeEventListener("load", h, !1);
                        var d, f = "success";
                        try {
                            if (t) throw "timeout";
                            var g = "xml" == l.dataType || C.XMLDocument || a.isXMLDoc(C);
                            if (b("isXml=" + g), !g && window.opera && (null == C.body || "" == C.body.innerHTML) && --E) return b("requeing onLoad callback, DOM not available"), void setTimeout(h, 250);
                            var i = C.body ? C.body : C.documentElement;
                            q.responseText = i ? i.innerHTML : null, q.responseXML = C.XMLDocument ? C.XMLDocument : C, g && (l.dataType = "xml"), q.getResponseHeader = function(a) {
                                var b = {
                                    "content-type": l.dataType
                                };
                                return b[a]
                            }, i && (q.status = Number(i.getAttribute("status")) || q.status, q.statusText = i.getAttribute("statusText") || q.statusText);
                            var j = (l.dataType || "").toLowerCase(),
                                k = /(json|script|text)/.test(j);
                            if (k || l.textarea) {
                                var n = C.getElementsByTagName("textarea")[0];
                                if (n) q.responseText = n.value, q.status = Number(n.getAttribute("status")) || q.status, q.statusText = n.getAttribute("statusText") || q.statusText;
                                else if (k) {
                                    var r = C.getElementsByTagName("pre")[0],
                                        s = C.getElementsByTagName("body")[0];
                                    r ? q.responseText = r.textContent ? r.textContent : r.innerText : s && (q.responseText = s.textContent ? s.textContent : s.innerText)
                                }
                            } else "xml" != j || q.responseXML || null == q.responseText || (q.responseXML = F(q.responseText));
                            try {
                                B = H(q, j, l)
                            } catch (a) {
                                f = "parsererror", q.error = d = a || f
                            }
                        } catch (a) {
                            b("error caught: ", a), f = "error", q.error = d = a || f
                        }
                        q.aborted && (b("upload aborted"), f = null), q.status && (f = q.status >= 200 && q.status < 300 || 304 === q.status ? "success" : "error"), "success" === f ? (l.success && l.success.call(l.context, B, "success", q), m && a.event.trigger("ajaxSuccess", [q, l])) : f && (void 0 == d && (d = q.statusText), l.error && l.error.call(l.context, q, f, d), m && a.event.trigger("ajaxError", [q, l, d])), m && a.event.trigger("ajaxComplete", [q, l]), m && !--a.active && a.event.trigger("ajaxStop"), l.complete && l.complete.call(l.context, q, f), D = !0, l.timeout && clearTimeout(u), setTimeout(function() {
                            l.iframeTarget || o.remove(), q.responseXML = null
                        }, 100)
                    }
                }
            }
            var j, k, l, m, n, o, p, q, r, s, t, u, v = i[0],
                w = !!a.fn.prop;
            if (d)
                if (w)
                    for (k = 0; k < d.length; k++) j = a(v[d[k].name]), j.prop("disabled", !1);
                else
                    for (k = 0; k < d.length; k++) j = a(v[d[k].name]), j.removeAttr("disabled");
            if (a(":input[name=submit],:input[id=submit]", v).length) return void alert('Error: Form elements must not have name or id of "submit".');
            if (l = a.extend(!0, {}, a.ajaxSettings, c), l.context = l.context || l, n = "jqFormIO" + (new Date).getTime(), l.iframeTarget ? (o = a(l.iframeTarget), s = o.attr("name"), null == s ? o.attr("name", n) : n = s) : (o = a('<iframe name="' + n + '" src="' + l.iframeSrc + '" />'), o.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), p = o[0], q = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(c) {
                        var d = "timeout" === c ? "timeout" : "aborted";
                        b("aborting upload... " + d), this.aborted = 1, o.attr("src", l.iframeSrc), q.error = d, l.error && l.error.call(l.context, q, d, c), m && a.event.trigger("ajaxError", [q, l, d]), l.complete && l.complete.call(l.context, q, d)
                    }
                }, m = l.global, m && !a.active++ && a.event.trigger("ajaxStart"), m && a.event.trigger("ajaxSend", [q, l]), l.beforeSend && l.beforeSend.call(l.context, q, l) === !1) return void(l.global && a.active--);
            if (!q.aborted) {
                r = v.clk, r && (s = r.name, s && !r.disabled && (l.extraData = l.extraData || {}, l.extraData[s] = r.value, "image" == r.type && (l.extraData[s + ".x"] = v.clk_x, l.extraData[s + ".y"] = v.clk_y)));
                var x = 1,
                    y = 2,
                    z = a("meta[name=csrf-token]").attr("content"),
                    A = a("meta[name=csrf-param]").attr("content");
                A && z && (l.extraData = l.extraData || {}, l.extraData[A] = z), l.forceSync ? g() : setTimeout(g, 10);
                var B, C, D, E = 50,
                    F = a.parseXML || function(a, b) {
                        return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                    },
                    G = a.parseJSON || function(a) {
                        return window.eval("(" + a + ")")
                    },
                    H = function(b, c, d) {
                        var e = b.getResponseHeader("content-type") || "",
                            f = "xml" === c || !c && e.indexOf("xml") >= 0,
                            g = f ? b.responseXML : b.responseText;
                        return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = G(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
                    }
            }
        }
        if (!this.length) return b("ajaxSubmit: skipping submit process - no element selected"), this;
        var f, g, h, i = this;
        "function" == typeof c && (c = {
            success: c
        }), f = this.attr("method"), g = this.attr("action"), h = "string" == typeof g ? a.trim(g) : "", h = h || window.location.href || "", h && (h = (h.match(/^([^#]+)/) || [])[1]), c = a.extend(!0, {
            url: h,
            success: a.ajaxSettings.success,
            type: f || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, c);
        var j = {};
        if (this.trigger("form-pre-serialize", [this, c, j]), j.veto) return b("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (c.beforeSerialize && c.beforeSerialize(this, c) === !1) return b("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var k = c.traditional;
        void 0 === k && (k = a.ajaxSettings.traditional);
        var l, m = this.formToArray(c.semantic);
        if (c.data && (c.extraData = c.data, l = a.param(c.data, k)), c.beforeSubmit && c.beforeSubmit(m, this, c) === !1) return b("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [m, this, c, j]), j.veto) return b("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var n = a.param(m, k);
        l && (n = n ? n + "&" + l : l), "GET" == c.type.toUpperCase() ? (c.url += (c.url.indexOf("?") >= 0 ? "&" : "?") + n, c.data = null) : c.data = n;
        var o = [];
        if (c.resetForm && o.push(function() {
                i.resetForm()
            }), c.clearForm && o.push(function() {
                i.clearForm(c.includeHidden)
            }), !c.dataType && c.target) {
            var p = c.success || function() {};
            o.push(function(b) {
                var d = c.replaceTarget ? "replaceWith" : "html";
                a(c.target)[d](b).each(p, arguments)
            })
        } else c.success && o.push(c.success);
        c.success = function(a, b, d) {
            for (var e = c.context || c, f = 0, g = o.length; f < g; f++) o[f].apply(e, [a, b, d || i, i])
        };
        var q = a("input:file:enabled[value]", this),
            r = q.length > 0,
            s = "multipart/form-data",
            t = i.attr("enctype") == s || i.attr("encoding") == s,
            u = !!(r && q.get(0).files && window.FormData);
        b("fileAPI :" + u);
        var v = (r || t) && !u;
        return c.iframe !== !1 && (c.iframe || v) ? c.closeKeepAlive ? a.get(c.closeKeepAlive, function() {
            e(m)
        }) : e(m) : (r || t) && u ? (c.progress = c.progress || a.noop, d(m)) : a.ajax(c), this.trigger("form-submit-notify", [this, c]), this
    }, a.fn.ajaxForm = function(c) {
        if (0 === this.length) {
            var d = {
                s: this.selector,
                c: this.context
            };
            return !a.isReady && d.s ? (b("DOM not ready, queuing ajaxForm"), a(function() {
                a(d.s, d.c).ajaxForm(c)
            }), this) : (b("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function(b) {
            b.isDefaultPrevented() || (b.preventDefault(), a(this).ajaxSubmit(c))
        }).bind("click.form-plugin", function(b) {
            var c = b.target,
                d = a(c);
            if (!d.is(":submit,input:image")) {
                var e = d.closest(":submit");
                if (0 == e.length) return;
                c = e[0]
            }
            var f = this;
            if (f.clk = c, "image" == c.type)
                if (void 0 != b.offsetX) f.clk_x = b.offsetX, f.clk_y = b.offsetY;
                else if ("function" == typeof a.fn.offset) {
                var g = d.offset();
                f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
            } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
            setTimeout(function() {
                f.clk = f.clk_x = f.clk_y = null
            }, 100)
        })
    }, a.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, a.fn.formToArray = function(b) {
        var c = [];
        if (0 === this.length) return c;
        var d = this[0],
            e = b ? d.getElementsByTagName("*") : d.elements;
        if (!e) return c;
        var f, g, h, i, j, k, l;
        for (f = 0, k = e.length; f < k; f++)
            if (j = e[f], h = j.name)
                if (b && d.clk && "image" == j.type) j.disabled || d.clk != j || (c.push({
                    name: h,
                    value: a(j).val(),
                    type: j.type
                }), c.push({
                    name: h + ".x",
                    value: d.clk_x
                }, {
                    name: h + ".y",
                    value: d.clk_y
                }));
                else if (i = a.fieldValue(j, !0), i && i.constructor == Array)
            for (g = 0, l = i.length; g < l; g++) c.push({
                name: h,
                value: i[g]
            });
        else null !== i && "undefined" != typeof i && c.push({
            name: h,
            value: i,
            type: j.type
        });
        if (!b && d.clk) {
            var m = a(d.clk),
                n = m[0];
            h = n.name, h && !n.disabled && "image" == n.type && (c.push({
                name: h,
                value: m.val()
            }), c.push({
                name: h + ".x",
                value: d.clk_x
            }, {
                name: h + ".y",
                value: d.clk_y
            }))
        }
        return c
    }, a.fn.formSerialize = function(b) {
        return a.param(this.formToArray(b))
    }, a.fn.fieldSerialize = function(b) {
        var c = [];
        return this.each(function() {
            var d = this.name;
            if (d) {
                var e = a.fieldValue(this, b);
                if (e && e.constructor == Array)
                    for (var f = 0, g = e.length; f < g; f++) c.push({
                        name: d,
                        value: e[f]
                    });
                else null !== e && "undefined" != typeof e && c.push({
                    name: this.name,
                    value: e
                })
            }
        }), a.param(c)
    }, a.fn.fieldValue = function(b) {
        for (var c = [], d = 0, e = this.length; d < e; d++) {
            var f = this[d],
                g = a.fieldValue(f, b);
            null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
        }
        return c
    }, a.fieldValue = function(b, c) {
        var d = b.name,
            e = b.type,
            f = b.tagName.toLowerCase();
        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && b.selectedIndex == -1)) return null;
        if ("select" == f) {
            var g = b.selectedIndex;
            if (g < 0) return null;
            for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; l < k; l++) {
                var m = i[l];
                if (m.selected) {
                    var n = m.value;
                    if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j) return n;
                    h.push(n)
                }
            }
            return h
        }
        return a(b).val()
    }, a.fn.clearForm = function(b) {
        return this.each(function() {
            a("input,select,textarea", this).clearFields(b)
        })
    }, a.fn.clearFields = a.fn.clearInputs = function(a) {
        var b = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var c = this.type,
                d = this.tagName.toLowerCase();
            b.test(c) || "textarea" == d || a && /hidden/.test(c) ? this.value = "" : "checkbox" == c || "radio" == c ? this.checked = !1 : "select" == d && (this.selectedIndex = -1)
        })
    }, a.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, a.fn.enable = function(a) {
        return void 0 === a && (a = !0), this.each(function() {
            this.disabled = !a
        })
    }, a.fn.selected = function(b) {
        return void 0 === b && (b = !0), this.each(function() {
            var c = this.type;
            if ("checkbox" == c || "radio" == c) this.checked = b;
            else if ("option" == this.tagName.toLowerCase()) {
                var d = a(this).parent("select");
                b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
            }
        })
    }, a.fn.ajaxSubmit.debug = !1
}(jQuery), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b, d = d.concat(c.errorList)
            }), c.errorList = d), b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                remote: h
            })), g
        }
    }), a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                else c.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (a) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in c || !b.objectLength(a(this).rules())) && (c[this.name] = !0, !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d = a(b),
                    e = b.type;
                return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? !b.validity.badInput && d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function(a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (a) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", a), a instanceof TypeError && (a.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), a
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g = this.errorsFor(b),
                    h = this.idOrName(b),
                    i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                boolean: function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                function: function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : delete b[d]
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0,
                    f = 0,
                    g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    })
}), jQuery("document").ready(function(a) {
    a("#other_title").length && a("#title").change(function() {
        "Title: Other" == a("#title option:selected").val() ? (a(".field-other_title").removeClass("hidden"), a("#other_title").removeAttr("disabled").attr("required", "required")) : (a("#other_title").removeAttr("required").val(""), a(".field-other_title").removeAttr("disabled").addClass("hidden"))
    }), a("#toggle-optout").length && a("#toggle-optout").on("click", function() {
        return a("span.field-otherparts").show(), a("span.field-selectpartners").show(), a("span.field-optout-instructions").show(), !1
    });
    var b;
    b = function(b, c) {
        if (b.length > 0) {
            var d = 0;
            a(".business-snippet").length > 0 && a(".navbar").length > 0 && (d = a(".business-snippet").height() + a(".navbar").height()), a("html,body").animate({
                scrollTop: b.offset().top - d
            }, 1200, c)
        }
    }, a(".bbgform_wrapper form").submit(function() {
        if (a("#other_title").length && !a("#other_title").is(":disabled")) {
            var b = a("#title").find("option:selected");
            "Title: Other" == b.val() && b.val("Title: " + a("#other_title").val())
        }
    }), "undefined" != typeof a.validator && a.validator.addMethod("unique_names", function(b, c) {
        return a("#fname").val() !== a("#lname").val()
    }, "First and last names cannot be identical"), a(".bbgform_wrapper form").each(function() {
        a(this).validate({
            rules: {
                fname: {
                    required: !0,
                    unique_names: !0
                },
                lname: {
                    required: !0,
                    unique_names: !0
                }
            },
            errorContainer: ".bbgform_wrapper .validation_error",
            errorElement: "div",
            errorClass: "validation_message",
            errorPlacement: function(a, b) {},
            highlight: function(b, c) {
                a(b).parent().addClass("error")
            },
            unhighlight: function(b, c) {
                a(b).parent().removeClass("error")
            },
            submitHandler: function(c) {
                var d = a(c),
                    e = !0;
                if (d.valid()) {
                    var f = a(".field-label_confirmation"),
                        g = a(".field-label_confirmation:visible");
                    a("#phone").length && "" === a("#phone").val() && a("#phone").prop("disabled", "disabled"), f.length && (e = !1, g.length ? e = !0 : d.trigger("showConfirmationSection"))
                }
                e && d.ajaxSubmit({
                    url: form_site_url + "/wp-admin/admin-ajax.php?action=bbg_form_creator",
                    beforeSubmit: function(b, c, e) {
                        if (a("#bbgform_submit_button", d).hide(), a("#bbgform_submit_working", d).show(), "undefined" != typeof grecaptcha) {
                            var f = grecaptcha.getResponse();
                            if ("" === f) return alert("Please complete reCAPTCHA Challenge"), !1
                        }
                    },
                    data: {
                        record: "1"
                    },
                    success: function(c, e, f) {
                        var g, h = a("<div>").addClass("submit_message"),
                            i = a(".confirmation_message"),
                            j = d.data("observer");
                        h.addClass("bbgforms_confirmation_message"), "undefined" == typeof i || null === i || 0 == i.length ? h.html(c.message) : (h.html(i.removeClass("hidden")), b(h)), "undefined" != typeof _gaq && _gaq.push(["_trackEvent", "contact_form", "submit", window.location.href]), "undefined" != typeof google_tag_manager && "undefined" != typeof dataLayer && dataLayer.push({
                            event: "gtm.bbgformSubmit"
                        }), d.trigger("submitSuccess"), d.closest(".bbgform_wrapper").replaceWith(h), a(".form_remove_after_submit").remove(), a(".form_show_thankyou_msg").show(), j && j.length > 0 && (g = a('[data-name="' + j + '"]'), g.length > 0 && g.trigger("form-submitted"))
                    },
                    error: function(b, c, e) {
                        a('.bbgform button[name="submit"]', d).show(), "undefined" == typeof bbg_form_error_message || null === bbg_form_error_message ? alert("There was an error submitting your information.") : alert(bbg_form_error_message), d.trigger("submitError")
                    }
                })
            }
        })
    })
});
