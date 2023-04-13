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
        o = n(6),
        i = n.n(o),
        c = (n(19), n(3)),
        s = n(7),
        u = n(8),
        l = n(12),
        h = n(11),
        d = n(4),
        m = n(1),
        f = n(9),
        p = n(10),
        v = n(2),
        y = n.n(v);
      n(20);
      function g() {
        g = function () {
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
            c = new j(a || []);
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
        function m() {}
        function f() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(N([])));
        y && y !== t && n.call(y, o) && (p = y);
        var w = (f.prototype = d.prototype = Object.create(p));
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
                var c = x(i, n);
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
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
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
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
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
          (m.prototype = f),
          r(w, "constructor", { value: f, configurable: !0 }),
          r(f, "constructor", { value: m, configurable: !0 }),
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
          (j.prototype = {
            constructor: j,
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
                  return this.complete(n.completion, n.afterLoc), L(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    L(n);
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
      var b = new MutationObserver(function () {
          document.contains(
            document.querySelector(".rcw-conversation-container .rcw-header")
          ) &&
            (w(),
            window.addEventListener("resize", w, !0),
            (y()(".rcw-disclaimer-info").parent()[0].style.height = "49px"),
            b.disconnect());
        }),
        E = new IntersectionObserver(
          function (e) {
            e[0].isIntersecting
              ? y()(".rcw-widget-container").css("bottom", "122px")
              : e[0].isIntersecting ||
                y()(".rcw-widget-container").css("bottom", "32px");
          },
          { threshold: [0] }
        );
      function k() {
        document.querySelector(".rcw-loading") &&
          document.querySelector(".rcw-loading").parentElement.remove();
      }
      function x(e) {
        k(),
          e
            ? Object(m.renderCustomComponent)(S, {}, !0)
            : Object(m.renderCustomComponent)(C, {}, !0);
      }
      var O =
          "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for Databricks on Azure and Databricks on GCP in the meantime.",
        L =
          "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in Databricks Documentation or Databricks Knowledge Base";
      function j() {
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
      function A() {
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
      function C() {
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
            })
          )
        );
      }
      function S() {
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
      function _() {
        return a.a.createElement("hr", { className: "rcw-question-separator" });
      }
      function D(e) {
        var t = e.url,
          n = e.name;
        return a.a.createElement(
          "a",
          {
            href: t,
            className: "rcw-link",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          n || t
        );
      }
      function q(e) {
        var t = e.answer,
          n = e.sources;
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement("div", {
            className: "rcw-message-text",
            dangerouslySetInnerHTML: { __html: p.sanitize(f.marked.parse(t)) },
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
                  return a.a.createElement(D, { url: e });
                })
              )
            : null
        );
      }
      var I = (function (e) {
          Object(l.a)(n, e);
          var t = Object(h.a)(n);
          function n() {
            var e;
            Object(s.a)(this, n);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(a))).history = []),
              (e.handleNewUserMessage = (function () {
                var t = Object(c.a)(
                  g().mark(function t(n) {
                    return g().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              Object(m.renderCustomComponent)(N, {}, !0),
                              (document.querySelector(
                                ".rcw-sender"
                              ).style.visibility = "hidden"),
                              e.addQuestionToChatHistory(n),
                              (t.next = 5),
                              e.fetchAnswer(n, function () {
                                (document.querySelector(
                                  ".rcw-sender"
                                ).style.display = "none"),
                                  Object(m.setQuickButtons)([
                                    {
                                      label: "Ask another question",
                                      value: "",
                                    },
                                  ]);
                              })
                            );
                          case 5:
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
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  Object(m.renderCustomComponent)(j),
                    Object(m.renderCustomComponent)(A, {}, !0),
                    document.addEventListener("DOMContentLoaded", function () {
                      E.observe(document.querySelector("footer#footer"));
                    });
                },
              },
              {
                key: "addQuestionToChatHistory",
                value: function (e) {
                  this.history.push({
                    question: { question: e, timestamp: new Date().getTime() },
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
                    g().mark(function e(t, n) {
                      var r,
                        a = this;
                      return g().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r = { answer: "", timestamp: 0 }),
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
                                    .then(function (e) {
                                      e.text().then(function (e) {
                                        var t = JSON.parse(e);
                                        (r.timestamp = t.timestamp),
                                          t.related_to_azure_gcp
                                            ? (x(!0), (r.answer = O))
                                            : t.has_answer
                                            ? (k(),
                                              Object(m.renderCustomComponent)(
                                                q,
                                                t,
                                                !0
                                              ),
                                              (r.answer = t.answer))
                                            : (x(!1), (r.answer = L));
                                      });
                                    })
                                    .catch(function () {
                                      x(!1),
                                        (r.answer = L),
                                        (r.timestamp = new Date().getTime());
                                    })
                                    .finally(function () {
                                      (a.history[a.history.length - 1].answer =
                                        r),
                                        k(),
                                        n();
                                    });
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
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
                              var t = Object(r.useState)(!1),
                                n = Object(d.a)(t, 2),
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
        P = document.getElementById("rcw-root");
      i.a.render(a.a.createElement(I, null), P);
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.b1347ae7.chunk.js.map
