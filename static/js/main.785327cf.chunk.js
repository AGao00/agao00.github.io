(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    13: function (e, t, n) {
      e.exports = n(21);
    },
    19: function (e, t, n) {},
    21: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        o = n(9),
        i = n.n(o),
        c = (n(19), n(7)),
        s = n(12),
        u = n(3),
        l = n(4),
        h = n(6),
        d = n(5),
        f = n(1),
        m = n(10),
        p = n(11),
        v = n(2),
        g = n.n(v);
      n(20);
      function y() {
        y = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
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
          s = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: k(e, n, c) }), i;
        }
        function l(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
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
        g && g !== t && n.call(g, o) && (p = g);
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
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var s = l(e[a], e, o);
                    if ("throw" !== s.type) {
                      var u = s.arg,
                        h = u.value;
                      return h && "object" == typeof h && n.call(h, "__await")
                        ? t.resolve(h.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(h).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(s.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return A();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = O(i, n);
                if (c) {
                  if (c === h) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var s = l(e, t, n);
              if ("normal" === s.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), s.arg === h)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function O(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                O(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              h
            );
          var a = l(r, e.iterator, t.arg);
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
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
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
          r(w, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: f, configurable: !0 }),
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
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
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
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
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
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
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
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
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
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), j(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    j(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      function w() {
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
      var b = new MutationObserver(function () {
        document.contains(
          document.querySelector(".rcw-conversation-container .rcw-header")
        ) &&
          (w(),
          window.addEventListener("resize", w, !0),
          (g()(".rcw-disclaimer-info").parent()[0].style.height = "49px"),
          b.disconnect());
      });
      new IntersectionObserver(
        function (e) {
          e[0].isIntersecting
            ? g()(".rcw-widget-container").css("position", "absolute")
            : e[0].isIntersecting ||
              g()(".rcw-widget-container").css("position", "fixed");
        },
        { threshold: [0] }
      );
      function E() {
        document.querySelector(".rcw-loading") &&
          document.querySelector(".rcw-loading").parentElement.remove();
      }
      function k(e) {
        E(),
          e
            ? Object(f.renderCustomComponent)(C, {}, !0)
            : Object(f.renderCustomComponent)(A, {}, !0);
      }
      var O = (function (e) {
          Object(h.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
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
            n
          );
        })(r.Component),
        x = (function (e) {
          Object(h.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
              {
                key: "render",
                value: function () {
                  return a.a.createElement("div", {
                    className: "rcw-response rcw-message-text rcw-loading",
                  });
                },
              },
            ]),
            n
          );
        })(r.Component),
        j = (function (e) {
          Object(h.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(l.a)(n, [
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
            n
          );
        })(r.Component);
      function L(e) {
        var t = e.answer,
          n = e.sources;
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement("div", {
            className: "rcw-message-text",
            dangerouslySetInnerHTML: { __html: p.sanitize(m.marked.parse(t)) },
          }),
          n.length > 0
            ? a.a.createElement(
                "div",
                { className: "rcw-sources" },
                a.a.createElement(
                  "div",
                  { className: "rcw-sources-title" },
                  "Source".concat(1 === n.length ? "" : "s")
                ),
                n.map(function (e) {
                  return a.a.createElement(j, { url: e });
                })
              )
            : null
        );
      }
      function N() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "Hi, I'm the Databricks AI assistant. You can ask me any questions you have about using Databricks. ",
            a.a.createElement("br", null),
            a.a.createElement("br", null),
            " Examples: ",
            a.a.createElement("br", null),
            " 1. How do I load files into Databricks? ",
            a.a.createElement("br", null),
            " ",
            "2. How do you deploy my model for serving? ",
            a.a.createElement("br", null),
            " 3. How can I convert my files to parquet files?"
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
            "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in",
            " ",
            a.a.createElement(j, {
              url: "https://docs.databricks.com",
              name: "Databricks Documentation",
            }),
            " ",
            "or",
            " ",
            a.a.createElement(j, {
              url: "https://kb.databricks.com",
              name: "Databricks Knowledge Base",
            })
          )
        );
      }
      function C() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for",
            " ",
            a.a.createElement(j, {
              url: "https://learn.microsoft.com/en-us/azure/databricks",
              name: "Databricks on Azure",
            }),
            " ",
            "and",
            " ",
            a.a.createElement(j, {
              url: "https://docs.gcp.databricks.com",
              name: "Databricks on GCP",
            }),
            " ",
            "in the meantime."
          )
        );
      }
      function S() {
        return a.a.createElement("hr", { className: "rcw-question-separator" });
      }
      var _ = (function (e) {
          Object(h.a)(n, e);
          var t = Object(d.a)(n);
          function n() {
            var e;
            Object(u.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).handleNewUserMessage =
                (function () {
                  var t = Object(c.a)(
                    y().mark(function t(n) {
                      return y().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                Object(f.renderCustomComponent)(x, {}, !0),
                                (document.querySelector(
                                  ".rcw-sender"
                                ).style.visibility = "hidden"),
                                (t.next = 4),
                                e.fetchAnswer(n, function () {
                                  (document.querySelector(
                                    ".rcw-sender"
                                  ).style.display = "none"),
                                    Object(f.setQuickButtons)([
                                      {
                                        label: "Ask another question",
                                        value: "",
                                      },
                                    ]);
                                })
                              );
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()),
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
            Object(l.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  Object(f.renderCustomComponent)(O),
                    Object(f.renderCustomComponent)(N, {}, !0),
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
                    y().mark(function e(t, n) {
                      var r = this;
                      return y().wrap(function (e) {
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
                                      ? k(!0)
                                      : t.has_answer
                                      ? (E(),
                                        Object(f.renderCustomComponent)(
                                          L,
                                          t,
                                          !0
                                        ),
                                        r.setState({
                                          hasAskedRelevantQuestion: !0,
                                        }))
                                      : k(!1);
                                  });
                                })
                                .catch(function () {
                                  k(!1);
                                })
                                .finally(function () {
                                  E(), n();
                                });
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
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
                          title: "Databricks AI assistant",
                          subtitle: "",
                          profileAvatar:
                            "https://agao00.github.io/static/media/dblogo.56ac0149.jpg",
                          titleAvatar:
                            "https://agao00.github.io/static/media/dblogo.56ac0149.jpg",
                          launcher: function (e) {
                            return (function (e) {
                              var t = Object(r.useState)(!1),
                                n = Object(s.a)(t, 2),
                                o = n[0],
                                i = n[1];
                              return a.a.createElement(
                                "button",
                                {
                                  className: "rcw-custom-launcher",
                                  onClick: function () {
                                    i(!o),
                                      e(),
                                      b.observe(
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
                                  : a.a.createElement(
                                      a.a.Fragment,
                                      null,
                                      a.a.createElement("img", {
                                        className: "rcw-open-launcher",
                                        src: "https://agao00.github.io/static/media/speech-bubble-plus.6df5d2c6.svg",
                                        alt: "open",
                                      }),
                                      a.a.createElement(
                                        "div",
                                        { className: "rcw-tooltip" },
                                        "Ask a question to Databricks AI assistant"
                                      )
                                    )
                              );
                            })(e);
                          },
                        })
                      );
                },
              },
            ]),
            n
          );
        })(r.Component),
        I = document.getElementById("rcw-root");
      i.a.render(a.a.createElement(_, null), I);
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.5b0faef3.chunk.js.map
