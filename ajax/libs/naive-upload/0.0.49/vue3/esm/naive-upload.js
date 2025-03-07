var Ce = Object.defineProperty;
var ke = (f, e, t) => e in f ? Ce(f, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : f[e] = t;
var c = (f, e, t) => (ke(f, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as P, openBlock as E, createElementBlock as A, unref as w, createElementVNode as _, withModifiers as De, renderSlot as I, normalizeClass as de, normalizeStyle as re, createCommentVNode as L, createBlock as W, resolveDynamicComponent as ae, withCtx as T, Fragment as Z, withDirectives as he, vModelText as ge, createTextVNode as se, createSlots as pe, renderList as ie, createVNode as K, TransitionGroup as Se, toDisplayString as Ae } from "vue";
import { inject as H, reactive as O, getCurrentInstance as fe, shallowRef as N, watch as ne, provide as Be } from "vue-demi";
import _e from "spark-md5";
var q = /* @__PURE__ */ ((f) => (f.\u5168\u81EA\u52A8 = "AT", f.\u624B\u52A8\u6321 = "MT", f.\u534A\u81EA\u52A8 = "AMT", f))(q || {}), X = /* @__PURE__ */ ((f) => (f.\u5361\u7247 = "Card", f.\u6E05\u5355 = "Detailedly", f))(X || {});
class $ {
  constructor(e, t, n, a) {
    c(this, "r");
    c(this, "g");
    c(this, "b");
    c(this, "a");
    c(this, "toString", () => `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`);
    this.r = e, this.g = t, this.b = n, this.a = a;
  }
  static convertFrom(e) {
    return new $(e.r, e.g, e.b, e.a);
  }
}
const te = class {
  constructor() {
    c(this, "build", (e) => (e(this), this));
    c(this, "setup", (e) => (e(this), this));
    c(this, "configCode", "default");
    c(this, "concurrentFile", 3);
    c(this, "concurrentChunkFile", 3);
    c(this, "tip", "\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u5373\u53EF\u4E0A\u4F20");
    c(this, "layout", X.\u5361\u7247);
    c(this, "runMode", q.\u5168\u81EA\u52A8);
    c(this, "enableChunk", !0);
    c(this, "chunkSize", 2097152);
    c(this, "retry", 3);
    c(this, "enableWorker", !0);
    c(this, "readonly", !1);
    c(this, "debug", !1);
    c(this, "alertErrorInfo", !1);
    c(this, "enableDrag", !0);
    c(this, "statusCheckingColor", new $(255, 235, 59, 0.5));
    c(this, "statusUploadingColor", new $(144, 206, 255, 0.5));
    c(this, "statusPausedColor", new $(158, 158, 158, 0.5));
    c(this, "statusPausedSubColor", new $(244, 154, 3, 0.5));
    c(this, "statusDoneColor", new $(76, 175, 80, 0.1));
    c(this, "statusDoneSubColor", new $(3, 169, 244, 0.5));
    c(this, "statusErrorColor", new $(255, 0, 30, 0.35));
    c(this, "statusErrorSubColor", new $(232, 31, 31, 0.5));
    c(this, "dragReadyColor", new $(255, 152, 0, 0.8));
    c(this, "dragMovingColor", new $(255, 152, 0, 0.5));
    c(this, "dragOverColor", new $(255, 87, 34, 0.8));
    c(this, "dragPreparationTime", 800);
    c(this, "dragChangePositionTime", 1e3);
    c(this, "isMobile", /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
      navigator.userAgent
    ));
  }
};
let Y = te;
c(Y, "default", () => new te()), c(Y, "defaultWithConfigCode", (e) => new te().setup((t) => t.configCode = e));
const Le = ["title"], ve = ["multiple", "accept"], $e = { class: "upload-box-content" }, Fe = /* @__PURE__ */ P({
  __name: "FileInput.vue3",
  setup(f) {
    const e = H("upload")();
    O({});
    let t;
    const n = (l) => {
      l && (t = l);
    }, a = (l) => {
      e.limited() || t == null || t.click();
    }, u = (l) => {
      if (t && t.files)
        for (let g = 0; g < t.files.length; g++)
          e.append(t.files[g]);
      t && (t.value = "");
    };
    return (async () => e.getSettings().debug && console.debug("Piece: File Input Component(vue3) \u5DF2\u52A0\u8F7D"))(), (l, g) => (E(), A("div", {
      class: "upload-btn",
      onClick: a,
      title: w(e).getSettings().tip
    }, [
      _("div", {
        onClick: g[0] || (g[0] = De(() => {
        }, ["stop"]))
      }, [
        _("input", {
          type: "file",
          multiple: w(e).getConfig().upperLimit > 1,
          ref: n,
          accept: w(e).getAllowedTypes(),
          onChange: u
        }, null, 40, ve)
      ]),
      _("div", $e, [
        I(l.$slots, "default")
      ])
    ], 8, Le));
  }
});
var C = /* @__PURE__ */ ((f) => (f.\u7535\u5B50\u6587\u6863 = "\u7535\u5B50\u6587\u6863", f.\u7535\u5B50\u8868\u683C = "\u7535\u5B50\u8868\u683C", f.\u6587\u672C\u6587\u4EF6 = "\u6587\u672C\u6587\u4EF6", f.\u56FE\u7247 = "\u56FE\u7247", f.\u97F3\u9891 = "\u97F3\u9891", f.\u89C6\u9891 = "\u89C6\u9891", f.\u538B\u7F29\u5305 = "\u538B\u7F29\u5305", f.\u672A\u77E5 = "\u672A\u77E5", f.\u5916\u94FE\u8D44\u6E90 = "\u5916\u94FE\u8D44\u6E90", f))(C || {});
const Ue = ["title"], Te = {
  key: 0,
  class: "item-body"
}, Pe = { class: "item-image" }, Me = ["src", "alt"], xe = {
  key: 0,
  class: "item-tools"
}, He = {
  key: 1,
  class: "item-sub sub-paused"
}, Ie = {
  key: 2,
  class: "item-sub sub-done"
}, Oe = {
  key: 3,
  class: "item-sub sub-error"
}, be = /* @__PURE__ */ P({
  __name: "SelectedFileInfo.vue3",
  props: {
    key: null,
    selectedFile: null,
    readyDrag: { type: Boolean },
    startDrag: { type: Boolean },
    dragging: { type: Boolean },
    dragover: { type: Boolean }
  },
  emits: ["setContainerRef", "mouseDown", "mouseUp", "mouseEnter", "mouseLeave"],
  setup(f, { emit: e }) {
    const t = f, { proxy: n } = fe(), a = H("upload")();
    let u = O({
      hover: !1,
      container: {
        style: () => `item-container ${t.selectedFile.done && !a.getSettings().readonly ? " item-done" : ""} ${t.selectedFile.error ? " item-error" : ""} ${u.hover && !u.rename.active && !t.selectedFile.checking && !t.selectedFile.uploading && !t.readyDrag && !t.startDrag ? " item-hover" : ""} ${t.selectedFile.checking ? " item-checking" : ""} ${t.selectedFile.uploading ? " item-uploading" : ""} ${t.selectedFile.canceled ? " item-canceled" : ""} ${t.selectedFile.paused ? " item-paused" : ""} ${t.readyDrag ? " item-ready-drag" : ""} ${t.dragging ? " item-dragging" : ""} ${t.dragover ? " item-drag-over" : ""}`,
        styleVar: () => ({
          "--statusCheckingColor": a.getSettings().statusCheckingColor.toString(),
          "--statusUploadingColor": a.getSettings().statusUploadingColor.toString(),
          "--statusPausedColor": a.getSettings().statusPausedColor.toString(),
          "--statusPausedSubColor": a.getSettings().statusPausedSubColor.toString(),
          "--statusDoneColor": a.getSettings().statusDoneColor.toString(),
          "--statusDoneSubColor": a.getSettings().statusDoneSubColor.toString(),
          "--statusErrorColor": a.getSettings().statusErrorColor.toString(),
          "--statusErrorSubColor": a.getSettings().statusErrorSubColor.toString(),
          "--dragPreparationTime": `${(a.getSettings().dragPreparationTime / 1e3).toFixed(2)}s`,
          "--dragChangePositionTime": `${(a.getSettings().dragChangePositionTime / 1e3).toFixed(2)}s`,
          "--dragReadyColor": a.getSettings().dragReadyColor.toString(),
          "--dragMovingColor": a.getSettings().dragMovingColor.toString(),
          "--dragOverColor": a.getSettings().dragOverColor.toString()
        }),
        info: () => `${t.selectedFile.done ? "\u4E0A\u4F20\u6210\u529F" : ""} ${t.selectedFile.error ? t.selectedFile.errorMessage : ""} ${t.selectedFile.paused ? "\u5DF2\u6682\u505C" : ""}`
      },
      loading: {
        show: () => !u.rename.active && (t.selectedFile.checking || t.selectedFile.uploading),
        info: () => `${t.selectedFile.checking ? "\u626B\u63CF\u4E2D..." + t.selectedFile.percent + "%" : ""} ${t.selectedFile.uploading ? "\u4E0A\u4F20\u4E2D..." + t.selectedFile.percent + "%" : ""}`
      },
      tools: {
        show: () => u.hover && t.dragging === !1 && !u.rename.active && !t.selectedFile.checking && !t.selectedFile.uploading
      },
      rename: {
        enable: () => !t.selectedFile.uploading,
        active: !1,
        value: ""
      },
      view: {
        enable: () => {
          switch (t.selectedFile.fileType) {
            case C.\u56FE\u7247:
            case C.\u97F3\u9891:
              return t.selectedFile.extensionLower !== ".flac";
            case C.\u89C6\u9891:
              return !0;
            case C.\u6587\u672C\u6587\u4EF6:
              return !0;
            case C.\u7535\u5B50\u6587\u6863:
              return t.selectedFile.extensionLower === ".pdf" || t.selectedFile.extensionLower === ".doc" || t.selectedFile.extensionLower === ".docx";
            default:
              return !1;
          }
        }
      },
      save: {
        enable: () => !0
      }
    }), l;
    const g = (o) => {
      o && e("setContainerRef", o);
    }, p = (o) => {
      o && (l = o);
    }, k = (o) => {
      t.readyDrag || t.startDrag ? (e("mouseEnter", o), u.hover = !1) : u.hover = !0;
    }, b = (o) => {
      (t.readyDrag || t.startDrag) && e("mouseLeave", o), u.hover = !1;
    }, y = (o) => {
      e("mouseDown", o);
    }, m = (o) => {
      e("mouseUp", o);
    }, F = () => {
      u.rename.active = !0, n.$nextTick(() => {
        l && l.focus();
      });
    }, D = (o) => {
      o.key == "Enter" && h();
    }, h = () => {
      a.rename(t.selectedFile.token, u.rename.value).then(() => {
        u.rename.active = !1;
      }).catch(() => {
        u.rename.active = !1;
      });
    }, d = () => {
      const o = a.getRawFile(t.selectedFile), r = "margin:0px;text-align: center;display: flex;flex-direction: row;justify-content: center;align-items: center";
      switch (t.selectedFile.fileType) {
        case C.\u56FE\u7247:
          let B = window.open();
          B == null || B.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${r};background-color: black;"><img style="max-width: 100%;max-height: 100%;" src="${o.objectURL}" alt="${t.selectedFile.fullname()}"></body>`
          );
          break;
        case C.\u97F3\u9891:
          if (t.selectedFile.extensionLower === ".flac")
            return;
          let v = window.open();
          v == null || v.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${r};background-color: black;"><audio style="max-width: 100%;max-height: 100%;" src="${o.objectURL}" controls="controls">\u62B1\u6B49, \u6682\u4E0D\u652F\u6301</audio></body>`
          );
          break;
        case C.\u89C6\u9891:
          let U = window.open();
          U == null || U.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${r};background-color: black;"><video style="max-width: 100%;max-height: 100%;" src="${o.objectURL}" controls="controls">\u62B1\u6B49, \u6682\u4E0D\u652F\u6301</video></body>`
          );
          break;
        default:
          let Q = window.open();
          Q == null || Q.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${r};"><object style="max-width: 100%;max-height: 100%;" data="${o.objectURL}" type="${t.selectedFile.extensionLower === ".txt" ? "text/plain" : t.selectedFile.extensionLower === ".pdf" ? "application/pdf" : "application/octet-stream"}" width="100%" height="100%"><iframe src="${o.objectURL}" width="100%" height="100%" ></iframe></object></body>`
          );
          break;
      }
    }, s = () => {
      const o = a.getRawFile(t.selectedFile), r = document.createElement("a");
      r.style.display = "none", r.href = a.getDownloadUrl(t.selectedFile), o.file && (r.download = t.selectedFile.fullname()), document.body.appendChild(r), r.click(), document.body.removeChild(r);
    }, i = () => {
      a.remove(t.selectedFile.token);
    };
    return (async () => a.getSettings().debug && console.debug("Piece: Selected File Info Component(vue3) \u5DF2\u52A0\u8F7D"))(), (o, r) => (E(), A("div", {
      class: de(w(u).container.style()),
      style: re(w(u).container.styleVar()),
      title: w(u).container.info(),
      onMouseenter: k,
      onMouseleave: b,
      onMousedown: y,
      onMouseup: m,
      onTouchstart: y,
      onTouchend: m,
      onTouchcancel: m,
      ref: g
    }, [
      t.selectedFile.canceled ? L("", !0) : (E(), A("div", Te, [
        _("div", Pe, [
          _("img", {
            src: t.selectedFile.thumbnail,
            loading: "lazy",
            alt: t.selectedFile.fullname()
          }, null, 8, Me)
        ]),
        w(u).tools.show() ? (E(), A("span", xe, [
          w(u).rename.enable() && !w(a).getSettings().readonly ? (E(), A("span", {
            key: 0,
            class: "upload-icon icon-rename",
            title: "\u91CD\u547D\u540D",
            onClick: r[0] || (r[0] = (B) => F())
          })) : L("", !0),
          w(u).view.enable() ? (E(), A("span", {
            key: 1,
            class: "upload-icon icon-view",
            title: "\u67E5\u770B",
            onClick: r[1] || (r[1] = (B) => d())
          })) : L("", !0),
          w(u).save.enable() ? (E(), A("span", {
            key: 2,
            class: "upload-icon icon-download",
            title: "\u4FDD\u5B58",
            onClick: r[2] || (r[2] = (B) => s())
          })) : L("", !0),
          w(a).getSettings().readonly ? L("", !0) : (E(), A("span", {
            key: 3,
            class: "upload-icon icon-remove",
            title: "\u5220\u9664",
            onClick: r[3] || (r[3] = (B) => i())
          }))
        ])) : L("", !0),
        I(o.$slots, "default", {
          selectedFile: t.selectedFile,
          rename: w(u).rename,
          funs: {
            setRenameInputRef: p,
            renameKeydown: D,
            renameDone: h
          },
          loading: w(u).loading
        }),
        t.selectedFile.paused ? (E(), A("div", He, " \u6682\u505C ")) : L("", !0),
        t.selectedFile.done && !w(a).getSettings().readonly ? (E(), A("div", Ie, " \u5B8C\u6210 ")) : L("", !0),
        t.selectedFile.error ? (E(), A("div", Oe, "\u9519\u8BEF")) : L("", !0)
      ]))
    ], 46, Ue));
  }
}), Re = { class: "upload-container independent" }, ze = { class: "upload-list" }, We = /* @__PURE__ */ P({
  __name: "index.vue3",
  setup(f) {
    const e = H("upload")();
    return (async () => e.getSettings().debug && console.debug("Layout: Card Index Component(vue3) \u5DF2\u52A0\u8F7D"))(), (t, n) => (E(), A("div", Re, [
      I(t.$slots, "uploadContainer", {}, void 0, !0),
      _("div", ze, [
        I(t.$slots, "listContainer", {}, void 0, !0)
      ])
    ]));
  }
});
const ye = (f, e) => {
  const t = f.__vccOpts || f;
  for (const [n, a] of e)
    t[n] = a;
  return t;
}, je = /* @__PURE__ */ ye(We, [["__scopeId", "data-v-dfb9d6ed"]]), Qe = { class: "upload-container independent" }, Ne = { class: "upload-list" }, Xe = /* @__PURE__ */ P({
  __name: "index.vue3",
  setup(f) {
    const e = H("upload")();
    return (async () => e.getSettings().debug && console.debug("Layout: Detailedly Index Component(vue3) \u5DF2\u52A0\u8F7D"))(), (t, n) => (E(), A("div", Qe, [
      I(t.$slots, "uploadContainer", {}, void 0, !0),
      _("div", Ne, [
        I(t.$slots, "listContainer", {}, void 0, !0)
      ])
    ]));
  }
});
const Ye = /* @__PURE__ */ ye(Xe, [["__scopeId", "data-v-ae4f85bd"]]), Ve = { key: 0 }, me = /* @__PURE__ */ P({
  __name: "index.vue3",
  setup(f) {
    const e = H("upload")();
    let t = O({
      loading: !0,
      currentThemeIndex: null
    });
    return (async () => {
      const n = (a) => {
        switch (t.loading = !0, a) {
          case X.\u5361\u7247:
            t.currentThemeIndex = N(je);
            break;
          case X.\u6E05\u5355:
            t.currentThemeIndex = N(Ye);
            break;
        }
        t.loading = !1, e.getSettings().debug && console.debug("Layout: Index Component(vue3) \u5DF2\u53D8\u66F4");
      };
      e.registerLayoutChanged(n), n(e.getSettings().layout), e.getSettings().debug && console.debug("Layout: Index Component(vue3) \u5DF2\u52A0\u8F7D");
    })(), (n, a) => w(t).loading ? L("", !0) : (E(), A("div", Ve, [
      (E(), W(ae(w(t).currentThemeIndex), null, {
        uploadContainer: T(() => [
          I(n.$slots, "uploadContainer")
        ]),
        listContainer: T(() => [
          I(n.$slots, "listContainer")
        ]),
        _: 3
      }))
    ]));
  }
}), Ke = { class: "item-info" }, qe = ["title", "innerHTML"], Je = ["title"], Ge = /* @__PURE__ */ P({
  __name: "info.vue3",
  props: {
    slotProps: null
  },
  setup(f) {
    const e = f, t = H("upload")();
    let n = O({
      selectedFileSortMap: t.getSelectedFileSortMap(),
      lodingStyle: () => `${e.slotProps.selectedFile.checking ? t.getGradientStyle(
        "conic",
        "rgba(255, 236, 201, 0.5)",
        e.slotProps.selectedFile.percent,
        e.slotProps.selectedFile.virtualPercent
      ) : ""} ${e.slotProps.selectedFile.uploading ? t.getGradientStyle(
        "conic",
        "rgba(144, 206, 255, 0.5)",
        e.slotProps.selectedFile.percent,
        e.slotProps.selectedFile.virtualPercent
      ) : ""} ${e.slotProps.selectedFile.paused ? t.getGradientStyle(
        "conic",
        "rgba(158, 158, 158, 0.5)",
        e.slotProps.selectedFile.percent,
        e.slotProps.selectedFile.virtualPercent
      ) : ""}`
    });
    return (async () => t.getSettings().debug && console.debug("Layout: Card Info Component(vue3) \u5DF2\u52A0\u8F7D"))(), (a, u) => (E(), A(Z, null, [
      _("div", Ke, [
        e.slotProps.rename.active ? L("", !0) : (E(), A("span", {
          key: 0,
          class: "single-text-omitted item-name",
          title: e.slotProps.selectedFile.fileType + `\r
` + e.slotProps.selectedFile.size + `\r
` + e.slotProps.selectedFile.fullname(),
          innerHTML: e.slotProps.selectedFile.fullname()
        }, null, 8, qe)),
        e.slotProps.rename.active ? he((E(), A("input", {
          key: 1,
          class: "item-rename-input",
          type: "text",
          "onUpdate:modelValue": u[0] || (u[0] = (l) => e.slotProps.rename.value = l),
          ref: e.slotProps.funs.setRenameInputRef,
          onKeydown: u[1] || (u[1] = (l) => e.slotProps.funs.renameKeydown(l)),
          onBlur: u[2] || (u[2] = (l) => e.slotProps.funs.renameDone())
        }, null, 544)), [
          [ge, e.slotProps.rename.value]
        ]) : L("", !0)
      ]),
      e.slotProps.loading.show() ? (E(), A("div", {
        key: 0,
        class: "item-loading",
        style: re(w(n).lodingStyle()),
        title: e.slotProps.loading.info()
      }, null, 12, Je)) : L("", !0)
    ], 64));
  }
}), Ze = { class: "item-info" }, et = { class: "single-text-omitted item-name" }, tt = ["title", "innerHTML"], st = { class: "single-text-omitted item-size" }, nt = ["title", "innerHTML"], it = { class: "single-text-omitted item-filetype" }, ut = ["title", "innerHTML"], rt = ["title"], at = /* @__PURE__ */ P({
  __name: "info.vue3",
  props: {
    slotProps: null
  },
  setup(f) {
    const e = f, t = H("upload")();
    let n = O({
      selectedFileSortMap: t.getSelectedFileSortMap(),
      lodingStyle: () => `${e.slotProps.selectedFile.checking ? t.getGradientStyle(
        "linear",
        "rgba(255, 236, 201, 0.5)",
        e.slotProps.selectedFile.percent,
        e.slotProps.selectedFile.virtualPercent
      ) : ""} ${e.slotProps.selectedFile.uploading ? t.getGradientStyle(
        "linear",
        "rgba(144, 206, 255, 0.5)",
        e.slotProps.selectedFile.percent,
        e.slotProps.selectedFile.virtualPercent
      ) : ""} ${e.slotProps.selectedFile.paused ? t.getGradientStyle(
        "linear",
        "rgba(158, 158, 158, 0.5)",
        e.slotProps.selectedFile.percent,
        e.slotProps.selectedFile.virtualPercent
      ) : ""}`
    });
    return (async () => t.getSettings().debug && console.debug("Layout: Detailedly Info Component(vue3) \u5DF2\u52A0\u8F7D"))(), (a, u) => (E(), A(Z, null, [
      _("div", Ze, [
        _("span", et, [
          se(" \u540D\u79F0\uFF1A"),
          e.slotProps.rename.active ? L("", !0) : (E(), A("span", {
            key: 0,
            title: e.slotProps.selectedFile.fullname(),
            innerHTML: e.slotProps.selectedFile.fullname()
          }, null, 8, tt)),
          e.slotProps.rename.value ? he((E(), A("input", {
            key: 1,
            class: "item-rename-input",
            type: "text",
            "onUpdate:modelValue": u[0] || (u[0] = (l) => e.slotProps.selectedFile.newName = l),
            ref: e.slotProps.funs.setRenameInputRef,
            onKeydown: u[1] || (u[1] = (l) => e.slotProps.funs.renameKeydown(l)),
            onBlur: u[2] || (u[2] = (l) => e.slotProps.funs.renameDone())
          }, null, 544)), [
            [ge, e.slotProps.selectedFile.newName]
          ]) : L("", !0)
        ]),
        _("span", st, [
          se(" \u5927\u5C0F\uFF1A"),
          _("span", {
            title: e.slotProps.selectedFile.size,
            innerHTML: e.slotProps.selectedFile.size
          }, null, 8, nt)
        ]),
        _("span", it, [
          se(" \u7C7B\u578B\uFF1A"),
          _("span", {
            title: e.slotProps.selectedFile.fileType,
            innerHTML: e.slotProps.selectedFile.fileType
          }, null, 8, ut)
        ])
      ]),
      e.slotProps.loading.show() ? (E(), A("div", {
        key: 0,
        class: "item-loading",
        style: re(w(n).lodingStyle()),
        title: e.slotProps.loading.info()
      }, null, 12, rt)) : L("", !0)
    ], 64));
  }
}), ot = { key: 0 }, we = /* @__PURE__ */ P({
  __name: "info.vue3",
  props: {
    slotProps: null
  },
  setup(f) {
    const e = f, t = H("upload")();
    let n = O({
      loading: !0,
      currentThemeInfo: null
    });
    return (async () => (((u) => {
      switch (n.loading = !0, t.getSettings().layout) {
        case X.\u5361\u7247:
          n.currentThemeInfo = N(Ge);
          break;
        case X.\u6E05\u5355:
          n.currentThemeInfo = N(at);
          break;
      }
      n.loading = !1, t.getSettings().debug && console.debug("Layout: Info Component(vue3) \u5DF2\u53D8\u66F4");
    })(), t.getSettings().debug && console.debug("Layout: Info Component(vue3) \u5DF2\u52A0\u8F7D")))(), (a, u) => w(n).loading ? L("", !0) : (E(), A("div", ot, [
      (E(), W(ae(w(n).currentThemeInfo), {
        slotProps: e.slotProps
      }, null, 8, ["slotProps"]))
    ]));
  }
}), lt = /* @__PURE__ */ _("p", { class: "upload-icon icon-select-file" }, null, -1), ct = /* @__PURE__ */ P({
  __name: "SingleUpload.vue3",
  setup(f) {
    const e = H("upload")();
    return (async () => e.getSettings().debug && console.debug("Piece: Single Upload Component(vue3) \u5DF2\u52A0\u8F7D"))(), (t, n) => (E(), W(me, null, pe({
      listContainer: T(() => [
        (E(!0), A(Z, null, ie(w(e).getSelectedFileSortMap().size, (a) => (E(), W(be, {
          key: a,
          selectedFile: w(e).getSelectedFile(a)
        }, {
          default: T((u) => [
            K(we, {
              class: "item-info-container",
              slotProps: u
            }, null, 8, ["slotProps"])
          ]),
          _: 2
        }, 1032, ["selectedFile"]))), 128))
      ]),
      _: 2
    }, [
      w(e).getSettings().readonly ? void 0 : {
        name: "uploadContainer",
        fn: T(() => [
          w(e).anyFile() ? L("", !0) : (E(), W(Fe, {
            key: 0,
            class: "upload-box-container single",
            title: w(e).getConfig().explain
          }, {
            default: T(() => [
              lt
            ]),
            _: 1
          }, 8, ["title"]))
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), dt = ["title"], ht = /* @__PURE__ */ P({
  __name: "DropFileInput.vue3",
  setup(f) {
    const e = H("upload")(), t = (a) => {
      a.preventDefault();
    }, n = (a) => {
      if (a.preventDefault(), a.dataTransfer)
        for (let u = 0; u < a.dataTransfer.files.length; u++)
          e.append(a.dataTransfer.files[u]);
    };
    return (async () => e.getSettings().debug && console.debug("Piece: Drop File Input Component(vue3) \u5DF2\u52A0\u8F7D"))(), (a, u) => (E(), A("div", {
      class: de(w(e).getSelectCLass()),
      onDrop: n,
      onDragover: t,
      title: w(e).getSelectFileAlarmInfo()
    }, [
      K(Fe, null, {
        default: T(() => [
          I(a.$slots, "default")
        ]),
        _: 3
      })
    ], 42, dt));
  }
});
class J {
  constructor() {
    c(this, "containerEl");
    c(this, "el");
    c(this, "key", -1);
    c(this, "els");
    c(this, "isMobile", !1);
    c(this, "flag", !1);
    c(this, "x", 0);
    c(this, "y", 0);
    c(this, "currentX", 0);
    c(this, "currentY", 0);
    c(this, "offsetX", 0);
    c(this, "offsetY", 0);
    c(this, "scrollX", 0);
    c(this, "scrollY", 0);
    c(this, "transX", 0);
    c(this, "transY", 0);
    c(this, "lastTransX", 0);
    c(this, "lastTransY", 0);
    c(this, "zIndex", "");
    c(this, "position", "");
    c(this, "transform", "");
    c(this, "transLate", 1);
    c(this, "restoreError", [20, 10]);
    c(this, "mouseMove");
    c(this, "scroll");
  }
  moving(e, t) {
    this.currentX = e, this.currentY = t, this.checkRestore() ? (this.transX = 0, this.transY = 0, this.el.style.transform = this.transform) : (this.transX = this.currentX - this.x + this.scrollX + this.offsetX, this.transY = this.currentY - this.y + this.scrollY + this.offsetY, (Math.abs(this.transX - this.lastTransX) >= this.transLate || Math.abs(this.transY - this.lastTransY) >= this.transLate) && (this.el.style.transform = `translate(${this.transX}px, ${this.transY}px)`)), this.lastTransX = this.transX, this.lastTransY = this.transY;
  }
  checkRestore() {
    return J.equalError(this.x, this.currentX, this.restoreError[0]) && J.equalError(this.y, this.currentY, this.restoreError[1]);
  }
  static equalError(e, t, n) {
    return t + n >= e && t - n <= e;
  }
  static getInstance(e, t, n, a) {
    let u = new J();
    return u.els = t, u.el = t.get(n), u.key = n, u.containerEl = e, u.isMobile = a, u;
  }
  start(e, t, n) {
    this.flag = !0, this.currentX = e, this.currentY = t, this.save(), this.el.style.zIndex = "999";
    let a = !1;
    this.mouseMove = (u) => {
      if (!this.flag || a)
        return;
      const l = this.isMobile ? u.targetTouches[0].clientX : u.clientX, g = this.isMobile ? u.targetTouches[0].clientY : u.clientY;
      if (u.preventDefault(), a = !0, this.moving(l, g), n && this.els) {
        let p = !1;
        this.els.forEach((k, b) => {
          if (b == this.key)
            return;
          const y = this.el.offsetTop + this.transY, m = this.el.offsetLeft + this.transX;
          y > k.offsetTop && y < k.offsetTop + k.offsetHeight && m > k.offsetLeft && m < k.offsetLeft + k.offsetWidth && (n(b, l, g), p = !0);
        }), p || n(-1, l, g);
      }
      a = !1;
    }, this.isMobile ? this.containerEl.addEventListener("touchmove", this.mouseMove) : this.containerEl.addEventListener("mousemove", this.mouseMove), this.scroll = (u) => {
      this.scrollX = this.containerEl.scrollLeft, this.scrollY = this.containerEl.scrollTop;
    }, this.containerEl.addEventListener("scroll", this.scroll);
  }
  offset(e, t) {
    this.offsetX = e, this.offsetY = t;
  }
  save() {
    this.x = this.currentX, this.y = this.currentY, this.zIndex = this.el.style.zIndex, this.position = this.el.style.position, this.transform = this.el.style.transform;
  }
  restore() {
    this.flag = !1, this.x = this.currentX, this.y = this.currentY, this.el.style.zIndex = this.zIndex, this.el.style.position = this.position, this.el.style.transform = this.transform;
  }
  end(e) {
    e && this.restore(), this.isMobile ? this.containerEl.removeEventListener("touchmove", this.mouseMove) : this.containerEl.removeEventListener("mousemove", this.mouseMove), this.containerEl.removeEventListener("scroll", this.scroll);
  }
}
const gt = /* @__PURE__ */ _("p", { class: "upload-icon icon-inbox" }, null, -1), pt = ["innerHTML"], ft = ["innerHTML"], Ft = { class: "upload-error-list pretty-scrollbar" }, bt = /* @__PURE__ */ P({
  __name: "MultipleUpload.vue3",
  setup(f) {
    const { proxy: e } = fe(), t = H("upload")();
    let n = O({
      scrollLock: !1,
      readyDraggingSortKey: null,
      currentDraggingSortKey: null,
      lastDraggingSortKey: null,
      errors: []
    }), a, u = /* @__PURE__ */ new Map(), l = {
      startTick: null,
      changeTick: null,
      draggingHelper: null,
      ready2start: (F, D, h) => {
        if (!t.getSettings().enableDrag) {
          t.getSettings().debug && console.debug(
            "Piece: Multiple Upload Component(vue3) \u672A\u542F\u7528\u62D6\u52A8\u6392\u5E8F\u529F\u80FD"
          );
          return;
        }
        t.getSelectedFileList(!1).length <= 1 || (t.getSettings().debug && console.debug(
          `Piece: Multiple Upload Component(vue3) \u5EF6\u65F6\u5F00\u542F\u62D6\u52A8\u529F\u80FD, sortKey: ${F}`
        ), l.startTick && clearTimeout(l.startTick), l.startTick = setTimeout(() => {
          n.readyDraggingSortKey = F, l.startTick = setTimeout(() => {
            !a || (n.readyDraggingSortKey = null, n.currentDraggingSortKey = F, l.draggingHelper = J.getInstance(
              a,
              u,
              n.currentDraggingSortKey,
              t.getSettings().isMobile
            ), l.draggingHelper.start(D, h, (d, s, i) => {
              t.getSettings().debug && console.debug(
                `Piece: Multiple Upload Component(vue3) \u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6, sortKey: ${F}, clientX: ${s}, clientY: ${i}, targetKey: ${d}`
              ), d == -1 ? m() : y(d);
            }));
          }, t.getSettings().dragPreparationTime);
        }, 500));
      },
      ready2change: (F) => {
        n.lastDraggingSortKey = F, n.currentDraggingSortKey !== n.lastDraggingSortKey && (t.getSettings().debug && console.debug(
          `Piece: Multiple Upload Component(vue3) \u5EF6\u65F6\u91CD\u65B0\u6392\u5E8F, targetKey: ${F}`
        ), l.changeTick && clearTimeout(l.changeTick), l.changeTick = setTimeout(() => {
          t.changeSort(
            n.currentDraggingSortKey,
            n.lastDraggingSortKey
          ), l.end();
        }, t.getSettings().dragChangePositionTime));
      },
      cancelChange: () => {
        t.getSettings().debug && console.debug(
          "Piece: Multiple Upload Component(vue3) \u53D6\u6D88\u91CD\u65B0\u6392\u5E8F"
        ), l.changeTick && clearTimeout(l.changeTick), n.lastDraggingSortKey = null;
      },
      end: () => {
        l.startTick && clearTimeout(l.startTick), l.changeTick && clearTimeout(l.changeTick), n.readyDraggingSortKey = null, l.draggingHelper && (t.getSettings().debug && console.debug(
          "Piece: Multiple Upload Component(vue3) \u7ED3\u675F\u62D6\u52A8\u5E76\u590D\u539F\u5BB9\u5668\u4F4D\u7F6E"
        ), l.draggingHelper.end(!0), l.draggingHelper = null, u.forEach((F, D) => {
          D !== n.currentDraggingSortKey && (F.style.zIndex = "");
        }), n.lastDraggingSortKey = null, n.currentDraggingSortKey = null);
      }
    };
    const g = (F) => {
      F && (a = F);
    }, p = (F, D) => {
      !a || u.set(F, D);
    }, k = (F, D, h) => {
      t.getSettings().debug && console.debug(
        `Piece: Multiple Upload Component(vue3) \u6309\u4E0B\u9F20\u6807\u7684\u4E8B\u4EF6, sortKey: ${F}`
      );
      const d = h ? D.targetTouches[0].clientX : D.clientX, s = h ? D.targetTouches[0].clientY : D.clientY;
      l.ready2start(F, d, s);
    }, b = (F, D, h) => {
      t.getSettings().debug && console.debug(
        `Piece: Multiple Upload Component(vue3) \u677E\u5F00\u9F20\u6807\u7684\u4E8B\u4EF6, sortKey: ${F}`
      ), l.end();
    }, y = (F) => {
      t.getSettings().debug && console.debug(
        `Piece: Multiple Upload Component(vue3) \u8FDB\u5165\u76EE\u6807\u8303\u56F4\u7684\u4E8B\u4EF6, targetKey: ${F}`
      ), l.ready2change(F);
    }, m = () => {
      t.getSettings().debug && console.debug(
        "Piece: Multiple Upload Component(vue3) \u79BB\u5F00\u76EE\u6807\u8303\u56F4\u7684\u4E8B\u4EF6"
      ), l.cancelChange();
    };
    return (async () => {
      const F = (h) => {
        n.scrollLock || h.length == 0 || e.$nextTick(() => {
          let d = null, s = !1;
          for (let i = 0; i < h.length; i++) {
            let o = h[i];
            if (!s && o.checking && (s = !0, d = u.get(i)), o.uploading) {
              d = u.get(i);
              break;
            }
          }
          !d || a && (a.scrollTop = d.offsetTop - a.offsetTop - 20);
        });
      };
      t.registerSelectedFileListChanged(F);
      const D = (h) => {
        n.errors.push(h.message), setTimeout(() => {
          n.errors.shift();
        }, 5e3);
      };
      t.getSettings().alertErrorInfo && t.registerAlertError(D), t.getSettings().debug && console.debug("Piece: Multiple Upload Component(vue3) \u5DF2\u52A0\u8F7D");
    })(), (F, D) => (E(), W(me, null, pe({
      listContainer: T(() => [
        _("div", {
          class: "scroll-container pretty-scrollbar",
          ref: g,
          onMouseenter: D[0] || (D[0] = (h) => w(n).scrollLock = !0),
          onMouseleave: D[1] || (D[1] = (h) => w(n).scrollLock = !1)
        }, [
          K(Se, { name: "fade" }, {
            default: T(() => [
              (E(!0), A(Z, null, ie(w(t).getSelectedFileSortMap().size, (h) => {
                var d;
                return E(), W(be, {
                  key: (d = w(t).getSelectedFileSortMap().get(h)) != null ? d : -1,
                  selectedFile: w(t).getSelectedFile(h),
                  readyDrag: w(n).readyDraggingSortKey === h,
                  startDrag: w(n).currentDraggingSortKey !== null,
                  dragging: w(n).currentDraggingSortKey === h,
                  dragover: w(n).lastDraggingSortKey === h && w(n).currentDraggingSortKey !== h,
                  onSetContainerRef: (s) => p(h, s),
                  onMouseDown: (s) => k(h, s, !1),
                  onMouseUp: (s) => b(h),
                  onTouchstart: (s) => k(h, s, !0),
                  onTouchend: (s) => b(h),
                  onTouchcancel: (s) => b(h)
                }, {
                  default: T((s) => [
                    K(we, {
                      class: "item-info-container",
                      slotProps: s
                    }, null, 8, ["slotProps"])
                  ]),
                  _: 2
                }, 1032, ["selectedFile", "readyDrag", "startDrag", "dragging", "dragover", "onSetContainerRef", "onMouseDown", "onMouseUp", "onTouchstart", "onTouchend", "onTouchcancel"]);
              }), 128))
            ]),
            _: 1
          })
        ], 32)
      ]),
      _: 2
    }, [
      w(t).getSettings().readonly ? void 0 : {
        name: "uploadContainer",
        fn: T(() => [
          K(ht, { class: "upload-box-container" }, {
            default: T(() => [
              gt,
              _("p", {
                class: "upload-text",
                innerHTML: w(t).getConfig().explain
              }, null, 8, pt),
              _("p", {
                class: "upload-hint",
                innerHTML: w(t).getSettings().tip
              }, null, 8, ft),
              _("div", Ft, [
                (E(!0), A(Z, null, ie(w(n).errors, (h, d) => (E(), A("p", {
                  class: "error-info",
                  key: d
                }, Ae(h), 1))), 128))
              ])
            ]),
            _: 1
          })
        ]),
        key: "0"
      }
    ]), 1024));
  }
});
class S extends Error {
  constructor(t, n) {
    super(t);
    c(this, "innerError");
    this.innerError = n;
  }
  static consoleWriteWithIndex(t, n) {
    console.error(`\u7B2C${n}\u5C42\u9519\u8BEF`, t), t instanceof S && t.innerError && S.consoleWriteWithIndex(t.innerError, ++n);
  }
  static consoleWrite(t) {
    S.consoleWriteWithIndex(t, 1);
  }
}
class ue {
  constructor(e) {
    c(this, "file");
    c(this, "size", 0);
    c(this, "checkPosition", 0);
    c(this, "uploadPosition", 0);
    c(this, "objectURL");
    c(this, "md5", null);
    c(this, "extension");
    c(this, "name");
    c(this, "needSection", !1);
    c(this, "specs");
    c(this, "key");
    c(this, "chunks", []);
    c(this, "chunkIndexQueue", []);
    c(this, "userFileInfo");
    c(this, "configCode");
    c(this, "token");
    c(this, "echo", !1);
    e != null && (this.file = e, this.size = e.size, this.objectURL = URL.createObjectURL(e));
  }
}
class ee {
  static getByExtension(e) {
    switch (e) {
      case ".webp":
      case ".jpg":
      case ".png":
      case ".ioc":
      case ".bmp":
      case ".gif":
      case ".tif":
      case ".tga":
      case ".jpeg":
        return C.\u56FE\u7247;
      case ".mp2":
      case ".ac3":
      case ".mp3":
      case ".m4a":
      case ".m4r":
      case ".mmf":
      case ".ogg":
      case ".amr":
      case ".aac":
      case ".vqf":
      case ".wma":
      case ".ape":
      case ".wav":
      case ".flac":
      case ".cda":
      case ".dts":
        return C.\u97F3\u9891;
      case ".swf":
      case ".3gp":
      case ".3g2":
      case ".mp4":
      case ".mpeg":
      case ".mpg":
      case ".dat":
      case ".mov":
      case ".vob":
      case ".qt":
      case ".rm":
      case ".asf":
      case ".avi":
      case ".navi":
      case ".divx":
      case ".flv":
      case ".f4v":
      case ".qsv":
      case ".wmv":
      case ".mkv":
      case ".rmvb":
      case ".webm":
        return C.\u89C6\u9891;
      case ".xls":
      case ".xlsx":
      case ".csv":
        return C.\u7535\u5B50\u8868\u683C;
      case ".pdf":
      case ".doc":
      case ".docx":
        return C.\u7535\u5B50\u6587\u6863;
      case ".txt":
      case ".js":
      case ".css":
      case ".cs":
      case ".html":
      case ".vue":
      case ".ts":
      case ".xml":
      case ".json":
        return C.\u6587\u672C\u6587\u4EF6;
      case ".zip":
      case ".rar":
      case ".7z":
        return C.\u538B\u7F29\u5305;
      default:
        return C.\u672A\u77E5;
    }
  }
  static getByMIME(e) {
    const t = e.toLocaleLowerCase();
    if (t.indexOf("image/", 0) != -1)
      return C.\u56FE\u7247;
    if (t.indexOf("audio/", 0) != -1)
      return C.\u97F3\u9891;
    if (t.indexOf("video/", 0) != -1)
      return C.\u89C6\u9891;
    if (t.indexOf("text/", 0) != -1)
      return C.\u6587\u672C\u6587\u4EF6;
    switch (e) {
      case "application/ogg":
        return C.\u97F3\u9891;
      case "application/mp4":
        return C.\u89C6\u9891;
      case "application/vnd.ms-excel":
      case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return C.\u7535\u5B50\u8868\u683C;
      case "application/pdf":
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return C.\u7535\u5B50\u6587\u6863;
      case "application/json":
      case "application/javascript":
        return C.\u6587\u672C\u6587\u4EF6;
      case "application/x-tar":
      case "application/zip":
      case "application/x-compressed":
      case "application/x-zip-compressed":
        return C.\u538B\u7F29\u5305;
      default:
        return C.\u672A\u77E5;
    }
  }
}
class ce {
  constructor(e) {
    c(this, "rawIndex");
    c(this, "name");
    c(this, "newName");
    c(this, "extension");
    c(this, "fullname", () => {
      var e, t;
      return `${(e = this.name) != null ? e : ""}${(t = this.extension) != null ? t : ""}`;
    });
    c(this, "extensionLower");
    c(this, "size", "");
    c(this, "fileType", C.\u672A\u77E5);
    c(this, "thumbnail", "/filetypes/empty.png");
    c(this, "class", []);
    c(this, "checking", !1);
    c(this, "checked", !1);
    c(this, "uploading", !1);
    c(this, "uploaded", !1);
    c(this, "done", !1);
    c(this, "reTry", 0);
    c(this, "error", !1);
    c(this, "errorMessage");
    c(this, "percent", 0);
    c(this, "virtualPercent", 0);
    c(this, "percentBeforPaused", 0);
    c(this, "virtualPercentBeforPaused", 0);
    c(this, "paused", !1);
    c(this, "canceled", !1);
    c(this, "token");
    c(this, "echo", !1);
    var n;
    const t = e.name.lastIndexOf(".");
    this.name = e.name.substring(0, t), this.extension = e.name.substring(t), this.extensionLower = (n = this.extension) == null ? void 0 : n.toLowerCase(), this.fileType = e.type ? ee.getByMIME(e.type) : ee.getByExtension(this.extension);
  }
}
class x {
  static s4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  static new() {
    return `${x.s4()}${x.s4()}-${x.s4()}-${x.s4()}-${x.s4()}-${x.s4()}${x.s4()}${x.s4()}`;
  }
}
const j = class {
  static getSize(e, t = 1024, n = 2) {
    if (e <= 0)
      return "0 KB";
    for (let a = 0; a < j.formats.length; a++) {
      let u = e / Math.pow(t, a + 1);
      if (u < t)
        return `${u.toFixed(n)} ${j.formats[a]}`;
    }
    return `${(e / Math.pow(t, j.formats.length)).toFixed(n)} ${j.formats[j.formats.length - 1]}`;
  }
};
let z = j;
c(z, "formats", [
  "KB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB"
]);
class yt {
  constructor(e, t) {
    c(this, "index");
    c(this, "blob");
    c(this, "size");
    c(this, "checkPosition", 0);
    c(this, "md5", null);
    c(this, "forced", !1);
    c(this, "checking", !1);
    c(this, "checked", !1);
    c(this, "uploading", !1);
    c(this, "uploaded", !1);
    c(this, "done", !1);
    c(this, "error", !1);
    c(this, "errorMessage");
    this.index = e, this.blob = t, this.size = t.size;
  }
}
const mt = () => {
  let f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  function e(h, d) {
    let s = h[0], i = h[1], o = h[2], r = h[3];
    s += (i & o | ~i & r) + d[0] - 680876936 | 0, s = (s << 7 | s >>> 25) + i | 0, r += (s & i | ~s & o) + d[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + s | 0, o += (r & s | ~r & i) + d[2] + 606105819 | 0, o = (o << 17 | o >>> 15) + r | 0, i += (o & r | ~o & s) + d[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + o | 0, s += (i & o | ~i & r) + d[4] - 176418897 | 0, s = (s << 7 | s >>> 25) + i | 0, r += (s & i | ~s & o) + d[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + s | 0, o += (r & s | ~r & i) + d[6] - 1473231341 | 0, o = (o << 17 | o >>> 15) + r | 0, i += (o & r | ~o & s) + d[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + o | 0, s += (i & o | ~i & r) + d[8] + 1770035416 | 0, s = (s << 7 | s >>> 25) + i | 0, r += (s & i | ~s & o) + d[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + s | 0, o += (r & s | ~r & i) + d[10] - 42063 | 0, o = (o << 17 | o >>> 15) + r | 0, i += (o & r | ~o & s) + d[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + o | 0, s += (i & o | ~i & r) + d[12] + 1804603682 | 0, s = (s << 7 | s >>> 25) + i | 0, r += (s & i | ~s & o) + d[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + s | 0, o += (r & s | ~r & i) + d[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + r | 0, i += (o & r | ~o & s) + d[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + o | 0, s += (i & r | o & ~r) + d[1] - 165796510 | 0, s = (s << 5 | s >>> 27) + i | 0, r += (s & o | i & ~o) + d[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + s | 0, o += (r & i | s & ~i) + d[11] + 643717713 | 0, o = (o << 14 | o >>> 18) + r | 0, i += (o & s | r & ~s) + d[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + o | 0, s += (i & r | o & ~r) + d[5] - 701558691 | 0, s = (s << 5 | s >>> 27) + i | 0, r += (s & o | i & ~o) + d[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + s | 0, o += (r & i | s & ~i) + d[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + r | 0, i += (o & s | r & ~s) + d[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + o | 0, s += (i & r | o & ~r) + d[9] + 568446438 | 0, s = (s << 5 | s >>> 27) + i | 0, r += (s & o | i & ~o) + d[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + s | 0, o += (r & i | s & ~i) + d[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + r | 0, i += (o & s | r & ~s) + d[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + o | 0, s += (i & r | o & ~r) + d[13] - 1444681467 | 0, s = (s << 5 | s >>> 27) + i | 0, r += (s & o | i & ~o) + d[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + s | 0, o += (r & i | s & ~i) + d[7] + 1735328473 | 0, o = (o << 14 | o >>> 18) + r | 0, i += (o & s | r & ~s) + d[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + o | 0, s += (i ^ o ^ r) + d[5] - 378558 | 0, s = (s << 4 | s >>> 28) + i | 0, r += (s ^ i ^ o) + d[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + s | 0, o += (r ^ s ^ i) + d[11] + 1839030562 | 0, o = (o << 16 | o >>> 16) + r | 0, i += (o ^ r ^ s) + d[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + o | 0, s += (i ^ o ^ r) + d[1] - 1530992060 | 0, s = (s << 4 | s >>> 28) + i | 0, r += (s ^ i ^ o) + d[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + s | 0, o += (r ^ s ^ i) + d[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + r | 0, i += (o ^ r ^ s) + d[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + o | 0, s += (i ^ o ^ r) + d[13] + 681279174 | 0, s = (s << 4 | s >>> 28) + i | 0, r += (s ^ i ^ o) + d[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + s | 0, o += (r ^ s ^ i) + d[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + r | 0, i += (o ^ r ^ s) + d[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + o | 0, s += (i ^ o ^ r) + d[9] - 640364487 | 0, s = (s << 4 | s >>> 28) + i | 0, r += (s ^ i ^ o) + d[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + s | 0, o += (r ^ s ^ i) + d[15] + 530742520 | 0, o = (o << 16 | o >>> 16) + r | 0, i += (o ^ r ^ s) + d[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + o | 0, s += (o ^ (i | ~r)) + d[0] - 198630844 | 0, s = (s << 6 | s >>> 26) + i | 0, r += (i ^ (s | ~o)) + d[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + s | 0, o += (s ^ (r | ~i)) + d[14] - 1416354905 | 0, o = (o << 15 | o >>> 17) + r | 0, i += (r ^ (o | ~s)) + d[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + o | 0, s += (o ^ (i | ~r)) + d[12] + 1700485571 | 0, s = (s << 6 | s >>> 26) + i | 0, r += (i ^ (s | ~o)) + d[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + s | 0, o += (s ^ (r | ~i)) + d[10] - 1051523 | 0, o = (o << 15 | o >>> 17) + r | 0, i += (r ^ (o | ~s)) + d[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + o | 0, s += (o ^ (i | ~r)) + d[8] + 1873313359 | 0, s = (s << 6 | s >>> 26) + i | 0, r += (i ^ (s | ~o)) + d[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + s | 0, o += (s ^ (r | ~i)) + d[6] - 1560198380 | 0, o = (o << 15 | o >>> 17) + r | 0, i += (r ^ (o | ~s)) + d[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + o | 0, s += (o ^ (i | ~r)) + d[4] - 145523070 | 0, s = (s << 6 | s >>> 26) + i | 0, r += (i ^ (s | ~o)) + d[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + s | 0, o += (s ^ (r | ~i)) + d[2] + 718787259 | 0, o = (o << 15 | o >>> 17) + r | 0, i += (r ^ (o | ~s)) + d[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + o | 0, h[0] = s + h[0] | 0, h[1] = i + h[1] | 0, h[2] = o + h[2] | 0, h[3] = r + h[3] | 0;
  }
  function t(h) {
    let d = [], s;
    for (s = 0; s < 64; s += 4)
      d[s >> 2] = h.charCodeAt(s) + (h.charCodeAt(s + 1) << 8) + (h.charCodeAt(s + 2) << 16) + (h.charCodeAt(s + 3) << 24);
    return d;
  }
  function n(h) {
    let d = [], s;
    for (s = 0; s < 64; s += 4)
      d[s >> 2] = h[s] + (h[s + 1] << 8) + (h[s + 2] << 16) + (h[s + 3] << 24);
    return d;
  }
  function a(h) {
    let d = h.length, s = [1732584193, -271733879, -1732584194, 271733878], i, o, r, B, v, U;
    for (i = 64; i <= d; i += 64)
      e(s, t(h.substring(i - 64, i)));
    for (h = h.substring(i - 64), o = h.length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < o; i += 1)
      r[i >> 2] |= h.charCodeAt(i) << (i % 4 << 3);
    if (r[i >> 2] |= 128 << (i % 4 << 3), i > 55)
      for (e(s, r), i = 0; i < 16; i += 1)
        r[i] = 0;
    return B = d * 8, B = B.toString(16).match(/(.*?)(.{0,8})$/), v = parseInt(B[2], 16), U = parseInt(B[1], 16) || 0, r[14] = v, r[15] = U, e(s, r), s;
  }
  function u(h) {
    let d = h.length, s = [1732584193, -271733879, -1732584194, 271733878], i, o, r, B, v, U;
    for (i = 64; i <= d; i += 64)
      e(s, n(h.subarray(i - 64, i)));
    for (h = i - 64 < d ? h.subarray(i - 64) : new Uint8Array(0), o = h.length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < o; i += 1)
      r[i >> 2] |= h[i] << (i % 4 << 3);
    if (r[i >> 2] |= 128 << (i % 4 << 3), i > 55)
      for (e(s, r), i = 0; i < 16; i += 1)
        r[i] = 0;
    return B = d * 8, B = B.toString(16).match(/(.*?)(.{0,8})$/), v = parseInt(B[2], 16), U = parseInt(B[1], 16) || 0, r[14] = v, r[15] = U, e(s, r), s;
  }
  function l(h) {
    let d = "", s;
    for (s = 0; s < 4; s += 1)
      d += f[h >> s * 8 + 4 & 15] + f[h >> s * 8 & 15];
    return d;
  }
  function g(h) {
    let d;
    for (d = 0; d < h.length; d += 1)
      h[d] = l(h[d]);
    return h.join("");
  }
  g(a("hello")), typeof ArrayBuffer < "u" && !ArrayBuffer.prototype.slice && function() {
    function h(d, s) {
      return d = d | 0 || 0, d < 0 ? Math.max(d + s, 0) : Math.min(d, s);
    }
    ArrayBuffer.prototype.slice = function(d, s) {
      let i = this.byteLength, o = h(d, i), r = i, B, v, U, Q;
      return s !== void 0 && (r = h(s, i)), o > r ? new ArrayBuffer(0) : (B = r - o, v = new ArrayBuffer(B), U = new Uint8Array(v), Q = new Uint8Array(this, o, B), U.set(Q), v);
    };
  }();
  function p(h) {
    return /[\u0080-\uFFFF]/.test(h) && (h = unescape(encodeURIComponent(h))), h;
  }
  function k(h, d) {
    let s = h.length, i = new ArrayBuffer(s), o = new Uint8Array(i), r;
    for (r = 0; r < s; r += 1)
      o[r] = h.charCodeAt(r);
    return d ? o : i;
  }
  function b(h) {
    return String.fromCharCode.apply(null, new Uint8Array(h));
  }
  function y(h, d, s) {
    let i = new Uint8Array(h.byteLength + d.byteLength);
    return i.set(new Uint8Array(h)), i.set(new Uint8Array(d), h.byteLength), s ? i : i.buffer;
  }
  function m(h) {
    let d = [], s = h.length, i;
    for (i = 0; i < s - 1; i += 2)
      d.push(parseInt(h.substr(i, 2), 16));
    return String.fromCharCode.apply(String, d);
  }
  function F() {
    this.reset();
  }
  F.prototype.append = function(h) {
    return this.appendBinary(p(h)), this;
  }, F.prototype.appendBinary = function(h) {
    this._buff += h, this._length += h.length;
    let d = this._buff.length, s;
    for (s = 64; s <= d; s += 64)
      e(this._hash, t(this._buff.substring(s - 64, s)));
    return this._buff = this._buff.substring(s - 64), this;
  }, F.prototype.end = function(h) {
    let d = this._buff, s = d.length, i, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r;
    for (i = 0; i < s; i += 1)
      o[i >> 2] |= d.charCodeAt(i) << (i % 4 << 3);
    return this._finish(o, s), r = g(this._hash), h && (r = m(r)), this.reset(), r;
  }, F.prototype.reset = function() {
    return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
  }, F.prototype.getState = function() {
    return { buff: this._buff, length: this._length, hash: this._hash.slice() };
  }, F.prototype.setState = function(h) {
    return this._buff = h.buff, this._length = h.length, this._hash = h.hash, this;
  }, F.prototype.destroy = function() {
    delete this._hash, delete this._buff, delete this._length;
  }, F.prototype._finish = function(h, d) {
    let s = d, i, o, r;
    if (h[s >> 2] |= 128 << (s % 4 << 3), s > 55)
      for (e(this._hash, h), s = 0; s < 16; s += 1)
        h[s] = 0;
    i = this._length * 8, i = i.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(i[2], 16), r = parseInt(i[1], 16) || 0, h[14] = o, h[15] = r, e(this._hash, h);
  }, F.hash = function(h, d) {
    return F.hashBinary(p(h), d);
  }, F.hashBinary = function(h, d) {
    let s = a(h), i = g(s);
    return d ? m(i) : i;
  }, F.ArrayBuffer = function() {
    this.reset();
  }, F.ArrayBuffer.prototype.append = function(h) {
    let d = y(this._buff.buffer, h, !0), s = d.length, i;
    for (this._length += h.byteLength, i = 64; i <= s; i += 64)
      e(this._hash, n(d.subarray(i - 64, i)));
    return this._buff = i - 64 < s ? new Uint8Array(d.buffer.slice(i - 64)) : new Uint8Array(0), this;
  }, F.ArrayBuffer.prototype.end = function(h) {
    let d = this._buff, s = d.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], o, r;
    for (o = 0; o < s; o += 1)
      i[o >> 2] |= d[o] << (o % 4 << 3);
    return this._finish(i, s), r = g(this._hash), h && (r = m(r)), this.reset(), r;
  }, F.ArrayBuffer.prototype.reset = function() {
    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
  }, F.ArrayBuffer.prototype.getState = function() {
    let h = F.prototype.getState.call(this);
    return h.buff = b(h.buff), h;
  }, F.ArrayBuffer.prototype.setState = function(h) {
    return h.buff = k(h.buff, !0), F.prototype.setState.call(this, h);
  }, F.ArrayBuffer.prototype.destroy = F.prototype.destroy, F.ArrayBuffer.prototype._finish = F.prototype._finish, F.ArrayBuffer.hash = function(h, d) {
    let s = u(new Uint8Array(h)), i = g(s);
    return d ? m(i) : i;
  };
  const D = new F.ArrayBuffer();
  onmessage = (h) => {
    switch (h.data.type) {
      case "DOWN_APPEND_DATA":
        const d = h.data.data;
        D.append(d);
        break;
      case "DOWN_GET_RESULT":
        postMessage(JSON.parse(JSON.stringify({
          type: "UP_RESULT",
          data: D.end(!1)
        })));
        return;
      case "DOWN_RESET":
        D.reset();
        break;
      case "DOWN_CLOSE":
        close();
        break;
    }
    postMessage(JSON.parse(JSON.stringify({
      type: "UP_ACK"
    })));
  };
}, wt = new Blob([`(${mt.toString()})()`]);
class Ee {
  constructor() {
    c(this, "Reader");
    if (typeof FileReader > "u")
      throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301FileReader.");
    this.Reader = new FileReader();
  }
  async readAsArrayBuffer(e) {
    return new Promise((t, n) => {
      this.Reader.onload = (a) => {
        const u = a.target.result;
        t(u);
      }, this.Reader.onerror = (a) => {
        n(a);
      }, this.Reader.readAsArrayBuffer(e);
    });
  }
  close() {
    this.Reader.abort();
  }
}
var R = /* @__PURE__ */ ((f) => (f.\u4E0B\u884C_\u9644\u52A0\u6570\u636E = "DOWN_APPEND_DATA", f.\u4E0B\u884C_\u83B7\u53D6\u7ED3\u679C = "DOWN_GET_RESULT", f.\u4E0B\u884C_\u91CD\u7F6E = "DOWN_RESET", f.\u4E0B\u884C_\u5173\u95ED = "DOWN_CLOSE", f.\u4E0A\u884C_\u5E94\u7B54 = "UP_ACK", f.\u4E0A\u884C_\u7ED3\u679C = "UP_RESULT", f))(R || {});
class oe {
  constructor(e, t) {
    c(this, "enableWorker");
    c(this, "workerSupported");
    c(this, "debug");
    c(this, "sparkUnits", []);
    c(this, "workerUnits", []);
    c(this, "chunkHandlerQueue", []);
    c(this, "chunkHandler", []);
    c(this, "finished", !1);
    c(this, "canceled", !1);
    c(this, "paused", !1);
    c(this, "waitToContinue", []);
    c(this, "fileReaders", []);
    this.debug = t, this.enableWorker = e, this.workerSupported = typeof Worker < "u", this.enableWorker && this.debug && console.debug(`HashHelper > WebWoeker ${this.workerSupported ? "\u5DF2\u542F\u7528" : "\u672A\u542F\u7528\uFF08\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF09"}`);
  }
  async checkFile(e, t, n) {
    return new Promise(async (a, u) => {
      const l = e;
      e instanceof ue && (l.blob = l.file);
      let g = { preLoaded: 0, loaded: 0, total: e.size };
      n(g);
      const p = 1024 * 1024;
      for (; l.checkPosition < l.size; ) {
        if (this.canceled) {
          await this.reset(), a();
          break;
        }
        if (this.paused) {
          const b = async () => new Promise((m, F) => {
            this.waitToContinue[t] = m;
          });
          this.debug && console.debug("HashHelper > \u5DF2\u6682\u505C", t);
          const y = await b();
          if (this.waitToContinue[t] = null, this.debug && console.debug("HashHelper > \u5DF2\u6062\u590D", t), !y) {
            a();
            return;
          }
        }
        const k = l.blob.slice(l.checkPosition, Math.min(l.checkPosition + p, l.size));
        l.checkPosition += k.size, g.preLoaded += k.size, n(g), await this.appendData(k, t), g.loaded += k.size, n(g);
      }
      a(await this.getResult(t));
    });
  }
  async appendData(e, t) {
    let n = await this.fileReaders[t].readAsArrayBuffer(e);
    const a = { type: R.\u4E0B\u884C_\u9644\u52A0\u6570\u636E, data: n };
    this.workerSupported ? await this.workerPostMessage(t, a) : this.sparkUnits[t].append(n);
  }
  async getResult(e) {
    const t = { type: R.\u4E0B\u884C_\u83B7\u53D6\u7ED3\u679C };
    return this.workerSupported ? await this.workerPostMessage(e, t) : this.sparkUnits[e].end();
  }
  async reset() {
    if (this.enableWorker && this.workerSupported)
      for (let e = 0; e < this.workerUnits.length; e++)
        await this.resetByIndex(e);
    else
      for (let e = 0; e < this.sparkUnits.length; e++)
        await this.resetByIndex(e);
  }
  async resetByIndex(e) {
    if (this.enableWorker && this.workerSupported) {
      if (!this.workerUnits[e].used)
        return;
      await this.workerPostMessage(e, { type: R.\u4E0B\u884C_\u91CD\u7F6E }), this.debug && console.debug("HashHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u91CD\u7F6E", Object.assign({}, this.workerUnits[e]));
    } else
      this.sparkUnits[e].reset(), this.debug && console.debug("HashHelper > Spark\u8BA1\u7B97\u5355\u5143 \u5DF2\u91CD\u7F6E", Object.assign({}, this.sparkUnits[e]));
  }
  async closeByIndex(e) {
    this.fileReaders[e].close(), this.debug && console.debug("HashHelper > FileReadHelper \u5DF2\u5173\u95ED", Object.assign({}, this.fileReaders[e])), this.enableWorker && this.workerSupported ? (await this.workerPostMessage(e, { type: R.\u4E0B\u884C_\u5173\u95ED }), this.debug && console.debug("HashHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u5173\u95ED", Object.assign({}, this.workerUnits[e]))) : (this.sparkUnits[e].destroy(), this.debug && console.debug("HashHelper > Spark\u8BA1\u7B97\u5355\u5143 \u5DF2\u5173\u95ED", Object.assign({}, this.sparkUnits[e])));
  }
  async workerPostMessage(e, t) {
    let n = this.workerUnits[e];
    return n.used = !0, new Promise((a, u) => {
      n.worker.onmessage = (l) => {
        switch (l.data.type) {
          case R.\u4E0A\u884C_\u7ED3\u679C:
            a(l.data.data);
            break;
          case R.\u4E0A\u884C_\u5E94\u7B54:
          default:
            a();
        }
      }, n.worker.onerror = (l) => {
        n.used = !1, u(new S("WebWorker\u5F02\u5E38", l.error));
      }, n.worker.onmessageerror = (l) => {
        n.used = !1, u(new S(`WebWorker\u901A\u8BAF\u9519\u8BEF\uFF0C${l.data}`));
      }, t.type === R.\u4E0B\u884C_\u9644\u52A0\u6570\u636E ? n.worker.postMessage(t, [t.data]) : n.worker.postMessage(JSON.parse(JSON.stringify(t)));
    });
  }
  static async getInstance(e = 1, t = !0, n = !1) {
    return new Promise((a) => {
      let u = new oe(t, n);
      for (; u.fileReaders.length < e; )
        u.fileReaders.push(new Ee()), u.chunkHandler.push(!1), u.waitToContinue.push(null), u.debug && console.debug("HashHelper > FileReadHelper \u5DF2\u521B\u5EFA", Object.assign({}, u.fileReaders[u.fileReaders.length - 1]));
      if (u.enableWorker && u.workerSupported) {
        window.URL = window.URL || window.webkitURL;
        for (let l = 0; l < e; l++)
          u.workerUnits.push({
            worker: new Worker(window.URL.createObjectURL(wt)),
            used: !1
          }), u.debug && console.debug("HashHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u521B\u5EFA", Object.assign({}, u.workerUnits[l].worker));
      } else
        for (; u.sparkUnits.length < e; )
          u.sparkUnits.push(new _e.ArrayBuffer()), u.debug && console.debug("HashHelper > Spark\u8BA1\u7B97\u5355\u5143 \u5DF2\u521B\u5EFA", Object.assign({}, u.sparkUnits[u.sparkUnits.length - 1]));
      a(u);
    });
  }
  async handler(e, t) {
    return new Promise(async (n, a) => {
      this.debug && console.debug("HashHelper \u5F00\u59CB\u5904\u7406", Object.assign({}, e));
      let u = { preLoaded: 0, loaded: 0, total: e.size * 2 };
      const l = (y, m) => {
        u.preLoaded += y.preLoaded - m.preLoaded, u.loaded += y.loaded - m.loaded, m.preLoaded = y.preLoaded, m.loaded = y.loaded, t(u);
      }, g = async () => {
        var m;
        let y = { preLoaded: 0, loaded: 0, total: e.size };
        try {
          e.md5 = (m = await this.checkFile(
            e,
            0,
            (F) => {
              l(F, y);
            }
          )) != null ? m : null;
        } catch (F) {
          a(F);
        }
      }, p = () => {
        this.finished = !0, this.debug && console.debug("HashHelper \u5904\u7406\u7ED3\u675F", Object.assign({}, e)), n();
      };
      if (await g(), !e.needSection) {
        p();
        return;
      }
      const k = async () => {
        var h;
        if (this.finished)
          return;
        if (this.chunkHandlerQueue.length === 0) {
          for (let d = 0; d < this.chunkHandler.length; d++)
            if (this.chunkHandler[d])
              return;
          p();
          return;
        }
        let y = null;
        for (let d = 0; d < this.chunkHandler.length; d++)
          if (!this.chunkHandler[d]) {
            y = d;
            break;
          }
        if (y == null) {
          this.debug && console.debug(`HashHelper \u5DF2\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u6570\uFF1A${this.chunkHandler.length}\uFF0C\u5F53\u524D\u961F\u5217\u957F\u5EA6\uFF1A${this.chunkHandlerQueue.length}`, Object.assign({}, e));
          return;
        }
        this.chunkHandler[y] = !0;
        const m = () => {
          if (t(u), this.canceled) {
            this.reset().then(n).catch(n);
            return;
          }
          this.chunkHandler[y] = !1, k();
        }, F = this.chunkHandlerQueue.shift();
        if (F.checked) {
          u.preLoaded += F.size, u.loaded += F.size, t(u), m();
          return;
        }
        let D = { preLoaded: 0, loaded: 0, total: F.size };
        t(u), F.md5 = (h = await this.checkFile(
          F,
          y,
          (d) => {
            l(d, D);
          }
        )) != null ? h : null, m();
      }, b = (y) => {
        this.chunkHandlerQueue.push(y), k();
      };
      for (const y of e.chunks)
        b(y);
    });
  }
  async cancel() {
    if (this.canceled = !0, this.paused) {
      this.paused = !1;
      for (const e of this.waitToContinue)
        e && e(!1);
    }
    this.debug && console.debug("HashHelper \u5DF2\u53D6\u6D88");
  }
  async pause() {
    this.paused = !0, this.debug && console.debug("HashHelper \u5DF2\u6682\u505C");
  }
  async continue() {
    this.paused = !1;
    for (const e of this.waitToContinue)
      e && e(!0);
    this.debug && console.debug("HashHelper \u5DF2\u6062\u590D");
  }
  async close() {
    if (this.enableWorker && this.workerSupported)
      for (let e = 0; e < this.workerUnits.length; e++)
        await this.closeByIndex(e);
    else
      for (let e = 0; e < this.sparkUnits.length; e++)
        await this.closeByIndex(e);
    this.debug && console.debug("HashHelper \u5DF2\u5173\u95ED");
  }
}
var M = /* @__PURE__ */ ((f) => (f.\u4E0B\u884C_\u4E0A\u4F20 = "DOWN_UPLOAD", f.\u4E0B\u884C_\u53D6\u6D88 = "DOWN_CANCEL", f.\u4E0B\u884C_\u5173\u95ED = "DOWN_CLOSE", f.\u4E0A\u884C_\u8FDB\u5EA6 = "UP_PROGRESS", f.\u4E0A\u884C_\u53D6\u6D88 = "UP_CANCEL", f.\u4E0A\u884C_\u5B8C\u6210 = "UP_COMPLETED", f.\u4E0A\u884C_\u5931\u8D25 = "UP_FAILED", f.\u4E0A\u884C_\u8D85\u65F6 = "UP_TIMEOUT", f))(M || {}), V = /* @__PURE__ */ ((f) => (f.\u5141\u8BB8\u4E0A\u4F20 = "\u5141\u8BB8\u4E0A\u4F20", f.\u63A8\u8FDF\u4E0A\u4F20 = "\u63A8\u8FDF\u4E0A\u4F20", f.\u8DF3\u8FC7 = "\u8DF3\u8FC7", f.\u5168\u90E8\u8DF3\u8FC7 = "\u5168\u90E8\u8DF3\u8FC7", f))(V || {});
const Et = () => {
  let f;
  const e = (t, n, a) => {
    var l;
    const u = new XMLHttpRequest();
    if (u.overrideMimeType("application/octet-stream"), n)
      for (const g of n.keys())
        u.setRequestHeader(g, (l = n.get(g)) != null ? l : "");
    u.upload.onprogress = (g) => {
      postMessage({
        type: "UP_PROGRESS",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, u.onabort = (g) => {
      postMessage({
        type: "UP_CANCEL",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, u.onreadystatechange = () => {
      u.readyState === 4 && u.status === 200 && postMessage({
        type: "UP_COMPLETED",
        data: JSON.parse(u.response)
      });
    }, u.onerror = (g) => {
      postMessage({
        type: "UP_FAILED",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, u.ontimeout = (g) => {
      postMessage({
        type: "UP_TIMEOUT",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, u.open("POST", t, !0), u.send(a), f = u;
  };
  onmessage = (t) => {
    switch (t.data.type) {
      case "DOWN_UPLOAD":
        const n = t.data.data;
        e(n.url, n.headers, n.buffer);
        break;
      case "DOWN_CANCEL":
        f && f.readyState !== 4 && f.abort();
        break;
      case "DOWN_CLOSE":
        close();
        break;
    }
  };
}, Ct = new Blob([`(${Et.toString()})()`]);
class le {
  constructor(e, t, n) {
    c(this, "enableWorker");
    c(this, "workerSupported");
    c(this, "debug");
    c(this, "apiService");
    c(this, "cancelTokenList", /* @__PURE__ */ new Map());
    c(this, "workerUnits", []);
    c(this, "chunkHandlerQueue", []);
    c(this, "chunkHandler", []);
    c(this, "delayTimes", 0);
    c(this, "finished", !1);
    c(this, "canceled", !1);
    c(this, "paused", !1);
    c(this, "waitToContinue", []);
    c(this, "fileReaders", []);
    this.debug = n, this.enableWorker = e, this.workerSupported = typeof Worker < "u", this.apiService = t, this.enableWorker && this.debug && console.debug(`UploadHelper > WebWoeker ${this.workerSupported ? "\u5DF2\u542F\u7528" : "\u672A\u542F\u7528\uFF08\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF09"}`);
  }
  async uploadFile(e, t) {
    const n = await this.apiService.singleFile(e.configCode, e.file, e.name, t, (a) => {
      this.cancelTokenList.set(e.md5, a);
    });
    return this.cancelTokenList.delete(e.md5), n;
  }
  async uploadChunkFile(e, t, n, a) {
    await this.apiService.singleChunkFile(t.key, n.md5, n.blob, a, (u) => {
      this.cancelTokenList.set(n.md5, u);
    }), this.cancelTokenList.delete(n.md5);
  }
  async useWorkerUploadFile(e, t) {
    return new Promise(async (n, a) => {
      let u;
      try {
        u = await this.fileReaders[0].readAsArrayBuffer(e.file);
      } catch (l) {
        a(l);
        return;
      }
      try {
        const l = this.apiService.getSingleFileByArrayBufferRequestParams(e.configCode, e.file.type, e.extension, e.name), g = await this.workerPostMessage(0, {
          type: M.\u4E0B\u884C_\u4E0A\u4F20,
          data: {
            url: l.urlWithParams,
            headers: l.headers,
            buffer: u
          }
        }, t, !1);
        n(g);
        return;
      } catch (l) {
        a(l);
        return;
      }
    });
  }
  async useWorkerUploadChunkFile(e, t, n, a) {
    return new Promise(async (u, l) => {
      let g;
      try {
        g = await this.fileReaders[e].readAsArrayBuffer(n.blob);
      } catch (p) {
        l(p);
        return;
      }
      try {
        const p = this.apiService.getSingleChunkFileByArrayBufferRequestParams(t.key, n.md5);
        await this.workerPostMessage(
          e,
          {
            type: M.\u4E0B\u884C_\u4E0A\u4F20,
            data: {
              url: p.urlWithParams,
              headers: p.headers,
              buffer: g
            }
          },
          a,
          !0
        );
      } catch (p) {
        l(p);
        return;
      }
      u();
    });
  }
  async workerPostMessage(e, t, n, a) {
    let u = this.workerUnits[e];
    return u.used = !0, new Promise((l, g) => {
      u.worker.onmessage = (p) => {
        switch (p.data.type) {
          case M.\u4E0A\u884C_\u8FDB\u5EA6:
            const k = p.data.data;
            n && n({
              preLoaded: k.preLoaded,
              total: k.total,
              loaded: k.loaded
            });
            break;
          case M.\u4E0A\u884C_\u53D6\u6D88:
            const b = p.data.data;
            n && n({
              preLoaded: b.preLoaded,
              total: b.total,
              loaded: b.loaded
            }), u.used = !1, g(new S("\u4E0A\u4F20\u64CD\u4F5C\u5DF2\u53D6\u6D88"));
            break;
          case M.\u4E0A\u884C_\u5B8C\u6210:
            u.used = !1;
            try {
              const F = a ? this.apiService.getUserFileInfoFromSingleChunkFileByArrayBufferResponse(p.data.data) : this.apiService.getUserFileInfoFromSingleFileByArrayBufferResponse(p.data.data);
              l(F);
            } catch (F) {
              g(new S("\u4E0A\u4F20\u5931\u8D25", F));
            }
            break;
          case M.\u4E0A\u884C_\u5931\u8D25:
            const y = p.data.data;
            n && n({
              preLoaded: y.preLoaded,
              total: y.total,
              loaded: y.loaded
            }), u.used = !1, g(new S("\u4E0A\u4F20\u5931\u8D25"));
            break;
          case M.\u4E0A\u884C_\u8D85\u65F6:
            const m = p.data.data;
            n && n({
              preLoaded: m.preLoaded,
              total: m.total,
              loaded: m.loaded
            }), u.used = !1, g(new S("\u4E0A\u4F20\u64CD\u4F5C\u5904\u7406\u8D85\u65F6"));
            break;
          default:
            g(new S(`\u672A\u77E5\u7684UploadWorkerMessageType: ${p.data.type}.`));
        }
      }, u.worker.onerror = (p) => {
        u.used = !1, g(new S("WebWorker\u53D1\u751F\u9519\u8BEF", p.error));
      }, u.worker.onmessageerror = (p) => {
        u.used = !1, g(new S(`WebWorker\u901A\u8BAF\u9519\u8BEF\uFF0C${p.data}`));
      }, t.type === M.\u4E0B\u884C_\u4E0A\u4F20 ? u.worker.postMessage(t, [t.data.buffer]) : u.worker.postMessage(JSON.parse(JSON.stringify(t)));
    });
  }
  async closeByIndex(e) {
    this.fileReaders[e].close(), this.debug && console.debug("UploadHelper > FileReadHelper \u5DF2\u5173\u95ED", Object.assign({}, this.fileReaders[e])), this.enableWorker && this.workerSupported && (await this.workerPostMessage(e, { type: M.\u4E0B\u884C_\u5173\u95ED }), this.debug && console.debug("UploadHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u5173\u95ED", Object.assign({}, this.workerUnits[e].worker)));
  }
  static async getInstance(e, t = !0, n, a = !1) {
    return new Promise((u) => {
      let l = new le(t, n, a);
      for (; l.fileReaders.length < e; )
        l.fileReaders.push(new Ee()), l.chunkHandler.push(!1), l.waitToContinue.push(null), l.debug && console.debug("UploadHelper > FileReadHelper \u5DF2\u521B\u5EFA", Object.assign({}, l.fileReaders[l.fileReaders.length - 1]));
      if (l.enableWorker && l.workerSupported) {
        window.URL = window.URL || window.webkitURL;
        for (let g = 0; g < e; g++)
          l.workerUnits.push({
            worker: new Worker(window.URL.createObjectURL(Ct)),
            used: !1
          }), l.debug && console.debug("UploadHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u521B\u5EFA", Object.assign({}, l.workerUnits[g].worker));
      }
      u(l);
    });
  }
  async handler(e, t) {
    return new Promise(async (n, a) => {
      this.debug && console.debug("UploadHelper \u5F00\u59CB\u5904\u7406", Object.assign({}, e));
      const u = () => {
        this.finished = !0, this.debug && console.debug("UploadHelper \u5904\u7406\u7ED3\u675F", Object.assign({}, e)), n();
      };
      let l;
      try {
        e.needSection ? l = await this.apiService.preUploadFile(
          e.configCode,
          e.md5,
          e.file.type,
          e.extension,
          e.file.size.toString(),
          e.name,
          !0,
          e.specs,
          e.chunks.length
        ) : l = await this.apiService.preUploadFile(
          e.configCode,
          e.md5,
          e.file.type,
          e.extension,
          e.file.size.toString(),
          e.name,
          !1
        );
      } catch (g) {
        a(g);
        return;
      }
      if (l.uploaded) {
        this.debug && console.debug("UploadHelper \u5FFD\u7565\u5DF2\u4E0A\u4F20\u8FC7\u7684\u6587\u4EF6", Object.assign({}, e)), e.userFileInfo = l.userFileInfo, u();
        return;
      }
      if (e.needSection) {
        let g = { preLoaded: 0, loaded: 0, total: e.size };
        const p = async () => {
          if (this.finished)
            return;
          if (this.chunkHandlerQueue.length === 0) {
            for (let s = 0; s < this.chunkHandler.length; s++)
              if (this.chunkHandler[s])
                return;
            try {
              e.userFileInfo = await this.apiService.uploadChunkFileFinished(
                e.configCode,
                e.md5,
                e.specs,
                e.chunks.length,
                e.file.type,
                e.extension,
                e.name
              ), u();
            } catch (s) {
              a(s);
            }
            return;
          }
          let b = null;
          for (let s = 0; s < this.chunkHandler.length; s++)
            if (!this.chunkHandler[s]) {
              b = s;
              break;
            }
          if (b == null) {
            this.debug && console.debug(`HashHelper \u5DF2\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u6570\uFF1A${this.chunkHandler.length}\uFF0C\u5F53\u524D\u961F\u5217\u957F\u5EA6\uFF1A${this.chunkHandlerQueue.length}`, Object.assign({}, e));
            return;
          }
          this.chunkHandler[b] = !0;
          const y = () => {
            if (t(g), this.canceled) {
              n();
              return;
            }
            if (this.paused) {
              const s = async () => new Promise((i, o) => {
                this.waitToContinue[b] = i;
              });
              this.debug && console.debug("UploadHelper > \u5DF2\u6682\u505C", b), s().then((i) => {
                if (this.waitToContinue[b] = null, this.debug && console.debug("UploadHelper > \u5DF2\u6062\u590D", b), !i) {
                  n();
                  return;
                }
                this.chunkHandler[b] = !1, p();
              });
            } else
              this.chunkHandler[b] = !1, p();
          }, m = this.chunkHandlerQueue.shift();
          if (m.uploaded) {
            g.preLoaded += m.size, g.loaded += m.size, t(g), y();
            return;
          }
          let F = { preLoaded: m.size, loaded: 0, total: m.size };
          const D = (s) => {
            g.loaded += s.loaded - F.loaded, F.loaded = s.loaded, t(g);
          };
          let h;
          try {
            h = await this.apiService.preUploadChunkFile(
              e.md5,
              m.md5,
              m.index,
              e.specs,
              m.forced
            );
          } catch (s) {
            a(s);
            return;
          }
          g.preLoaded += F.preLoaded, t(g);
          const d = async () => {
            this.workerSupported ? await this.useWorkerUploadChunkFile(b, h, m, D) : await this.uploadChunkFile(b, h, m, D);
          };
          switch (h.state) {
            case V.\u5141\u8BB8\u4E0A\u4F20:
              await d();
              break;
            case V.\u5168\u90E8\u8DF3\u8FC7:
              this.chunkHandlerQueue.length = 0;
              return;
            case V.\u63A8\u8FDF\u4E0A\u4F20:
              this.chunkHandlerQueue.push(m), this.delayTimes++, this.delayTimes >= this.chunkHandlerQueue.length && (this.delayTimes = 0, m.forced = !0);
              break;
            case V.\u8DF3\u8FC7:
              D({ preLoaded: m.size, loaded: m.size, total: m.size });
              break;
          }
          y();
        }, k = (b) => {
          this.chunkHandlerQueue.push(b), p();
        };
        for (let b of e.chunks)
          k(b);
      } else
        try {
          this.workerSupported ? e.userFileInfo = await this.useWorkerUploadFile(e, t) : e.userFileInfo = await this.uploadFile(e, t), u();
        } catch (g) {
          a(g);
        }
    });
  }
  async cancel() {
    if (this.canceled = !0, this.paused) {
      this.paused = !1;
      for (const e of this.waitToContinue)
        e && e(!1);
    }
    if (this.enableWorker && this.workerSupported)
      for (let e = 0; e < this.workerUnits.length; e++)
        !this.workerUnits[e].used || (await this.workerPostMessage(e, { type: M.\u4E0B\u884C_\u53D6\u6D88 }), this.debug && console.debug("UploadHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u53D6\u6D88", Object.assign({}, this.workerUnits[e].worker)));
    else
      this.cancelTokenList.forEach((e) => {
        e();
      });
    this.debug && console.debug("UploadHelper \u5DF2\u53D6\u6D88");
  }
  async pause() {
    this.paused = !0, this.debug && console.debug("UploadHelper \u5DF2\u6682\u505C");
  }
  async continue() {
    this.paused = !1;
    for (const e of this.waitToContinue)
      e && e(!0);
    this.debug && console.debug("UploadHelper \u5DF2\u6062\u590D");
  }
  async close() {
    if (this.enableWorker && this.workerSupported)
      for (let e = 0; e < this.workerUnits.length; e++)
        await this.closeByIndex(e);
    else
      for (let e = 0; e < this.fileReaders.length; e++)
        await this.closeByIndex(e);
    this.debug && console.debug("UploadHelper \u5DF2\u5173\u95ED");
  }
}
class G {
  constructor(e, t) {
    c(this, "reactive", O);
    c(this, "settings");
    c(this, "apiService");
    c(this, "config");
    c(this, "rawFileList");
    c(this, "selectedFileList");
    c(this, "selectedFileSortMap");
    c(this, "checkQueue", []);
    c(this, "checkHandlerCount", 0);
    c(this, "uploadQueue", []);
    c(this, "pausedQueue", /* @__PURE__ */ new Map());
    c(this, "uploadHandlerCount", 0);
    c(this, "tokenWithIndex", /* @__PURE__ */ new Map());
    c(this, "layoutChanged", []);
    c(this, "configChanged", []);
    c(this, "selectedFileListChanged", []);
    c(this, "selectedFileSortMapChanged", []);
    c(this, "userFileInfoListChanged", []);
    c(this, "alertError", []);
    c(this, "beforeCheck");
    c(this, "afterCheck");
    c(this, "afterCheckAll");
    c(this, "afterUpload");
    c(this, "afterUploadAll");
    c(this, "handlerError");
    this.settings = this.reactive(e), this.apiService = t, this.rawFileList = this.reactive([]), this.selectedFileList = this.reactive([]), this.selectedFileSortMap = this.reactive(/* @__PURE__ */ new Map());
  }
  updateConfig() {
    return new Promise((e, t) => {
      this.apiService.config(this.settings.configCode).then((n) => {
        this.config = this.reactive(n), this.settings.debug && console.debug("\u914D\u7F6E\u5DF2\u53D8\u66F4:", Object.assign({}, this.config)), e();
      }).catch((n) => {
        t(new S("\u66F4\u65B0\u6587\u4EF6\u4E0A\u4F20\u914D\u7F6E\u9519\u8BEF", n));
      });
    });
  }
  watchSettings() {
    ne(
      () => this.settings.configCode,
      async (e, t) => {
        var n;
        console.debug(666666666), e != t && (await this.updateConfig(), (n = this.configChanged) == null || n.forEach((a) => a(this.config)));
      }
    ), ne(
      () => this.settings.layout,
      async (e, t) => {
        var n;
        e != t && ((n = this.layoutChanged) == null || n.forEach((a) => a(e)));
      }
    ), ne(
      () => this.selectedFileList,
      async (e, t) => {
        var n;
        (n = this.selectedFileListChanged) == null || n.forEach((a) => a(this.getSelectedFileList(!0)));
      },
      { deep: !0 }
    );
  }
  selectedFileSortMapChangedTrigger() {
    var e;
    (e = this.selectedFileSortMapChanged) == null || e.forEach((t) => t(this.getSelectedFileSortMap()));
  }
  userFileInfoListChangedTrigger() {
    var e;
    (e = this.userFileInfoListChanged) == null || e.forEach((t) => t(this.getUserFileInfoList(!0)));
  }
  appendFile(e) {
    let t = (u, l) => {
      const g = x.new();
      let p = new ue(u);
      p.name = l.name, p.extension = l.extension, p.configCode = this.config.code, p.token = g, this.rawFileList.push(p), l.rawIndex = this.rawFileList.length - 1, l.token = g, this.tokenWithIndex.set(g, this.selectedFileList.length), this.selectedFileList.push(l), this.selectedFileSortMap.set(this.selectedFileSortMap.size + 1, this.selectedFileList.length - 1), this.selectedFileSortMapChangedTrigger(), this.handleFile(this.selectedFileList.length - 1), this.settings.debug && console.debug("\u5DF2\u6DFB\u52A0\u6587\u4EF6", Object.assign({}, p));
    };
    if (this.selectedFileList.filter((u) => {
      var l;
      return !u.canceled && ((l = this.rawFileList[u.rawIndex].file) == null ? void 0 : l.name) == e.name;
    }).length > 0) {
      this.settings.debug && console.debug("\u91CD\u590D\u7684\u6587\u4EF6", e);
      return;
    }
    if (this.limited()) {
      this.throwError(new S(`\u5F53\u524D\u53EA\u5141\u8BB8\u4E0A\u4F20${this.getConfig().upperLimit}\u4E2A\u6587\u4EF6`));
      return;
    }
    const n = e.name.substring(e.name.lastIndexOf("."));
    if (this.config.allowedTypeList.length !== 0) {
      let u = !1;
      for (const l of this.config.allowedTypeList)
        if (l != null && l.length > 0 && (l[0] === "." && l.toLowerCase() === n.toLowerCase() || new RegExp(l.replace("/*", "//*"), "gi").test(e.type))) {
          u = !0;
          break;
        }
      if (!u) {
        console.warn(n, e.type), this.throwError(new S("\u6587\u4EF6\u7C7B\u578B\u4E0D\u5408\u6CD5"));
        return;
      }
    }
    if (this.config.prohibitedTypeList.length !== 0) {
      for (const u of this.config.prohibitedTypeList)
        if (u != null && u.length > 0 && (u[0] === "." && u.toLowerCase() === n.toLowerCase() || new RegExp(u.replace("/*", "//*"), "gi").test(e.type))) {
          console.warn(u, n, e.type), this.throwError(new S("\u6587\u4EF6\u7C7B\u578B\u4E0D\u5408\u6CD5"));
          return;
        }
    }
    if (this.config.lowerSingleSize && this.config.lowerSingleSize > e.size) {
      this.throwError(new S(`\u6587\u4EF6\u4E0D\u53EF\u5C0F\u4E8E${z.getSize(this.config.lowerSingleSize)}`));
      return;
    }
    if (this.config.upperSingleSize && this.config.upperSingleSize < e.size) {
      this.throwError(new S(`\u6587\u4EF6\u4E0D\u53EF\u5927\u4E8E${z.getSize(this.config.upperSingleSize)}`));
      return;
    }
    if (this.config.upperTotalSize && this.config.upperTotalSize < this.totalSize() + e.size) {
      this.throwError(new S(`\u6240\u6709\u6587\u4EF6\u7684\u603B\u5927\u5C0F\u4E0D\u53EF\u5927\u4E8E${z.getSize(this.config.upperTotalSize)}`));
      return;
    }
    let a = new ce(e);
    if (this.beforeCheck) {
      const u = this.beforeCheck(e);
      u && u.then && u.then((l) => {
        l && t(e, a);
      });
    } else
      t(e, a);
  }
  appendUploadedFile(e) {
    return new Promise(async (t, n) => {
      let a;
      try {
        a = await this.apiService.getUserFile(e);
        const u = x.new();
        let l = new ue(null);
        l.size = parseInt(a.bytes), l.name = a.name, l.extension = a.extension, l.configCode = this.config.code, l.echo = !0, l.token = u, l.userFileInfo = a, l.objectURL = this.apiService.getUserFileBrowseUrl(a.id), this.rawFileList.push(l);
        let g = { name: `${a.name}${a.extension}` }, p = new ce(g);
        p.rawIndex = this.rawFileList.length - 1, p.echo = !0, p.checked = !0, p.uploaded = !0, p.done = !0, p.canceled = !1, p.thumbnail = this.apiService.getUserFilePreviewUrl(a.id, 100, 100), p.fileType = a.fileType, p.size = a.size, p.token = u, this.tokenWithIndex.set(u, this.selectedFileList.length), this.selectedFileList.push(p), this.selectedFileSortMap.set(this.selectedFileSortMap.size + 1, this.selectedFileList.length - 1), this.selectedFileSortMapChangedTrigger(), this.settings.debug && console.debug("\u5DF2\u6DFB\u52A0\u5386\u53F2\u6587\u4EF6", e, Object.assign({}, l), Object.assign({}, p)), t();
      } catch (u) {
        n(new S("\u83B7\u53D6\u7528\u6237\u6587\u4EF6\u4FE1\u606F\u5931\u8D25", u));
      }
    });
  }
  getFileType(e) {
    return new Promise(async (t) => {
      let n;
      e.rawIndex == -1 ? n = {
        file: { type: null }
      } : n = this.getRawFile(e);
      try {
        e.fileType = n.file.type === null || n.file.type === "" || n.file.type === "application/octet-stream" ? await this.apiService.getFileTypeByExtension(e.extensionLower) : await this.apiService.getFileTypeByMIME(n.file.type);
      } catch {
        e.fileType = C.\u672A\u77E5;
      }
      t();
    });
  }
  checkImage(e) {
    if (e.fileType === C.\u672A\u77E5) {
      e.thumbnail = this.apiService.getUnknowFileTypeImageUrl();
      return;
    }
    if (e.fileType !== C.\u56FE\u7247)
      return;
    const t = this.getRawFile(e).objectURL;
    t && (e.thumbnail = t);
  }
  getRawFile(e) {
    return this.rawFileList[e.rawIndex];
  }
  getChunks(e) {
    let t = this.getRawFile(e);
    if (t.size > this.settings.chunkSize)
      t.needSection = !0, t.specs = this.settings.chunkSize;
    else
      return;
    let n = 0;
    for (; n < t.size; )
      t.chunkIndexQueue.push(t.chunks.length), t.chunks.push(new yt(t.chunks.length, t.file.slice(n, n + this.settings.chunkSize))), n += this.settings.chunkSize;
    this.settings.debug && console.debug("\u6587\u4EF6\u5DF2\u5207\u7247\u5904\u7406", Object.assign({}, t));
  }
  handleFile(e) {
    const t = this.selectedFileList[e];
    t.thumbnail = this.apiService.getFileTypeImageUrl(t.extensionLower), this.getFileType(t).then(() => {
      this.checkImage(t);
    }), t.size = z.getSize(this.getRawFile(t).size), this.settings.enableChunk && this.getChunks(t), this.pushToCheckQueue(e);
  }
  pushToCheckQueue(e) {
    this.checkQueue.push(e), (this.settings.runMode === q.\u5168\u81EA\u52A8 || this.settings.runMode === q.\u534A\u81EA\u52A8) && this.checkMD5();
  }
  pushToUploadQueue(e) {
    this.uploadQueue.push(e), this.settings.runMode == q.\u5168\u81EA\u52A8 && this.upload();
  }
  async checkMD5() {
    if (this.checkHandlerCount >= this.settings.concurrentFile || this.checkQueue.length === 0) {
      this.checkQueue.length != 0 && this.settings.debug && console.debug(`NaiveUpload \u6587\u4EF6\u6821\u9A8C \u5DF2\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u6570\uFF1A${this.settings.concurrentFile}\uFF0C\u5F53\u524D\u961F\u5217\u957F\u5EA6\uFF1A${this.checkQueue.length}`), this.checkHandlerCount == 0 && this.checkQueue.length === 0 && this.afterCheckAll && this.afterCheckAll && await this.afterCheckAll(this.rawFileList);
      return;
    }
    this.checkHandlerCount++;
    const e = () => {
      if (this.checkHandlerCount--, this.afterCheck) {
        const b = this.afterCheck(g);
        if (b && b.then) {
          b.then(() => {
            this.checkMD5();
          });
          return;
        }
      }
      this.settings.debug && console.debug("\u6821\u9A8C\u4E0B\u4E00\u4E2A\u6587\u4EF6"), this.checkMD5();
    }, t = (b) => {
      this.pausedQueue.has(u) ? this.pausedQueue.get(u).continue = !1 : this.pausedQueue.set(u, { step: 0, helper: b }), b && b.pause(), b && this.settings.debug && console.debug("HashHelper Instance \u5DF2\u6682\u505C", Object.assign({}, p)), l.virtualPercentBeforPaused = l.virtualPercent, l.percentBeforPaused = l.percent, this.settings.debug && console.debug("\u6682\u505C\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g)), e();
    }, n = async (b) => {
      await b.continue(), this.settings.debug && console.debug("HashHelper Instance \u5DF2\u6062\u590D", Object.assign({}, p)), this.settings.debug && console.debug("\u6062\u590D\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g));
    }, a = (b) => {
      b && b.cancel(), b && this.settings.debug && console.debug("HashHelper Instance \u5DF2\u53D6\u6D88", Object.assign({}, p)), this.settings.debug && console.debug("\u53D6\u6D88\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g)), e();
    }, u = this.checkQueue.shift(), l = this.selectedFileList[u], g = this.getRawFile(l);
    if (l.canceled) {
      a();
      return;
    }
    if (l.paused) {
      t(), e();
      return;
    }
    l.checking = !0;
    let p = null;
    if (this.pausedQueue.has(u) && (p = this.pausedQueue.get(u).helper, this.pausedQueue.delete(u), p)) {
      this.settings.debug && console.debug("HashHelper Instance \u5DF2\u83B7\u53D6\uFF08\u6682\u505C\u524D\u7684\u5B9E\u4F8B\uFF09", Object.assign({}, p)), await n(p);
      return;
    }
    p == null && (p = await oe.getInstance(this.settings.concurrentChunkFile, this.settings.enableWorker, this.settings.debug), this.settings.debug && console.debug("HashHelper Instance \u5DF2\u521B\u5EFA", Object.assign({}, p)));
    const k = () => {
      p.close(), this.settings.debug && console.debug("HashHelper Instance \u5DF2\u5173\u95ED", Object.assign({}, p));
    };
    try {
      if (this.settings.debug && console.debug("\u5F00\u59CB\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g)), await p.handler(g, (b) => {
        G.calcPercent(l, b), l.canceled && a(), l.paused && t(p);
      }), l.canceled)
        return;
      l.virtualPercent = 100, l.percent = 100, l.checking = !1, l.checked = !0, this.settings.debug && console.debug("\u6587\u4EF6\u6821\u9A8C\u7ED3\u675F", Object.assign({}, g)), this.pushToUploadQueue(u);
    } catch (b) {
      const y = new S("\u6587\u4EF6\u6821\u9A8C\u5931\u8D25.", b);
      this.checkError(u, `${y.message} ${b.message}`, !0, y);
    }
    k(), e();
  }
  async upload() {
    var b;
    if (this.config.lowerTotalSize && this.config.lowerTotalSize > this.totalSize()) {
      this.throwError(new S(`\u6240\u6709\u6587\u4EF6\u7684\u603B\u5927\u5C0F\u4E0D\u53EF\u5C0F\u4E8E${z.getSize(this.config.lowerTotalSize)}`));
      return;
    }
    if (this.uploadHandlerCount >= this.settings.concurrentFile) {
      this.settings.debug && console.debug(`NaiveUpload \u6587\u4EF6\u4E0A\u4F20 \u5DF2\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u6570\uFF1A${this.settings.concurrentFile}\uFF0C\u5F53\u524D\u961F\u5217\u957F\u5EA6\uFF1A${this.uploadQueue.length}`);
      return;
    }
    if (this.uploadQueue.length === 0) {
      this.checkHandlerCount === 0 && this.uploadHandlerCount === 0 && this.afterUploadAll && this.afterUploadAll(this.getRawFileList(!0));
      return;
    }
    this.uploadHandlerCount++;
    const e = (y) => {
      if (this.uploadHandlerCount--, y && this.afterUpload) {
        const m = this.afterUpload(g);
        m && m.then && m.then(() => {
          this.upload();
        });
      }
      this.settings.debug && console.debug("\u4E0A\u4F20\u4E0B\u4E00\u4E2A\u6587\u4EF6"), this.upload();
    }, t = (y) => {
      this.pausedQueue.has(u) ? this.pausedQueue.get(u).continue = !1 : this.pausedQueue.set(u, { step: 1, helper: y }), y && y.pause(), y && this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u6682\u505C", Object.assign({}, p)), l.virtualPercentBeforPaused = l.virtualPercent, l.percentBeforPaused = l.percent, this.settings.debug && console.debug("\u6682\u505C\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g)), e(!1);
    }, n = async (y) => {
      await y.continue(), this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u6062\u590D", Object.assign({}, p)), this.settings.debug && console.debug("\u6062\u590D\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g));
    }, a = (y) => {
      y && y.cancel(), y && this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u53D6\u6D88", Object.assign({}, p)), this.settings.debug && console.debug("\u53D6\u6D88\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g)), e(!1);
    }, u = this.uploadQueue.shift(), l = this.selectedFileList[u], g = this.getRawFile(l);
    if (l.canceled) {
      a();
      return;
    }
    if (l.paused) {
      t();
      return;
    }
    l.uploading = !0, l.virtualPercent = 0, l.percent = 0;
    let p = null;
    if (this.pausedQueue.has(u) && (p = this.pausedQueue.get(u).helper, this.pausedQueue.delete(u), p)) {
      this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u83B7\u53D6\uFF08\u6682\u505C\u524D\u7684\u5B9E\u4F8B\uFF09", Object.assign({}, p)), await n(p);
      return;
    }
    p == null && (p = await le.getInstance(this.settings.concurrentChunkFile, this.settings.enableWorker, this.apiService, this.settings.debug), this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u521B\u5EFA", Object.assign({}, p)));
    const k = () => {
      p.close(), this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u5173\u95ED", Object.assign({}, p));
    };
    try {
      if (this.settings.debug && console.debug("\u5F00\u59CB\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g)), await p.handler(g, (y) => {
        G.calcPercent(l, y), l.canceled && a(), l.paused && this.rawFileList[l.rawIndex].needSection && t(p);
      }), l.canceled)
        return;
      l.name = g.userFileInfo.name, l.extension = g.userFileInfo.extension, l.extensionLower = (b = g.userFileInfo.extension) == null ? void 0 : b.toLowerCase(), l.size = g.userFileInfo.size, l.fileType = g.userFileInfo.fileType, l.virtualPercent = 100, l.percent = 100, l.uploading = !1, l.uploaded = !0, l.done = !0, this.settings.debug && console.debug("\u6587\u4EF6\u4E0A\u4F20\u7ED3\u675F", Object.assign({}, g)), this.checkImage(l), this.userFileInfoListChangedTrigger();
    } catch (y) {
      const m = new S("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25.", y);
      this.uploadError(u, `${m.message} ${y.message}`, !0, m);
    }
    k(), e(!0);
  }
  static calcPercent(e, t) {
    const n = parseFloat((t.preLoaded / t.total * 100).toFixed(2)), a = parseFloat((t.loaded / t.total * 100).toFixed(2));
    e.virtualPercentBeforPaused < n && (e.virtualPercent = n), e.percentBeforPaused < a && (e.percent = a);
  }
  throwError(e) {
    this.settings.debug && console.debug("\u53D1\u751F\u5F02\u5E38", e), this.alertError.forEach((t) => t(e)), this.handlerError && this.handlerError(e);
  }
  error(e, t, n, a) {
    const u = this.selectedFileList[e];
    if (!n || u.reTry - 1 >= this.settings.retry) {
      u.error = !0, u.errorMessage = t;
      return;
    }
    u.reTry++, setTimeout(() => {
      a && a(e);
    }, 1500);
  }
  checkError(e, t, n, a) {
    a && S.consoleWrite(a);
    const u = this.selectedFileList[e];
    u.checking = !1, u.uploading = !1, this.error(e, t, n, (l) => {
      this.pushToCheckQueue(l);
    });
  }
  uploadError(e, t, n, a) {
    a && S.consoleWrite(a);
    const u = this.selectedFileList[e];
    u.uploading = !1, this.error(e, t, n, (l) => {
      this.pushToUploadQueue(l);
    });
  }
  async renameByIndex(e, t) {
    return new Promise((n) => {
      let a = this.getRawFile(e);
      const u = (l) => {
        l && (e.name = t, a.name = e.name, e.uploaded && (a.userFileInfo.name = e.name)), n();
      };
      e.uploaded ? this.apiService.rename(a.userFileInfo.id, t).then(() => {
        u(!0);
      }).catch((l) => {
        this.handlerError && this.handlerError(new S(`\u6587\u4EF6\u91CD\u547D\u540D\u5931\u8D25\uFF1A${l.message}`, l)), u(!1);
      }) : u(!0);
    });
  }
  continueByIndex(e) {
    if (this.selectedFileList[e].paused = !1, !this.pausedQueue.has(e) || this.pausedQueue.get(e).continue)
      return;
    const t = this.pausedQueue.get(e);
    switch (t.step) {
      case 0:
        this.checkQueue.push(e);
        break;
      case 1:
        this.uploadQueue.push(e);
        break;
      default:
        return;
    }
    t.continue = !0;
  }
  static async getInstance(e, t) {
    return new Promise(async (n, a) => {
      try {
        let u = new G(e, t);
        u.watchSettings(), await u.updateConfig(), n(u);
      } catch (u) {
        a(new S("\u83B7\u53D6\u4E0A\u4F20\u5DE5\u5177\u5B9E\u4F8B\u65F6\u53D1\u751F\u5F02\u5E38", u));
      }
    });
  }
  getSettings() {
    return this.settings;
  }
  getConfig() {
    return this.config;
  }
  checkNow() {
    this.checkMD5();
  }
  uploadNow() {
    this.upload();
  }
  pause(e) {
    if (e) {
      const t = this.tokenWithIndex.get(e);
      if (t == -1)
        return;
      this.selectedFileList[t].done || (this.selectedFileList[t].paused = !0);
    } else
      for (let t of this.selectedFileList)
        t.done || (t.paused = !0);
  }
  continue(e) {
    if (e) {
      const t = this.tokenWithIndex.get(e);
      if (t == -1)
        return;
      this.continueByIndex(t);
    } else
      for (let t = 0; t < this.selectedFileList.length; t++)
        this.continueByIndex(t);
    this.checkNow(), this.uploadNow();
  }
  remove(e) {
    const t = this.tokenWithIndex.get(e);
    t != -1 && (this.selectedFileList[t].canceled = !0, this.userFileInfoListChangedTrigger());
  }
  clean() {
    for (let e of this.selectedFileList)
      e.canceled = !0;
  }
  reset() {
    this.checkQueue.length = 0, this.uploadQueue.length = 0, this.rawFileList.length = 0, this.selectedFileList.length = 0, this.tokenWithIndex.clear();
  }
  getOpenApi() {
    return {
      startCheck: () => {
        for (let e = 0; e < this.settings.concurrentFile; e++)
          this.checkNow();
      },
      startUpload: () => {
        for (let e = 0; e < this.settings.concurrentFile; e++)
          this.uploadNow();
      },
      pause: (e) => {
        this.pause(e);
      },
      continue: (e) => {
        this.continue(e);
      },
      remove: (e) => {
        this.remove(e);
      },
      clean: () => {
        this.clean();
      },
      finished: () => this.checkQueue.length === 0 && this.uploadQueue.length === 0 && this.pausedQueue.size === 0,
      getUserFileInfoList: () => this.getUserFileInfoList(!0)
    };
  }
  async rename(e, t) {
    const n = this.tokenWithIndex.get(e);
    if (n == -1)
      throw new S("\u6587\u4EF6\u5DF2\u88AB\u79FB\u9664");
    let a = this.selectedFileList[n];
    return this.renameByIndex(a, t);
  }
  getDownloadUrl(e) {
    var n;
    const t = this.rawFileList[e.rawIndex];
    return t.file ? (n = t.objectURL) != null ? n : null : this.apiService.getDownloadUrl(t.userFileInfo.id, e.name);
  }
  anyFile() {
    return this.selectedFileList.filter((e) => !e.canceled).length !== 0;
  }
  getSelectFileAlarmInfo() {
    return this.config.upperLimit ? this.selectedFileList.length < this.config.upperLimit ? `\u8FD8\u53EF\u6DFB\u52A0\u4E2A${this.config.upperLimit - this.selectedFileList.length}\u6587\u4EF6` : "\u6587\u4EF6\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650" : "";
  }
  getSelectCLass() {
    return this.limited() ? "item-limited" : "";
  }
  getAllowedTypes() {
    return this.config.allowedTypeList.join(", ");
  }
  limited() {
    return !!this.config.upperLimit && this.selectedFileList.filter((e) => !e.canceled).length >= this.config.upperLimit;
  }
  totalSize() {
    let e = 0;
    for (const t of this.selectedFileList)
      t.canceled || (e += this.rawFileList[t.rawIndex].size);
    return e;
  }
  append(e) {
    this.appendFile(e);
  }
  async appendById(e) {
    return this.appendUploadedFile(e);
  }
  changeSort(e, t) {
    if (e == t)
      return;
    const n = this.selectedFileSortMap.get(e);
    if (e > t)
      for (let a = e; a > t; a--)
        setInterval(() => {
        }, 100), this.selectedFileSortMap.set(a, this.selectedFileSortMap.get(a - 1));
    else
      for (let a = e; a < t; a++)
        this.selectedFileSortMap.set(a, this.selectedFileSortMap.get(a + 1));
    this.selectedFileSortMap.set(t, n), this.selectedFileSortMapChangedTrigger();
  }
  registerLayoutChanged(e) {
    this.layoutChanged.push(e);
  }
  registerConfigChanged(e) {
    this.configChanged.push(e);
  }
  registerSelectedFileListChanged(e) {
    this.selectedFileListChanged.push(e);
  }
  registerSelectedFileSortMapChanged(e) {
    this.selectedFileSortMapChanged.push(e);
  }
  registerUserFileInfoListChanged(e) {
    this.userFileInfoListChanged.push(e);
  }
  registerAlertError(e) {
    this.alertError.push(e);
  }
  setupBeforeCheck(e) {
    this.beforeCheck = e;
  }
  setupAfterCheck(e) {
    this.afterCheck = e;
  }
  setupAfterCheckAll(e) {
    this.afterCheckAll = e;
  }
  setupAfterUpload(e) {
    this.afterUpload = e;
  }
  setupAfterUploadAll(e) {
    this.afterUploadAll = e;
  }
  setupHandlerError(e) {
    this.handlerError = e;
  }
  getSelectedFileCount() {
    return this.selectedFileList.filter((e) => !e.canceled).length;
  }
  getSelectedFileSortMap() {
    return this.selectedFileSortMap;
  }
  getSelectedFileList(e) {
    if (!e)
      return this.selectedFileList.filter((n) => !n.canceled);
    const t = [];
    for (let n = 1; n <= this.selectedFileSortMap.size; n++) {
      const a = this.selectedFileList[this.selectedFileSortMap.get(n)];
      a.canceled || t.push(a);
    }
    return t;
  }
  getRawFileList(e) {
    return this.getSelectedFileList(e).map((t) => this.rawFileList[t.rawIndex]);
  }
  getUserFileInfoList(e) {
    return this.getRawFileList(e).filter((t) => t.userFileInfo).map((t) => t.userFileInfo);
  }
  getSelectedFile(e) {
    return this.selectedFileList[this.selectedFileSortMap.get(e)];
  }
  getGradientStyle(e, t, n, a) {
    switch (e) {
      default:
      case "conic":
        return `
background: conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;
background: -moz-conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;
background: -o-conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;
background: -webkit-conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;`;
      case "linear":
        return `
background: linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;
background: -moz-linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;
background: -o-linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;
background: -webkit-linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%;`;
    }
  }
  getGradientStyleObject(e, t, n, a) {
    switch (e) {
      default:
      case "conic":
        return [
          { background: `conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` },
          { background: `-moz-conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` },
          { background: `-o-conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` },
          { background: `-webkit-conic-gradient(${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` }
        ];
      case "linear":
        return [
          { background: `linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` },
          { background: `-moz-linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` },
          { background: `-o-linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` },
          { background: `-webkit-linear-gradient(to right, ${t} ${n}%, transparent ${a}%)  repeat scroll 0% 0%` }
        ];
    }
  }
}
const kt = { key: 0 }, Dt = /* @__PURE__ */ P({
  __name: "index.vue3",
  props: {
    modelValue: { default: () => [] },
    settings: { default: () => Y.default() },
    apiService: null,
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "setOpenApi", "beforeCheck", "afterCheck", "afterCheckAll", "afterUpload", "afterUploadAll", "error"],
  setup(f, { emit: e }) {
    const t = f;
    let n = null;
    Be("upload", () => n);
    let a = O({
      loading: !0,
      currentUpload: null
    });
    return (async () => {
      if (t.apiService == null)
        throw new Error("\u5FC5\u987B\u8BBE\u7F6E\u4E00\u4E2AIApiService\u7684\u5B9E\u73B0\u7C7B");
      t.readonly && (t.settings.readonly = !0);
      try {
        n = await G.getInstance(t.settings, t.apiService);
      } catch (g) {
        e("error", g);
        return;
      }
      n.getSettings().debug && console.debug("NaiveUpload Instance \u5DF2\u521B\u5EFA", Object.assign({}, n)), n.setupBeforeCheck((g) => (n.getSettings().debug && console.debug("BeforeCheck => ", Object.assign({}, g)), e("beforeCheck", g) === void 0 ? new Promise((p) => {
        p(!0);
      }) : e("beforeCheck", g))), n.setupAfterCheck((g) => (n.getSettings().debug && console.debug("AfterCheck => ", Object.assign({}, g)), e("afterCheck", g))), n.setupAfterCheckAll((g) => (n.getSettings().debug && console.debug("AfterCheckAll => ", Object.assign({}, g)), e("afterCheckAll", g))), n.setupAfterUpload((g) => (n.getSettings().debug && console.debug("AfterUpload => ", Object.assign({}, g)), e("afterUpload", g))), n.setupAfterUploadAll((g) => (n.getSettings().debug && console.debug("AfterUploadAll => ", Object.assign({}, g)), e("afterUploadAll", g))), n.setupHandlerError((g) => (n.getSettings().debug && console.debug("HandlerError => ", Object.assign({}, g)), e("error", g)));
      const u = (g) => {
        a.loading = !0, n.getConfig().upperLimit == 1 ? a.currentUpload = N(ct) : a.currentUpload = N(bt), a.loading = !1, n.getSettings().debug && console.debug("Layout\uFF1Aindex Component \u5DF2\u53D8\u66F4");
      };
      n.registerConfigChanged(u), u();
      const l = (g) => {
        t.modelValue.splice(0, t.modelValue.length), g.forEach((p) => t.modelValue.push(p.id)), e("update:modelValue", t.modelValue), n.getSettings().debug && console.debug(
          "ModelValue UserFileIdList => ",
          Object.assign({}, t.modelValue)
        );
      };
      if (n.registerUserFileInfoListChanged(l), e("setOpenApi", n.getOpenApi()), t.modelValue && t.modelValue.length > 0)
        for (const g of t.modelValue)
          await n.appendById(g);
      a.loading = !1, n.getSettings().debug && console.debug("Naive Upload Component(Vue3) \u5DF2\u52A0\u8F7D");
    })(), (u, l) => w(a).loading ? L("", !0) : (E(), A("div", kt, [
      (E(), W(ae(w(a).currentUpload)))
    ]));
  }
});
class Lt {
  getFileTypeByExtension(e) {
    return Promise.resolve(ee.getByExtension(e));
  }
  getFileTypeByMIME(e) {
    return Promise.resolve(ee.getByMIME(e));
  }
  getFileTypeImageUrl(e) {
    return `/filetypes/${(e != null ? e : ".empty").substring(1)}.png`;
  }
  getUnknowFileTypeImageUrl() {
    return "/filetypes/empty.png";
  }
}
const vt = {
  install(f) {
    f.component("naive-upload", Dt);
  }
};
export {
  yt as ChunkFile,
  Lt as DefaultApiService,
  J as DraggingHelper,
  Ee as FileReadHelper,
  z as FileSizeHelper,
  C as FileType,
  ee as FileTypeHelper,
  oe as HashHelper,
  wt as HashWorkerScript,
  X as Layout,
  Dt as NaiveUpload,
  V as PreUploadChunkFileState,
  $ as RGBAColor,
  ue as RawFile,
  q as RunMode,
  Y as Settings,
  x as SimpleGuid,
  S as UploadError,
  le as UploadHelper,
  Ct as UploadWorkerScript,
  vt as default
};
//# sourceMappingURL=naive-upload.js.map
