var Ee = Object.defineProperty;
var ke = (f, e, t) => e in f ? Ee(f, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : f[e] = t;
var c = (f, e, t) => (ke(f, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as T, openBlock as C, createElementBlock as S, unref as w, createElementVNode as _, withModifiers as De, renderSlot as M, normalizeClass as de, normalizeStyle as ue, createCommentVNode as L, createBlock as W, resolveDynamicComponent as ae, withCtx as P, Fragment as Z, withDirectives as he, vModelText as ge, createTextVNode as se, createSlots as pe, renderList as ie, createVNode as V, TransitionGroup as Se, toDisplayString as Ae } from "vue";
import { inject as I, reactive as R, getCurrentInstance as fe, shallowRef as N, watch as ne, provide as Be } from "vue-demi";
import _e from "spark-md5";
var q = /* @__PURE__ */ ((f) => (f.\u5168\u81EA\u52A8 = "AT", f.\u624B\u52A8\u6321 = "MT", f.\u534A\u81EA\u52A8 = "AMT", f))(q || {}), X = /* @__PURE__ */ ((f) => (f.\u5361\u7247 = "Card", f.\u6E05\u5355 = "Detailedly", f))(X || {});
class $ {
  constructor(e, t, s, o) {
    c(this, "r");
    c(this, "g");
    c(this, "b");
    c(this, "a");
    c(this, "toString", () => `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`);
    this.r = e, this.g = t, this.b = s, this.a = o;
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
    c(this, "dragPreparationTime", 1500);
    c(this, "dragChangePositionTime", 1300);
  }
};
let Y = te;
c(Y, "default", () => new te()), c(Y, "defaultWithConfigCode", (e) => new te().setup((t) => t.configCode = e));
const Le = ["title"], ve = ["multiple", "accept"], $e = { class: "upload-box-content" }, Fe = /* @__PURE__ */ T({
  __name: "FileInput.vue3",
  setup(f) {
    const e = I("upload")();
    R({});
    let t;
    const s = (l) => {
      l && (t = l);
    }, o = (l) => {
      e.limited() || t == null || t.click();
    }, r = (l) => {
      if (t && t.files)
        for (let g = 0; g < t.files.length; g++)
          e.append(t.files[g]);
      t && (t.value = "");
    };
    return (async () => e.getSettings().debug && console.debug("Piece: File Input Component(vue3) \u5DF2\u52A0\u8F7D"))(), (l, g) => (C(), S("div", {
      class: "upload-btn",
      onClick: o,
      title: w(e).getSettings().tip
    }, [
      _("div", {
        onClick: g[0] || (g[0] = De(() => {
        }, ["stop"]))
      }, [
        _("input", {
          type: "file",
          multiple: w(e).getConfig().upperLimit > 1,
          ref: s,
          accept: w(e).getAllowedTypes(),
          onChange: r
        }, null, 40, ve)
      ]),
      _("div", $e, [
        M(l.$slots, "default")
      ])
    ], 8, Le));
  }
});
var E = /* @__PURE__ */ ((f) => (f.\u7535\u5B50\u6587\u6863 = "\u7535\u5B50\u6587\u6863", f.\u7535\u5B50\u8868\u683C = "\u7535\u5B50\u8868\u683C", f.\u6587\u672C\u6587\u4EF6 = "\u6587\u672C\u6587\u4EF6", f.\u56FE\u7247 = "\u56FE\u7247", f.\u97F3\u9891 = "\u97F3\u9891", f.\u89C6\u9891 = "\u89C6\u9891", f.\u538B\u7F29\u5305 = "\u538B\u7F29\u5305", f.\u672A\u77E5 = "\u672A\u77E5", f.\u5916\u94FE\u8D44\u6E90 = "\u5916\u94FE\u8D44\u6E90", f))(E || {});
const Ue = ["title"], Pe = {
  key: 0,
  class: "item-body"
}, Te = { class: "item-image" }, xe = ["src", "alt"], He = {
  key: 0,
  class: "item-tools"
}, Ie = {
  key: 1,
  class: "item-sub sub-paused"
}, Me = {
  key: 2,
  class: "item-sub sub-done"
}, Re = {
  key: 3,
  class: "item-sub sub-error"
}, be = /* @__PURE__ */ T({
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
    const t = f, { proxy: s } = fe(), o = I("upload")();
    let r = R({
      hover: !1,
      container: {
        style: () => `item-container ${t.selectedFile.done && !o.getSettings().readonly ? " item-done" : ""} ${t.selectedFile.error ? " item-error" : ""} ${r.hover && !r.rename.active && !t.selectedFile.checking && !t.selectedFile.uploading && !t.readyDrag && !t.startDrag ? " item-hover" : ""} ${t.selectedFile.checking ? " item-checking" : ""} ${t.selectedFile.uploading ? " item-uploading" : ""} ${t.selectedFile.canceled ? " item-canceled" : ""} ${t.selectedFile.paused ? " item-paused" : ""} ${t.readyDrag ? " item-ready-drag" : ""} ${t.dragging ? " item-dragging" : ""} ${t.dragover ? " item-drag-over" : ""}`,
        styleVar: () => ({
          "--statusCheckingColor": o.getSettings().statusCheckingColor.toString(),
          "--statusUploadingColor": o.getSettings().statusUploadingColor.toString(),
          "--statusPausedColor": o.getSettings().statusPausedColor.toString(),
          "--statusPausedSubColor": o.getSettings().statusPausedSubColor.toString(),
          "--statusDoneColor": o.getSettings().statusDoneColor.toString(),
          "--statusDoneSubColor": o.getSettings().statusDoneSubColor.toString(),
          "--statusErrorColor": o.getSettings().statusErrorColor.toString(),
          "--statusErrorSubColor": o.getSettings().statusErrorSubColor.toString(),
          "--dragPreparationTime": `${(o.getSettings().dragPreparationTime / 1e3).toFixed(2)}s`,
          "--dragChangePositionTime": `${(o.getSettings().dragChangePositionTime / 1e3).toFixed(2)}s`,
          "--dragReadyColor": o.getSettings().dragReadyColor.toString(),
          "--dragMovingColor": o.getSettings().dragMovingColor.toString(),
          "--dragOverColor": o.getSettings().dragOverColor.toString()
        }),
        info: () => `${t.selectedFile.done ? "\u4E0A\u4F20\u6210\u529F" : ""} ${t.selectedFile.error ? t.selectedFile.errorMessage : ""} ${t.selectedFile.paused ? "\u5DF2\u6682\u505C" : ""}`
      },
      loading: {
        show: () => !r.rename.active && (t.selectedFile.checking || t.selectedFile.uploading),
        info: () => `${t.selectedFile.checking ? "\u626B\u63CF\u4E2D..." + t.selectedFile.percent + "%" : ""} ${t.selectedFile.uploading ? "\u4E0A\u4F20\u4E2D..." + t.selectedFile.percent + "%" : ""}`
      },
      tools: {
        show: () => r.hover && t.dragging === !1 && !r.rename.active && !t.selectedFile.checking && !t.selectedFile.uploading
      },
      rename: {
        enable: () => !t.selectedFile.uploading,
        active: !1,
        value: ""
      },
      view: {
        enable: () => {
          switch (t.selectedFile.fileType) {
            case E.\u56FE\u7247:
            case E.\u97F3\u9891:
              return t.selectedFile.extensionLower !== ".flac";
            case E.\u89C6\u9891:
              return !0;
            case E.\u6587\u672C\u6587\u4EF6:
              return !0;
            case E.\u7535\u5B50\u6587\u6863:
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
    const g = (a) => {
      a && e("setContainerRef", a);
    }, p = (a) => {
      a && (l = a);
    }, A = (a) => {
      t.readyDrag || t.startDrag ? (e("mouseEnter", a), r.hover = !1) : r.hover = !0;
    }, b = (a) => {
      (t.readyDrag || t.startDrag) && e("mouseLeave", a), r.hover = !1;
    }, y = (a) => {
      e("mouseDown", a);
    }, m = (a) => {
      e("mouseUp", a);
    }, F = () => {
      r.rename.active = !0, s.$nextTick(() => {
        l && l.focus();
      });
    }, k = (a) => {
      a.key == "Enter" && h();
    }, h = () => {
      o.rename(t.selectedFile.token, r.rename.value).then(() => {
        r.rename.active = !1;
      }).catch(() => {
        r.rename.active = !1;
      });
    }, d = () => {
      const a = o.getRawFile(t.selectedFile), u = "margin:0px;text-align: center;display: flex;flex-direction: row;justify-content: center;align-items: center";
      switch (t.selectedFile.fileType) {
        case E.\u56FE\u7247:
          let B = window.open();
          B == null || B.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${u};background-color: black;"><img style="max-width: 100%;max-height: 100%;" src="${a.objectURL}" alt="${t.selectedFile.fullname()}"></body>`
          );
          break;
        case E.\u97F3\u9891:
          if (t.selectedFile.extensionLower === ".flac")
            return;
          let v = window.open();
          v == null || v.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${u};background-color: black;"><audio style="max-width: 100%;max-height: 100%;" src="${a.objectURL}" controls="controls">\u62B1\u6B49, \u6682\u4E0D\u652F\u6301</audio></body>`
          );
          break;
        case E.\u89C6\u9891:
          let U = window.open();
          U == null || U.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${u};background-color: black;"><video style="max-width: 100%;max-height: 100%;" src="${a.objectURL}" controls="controls">\u62B1\u6B49, \u6682\u4E0D\u652F\u6301</video></body>`
          );
          break;
        default:
          let Q = window.open();
          Q == null || Q.document.write(
            `<head><title>${t.selectedFile.fullname()}</title></head><body style="${u};"><object style="max-width: 100%;max-height: 100%;" data="${a.objectURL}" type="${t.selectedFile.extensionLower === ".txt" ? "text/plain" : t.selectedFile.extensionLower === ".pdf" ? "application/pdf" : "application/octet-stream"}" width="100%" height="100%"><iframe src="${a.objectURL}" width="100%" height="100%" ></iframe></object></body>`
          );
          break;
      }
    }, n = () => {
      const a = o.getRawFile(t.selectedFile), u = document.createElement("a");
      u.style.display = "none", u.href = o.getDownloadUrl(t.selectedFile), a.file && (u.download = t.selectedFile.fullname()), document.body.appendChild(u), u.click(), document.body.removeChild(u);
    }, i = () => {
      o.remove(t.selectedFile.token);
    };
    return (async () => o.getSettings().debug && console.debug("Piece: Selected File Info Component(vue3) \u5DF2\u52A0\u8F7D"))(), (a, u) => (C(), S("div", {
      class: de(w(r).container.style()),
      style: ue(w(r).container.styleVar()),
      title: w(r).container.info(),
      onMouseenter: A,
      onMouseleave: b,
      onMousedown: y,
      onMouseup: m,
      ref: g
    }, [
      t.selectedFile.canceled ? L("", !0) : (C(), S("div", Pe, [
        _("div", Te, [
          _("img", {
            src: t.selectedFile.thumbnail,
            loading: "lazy",
            alt: t.selectedFile.fullname()
          }, null, 8, xe)
        ]),
        w(r).tools.show() ? (C(), S("span", He, [
          w(r).rename.enable() && !w(o).getSettings().readonly ? (C(), S("span", {
            key: 0,
            class: "upload-icon icon-rename",
            title: "\u91CD\u547D\u540D",
            onClick: u[0] || (u[0] = (B) => F())
          })) : L("", !0),
          w(r).view.enable() ? (C(), S("span", {
            key: 1,
            class: "upload-icon icon-view",
            title: "\u67E5\u770B",
            onClick: u[1] || (u[1] = (B) => d())
          })) : L("", !0),
          w(r).save.enable() ? (C(), S("span", {
            key: 2,
            class: "upload-icon icon-download",
            title: "\u4FDD\u5B58",
            onClick: u[2] || (u[2] = (B) => n())
          })) : L("", !0),
          w(o).getSettings().readonly ? L("", !0) : (C(), S("span", {
            key: 3,
            class: "upload-icon icon-remove",
            title: "\u5220\u9664",
            onClick: u[3] || (u[3] = (B) => i())
          }))
        ])) : L("", !0),
        M(a.$slots, "default", {
          selectedFile: t.selectedFile,
          rename: w(r).rename,
          funs: {
            setRenameInputRef: p,
            renameKeydown: k,
            renameDone: h
          },
          loading: w(r).loading
        }),
        t.selectedFile.paused ? (C(), S("div", Ie, " \u6682\u505C ")) : L("", !0),
        t.selectedFile.done && !w(o).getSettings().readonly ? (C(), S("div", Me, " \u5B8C\u6210 ")) : L("", !0),
        t.selectedFile.error ? (C(), S("div", Re, "\u9519\u8BEF")) : L("", !0)
      ]))
    ], 46, Ue));
  }
}), Oe = { class: "upload-container independent" }, ze = { class: "upload-list" }, We = /* @__PURE__ */ T({
  __name: "index.vue3",
  setup(f) {
    const e = I("upload")();
    return (async () => e.getSettings().debug && console.debug("Layout: Card Index Component(vue3) \u5DF2\u52A0\u8F7D"))(), (t, s) => (C(), S("div", Oe, [
      M(t.$slots, "uploadContainer", {}, void 0, !0),
      _("div", ze, [
        M(t.$slots, "listContainer", {}, void 0, !0)
      ])
    ]));
  }
});
const ye = (f, e) => {
  const t = f.__vccOpts || f;
  for (const [s, o] of e)
    t[s] = o;
  return t;
}, je = /* @__PURE__ */ ye(We, [["__scopeId", "data-v-dfb9d6ed"]]), Qe = { class: "upload-container independent" }, Ne = { class: "upload-list" }, Xe = /* @__PURE__ */ T({
  __name: "index.vue3",
  setup(f) {
    const e = I("upload")();
    return (async () => e.getSettings().debug && console.debug("Layout: Detailedly Index Component(vue3) \u5DF2\u52A0\u8F7D"))(), (t, s) => (C(), S("div", Qe, [
      M(t.$slots, "uploadContainer", {}, void 0, !0),
      _("div", Ne, [
        M(t.$slots, "listContainer", {}, void 0, !0)
      ])
    ]));
  }
});
const Ye = /* @__PURE__ */ ye(Xe, [["__scopeId", "data-v-ae4f85bd"]]), Ke = { key: 0 }, me = /* @__PURE__ */ T({
  __name: "index.vue3",
  setup(f) {
    const e = I("upload")();
    let t = R({
      loading: !0,
      currentThemeIndex: null
    });
    return (async () => {
      const s = (o) => {
        switch (t.loading = !0, o) {
          case X.\u5361\u7247:
            t.currentThemeIndex = N(je);
            break;
          case X.\u6E05\u5355:
            t.currentThemeIndex = N(Ye);
            break;
        }
        t.loading = !1, e.getSettings().debug && console.debug("Layout: Index Component(vue3) \u5DF2\u53D8\u66F4");
      };
      e.registerLayoutChanged(s), s(e.getSettings().layout), e.getSettings().debug && console.debug("Layout: Index Component(vue3) \u5DF2\u52A0\u8F7D");
    })(), (s, o) => w(t).loading ? L("", !0) : (C(), S("div", Ke, [
      (C(), W(ae(w(t).currentThemeIndex), null, {
        uploadContainer: P(() => [
          M(s.$slots, "uploadContainer")
        ]),
        listContainer: P(() => [
          M(s.$slots, "listContainer")
        ]),
        _: 3
      }))
    ]));
  }
}), Ve = { class: "item-info" }, qe = ["title", "innerHTML"], Je = ["title"], Ge = /* @__PURE__ */ T({
  __name: "info.vue3",
  props: {
    slotProps: null
  },
  setup(f) {
    const e = f, t = I("upload")();
    let s = R({
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
    return (async () => t.getSettings().debug && console.debug("Layout: Card Info Component(vue3) \u5DF2\u52A0\u8F7D"))(), (o, r) => (C(), S(Z, null, [
      _("div", Ve, [
        e.slotProps.rename.active ? L("", !0) : (C(), S("span", {
          key: 0,
          class: "single-text-omitted item-name",
          title: e.slotProps.selectedFile.fileType + `\r
` + e.slotProps.selectedFile.size + `\r
` + e.slotProps.selectedFile.fullname(),
          innerHTML: e.slotProps.selectedFile.fullname()
        }, null, 8, qe)),
        e.slotProps.rename.active ? he((C(), S("input", {
          key: 1,
          class: "item-rename-input",
          type: "text",
          "onUpdate:modelValue": r[0] || (r[0] = (l) => e.slotProps.rename.value = l),
          ref: e.slotProps.funs.setRenameInputRef,
          onKeydown: r[1] || (r[1] = (l) => e.slotProps.funs.renameKeydown(l)),
          onBlur: r[2] || (r[2] = (l) => e.slotProps.funs.renameDone())
        }, null, 544)), [
          [ge, e.slotProps.rename.value]
        ]) : L("", !0)
      ]),
      e.slotProps.loading.show() ? (C(), S("div", {
        key: 0,
        class: "item-loading",
        style: ue(w(s).lodingStyle()),
        title: e.slotProps.loading.info()
      }, null, 12, Je)) : L("", !0)
    ], 64));
  }
}), Ze = { class: "item-info" }, et = { class: "single-text-omitted item-name" }, tt = ["title", "innerHTML"], st = { class: "single-text-omitted item-size" }, nt = ["title", "innerHTML"], it = { class: "single-text-omitted item-filetype" }, rt = ["title", "innerHTML"], ut = ["title"], at = /* @__PURE__ */ T({
  __name: "info.vue3",
  props: {
    slotProps: null
  },
  setup(f) {
    const e = f, t = I("upload")();
    let s = R({
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
    return (async () => t.getSettings().debug && console.debug("Layout: Detailedly Info Component(vue3) \u5DF2\u52A0\u8F7D"))(), (o, r) => (C(), S(Z, null, [
      _("div", Ze, [
        _("span", et, [
          se(" \u540D\u79F0\uFF1A"),
          e.slotProps.rename.active ? L("", !0) : (C(), S("span", {
            key: 0,
            title: e.slotProps.selectedFile.fullname(),
            innerHTML: e.slotProps.selectedFile.fullname()
          }, null, 8, tt)),
          e.slotProps.rename.value ? he((C(), S("input", {
            key: 1,
            class: "item-rename-input",
            type: "text",
            "onUpdate:modelValue": r[0] || (r[0] = (l) => e.slotProps.selectedFile.newName = l),
            ref: e.slotProps.funs.setRenameInputRef,
            onKeydown: r[1] || (r[1] = (l) => e.slotProps.funs.renameKeydown(l)),
            onBlur: r[2] || (r[2] = (l) => e.slotProps.funs.renameDone())
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
          }, null, 8, rt)
        ])
      ]),
      e.slotProps.loading.show() ? (C(), S("div", {
        key: 0,
        class: "item-loading",
        style: ue(w(s).lodingStyle()),
        title: e.slotProps.loading.info()
      }, null, 12, ut)) : L("", !0)
    ], 64));
  }
}), ot = { key: 0 }, we = /* @__PURE__ */ T({
  __name: "info.vue3",
  props: {
    slotProps: null
  },
  setup(f) {
    const e = f, t = I("upload")();
    let s = R({
      loading: !0,
      currentThemeInfo: null
    });
    return (async () => (((r) => {
      switch (s.loading = !0, t.getSettings().layout) {
        case X.\u5361\u7247:
          s.currentThemeInfo = N(Ge);
          break;
        case X.\u6E05\u5355:
          s.currentThemeInfo = N(at);
          break;
      }
      s.loading = !1, t.getSettings().debug && console.debug("Layout: Info Component(vue3) \u5DF2\u53D8\u66F4");
    })(), t.getSettings().debug && console.debug("Layout: Info Component(vue3) \u5DF2\u52A0\u8F7D")))(), (o, r) => w(s).loading ? L("", !0) : (C(), S("div", ot, [
      (C(), W(ae(w(s).currentThemeInfo), {
        slotProps: e.slotProps
      }, null, 8, ["slotProps"]))
    ]));
  }
}), lt = /* @__PURE__ */ _("p", { class: "upload-icon icon-select-file" }, null, -1), ct = /* @__PURE__ */ T({
  __name: "SingleUpload.vue3",
  setup(f) {
    const e = I("upload")();
    return (async () => e.getSettings().debug && console.debug("Piece: Single Upload Component(vue3) \u5DF2\u52A0\u8F7D"))(), (t, s) => (C(), W(me, null, pe({
      listContainer: P(() => [
        (C(!0), S(Z, null, ie(w(e).getSelectedFileSortMap().size, (o) => (C(), W(be, {
          key: o,
          selectedFile: w(e).getSelectedFile(o)
        }, {
          default: P((r) => [
            V(we, {
              class: "item-info-container",
              slotProps: r
            }, null, 8, ["slotProps"])
          ]),
          _: 2
        }, 1032, ["selectedFile"]))), 128))
      ]),
      _: 2
    }, [
      w(e).getSettings().readonly ? void 0 : {
        name: "uploadContainer",
        fn: P(() => [
          w(e).anyFile() ? L("", !0) : (C(), W(Fe, {
            key: 0,
            class: "upload-box-container single",
            title: w(e).getConfig().explain
          }, {
            default: P(() => [
              lt
            ]),
            _: 1
          }, 8, ["title"]))
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), dt = ["title"], ht = /* @__PURE__ */ T({
  __name: "DropFileInput.vue3",
  setup(f) {
    const e = I("upload")(), t = (o) => {
      o.preventDefault();
    }, s = (o) => {
      if (o.preventDefault(), o.dataTransfer)
        for (let r = 0; r < o.dataTransfer.files.length; r++)
          e.append(o.dataTransfer.files[r]);
    };
    return (async () => e.getSettings().debug && console.debug("Piece: Drop File Input Component(vue3) \u5DF2\u52A0\u8F7D"))(), (o, r) => (C(), S("div", {
      class: de(w(e).getSelectCLass()),
      onDrop: s,
      onDragover: t,
      title: w(e).getSelectFileAlarmInfo()
    }, [
      V(Fe, null, {
        default: P(() => [
          M(o.$slots, "default")
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
  static equalError(e, t, s) {
    return t + s >= e && t - s <= e;
  }
  static getInstance(e, t) {
    let s = new J();
    return s.el = t, s.containerEl = e, s;
  }
  start(e, t, s) {
    this.flag = !0, this.currentX = e, this.currentY = t, this.save();
    let o = !1;
    this.mouseMove = (r) => {
      !this.flag || o || (r.preventDefault(), o = !0, this.moving(r.clientX, r.clientY), s && s(r), o = !1);
    }, this.containerEl.addEventListener("mousemove", this.mouseMove), this.scroll = (r) => {
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
    e && this.restore(), this.containerEl.removeEventListener("mousemove", this.mouseMove), this.containerEl.removeEventListener("scroll", this.scroll);
  }
}
const gt = /* @__PURE__ */ _("p", { class: "upload-icon icon-inbox" }, null, -1), pt = ["innerHTML"], ft = ["innerHTML"], Ft = { class: "upload-error-list pretty-scrollbar" }, bt = /* @__PURE__ */ T({
  __name: "MultipleUpload.vue3",
  setup(f) {
    const { proxy: e } = fe(), t = I("upload")();
    let s = R({
      scrollLock: !1,
      readyDraggingSortKey: null,
      currentDraggingSortKey: null,
      lastDraggingSortKey: null,
      errors: []
    }), o, r = /* @__PURE__ */ new Map(), l = {
      startTick: null,
      changeTick: null,
      draggingHelper: null,
      ready2start: (F, k, h) => {
        if (!t.getSettings().enableDrag) {
          t.getSettings().debug && console.debug(
            "Piece: Multiple Upload Component(vue3) \u672A\u542F\u7528\u62D6\u52A8\u6392\u5E8F\u529F\u80FD"
          );
          return;
        }
        t.getSelectedFileList(!1).length <= 1 || (l.startTick = setTimeout(() => {
          s.readyDraggingSortKey = F, l.startTick = setTimeout(() => {
            !o || (s.readyDraggingSortKey = null, s.currentDraggingSortKey = F, l.draggingHelper = J.getInstance(
              o,
              r.get(s.currentDraggingSortKey)
            ), l.draggingHelper.start(k, h), r.forEach((d, n) => {
              n !== s.currentDraggingSortKey && (d.style.zIndex = "1");
            }));
          }, t.getSettings().dragPreparationTime);
        }, 500));
      },
      ready2change: (F) => {
        s.lastDraggingSortKey = F, s.currentDraggingSortKey !== s.lastDraggingSortKey && (l.changeTick = setTimeout(() => {
          t.changeSort(
            s.currentDraggingSortKey,
            s.lastDraggingSortKey
          ), l.end();
        }, t.getSettings().dragChangePositionTime));
      },
      cancelChange: () => {
        l.changeTick && clearTimeout(l.changeTick), s.lastDraggingSortKey = null;
      },
      end: () => {
        l.startTick && clearTimeout(l.startTick), l.changeTick && clearTimeout(l.changeTick), s.readyDraggingSortKey = null, l.draggingHelper && (l.draggingHelper.end(!0), l.draggingHelper = null, r.forEach((F, k) => {
          k !== s.currentDraggingSortKey && (F.style.zIndex = "");
        }), s.lastDraggingSortKey = null, s.currentDraggingSortKey = null);
      }
    };
    const g = (F) => {
      F && (o = F);
    }, p = (F, k) => {
      !o || r.set(F, k);
    }, A = (F, k) => {
      l.ready2start(F, k.clientX, k.clientY);
    }, b = (F, k) => {
      l.end();
    }, y = (F, k) => {
      l.ready2change(F);
    }, m = (F, k) => {
      l.cancelChange();
    };
    return (async () => {
      const F = (h) => {
        s.scrollLock || h.length == 0 || e.$nextTick(() => {
          let d = null, n = !1;
          for (let i = 0; i < h.length; i++) {
            let a = h[i];
            if (!n && a.checking && (n = !0, d = r.get(i)), a.uploading) {
              d = r.get(i);
              break;
            }
          }
          !d || o && (o.scrollTop = d.offsetTop - o.offsetTop - 20);
        });
      };
      t.registerSelectedFileListChanged(F);
      const k = (h) => {
        s.errors.push(h.message), setTimeout(() => {
          s.errors.shift();
        }, 5e3);
      };
      t.getSettings().alertErrorInfo && t.registerAlertError(k), t.getSettings().debug && console.debug("Piece: Multiple Upload Component(vue3) \u5DF2\u52A0\u8F7D");
    })(), (F, k) => (C(), W(me, null, pe({
      listContainer: P(() => [
        _("div", {
          class: "scroll-container pretty-scrollbar",
          ref: g,
          onMouseenter: k[0] || (k[0] = (h) => w(s).scrollLock = !0),
          onMouseleave: k[1] || (k[1] = (h) => w(s).scrollLock = !1)
        }, [
          V(Se, { name: "fade" }, {
            default: P(() => [
              (C(!0), S(Z, null, ie(w(t).getSelectedFileSortMap().size, (h) => {
                var d;
                return C(), W(be, {
                  key: (d = w(t).getSelectedFileSortMap().get(h)) != null ? d : -1,
                  selectedFile: w(t).getSelectedFile(h),
                  readyDrag: w(s).readyDraggingSortKey === h,
                  startDrag: w(s).currentDraggingSortKey !== null,
                  dragging: w(s).currentDraggingSortKey === h,
                  dragover: w(s).lastDraggingSortKey === h && w(s).currentDraggingSortKey !== h,
                  onSetContainerRef: (n) => p(h, n),
                  onMouseDown: (n) => A(h, n),
                  onMouseUp: (n) => b(),
                  onMouseEnter: (n) => y(h),
                  onMouseLeave: (n) => m()
                }, {
                  default: P((n) => [
                    V(we, {
                      class: "item-info-container",
                      slotProps: n
                    }, null, 8, ["slotProps"])
                  ]),
                  _: 2
                }, 1032, ["selectedFile", "readyDrag", "startDrag", "dragging", "dragover", "onSetContainerRef", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave"]);
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
        fn: P(() => [
          V(ht, { class: "upload-box-container" }, {
            default: P(() => [
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
                (C(!0), S(Z, null, ie(w(s).errors, (h, d) => (C(), S("p", {
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
class D extends Error {
  constructor(t, s) {
    super(t);
    c(this, "innerError");
    this.innerError = s;
  }
  static consoleWriteWithIndex(t, s) {
    console.error(`\u7B2C${s}\u5C42\u9519\u8BEF`, t), t instanceof D && t.innerError && D.consoleWriteWithIndex(t.innerError, ++s);
  }
  static consoleWrite(t) {
    D.consoleWriteWithIndex(t, 1);
  }
}
class re {
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
        return E.\u56FE\u7247;
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
        return E.\u97F3\u9891;
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
        return E.\u89C6\u9891;
      case ".xls":
      case ".xlsx":
      case ".csv":
        return E.\u7535\u5B50\u8868\u683C;
      case ".pdf":
      case ".doc":
      case ".docx":
        return E.\u7535\u5B50\u6587\u6863;
      case ".txt":
      case ".js":
      case ".css":
      case ".cs":
      case ".html":
      case ".vue":
      case ".ts":
      case ".xml":
      case ".json":
        return E.\u6587\u672C\u6587\u4EF6;
      case ".zip":
      case ".rar":
      case ".7z":
        return E.\u538B\u7F29\u5305;
      default:
        return E.\u672A\u77E5;
    }
  }
  static getByMIME(e) {
    const t = e.toLocaleLowerCase();
    if (t.indexOf("image/", 0) != -1)
      return E.\u56FE\u7247;
    if (t.indexOf("audio/", 0) != -1)
      return E.\u97F3\u9891;
    if (t.indexOf("video/", 0) != -1)
      return E.\u89C6\u9891;
    if (t.indexOf("text/", 0) != -1)
      return E.\u6587\u672C\u6587\u4EF6;
    switch (e) {
      case "application/ogg":
        return E.\u97F3\u9891;
      case "application/mp4":
        return E.\u89C6\u9891;
      case "application/vnd.ms-excel":
      case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return E.\u7535\u5B50\u8868\u683C;
      case "application/pdf":
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return E.\u7535\u5B50\u6587\u6863;
      case "application/json":
      case "application/javascript":
        return E.\u6587\u672C\u6587\u4EF6;
      case "application/x-tar":
      case "application/zip":
      case "application/x-compressed":
      case "application/x-zip-compressed":
        return E.\u538B\u7F29\u5305;
      default:
        return E.\u672A\u77E5;
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
    c(this, "fileType", E.\u672A\u77E5);
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
    var s;
    const t = e.name.lastIndexOf(".");
    this.name = e.name.substring(0, t), this.extension = e.name.substring(t), this.extensionLower = (s = this.extension) == null ? void 0 : s.toLowerCase(), this.fileType = e.type ? ee.getByMIME(e.type) : ee.getByExtension(this.extension);
  }
}
class H {
  static s4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  static new() {
    return `${H.s4()}${H.s4()}-${H.s4()}-${H.s4()}-${H.s4()}-${H.s4()}${H.s4()}${H.s4()}`;
  }
}
const j = class {
  static getSize(e, t = 1024, s = 2) {
    if (e <= 0)
      return "0 KB";
    for (let o = 0; o < j.formats.length; o++) {
      let r = e / Math.pow(t, o + 1);
      if (r < t)
        return `${r.toFixed(s)} ${j.formats[o]}`;
    }
    return `${(e / Math.pow(t, j.formats.length)).toFixed(s)} ${j.formats[j.formats.length - 1]}`;
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
    let n = h[0], i = h[1], a = h[2], u = h[3];
    n += (i & a | ~i & u) + d[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + i | 0, u += (n & i | ~n & a) + d[1] - 389564586 | 0, u = (u << 12 | u >>> 20) + n | 0, a += (u & n | ~u & i) + d[2] + 606105819 | 0, a = (a << 17 | a >>> 15) + u | 0, i += (a & u | ~a & n) + d[3] - 1044525330 | 0, i = (i << 22 | i >>> 10) + a | 0, n += (i & a | ~i & u) + d[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + i | 0, u += (n & i | ~n & a) + d[5] + 1200080426 | 0, u = (u << 12 | u >>> 20) + n | 0, a += (u & n | ~u & i) + d[6] - 1473231341 | 0, a = (a << 17 | a >>> 15) + u | 0, i += (a & u | ~a & n) + d[7] - 45705983 | 0, i = (i << 22 | i >>> 10) + a | 0, n += (i & a | ~i & u) + d[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + i | 0, u += (n & i | ~n & a) + d[9] - 1958414417 | 0, u = (u << 12 | u >>> 20) + n | 0, a += (u & n | ~u & i) + d[10] - 42063 | 0, a = (a << 17 | a >>> 15) + u | 0, i += (a & u | ~a & n) + d[11] - 1990404162 | 0, i = (i << 22 | i >>> 10) + a | 0, n += (i & a | ~i & u) + d[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + i | 0, u += (n & i | ~n & a) + d[13] - 40341101 | 0, u = (u << 12 | u >>> 20) + n | 0, a += (u & n | ~u & i) + d[14] - 1502002290 | 0, a = (a << 17 | a >>> 15) + u | 0, i += (a & u | ~a & n) + d[15] + 1236535329 | 0, i = (i << 22 | i >>> 10) + a | 0, n += (i & u | a & ~u) + d[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + i | 0, u += (n & a | i & ~a) + d[6] - 1069501632 | 0, u = (u << 9 | u >>> 23) + n | 0, a += (u & i | n & ~i) + d[11] + 643717713 | 0, a = (a << 14 | a >>> 18) + u | 0, i += (a & n | u & ~n) + d[0] - 373897302 | 0, i = (i << 20 | i >>> 12) + a | 0, n += (i & u | a & ~u) + d[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + i | 0, u += (n & a | i & ~a) + d[10] + 38016083 | 0, u = (u << 9 | u >>> 23) + n | 0, a += (u & i | n & ~i) + d[15] - 660478335 | 0, a = (a << 14 | a >>> 18) + u | 0, i += (a & n | u & ~n) + d[4] - 405537848 | 0, i = (i << 20 | i >>> 12) + a | 0, n += (i & u | a & ~u) + d[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + i | 0, u += (n & a | i & ~a) + d[14] - 1019803690 | 0, u = (u << 9 | u >>> 23) + n | 0, a += (u & i | n & ~i) + d[3] - 187363961 | 0, a = (a << 14 | a >>> 18) + u | 0, i += (a & n | u & ~n) + d[8] + 1163531501 | 0, i = (i << 20 | i >>> 12) + a | 0, n += (i & u | a & ~u) + d[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + i | 0, u += (n & a | i & ~a) + d[2] - 51403784 | 0, u = (u << 9 | u >>> 23) + n | 0, a += (u & i | n & ~i) + d[7] + 1735328473 | 0, a = (a << 14 | a >>> 18) + u | 0, i += (a & n | u & ~n) + d[12] - 1926607734 | 0, i = (i << 20 | i >>> 12) + a | 0, n += (i ^ a ^ u) + d[5] - 378558 | 0, n = (n << 4 | n >>> 28) + i | 0, u += (n ^ i ^ a) + d[8] - 2022574463 | 0, u = (u << 11 | u >>> 21) + n | 0, a += (u ^ n ^ i) + d[11] + 1839030562 | 0, a = (a << 16 | a >>> 16) + u | 0, i += (a ^ u ^ n) + d[14] - 35309556 | 0, i = (i << 23 | i >>> 9) + a | 0, n += (i ^ a ^ u) + d[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + i | 0, u += (n ^ i ^ a) + d[4] + 1272893353 | 0, u = (u << 11 | u >>> 21) + n | 0, a += (u ^ n ^ i) + d[7] - 155497632 | 0, a = (a << 16 | a >>> 16) + u | 0, i += (a ^ u ^ n) + d[10] - 1094730640 | 0, i = (i << 23 | i >>> 9) + a | 0, n += (i ^ a ^ u) + d[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + i | 0, u += (n ^ i ^ a) + d[0] - 358537222 | 0, u = (u << 11 | u >>> 21) + n | 0, a += (u ^ n ^ i) + d[3] - 722521979 | 0, a = (a << 16 | a >>> 16) + u | 0, i += (a ^ u ^ n) + d[6] + 76029189 | 0, i = (i << 23 | i >>> 9) + a | 0, n += (i ^ a ^ u) + d[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + i | 0, u += (n ^ i ^ a) + d[12] - 421815835 | 0, u = (u << 11 | u >>> 21) + n | 0, a += (u ^ n ^ i) + d[15] + 530742520 | 0, a = (a << 16 | a >>> 16) + u | 0, i += (a ^ u ^ n) + d[2] - 995338651 | 0, i = (i << 23 | i >>> 9) + a | 0, n += (a ^ (i | ~u)) + d[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + i | 0, u += (i ^ (n | ~a)) + d[7] + 1126891415 | 0, u = (u << 10 | u >>> 22) + n | 0, a += (n ^ (u | ~i)) + d[14] - 1416354905 | 0, a = (a << 15 | a >>> 17) + u | 0, i += (u ^ (a | ~n)) + d[5] - 57434055 | 0, i = (i << 21 | i >>> 11) + a | 0, n += (a ^ (i | ~u)) + d[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + i | 0, u += (i ^ (n | ~a)) + d[3] - 1894986606 | 0, u = (u << 10 | u >>> 22) + n | 0, a += (n ^ (u | ~i)) + d[10] - 1051523 | 0, a = (a << 15 | a >>> 17) + u | 0, i += (u ^ (a | ~n)) + d[1] - 2054922799 | 0, i = (i << 21 | i >>> 11) + a | 0, n += (a ^ (i | ~u)) + d[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + i | 0, u += (i ^ (n | ~a)) + d[15] - 30611744 | 0, u = (u << 10 | u >>> 22) + n | 0, a += (n ^ (u | ~i)) + d[6] - 1560198380 | 0, a = (a << 15 | a >>> 17) + u | 0, i += (u ^ (a | ~n)) + d[13] + 1309151649 | 0, i = (i << 21 | i >>> 11) + a | 0, n += (a ^ (i | ~u)) + d[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + i | 0, u += (i ^ (n | ~a)) + d[11] - 1120210379 | 0, u = (u << 10 | u >>> 22) + n | 0, a += (n ^ (u | ~i)) + d[2] + 718787259 | 0, a = (a << 15 | a >>> 17) + u | 0, i += (u ^ (a | ~n)) + d[9] - 343485551 | 0, i = (i << 21 | i >>> 11) + a | 0, h[0] = n + h[0] | 0, h[1] = i + h[1] | 0, h[2] = a + h[2] | 0, h[3] = u + h[3] | 0;
  }
  function t(h) {
    let d = [], n;
    for (n = 0; n < 64; n += 4)
      d[n >> 2] = h.charCodeAt(n) + (h.charCodeAt(n + 1) << 8) + (h.charCodeAt(n + 2) << 16) + (h.charCodeAt(n + 3) << 24);
    return d;
  }
  function s(h) {
    let d = [], n;
    for (n = 0; n < 64; n += 4)
      d[n >> 2] = h[n] + (h[n + 1] << 8) + (h[n + 2] << 16) + (h[n + 3] << 24);
    return d;
  }
  function o(h) {
    let d = h.length, n = [1732584193, -271733879, -1732584194, 271733878], i, a, u, B, v, U;
    for (i = 64; i <= d; i += 64)
      e(n, t(h.substring(i - 64, i)));
    for (h = h.substring(i - 64), a = h.length, u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < a; i += 1)
      u[i >> 2] |= h.charCodeAt(i) << (i % 4 << 3);
    if (u[i >> 2] |= 128 << (i % 4 << 3), i > 55)
      for (e(n, u), i = 0; i < 16; i += 1)
        u[i] = 0;
    return B = d * 8, B = B.toString(16).match(/(.*?)(.{0,8})$/), v = parseInt(B[2], 16), U = parseInt(B[1], 16) || 0, u[14] = v, u[15] = U, e(n, u), n;
  }
  function r(h) {
    let d = h.length, n = [1732584193, -271733879, -1732584194, 271733878], i, a, u, B, v, U;
    for (i = 64; i <= d; i += 64)
      e(n, s(h.subarray(i - 64, i)));
    for (h = i - 64 < d ? h.subarray(i - 64) : new Uint8Array(0), a = h.length, u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < a; i += 1)
      u[i >> 2] |= h[i] << (i % 4 << 3);
    if (u[i >> 2] |= 128 << (i % 4 << 3), i > 55)
      for (e(n, u), i = 0; i < 16; i += 1)
        u[i] = 0;
    return B = d * 8, B = B.toString(16).match(/(.*?)(.{0,8})$/), v = parseInt(B[2], 16), U = parseInt(B[1], 16) || 0, u[14] = v, u[15] = U, e(n, u), n;
  }
  function l(h) {
    let d = "", n;
    for (n = 0; n < 4; n += 1)
      d += f[h >> n * 8 + 4 & 15] + f[h >> n * 8 & 15];
    return d;
  }
  function g(h) {
    let d;
    for (d = 0; d < h.length; d += 1)
      h[d] = l(h[d]);
    return h.join("");
  }
  g(o("hello")), typeof ArrayBuffer < "u" && !ArrayBuffer.prototype.slice && function() {
    function h(d, n) {
      return d = d | 0 || 0, d < 0 ? Math.max(d + n, 0) : Math.min(d, n);
    }
    ArrayBuffer.prototype.slice = function(d, n) {
      let i = this.byteLength, a = h(d, i), u = i, B, v, U, Q;
      return n !== void 0 && (u = h(n, i)), a > u ? new ArrayBuffer(0) : (B = u - a, v = new ArrayBuffer(B), U = new Uint8Array(v), Q = new Uint8Array(this, a, B), U.set(Q), v);
    };
  }();
  function p(h) {
    return /[\u0080-\uFFFF]/.test(h) && (h = unescape(encodeURIComponent(h))), h;
  }
  function A(h, d) {
    let n = h.length, i = new ArrayBuffer(n), a = new Uint8Array(i), u;
    for (u = 0; u < n; u += 1)
      a[u] = h.charCodeAt(u);
    return d ? a : i;
  }
  function b(h) {
    return String.fromCharCode.apply(null, new Uint8Array(h));
  }
  function y(h, d, n) {
    let i = new Uint8Array(h.byteLength + d.byteLength);
    return i.set(new Uint8Array(h)), i.set(new Uint8Array(d), h.byteLength), n ? i : i.buffer;
  }
  function m(h) {
    let d = [], n = h.length, i;
    for (i = 0; i < n - 1; i += 2)
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
    let d = this._buff.length, n;
    for (n = 64; n <= d; n += 64)
      e(this._hash, t(this._buff.substring(n - 64, n)));
    return this._buff = this._buff.substring(n - 64), this;
  }, F.prototype.end = function(h) {
    let d = this._buff, n = d.length, i, a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], u;
    for (i = 0; i < n; i += 1)
      a[i >> 2] |= d.charCodeAt(i) << (i % 4 << 3);
    return this._finish(a, n), u = g(this._hash), h && (u = m(u)), this.reset(), u;
  }, F.prototype.reset = function() {
    return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
  }, F.prototype.getState = function() {
    return { buff: this._buff, length: this._length, hash: this._hash.slice() };
  }, F.prototype.setState = function(h) {
    return this._buff = h.buff, this._length = h.length, this._hash = h.hash, this;
  }, F.prototype.destroy = function() {
    delete this._hash, delete this._buff, delete this._length;
  }, F.prototype._finish = function(h, d) {
    let n = d, i, a, u;
    if (h[n >> 2] |= 128 << (n % 4 << 3), n > 55)
      for (e(this._hash, h), n = 0; n < 16; n += 1)
        h[n] = 0;
    i = this._length * 8, i = i.toString(16).match(/(.*?)(.{0,8})$/), a = parseInt(i[2], 16), u = parseInt(i[1], 16) || 0, h[14] = a, h[15] = u, e(this._hash, h);
  }, F.hash = function(h, d) {
    return F.hashBinary(p(h), d);
  }, F.hashBinary = function(h, d) {
    let n = o(h), i = g(n);
    return d ? m(i) : i;
  }, F.ArrayBuffer = function() {
    this.reset();
  }, F.ArrayBuffer.prototype.append = function(h) {
    let d = y(this._buff.buffer, h, !0), n = d.length, i;
    for (this._length += h.byteLength, i = 64; i <= n; i += 64)
      e(this._hash, s(d.subarray(i - 64, i)));
    return this._buff = i - 64 < n ? new Uint8Array(d.buffer.slice(i - 64)) : new Uint8Array(0), this;
  }, F.ArrayBuffer.prototype.end = function(h) {
    let d = this._buff, n = d.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], a, u;
    for (a = 0; a < n; a += 1)
      i[a >> 2] |= d[a] << (a % 4 << 3);
    return this._finish(i, n), u = g(this._hash), h && (u = m(u)), this.reset(), u;
  }, F.ArrayBuffer.prototype.reset = function() {
    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
  }, F.ArrayBuffer.prototype.getState = function() {
    let h = F.prototype.getState.call(this);
    return h.buff = b(h.buff), h;
  }, F.ArrayBuffer.prototype.setState = function(h) {
    return h.buff = A(h.buff, !0), F.prototype.setState.call(this, h);
  }, F.ArrayBuffer.prototype.destroy = F.prototype.destroy, F.ArrayBuffer.prototype._finish = F.prototype._finish, F.ArrayBuffer.hash = function(h, d) {
    let n = r(new Uint8Array(h)), i = g(n);
    return d ? m(i) : i;
  };
  const k = new F.ArrayBuffer();
  onmessage = (h) => {
    switch (h.data.type) {
      case "DOWN_APPEND_DATA":
        const d = h.data.data;
        k.append(d);
        break;
      case "DOWN_GET_RESULT":
        postMessage(JSON.parse(JSON.stringify({
          type: "UP_RESULT",
          data: k.end(!1)
        })));
        return;
      case "DOWN_RESET":
        k.reset();
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
class Ce {
  constructor() {
    c(this, "Reader");
    if (typeof FileReader > "u")
      throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301FileReader.");
    this.Reader = new FileReader();
  }
  async readAsArrayBuffer(e) {
    return new Promise((t, s) => {
      this.Reader.onload = (o) => {
        const r = o.target.result;
        t(r);
      }, this.Reader.onerror = (o) => {
        s(o);
      }, this.Reader.readAsArrayBuffer(e);
    });
  }
  close() {
    this.Reader.abort();
  }
}
var O = /* @__PURE__ */ ((f) => (f.\u4E0B\u884C_\u9644\u52A0\u6570\u636E = "DOWN_APPEND_DATA", f.\u4E0B\u884C_\u83B7\u53D6\u7ED3\u679C = "DOWN_GET_RESULT", f.\u4E0B\u884C_\u91CD\u7F6E = "DOWN_RESET", f.\u4E0B\u884C_\u5173\u95ED = "DOWN_CLOSE", f.\u4E0A\u884C_\u5E94\u7B54 = "UP_ACK", f.\u4E0A\u884C_\u7ED3\u679C = "UP_RESULT", f))(O || {});
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
  async checkFile(e, t, s) {
    return new Promise(async (o, r) => {
      const l = e;
      e instanceof re && (l.blob = l.file);
      let g = { preLoaded: 0, loaded: 0, total: e.size };
      s(g);
      const p = 1024 * 1024;
      for (; l.checkPosition < l.size; ) {
        if (this.canceled) {
          await this.reset(), o();
          break;
        }
        if (this.paused) {
          const b = async () => new Promise((m, F) => {
            this.waitToContinue[t] = m;
          });
          this.debug && console.debug("HashHelper > \u5DF2\u6682\u505C", t);
          const y = await b();
          if (this.waitToContinue[t] = null, this.debug && console.debug("HashHelper > \u5DF2\u6062\u590D", t), !y) {
            o();
            return;
          }
        }
        const A = l.blob.slice(l.checkPosition, Math.min(l.checkPosition + p, l.size));
        l.checkPosition += A.size, g.preLoaded += A.size, s(g), await this.appendData(A, t), g.loaded += A.size, s(g);
      }
      o(await this.getResult(t));
    });
  }
  async appendData(e, t) {
    let s = await this.fileReaders[t].readAsArrayBuffer(e);
    const o = { type: O.\u4E0B\u884C_\u9644\u52A0\u6570\u636E, data: s };
    this.workerSupported ? await this.workerPostMessage(t, o) : this.sparkUnits[t].append(s);
  }
  async getResult(e) {
    const t = { type: O.\u4E0B\u884C_\u83B7\u53D6\u7ED3\u679C };
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
      await this.workerPostMessage(e, { type: O.\u4E0B\u884C_\u91CD\u7F6E }), this.debug && console.debug("HashHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u91CD\u7F6E", Object.assign({}, this.workerUnits[e]));
    } else
      this.sparkUnits[e].reset(), this.debug && console.debug("HashHelper > Spark\u8BA1\u7B97\u5355\u5143 \u5DF2\u91CD\u7F6E", Object.assign({}, this.sparkUnits[e]));
  }
  async closeByIndex(e) {
    this.fileReaders[e].close(), this.debug && console.debug("HashHelper > FileReadHelper \u5DF2\u5173\u95ED", Object.assign({}, this.fileReaders[e])), this.enableWorker && this.workerSupported ? (await this.workerPostMessage(e, { type: O.\u4E0B\u884C_\u5173\u95ED }), this.debug && console.debug("HashHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u5173\u95ED", Object.assign({}, this.workerUnits[e]))) : (this.sparkUnits[e].destroy(), this.debug && console.debug("HashHelper > Spark\u8BA1\u7B97\u5355\u5143 \u5DF2\u5173\u95ED", Object.assign({}, this.sparkUnits[e])));
  }
  async workerPostMessage(e, t) {
    let s = this.workerUnits[e];
    return s.used = !0, new Promise((o, r) => {
      s.worker.onmessage = (l) => {
        switch (l.data.type) {
          case O.\u4E0A\u884C_\u7ED3\u679C:
            o(l.data.data);
            break;
          case O.\u4E0A\u884C_\u5E94\u7B54:
          default:
            o();
        }
      }, s.worker.onerror = (l) => {
        s.used = !1, r(new D("WebWorker\u5F02\u5E38", l.error));
      }, s.worker.onmessageerror = (l) => {
        s.used = !1, r(new D(`WebWorker\u901A\u8BAF\u9519\u8BEF\uFF0C${l.data}`));
      }, t.type === O.\u4E0B\u884C_\u9644\u52A0\u6570\u636E ? s.worker.postMessage(t, [t.data]) : s.worker.postMessage(JSON.parse(JSON.stringify(t)));
    });
  }
  static async getInstance(e = 1, t = !0, s = !1) {
    return new Promise((o) => {
      let r = new oe(t, s);
      for (; r.fileReaders.length < e; )
        r.fileReaders.push(new Ce()), r.chunkHandler.push(!1), r.waitToContinue.push(null), r.debug && console.debug("HashHelper > FileReadHelper \u5DF2\u521B\u5EFA", Object.assign({}, r.fileReaders[r.fileReaders.length - 1]));
      if (r.enableWorker && r.workerSupported) {
        window.URL = window.URL || window.webkitURL;
        for (let l = 0; l < e; l++)
          r.workerUnits.push({
            worker: new Worker(window.URL.createObjectURL(wt)),
            used: !1
          }), r.debug && console.debug("HashHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u521B\u5EFA", Object.assign({}, r.workerUnits[l].worker));
      } else
        for (; r.sparkUnits.length < e; )
          r.sparkUnits.push(new _e.ArrayBuffer()), r.debug && console.debug("HashHelper > Spark\u8BA1\u7B97\u5355\u5143 \u5DF2\u521B\u5EFA", Object.assign({}, r.sparkUnits[r.sparkUnits.length - 1]));
      o(r);
    });
  }
  async handler(e, t) {
    return new Promise(async (s, o) => {
      this.debug && console.debug("HashHelper \u5F00\u59CB\u5904\u7406", Object.assign({}, e));
      let r = { preLoaded: 0, loaded: 0, total: e.size * 2 };
      const l = (y, m) => {
        r.preLoaded += y.preLoaded - m.preLoaded, r.loaded += y.loaded - m.loaded, m.preLoaded = y.preLoaded, m.loaded = y.loaded, t(r);
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
          o(F);
        }
      }, p = () => {
        this.finished = !0, this.debug && console.debug("HashHelper \u5904\u7406\u7ED3\u675F", Object.assign({}, e)), s();
      };
      if (await g(), !e.needSection) {
        p();
        return;
      }
      const A = async () => {
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
          if (t(r), this.canceled) {
            this.reset().then(s).catch(s);
            return;
          }
          this.chunkHandler[y] = !1, A();
        }, F = this.chunkHandlerQueue.shift();
        if (F.checked) {
          r.preLoaded += F.size, r.loaded += F.size, t(r), m();
          return;
        }
        let k = { preLoaded: 0, loaded: 0, total: F.size };
        t(r), F.md5 = (h = await this.checkFile(
          F,
          y,
          (d) => {
            l(d, k);
          }
        )) != null ? h : null, m();
      }, b = (y) => {
        this.chunkHandlerQueue.push(y), A();
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
var x = /* @__PURE__ */ ((f) => (f.\u4E0B\u884C_\u4E0A\u4F20 = "DOWN_UPLOAD", f.\u4E0B\u884C_\u53D6\u6D88 = "DOWN_CANCEL", f.\u4E0B\u884C_\u5173\u95ED = "DOWN_CLOSE", f.\u4E0A\u884C_\u8FDB\u5EA6 = "UP_PROGRESS", f.\u4E0A\u884C_\u53D6\u6D88 = "UP_CANCEL", f.\u4E0A\u884C_\u5B8C\u6210 = "UP_COMPLETED", f.\u4E0A\u884C_\u5931\u8D25 = "UP_FAILED", f.\u4E0A\u884C_\u8D85\u65F6 = "UP_TIMEOUT", f))(x || {}), K = /* @__PURE__ */ ((f) => (f.\u5141\u8BB8\u4E0A\u4F20 = "\u5141\u8BB8\u4E0A\u4F20", f.\u63A8\u8FDF\u4E0A\u4F20 = "\u63A8\u8FDF\u4E0A\u4F20", f.\u8DF3\u8FC7 = "\u8DF3\u8FC7", f.\u5168\u90E8\u8DF3\u8FC7 = "\u5168\u90E8\u8DF3\u8FC7", f))(K || {});
const Ct = () => {
  let f;
  const e = (t, s, o) => {
    var l;
    const r = new XMLHttpRequest();
    if (r.overrideMimeType("application/octet-stream"), s)
      for (const g of s.keys())
        r.setRequestHeader(g, (l = s.get(g)) != null ? l : "");
    r.upload.onprogress = (g) => {
      postMessage({
        type: "UP_PROGRESS",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, r.onabort = (g) => {
      postMessage({
        type: "UP_CANCEL",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, r.onreadystatechange = () => {
      r.readyState === 4 && r.status === 200 && postMessage({
        type: "UP_COMPLETED",
        data: JSON.parse(r.response)
      });
    }, r.onerror = (g) => {
      postMessage({
        type: "UP_FAILED",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, r.ontimeout = (g) => {
      postMessage({
        type: "UP_TIMEOUT",
        data: {
          preLoaded: g.total,
          total: g.total,
          loaded: g.loaded
        }
      });
    }, r.open("POST", t, !0), r.send(o), f = r;
  };
  onmessage = (t) => {
    switch (t.data.type) {
      case "DOWN_UPLOAD":
        const s = t.data.data;
        e(s.url, s.headers, s.buffer);
        break;
      case "DOWN_CANCEL":
        f && f.readyState !== 4 && f.abort();
        break;
      case "DOWN_CLOSE":
        close();
        break;
    }
  };
}, Et = new Blob([`(${Ct.toString()})()`]);
class le {
  constructor(e, t, s) {
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
    this.debug = s, this.enableWorker = e, this.workerSupported = typeof Worker < "u", this.apiService = t, this.enableWorker && this.debug && console.debug(`UploadHelper > WebWoeker ${this.workerSupported ? "\u5DF2\u542F\u7528" : "\u672A\u542F\u7528\uFF08\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF09"}`);
  }
  async uploadFile(e, t) {
    const s = await this.apiService.singleFile(e.configCode, e.file, e.name, t, (o) => {
      this.cancelTokenList.set(e.md5, o);
    });
    return this.cancelTokenList.delete(e.md5), s;
  }
  async uploadChunkFile(e, t, s, o) {
    await this.apiService.singleChunkFile(t.key, s.md5, s.blob, o, (r) => {
      this.cancelTokenList.set(s.md5, r);
    }), this.cancelTokenList.delete(s.md5);
  }
  async useWorkerUploadFile(e, t) {
    return new Promise(async (s, o) => {
      let r;
      try {
        r = await this.fileReaders[0].readAsArrayBuffer(e.file);
      } catch (l) {
        o(l);
        return;
      }
      try {
        const l = this.apiService.getSingleFileByArrayBufferRequestParams(e.configCode, e.file.type, e.extension, e.name), g = await this.workerPostMessage(0, {
          type: x.\u4E0B\u884C_\u4E0A\u4F20,
          data: {
            url: l.urlWithParams,
            headers: l.headers,
            buffer: r
          }
        }, t, !1);
        s(g);
        return;
      } catch (l) {
        o(l);
        return;
      }
    });
  }
  async useWorkerUploadChunkFile(e, t, s, o) {
    return new Promise(async (r, l) => {
      let g;
      try {
        g = await this.fileReaders[e].readAsArrayBuffer(s.blob);
      } catch (p) {
        l(p);
        return;
      }
      try {
        const p = this.apiService.getSingleChunkFileByArrayBufferRequestParams(t.key, s.md5);
        await this.workerPostMessage(
          e,
          {
            type: x.\u4E0B\u884C_\u4E0A\u4F20,
            data: {
              url: p.urlWithParams,
              headers: p.headers,
              buffer: g
            }
          },
          o,
          !0
        );
      } catch (p) {
        l(p);
        return;
      }
      r();
    });
  }
  async workerPostMessage(e, t, s, o) {
    let r = this.workerUnits[e];
    return r.used = !0, new Promise((l, g) => {
      r.worker.onmessage = (p) => {
        switch (p.data.type) {
          case x.\u4E0A\u884C_\u8FDB\u5EA6:
            const A = p.data.data;
            s && s({
              preLoaded: A.preLoaded,
              total: A.total,
              loaded: A.loaded
            });
            break;
          case x.\u4E0A\u884C_\u53D6\u6D88:
            const b = p.data.data;
            s && s({
              preLoaded: b.preLoaded,
              total: b.total,
              loaded: b.loaded
            }), r.used = !1, g(new D("\u4E0A\u4F20\u64CD\u4F5C\u5DF2\u53D6\u6D88"));
            break;
          case x.\u4E0A\u884C_\u5B8C\u6210:
            r.used = !1;
            try {
              const F = o ? this.apiService.getUserFileInfoFromSingleChunkFileByArrayBufferResponse(p.data.data) : this.apiService.getUserFileInfoFromSingleFileByArrayBufferResponse(p.data.data);
              l(F);
            } catch (F) {
              g(new D("\u4E0A\u4F20\u5931\u8D25", F));
            }
            break;
          case x.\u4E0A\u884C_\u5931\u8D25:
            const y = p.data.data;
            s && s({
              preLoaded: y.preLoaded,
              total: y.total,
              loaded: y.loaded
            }), r.used = !1, g(new D("\u4E0A\u4F20\u5931\u8D25"));
            break;
          case x.\u4E0A\u884C_\u8D85\u65F6:
            const m = p.data.data;
            s && s({
              preLoaded: m.preLoaded,
              total: m.total,
              loaded: m.loaded
            }), r.used = !1, g(new D("\u4E0A\u4F20\u64CD\u4F5C\u5904\u7406\u8D85\u65F6"));
            break;
          default:
            g(new D(`\u672A\u77E5\u7684UploadWorkerMessageType: ${p.data.type}.`));
        }
      }, r.worker.onerror = (p) => {
        r.used = !1, g(new D("WebWorker\u53D1\u751F\u9519\u8BEF", p.error));
      }, r.worker.onmessageerror = (p) => {
        r.used = !1, g(new D(`WebWorker\u901A\u8BAF\u9519\u8BEF\uFF0C${p.data}`));
      }, t.type === x.\u4E0B\u884C_\u4E0A\u4F20 ? r.worker.postMessage(t, [t.data.buffer]) : r.worker.postMessage(JSON.parse(JSON.stringify(t)));
    });
  }
  async closeByIndex(e) {
    this.fileReaders[e].close(), this.debug && console.debug("UploadHelper > FileReadHelper \u5DF2\u5173\u95ED", Object.assign({}, this.fileReaders[e])), this.enableWorker && this.workerSupported && (await this.workerPostMessage(e, { type: x.\u4E0B\u884C_\u5173\u95ED }), this.debug && console.debug("UploadHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u5173\u95ED", Object.assign({}, this.workerUnits[e].worker)));
  }
  static async getInstance(e, t = !0, s, o = !1) {
    return new Promise((r) => {
      let l = new le(t, s, o);
      for (; l.fileReaders.length < e; )
        l.fileReaders.push(new Ce()), l.chunkHandler.push(!1), l.waitToContinue.push(null), l.debug && console.debug("UploadHelper > FileReadHelper \u5DF2\u521B\u5EFA", Object.assign({}, l.fileReaders[l.fileReaders.length - 1]));
      if (l.enableWorker && l.workerSupported) {
        window.URL = window.URL || window.webkitURL;
        for (let g = 0; g < e; g++)
          l.workerUnits.push({
            worker: new Worker(window.URL.createObjectURL(Et)),
            used: !1
          }), l.debug && console.debug("UploadHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u521B\u5EFA", Object.assign({}, l.workerUnits[g].worker));
      }
      r(l);
    });
  }
  async handler(e, t) {
    return new Promise(async (s, o) => {
      this.debug && console.debug("UploadHelper \u5F00\u59CB\u5904\u7406", Object.assign({}, e));
      const r = () => {
        this.finished = !0, this.debug && console.debug("UploadHelper \u5904\u7406\u7ED3\u675F", Object.assign({}, e)), s();
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
        o(g);
        return;
      }
      if (l.uploaded) {
        this.debug && console.debug("UploadHelper \u5FFD\u7565\u5DF2\u4E0A\u4F20\u8FC7\u7684\u6587\u4EF6", Object.assign({}, e)), e.userFileInfo = l.userFileInfo, r();
        return;
      }
      if (e.needSection) {
        let g = { preLoaded: 0, loaded: 0, total: e.size };
        const p = async () => {
          if (this.finished)
            return;
          if (this.chunkHandlerQueue.length === 0) {
            for (let n = 0; n < this.chunkHandler.length; n++)
              if (this.chunkHandler[n])
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
              ), r();
            } catch (n) {
              o(n);
            }
            return;
          }
          let b = null;
          for (let n = 0; n < this.chunkHandler.length; n++)
            if (!this.chunkHandler[n]) {
              b = n;
              break;
            }
          if (b == null) {
            this.debug && console.debug(`HashHelper \u5DF2\u8FBE\u5230\u6700\u5927\u5E76\u53D1\u6570\uFF1A${this.chunkHandler.length}\uFF0C\u5F53\u524D\u961F\u5217\u957F\u5EA6\uFF1A${this.chunkHandlerQueue.length}`, Object.assign({}, e));
            return;
          }
          this.chunkHandler[b] = !0;
          const y = () => {
            if (t(g), this.canceled) {
              s();
              return;
            }
            if (this.paused) {
              const n = async () => new Promise((i, a) => {
                this.waitToContinue[b] = i;
              });
              this.debug && console.debug("UploadHelper > \u5DF2\u6682\u505C", b), n().then((i) => {
                if (this.waitToContinue[b] = null, this.debug && console.debug("UploadHelper > \u5DF2\u6062\u590D", b), !i) {
                  s();
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
          const k = (n) => {
            g.loaded += n.loaded - F.loaded, F.loaded = n.loaded, t(g);
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
          } catch (n) {
            o(n);
            return;
          }
          g.preLoaded += F.preLoaded, t(g);
          const d = async () => {
            this.workerSupported ? await this.useWorkerUploadChunkFile(b, h, m, k) : await this.uploadChunkFile(b, h, m, k);
          };
          switch (h.state) {
            case K.\u5141\u8BB8\u4E0A\u4F20:
              await d();
              break;
            case K.\u5168\u90E8\u8DF3\u8FC7:
              this.chunkHandlerQueue.length = 0;
              return;
            case K.\u63A8\u8FDF\u4E0A\u4F20:
              this.chunkHandlerQueue.push(m), this.delayTimes++, this.delayTimes >= this.chunkHandlerQueue.length && (this.delayTimes = 0, m.forced = !0);
              break;
            case K.\u8DF3\u8FC7:
              k({ preLoaded: m.size, loaded: m.size, total: m.size });
              break;
          }
          y();
        }, A = (b) => {
          this.chunkHandlerQueue.push(b), p();
        };
        for (let b of e.chunks)
          A(b);
      } else
        try {
          this.workerSupported ? e.userFileInfo = await this.useWorkerUploadFile(e, t) : e.userFileInfo = await this.uploadFile(e, t), r();
        } catch (g) {
          o(g);
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
        !this.workerUnits[e].used || (await this.workerPostMessage(e, { type: x.\u4E0B\u884C_\u53D6\u6D88 }), this.debug && console.debug("UploadHelper > WebWoeker\u5B50\u7EBF\u7A0B\u8BA1\u7B97\u5355\u5143 \u5DF2\u53D6\u6D88", Object.assign({}, this.workerUnits[e].worker)));
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
    c(this, "reactive", R);
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
      this.apiService.config(this.settings.configCode).then((s) => {
        this.config = this.reactive(s), this.settings.debug && console.debug("\u914D\u7F6E\u5DF2\u53D8\u66F4:", Object.assign({}, this.config)), e();
      }).catch((s) => {
        t(new D("\u66F4\u65B0\u6587\u4EF6\u4E0A\u4F20\u914D\u7F6E\u9519\u8BEF", s));
      });
    });
  }
  watchSettings() {
    ne(
      () => this.settings.configCode,
      async (e, t) => {
        var s;
        e != t && (await this.updateConfig(), (s = this.configChanged) == null || s.forEach((o) => o(this.config)));
      }
    ), ne(
      () => this.settings.layout,
      async (e, t) => {
        var s;
        e != t && ((s = this.layoutChanged) == null || s.forEach((o) => o(e)));
      }
    ), ne(
      () => this.selectedFileList,
      async (e, t) => {
        var s;
        (s = this.selectedFileListChanged) == null || s.forEach((o) => o(this.getSelectedFileList(!0)));
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
    let t = (r, l) => {
      const g = H.new();
      let p = new re(r);
      p.name = l.name, p.extension = l.extension, p.configCode = this.config.code, p.token = g, this.rawFileList.push(p), l.rawIndex = this.rawFileList.length - 1, l.token = g, this.tokenWithIndex.set(g, this.selectedFileList.length), this.selectedFileList.push(l), this.selectedFileSortMap.set(this.selectedFileSortMap.size + 1, this.selectedFileList.length - 1), this.selectedFileSortMapChangedTrigger(), this.handleFile(this.selectedFileList.length - 1), this.settings.debug && console.debug("\u5DF2\u6DFB\u52A0\u6587\u4EF6", Object.assign({}, p));
    };
    if (this.selectedFileList.filter((r) => {
      var l;
      return !r.canceled && ((l = this.rawFileList[r.rawIndex].file) == null ? void 0 : l.name) == e.name;
    }).length > 0) {
      this.settings.debug && console.debug("\u91CD\u590D\u7684\u6587\u4EF6", e);
      return;
    }
    if (this.limited()) {
      this.throwError(new D(`\u5F53\u524D\u53EA\u5141\u8BB8\u4E0A\u4F20${this.getConfig().upperLimit}\u4E2A\u6587\u4EF6`));
      return;
    }
    const s = e.name.substring(e.name.lastIndexOf("."));
    if (this.config.allowedTypeList.length !== 0) {
      let r = !1;
      for (const l of this.config.allowedTypeList)
        if (l != null && l.length > 0 && (l[0] === "." && l.toLowerCase() === s.toLowerCase() || new RegExp(l.replace("/*", "//*"), "gi").test(e.type))) {
          r = !0;
          break;
        }
      if (!r) {
        console.warn(s, e.type), this.throwError(new D("\u6587\u4EF6\u7C7B\u578B\u4E0D\u5408\u6CD5"));
        return;
      }
    }
    if (this.config.prohibitedTypeList.length !== 0) {
      for (const r of this.config.prohibitedTypeList)
        if (r != null && r.length > 0 && (r[0] === "." && r.toLowerCase() === s.toLowerCase() || new RegExp(r.replace("/*", "//*"), "gi").test(e.type))) {
          console.warn(r, s, e.type), this.throwError(new D("\u6587\u4EF6\u7C7B\u578B\u4E0D\u5408\u6CD5"));
          return;
        }
    }
    if (this.config.lowerSingleSize && this.config.lowerSingleSize > e.size) {
      this.throwError(new D(`\u6587\u4EF6\u4E0D\u53EF\u5C0F\u4E8E${z.getSize(this.config.lowerSingleSize)}`));
      return;
    }
    if (this.config.upperSingleSize && this.config.upperSingleSize < e.size) {
      this.throwError(new D(`\u6587\u4EF6\u4E0D\u53EF\u5927\u4E8E${z.getSize(this.config.upperSingleSize)}`));
      return;
    }
    if (this.config.upperTotalSize && this.config.upperTotalSize < this.totalSize() + e.size) {
      this.throwError(new D(`\u6240\u6709\u6587\u4EF6\u7684\u603B\u5927\u5C0F\u4E0D\u53EF\u5927\u4E8E${z.getSize(this.config.upperTotalSize)}`));
      return;
    }
    let o = new ce(e);
    if (this.beforeCheck) {
      const r = this.beforeCheck(e);
      r && r.then && r.then((l) => {
        l && t(e, o);
      });
    } else
      t(e, o);
  }
  appendUploadedFile(e) {
    return new Promise(async (t, s) => {
      let o;
      try {
        o = await this.apiService.getUserFile(e);
        const r = H.new();
        let l = new re(null);
        l.size = parseInt(o.bytes), l.name = o.name, l.extension = o.extension, l.configCode = this.config.code, l.echo = !0, l.token = r, l.userFileInfo = o, l.objectURL = this.apiService.getUserFileBrowseUrl(o.id), this.rawFileList.push(l);
        let g = { name: `${o.name}${o.extension}` }, p = new ce(g);
        p.rawIndex = this.rawFileList.length - 1, p.echo = !0, p.checked = !0, p.uploaded = !0, p.done = !0, p.canceled = !1, p.thumbnail = this.apiService.getUserFilePreviewUrl(o.id, 100, 100), p.fileType = o.fileType, p.size = o.size, p.token = r, this.tokenWithIndex.set(r, this.selectedFileList.length), this.selectedFileList.push(p), this.selectedFileSortMap.set(this.selectedFileSortMap.size + 1, this.selectedFileList.length - 1), this.selectedFileSortMapChangedTrigger(), this.settings.debug && console.debug("\u5DF2\u6DFB\u52A0\u5386\u53F2\u6587\u4EF6", e, Object.assign({}, l), Object.assign({}, p)), t();
      } catch (r) {
        s(new D("\u83B7\u53D6\u7528\u6237\u6587\u4EF6\u4FE1\u606F\u5931\u8D25", r));
      }
    });
  }
  getFileType(e) {
    return new Promise(async (t) => {
      let s;
      e.rawIndex == -1 ? s = {
        file: { type: null }
      } : s = this.getRawFile(e);
      try {
        e.fileType = s.file.type === null || s.file.type === "" || s.file.type === "application/octet-stream" ? await this.apiService.getFileTypeByExtension(e.extensionLower) : await this.apiService.getFileTypeByMIME(s.file.type);
      } catch {
        e.fileType = E.\u672A\u77E5;
      }
      t();
    });
  }
  checkImage(e) {
    if (e.fileType === E.\u672A\u77E5) {
      e.thumbnail = this.apiService.getUnknowFileTypeImageUrl();
      return;
    }
    if (e.fileType !== E.\u56FE\u7247)
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
    let s = 0;
    for (; s < t.size; )
      t.chunkIndexQueue.push(t.chunks.length), t.chunks.push(new yt(t.chunks.length, t.file.slice(s, s + this.settings.chunkSize))), s += this.settings.chunkSize;
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
      this.pausedQueue.has(r) ? this.pausedQueue.get(r).continue = !1 : this.pausedQueue.set(r, { step: 0, helper: b }), b && b.pause(), b && this.settings.debug && console.debug("HashHelper Instance \u5DF2\u6682\u505C", Object.assign({}, p)), l.virtualPercentBeforPaused = l.virtualPercent, l.percentBeforPaused = l.percent, this.settings.debug && console.debug("\u6682\u505C\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g)), e();
    }, s = async (b) => {
      await b.continue(), this.settings.debug && console.debug("HashHelper Instance \u5DF2\u6062\u590D", Object.assign({}, p)), this.settings.debug && console.debug("\u6062\u590D\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g));
    }, o = (b) => {
      b && b.cancel(), b && this.settings.debug && console.debug("HashHelper Instance \u5DF2\u53D6\u6D88", Object.assign({}, p)), this.settings.debug && console.debug("\u53D6\u6D88\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g)), e();
    }, r = this.checkQueue.shift(), l = this.selectedFileList[r], g = this.getRawFile(l);
    if (l.canceled) {
      o();
      return;
    }
    if (l.paused) {
      t(), e();
      return;
    }
    l.checking = !0;
    let p = null;
    if (this.pausedQueue.has(r) && (p = this.pausedQueue.get(r).helper, this.pausedQueue.delete(r), p)) {
      this.settings.debug && console.debug("HashHelper Instance \u5DF2\u83B7\u53D6\uFF08\u6682\u505C\u524D\u7684\u5B9E\u4F8B\uFF09", Object.assign({}, p)), await s(p);
      return;
    }
    p == null && (p = await oe.getInstance(this.settings.concurrentChunkFile, this.settings.enableWorker, this.settings.debug), this.settings.debug && console.debug("HashHelper Instance \u5DF2\u521B\u5EFA", Object.assign({}, p)));
    const A = () => {
      p.close(), this.settings.debug && console.debug("HashHelper Instance \u5DF2\u5173\u95ED", Object.assign({}, p));
    };
    try {
      if (this.settings.debug && console.debug("\u5F00\u59CB\u6821\u9A8C\u6587\u4EF6", Object.assign({}, g)), await p.handler(g, (b) => {
        G.calcPercent(l, b), l.canceled && o(), l.paused && t(p);
      }), l.canceled)
        return;
      l.virtualPercent = 100, l.percent = 100, l.checking = !1, l.checked = !0, this.settings.debug && console.debug("\u6587\u4EF6\u6821\u9A8C\u7ED3\u675F", Object.assign({}, g)), this.pushToUploadQueue(r);
    } catch (b) {
      const y = new D("\u6587\u4EF6\u6821\u9A8C\u5931\u8D25.", b);
      this.checkError(r, `${y.message} ${b.message}`, !0, y);
    }
    A(), e();
  }
  async upload() {
    var b;
    if (this.config.lowerTotalSize && this.config.lowerTotalSize > this.totalSize()) {
      this.throwError(new D(`\u6240\u6709\u6587\u4EF6\u7684\u603B\u5927\u5C0F\u4E0D\u53EF\u5C0F\u4E8E${z.getSize(this.config.lowerTotalSize)}`));
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
      this.pausedQueue.has(r) ? this.pausedQueue.get(r).continue = !1 : this.pausedQueue.set(r, { step: 1, helper: y }), y && y.pause(), y && this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u6682\u505C", Object.assign({}, p)), l.virtualPercentBeforPaused = l.virtualPercent, l.percentBeforPaused = l.percent, this.settings.debug && console.debug("\u6682\u505C\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g)), e(!1);
    }, s = async (y) => {
      await y.continue(), this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u6062\u590D", Object.assign({}, p)), this.settings.debug && console.debug("\u6062\u590D\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g));
    }, o = (y) => {
      y && y.cancel(), y && this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u53D6\u6D88", Object.assign({}, p)), this.settings.debug && console.debug("\u53D6\u6D88\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g)), e(!1);
    }, r = this.uploadQueue.shift(), l = this.selectedFileList[r], g = this.getRawFile(l);
    if (l.canceled) {
      o();
      return;
    }
    if (l.paused) {
      t();
      return;
    }
    l.uploading = !0, l.virtualPercent = 0, l.percent = 0;
    let p = null;
    if (this.pausedQueue.has(r) && (p = this.pausedQueue.get(r).helper, this.pausedQueue.delete(r), p)) {
      this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u83B7\u53D6\uFF08\u6682\u505C\u524D\u7684\u5B9E\u4F8B\uFF09", Object.assign({}, p)), await s(p);
      return;
    }
    p == null && (p = await le.getInstance(this.settings.concurrentChunkFile, this.settings.enableWorker, this.apiService, this.settings.debug), this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u521B\u5EFA", Object.assign({}, p)));
    const A = () => {
      p.close(), this.settings.debug && console.debug("UploadHelper Instance \u5DF2\u5173\u95ED", Object.assign({}, p));
    };
    try {
      if (this.settings.debug && console.debug("\u5F00\u59CB\u4E0A\u4F20\u6587\u4EF6", Object.assign({}, g)), await p.handler(g, (y) => {
        G.calcPercent(l, y), l.canceled && o(), l.paused && this.rawFileList[l.rawIndex].needSection && t(p);
      }), l.canceled)
        return;
      l.name = g.userFileInfo.name, l.extension = g.userFileInfo.extension, l.extensionLower = (b = g.userFileInfo.extension) == null ? void 0 : b.toLowerCase(), l.size = g.userFileInfo.size, l.fileType = g.userFileInfo.fileType, l.virtualPercent = 100, l.percent = 100, l.uploading = !1, l.uploaded = !0, l.done = !0, this.settings.debug && console.debug("\u6587\u4EF6\u4E0A\u4F20\u7ED3\u675F", Object.assign({}, g)), this.checkImage(l), this.userFileInfoListChangedTrigger();
    } catch (y) {
      const m = new D("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25.", y);
      this.uploadError(r, `${m.message} ${y.message}`, !0, m);
    }
    A(), e(!0);
  }
  static calcPercent(e, t) {
    const s = parseFloat((t.preLoaded / t.total * 100).toFixed(2)), o = parseFloat((t.loaded / t.total * 100).toFixed(2));
    e.virtualPercentBeforPaused < s && (e.virtualPercent = s), e.percentBeforPaused < o && (e.percent = o);
  }
  throwError(e) {
    this.settings.debug && console.debug("\u53D1\u751F\u5F02\u5E38", e), this.alertError.forEach((t) => t(e)), this.handlerError && this.handlerError(e);
  }
  error(e, t, s, o) {
    const r = this.selectedFileList[e];
    if (!s || r.reTry - 1 >= this.settings.retry) {
      r.error = !0, r.errorMessage = t;
      return;
    }
    r.reTry++, setTimeout(() => {
      o && o(e);
    }, 1500);
  }
  checkError(e, t, s, o) {
    o && D.consoleWrite(o);
    const r = this.selectedFileList[e];
    r.checking = !1, r.uploading = !1, this.error(e, t, s, (l) => {
      this.pushToCheckQueue(l);
    });
  }
  uploadError(e, t, s, o) {
    o && D.consoleWrite(o);
    const r = this.selectedFileList[e];
    r.uploading = !1, this.error(e, t, s, (l) => {
      this.pushToUploadQueue(l);
    });
  }
  async renameByIndex(e, t) {
    return new Promise((s) => {
      let o = this.getRawFile(e);
      const r = (l) => {
        l && (e.name = t, o.name = e.name, e.uploaded && (o.userFileInfo.name = e.name)), s();
      };
      e.uploaded ? this.apiService.rename(o.userFileInfo.id, t).then(() => {
        r(!0);
      }).catch((l) => {
        this.handlerError && this.handlerError(new D(`\u6587\u4EF6\u91CD\u547D\u540D\u5931\u8D25\uFF1A${l.message}`, l)), r(!1);
      }) : r(!0);
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
    return new Promise(async (s, o) => {
      try {
        let r = new G(e, t);
        r.watchSettings(), await r.updateConfig(), s(r);
      } catch (r) {
        o(new D("\u83B7\u53D6\u4E0A\u4F20\u5DE5\u5177\u5B9E\u4F8B\u65F6\u53D1\u751F\u5F02\u5E38", r));
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
    const s = this.tokenWithIndex.get(e);
    if (s == -1)
      throw new D("\u6587\u4EF6\u5DF2\u88AB\u79FB\u9664");
    let o = this.selectedFileList[s];
    return this.renameByIndex(o, t);
  }
  getDownloadUrl(e) {
    var s;
    const t = this.rawFileList[e.rawIndex];
    return t.file ? (s = t.objectURL) != null ? s : null : this.apiService.getDownloadUrl(t.userFileInfo.id, e.name);
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
    const s = this.selectedFileSortMap.get(e);
    if (e > t)
      for (let o = e; o > t; o--)
        setInterval(() => {
        }, 100), this.selectedFileSortMap.set(o, this.selectedFileSortMap.get(o - 1));
    else
      for (let o = e; o < t; o++)
        this.selectedFileSortMap.set(o, this.selectedFileSortMap.get(o + 1));
    this.selectedFileSortMap.set(t, s), this.selectedFileSortMapChangedTrigger();
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
      return this.selectedFileList.filter((s) => !s.canceled);
    const t = [];
    for (let s = 1; s <= this.selectedFileSortMap.size; s++) {
      const o = this.selectedFileList[this.selectedFileSortMap.get(s)];
      o.canceled || t.push(o);
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
  getGradientStyle(e, t, s, o) {
    switch (e) {
      default:
      case "conic":
        return `
background: conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;
background: -moz-conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;
background: -o-conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;
background: -webkit-conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;`;
      case "linear":
        return `
background: linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;
background: -moz-linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;
background: -o-linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;
background: -webkit-linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%;`;
    }
  }
  getGradientStyleObject(e, t, s, o) {
    switch (e) {
      default:
      case "conic":
        return [
          { background: `conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` },
          { background: `-moz-conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` },
          { background: `-o-conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` },
          { background: `-webkit-conic-gradient(${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` }
        ];
      case "linear":
        return [
          { background: `linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` },
          { background: `-moz-linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` },
          { background: `-o-linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` },
          { background: `-webkit-linear-gradient(to right, ${t} ${s}%, transparent ${o}%)  repeat scroll 0% 0%` }
        ];
    }
  }
}
const kt = { key: 0 }, Dt = /* @__PURE__ */ T({
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
    let s = null;
    Be("upload", () => s);
    let o = R({
      loading: !0,
      currentUpload: null
    });
    return (async () => {
      if (t.apiService == null)
        throw new Error("\u5FC5\u987B\u8BBE\u7F6E\u4E00\u4E2AIApiService\u7684\u5B9E\u73B0\u7C7B");
      t.readonly && (t.settings.readonly = !0);
      try {
        s = await G.getInstance(t.settings, t.apiService);
      } catch (g) {
        e("error", g);
        return;
      }
      s.getSettings().debug && console.debug("NaiveUpload Instance \u5DF2\u521B\u5EFA", Object.assign({}, s)), s.setupBeforeCheck((g) => (s.getSettings().debug && console.debug("BeforeCheck => ", Object.assign({}, g)), e("beforeCheck", g) === void 0 ? new Promise((p) => {
        p(!0);
      }) : e("beforeCheck", g))), s.setupAfterCheck((g) => (s.getSettings().debug && console.debug("AfterCheck => ", Object.assign({}, g)), e("afterCheck", g))), s.setupAfterCheckAll((g) => (s.getSettings().debug && console.debug("AfterCheckAll => ", Object.assign({}, g)), e("afterCheckAll", g))), s.setupAfterUpload((g) => (s.getSettings().debug && console.debug("AfterUpload => ", Object.assign({}, g)), e("afterUpload", g))), s.setupAfterUploadAll((g) => (s.getSettings().debug && console.debug("AfterUploadAll => ", Object.assign({}, g)), e("afterUploadAll", g))), s.setupHandlerError((g) => (s.getSettings().debug && console.debug("HandlerError => ", Object.assign({}, g)), e("error", g)));
      const r = (g) => {
        o.loading = !0, s.getConfig().upperLimit == 1 ? o.currentUpload = N(ct) : o.currentUpload = N(bt), o.loading = !1, s.getSettings().debug && console.debug("Layout\uFF1Aindex Component \u5DF2\u53D8\u66F4");
      };
      s.registerConfigChanged(r), r();
      const l = (g) => {
        t.modelValue.splice(0, t.modelValue.length), g.forEach((p) => t.modelValue.push(p.id)), e("update:modelValue", t.modelValue), s.getSettings().debug && console.debug(
          "ModelValue UserFileIdList => ",
          Object.assign({}, t.modelValue)
        );
      };
      if (s.registerUserFileInfoListChanged(l), e("setOpenApi", s.getOpenApi()), t.modelValue && t.modelValue.length > 0)
        for (const g of t.modelValue)
          await s.appendById(g);
      o.loading = !1, s.getSettings().debug && console.debug("Naive Upload Component(Vue3) \u5DF2\u52A0\u8F7D");
    })(), (r, l) => w(o).loading ? L("", !0) : (C(), S("div", kt, [
      (C(), W(ae(w(o).currentUpload)))
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
  Ce as FileReadHelper,
  z as FileSizeHelper,
  E as FileType,
  ee as FileTypeHelper,
  oe as HashHelper,
  wt as HashWorkerScript,
  X as Layout,
  Dt as NaiveUpload,
  K as PreUploadChunkFileState,
  $ as RGBAColor,
  re as RawFile,
  q as RunMode,
  Y as Settings,
  H as SimpleGuid,
  D as UploadError,
  le as UploadHelper,
  Et as UploadWorkerScript,
  vt as default
};
//# sourceMappingURL=naive-upload.js.map
