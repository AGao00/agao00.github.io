(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function (e, t, r) {
      e.exports = r(18);
    },
    16: function (e, t, r) {},
    18: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r.n(n),
        o = r(7),
        c = r.n(o),
        i = (r(16), r(2)),
        s = r(4),
        u = r(5),
        l = r(1),
        m = r(8),
        h = r(9),
        d = r(3),
        f = r.n(d),
        p = r(20);
      r(17);
      function v() {
        v = function () {
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
          c = a.asyncIterator || "@@asyncIterator",
          i = a.toStringTag || "@@toStringTag";
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
        } catch (A) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            c = Object.create(o.prototype),
            i = new N(a || []);
          return n(c, "_invoke", { value: k(e, r, i) }), c;
        }
        function l(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        e.wrap = u;
        var m = {};
        function h() {}
        function d() {}
        function f() {}
        var p = {};
        s(p, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(S([])));
        b && b !== t && r.call(b, o) && (p = b);
        var g = (f.prototype = h.prototype = Object.create(p));
        function w(e) {
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
              function c() {
                return new t(function (a, c) {
                  !(function n(a, o, c, i) {
                    var s = l(e[a], e, o);
                    if ("throw" !== s.type) {
                      var u = s.arg,
                        m = u.value;
                      return m && "object" == typeof m && r.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              n("next", e, c, i);
                            },
                            function (e) {
                              n("throw", e, c, i);
                            }
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (u.value = e), c(u);
                            },
                            function (e) {
                              return n("throw", e, c, i);
                            }
                          );
                    }
                    i(s.arg);
                  })(n, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
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
              return _();
            }
            for (r.method = a, r.arg = o; ; ) {
              var c = r.delegate;
              if (c) {
                var i = O(c, r);
                if (i) {
                  if (i === m) continue;
                  return i;
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
                  ((n = r.done ? "completed" : "suspendedYield"), s.arg === m)
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
              m
            );
          var a = l(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), m
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
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
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function S(e) {
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
          return { next: _ };
        }
        function _() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          n(g, "constructor", { value: f, configurable: !0 }),
          n(f, "constructor", { value: d, configurable: !0 }),
          (d.displayName = s(f, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, f)
                : ((e.__proto__ = f), s(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(E.prototype),
          s(E.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          w(g),
          s(g, i, "Generator"),
          s(g, o, function () {
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
          (e.values = S),
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
                this.tryEntries.forEach(j),
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
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    s = r.call(o, "finallyLoc");
                  if (i && s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
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
              var c = o ? o.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(c)
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
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var y = "llm_user_id",
        b = new IntersectionObserver(
          function (e) {
            var t = document.querySelector(".rcw-widget-container");
            t &&
              (e[0].isIntersecting
                ? (t.style.bottom = "122px")
                : e[0].isIntersecting || (t.style.bottom = "32px"));
          },
          { threshold: [0] }
        );
      function g(e) {
        var t = f.a.get(y);
        return t
          ? Object(u.a)(
              Object(u.a)({}, e),
              {},
              { Cookie: "".concat(y, "=").concat(t) }
            )
          : e;
      }
      function w(e, t, r) {
        var n = t.question,
          a = t.answer,
          o = t.timestamp;
        r ||
          (Object(l.addUserMessage)(e ? "\ud83d\udc4d" : "\ud83d\udc4e"),
          fetch("https://chatapi.databricks.com/feedback", {
            method: "POST",
            headers: g({ "Content-Type": "application/json" }),
            body: JSON.stringify({
              question: n,
              answer: a,
              answer_timestamp: o,
              reaction: e ? "thumb_up" : "thumb_down",
            }),
          }).catch(function () {}),
          Object(l.addResponseMessage)("Thank you for your feedback."));
      }
      var E = {
        AZURE_GCP_ANSWER:
          "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for Databricks on Azure and Databricks on GCP in the meantime.",
        NO_ANSWER:
          "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in Databricks Documentation or Databricks Knowledge Base",
      };
      function k() {
        return a.a.createElement("div", {
          className: "rcw-response rcw-message-text rcw-loading",
        });
      }
      function O() {
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
            " 3. How can I convert my files to parquet files? ",
            a.a.createElement("br", null),
            a.a.createElement("br", null),
            a.a.createElement(
              "div",
              { className: "rcw-disclaimer" },
              "Disclaimer: I may display inaccurate information that doesn\u2019t represent Databricks views."
            )
          )
        );
      }
      function x() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "Sorry, I can't find an answer to the question you asked. But you may be able to find the answer in",
            " ",
            a.a.createElement(_, {
              url: "https://docs.databricks.com",
              name: "Databricks Documentation",
            }),
            " ",
            "or",
            " ",
            a.a.createElement(_, {
              url: "https://kb.databricks.com",
              name: "Databricks Knowledge Base",
            }),
            "."
          )
        );
      }
      function j() {
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement(
            "div",
            { className: "rcw-message-text" },
            "As an AI assistant, I'm currently trained on documentation and knowledge base about Databricks on AWS. Please refer to the documentation for",
            " ",
            a.a.createElement(_, {
              url: "https://learn.microsoft.com/en-us/azure/databricks",
              name: "Databricks on Azure",
            }),
            " ",
            "and",
            " ",
            a.a.createElement(_, {
              url: "https://docs.gcp.databricks.com",
              name: "Databricks on GCP",
            }),
            " ",
            "in the meantime."
          )
        );
      }
      function N() {
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
      function S() {
        return a.a.createElement("hr", { className: "rcw-question-separator" });
      }
      function _(e) {
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
      function A(e) {
        var t = e.answer,
          r = e.sources;
        return a.a.createElement(
          "div",
          { className: "rcw-response" },
          a.a.createElement("div", {
            className: "rcw-message-text",
            dangerouslySetInnerHTML: { __html: h.sanitize(m.marked.parse(t)) },
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
                  return a.a.createElement(_, { url: e });
                })
              )
            : null
        );
      }
      function L(e) {
        var t = e.question,
          r = e.answer,
          o = e.timestamp,
          c = Object(n.useState)(!1),
          i = Object(s.a)(c, 2),
          u = i[0],
          l = i[1];
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            "div",
            {
              className: "rcw-response rcw-feedback rcw-thumbs-up",
              onClick: function () {
                w(!0, { question: t, answer: r, timestamp: o }, u), l(!0);
              },
            },
            a.a.createElement(
              "span",
              { role: "img", "aria-label": "thumbs up" },
              "\ud83d\udc4d"
            )
          ),
          a.a.createElement(
            "div",
            {
              className: "rcw-response rcw-feedback rcw-thumbs-down",
              onClick: function () {
                w(!1, { question: t, answer: r, timestamp: o }, u), l(!0);
              },
            },
            a.a.createElement(
              "span",
              { role: "img", "aria-label": "thumbs down" },
              "\ud83d\udc4e"
            )
          )
        );
      }
      function C() {
        var e = Object(n.useState)(!1),
          t = Object(s.a)(e, 2),
          r = t[0],
          o = t[1],
          c = Object(n.useRef)([]);
        function u(e) {
          return m.apply(this, arguments);
        }
        function m() {
          return (m = Object(i.a)(
            v().mark(function e(t) {
              var r, n, a, o, i, s;
              return v().wrap(
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
                          fetch("https://chatapi.databricks.com/doc_qa", {
                            method: "POST",
                            headers: g({ "Content-Type": "application/json" }),
                            body: JSON.stringify({
                              question: t,
                              history: c.current,
                            }),
                          })
                        );
                      case 4:
                        (a = e.sent), (e.next = 9);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(1));
                      case 9:
                        if (
                          !(null === (r = a) || void 0 === r ? void 0 : r.ok)
                        ) {
                          e.next = 21;
                          break;
                        }
                        return (e.next = 12), a.text();
                      case 12:
                        (o = e.sent),
                          (i = JSON.parse(o)),
                          (n.answer.timestamp = i.timestamp),
                          (s = i.related_to_azure_gcp) || !i.has_answer
                            ? (s
                                ? Object(l.renderCustomComponent)(j, {}, !0)
                                : Object(l.renderCustomComponent)(x, {}, !0),
                              (n.answer.answer = s
                                ? E.AZURE_GCP_ANSWER
                                : E.NO_ANSWER))
                            : (Object(l.renderCustomComponent)(A, i, !0),
                              i.sources.length > 0 &&
                                Object(l.renderCustomComponent)(
                                  L,
                                  {
                                    question: t,
                                    answer: i.answer,
                                    timestamp: i.timestamp,
                                  },
                                  !0
                                ),
                              (n.answer.answer = i.answer)),
                          c.current.push(n),
                          c.current.length > 3 &&
                            (c.current = c.current.slice(-3)),
                          (e.next = 22);
                        break;
                      case 21:
                        Object(l.renderCustomComponent)(N, {}, !0);
                      case 22:
                        document
                          .querySelectorAll(".rcw-loading")
                          .forEach(function (e) {
                            e.parentElement.remove();
                          }),
                          (document.querySelector(".rcw-sender").style.display =
                            "none"),
                          Object(l.setQuickButtons)([
                            { label: "Ask another question", value: "" },
                          ]);
                      case 25:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7]]
              );
            })
          )).apply(this, arguments);
        }
        function h() {
          return (h = Object(i.a)(
            v().mark(function e(t) {
              return v().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        Object(l.renderCustomComponent)(k, {}, !0),
                        (document.querySelector(
                          ".rcw-sender"
                        ).style.visibility = "hidden"),
                        (e.next = 4),
                        u(t)
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          Object(n.useEffect)(function () {
            function e() {
              return (e = Object(i.a)(
                v().mark(function e() {
                  var t, r;
                  return v().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch("https://chatapi.databricks.com/flags", {
                                method: "POST",
                                headers: g({
                                  "Content-Type": "application/json",
                                  "X-Webpage-Url": window.location.href,
                                }),
                                body: JSON.stringify({}),
                              })
                            );
                          case 3:
                            return (t = e.sent), (e.next = 6), t.json();
                          case 6:
                            (r = e.sent),
                              o(r.assistant_enabled || !0),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(0)), o(!0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              )).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })(),
              f.a.get(y) || f.a.set(y, Object(p.a)());
          }, []),
          Object(n.useEffect)(
            function () {
              if (r) {
                Object(l.renderCustomComponent)(O, {}, !0);
                var e = document.querySelector("footer#footer");
                e && b.observe(e);
              }
            },
            [r]
          ),
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i) ||
          !r
            ? null
            : a.a.createElement(
                "div",
                { className: "LLMAssistantWidget" },
                a.a.createElement(l.Widget, {
                  handleNewUserMessage: function (e) {
                    return h.apply(this, arguments);
                  },
                  handleQuickButtonClicked: function () {
                    Object(l.setQuickButtons)([]),
                      (document.querySelector(".rcw-sender").style.visibility =
                        "visible"),
                      (document.querySelector(".rcw-sender").style.display =
                        "flex"),
                      document.querySelector("input.rcw-new-message").focus(),
                      Object(l.renderCustomComponent)(S);
                  },
                  title: "Databricks AI assistant",
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
                        c = r[1];
                      return (
                        Object(n.useEffect)(
                          function () {
                            o &&
                              fetch("https://chatapi.databricks.com/metrics", {
                                method: "POST",
                                headers: g({
                                  "Content-Type": "application/json",
                                }),
                                body: JSON.stringify({
                                  event: "opened_assistant",
                                }),
                              }).catch(function () {});
                          },
                          [o]
                        ),
                        a.a.createElement(
                          "button",
                          {
                            className: "rcw-custom-launcher",
                            onClick: function () {
                              c(!o), e();
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
                                  "Ask the Databricks AI assistant a question."
                                )
                              )
                        )
                      );
                    })(e);
                  },
                })
              )
        );
      }
      var q = document.getElementById("rcw-root");
      c.a.render(a.a.createElement(C, null), q);
    },
  },
  [[10, 1, 2]],
]);
//# sourceMappingURL=main.785327cf.chunk.js.map
