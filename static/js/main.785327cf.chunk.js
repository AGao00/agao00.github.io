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
        a = r.n(n),
        o = r(8),
        i = r.n(o),
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
        g = r.n(v);
      r(20);
      function y() {
        y = function () {
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
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
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
        } catch (C) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return n(i, "_invoke", { value: k(e, r, c) }), i;
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (C) {
            return { type: "throw", arg: C };
          }
        }
        e.wrap = u;
        var h = {};
        function d() {}
        function f() {}
        function m() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(N([])));
        g && g !== t && r.call(g, o) && (p = g);
        var w = (m.prototype = d.prototype = Object.create(p));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var s = l(e[a], e, o);
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
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function k(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return A();
            }
            for (r.method = a, r.arg = o; ; ) {
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
          var a = l(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), h
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                h)
              : o
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
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          n(w, "constructor", { value: m, configurable: !0 }),
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
              (e.prototype = Object.create(w)),
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
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(w),
          s(w, c, "Generator"),
          s(w, o, function () {
            return this;
          }),
          s(w, "toString", function () {
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
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    s = r.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), h)
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
                    var a = n.arg;
                    x(r);
                  }
                  return a;
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
      var w = !1;
      var b = (function (e) {
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
                  return a.a.createElement(
                    "div",
                    { className: "rcw-disclaimer-info" },
                    a.a.createElement(
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
                      a.a.createElement("path", {
                        d: "M7.25 11V7h1.5v4h-1.5zM8 4.5A.75.75 0 118 6a.75.75 0 010-1.5z",
                        fill: "currentColor",
                      }),
                      a.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",
                        fill: "currentColor",
                      })
                    ),
                    a.a.createElement(
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
                  return a.a.createElement("div", {
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
                  return a.a.createElement(
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
        g()(window).height() >= 850
          ? (g()(".rcw-conversation-container").height("620px"),
            g()(".rcw-messages-container").height("502px"))
          : (g()(".rcw-conversation-container").height(
              "".concat(g()(window).height() - 210, "px")
            ),
            g()(".rcw-messages-container").height(
              "".concat(g()(window).height() - 328, "px")
            ));
      }
      var j = new MutationObserver(function () {
        document.contains(
          document.querySelector(".rcw-conversation-container .rcw-header")
        ) &&
          (O(),
          window.addEventListener("resize", O, !0),
          (g()(".rcw-disclaimer-info").parent()[0].style.height = "49px"),
          j.disconnect());
      });
      function x(e) {
        var t = e.answer,
          r = e.sources;
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement("div", {
            className: "rcw-message-text",
            dangerouslySetInnerHTML: { __html: p.sanitize(m.marked.parse(t)) },
          }),
          r.length > 0
            ? a.a.createElement(
                "div",
                { className: "rcw-sources" },
                a.a.createElement(
                  "div",
                  { className: "rcw-sources-title" },
                  "Source".concat(1 === r.length ? "" : "s")
                ),
                r.map(function (e) {
                  return a.a.createElement(k, { url: e });
                })
              )
            : null
        );
      }
      function L() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "Hi, I'm Databricks AI Assistant. You can ask me questions you have about using Databricks. ",
            a.a.createElement("br", null),
            a.a.createElement("br", null),
            " Some questions you could try: ",
            a.a.createElement("br", null),
            " 1. How do I load files into Databricks? ",
            a.a.createElement("br", null),
            " 2. How do you deploy my model for serving? ",
            a.a.createElement("br", null),
            " 3. How I convert my files to parquet files?"
          )
        );
      }
      function N() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in",
            " ",
            a.a.createElement(k, {
              url: "https://docs.databricks.com",
              name: "Databricks Documentation",
            }),
            " ",
            "or",
            " ",
            a.a.createElement(k, {
              url: "https://kb.databricks.com",
              name: "Databricks Knowledge Base",
            })
          )
        );
      }
      function A() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for",
            " ",
            a.a.createElement(k, {
              url: "https://learn.microsoft.com/en-us/azure/databricks",
              name: "Databricks on Azure",
            }),
            " ",
            "and",
            " ",
            a.a.createElement(k, {
              url: "https://docs.gcp.databricks.com",
              name: "Databricks on GCP",
            }),
            " ",
            "in the meantime."
          )
        );
      }
      function C() {
        return a.a.createElement("hr", { className: "rcw-question-separator" });
      }
      function S() {
        document.querySelector(".rcw-loading") &&
          document.querySelector(".rcw-loading").parentElement.remove();
      }
      function _(e) {
        S(),
          e
            ? Object(f.renderCustomComponent)(A, {}, !0)
            : Object(f.renderCustomComponent)(N, {}, !0);
      }
      new IntersectionObserver(
        function (e) {
          e[0].isIntersecting
            ? g()(".rcw-widget-container").css("position", "absolute")
            : e[0].isIntersecting ||
              g()(".rcw-widget-container").css("position", "fixed");
        },
        { threshold: [0] }
      );
      var q = (function (e) {
          Object(h.a)(r, e);
          var t = Object(d.a)(r);
          function r() {
            var e;
            Object(u.a)(this, r);
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                receivedFirstMessage: !1,
              }),
              (e.handleNewUserMessage = function (t) {
                Object(f.renderCustomComponent)(E, {}, !0),
                  (document.querySelector(".rcw-sender").style.visibility =
                    "hidden"),
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
                  Object(f.renderCustomComponent)(C);
              }),
              e
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  w ||
                    (Object(f.renderCustomComponent)(b),
                    Object(f.renderCustomComponent)(L, {}, !0),
                    (w = !0)),
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
                    y().mark(function e(t, r) {
                      var n = this;
                      return y().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                fetch("https://chatapi.databricks.com/doc_qa", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    question: t,
                                    is_first_message:
                                      !this.state.receivedFirstMessage,
                                  }),
                                })
                                  .then(function (e) {
                                    e.text().then(function (e) {
                                      var t = JSON.parse(e);
                                      t.related_to_azure_gcp
                                        ? _(!0)
                                        : t.has_answer
                                        ? (S(),
                                          Object(f.renderCustomComponent)(
                                            x,
                                            t,
                                            !0
                                          ))
                                        : _(!1);
                                    });
                                  })
                                  .catch(function () {
                                    _(!1);
                                  })
                                  .finally(function () {
                                    n.setState({ receivedFirstMessage: !0 }),
                                      S(),
                                      r();
                                  });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
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
                  return navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/BlackBerry/i) ||
                    navigator.userAgent.match(/Windows Phone/i)
                    ? null
                    : a.a.createElement(
                        "div",
                        { className: "LLMAssistantWidget" },
                        a.a.createElement(f.Widget, {
                          handleNewUserMessage: this.handleNewUserMessage,
                          handleQuickButtonClicked:
                            this.handleQuickButtonClicked,
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
                                o = r[0],
                                i = r[1];
                              return a.a.createElement(
                                "button",
                                {
                                  className: "rcw-custom-launcher",
                                  onClick: function () {
                                    i(!o),
                                      e(),
                                      j.observe(
                                        document.querySelector("#rcw-root"),
                                        { subtree: !0, childList: !0 }
                                      );
                                  },
                                },
                                o
                                  ? a.a.createElement("img", {
                                      className: "rcw-close-launcher",
                                      src: "https://agao00.github.io/static/media/chevron-down.041d46cd.svg",
                                      alt: "close",
                                    })
                                  : a.a.createElement("img", {
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
      i.a.render(a.a.createElement(q, null), I);
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.a40c99cf.chunk.js.map
