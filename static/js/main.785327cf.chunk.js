(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function (e, t, r) {
      e.exports = r(21);
    },
    19: function (e, t, r) {},
    21: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        o = r.n(n),
        a = r(8),
        i = r.n(a),
        c = (r(19), r(9)),
        s = r(12),
        u = r(3),
        l = r(4),
        h = r(6),
        d = r(5),
        f = r(1),
        m = r(10),
        p = r(11),
        v = r(2),
        y = r.n(v);
      r(20);
      function w() {
        w = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (S) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, o) {
          var a = t && t.prototype instanceof d ? t : d,
            i = Object.create(a.prototype),
            c = new L(o || []);
          return n(i, "_invoke", { value: k(e, r, c) }), i;
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        e.wrap = u;
        var h = {};
        function d() {}
        function f() {}
        function m() {}
        var p = {};
        s(p, a, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(N([])));
        y && y !== t && r.call(y, a) && (p = y);
        var g = (m.prototype = d.prototype = Object.create(p));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var o;
          n(this, "_invoke", {
            value: function (n, a) {
              function i() {
                return new t(function (o, i) {
                  !(function n(o, a, i, c) {
                    var s = l(e[o], e, a);
                    if ("throw" !== s.type) {
                      var u = s.arg,
                        h = u.value;
                      return h && "object" == typeof h && r.call(h, "__await")
                        ? t.resolve(h.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(h).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(s.arg);
                  })(n, a, o, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, t, r) {
          var n = "suspendedStart";
          return function (o, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw a;
              return C();
            }
            for (r.method = o, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var c = O(i, r);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var s = l(e, t, r);
              if ("normal" === s.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), s.arg === h)
                )
                  continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function O(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                O(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              h
            );
          var o = l(n, e.iterator, t.arg);
          if ("throw" === o.type)
            return (
              (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), h
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                h)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              h);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          n(g, "constructor", { value: m, configurable: !0 }),
          n(m, "constructor", { value: f, configurable: !0 }),
          (f.displayName = s(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), s(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(E.prototype),
          s(E.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new E(u(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          s(g, c, "Generator"),
          s(g, a, function () {
            return this;
          }),
          s(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = N),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    s = r.call(a, "finallyLoc");
                  if (c && s) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      var g = !1,
        b = (function (e) {
          Object(h.a)(r, e);
          var t = Object(d.a)(r);
          function r() {
            return Object(u.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    { className: "rcw-disclaimer-info" },
                    o.a.createElement(
                      "svg",
                      {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        focusable: "false",
                        className: "rcw-info",
                      },
                      o.a.createElement("path", {
                        d: "M7.25 11V7h1.5v4h-1.5zM8 4.5A.75.75 0 118 6a.75.75 0 010-1.5z",
                        fill: "currentColor",
                      }),
                      o.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",
                        fill: "currentColor",
                      })
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      "This trained assistant model may display inaccurate or offensive information that doesn\u2019t represent Databricks views."
                    )
                  );
                },
              },
            ]),
            r
          );
        })(n.Component),
        E = (function (e) {
          Object(h.a)(r, e);
          var t = Object(d.a)(r);
          function r() {
            return Object(u.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement("div", {
                    className: "rcw-response rcw-message-text rcw-loading",
                  });
                },
              },
            ]),
            r
          );
        })(n.Component),
        k = (function (e) {
          Object(h.a)(r, e);
          var t = Object(d.a)(r);
          function r() {
            return Object(u.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "a",
                    {
                      href: this.props.url,
                      className: "rcw-link",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    this.props.name ? this.props.name : this.props.url
                  );
                },
              },
            ]),
            r
          );
        })(n.Component);
      function O() {
        y()(window).height() >= 850
          ? (y()(".rcw-conversation-container").height("620px"),
            y()(".rcw-messages-container").height("502px"))
          : (y()(".rcw-conversation-container").height(
              "".concat(y()(window).height() - 210, "px")
            ),
            y()(".rcw-messages-container").height(
              "".concat(y()(window).height() - 328, "px")
            ));
      }
      var j = new MutationObserver(function () {
        document.contains(
          document.querySelector(".rcw-conversation-container .rcw-header")
        ) &&
          (O(),
          window.addEventListener("resize", O, !0),
          (y()(".rcw-disclaimer-info").parent()[0].style.height = "49px"),
          j.disconnect());
      });
      function x(e) {
        var t = e.answer,
          r = e.sources;
        return o.a.createElement(
          "div",
          { className: "rcw-response" },
          o.a.createElement("div", {
            className: "rcw-message-text",
            dangerouslySetInnerHTML: { __html: p.sanitize(m.marked.parse(t)) },
          }),
          r.length > 0
            ? o.a.createElement(
                "div",
                { className: "rcw-sources" },
                o.a.createElement(
                  "div",
                  { className: "rcw-sources-title" },
                  "Source".concat(1 === r.length ? "" : "s")
                ),
                r.map(function (e) {
                  return o.a.createElement(k, { url: e });
                })
              )
            : null
        );
      }
      function L() {
        return o.a.createElement(
          "div",
          { className: "rcw-response" },
          o.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "Hi, I'm Databricks AI Assistant. You can ask me questions you have about using Databricks. ",
            o.a.createElement("br", null),
            o.a.createElement("br", null),
            " Some questions you could try: ",
            o.a.createElement("br", null),
            " 1. How do I load files into Databricks? ",
            o.a.createElement("br", null),
            " 2. How do you deploy my model for serving? ",
            o.a.createElement("br", null),
            " 3. How I convert my files to parquet files?"
          )
        );
      }
      function N() {
        return o.a.createElement(
          "div",
          { className: "rcw-response" },
          o.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in",
            " ",
            o.a.createElement(k, {
              url: "https://docs.databricks.com",
              name: "Databricks Documentation",
            }),
            " ",
            "or",
            " ",
            o.a.createElement(k, {
              url: "https://kb.databricks.com",
              name: "Databricks Knowledge Base",
            })
          )
        );
      }
      function C() {
        return o.a.createElement(
          "div",
          { className: "rcw-response" },
          o.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for",
            " ",
            o.a.createElement(k, {
              url: "https://learn.microsoft.com/en-us/azure/databricks",
              name: "Databricks on Azure",
            }),
            " ",
            "and",
            " ",
            o.a.createElement(k, {
              url: "https://docs.gcp.databricks.com",
              name: "Databricks on GCP",
            }),
            " ",
            "in the meantime."
          )
        );
      }
      function S() {
        return o.a.createElement("hr", { className: "rcw-question-separator" });
      }
      function _() {
        document.querySelector(".rcw-loading") &&
          document.querySelector(".rcw-loading").parentElement.remove();
      }
      function A(e) {
        _(),
          e
            ? Object(f.renderCustomComponent)(C, {}, !0)
            : Object(f.renderCustomComponent)(N, {}, !0);
      }
      new IntersectionObserver(
        function (e) {
          e[0].isIntersecting
            ? y()(".rcw-widget-container").css("position", "absolute")
            : e[0].isIntersecting ||
              y()(".rcw-widget-container").css("position", "fixed");
        },
        { threshold: [0] }
      );
      var q = (function (e) {
          Object(h.a)(r, e);
          var t = Object(d.a)(r);
          function r() {
            var e;
            Object(u.a)(this, r);
            for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
              o[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleNewUserMessage =
                function (t) {
                  (document.querySelector(".rcw-sender").style.visibility =
                    "hidden"),
                    Object(f.renderCustomComponent)(E, {}, !0),
                    e.fetchAnswer(t, function () {
                      (document.querySelector(".rcw-sender").style.display =
                        "none"),
                        Object(f.setQuickButtons)([
                          { label: "Ask another question", value: "" },
                        ]);
                    });
                }),
              (e.handleQuickButtonClicked = function () {
                Object(f.setQuickButtons)([]),
                  (document.querySelector(".rcw-sender").style.visibility =
                    "visible"),
                  (document.querySelector(".rcw-sender").style.display =
                    "flex"),
                  Object(f.renderCustomComponent)(S);
              }),
              e
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  g ||
                    (Object(f.renderCustomComponent)(b),
                    Object(f.renderCustomComponent)(L, {}, !0),
                    (g = !0)),
                    document.addEventListener(
                      "DOMContentLoaded",
                      function () {}
                    );
                },
              },
              {
                key: "fetchAnswer",
                value: (function () {
                  var e = Object(c.a)(
                    w().mark(function e(t, r) {
                      return w().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              fetch("https://chatapi.databricks.com/doc_qa", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ question: t }),
                              })
                                .then(function (e) {
                                  e.text().then(function (e) {
                                    var t = JSON.parse(e);
                                    t.related_to_azure_gcp
                                      ? A(!0)
                                      : t.has_answer
                                      ? (_(),
                                        Object(f.renderCustomComponent)(
                                          x,
                                          t,
                                          !0
                                        ))
                                      : A(!1);
                                  });
                                })
                                .catch(function () {
                                  A(!1);
                                })
                                .finally(function () {
                                  _(), r();
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    { className: "LLMAssistantWidget" },
                    o.a.createElement(f.Widget, {
                      handleNewUserMessage: this.handleNewUserMessage,
                      handleQuickButtonClicked: this.handleQuickButtonClicked,
                      title: "Databricks AI Assistant",
                      subtitle: "",
                      profileAvatar:
                        "https://agao00.github.io/static/media/dblogo.56ac0149.jpg",
                      titleAvatar:
                        "https://agao00.github.io/static/media/dblogo.56ac0149.jpg",
                      launcher: function (e) {
                        return (function (e) {
                          var t = Object(n.useState)(!1),
                            r = Object(s.a)(t, 2),
                            a = r[0],
                            i = r[1];
                          return o.a.createElement(
                            "button",
                            {
                              className: "rcw-custom-launcher",
                              onClick: function () {
                                i(!a),
                                  e(),
                                  j.observe(
                                    document.querySelector("#rcw-root"),
                                    { subtree: !0, childList: !0 }
                                  );
                              },
                            },
                            a
                              ? o.a.createElement("img", {
                                  className: "rcw-close-launcher",
                                  src: "https://agao00.github.io/static/media/chevron-down.041d46cd.svg",
                                  alt: "close",
                                })
                              : o.a.createElement("img", {
                                  className: "rcw-open-launcher",
                                  src: "https://agao00.github.io/static/media/speech-bubble-plus.6df5d2c6.svg",
                                  alt: "open",
                                })
                          );
                        })(e);
                      },
                    })
                  );
                },
              },
            ]),
            r
          );
        })(n.Component),
        I = document.getElementById("rcw-root");
      i.a.render(o.a.createElement(q, null), I);
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.e774b96f.chunk.js.map
