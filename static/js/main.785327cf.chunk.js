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
        o = r(6),
        i = r.n(o),
        c = (r(19), r(3)),
        s = r(7),
        u = r(8),
        l = r(12),
        h = r(11),
        d = r(4),
        m = r(1),
        f = r(9),
        p = r(10),
        v = r(2),
        w = r.n(v);
      r(20);
      function g() {
        g = function () {
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
            c = new N(a || []);
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
        function m() {}
        function f() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          w = v && v(v(j([])));
        w && w !== t && r.call(w, o) && (p = w);
        var y = (f.prototype = d.prototype = Object.create(p));
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
                var c = x(i, r);
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
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
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
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function L(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function j(e) {
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
          (m.prototype = f),
          n(y, "constructor", { value: f, configurable: !0 }),
          n(f, "constructor", { value: m, configurable: !0 }),
          (m.displayName = s(f, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), s(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
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
          b(y),
          s(y, c, "Generator"),
          s(y, o, function () {
            return this;
          }),
          s(y, "toString", function () {
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
          (e.values = j),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
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
                  return this.complete(r.completion, r.afterLoc), L(r), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    L(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      function y() {
        w()(window).height() >= 850
          ? (w()(".rcw-conversation-container").height("620px"),
            w()(".rcw-messages-container").height("502px"))
          : (w()(".rcw-conversation-container").height(
              "".concat(w()(window).height() - 210, "px")
            ),
            w()(".rcw-messages-container").height(
              "".concat(w()(window).height() - 328, "px")
            ));
      }
      var b = new MutationObserver(function () {
          document.contains(
            document.querySelector(".rcw-conversation-container .rcw-header")
          ) &&
            (y(),
            window.addEventListener("resize", y, !0),
            (w()(".rcw-disclaimer-info").parent()[0].style.height = "49px"),
            b.disconnect());
        }),
        E = new IntersectionObserver(
          function (e) {
            e[0].isIntersecting
              ? w()(".rcw-widget-container").css("bottom", "122px")
              : e[0].isIntersecting ||
                w()(".rcw-widget-container").css("bottom", "32px");
          },
          { threshold: [0] }
        );
      function k(e) {
        e
          ? Object(m.renderCustomComponent)(C, {}, !0)
          : Object(m.renderCustomComponent)(A, {}, !0);
      }
      var x =
          "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for Databricks on Azure and Databricks on GCP in the meantime.",
        O =
          "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in Databricks Documentation or Databricks Knowledge Base";
      function L() {
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
      }
      function N() {
        return a.a.createElement("div", {
          className: "rcw-response rcw-message-text rcw-loading",
        });
      }
      function j() {
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
            a.a.createElement(D, {
              url: "https://docs.databricks.com",
              name: "Databricks Documentation",
            }),
            " ",
            "or",
            " ",
            a.a.createElement(D, {
              url: "https://kb.databricks.com",
              name: "Databricks Knowledge Base",
            }),
            "."
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
            a.a.createElement(D, {
              url: "https://learn.microsoft.com/en-us/azure/databricks",
              name: "Databricks on Azure",
            }),
            " ",
            "and",
            " ",
            a.a.createElement(D, {
              url: "https://docs.gcp.databricks.com",
              name: "Databricks on GCP",
            }),
            " ",
            "in the meantime."
          )
        );
      }
      function S() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text rcw-rate-limited" },
            "There was a network error. Please try again later."
          )
        );
      }
      function _() {
        return a.a.createElement("hr", { className: "rcw-question-separator" });
      }
      function D(e) {
        var t = e.url,
          r = e.name;
        return a.a.createElement(
          "a",
          {
            href: t,
            className: "rcw-link",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          r || t
        );
      }
      function q(e) {
        var t = e.answer,
          r = e.sources;
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement("div", {
            className: "rcw-message-text",
            dangerouslySetInnerHTML: { __html: p.sanitize(f.marked.parse(t)) },
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
                  return a.a.createElement(D, { url: e });
                })
              )
            : null
        );
      }
      var I = (function (e) {
          Object(l.a)(r, e);
          var t = Object(h.a)(r);
          function r() {
            var e;
            Object(s.a)(this, r);
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).history = []),
              (e.handleNewUserMessage = (function () {
                var t = Object(c.a)(
                  g().mark(function t(r) {
                    return g().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              Object(m.renderCustomComponent)(N, {}, !0),
                              (document.querySelector(
                                ".rcw-sender"
                              ).style.visibility = "hidden"),
                              (t.next = 4),
                              e.fetchAnswer(r)
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
                Object(m.setQuickButtons)([]),
                  (document.querySelector(".rcw-sender").style.visibility =
                    "visible"),
                  (document.querySelector(".rcw-sender").style.display =
                    "flex"),
                  Object(m.renderCustomComponent)(_);
              }),
              e
            );
          }
          return (
            Object(u.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  Object(m.renderCustomComponent)(L),
                    Object(m.renderCustomComponent)(j, {}, !0),
                    document.addEventListener("DOMContentLoaded", function () {
                      E.observe(document.querySelector("footer#footer"));
                    });
                },
              },
              {
                key: "getChatHistory",
                value: function () {
                  return (
                    (this.history = this.history.slice(-4)),
                    this.history.slice(0, -1)
                  );
                },
              },
              {
                key: "fetchAnswer",
                value: (function () {
                  var e = Object(c.a)(
                    g().mark(function e(t) {
                      var r, n, a, o, i, c;
                      return g().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    question: {
                                      question: t,
                                      timestamp: new Date().getTime(),
                                    },
                                    answer: { answer: "", timestamp: 0 },
                                  }),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  fetch(
                                    "https://chatapi.databricks.com/doc_qa",
                                    {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        question: t,
                                        history: this.getChatHistory(),
                                      }),
                                    }
                                  )
                                );
                              case 4:
                                (a = e.sent), (e.next = 9);
                                break;
                              case 7:
                                (e.prev = 7), (e.t0 = e.catch(1));
                              case 9:
                                if (
                                  !(null === (r = a) || void 0 === r
                                    ? void 0
                                    : r.ok)
                                ) {
                                  e.next = 20;
                                  break;
                                }
                                return (e.next = 12), a.text();
                              case 12:
                                (o = e.sent),
                                  (i = JSON.parse(o)),
                                  (n.answer.timestamp = i.timestamp),
                                  (c = i.related_to_azure_gcp) || !i.has_answer
                                    ? (k(c), (n.answer.answer = c ? x : O))
                                    : (Object(m.renderCustomComponent)(
                                        q,
                                        i,
                                        !0
                                      ),
                                      (n.answer.answer = i.answer)),
                                  this.history.push(n),
                                  (e.next = 21);
                                break;
                              case 20:
                                a.status >= 400
                                  ? Object(m.renderCustomComponent)(S, {}, !0)
                                  : k(!1);
                              case 21:
                                document.querySelector(".rcw-loading") &&
                                  document
                                    .querySelector(".rcw-loading")
                                    .parentElement.remove(),
                                  (document.querySelector(
                                    ".rcw-sender"
                                  ).style.display = "none"),
                                  Object(m.setQuickButtons)([
                                    {
                                      label: "Ask another question",
                                      value: "",
                                    },
                                  ]);
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function (t) {
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
                        a.a.createElement(m.Widget, {
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
                              var t = Object(n.useState)(!1),
                                r = Object(d.a)(t, 2),
                                o = r[0],
                                i = r[1];
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
                                        "Ask the Databricks AI Assistant a question"
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
            r
          );
        })(n.Component),
        P = document.getElementById("rcw-root");
      i.a.render(a.a.createElement(I, null), P);
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.cab5131b.chunk.js.map
