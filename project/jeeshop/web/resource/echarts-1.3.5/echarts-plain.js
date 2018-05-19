/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

// Copyright 2006 Google Inc.

//   http://www.apache.org/licenses/LICENSE-2.0

// (c) 2010-2013 Thomas Fuchs

// Zepto.js may be freely distributed under the MIT license.

/*!
 * ZRender, a lightweight canvas library with a MVC architecture, data-driven 
 * and provides an event model like DOM.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice, 
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of Baidu Inc. nor the names of its contributors may be used
 * to endorse or promote products derived from this software without specific 
 * prior written permission of Baidu Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */

/*!
 * ECharts, a javascript interactive chart library.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or 
 * without modification, are permitted provided that the following conditions 
 * are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this 
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice, 
 * this list of conditions and the following disclaimer in the documentation 
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of Baidu Inc. nor the names of its contributors may be used
 * to endorse or promote products derived from this software without specific 
 * prior written permission of Baidu Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */

(function (e) {
    var t, n, r;
    (function (e) {
        function d(e, t) {
            return h.call(e, t)
        }

        function v(e, t) {
            var n, r, i, s, o, u, a, f, c, h, p = t && t.split("/"), d = l.map, v = d && d["*"] || {};
            if (e && e.charAt(0) === ".") if (t) {
                p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                for (f = 0; f < e.length; f += 1) {
                    h = e[f];
                    if (h === ".") e.splice(f, 1), f -= 1; else if (h === "..") {
                        if (f === 1 && (e[2] === ".." || e[0] === "..")) break;
                        f > 0 && (e.splice(f - 1, 2), f -= 2)
                    }
                }
                e = e.join("/")
            } else e.indexOf("./") === 0 && (e = e.substring(2));
            if ((p || v) && d) {
                n = e.split("/");
                for (f = n.length; f > 0; f -= 1) {
                    r = n.slice(0, f).join("/");
                    if (p) for (c = p.length; c > 0; c -= 1) {
                        i = d[p.slice(0, c).join("/")];
                        if (i) {
                            i = i[r];
                            if (i) {
                                s = i, o = f;
                                break
                            }
                        }
                    }
                    if (s) break;
                    !u && v && v[r] && (u = v[r], a = f)
                }
                !s && u && (s = u, o = a), s && (n.splice(0, o, s), e = n.join("/"))
            }
            return e
        }

        function m(t, n) {
            return function () {
                return s.apply(e, p.call(arguments, 0).concat([t, n]))
            }
        }

        function g(e) {
            return function (t) {
                return v(t, e)
            }
        }

        function y(e) {
            return function (t) {
                a[e] = t
            }
        }

        function b(t) {
            if (d(f, t)) {
                var n = f[t];
                delete f[t], c[t] = !0, i.apply(e, n)
            }
            if (!d(a, t) && !d(c, t)) throw new Error("No " + t);
            return a[t]
        }

        function w(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function E(e) {
            return function () {
                return l && l.config && l.config[e] || {}
            }
        }

        var i, s, o, u, a = {}, f = {}, l = {}, c = {}, h = Object.prototype.hasOwnProperty, p = [].slice;
        o = function (e, t) {
            var n, r = w(e), i = r[0];
            return e = r[1], i && (i = v(i, t), n = b(i)), i ? n && n.normalize ? e = n.normalize(e, g(t)) : e = v(e, t) : (e = v(e, t), r = w(e), i = r[0], e = r[1], i && (n = b(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, u = {
            require: function (e) {
                return m(e)
            }, exports: function (e) {
                var t = a[e];
                return typeof t != "undefined" ? t : a[e] = {}
            }, module: function (e) {
                return {id: e, uri: "", exports: a[e], config: E(e)}
            }
        }, i = function (t, n, r, i) {
            var s, l, h, p, v, g = [], w;
            i = i || t;
            if (typeof r == "function") {
                n = !n.length && r.length ? ["require", "exports", "module"] : n;
                for (v = 0; v < n.length; v += 1) {
                    p = o(n[v], i), l = p.f;
                    if (l === "require") g[v] = u.require(t); else if (l === "exports") g[v] = u.exports(t), w = !0; else if (l === "module") s = g[v] = u.module(t); else if (d(a, l) || d(f, l) || d(c, l)) g[v] = b(l); else {
                        if (!p.p) throw new Error(t + " missing " + l);
                        p.p.load(p.n, m(i, !0), y(l), {}), g[v] = a[l]
                    }
                }
                h = r.apply(a[t], g);
                if (t) if (s && s.exports !== e && s.exports !== a[t]) a[t] = s.exports; else if (h !== e || !w) a[t] = h
            } else t && (a[t] = r)
        }, t = n = s = function (t, n, r, a, f) {
            return typeof t == "string" ? u[t] ? u[t](n) : b(o(t, n).f) : (t.splice || (l = t, n.splice ? (t = n, n = r, r = null) : t = e), n = n || function () {
            }, typeof r == "function" && (r = a, a = f), a ? i(e, t, n, r) : setTimeout(function () {
                i(e, t, n, r)
            }, 4), s)
        }, s.config = function (e) {
            return l = e, l.deps && s(l.deps, l.callback), s
        }, r = function (e, t, n) {
            t.splice || (n = t, t = []), !d(a, e) && !d(f, e) && (f[e] = [e, t, n])
        }, r.amd = {jQuery: !0}
    })(), r("echarts/config", [], function () {
        var e = {
            CHART_TYPE_LINE: "line",
            CHART_TYPE_BAR: "bar",
            CHART_TYPE_SCATTER: "scatter",
            CHART_TYPE_PIE: "pie",
            CHART_TYPE_RADAR: "radar",
            CHART_TYPE_MAP: "map",
            CHART_TYPE_K: "k",
            CHART_TYPE_ISLAND: "island",
            CHART_TYPE_FORCE: "force",
            CHART_TYPE_CHORD: "chord",
            COMPONENT_TYPE_TITLE: "title",
            COMPONENT_TYPE_LEGEND: "legend",
            COMPONENT_TYPE_DATARANGE: "dataRange",
            COMPONENT_TYPE_DATAVIEW: "dataView",
            COMPONENT_TYPE_DATAZOOM: "dataZoom",
            COMPONENT_TYPE_TOOLBOX: "toolbox",
            COMPONENT_TYPE_TOOLTIP: "tooltip",
            COMPONENT_TYPE_GRID: "grid",
            COMPONENT_TYPE_AXIS: "axis",
            COMPONENT_TYPE_POLAR: "polar",
            COMPONENT_TYPE_X_AXIS: "xAxis",
            COMPONENT_TYPE_Y_AXIS: "yAxis",
            COMPONENT_TYPE_AXIS_CATEGORY: "categoryAxis",
            COMPONENT_TYPE_AXIS_VALUE: "valueAxis",
            color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
            title: {
                text: "",
                subtext: "",
                x: "left",
                y: "top",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                subtextStyle: {color: "#aaa"}
            },
            legend: {
                orient: "horizontal",
                x: "center",
                y: "top",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 20,
                itemHeight: 14,
                textStyle: {color: "#333"},
                selectedMode: !0
            },
            dataRange: {
                orient: "vertical",
                x: "left",
                y: "bottom",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 20,
                itemHeight: 14,
                precision: 0,
                splitNumber: 5,
                calculable: !1,
                realtime: !0,
                color: ["#1e90ff", "#f0ffff"],
                textStyle: {color: "#333"}
            },
            toolbox: {
                show: !1,
                orient: "horizontal",
                x: "right",
                y: "top",
                color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemSize: 16,
                feature: {},
                showTitle: !0,
                featureTitle: {
                    mark: "辅助线开关",
                    markUndo: "删除辅助线",
                    markClear: "清空辅助线",
                    dataZoom: "区域缩放",
                    dataZoomReset: "区域缩放后退",
                    dataView: "数据视图",
                    lineChart: "折线图切换",
                    barChart: "柱形图切换",
                    restore: "还原",
                    saveAsImage: "保存为图片"
                }
            },
            tooltip: {
                show: !0,
                showContent: !0,
                trigger: "item",
                islandFormatter: "{a} <br/>{b} : {c}",
                showDelay: 20,
                hideDelay: 100,
                transitionDuration: .4,
                backgroundColor: "rgba(0,0,0,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                axisPointer: {
                    type: "line",
                    lineStyle: {color: "#48b", width: 2, type: "solid"},
                    areaStyle: {size: "auto", color: "rgba(150,150,150,0.3)"}
                },
                textStyle: {color: "#fff"}
            },
            dataZoom: {
                show: !1,
                orient: "horizontal",
                backgroundColor: "#eee",
                dataBackgroundColor: "#ccc",
                fillerColor: "rgba(50,205,50,0.4)",
                handleColor: "rgba(70,130,180,0.8)",
                realtime: !0
            },
            grid: {x: 80, y: 60, x2: 80, y2: 60, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc"},
            categoryAxis: {
                position: "bottom",
                name: "",
                nameLocation: "end",
                boundaryGap: !0,
                axisLine: {show: !0, lineStyle: {color: "#48b", width: 2, type: "solid"}},
                axisTick: {show: !1, length: 4, lineStyle: {color: "#ccc", width: 1}},
                axisLabel: {show: !0, interval: "auto", rotate: 0, margin: 8, textStyle: {color: "#333"}},
                splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
                splitArea: {
                    show: !1,
                    areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"], type: "default"}
                }
            },
            valueAxis: {
                position: "left",
                name: "",
                nameLocation: "end",
                boundaryGap: [0, 0],
                precision: 0,
                power: 100,
                splitNumber: 5,
                axisLine: {show: !0, lineStyle: {color: "#48b", width: 2, type: "solid"}},
                axisTick: {show: !1, length: 4, lineStyle: {color: "#ccc", width: 1}},
                axisLabel: {show: !0, rotate: 0, margin: 8, textStyle: {color: "#333"}},
                splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
                splitArea: {
                    show: !1,
                    areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"], type: "default"}
                }
            },
            polar: {
                center: ["50%", "50%"],
                radius: "75%",
                startAngle: 90,
                splitNumber: 5,
                name: {show: !0, textStyle: {color: "#333"}},
                axisLine: {show: !0, lineStyle: {color: "#ccc", width: 1, type: "solid"}},
                axisLabel: {show: !1, textStyle: {color: "#333"}},
                splitArea: {show: !0, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}},
                splitLine: {show: !0, lineStyle: {width: 1, color: "#ccc"}}
            },
            bar: {
                xAxisIndex: 0,
                yAxisIndex: 0,
                barMinHeight: 0,
                barGap: "30%",
                barCategoryGap: "20%",
                itemStyle: {
                    normal: {borderColor: "#fff", borderRadius: 0, borderWidth: 1, label: {show: !1}},
                    emphasis: {borderColor: "rgba(0,0,0,0)", borderRadius: 0, borderWidth: 1, label: {show: !1}}
                }
            },
            line: {
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        label: {show: !1},
                        lineStyle: {
                            width: 2,
                            type: "solid",
                            shadowColor: "rgba(0,0,0,0)",
                            shadowBlur: 5,
                            shadowOffsetX: 3,
                            shadowOffsetY: 3
                        }
                    }, emphasis: {label: {show: !1}}
                },
                symbolSize: 2,
                showAllSymbol: !1
            },
            k: {
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        color: "#fff",
                        color0: "#00aa11",
                        lineStyle: {width: 1, color: "#ff3200", color0: "#00aa11"}
                    }, emphasis: {}
                }
            },
            scatter: {
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbolSize: 4,
                large: !1,
                largeThreshold: 2e3,
                itemStyle: {
                    normal: {
                        label: {
                            show: !1, formatter: function (e, t, n) {
                                return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
                            }
                        }
                    }, emphasis: {
                        label: {
                            show: !1, formatter: function (e, t, n) {
                                return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
                            }
                        }
                    }
                }
            },
            radar: {
                polarIndex: 0,
                itemStyle: {normal: {lineStyle: {width: 2, type: "solid"}}, emphasis: {}},
                symbolSize: 2
            },
            pie: {
                center: ["50%", "50%"],
                radius: [0, "75%"],
                startAngle: 90,
                minAngle: 0,
                selectedOffset: 10,
                itemStyle: {
                    normal: {
                        label: {show: !0, position: "outer"},
                        labelLine: {show: !0, length: 30, lineStyle: {width: 1, type: "solid"}}
                    },
                    emphasis: {
                        label: {show: !1, position: "outer"},
                        labelLine: {show: !1, length: 40, lineStyle: {width: 1, type: "solid"}}
                    }
                }
            },
            map: {
                mapType: "china",
                mapLocation: {x: "center", y: "center"},
                itemStyle: {
                    normal: {
                        lineStyle: {width: 2, color: "#fff"},
                        areaStyle: {color: "#ccc"},
                        label: {show: !1, textStyle: {color: "rgba(139,69,19,1)"}}
                    },
                    emphasis: {
                        lineStyle: {width: 2, color: "#fff"},
                        areaStyle: {color: "rgba(255,215,0,0.8)"},
                        label: {show: !1, textStyle: {color: "rgba(139,69,19,1)"}}
                    }
                }
            },
            force: {
                minRadius: 10,
                maxRadius: 20,
                density: 1,
                attractiveness: 1,
                initSize: 300,
                centripetal: 1,
                coolDown: .99,
                categories: [],
                itemStyle: {
                    normal: {
                        label: {show: !1},
                        nodeStyle: {brushType: "both", color: "#f08c2e", strokeColor: "#5182ab"},
                        linkStyle: {strokeColor: "#5182ab"}
                    }, emphasis: {label: {show: !1}, nodeStyle: {}, linkStyle: {}}
                }
            },
            chord: {
                radius: ["65%", "75%"],
                center: ["50%", "50%"],
                padding: 2,
                sort: "none",
                sortSub: "none",
                startAngle: 90,
                clockWise: !1,
                showScale: !1,
                showScaleText: !1,
                itemStyle: {
                    normal: {
                        label: {show: !0},
                        lineStyle: {width: 0, color: "#000"},
                        chordStyle: {lineStyle: {width: 1, color: "#666"}}
                    },
                    emphasis: {lineStyle: {width: 0, color: "#000"}, chordStyle: {lineStyle: {width: 2, color: "#333"}}}
                },
                matrix: []
            },
            island: {r: 15, calculateStep: .1},
            textStyle: {
                decoration: "none",
                fontFamily: "Arial, Verdana, sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            EVENT: {
                REFRESH: "refresh",
                RESTORE: "restore",
                CLICK: "click",
                HOVER: "hover",
                MOUSEWHEEL: "mousewheel",
                DATA_CHANGED: "dataChanged",
                DATA_ZOOM: "dataZoom",
                DATA_RANGE: "dataRange",
                LEGEND_SELECTED: "legendSelected",
                MAP_SELECTED: "mapSelected",
                PIE_SELECTED: "pieSelected",
                MAGIC_TYPE_CHANGED: "magicTypeChanged",
                DATA_VIEW_CHANGED: "dataViewChanged",
                TOOLTIP_HOVER: "tooltipHover"
            },
            calculable: !1,
            calculableColor: "rgba(255,165,0,0.6)",
            calculableHolderColor: "#ccc",
            nameConnector: " & ",
            valueConnector: " : ",
            animation: !0,
            addDataAnimation: !0,
            animationDuration: 2e3,
            animationEasing: "ExponentialOut"
        };
        return e
    }), r("zrender/lib/excanvas", ["require"], function (e) {
        return document.createElement("canvas").getContext ? G_vmlCanvasManager = !1 : function () {
            function f() {
                return this.context_ || (this.context_ = new I(this))
            }

            function c(e, t, n) {
                var r = l.call(arguments, 2);
                return function () {
                    return e.apply(t, r.concat(l.call(arguments)))
                }
            }

            function h(e) {
                return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
            }

            function p(e, t, n) {
                e.namespaces[t] || e.namespaces.add(t, n, "#default#VML")
            }

            function d(e) {
                p(e, "g_vml_", "urn:schemas-microsoft-com:vml"), p(e, "g_o_", "urn:schemas-microsoft-com:office:office");
                if (!e.styleSheets.ex_canvas_) {
                    var t = e.createStyleSheet();
                    t.owningElement.id = "ex_canvas_", t.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
                }
            }

            function m(e) {
                var t = e.srcElement;
                switch (e.propertyName) {
                    case"width":
                        t.getContext().clearRect(), t.style.width = t.attributes.width.nodeValue + "px", t.firstChild.style.width = t.clientWidth + "px";
                        break;
                    case"height":
                        t.getContext().clearRect(), t.style.height = t.attributes.height.nodeValue + "px", t.firstChild.style.height = t.clientHeight + "px"
                }
            }

            function g(e) {
                var t = e.srcElement;
                t.firstChild && (t.firstChild.style.width = t.clientWidth + "px", t.firstChild.style.height = t.clientHeight + "px")
            }

            function E() {
                return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
            }

            function S(e, t) {
                var n = E();
                for (var r = 0; r < 3; r++) for (var i = 0; i < 3; i++) {
                    var s = 0;
                    for (var o = 0; o < 3; o++) s += e[r][o] * t[o][i];
                    n[r][i] = s
                }
                return n
            }

            function x(e, t) {
                t.fillStyle = e.fillStyle, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.shadowBlur = e.shadowBlur, t.shadowColor = e.shadowColor, t.shadowOffsetX = e.shadowOffsetX, t.shadowOffsetY = e.shadowOffsetY, t.strokeStyle = e.strokeStyle, t.globalAlpha = e.globalAlpha, t.font = e.font, t.textAlign = e.textAlign, t.textBaseline = e.textBaseline, t.arcScaleX_ = e.arcScaleX_, t.arcScaleY_ = e.arcScaleY_, t.lineScale_ = e.lineScale_
            }

            function N(e) {
                var t = e.indexOf("(", 3), n = e.indexOf(")", t + 1), r = e.substring(t + 1, n).split(",");
                if (r.length != 4 || e.charAt(3) != "a") r[3] = 1;
                return r
            }

            function C(e) {
                return parseFloat(e) / 100
            }

            function k(e, t, n) {
                return Math.min(n, Math.max(t, e))
            }

            function L(e) {
                var t, n, r, i, s, o;
                i = parseFloat(e[0]) / 360 % 360, i < 0 && i++, s = k(C(e[1]), 0, 1), o = k(C(e[2]), 0, 1);
                if (s == 0) t = n = r = o; else {
                    var u = o < .5 ? o * (1 + s) : o + s - o * s, a = 2 * o - u;
                    t = A(a, u, i + 1 / 3), n = A(a, u, i), r = A(a, u, i - 1 / 3)
                }
                return "#" + y[Math.floor(t * 255)] + y[Math.floor(n * 255)] + y[Math.floor(r * 255)]
            }

            function A(e, t, n) {
                return n < 0 && n++, n > 1 && n--, 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }

            function M(e) {
                if (e in O) return O[e];
                var t, n = 1;
                e = String(e);
                if (e.charAt(0) == "#") t = e; else if (/^rgb/.test(e)) {
                    var r = N(e), t = "#", i;
                    for (var s = 0; s < 3; s++) r[s].indexOf("%") != -1 ? i = Math.floor(C(r[s]) * 255) : i = +r[s], t += y[k(i, 0, 255)];
                    n = +r[3]
                } else if (/^hsl/.test(e)) {
                    var r = N(e);
                    t = L(r), n = r[3]
                } else t = T[e] || e;
                return O[e] = {color: t, alpha: n}
            }

            function P(e) {
                if (D[e]) return D[e];
                var t = document.createElement("div"), n = t.style;
                try {
                    n.font = e
                } catch (r) {
                }
                return D[e] = {
                    style: n.fontStyle || _.style,
                    variant: n.fontVariant || _.variant,
                    weight: n.fontWeight || _.weight,
                    size: n.fontSize || _.size,
                    family: n.fontFamily || _.family
                }
            }

            function H(e, t) {
                var n = {};
                for (var r in e) n[r] = e[r];
                var i = parseFloat(t.currentStyle.fontSize), s = parseFloat(e.size);
                return typeof e.size == "number" ? n.size = e.size : e.size.indexOf("px") != -1 ? n.size = s : e.size.indexOf("em") != -1 ? n.size = i * s : e.size.indexOf("%") != -1 ? n.size = i / 100 * s : e.size.indexOf("pt") != -1 ? n.size = s / .75 : n.size = i, n.size *= .981, n
            }

            function B(e) {
                return e.style + " " + e.variant + " " + e.weight + " " + e.size + "px " + e.family
            }

            function F(e) {
                return j[e] || "square"
            }

            function I(e) {
                this.m_ = E(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = o * 1, this.globalAlpha = 1, this.font = "10px sans-serif", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = e;
                var t = "width:" + e.clientWidth + "px;height:" + e.clientHeight + "px;overflow:hidden;position:absolute",
                    n = e.ownerDocument.createElement("div");
                n.style.cssText = t, e.appendChild(n);
                var r = n.cloneNode(!1);
                r.style.backgroundColor = "red", r.style.filter = "alpha(opacity=0)", e.appendChild(r), this.element_ = n, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
            }

            function R(e, t, n, r) {
                e.currentPath_.push({
                    type: "bezierCurveTo",
                    cp1x: t.x,
                    cp1y: t.y,
                    cp2x: n.x,
                    cp2y: n.y,
                    x: r.x,
                    y: r.y
                }), e.currentX_ = r.x, e.currentY_ = r.y
            }

            function U(e, t) {
                var n = M(e.strokeStyle), r = n.color, i = n.alpha * e.globalAlpha, s = e.lineScale_ * e.lineWidth;
                s < 1 && (i *= s), t.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', e.lineJoin, '"', ' miterlimit="', e.miterLimit, '"', ' endcap="', F(e.lineCap), '"', ' weight="', s, 'px"', ' color="', r, '" />')
            }

            function z(t, n, r, i) {
                var s = t.fillStyle, u = t.arcScaleX_, a = t.arcScaleY_, f = i.x - r.x, l = i.y - r.y;
                if (s instanceof $) {
                    var c = 0, h = {x: 0, y: 0}, p = 0, d = 1;
                    if (s.type_ == "gradient") {
                        var v = s.x0_ / u, m = s.y0_ / a, g = s.x1_ / u, y = s.y1_ / a, b = W(t, v, m), w = W(t, g, y),
                            E = w.x - b.x, S = w.y - b.y;
                        c = Math.atan2(E, S) * 180 / Math.PI, c < 0 && (c += 360), c < 1e-6 && (c = 0)
                    } else {
                        var b = W(t, s.x0_, s.y0_);
                        h = {x: (b.x - r.x) / f, y: (b.y - r.y) / l}, f /= u * o, l /= a * o;
                        var x = e.max(f, l);
                        p = 2 * s.r0_ / x, d = 2 * s.r1_ / x - p
                    }
                    var T = s.colors_;
                    T.sort(function (e, t) {
                        return e.offset - t.offset
                    });
                    var N = T.length, C = T[0].color, k = T[N - 1].color, L = T[0].alpha * t.globalAlpha,
                        A = T[N - 1].alpha * t.globalAlpha, O = [];
                    for (var _ = 0; _ < N; _++) {
                        var D = T[_];
                        O.push(D.offset * d + p + " " + D.color)
                    }
                    n.push('<g_vml_:fill type="', s.type_, '"', ' method="none" focus="100%"', ' color="', C, '"', ' color2="', k, '"', ' colors="', O.join(","), '"', ' opacity="', A, '"', ' g_o_:opacity2="', L, '"', ' angle="', c, '"', ' focusposition="', h.x, ",", h.y, '" />')
                } else if (s instanceof J) {
                    if (f && l) {
                        var P = -r.x, H = -r.y;
                        n.push("<g_vml_:fill", ' position="', P / f * u * u, ",", H / l * a * a, '"', ' type="tile"', ' src="', s.src_, '" />')
                    }
                } else {
                    var B = M(t.fillStyle), j = B.color, F = B.alpha * t.globalAlpha;
                    n.push('<g_vml_:fill color="', j, '" opacity="', F, '" />')
                }
            }

            function W(e, t, n) {
                var r = e.m_;
                return {
                    x: o * (t * r[0][0] + n * r[1][0] + r[2][0]) - u,
                    y: o * (t * r[0][1] + n * r[1][1] + r[2][1]) - u
                }
            }

            function X(e) {
                return isFinite(e[0][0]) && isFinite(e[0][1]) && isFinite(e[1][0]) && isFinite(e[1][1]) && isFinite(e[2][0]) && isFinite(e[2][1])
            }

            function V(e, t, n) {
                if (!X(t)) return;
                e.m_ = t;
                if (n) {
                    var r = t[0][0] * t[1][1] - t[0][1] * t[1][0];
                    e.lineScale_ = s(i(r))
                }
            }

            function $(e) {
                this.type_ = e, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
            }

            function J(e, t) {
                Q(e);
                switch (t) {
                    case"repeat":
                    case null:
                    case"":
                        this.repetition_ = "repeat";
                        break;
                    case"repeat-x":
                    case"repeat-y":
                    case"no-repeat":
                        this.repetition_ = t;
                        break;
                    default:
                        K("SYNTAX_ERR")
                }
                this.src_ = e.src, this.width_ = e.width, this.height_ = e.height
            }

            function K(e) {
                throw new G(e)
            }

            function Q(e) {
                (!e || e.nodeType != 1 || e.tagName != "IMG") && K("TYPE_MISMATCH_ERR"), e.readyState != "complete" && K("INVALID_STATE_ERR")
            }

            function G(e) {
                this.code = this[e], this.message = e + ": DOM Exception " + this.code
            }

            var e = Math, t = e.round, n = e.sin, r = e.cos, i = e.abs, s = e.sqrt, o = 10, u = o / 2,
                a = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1], l = Array.prototype.slice;
            d(document);
            var v = {
                init: function (e) {
                    var t = e || document;
                    t.createElement("canvas"), t.attachEvent("onreadystatechange", c(this.init_, this, t))
                }, init_: function (e) {
                    var t = e.getElementsByTagName("canvas");
                    for (var n = 0; n < t.length; n++) this.initElement(t[n])
                }, initElement: function (e) {
                    if (!e.getContext) {
                        e.getContext = f, d(e.ownerDocument), e.innerHTML = "", e.attachEvent("onpropertychange", m), e.attachEvent("onresize", g);
                        var t = e.attributes;
                        t.width && t.width.specified ? e.style.width = t.width.nodeValue + "px" : e.width = e.clientWidth, t.height && t.height.specified ? e.style.height = t.height.nodeValue + "px" : e.height = e.clientHeight
                    }
                    return e
                }
            };
            v.init();
            var y = [];
            for (var b = 0; b < 16; b++) for (var w = 0; w < 16; w++) y[b * 16 + w] = b.toString(16) + w.toString(16);
            var T = {
                    aliceblue: "#F0F8FF",
                    antiquewhite: "#FAEBD7",
                    aquamarine: "#7FFFD4",
                    azure: "#F0FFFF",
                    beige: "#F5F5DC",
                    bisque: "#FFE4C4",
                    black: "#000000",
                    blanchedalmond: "#FFEBCD",
                    blueviolet: "#8A2BE2",
                    brown: "#A52A2A",
                    burlywood: "#DEB887",
                    cadetblue: "#5F9EA0",
                    chartreuse: "#7FFF00",
                    chocolate: "#D2691E",
                    coral: "#FF7F50",
                    cornflowerblue: "#6495ED",
                    cornsilk: "#FFF8DC",
                    crimson: "#DC143C",
                    cyan: "#00FFFF",
                    darkblue: "#00008B",
                    darkcyan: "#008B8B",
                    darkgoldenrod: "#B8860B",
                    darkgray: "#A9A9A9",
                    darkgreen: "#006400",
                    darkgrey: "#A9A9A9",
                    darkkhaki: "#BDB76B",
                    darkmagenta: "#8B008B",
                    darkolivegreen: "#556B2F",
                    darkorange: "#FF8C00",
                    darkorchid: "#9932CC",
                    darkred: "#8B0000",
                    darksalmon: "#E9967A",
                    darkseagreen: "#8FBC8F",
                    darkslateblue: "#483D8B",
                    darkslategray: "#2F4F4F",
                    darkslategrey: "#2F4F4F",
                    darkturquoise: "#00CED1",
                    darkviolet: "#9400D3",
                    deeppink: "#FF1493",
                    deepskyblue: "#00BFFF",
                    dimgray: "#696969",
                    dimgrey: "#696969",
                    dodgerblue: "#1E90FF",
                    firebrick: "#B22222",
                    floralwhite: "#FFFAF0",
                    forestgreen: "#228B22",
                    gainsboro: "#DCDCDC",
                    ghostwhite: "#F8F8FF",
                    gold: "#FFD700",
                    goldenrod: "#DAA520",
                    grey: "#808080",
                    greenyellow: "#ADFF2F",
                    honeydew: "#F0FFF0",
                    hotpink: "#FF69B4",
                    indianred: "#CD5C5C",
                    indigo: "#4B0082",
                    ivory: "#FFFFF0",
                    khaki: "#F0E68C",
                    lavender: "#E6E6FA",
                    lavenderblush: "#FFF0F5",
                    lawngreen: "#7CFC00",
                    lemonchiffon: "#FFFACD",
                    lightblue: "#ADD8E6",
                    lightcoral: "#F08080",
                    lightcyan: "#E0FFFF",
                    lightgoldenrodyellow: "#FAFAD2",
                    lightgreen: "#90EE90",
                    lightgrey: "#D3D3D3",
                    lightpink: "#FFB6C1",
                    lightsalmon: "#FFA07A",
                    lightseagreen: "#20B2AA",
                    lightskyblue: "#87CEFA",
                    lightslategray: "#778899",
                    lightslategrey: "#778899",
                    lightsteelblue: "#B0C4DE",
                    lightyellow: "#FFFFE0",
                    limegreen: "#32CD32",
                    linen: "#FAF0E6",
                    magenta: "#FF00FF",
                    mediumaquamarine: "#66CDAA",
                    mediumblue: "#0000CD",
                    mediumorchid: "#BA55D3",
                    mediumpurple: "#9370DB",
                    mediumseagreen: "#3CB371",
                    mediumslateblue: "#7B68EE",
                    mediumspringgreen: "#00FA9A",
                    mediumturquoise: "#48D1CC",
                    mediumvioletred: "#C71585",
                    midnightblue: "#191970",
                    mintcream: "#F5FFFA",
                    mistyrose: "#FFE4E1",
                    moccasin: "#FFE4B5",
                    navajowhite: "#FFDEAD",
                    oldlace: "#FDF5E6",
                    olivedrab: "#6B8E23",
                    orange: "#FFA500",
                    orangered: "#FF4500",
                    orchid: "#DA70D6",
                    palegoldenrod: "#EEE8AA",
                    palegreen: "#98FB98",
                    paleturquoise: "#AFEEEE",
                    palevioletred: "#DB7093",
                    papayawhip: "#FFEFD5",
                    peachpuff: "#FFDAB9",
                    peru: "#CD853F",
                    pink: "#FFC0CB",
                    plum: "#DDA0DD",
                    powderblue: "#B0E0E6",
                    rosybrown: "#BC8F8F",
                    royalblue: "#4169E1",
                    saddlebrown: "#8B4513",
                    salmon: "#FA8072",
                    sandybrown: "#F4A460",
                    seagreen: "#2E8B57",
                    seashell: "#FFF5EE",
                    sienna: "#A0522D",
                    skyblue: "#87CEEB",
                    slateblue: "#6A5ACD",
                    slategray: "#708090",
                    slategrey: "#708090",
                    snow: "#FFFAFA",
                    springgreen: "#00FF7F",
                    steelblue: "#4682B4",
                    tan: "#D2B48C",
                    thistle: "#D8BFD8",
                    tomato: "#FF6347",
                    turquoise: "#40E0D0",
                    violet: "#EE82EE",
                    wheat: "#F5DEB3",
                    whitesmoke: "#F5F5F5",
                    yellowgreen: "#9ACD32"
                }, O = {}, _ = {style: "normal", variant: "normal", weight: "normal", size: 10, family: "sans-serif"},
                D = {}, j = {butt: "flat", round: "round"}, q = I.prototype;
            q.clearRect = function () {
                this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
            }, q.beginPath = function () {
                this.currentPath_ = []
            }, q.moveTo = function (e, t) {
                var n = W(this, e, t);
                this.currentPath_.push({type: "moveTo", x: n.x, y: n.y}), this.currentX_ = n.x, this.currentY_ = n.y
            }, q.lineTo = function (e, t) {
                var n = W(this, e, t);
                this.currentPath_.push({type: "lineTo", x: n.x, y: n.y}), this.currentX_ = n.x, this.currentY_ = n.y
            }, q.bezierCurveTo = function (e, t, n, r, i, s) {
                var o = W(this, i, s), u = W(this, e, t), a = W(this, n, r);
                R(this, u, a, o)
            }, q.quadraticCurveTo = function (e, t, n, r) {
                var i = W(this, e, t), s = W(this, n, r), o = {
                    x: this.currentX_ + 2 / 3 * (i.x - this.currentX_),
                    y: this.currentY_ + 2 / 3 * (i.y - this.currentY_)
                }, u = {x: o.x + (s.x - this.currentX_) / 3, y: o.y + (s.y - this.currentY_) / 3};
                R(this, o, u, s)
            }, q.arc = function (e, t, i, s, a, f) {
                i *= o;
                var l = f ? "at" : "wa", c = e + r(s) * i - u, h = t + n(s) * i - u, p = e + r(a) * i - u,
                    d = t + n(a) * i - u;
                c == p && !f && (c += .125);
                var v = W(this, e, t), m = W(this, c, h), g = W(this, p, d);
                this.currentPath_.push({
                    type: l,
                    x: v.x,
                    y: v.y,
                    radius: i,
                    xStart: m.x,
                    yStart: m.y,
                    xEnd: g.x,
                    yEnd: g.y
                })
            }, q.rect = function (e, t, n, r) {
                this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath()
            }, q.strokeRect = function (e, t, n, r) {
                var i = this.currentPath_;
                this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.stroke(), this.currentPath_ = i
            }, q.fillRect = function (e, t, n, r) {
                var i = this.currentPath_;
                this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.fill(), this.currentPath_ = i
            }, q.createLinearGradient = function (e, t, n, r) {
                var i = new $("gradient");
                return i.x0_ = e, i.y0_ = t, i.x1_ = n, i.y1_ = r, i
            }, q.createRadialGradient = function (e, t, n, r, i, s) {
                var o = new $("gradientradial");
                return o.x0_ = e, o.y0_ = t, o.r0_ = n, o.x1_ = r, o.y1_ = i, o.r1_ = s, o
            }, q.drawImage = function (n, r) {
                var i, s, u, a, f, l, c, h, p = n.runtimeStyle.width, d = n.runtimeStyle.height;
                n.runtimeStyle.width = "auto", n.runtimeStyle.height = "auto";
                var v = n.width, m = n.height;
                n.runtimeStyle.width = p, n.runtimeStyle.height = d;
                if (arguments.length == 3) i = arguments[1], s = arguments[2], f = l = 0, c = u = v, h = a = m; else if (arguments.length == 5) i = arguments[1], s = arguments[2], u = arguments[3], a = arguments[4], f = l = 0, c = v, h = m; else {
                    if (arguments.length != 9) throw Error("Invalid number of arguments");
                    f = arguments[1], l = arguments[2], c = arguments[3], h = arguments[4], i = arguments[5], s = arguments[6], u = arguments[7], a = arguments[8]
                }
                var g = W(this, i, s), y = c / 2, b = h / 2, w = [], E = 10, S = 10;
                w.push(" <g_vml_:group", ' coordsize="', o * E, ",", o * S, '"', ' coordorigin="0,0"', ' style="width:', E, "px;height:", S, "px;position:absolute;");
                if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
                    var x = [];
                    x.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", t(g.x / o), ",", "Dy=", t(g.y / o), "");
                    var T = g, N = W(this, i + u, s), C = W(this, i, s + a), k = W(this, i + u, s + a);
                    T.x = e.max(T.x, N.x, C.x, k.x), T.y = e.max(T.y, N.y, C.y, k.y), w.push("padding:0 ", t(T.x / o), "px ", t(T.y / o), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", x.join(""), ", sizingmethod='clip');")
                } else w.push("top:", t(g.y / o), "px;left:", t(g.x / o), "px;");
                w.push(' ">', '<g_vml_:image src="', n.src, '"', ' style="width:', o * u, "px;", " height:", o * a, 'px"', ' cropleft="', f / v, '"', ' croptop="', l / m, '"', ' cropright="', (v - f - c) / v, '"', ' cropbottom="', (m - l - h) / m, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", w.join(""))
            }, q.stroke = function (e) {
                var n = [], r = !1, i = 10, s = 10;
                n.push("<g_vml_:shape", ' filled="', !!e, '"', ' style="position:absolute;width:', i, "px;height:", s, 'px;"', ' coordorigin="0,0"', ' coordsize="', o * i, ",", o * s, '"', ' stroked="', !e, '"', ' path="');
                var u = !1, a = {x: null, y: null}, f = {x: null, y: null};
                for (var l = 0; l < this.currentPath_.length; l++) {
                    var c = this.currentPath_[l], h;
                    switch (c.type) {
                        case"moveTo":
                            h = c, n.push(" m ", t(c.x), ",", t(c.y));
                            break;
                        case"lineTo":
                            n.push(" l ", t(c.x), ",", t(c.y));
                            break;
                        case"close":
                            n.push(" x "), c = null;
                            break;
                        case"bezierCurveTo":
                            n.push(" c ", t(c.cp1x), ",", t(c.cp1y), ",", t(c.cp2x), ",", t(c.cp2y), ",", t(c.x), ",", t(c.y));
                            break;
                        case"at":
                        case"wa":
                            n.push(" ", c.type, " ", t(c.x - this.arcScaleX_ * c.radius), ",", t(c.y - this.arcScaleY_ * c.radius), " ", t(c.x + this.arcScaleX_ * c.radius), ",", t(c.y + this.arcScaleY_ * c.radius), " ", t(c.xStart), ",", t(c.yStart), " ", t(c.xEnd), ",", t(c.yEnd))
                    }
                    if (c) {
                        if (a.x == null || c.x < a.x) a.x = c.x;
                        if (f.x == null || c.x > f.x) f.x = c.x;
                        if (a.y == null || c.y < a.y) a.y = c.y;
                        if (f.y == null || c.y > f.y) f.y = c.y
                    }
                }
                n.push(' ">'), e ? z(this, n, a, f) : U(this, n), n.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
            }, q.fill = function () {
                this.stroke(!0)
            }, q.closePath = function () {
                this.currentPath_.push({type: "close"})
            }, q.save = function () {
                var e = {};
                x(this, e), this.aStack_.push(e), this.mStack_.push(this.m_), this.m_ = S(E(), this.m_)
            }, q.restore = function () {
                this.aStack_.length && (x(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
            }, q.translate = function (e, t) {
                var n = [[1, 0, 0], [0, 1, 0], [e, t, 1]];
                V(this, S(n, this.m_), !1)
            }, q.rotate = function (e) {
                var t = r(e), i = n(e), s = [[t, i, 0], [-i, t, 0], [0, 0, 1]];
                V(this, S(s, this.m_), !1)
            }, q.scale = function (e, t) {
                this.arcScaleX_ *= e, this.arcScaleY_ *= t;
                var n = [[e, 0, 0], [0, t, 0], [0, 0, 1]];
                V(this, S(n, this.m_), !0)
            }, q.transform = function (e, t, n, r, i, s) {
                var o = [[e, t, 0], [n, r, 0], [i, s, 1]];
                V(this, S(o, this.m_), !0)
            }, q.setTransform = function (e, t, n, r, i, s) {
                var o = [[e, t, 0], [n, r, 0], [i, s, 1]];
                V(this, o, !0)
            }, q.drawText_ = function (e, n, r, i, s) {
                var u = this.m_, a = 1e3, f = 0, l = a, c = {x: 0, y: 0}, p = [], d = H(P(this.font), this.element_),
                    v = B(d), m = this.element_.currentStyle, g = this.textAlign.toLowerCase();
                switch (g) {
                    case"left":
                    case"center":
                    case"right":
                        break;
                    case"end":
                        g = m.direction == "ltr" ? "right" : "left";
                        break;
                    case"start":
                        g = m.direction == "rtl" ? "right" : "left";
                        break;
                    default:
                        g = "left"
                }
                switch (this.textBaseline) {
                    case"hanging":
                    case"top":
                        c.y = d.size / 1.75;
                        break;
                    case"middle":
                        break;
                    default:
                    case null:
                    case"alphabetic":
                    case"ideographic":
                    case"bottom":
                        c.y = -d.size / 2.25
                }
                switch (g) {
                    case"right":
                        f = a, l = .05;
                        break;
                    case"center":
                        f = l = a / 2
                }
                var y = W(this, n + c.x, r + c.y);
                p.push('<g_vml_:line from="', -f, ' 0" to="', l, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !s, '" stroked="', !!s, '" style="position:absolute;width:1px;height:1px;">'), s ? U(this, p) : z(this, p, {
                    x: -f,
                    y: 0
                }, {x: l, y: d.size});
                var b = u[0][0].toFixed(3) + "," + u[1][0].toFixed(3) + "," + u[0][1].toFixed(3) + "," + u[1][1].toFixed(3) + ",0,0",
                    w = t(y.x / o) + "," + t(y.y / o);
                p.push('<g_vml_:skew on="t" matrix="', b, '" ', ' offset="', w, '" origin="', f, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', h(e), '" style="v-text-align:', g, ";font:", h(v), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", p.join(""))
            }, q.fillText = function (e, t, n, r) {
                this.drawText_(e, t, n, r, !1)
            }, q.strokeText = function (e, t, n, r) {
                this.drawText_(e, t, n, r, !0)
            }, q.measureText = function (e) {
                if (!this.textMeasureEl_) {
                    var t = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
                    this.element_.insertAdjacentHTML("beforeEnd", t), this.textMeasureEl_ = this.element_.lastChild
                }
                var n = this.element_.ownerDocument;
                return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(n.createTextNode(e)), {width: this.textMeasureEl_.offsetWidth}
            }, q.clip = function () {
            }, q.arcTo = function () {
            }, q.createPattern = function (e, t) {
                return new J(e, t)
            }, $.prototype.addColorStop = function (e, t) {
                t = M(t), this.colors_.push({offset: e, color: t.color, alpha: t.alpha})
            };
            var Y = G.prototype = new Error;
            Y.INDEX_SIZE_ERR = 1, Y.DOMSTRING_SIZE_ERR = 2, Y.HIERARCHY_REQUEST_ERR = 3, Y.WRONG_DOCUMENT_ERR = 4, Y.INVALID_CHARACTER_ERR = 5, Y.NO_DATA_ALLOWED_ERR = 6, Y.NO_MODIFICATION_ALLOWED_ERR = 7, Y.NOT_FOUND_ERR = 8, Y.NOT_SUPPORTED_ERR = 9, Y.INUSE_ATTRIBUTE_ERR = 10, Y.INVALID_STATE_ERR = 11, Y.SYNTAX_ERR = 12, Y.INVALID_MODIFICATION_ERR = 13, Y.NAMESPACE_ERR = 14, Y.INVALID_ACCESS_ERR = 15, Y.VALIDATION_ERR = 16, Y.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = v, CanvasRenderingContext2D = I, CanvasGradient = $, CanvasPattern = J, DOMException = G
        }(), G_vmlCanvasManager
    }), r("zrender/tool/env", [], function () {
        function e(e) {
            var t = this.os = {}, n = this.browser = {}, r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/), s = e.match(/(iPad).*OS\s([\d_]+)/),
                o = e.match(/(iPod)(.*OS\s([\d_]+))?/), u = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
                a = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), f = a && e.match(/TouchPad/),
                l = e.match(/Kindle\/([\d.]+)/), c = e.match(/Silk\/([\d._]+)/),
                h = e.match(/(BlackBerry).*Version\/([\d.]+)/), p = e.match(/(BB10).*Version\/([\d.]+)/),
                d = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/), v = e.match(/PlayBook/),
                m = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/), g = e.match(/Firefox\/([\d.]+)/),
                y = e.match(/MSIE ([\d.]+)/), b = r && e.match(/Mobile\//) && !m,
                w = e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m, y = e.match(/MSIE\s([\d.]+)/);
            if (n.webkit = !!r) n.version = r[1];
            return i && (t.android = !0, t.version = i[2]), u && !o && (t.ios = t.iphone = !0, t.version = u[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), o && (t.ios = t.ipod = !0, t.version = o[3] ? o[3].replace(/_/g, ".") : null), a && (t.webos = !0, t.version = a[2]), f && (t.touchpad = !0), h && (t.blackberry = !0, t.version = h[2]), p && (t.bb10 = !0, t.version = p[2]), d && (t.rimtabletos = !0, t.version = d[2]), v && (n.playbook = !0), l && (t.kindle = !0, t.version = l[1]), c && (n.silk = !0, n.version = c[1]), !c && t.android && e.match(/Kindle Fire/) && (n.silk = !0), m && (n.chrome = !0, n.version = m[1]), g && (n.firefox = !0, n.version = g[1]), y && (n.ie = !0, n.version = y[1]), b && (e.match(/Safari/) || !!t.ios) && (n.safari = !0), w && (n.webview = !0), y && (n.ie = !0, n.version = y[1]), t.tablet = !!(s || v || i && !e.match(/Mobile/) || g && e.match(/Tablet/) || y && !e.match(/Phone/) && e.match(/Touch/)), t.phone = !!(!t.tablet && !t.ipod && (i || u || a || h || p || m && e.match(/Android/) || m && e.match(/CriOS\/([\d.]+)/) || g && e.match(/Mobile/) || y && e.match(/Touch/))), {
                browser: n,
                os: t,
                canvasSupported: document.createElement("canvas").getContext ? !0 : !1
            }
        }

        return e(navigator.userAgent)
    }), r("zrender/shape", [], function () {
        var e = {}, t = {};
        return e.define = function (n, r) {
            return t[n] = r, e
        }, e.get = function (e) {
            return t[e]
        }, e
    }), r("zrender/tool/vector", [], function () {
        var e = typeof Float32Array == "undefined" ? Array : Float32Array, t = {
            create: function (t, n) {
                var r = new e(2);
                return r[0] = t || 0, r[1] = n || 0, r
            }, copy: function (e, t) {
                e[0] = t[0], e[1] = t[1]
            }, set: function (e, t, n) {
                e[0] = t, e[1] = n
            }, add: function (e, t, n) {
                return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
            }, scaleAndAdd: function (e, t, n, r) {
                return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
            }, sub: function (e, t, n) {
                return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
            }, length: function (e) {
                return Math.sqrt(this.lengthSquare(e))
            }, lengthSquare: function (e) {
                return e[0] * e[0] + e[1] * e[1]
            }, mul: function (e, t, n) {
                return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
            }, dot: function (e, t) {
                return e[0] * t[0] + e[1] * t[1]
            }, scale: function (e, t, n) {
                return e[0] = t[0] * n, e[1] = t[1] * n, e
            }, normalize: function (e, n) {
                var r = t.length(n);
                return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = n[0] / r, e[1] = n[1] / r), e
            }, distance: function (e, t) {
                return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
            }, negate: function (e, t) {
                e[0] = -t[0], e[1] = -t[1]
            }, middle: function (e, t, n) {
                return e[0] = (t[0] + n[0]) / 2, e[1] = (t[1] + n[1]) / 2, e
            }
        };
        return t
    }), r("zrender/tool/util", ["require", "./vector", "../lib/excanvas"], function (e) {
        function n(e) {
            var t = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1
            }, n = e, r, i;
            if (!e || e instanceof Number || e instanceof String || e instanceof Boolean) return n;
            if (e instanceof Array) {
                n = [];
                var s = 0;
                for (r = 0, i = e.length; r < i; r++) n[s++] = this.clone(e[r])
            } else if ("object" == typeof e) {
                if (t[Object.prototype.toString.call(e)] || e.__nonRecursion) return n;
                n = {};
                for (r in e) e.hasOwnProperty(r) && (n[r] = this.clone(e[r]))
            }
            return n
        }

        function i(e, t, n, r) {
            if (!e || !t) return;
            if (t instanceof Object) for (var s in t) if (t.hasOwnProperty(s)) if (t[s] instanceof Object && r && e[s]) i(e[s], t[s], n, r); else if (n || !e.hasOwnProperty(s)) e[s] = t[s]
        }

        function o() {
            if (!s) {
                e("../lib/excanvas");
                if (G_vmlCanvasManager) {
                    var t = document.createElement("div");
                    t.style.position = "absolute", t.style.top = "-1000px", document.body.appendChild(t), s = G_vmlCanvasManager.initElement(t).getContext("2d")
                } else s = document.createElement("canvas").getContext("2d")
            }
            return s
        }

        function p() {
            return a || (u = document.createElement("canvas"), f = u.width, l = u.height, a = u.getContext("2d")), a
        }

        function d(e, t) {
            var n = 100, r = !1;
            e + c > f && (f = e + c + n, u.width = f, r = !0), t + h > l && (l = t + h + n, u.height = l, r = !0), e < -c && (c = Math.ceil(-e / n) * n, f += c, u.width = f, r = !0), t < -h && (h = Math.ceil(-t / n) * n, l += h, u.height = l, r = !0), r && a.translate(c, h)
        }

        function v() {
            return {x: c, y: h}
        }

        function m(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1
        }

        function g(e, t, n) {
            if (e.length === 0) return;
            var r = e[0][0], i = e[0][0], s = e[0][1], o = e[0][1];
            for (var u = 1; u < e.length; u++) {
                var a = e[u];
                a[0] < r && (r = a[0]), a[0] > i && (i = a[0]), a[1] < s && (s = a[1]), a[1] > o && (o = a[1])
            }
            t[0] = r, t[1] = s, n[0] = i, n[1] = o
        }

        function y(e, t, n, r, i, s) {
            var o = b(e[0], t[0], n[0], r[0]), u = b(e[1], t[1], n[1], r[1]);
            o.push(e[0], r[0]), u.push(e[1], r[1]);
            var a = Math.min.apply(null, o), f = Math.max.apply(null, o), l = Math.min.apply(null, u),
                c = Math.max.apply(null, u);
            i[0] = a, i[1] = l, s[0] = f, s[1] = c
        }

        function b(e, t, n, r) {
            var i = [], s = 6 * n - 12 * t + 6 * e, o = 9 * t + 3 * r - 3 * e - 9 * n, u = 3 * t - 3 * e,
                a = s * s - 4 * o * u;
            if (a > 0) {
                var f = Math.sqrt(a), l = (-s + f) / (2 * o), c = (-s - f) / (2 * o);
                i.push(l, c)
            } else a === 0 && i.push(-s / (2 * o));
            var h = [];
            for (var p = 0; p < i.length; p++) {
                var d = i[p];
                if (Math.abs(2 * o * d + s) > 1e-4 && d < 1 && d > 0) {
                    var v = 1 - d, m = v * v * v * e + 3 * v * v * d * t + 3 * v * d * d * n + d * d * d * r;
                    h.push(m)
                }
            }
            return h
        }

        function w(e, t, n, r, i) {
            var s = e[0] + n[0] - 2 * t[0], o;
            s === 0 ? o = .5 : o = (e[0] - t[0]) / s, s = e[1] + n[1] - 2 * t[1];
            var u;
            s === 0 ? u = .5 : u = (e[1] - t[1]) / s, o = Math.max(Math.min(o, 1), 0), u = Math.max(Math.min(u, 1), 0);
            var a = 1 - o, f = 1 - u, l = a * a * e[0] + 2 * a * o * t[0] + o * o * n[0],
                c = a * a * e[1] + 2 * a * o * t[1] + o * o * n[1], h = f * f * e[0] + 2 * f * u * t[0] + u * u * n[0],
                p = f * f * e[1] + 2 * f * u * t[1] + u * u * n[1];
            return g([e.slice(), n.slice(), [l, c], [h, p]], r, i)
        }

        var t = e("./vector"), r = function () {
            function t(t, n, i, s, o) {
                if (n.hasOwnProperty(i)) if (o && typeof t[i] == "object" && e[Object.prototype.toString.call(t[i])] != 1) r(t[i], n[i], {
                    overwrite: s,
                    recursive: o
                }); else if (s || !(i in t)) t[i] = n[i]
            }

            var e = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1
            };
            return function (e, n, r) {
                var i = 0, s = r || {}, o = s.overwrite, u = s.whiteList, a = s.recursive, f;
                if (u && u.length) {
                    f = u.length;
                    for (; i < f; ++i) t(e, n, u[i], o, a)
                } else for (i in n) t(e, n, i, o, a);
                return e
            }
        }(), s, u, a, f, l, c = 0, h = 0, E = function () {
            var e = [], n = [], r = [[], [], [], []];
            return function (i, s, o, u, a, f, l) {
                a = a ? 1 : -1, e[0] = Math.cos(o), e[1] = Math.sin(o) * a, t.scale(e, e, s), t.add(e, e, i), n[0] = Math.cos(u), n[1] = Math.sin(u) * a, t.scale(n, n, s), t.add(n, n, i), o %= Math.PI * 2, o < 0 && (o += Math.PI * 2), u %= Math.PI * 2, u < 0 && (u += Math.PI * 2), o > u && (u += Math.PI * 2);
                var c = 0;
                for (var h = 0; h < u; h += Math.PI / 2) if (h > o) {
                    var p = r[c++];
                    p[0] = Math.cos(h), p[1] = Math.sin(h) * a, t.scale(p, p, s), t.add(p, p, i)
                }
                var d = r.slice(0, c);
                d.push(e, n), g(d, f, l)
            }
        }();
        return {
            clone: n,
            merge: r,
            mergeFast: i,
            getContext: o,
            getPixelContext: p,
            getPixelOffset: v,
            adjustCanvasSize: d,
            computeBoundingBox: g,
            computeCubeBezierBoundingBox: y,
            computeQuadraticBezierBoundingBox: w,
            computeArcBoundingBox: E,
            indexOf: m
        }
    }), r("zrender/tool/area", ["require", "../tool/util"], function (e) {
        function r(e, r, u, a) {
            if (!r || !e) return !1;
            var f = e.type;
            n || (n = t.getContext());
            if (!h(r.__rect || e.getRect(r), u, a)) return !1;
            var l = i(f, r, u, a);
            if (typeof l != "undefined") return l;
            if (f != "beziercurve" && e.buildPath && n.isPointInPath) return s(e, n, r, u, a);
            if (n.getImageData) return o(e, r, u, a);
            switch (f) {
                case"heart":
                    return !0;
                case"droplet":
                    return !0;
                case"ellipse":
                    return !0;
                case"trochoid":
                    var c = r.location == "out" ? r.r1 + r.r2 + r.d : r.r1 - r.r2 + r.d;
                    return p(r, u, a, c);
                case"rose":
                    return p(r, u, a, r.maxr);
                default:
                    return !1
            }
        }

        function i(e, t, n, r) {
            switch (e) {
                case"line":
                    return f(t, n, r);
                case"brokenLine":
                    return l(t, n, r);
                case"text":
                    return !0;
                case"ring":
                    return c(t, n, r);
                case"rectangle":
                    return !0;
                case"circle":
                    return p(t, n, r, t.r);
                case"sector":
                    return d(t, n, r);
                case"path":
                    return m(t, n, r);
                case"polygon":
                case"star":
                case"isogon":
                    return v(t, n, r);
                case"image":
                    return !0
            }
        }

        function s(e, t, n, r, i) {
            return t.beginPath(), e.buildPath(t, n), t.closePath(), t.isPointInPath(r, i)
        }

        function o(e, n, r, i) {
            var s = n.__rect || e.getRect(n), o = t.getPixelContext(), a = t.getPixelOffset();
            return t.adjustCanvasSize(r, i), o.clearRect(s.x, s.y, s.width, s.height), o.beginPath(), e.brush(o, {style: n}), o.closePath(), u(o, r + a.x, i + a.y)
        }

        function u(e, t, n, r) {
            var i;
            typeof r != "undefined" ? (r = Math.floor((r || 1) / 2), i = e.getImageData(t - r, n - r, r + r, r + r).data) : i = e.getImageData(t, n, 1, 1).data;
            var s = i.length;
            while (s--) if (i[s] !== 0) return !0;
            return !1
        }

        function a(e, t, n, i) {
            return !r(e, t, n, i)
        }

        function f(e, t, n) {
            var r = e.xStart, i = e.yStart, s = e.xEnd, o = e.yEnd, u = Math.max(e.lineWidth, 3), a = 0, f = r;
            if (r === s) return Math.abs(t - r) <= u / 2;
            a = (i - o) / (r - s), f = (r * o - s * i) / (r - s);
            var l = (a * t - n + f) * (a * t - n + f) / (a * a + 1);
            return l <= u / 2 * u / 2
        }

        function l(e, t, n) {
            var r = e.pointList, i, s = !1;
            for (var o = 0, u = r.length - 1; o < u; o++) {
                i = {xStart: r[o][0], yStart: r[o][1], xEnd: r[o + 1][0], yEnd: r[o + 1][1], lineWidth: e.lineWidth};
                if (!h({
                        x: Math.min(i.xStart, i.xEnd) - i.lineWidth,
                        y: Math.min(i.yStart, i.yEnd) - i.lineWidth,
                        width: Math.abs(i.xStart - i.xEnd) + i.lineWidth,
                        height: Math.abs(i.yStart - i.yEnd) + i.lineWidth
                    }, t, n)) continue;
                s = f(i, t, n);
                if (s) break
            }
            return s
        }

        function c(e, t, n) {
            return p(e, t, n, e.r) && !p({x: e.x, y: e.y}, t, n, e.r0 || 0) ? !0 : !1
        }

        function h(e, t, n) {
            return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height ? !0 : !1
        }

        function p(e, t, n, r) {
            return (t - e.x) * (t - e.x) + (n - e.y) * (n - e.y) < r * r
        }

        function d(e, t, n) {
            if (!p(e, t, n, e.r) || e.r0 > 0 && p({x: e.x, y: e.y}, t, n, e.r0)) return !1;
            var r = (360 - Math.atan2(n - e.y, t - e.x) / Math.PI * 180) % 360, i = (360 + e.endAngle) % 360,
                s = (360 + e.startAngle) % 360;
            return i > s ? r >= s && r <= i : !(r >= i && r <= s)
        }

        function v(e, t, n) {
            var r, i, s = e.pointList, o = s.length, u = !1, a = !0, f;
            for (r = 0; r < o; ++r) if (s[r][0] == t && s[r][1] == n) {
                a = !1, u = !0;
                break
            }
            if (a) {
                a = !1, u = !1;
                for (r = 0, i = o - 1; r < o; i = r++) if (s[r][1] < n && n < s[i][1] || s[i][1] < n && n < s[r][1]) {
                    if (t <= s[r][0] || t <= s[i][0]) {
                        f = (n - s[r][1]) * (s[i][0] - s[r][0]) / (s[i][1] - s[r][1]) + s[r][0];
                        if (t < f) u = !u; else if (t == f) {
                            u = !0;
                            break
                        }
                    }
                } else if (n == s[r][1]) {
                    if (t < s[r][0]) {
                        s[r][1] > s[i][1] ? --n : ++n;
                        break
                    }
                } else if (s[r][1] == s[i][1] && n == s[r][1] && (s[r][0] < t && t < s[i][0] || s[i][0] < t && t < s[r][0])) {
                    u = !0;
                    break
                }
            }
            return u
        }

        function m(e, t, n) {
            var r = e.pointList, i = !1;
            for (var s = 0, o = r.length; s < o; s++) {
                i = v({pointList: r[s]}, t, n);
                if (i) break
            }
            return i
        }

        function g(e, r) {
            n || (n = t.getContext()), n.save(), r && (n.font = r);
            var i = n.measureText(e).width;
            return n.restore(), i
        }

        var t = e("../tool/util"), n;
        return {isInside: r, isOutside: a, getTextWidth: g}
    }), r("zrender/tool/matrix", [], function () {
        var e = {
            create: function () {
                return [1, 0, 0, 1, 0, 0]
            }, identity: function (e) {
                e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0
            }, mul: function (e, t, n) {
                return e[0] = t[0] * n[0] + t[2] * n[1], e[1] = t[1] * n[0] + t[3] * n[1], e[2] = t[0] * n[2] + t[2] * n[3], e[3] = t[1] * n[2] + t[3] * n[3], e[4] = t[0] * n[4] + t[2] * n[5] + t[4], e[5] = t[1] * n[4] + t[3] * n[5] + t[5], e
            }, translate: function (e, t, n) {
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + n[0], e[5] = t[5] + n[1], e
            }, rotate: function (e, t, n) {
                var r = t[0], i = t[2], s = t[4], o = t[1], u = t[3], a = t[5], f = Math.sin(n), l = Math.cos(n);
                return e[0] = r * l + o * f, e[1] = -r * f + o * l, e[2] = i * l + u * f, e[3] = -i * f + l * u, e[4] = l * s + f * a, e[5] = l * a - f * s, e
            }, scale: function (e, t, n) {
                var r = n[0], i = n[1];
                return e[0] = t[0] * r, e[1] = t[1] * i, e[2] = t[2] * r, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * i, e
            }, invert: function (e, t) {
                var n = t[0], r = t[2], i = t[4], s = t[1], o = t[3], u = t[5], a = n * o - s * r;
                return a ? (a = 1 / a, e[0] = o * a, e[1] = -s * a, e[2] = -r * a, e[3] = n * a, e[4] = (r * u - o * i) * a, e[5] = (s * i - n * u) * a, e) : null
            }, mulVector: function (e, t, n) {
                var r = t[0], i = t[2], s = t[4], o = t[1], u = t[3], a = t[5];
                return e[0] = n[0] * r + n[1] * i + s, e[1] = n[0] * o + n[1] * u + a, e
            }
        };
        return e
    }), r("zrender/tool/color", ["require", "../tool/util"], function (e) {
        function f(e) {
            r = e
        }

        function l() {
            r = i
        }

        function c(e, t) {
            return e = +e || 0, t = t || r, t[e % t.length]
        }

        function h(e) {
            s = e
        }

        function p() {
            o = s
        }

        function d() {
            return s
        }

        function v(e, r, i, s, o, u, a) {
            n || (n = t.getContext());
            var f = n.createRadialGradient(e, r, i, s, o, u);
            for (var l = 0, c = a.length; l < c; l++) f.addColorStop(a[l][0], a[l][1]);
            return f.__nonRecursion = !0, f
        }

        function m(e, r, i, s, o) {
            n || (n = t.getContext());
            var u = n.createLinearGradient(e, r, i, s);
            for (var a = 0, f = o.length; a < f; a++) u.addColorStop(o[a][0], o[a][1]);
            return u.__nonRecursion = !0, u
        }

        function g(e, t, n) {
            e = S(e), t = S(t), e = F(e), t = F(t);
            var r = [], i = (t[0] - e[0]) / n, s = (t[1] - e[1]) / n, o = (t[2] - e[2]) / n;
            for (var u = 0, a = e[0], f = e[1], l = e[2]; u < n; u++) r[u] = b([R(Math.floor(a), [0, 255]), R(Math.floor(f), [0, 255]), R(Math.floor(l), [0, 255])]), a += i, f += s, l += o;
            return a = t[0], f = t[1], l = t[2], r[u] = b([a, f, l]), r
        }

        function y(e, t) {
            var n = [], r = e.length;
            t === undefined && (t = 20);
            if (r === 1) n = g(e[0], e[0], t); else if (r > 1) for (var i = 0, s = r - 1; i < s; i++) {
                var o = g(e[i], e[i + 1], t);
                i < s - 1 && o.pop(), n = n.concat(o)
            }
            return n
        }

        function b(e, t) {
            t = t || "rgb";
            if (e && (e.length === 3 || e.length === 4)) {
                e = q(e, function (e) {
                    return e > 1 ? Math.ceil(e) : e
                });
                if (t.indexOf("hex") > -1) return e = q(e.slice(0, 3), function (e) {
                    return e = Number(e).toString(16), e.length === 1 ? "0" + e : e
                }), "#" + e.join("");
                if (t.indexOf("hs") > -1) {
                    var n = q(e.slice(1, 3), function (e) {
                        return e + "%"
                    });
                    e[1] = n[0], e[2] = n[1]
                }
                return t.indexOf("a") > -1 ? (e.length === 3 && e.push(1), e[3] = R(e[3], [0, 1]), t + "(" + e.slice(0, 4).join(",") + ")") : t + "(" + e.slice(0, 3).join(",") + ")"
            }
        }

        function w(e) {
            e = _(e), e.indexOf("#") > -1 && (e = x(e));
            var t = e.replace(/[rgbahsvl%\(\)]/ig, "").split(",");
            return t = q(t, function (e) {
                return Number(e)
            }), t
        }

        function E(e, t) {
            var n = F(e), r = n[3];
            return typeof r == "undefined" && (r = 1), e.indexOf("hsb") > -1 ? n = U(n) : e.indexOf("hsl") > -1 && (n = z(n)), t.indexOf("hsb") > -1 || t.indexOf("hsv") > -1 ? n = X(n) : t.indexOf("hsl") > -1 && (n = V(n)), n[3] = r, b(n, t)
        }

        function S(e) {
            return E(e, "rgba")
        }

        function x(e) {
            return E(e, "rgb")
        }

        function T(e) {
            return E(e, "hex")
        }

        function N(e) {
            return E(e, "hsva")
        }

        function C(e) {
            return E(e, "hsv")
        }

        function k(e) {
            return E(e, "hsba")
        }

        function L(e) {
            return E(e, "hsb")
        }

        function A(e) {
            return E(e, "hsla")
        }

        function O(e) {
            return E(e, "hsl")
        }

        function M(e) {
            for (var t in a) if (T(a[t]) === T(e)) return t;
            return null
        }

        function _(e) {
            return e = String(e), e = e.replace(/(^\s*)|(\s*$)/g, ""), /^[^#]*?$/i.test(e) && (e = e.replace(/\s/g, "")), e
        }

        function D(e) {
            a[e] && (e = a[e]), e = _(e), e = e.replace(/hsv/i, "hsb");
            if (/^#[0-9a-f]{3}$/i.test(e)) {
                var t = e.replace("#", "").split("");
                e = "#" + t[0] + t[0] + t[1] + t[1] + t[2] + t[2]
            }
            return e
        }

        function P(e, t) {
            var n = t > 0 ? 1 : -1;
            typeof t == "undefined" && (t = 0), t = Math.abs(t) > 1 ? 1 : Math.abs(t), e = x(e);
            var r = F(e);
            for (var i = 0; i < 3; i++) n === 1 ? r[i] = Math.floor(r[i] * (1 - t)) : r[i] = Math.floor((255 - r[i]) * t + r[i]);
            return "rgb(" + r.join(",") + ")"
        }

        function H(e) {
            var t = F(S(e));
            return t = q(t, function (e) {
                return 255 - e
            }), b(t, "rgb")
        }

        function B(e, t, n) {
            typeof n == "undefined" && (n = .5), n = 1 - R(n, [0, 1]);
            var r = n * 2 - 1, i = F(S(e)), s = F(S(t)), o = i[3] - s[3],
                u = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2, a = 1 - u, f = [];
            for (var l = 0; l < 3; l++) f[l] = i[l] * u + s[l] * a;
            var c = i[3] * n + s[3] * (1 - n);
            return c = Math.max(0, Math.min(1, c)), i[3] === 1 && s[3] === 1 ? b(f, "rgb") : (f[3] = c, b(f, "rgba"))
        }

        function j() {
            return T("rgb(" + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ")")
        }

        function F(e) {
            e = D(e);
            var t = e.match(u);
            if (t === null) throw new Error("The color format error");
            var n, r, i = [], s;
            if (t[2]) n = t[2].replace("#", "").split(""), s = [n[0] + n[1], n[2] + n[3], n[4] + n[5]], i = q(s, function (e) {
                return R(parseInt(e, 16), [0, 255])
            }); else if (t[4]) {
                var o = t[4].split(",");
                r = o[3], s = o.slice(0, 3), i = q(s, function (e) {
                    return e = Math.floor(e.indexOf("%") > 0 ? parseInt(e, 0) * 2.55 : e), R(e, [0, 255])
                }), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
            } else if (t[5] || t[6]) {
                var a = (t[5] || t[6]).split(","), f = parseInt(a[0], 0) / 360, l = a[1], c = a[2];
                r = a[3], i = q([l, c], function (e) {
                    return R(parseFloat(e) / 100, [0, 1])
                }), i.unshift(f), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
            }
            return i
        }

        function I(e, t) {
            t === null && (t = 1);
            var n = F(S(e));
            return n[3] = R(Number(t).toFixed(4), [0, 1]), b(n, "rgba")
        }

        function q(e, t) {
            if (typeof t != "function") throw new TypeError;
            var n = e ? e.length : 0;
            for (var r = 0; r < n; r++) e[r] = t(e[r]);
            return e
        }

        function R(e, t) {
            return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
        }

        function U(e) {
            var t = e[0], n = e[1], r = e[2], i, s, o;
            if (n === 0) i = r * 255, s = r * 255, o = r * 255; else {
                var u = t * 6;
                u === 6 && (u = 0);
                var a = Math.floor(u), f = r * (1 - n), l = r * (1 - n * (u - a)), c = r * (1 - n * (1 - (u - a))),
                    h = 0, p = 0, d = 0;
                a === 0 ? (h = r, p = c, d = f) : a === 1 ? (h = l, p = r, d = f) : a === 2 ? (h = f, p = r, d = c) : a === 3 ? (h = f, p = l, d = r) : a === 4 ? (h = c, p = f, d = r) : (h = r, p = f, d = l), i = h * 255, s = p * 255, o = d * 255
            }
            return [i, s, o]
        }

        function z(e) {
            var t = e[0], n = e[1], r = e[2], i, s, o;
            if (n === 0) i = r * 255, s = r * 255, o = r * 255; else {
                var u;
                r < .5 ? u = r * (1 + n) : u = r + n - n * r;
                var a = 2 * r - u;
                i = 255 * W(a, u, t + 1 / 3), s = 255 * W(a, u, t), o = 255 * W(a, u, t - 1 / 3)
            }
            return [i, s, o]
        }

        function W(e, t, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }

        function X(e) {
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), o = s - i,
                u = s, a, f;
            if (o === 0) a = 0, f = 0; else {
                f = o / s;
                var l = ((s - t) / 6 + o / 2) / o, c = ((s - n) / 6 + o / 2) / o, h = ((s - r) / 6 + o / 2) / o;
                t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
            }
            return a *= 360, f *= 100, u *= 100, [a, f, u]
        }

        function V(e) {
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = Math.min(t, n, r), s = Math.max(t, n, r), o = s - i,
                u = (s + i) / 2, a, f;
            if (o === 0) a = 0, f = 0; else {
                u < .5 ? f = o / (s + i) : f = o / (2 - s - i);
                var l = ((s - t) / 6 + o / 2) / o, c = ((s - n) / 6 + o / 2) / o, h = ((s - r) / 6 + o / 2) / o;
                t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
            }
            return a *= 360, f *= 100, u *= 100, [a, f, u]
        }

        var t = e("../tool/util"), n,
            r = ["#ff9277", " #dddd00", " #ffc877", " #bbe3ff", " #d5ffbb", "#bbbbff", " #ddb000", " #b0dd00", " #e2bbff", " #ffbbe3", "#ff7777", " #ff9900", " #83dd00", " #77e3ff", " #778fff", "#c877ff", " #ff77ab", " #ff6600", " #aa8800", " #77c7ff", "#ad77ff", " #ff77ff", " #dd0083", " #777700", " #00aa00", "#0088aa", " #8400dd", " #aa0088", " #dd0000", " #772e00"],
            i = r, s = "rgba(255,255,0,0.5)", o = s,
            u = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
            a = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#0ff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000",
                blanchedalmond: "#ffebcd",
                blue: "#00f",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#0ff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgrey: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#f0f",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                grey: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgrey: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#789",
                lightslategrey: "#789",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#0f0",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#f0f",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#f00",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#fff",
                whitesmoke: "#f5f5f5",
                yellow: "#ff0",
                yellowgreen: "#9acd32"
            };
        return {
            customPalette: f,
            resetPalette: l,
            getColor: c,
            getHighlightColor: d,
            customHighlight: h,
            resetHighlight: p,
            getRadialGradient: v,
            getLinearGradient: m,
            getGradientColors: y,
            getStepColors: g,
            reverse: H,
            mix: B,
            lift: P,
            trim: _,
            random: j,
            toRGB: x,
            toRGBA: S,
            toHex: T,
            toHSL: O,
            toHSLA: A,
            toHSB: L,
            toHSBA: k,
            toHSV: C,
            toHSVA: N,
            toName: M,
            toColor: b,
            toArray: w,
            alpha: I,
            getData: F
        }
    }), r("zrender/shape/base", ["require", "../tool/area", "../tool/matrix", "../tool/vector", "../tool/color"], function (e) {
        function s(e) {
            var n = ["brush", "setContext", "dashedLineTo", "smoothBezier", "smoothSpline", "drawText", "getHighlightStyle", "getHighlightZoom", "drift", "isCover", "updateTransform"],
                r = n.length, i = e.prototype, s = 0, o;
            for (; s < r; s++) o = n[s], i[o] || (i[o] = t[o])
        }

        function o(e, t, n) {
            var r = t.style || {};
            this.brushTypeOnly && (r.brushType = this.brushTypeOnly), n && (r = this.getHighlightStyle(r, t.highlightStyle || {}, this.brushTypeOnly)), this.brushTypeOnly == "stroke" && (r.strokeColor = r.strokeColor || r.color), e.save(), this.setContext(e, r), t.__needTransform && e.transform.apply(e, this.updateTransform(t)), e.beginPath(), this.buildPath(e, r), this.brushTypeOnly != "stroke" && e.closePath();
            switch (r.brushType) {
                case"fill":
                    e.fill();
                    break;
                case"stroke":
                    e.stroke();
                    break;
                case"both":
                    e.stroke(), e.fill();
                    break;
                default:
                    e.fill()
            }
            typeof r.text != "undefined" && this.drawText(e, r, t.style), e.restore();
            return
        }

        function u(e, t) {
            t.color && (e.fillStyle = t.color), t.strokeColor && (e.strokeStyle = t.strokeColor), typeof t.opacity != "undefined" && (e.globalAlpha = t.opacity), t.lineCap && (e.lineCap = t.lineCap), t.lineJoin && (e.lineJoin = t.lineJoin), t.miterLimit && (e.miterLimit = t.miterLimit), typeof t.lineWidth != "undefined" && (e.lineWidth = t.lineWidth), typeof t.shadowBlur != "undefined" && (e.shadowBlur = t.shadowBlur), t.shadowColor && (e.shadowColor = t.shadowColor), typeof t.shadowOffsetX != "undefined" && (e.shadowOffsetX = t.shadowOffsetX), typeof t.shadowOffsetY != "undefined" && (e.shadowOffsetY = t.shadowOffsetY)
        }

        function a(e, t, n, r, i, s) {
            s = typeof s == "undefined" ? 5 : s;
            var o = r - t, u = i - n, a = Math.floor(Math.sqrt(o * o + u * u) / s);
            for (var f = 0; f < a; ++f) e[f % 2 === 0 ? "moveTo" : "lineTo"](t + o / a * f, n + u / a * f)
        }

        function f(e, t, n) {
            var r = e.length, s = [], o = [], u = [], a = [], f, l;
            for (var c = 0; c < r; c++) {
                var h = e[c], f, l;
                if (n) f = e[c === 0 ? r - 1 : c - 1], l = e[(c + 1) % r]; else {
                    if (c === 0 || c === r - 1) {
                        s.push(e[c]);
                        continue
                    }
                    f = e[c - 1], l = e[c + 1]
                }
                i.sub(o, l, f), i.scale(o, o, t);
                var p = i.distance(h, f), d = i.distance(h, l), v = p + d;
                p /= v, d /= v, i.scale(u, o, -p), i.scale(a, o, d), s.push(i.add([], h, u)), s.push(i.add([], h, a))
            }
            return n && s.push(s.shift()), s
        }

        function l(e, t) {
            var n = e.length, r = [], s = 0;
            for (var o = 1; o < n; o++) s += i.distance(e[o - 1], e[o]);
            var u = s / 5;
            for (var o = 0; o < u; o++) {
                var a;
                t ? a = o / (u - 1) * n : a = o / (u - 1) * (n - 1);
                var f = Math.floor(a), l = a - f, h, p = e[f % n], d, v;
                t ? (h = e[(f - 1 + n) % n], d = e[(f + 1) % n], v = e[(f + 2) % n]) : (h = e[f === 0 ? f : f - 1], d = e[f > n - 2 ? n - 1 : f + 1], v = e[f > n - 3 ? n - 1 : f + 2]);
                var m = l * l, g = l * m;
                r.push([c(h[0], p[0], d[0], v[0], l, m, g), c(h[1], p[1], d[1], v[1], l, m, g)])
            }
            return r
        }

        function c(e, t, n, r, i, s, o) {
            var u = (n - e) * .5, a = (r - t) * .5;
            return (2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
        }

        function h(e, t, n) {
            t.textColor = t.textColor || t.color || t.strokeColor, e.fillStyle = t.textColor, t.textPosition == "inside" && (e.shadowColor = "rgba(0,0,0,0)");
            var r = 10, i, s, o, u, a = t.textPosition || this.textPosition || "top";
            if (a != "inside" && a != "top" && a != "bottom" && a != "left" && a != "right" || !this.getRect) if (a == "start" || a == "end") {
                var l, c, h, p;
                if (typeof t.pointList != "undefined") {
                    var d = t.pointList;
                    if (d.length < 2) return;
                    var v = d.length;
                    switch (a) {
                        case"start":
                            l = d[0][0], c = d[1][0], h = d[0][1], p = d[1][1];
                            break;
                        case"end":
                            l = d[v - 2][0], c = d[v - 1][0], h = d[v - 2][1], p = d[v - 1][1]
                    }
                } else l = t.xStart || 0, c = t.xEnd || 0, h = t.yStart || 0, p = t.yEnd || 0;
                switch (a) {
                    case"start":
                        i = l < c ? "end" : "start", s = h < p ? "bottom" : "top", o = l, u = h;
                        break;
                    case"end":
                        i = l < c ? "start" : "end", s = h < p ? "top" : "bottom", o = c, u = p
                }
                r -= 4, l != c ? o -= i == "end" ? r : -r : i = "center", h != p ? u -= s == "bottom" ? r : -r : s = "middle"
            } else a == "specific" && (o = t.textX || 0, u = t.textY || 0, i = "start", s = "middle"); else {
                var f = (n || t).__rect || this.getRect(n || t);
                switch (a) {
                    case"inside":
                        o = f.x + f.width / 2, u = f.y + f.height / 2, i = "center", s = "middle", t.brushType != "stroke" && t.textColor == t.color && (e.fillStyle = "#fff");
                        break;
                    case"left":
                        o = f.x - r, u = f.y + f.height / 2, i = "end", s = "middle";
                        break;
                    case"right":
                        o = f.x + f.width + r, u = f.y + f.height / 2, i = "start", s = "middle";
                        break;
                    case"top":
                        o = f.x + f.width / 2, u = f.y - r, i = "center", s = "bottom";
                        break;
                    case"bottom":
                        o = f.x + f.width / 2, u = f.y + f.height + r, i = "center", s = "top"
                }
            }
            typeof o != "undefined" && typeof u != "undefined" && (t.textFont && (e.font = t.textFont), e.textAlign = t.textAlign || i, e.textBaseline = t.textBaseLine || s, e.fillText(t.text, o, u))
        }

        function p(t, n, r) {
            var i = {};
            for (var s in t) i[s] = t[s];
            var o = e("../tool/color"), u = o.getHighlightColor();
            t.brushType != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom(), i.brushType = "both") : r != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom()) : i.strokeColor = n.strokeColor || o.mix(t.strokeColor, o.toRGB(u));
            for (var s in n) i[s] = n[s];
            return i
        }

        function d() {
            return this.type != "text" ? 6 : 2
        }

        function v(e, t, n) {
            e.position[0] += t, e.position[1] += n
        }

        function m(e, t, i) {
            if (e.__needTransform && e._transform) {
                var s = [];
                r.invert(s, e._transform);
                var o = [t, i];
                r.mulVector(o, s, [t, i, 1]), t == o[0] && i == o[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), t = o[0], i = o[1]
            }
            var u;
            return e.style.__rect ? u = e.style.__rect : (u = this.getRect(e.style), e.style.__rect = u), t >= u.x && t <= u.x + u.width && i >= u.y && i <= u.y + u.height ? n.isInside(this, e.style, t, i) : !1
        }

        function g(e) {
            var t = e._transform || r.create();
            r.identity(t);
            if (e.scale && (e.scale[0] !== 1 || e.scale[1] !== 1)) {
                var n = e.scale[2] || 0, i = e.scale[3] || 0;
                (n || i) && r.translate(t, t, [-n, -i]), r.scale(t, t, e.scale), (n || i) && r.translate(t, t, [n, i])
            }
            if (e.rotation) if (e.rotation instanceof Array) {
                if (e.rotation[0] !== 0) {
                    var n = e.rotation[1] || 0, i = e.rotation[2] || 0;
                    (n || i) && r.translate(t, t, [-n, -i]), r.rotate(t, t, e.rotation[0]), (n || i) && r.translate(t, t, [n, i])
                }
            } else e.rotation !== 0 && r.rotate(t, t, e.rotation);
            return e.position && (e.position[0] !== 0 || e.position[1] !== 0) && r.translate(t, t, e.position), e._transform = t, t
        }

        var t, n = e("../tool/area"), r = e("../tool/matrix"), i = e("../tool/vector");
        return t = {
            derive: s,
            brush: o,
            setContext: u,
            dashedLineTo: a,
            smoothBezier: f,
            smoothSpline: l,
            drawText: h,
            getHighlightStyle: p,
            getHighlightZoom: d,
            drift: v,
            isCover: m,
            updateTransform: g
        }, t
    }), r("zrender/shape/circle", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "circle"
        }

        t.prototype = {
            buildPath: function (e, t) {
                e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !0);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.r - t / 2),
                    y: Math.round(e.y - e.r - t / 2),
                    width: e.r * 2 + t,
                    height: e.r * 2 + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("circle", new t), t
    }), r("zrender/shape/ellipse", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "ellipse"
        }

        t.prototype = {
            buildPath: function (e, t) {
                var n = .5522848, r = t.x, i = t.y, s = t.a, o = t.b, u = s * n, a = o * n;
                e.moveTo(r - s, i), e.bezierCurveTo(r - s, i - a, r - u, i - o, r, i - o), e.bezierCurveTo(r + u, i - o, r + s, i - a, r + s, i), e.bezierCurveTo(r + s, i + a, r + u, i + o, r, i + o), e.bezierCurveTo(r - u, i + o, r - s, i + a, r - s, i);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.a - t / 2),
                    y: Math.round(e.y - e.b - t / 2),
                    width: e.a * 2 + t,
                    height: e.b * 2 + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("ellipse", new t), t
    }), r("zrender/shape/line", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "line", this.brushTypeOnly = "stroke", this.textPosition = "end"
        }

        t.prototype = {
            buildPath: function (e, t) {
                if (!t.lineType || t.lineType == "solid") e.moveTo(t.xStart, t.yStart), e.lineTo(t.xEnd, t.yEnd); else if (t.lineType == "dashed" || t.lineType == "dotted") {
                    var n = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    this.dashedLineTo(e, t.xStart, t.yStart, t.xEnd, t.yEnd, n)
                }
            }, getRect: function (e) {
                var t = e.lineWidth || 1;
                return {
                    x: Math.min(e.xStart, e.xEnd) - t,
                    y: Math.min(e.yStart, e.yEnd) - t,
                    width: Math.abs(e.xStart - e.xEnd) + t,
                    height: Math.abs(e.yStart - e.yEnd) + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("line", new t), t
    }), r("zrender/shape/polygon", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "polygon"
        }

        t.prototype = {
            brush: function (e, t, n) {
                var r = t.style || {};
                n && (r = this.getHighlightStyle(r, t.highlightStyle || {})), e.save(), this.setContext(e, r), t.__needTransform && e.transform.apply(e, this.updateTransform(t)), e.beginPath(), this.buildPath(e, r), e.closePath(), (r.brushType == "stroke" || r.brushType == "both") && e.stroke();
                if (r.brushType == "fill" || r.brushType == "both" || typeof r.brushType == "undefined") {
                    if (r.lineType == "dashed" || r.lineType == "dotted") e.beginPath(), this.buildPath(e, {
                        lineType: "solid",
                        lineWidth: r.lineWidth,
                        pointList: r.pointList
                    }), e.closePath();
                    e.fill()
                }
                r.text && this.drawText(e, r, t.style), e.restore();
                return
            }, buildPath: function (e, t) {
                var n = t.pointList, r = n[0], i = n[n.length - 1];
                r && i && r[0] == i[0] && r[1] == i[1] && n.pop();
                if (n.length < 2) return;
                if (t.smooth && t.smooth !== "spline") {
                    var s = this.smoothBezier(n, t.smooth, !0);
                    e.moveTo(n[0][0], n[0][1]);
                    var o, u, a, f = n.length;
                    for (var l = 0; l < f; l++) o = s[l * 2], u = s[l * 2 + 1], a = n[(l + 1) % f], e.bezierCurveTo(o[0], o[1], u[0], u[1], a[0], a[1])
                } else {
                    t.smooth === "spline" && (n = this.smoothSpline(n, !0));
                    if (!t.lineType || t.lineType == "solid") {
                        e.moveTo(n[0][0], n[0][1]);
                        for (var l = 1, c = n.length; l < c; l++) e.lineTo(n[l][0], n[l][1]);
                        e.lineTo(n[0][0], n[0][1])
                    } else if (t.lineType == "dashed" || t.lineType == "dotted") {
                        var h = t._dashLength || (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                        t._dashLength = h, e.moveTo(n[0][0], n[0][1]);
                        for (var l = 1, c = n.length; l < c; l++) this.dashedLineTo(e, n[l - 1][0], n[l - 1][1], n[l][0], n[l][1], h);
                        this.dashedLineTo(e, n[n.length - 1][0], n[n.length - 1][1], n[0][0], n[0][1], h)
                    }
                }
                return
            }, getRect: function (e) {
                var t = Number.MAX_VALUE, n = Number.MIN_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE,
                    s = e.pointList;
                for (var o = 0, u = s.length; o < u; o++) s[o][0] < t && (t = s[o][0]), s[o][0] > n && (n = s[o][0]), s[o][1] < r && (r = s[o][1]), s[o][1] > i && (i = s[o][1]);
                var a;
                return e.brushType == "stroke" || e.brushType == "fill" ? a = e.lineWidth || 1 : a = 0, {
                    x: Math.round(t - a / 2),
                    y: Math.round(r - a / 2),
                    width: n - t + a,
                    height: i - r + a
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("polygon", new t), t
    }), r("zrender/shape/brokenLine", ["require", "../shape", "./base", "../shape"], function (e) {
        function t() {
            this.type = "brokenLine", this.brushTypeOnly = "stroke", this.textPosition = "end"
        }

        t.prototype = {
            buildPath: function (e, t) {
                var n = t.pointList;
                if (n.length < 2) return;
                if (t.smooth && t.smooth !== "spline") {
                    var r = this.smoothBezier(n, t.smooth, !1);
                    e.moveTo(n[0][0], n[0][1]);
                    var i, s, o;
                    for (var u = 0, a = n.length; u < a - 1; u++) i = r[u * 2], s = r[u * 2 + 1], o = n[u + 1], e.bezierCurveTo(i[0], i[1], s[0], s[1], o[0], o[1])
                } else {
                    t.smooth === "spline" && (n = this.smoothSpline(n, !1));
                    if (!t.lineType || t.lineType == "solid") {
                        e.moveTo(n[0][0], n[0][1]);
                        for (var u = 1, a = n.length; u < a; u++) e.lineTo(n[u][0], n[u][1])
                    } else if (t.lineType == "dashed" || t.lineType == "dotted") {
                        var f = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                        e.moveTo(n[0][0], n[0][1]);
                        for (var u = 1, a = n.length; u < a; u++) this.dashedLineTo(e, n[u - 1][0], n[u - 1][1], n[u][0], n[u][1], f)
                    }
                }
                return
            }, getRect: function (t) {
                var n = e("../shape");
                return n.get("polygon").getRect(t)
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("brokenLine", new t), t
    }), r("zrender/shape/rectangle", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "rectangle"
        }

        t.prototype = {
            _buildRadiusPath: function (e, t) {
                var n = t.x, r = t.y, i = t.width, s = t.height, o = t.radius, u, a, f, l;
                typeof o == "number" ? u = a = f = l = o : o instanceof Array ? o.length === 1 ? u = a = f = l = o[0] : o.length === 2 ? (u = f = o[0], a = l = o[1]) : o.length === 3 ? (u = o[0], a = l = o[1], f = o[2]) : (u = o[0], a = o[1], f = o[2], l = o[3]) : u = a = f = l = 0, e.moveTo(n + u, r), e.lineTo(n + i - a, r), a !== 0 && e.quadraticCurveTo(n + i, r, n + i, r + a), e.lineTo(n + i, r + s - f), f !== 0 && e.quadraticCurveTo(n + i, r + s, n + i - f, r + s), e.lineTo(n + l, r + s), l !== 0 && e.quadraticCurveTo(n, r + s, n, r + s - l), e.lineTo(n, r + u), u !== 0 && e.quadraticCurveTo(n, r, n + u, r)
            }, buildPath: function (e, t) {
                t.radius ? this._buildRadiusPath(e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - t / 2),
                    y: Math.round(e.y - t / 2),
                    width: e.width + t,
                    height: e.height + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("rectangle", new t), t
    }), r("zrender/shape/ring", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "ring"
        }

        t.prototype = {
            buildPath: function (e, t) {
                e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !1), e.moveTo(t.x + t.r0, t.y), e.arc(t.x, t.y, t.r0, 0, Math.PI * 2, !0);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.r - t / 2),
                    y: Math.round(e.y - e.r - t / 2),
                    width: e.r * 2 + t,
                    height: e.r * 2 + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("ring", new t), t
    }), r("zrender/tool/math", [], function () {
        function t(t, n) {
            return Math.sin(n ? t * e : t)
        }

        function n(t, n) {
            return Math.cos(n ? t * e : t)
        }

        function r(t) {
            return t * e
        }

        function i(t) {
            return t / e
        }

        var e = Math.PI / 180;
        return {sin: t, cos: n, degreeToRadian: r, radianToDegree: i}
    }), r("zrender/shape/sector", ["require", "../tool/math", "../shape", "./base", "../shape"], function (e) {
        function n() {
            this.type = "sector"
        }

        var t = e("../tool/math");
        n.prototype = {
            buildPath: function (e, n) {
                var r = n.x, i = n.y, s = typeof n.r0 == "undefined" ? 0 : n.r0, o = n.r, u = n.startAngle,
                    a = n.endAngle, f = Math.PI * 2;
                u = t.degreeToRadian(u), a = t.degreeToRadian(a), e.moveTo(t.cos(u) * s + r, i - t.sin(u) * s), e.lineTo(t.cos(u) * o + r, i - t.sin(u) * o), e.arc(r, i, o, f - u, f - a, !0), e.lineTo(t.cos(a) * s + r, i - t.sin(a) * s), s !== 0 && e.arc(r, i, s, f - a, f - u, !1);
                return
            }, getRect: function (n) {
                var r = n.x, i = n.y, s = typeof n.r0 == "undefined" ? 0 : n.r0, o = n.r, u = n.startAngle,
                    a = n.endAngle, f = [];
                u < 90 && a > 90 && f.push([r, i - o]), u < 180 && a > 180 && f.push([r - o, i]), u < 270 && a > 270 && f.push([r, i + o]), u < 360 && a > 360 && f.push([r + o, i]), u = t.degreeToRadian(u), a = t.degreeToRadian(a), f.push([t.cos(u) * s + r, i - t.sin(u) * s]), f.push([t.cos(u) * o + r, i - t.sin(u) * o]), f.push([t.cos(a) * o + r, i - t.sin(a) * o]), f.push([t.cos(a) * s + r, i - t.sin(a) * s]);
                var l = e("../shape");
                return l.get("polygon").getRect({brushType: n.brushType, lineWidth: n.lineWidth, pointList: f})
            }
        };
        var r = e("./base");
        r.derive(n);
        var i = e("../shape");
        return i.define("sector", new n), n
    }), r("zrender/shape/text", ["require", "../tool/area", "./base", "../shape"], function (e) {
        function t() {
            this.type = "text"
        }

        t.prototype = {
            brush: function (e, t, n) {
                var r = t.style || {};
                n && (r = this.getHighlightStyle(r, t.highlightStyle || {})), e.save(), this.setContext(e, r), t.__needTransform && e.transform.apply(e, this.updateTransform(t)), r.textFont && (e.font = r.textFont), e.textAlign = r.textAlign || "start", e.textBaseline = r.textBaseline || "middle";
                if (r.maxWidth) switch (r.brushType) {
                    case"fill":
                        e.fillText(r.text, r.x, r.y, r.maxWidth);
                        break;
                    case"stroke":
                        e.strokeText(r.text, r.x, r.y, r.maxWidth);
                        break;
                    case"both":
                        e.strokeText(r.text, r.x, r.y, r.maxWidth), e.fillText(r.text, r.x, r.y, r.maxWidth);
                        break;
                    default:
                        e.fillText(r.text, r.x, r.y, r.maxWidth)
                } else switch (r.brushType) {
                    case"fill":
                        e.fillText(r.text, r.x, r.y);
                        break;
                    case"stroke":
                        e.strokeText(r.text, r.x, r.y);
                        break;
                    case"both":
                        e.strokeText(r.text, r.x, r.y), e.fillText(r.text, r.x, r.y);
                        break;
                    default:
                        e.fillText(r.text, r.x, r.y)
                }
                e.restore();
                return
            }, getRect: function (t) {
                var n = e("../tool/area"), r = n.getTextWidth(t.text, t.textFont), i = n.getTextWidth("国", t.textFont),
                    s = t.x;
                t.textAlign == "end" || t.textAlign == "right" ? s -= r : t.textAlign == "center" && (s -= r / 2);
                var o = t.y - i / 2;
                return t.textBaseline == "top" ? o += i / 2 : t.textBaseline == "bottom" && (s -= i / 2), {
                    x: s,
                    y: o,
                    width: r,
                    height: i
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("text", new t), t
    }), r("zrender/shape/heart", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "heart"
        }

        t.prototype = {
            buildPath: function (e, t) {
                e.moveTo(t.x, t.y), e.bezierCurveTo(t.x + t.a / 2, t.y - t.b * 2 / 3, t.x + t.a * 2, t.y + t.b / 3, t.x, t.y + t.b), e.bezierCurveTo(t.x - t.a * 2, t.y + t.b / 3, t.x - t.a / 2, t.y - t.b * 2 / 3, t.x, t.y);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.a - t / 2),
                    y: Math.round(e.y - e.b / 4 - t / 2),
                    width: e.a * 2 + t,
                    height: e.b * 5 / 4 + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("heart", new t), t
    }), r("zrender/shape/droplet", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "droplet"
        }

        t.prototype = {
            buildPath: function (e, t) {
                e.moveTo(t.x, t.y + t.a), e.bezierCurveTo(t.x + t.a, t.y + t.a, t.x + t.a * 3 / 2, t.y - t.a / 3, t.x, t.y - t.b), e.bezierCurveTo(t.x - t.a * 3 / 2, t.y - t.a / 3, t.x - t.a, t.y + t.a, t.x, t.y + t.a);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.a - t / 2),
                    y: Math.round(e.y - e.b - t / 2),
                    width: e.a * 2 + t,
                    height: e.a + e.b + t
                }
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("droplet", new t), t
    }), r("zrender/shape/path", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "path"
        }

        t.prototype = {
            _parsePathData: function (e) {
                if (!e) return [];
                var t = e,
                    n = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
                t = t.replace(/  /g, " "), t = t.replace(/ /g, ","), t = t.replace(/,,/g, ",");
                var r;
                for (r = 0; r < n.length; r++) t = t.replace(new RegExp(n[r], "g"), "|" + n[r]);
                var i = t.split("|"), s = [], o = 0, u = 0;
                for (r = 1; r < i.length; r++) {
                    var a = i[r], f = a.charAt(0);
                    a = a.slice(1), a = a.replace(new RegExp("e,-", "g"), "e-");
                    var l = a.split(",");
                    l.length > 0 && l[0] === "" && l.shift();
                    for (var c = 0; c < l.length; c++) l[c] = parseFloat(l[c]);
                    while (l.length > 0) {
                        if (isNaN(l[0])) break;
                        var h = null, p = [], d, v, m, g, y, b, w, E, S = o, x = u;
                        switch (f) {
                            case"l":
                                o += l.shift(), u += l.shift(), h = "L", p.push(o, u);
                                break;
                            case"L":
                                o = l.shift(), u = l.shift(), p.push(o, u);
                                break;
                            case"m":
                                o += l.shift(), u += l.shift(), h = "M", p.push(o, u), f = "l";
                                break;
                            case"M":
                                o = l.shift(), u = l.shift(), h = "M", p.push(o, u), f = "L";
                                break;
                            case"h":
                                o += l.shift(), h = "L", p.push(o, u);
                                break;
                            case"H":
                                o = l.shift(), h = "L", p.push(o, u);
                                break;
                            case"v":
                                u += l.shift(), h = "L", p.push(o, u);
                                break;
                            case"V":
                                u = l.shift(), h = "L", p.push(o, u);
                                break;
                            case"C":
                                p.push(l.shift(), l.shift(), l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
                                break;
                            case"c":
                                p.push(o + l.shift(), u + l.shift(), o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
                                break;
                            case"S":
                                d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, l.shift(), l.shift()), o = l.shift(), u = l.shift(), h = "C", p.push(o, u);
                                break;
                            case"s":
                                d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
                                break;
                            case"Q":
                                p.push(l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
                                break;
                            case"q":
                                p.push(o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "Q", p.push(o, u);
                                break;
                            case"T":
                                d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o = l.shift(), u = l.shift(), h = "Q", p.push(d, v, o, u);
                                break;
                            case"t":
                                d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o += l.shift(), u += l.shift(), h = "Q", p.push(d, v, o, u);
                                break;
                            case"A":
                                g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o = l.shift(), u = l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b);
                                break;
                            case"a":
                                g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o += l.shift(), u += l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b)
                        }
                        s.push({command: h || f, points: p})
                    }
                    (f === "z" || f === "Z") && s.push({command: "z", points: []})
                }
                return s
            }, _convertPoint: function (e, t, n, r, i, s, o, u, a) {
                var f = a * (Math.PI / 180), l = Math.cos(f) * (e - n) / 2 + Math.sin(f) * (t - r) / 2,
                    c = -1 * Math.sin(f) * (e - n) / 2 + Math.cos(f) * (t - r) / 2,
                    h = l * l / (o * o) + c * c / (u * u);
                h > 1 && (o *= Math.sqrt(h), u *= Math.sqrt(h));
                var p = Math.sqrt((o * o * u * u - o * o * c * c - u * u * l * l) / (o * o * c * c + u * u * l * l));
                i === s && (p *= -1), isNaN(p) && (p = 0);
                var d = p * o * c / u, v = p * -u * l / o, m = (e + n) / 2 + Math.cos(f) * d - Math.sin(f) * v,
                    g = (t + r) / 2 + Math.sin(f) * d + Math.cos(f) * v, y = function (e) {
                        return Math.sqrt(e[0] * e[0] + e[1] * e[1])
                    }, b = function (e, t) {
                        return (e[0] * t[0] + e[1] * t[1]) / (y(e) * y(t))
                    }, w = function (e, t) {
                        return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(b(e, t))
                    }, E = w([1, 0], [(l - d) / o, (c - v) / u]), S = [(l - d) / o, (c - v) / u],
                    x = [(-1 * l - d) / o, (-1 * c - v) / u], T = w(S, x);
                return b(S, x) <= -1 && (T = Math.PI), b(S, x) >= 1 && (T = 0), s === 0 && T > 0 && (T -= 2 * Math.PI), s === 1 && T < 0 && (T += 2 * Math.PI), [m, g, o, u, E, T, f, s]
            }, buildPath: function (e, t) {
                var n = t.path, r = this._parsePathData(n), i = t.x || 0, s = t.y || 0, o, u = t.pointList = [], a = [];
                for (var f = 0, l = r.length; f < l; f++) {
                    r[f].command.toUpperCase() == "M" && (a.length > 0 && u.push(a), a = []), o = r[f].points;
                    for (var c = 0, h = o.length; c < h; c += 2) a.push([o[c] + i, o[c + 1] + s])
                }
                a.length > 0 && u.push(a);
                var p;
                for (var f = 0, l = r.length; f < l; f++) {
                    p = r[f].command, o = r[f].points;
                    for (var c = 0, h = o.length; c < h; c++) c % 2 === 0 ? o[c] += i : o[c] += s;
                    switch (p) {
                        case"L":
                            e.lineTo(o[0], o[1]);
                            break;
                        case"M":
                            e.moveTo(o[0], o[1]);
                            break;
                        case"C":
                            e.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
                            break;
                        case"Q":
                            e.quadraticCurveTo(o[0], o[1], o[2], o[3]);
                            break;
                        case"A":
                            var d = o[0], v = o[1], m = o[2], g = o[3], y = o[4], b = o[5], w = o[6], E = o[7],
                                S = m > g ? m : g, x = m > g ? 1 : m / g, T = m > g ? g / m : 1;
                            e.translate(d, v), e.rotate(w), e.scale(x, T), e.arc(0, 0, S, y, y + b, 1 - E), e.scale(1 / x, 1 / T), e.rotate(-w), e.translate(-d, -v);
                            break;
                        case"z":
                            e.closePath()
                    }
                }
                return
            }, getRect: function (e) {
                var t;
                e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0;
                var n = Number.MAX_VALUE, r = Number.MIN_VALUE, i = Number.MAX_VALUE, s = Number.MIN_VALUE,
                    o = e.x || 0, u = e.y || 0, a = this._parsePathData(e.path);
                for (var f = 0; f < a.length; f++) {
                    var l = a[f].points;
                    for (var c = 0; c < l.length; c++) c % 2 === 0 ? (l[c] + o < n && (n = l[c] + o), l[c] + o > r && (r = l[c] + o)) : (l[c] + u < i && (i = l[c] + u), l[c] + u > s && (s = l[c] + u))
                }
                var h;
                return n === Number.MAX_VALUE || r === Number.MIN_VALUE || i === Number.MAX_VALUE || s === Number.MIN_VALUE ? h = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                } : h = {x: Math.round(n - t / 2), y: Math.round(i - t / 2), width: r - n + t, height: s - i + t}, h
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("path", new t), t
    }), r("zrender/shape/image", ["require", "./base", "../shape"], function (e) {
        function i() {
            this.type = "image"
        }

        var t = {}, n = [], r;
        i.prototype = {
            brush: function (e, i, s, o) {
                var u = i.style || {};
                s && (u = this.getHighlightStyle(u, i.highlightStyle || {}));
                var a = u.image;
                if (typeof a == "string") {
                    var f = a;
                    t[f] ? a = t[f] : (a = new Image, a.onload = function () {
                        a.onload = null, clearTimeout(r), n.push(i), r = setTimeout(function () {
                            o(n), n = []
                        }, 10)
                    }, t[f] = a, a.src = f)
                }
                if (a) {
                    if (window.ActiveXObject) {
                        if (a.readyState != "complete") return
                    } else if (!a.complete) return;
                    e.save(), this.setContext(e, u), i.__needTransform && e.transform.apply(e, this.updateTransform(i));
                    var l = u.width || a.width, c = u.height || a.height, h = u.x, p = u.y;
                    if (u.sWidth && u.sHeight) {
                        var d = u.sx || 0, v = u.sy || 0;
                        e.drawImage(a, d, v, u.sWidth, u.sHeight, h, p, l, c)
                    } else if (u.sx && u.sy) {
                        var d = u.sx, v = u.sy, m = l - d, g = c - v;
                        e.drawImage(a, d, v, m, g, h, p, l, c)
                    } else e.drawImage(a, h, p, l, c);
                    u.width = l, u.height = c, i.style.width = l, i.style.height = c, u.text && this.drawText(e, u, i.style), e.restore()
                }
                return
            }, buildPath: function (e, t) {
                e.rect(t.x, t.y, t.width, t.height);
                return
            }, getRect: function (e) {
                return {x: e.x, y: e.y, width: e.width, height: e.height}
            }
        };
        var s = e("./base");
        s.derive(i);
        var o = e("../shape");
        return o.define("image", new i), i
    }), r("zrender/shape/beziercurve", ["require", "./base", "../shape"], function (e) {
        function t() {
            this.type = "beziercurve", this.brushTypeOnly = "stroke", this.textPosition = "end"
        }

        t.prototype = {
            buildPath: function (e, t) {
                e.moveTo(t.xStart, t.yStart), typeof t.cpX2 != "undefined" && typeof t.cpY2 != "undefined" ? e.bezierCurveTo(t.cpX1, t.cpY1, t.cpX2, t.cpY2, t.xEnd, t.yEnd) : e.quadraticCurveTo(t.cpX1, t.cpY1, t.xEnd, t.yEnd)
            }, getRect: function (e) {
                var t = Math.min(e.xStart, e.xEnd, e.cpX1), n = Math.min(e.yStart, e.yEnd, e.cpY1),
                    r = Math.max(e.xStart, e.xEnd, e.cpX1), i = Math.max(e.yStart, e.yEnd, e.cpY1), s = e.cpX2,
                    o = e.cpY2;
                typeof s != "undefined" && typeof o != "undefined" && (t = Math.min(t, s), n = Math.min(n, o), r = Math.max(r, s), i = Math.max(i, o));
                var u = e.lineWidth || 1;
                return {x: t - u, y: n - u, width: r - t + u, height: i - n + u}
            }
        };
        var n = e("./base");
        n.derive(t);
        var r = e("../shape");
        return r.define("beziercurve", new t), t
    }), r("zrender/shape/star", ["require", "../tool/math", "./base", "../shape"], function (e) {
        function s() {
            this.type = "heart"
        }

        var t = e("../tool/math"), n = t.sin, r = t.cos, i = Math.PI;
        s.prototype = {
            buildPath: function (e, t) {
                var s = t.n;
                if (!s || s < 2) return;
                var o = t.x, u = t.y, a = t.r, f = t.r0;
                f == null && (f = s > 4 ? a * r(2 * i / s) / r(i / s) : a / 3);
                var l = i / s, c = -i / 2, h = o + a * r(c), p = u + a * n(c);
                c += l;
                var d = t.pointList = [];
                d.push([h, p]);
                for (var v = 0, m = s * 2 - 1, g; v < m; v++) g = v % 2 === 0 ? f : a, d.push([o + g * r(c), u + g * n(c)]), c += l;
                d.push([h, p]), e.moveTo(d[0][0], d[0][1]);
                for (var v = 0; v < d.length; v++) e.lineTo(d[v][0], d[v][1]);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.r - t / 2),
                    y: Math.round(e.y - e.r - t / 2),
                    width: e.r * 2 + t,
                    height: e.r * 2 + t
                }
            }
        };
        var o = e("./base");
        o.derive(s);
        var u = e("../shape");
        return u.define("star", new s), s
    }), r("zrender/shape/isogon", ["require", "../tool/math", "./base", "../shape"], function (e) {
        function s() {
            this.type = "isogon"
        }

        var t = e("../tool/math"), n = t.sin, r = t.cos, i = Math.PI;
        s.prototype = {
            buildPath: function (e, t) {
                var s = t.n;
                if (!s || s < 2) return;
                var o = t.x, u = t.y, a = t.r, f = 2 * i / s, l = -i / 2, c = o + a * r(l), h = u + a * n(l);
                l += f;
                var p = t.pointList = [];
                p.push([c, h]);
                for (var d = 0, v = s - 1; d < v; d++) p.push([o + a * r(l), u + a * n(l)]), l += f;
                p.push([c, h]), e.moveTo(p[0][0], p[0][1]);
                for (var d = 0; d < p.length; d++) e.lineTo(p[d][0], p[d][1]);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.r - t / 2),
                    y: Math.round(e.y - e.r - t / 2),
                    width: e.r * 2 + t,
                    height: e.r * 2 + t
                }
            }
        };
        var o = e("./base");
        o.derive(s);
        var u = e("../shape");
        return u.define("isogon", new s), s
    }), r("zrender/animation/easing", [], function () {
        var e = {
            Linear: function (e) {
                return e
            }, QuadraticIn: function (e) {
                return e * e
            }, QuadraticOut: function (e) {
                return e * (2 - e)
            }, QuadraticInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
            }, CubicIn: function (e) {
                return e * e * e
            }, CubicOut: function (e) {
                return --e * e * e + 1
            }, CubicInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            }, QuarticIn: function (e) {
                return e * e * e * e
            }, QuarticOut: function (e) {
                return 1 - --e * e * e * e
            }, QuarticInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
            }, QuinticIn: function (e) {
                return e * e * e * e * e
            }, QuinticOut: function (e) {
                return --e * e * e * e * e + 1
            }, QuinticInOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            }, SinusoidalIn: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, SinusoidalOut: function (e) {
                return Math.sin(e * Math.PI / 2)
            }, SinusoidalInOut: function (e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }, ExponentialIn: function (e) {
                return e === 0 ? 0 : Math.pow(1024, e - 1)
            }, ExponentialOut: function (e) {
                return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
            }, ExponentialInOut: function (e) {
                return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
            }, CircularIn: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, CircularOut: function (e) {
                return Math.sqrt(1 - --e * e)
            }, CircularInOut: function (e) {
                return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }, ElasticIn: function (e) {
                var t, n = .1, r = .4;
                return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r)))
            }, ElasticOut: function (e) {
                var t, n = .1, r = .4;
                return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * 2 * Math.PI / r) + 1)
            }, ElasticInOut: function (e) {
                var t, n = .1, r = .4;
                return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) * .5 + 1)
            }, BackIn: function (e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            }, BackOut: function (e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1
            }, BackInOut: function (e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }, BounceIn: function (t) {
                return 1 - e.BounceOut(1 - t)
            }, BounceOut: function (e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }, BounceInOut: function (t) {
                return t < .5 ? e.BounceIn(t * 2) * .5 : e.BounceOut(t * 2 - 1) * .5 + .5
            }
        };
        return e
    }), r("zrender/animation/clip", ["require", "./easing"], function (e) {
        var t = e("./easing"), n = function (e) {
            this._targetPool = e.target || {}, this._targetPool.constructor != Array && (this._targetPool = [this._targetPool]), this._life = e.life || 1e3, this._delay = e.delay || 0, this._startTime = (new Date).getTime() + this._delay, this._endTime = this._startTime + this._life * 1e3, this.loop = typeof e.loop == "undefined" ? !1 : e.loop, this.gap = e.gap || 0, this.easing = e.easing || "Linear", this.onframe = e.onframe || null, this.ondestroy = e.ondestroy || null, this.onrestart = e.onrestart || null
        };
        return n.prototype = {
            step: function (e) {
                var n = (e - this._startTime) / this._life;
                if (n < 0) return;
                n = Math.min(n, 1);
                var r = typeof this.easing == "string" ? t[this.easing] : this.easing, i;
                return typeof r == "function" ? i = r(n) : i = n, this.fire("frame", i), n == 1 ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
            }, restart: function () {
                this._startTime = (new Date).getTime() + this.gap
            }, fire: function (e, t) {
                for (var n = 0, r = this._targetPool.length; n < r; n++) this["on" + e] && this["on" + e](this._targetPool[n], t)
            }
        }, n.prototype.constructor = n, n
    }), r("zrender/animation/animation", ["require", "./clip"], function (e) {
        function s(e, t) {
            return e[t]
        }

        function o(e, t, n) {
            e[t] = n
        }

        function u(e, t, n) {
            return (t - e) * n + e
        }

        function a(e, t, n, r, i) {
            var s = e.length;
            if (i == 1) for (var o = 0; o < s; o++) r[o] = u(e[o], t[o], n); else {
                var a = e[0].length;
                for (var o = 0; o < s; o++) for (var f = 0; f < a; f++) r[o][f] = u(e[o][f], t[o][f], n)
            }
        }

        function f(e) {
            return e === undefined ? !1 : typeof e == "string" ? !1 : e.length !== undefined
        }

        function l(e, t, n, r, i, s, o, u, a) {
            var f = e.length;
            if (a == 1) for (var l = 0; l < f; l++) u[l] = c(e[l], t[l], n[l], r[l], i, s, o); else {
                var h = e[0].length;
                for (var l = 0; l < f; l++) for (var p = 0; p < h; p++) u[l][p] = c(e[l][p], t[l][p], n[l][p], r[l][p], i, s, o)
            }
        }

        function c(e, t, n, r, i, s, o) {
            var u = (n - e) * .5, a = (r - t) * .5;
            return (2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
        }

        function h(e, t, n, r) {
            this._tracks = {}, this._target = e, this._loop = t || !1, this._getter = n || s, this._setter = r || o, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        }

        var t = e("./clip"),
            n = window.requrestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
                setTimeout(e, 16)
            }, r = Array.prototype.slice, i = function (e) {
                e = e || {}, this.stage = e.stage || {}, this.onframe = e.onframe || function () {
                }, this._clips = [], this._running = !1, this._time = 0
            };
        return i.prototype = {
            add: function (e) {
                this._clips.push(e)
            }, remove: function (e) {
                var t = this._clips.indexOf(e);
                t >= 0 && this._clips.splice(t, 1)
            }, update: function () {
                var e = (new Date).getTime(), t = e - this._time, n = this._clips, r = n.length, i = [], s = [];
                for (var o = 0; o < r; o++) {
                    var u = n[o], a = u.step(e);
                    a && (i.push(a), s.push(u))
                }
                this.stage && this.stage.update && this._clips.length && this.stage.update();
                for (var o = 0; o < r;) n[o]._needsRemove ? (n[o] = n[r - 1], n.pop(), r--) : o++;
                r = i.length;
                for (var o = 0; o < r; o++) s[o].fire(i[o]);
                this._time = e, this.onframe()
            }, start: function () {
                function t() {
                    e._running && (e.update(), n(t))
                }

                var e = this;
                this._running = !0, n(t)
            }, stop: function () {
                this._running = !1
            }, clear: function () {
                this._clips = []
            }, animate: function (e, t) {
                t = t || {};
                var n = new h(e, t.loop, t.getter, t.setter);
                return n.animation = this, n
            }
        }, i.prototype.constructor = i, h.prototype = {
            when: function (e, t) {
                for (var n in t) this._tracks[n] || (this._tracks[n] = [], this._tracks[n].push({
                    time: 0,
                    value: this._getter(this._target, n)
                })), this._tracks[n].push({time: parseInt(e, 10), value: t[n]});
                return this
            }, during: function (e) {
                return this._onframeList.push(e), this
            }, start: function (e) {
                var n = this, i = this._setter, s = this._getter, o = n._onframeList.length, h = e === "spline",
                    p = function () {
                        n._clipCount--;
                        if (n._clipCount === 0) {
                            n._tracks = {};
                            var e = n._doneList.length;
                            for (var t = 0; t < e; t++) n._doneList[t].call(n)
                        }
                    }, d = function (d, v) {
                        var m = d.length;
                        if (!m) return;
                        var g = d[0].value, y = f(g), b = y && f(g[0]) ? 2 : 1;
                        d.sort(function (e, t) {
                            return e.time - t.time
                        });
                        var w;
                        if (!m) return;
                        w = d[m - 1].time;
                        var E = [], S = [];
                        for (var x = 0; x < m; x++) {
                            E.push(d[x].time / w);
                            if (y) if (b == 2) {
                                S[x] = [];
                                for (var T = 0; T < g.length; T++) S[x].push(r.call(d[x].value[T]))
                            } else S.push(r.call(d[x].value)); else S.push(d[x].value)
                        }
                        var N = 0, C = 0, k, x, L, A, O, M, _, D = function (e, t) {
                            if (t < C) {
                                k = Math.min(N + 1, m - 1);
                                for (x = k; x >= 0; x--) if (E[x] <= t) break;
                                x = Math.min(x, m - 2)
                            } else {
                                for (x = N; x < m; x++) if (E[x] > t) break;
                                x = Math.min(x - 1, m - 2)
                            }
                            N = x, C = t;
                            var r = E[x + 1] - E[x];
                            if (r === 0) return;
                            L = (t - E[x]) / r, L < 0 && console.log(L), h ? (O = S[x], A = S[x === 0 ? x : x - 1], M = S[x > m - 2 ? m - 1 : x + 1], _ = S[x > m - 3 ? m - 1 : x + 2], y ? l(A, O, M, _, L, L * L, L * L * L, s(e, v), b) : i(e, v, c(A, O, M, _, L, L * L, L * L * L))) : y ? a(S[x], S[x + 1], L, s(e, v), b) : i(e, v, u(S[x], S[x + 1], L));
                            for (x = 0; x < o; x++) n._onframeList[x](e, t)
                        }, P = new t({
                            target: n._target,
                            life: w,
                            loop: n._loop,
                            delay: n._delay,
                            onframe: D,
                            ondestroy: p
                        });
                        e && e !== "spline" && (P.easing = e), n._clipList.push(P), n._clipCount++, n.animation.add(P)
                    };
                for (var v in this._tracks) d(this._tracks[v], v);
                return this
            }, stop: function () {
                for (var e = 0; e < this._clipList.length; e++) {
                    var t = this._clipList[e];
                    this.animation.remove(t)
                }
                this._clipList = []
            }, delay: function (e) {
                return this._delay = e, this
            }, done: function (e) {
                return this._doneList.push(e), this
            }
        }, i
    }), r("zrender/config", {
        loadingEffect: "spin",
        EVENT: {
            RESIZE: "resize",
            CLICK: "click",
            MOUSEWHEEL: "mousewheel",
            MOUSEMOVE: "mousemove",
            MOUSEOVER: "mouseover",
            MOUSEOUT: "mouseout",
            MOUSEDOWN: "mousedown",
            MOUSEUP: "mouseup",
            GLOBALOUT: "globalout",
            DRAGSTART: "dragstart",
            DRAGEND: "dragend",
            DRAGENTER: "dragenter",
            DRAGOVER: "dragover",
            DRAGLEAVE: "dragleave",
            DROP: "drop",
            touchClickDelay: 300
        }
    }), r("zrender/tool/loadingEffect", ["require", "./util", "./color", "./color", "./color", "./color", "./color", "./math"], function (e) {
        function u(e, t) {
            n[e] = t
        }

        function a(e) {
            return {
                shape: "text",
                highlightStyle: t.merge({
                    x: s / 2,
                    y: o / 2,
                    text: r,
                    textAlign: "center",
                    textBaseline: "middle",
                    textFont: i,
                    color: "#333",
                    brushType: "fill"
                }, e, {overwrite: !0, recursive: !0})
            }
        }

        function f(e) {
            return {shape: "rectangle", highlightStyle: {x: 0, y: 0, width: s, height: o, brushType: "fill", color: e}}
        }

        function l(e, t) {
            return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
        }

        function c(n, r, i) {
            var u = e("./color");
            n = t.merge(n, {
                textStyle: {color: "#888"},
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                effectOption: {x: 0, y: o / 2 - 30, width: s, height: 5, brushType: "fill", timeInterval: 100}
            }, {overwrite: !1, recursive: !0});
            var c = a(n.textStyle), h = f(n.backgroundColor), p = n.effectOption,
                d = {shape: "rectangle", highlightStyle: t.clone(p)};
            d.highlightStyle.color = p.color || u.getLinearGradient(p.x, p.y, p.x + p.width, p.y + p.height, [[0, "#ff6400"], [.5, "#ffe100"], [1, "#b1ff00"]]);
            if (typeof n.progress != "undefined") {
                r(h), d.highlightStyle.width = l(n.progress, [0, 1]) * n.effectOption.width, r(d), r(c), i();
                return
            }
            return d.highlightStyle.width = 0, setInterval(function () {
                r(h), d.highlightStyle.width < n.effectOption.width ? d.highlightStyle.width += 8 : d.highlightStyle.width = 0, r(d), r(c), i()
            }, p.timeInterval)
        }

        function h(e, n, r) {
            e.effectOption = t.merge(e.effectOption || {}, {
                x: s / 2 - 80,
                y: o / 2,
                r: 18,
                colorIn: "#fff",
                colorOut: "#555",
                colorWhirl: "#6cf",
                timeInterval: 50
            });
            var i = e.effectOption;
            e = t.merge(e, {
                textStyle: {color: "#888", x: i.x + i.r + 10, y: i.y, textAlign: "start"},
                backgroundColor: "rgba(250, 250, 250, 0.8)"
            }, {overwrite: !1, recursive: !0});
            var u = a(e.textStyle), l = f(e.backgroundColor), c = {
                    shape: "droplet",
                    highlightStyle: {
                        a: Math.round(i.r / 2),
                        b: Math.round(i.r - i.r / 6),
                        brushType: "fill",
                        color: i.colorWhirl
                    }
                }, h = {shape: "circle", highlightStyle: {r: Math.round(i.r / 6), brushType: "fill", color: i.colorIn}},
                p = {
                    shape: "ring",
                    highlightStyle: {r0: Math.round(i.r - i.r / 3), r: i.r, brushType: "fill", color: i.colorOut}
                }, d = [0, i.x, i.y];
            return c.highlightStyle.x = h.highlightStyle.x = p.highlightStyle.x = d[1], c.highlightStyle.y = h.highlightStyle.y = p.highlightStyle.y = d[2], setInterval(function () {
                n(l), n(p), d[0] -= .3, c.rotation = d, n(c), n(h), n(u), r()
            }, i.timeInterval)
        }

        function p(n, r, i) {
            var u = e("./color");
            n = t.merge(n, {
                textStyle: {color: "#fff"},
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                effectOption: {n: 30, lineWidth: 1, color: "random", timeInterval: 100}
            }, {overwrite: !1, recursive: !0});
            var l = a(n.textStyle), c = f(n.backgroundColor), h = n.effectOption, p = h.n, d = h.lineWidth, v = [], m,
                g, y, b;
            for (var w = 0; w < p; w++) y = -Math.ceil(Math.random() * 1e3), g = Math.ceil(Math.random() * 400), m = Math.ceil(Math.random() * o), h.color == "random" ? b = u.random() : b = h.color, v[w] = {
                shape: "line",
                highlightStyle: {xStart: y, yStart: m, xEnd: y + g, yEnd: m, strokeColor: b, lineWidth: d},
                animationX: Math.ceil(Math.random() * 100),
                len: g
            };
            return setInterval(function () {
                r(c);
                var e;
                for (var t = 0; t < p; t++) e = v[t].highlightStyle, e.xStart >= s && (v[t].len = Math.ceil(Math.random() * 400), v[t].highlightStyle.xStart = -400, v[t].highlightStyle.xEnd = -400 + v[t].len, v[t].highlightStyle.yStart = Math.ceil(Math.random() * o), v[t].highlightStyle.yEnd = v[t].highlightStyle.yStart), v[t].highlightStyle.xStart += v[t].animationX, v[t].highlightStyle.xEnd += v[t].animationX, r(v[t]);
                r(l), i()
            }, h.timeInterval)
        }

        function d(n, r, i) {
            var u = e("./color");
            n = t.merge(n, {
                textStyle: {color: "#888"},
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                effectOption: {n: 50, lineWidth: 2, brushType: "stroke", color: "random", timeInterval: 100}
            }, {overwrite: !1, recursive: !0});
            var l = a(n.textStyle), c = f(n.backgroundColor), h = n.effectOption, p = h.n, d = h.brushType,
                v = h.lineWidth, m = [], g;
            for (var y = 0; y < p; y++) h.color == "random" ? g = u.alpha(u.random(), .3) : g = h.color, m[y] = {
                shape: "circle",
                highlightStyle: {
                    x: Math.ceil(Math.random() * s),
                    y: Math.ceil(Math.random() * o),
                    r: Math.ceil(Math.random() * 40),
                    brushType: d,
                    color: g,
                    strokeColor: g,
                    lineWidth: v
                },
                animationY: Math.ceil(Math.random() * 20)
            };
            return setInterval(function () {
                r(c);
                var e;
                for (var t = 0; t < p; t++) e = m[t].highlightStyle, e.y - m[t].animationY + e.r <= 0 && (m[t].highlightStyle.y = o + e.r, m[t].highlightStyle.x = Math.ceil(Math.random() * s)), m[t].highlightStyle.y -= m[t].animationY, r(m[t]);
                r(l), i()
            }, h.timeInterval)
        }

        function v(n, r, i) {
            var u = e("./color");
            n.effectOption = t.merge(n.effectOption || {}, {
                x: s / 2 - 80,
                y: o / 2,
                r0: 9,
                r: 15,
                n: 18,
                color: "#fff",
                timeInterval: 100
            });
            var l = n.effectOption;
            n = t.merge(n, {
                textStyle: {color: "#fff", x: l.x + l.r + 10, y: l.y, textAlign: "start"},
                backgroundColor: "rgba(0, 0, 0, 0.8)"
            }, {overwrite: !1, recursive: !0});
            var c = a(n.textStyle), h = f(n.backgroundColor), p = l.n, d = l.x, v = l.y, m = l.r0, g = l.r, y = l.color,
                b = [], w = Math.round(180 / p);
            for (var E = 0; E < p; E++) b[E] = {
                shape: "sector",
                highlightStyle: {
                    x: d,
                    y: v,
                    r0: m,
                    r: g,
                    startAngle: w * E * 2,
                    endAngle: w * E * 2 + w,
                    color: u.alpha(y, (E + 1) / p),
                    brushType: "fill"
                }
            };
            var S = [0, d, v];
            return setInterval(function () {
                r(h), S[0] -= .3;
                for (var e = 0; e < p; e++) b[e].rotation = S, r(b[e]);
                r(c), i()
            }, l.timeInterval)
        }

        function m(n, r, i) {
            var u = e("./color"), c = e("./math");
            n = t.merge(n, {
                textStyle: {color: "#07a"},
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                effectOption: {
                    x: s / 2,
                    y: o / 2,
                    r0: 60,
                    r: 100,
                    color: "#bbdcff",
                    brushType: "fill",
                    textPosition: "inside",
                    textFont: "normal 30px verdana",
                    textColor: "rgba(30, 144, 255, 0.6)",
                    timeInterval: 100
                }
            }, {overwrite: !1, recursive: !0});
            var h = n.effectOption, p = n.textStyle;
            p.x = typeof p.x != "undefined" ? p.x : h.x, p.y = typeof p.y != "undefined" ? p.y : h.y + (h.r0 + h.r) / 2 - 5;
            var d = a(n.textStyle), v = f(n.backgroundColor), m = h.x, g = h.y, y = h.r0 + 6, b = h.r - 6, w = h.color,
                E = u.lift(w, .1), S = {shape: "ring", highlightStyle: t.clone(h)}, x = [],
                T = u.getGradientColors(["#ff6400", "#ffe100", "#97ff00"], 25), N = 15, C = 240;
            for (var k = 0; k < 16; k++) x.push({
                shape: "sector",
                highlightStyle: {x: m, y: g, r0: y, r: b, startAngle: C - N, endAngle: C, brushType: "fill", color: E},
                _color: u.getLinearGradient(m + y * c.cos(C, !0), g - y * c.sin(C, !0), m + y * c.cos(C - N, !0), g - y * c.sin(C - N, !0), [[0, T[k * 2]], [1, T[k * 2 + 1]]])
            }), C -= N;
            C = 360;
            for (var k = 0; k < 4; k++) x.push({
                shape: "sector",
                highlightStyle: {x: m, y: g, r0: y, r: b, startAngle: C - N, endAngle: C, brushType: "fill", color: E},
                _color: u.getLinearGradient(m + y * c.cos(C, !0), g - y * c.sin(C, !0), m + y * c.cos(C - N, !0), g - y * c.sin(C - N, !0), [[0, T[k * 2 + 32]], [1, T[k * 2 + 33]]])
            }), C -= N;
            var L = 0;
            if (typeof n.progress != "undefined") {
                r(v), L = l(n.progress, [0, 1]).toFixed(2) * 100 / 5, S.highlightStyle.text = L * 5 + "%", r(S);
                for (var k = 0; k < 20; k++) x[k].highlightStyle.color = k < L ? x[k]._color : E, r(x[k]);
                r(d), i();
                return
            }
            return setInterval(function () {
                r(v), L += L >= 20 ? -20 : 1, r(S);
                for (var e = 0; e < 20; e++) x[e].highlightStyle.color = e < L ? x[e]._color : E, r(x[e]);
                r(d), i()
            }, h.timeInterval)
        }

        function g(e, t, r) {
            var i = n.ring;
            return typeof e.effect == "function" ? i = e.effect : typeof n[e.effect] == "function" && (i = n[e.effect]), s = e.canvasSize.width, o = e.canvasSize.height, i(e, t, r)
        }

        function y(e) {
            clearInterval(e)
        }

        var t = e("./util"), n, r = "Loading...", i = "normal 16px Arial", s, o;
        return n = {
            getBackgroundShape: f,
            getTextShape: a,
            define: u,
            bar: c,
            whirling: h,
            dynamicLine: p,
            bubble: d,
            spin: v,
            ring: m,
            start: g,
            stop: y
        }, n
    }), r("zrender/tool/event", [], function () {
        function e(e) {
            return typeof e.zrenderX != "undefined" && e.zrenderX || typeof e.offsetX != "undefined" && e.offsetX || typeof e.layerX != "undefined" && e.layerX || typeof e.clientX != "undefined" && e.clientX
        }

        function t(e) {
            return typeof e.zrenderY != "undefined" && e.zrenderY || typeof e.offsetY != "undefined" && e.offsetY || typeof e.layerY != "undefined" && e.layerY || typeof e.clientY != "undefined" && e.clientY
        }

        function n(e) {
            return typeof e.wheelDelta != "undefined" && e.wheelDelta || typeof e.detail != "undefined" && -e.detail
        }

        function r(e) {
            e.preventDefault ? (e.preventDefault(), e.stopPropagation()) : (e.returnValue = !1, e.cancelBubble = !0)
        }

        function i() {
            function n(n, r) {
                return !r || !n ? e : (t[n] || (t[n] = []), t[n].push({h: r, one: !0}), e)
            }

            function r(n, r) {
                return !r || !n ? e : (t[n] || (t[n] = []), t[n].push({h: r, one: !1}), e)
            }

            function i(n, r) {
                if (!n) return t = {}, e;
                if (r) {
                    if (t[n]) {
                        var i = [];
                        for (var s = 0, o = t[n].length; s < o; s++) t[n][s]["h"] != r && i.push(t[n][s]);
                        t[n] = i
                    }
                    t[n] && t[n].length === 0 && delete t[n]
                } else delete t[n];
                return e
            }

            function s(n, r, i) {
                if (t[n]) {
                    var s = [], o = i || {};
                    o.type = n, o.event = r;
                    for (var u = 0, a = t[n].length; u < a; u++) t[n][u].h(o), t[n][u].one || s.push(t[n][u]);
                    s.length != t[n].length && (t[n] = s)
                }
                return e
            }

            var e = this, t = {};
            e.one = n, e.bind = r, e.unbind = i, e.dispatch = s
        }

        return {getX: e, getY: t, getDelta: n, stop: r, Dispatcher: i}
    }), r("zrender/zrender", ["require", "./lib/excanvas", "./tool/env", "./shape", "./shape/circle", "./shape/ellipse", "./shape/line", "./shape/polygon", "./shape/brokenLine", "./shape/rectangle", "./shape/ring", "./shape/sector", "./shape/text", "./shape/heart", "./shape/droplet", "./shape/path", "./shape/image", "./shape/beziercurve", "./shape/star", "./shape/isogon", "./animation/animation", "./tool/util", "./tool/util", "./config", "./tool/loadingEffect", "./tool/loadingEffect", "./config", "./tool/env", "./tool/event"], function (e) {
        function s(t, r, i) {
            var s = this;
            s.env = e("./tool/env");
            var f = e("./shape");
            e("./shape/circle"), e("./shape/ellipse"), e("./shape/line"), e("./shape/polygon"), e("./shape/brokenLine"), e("./shape/rectangle"), e("./shape/ring"), e("./shape/sector"), e("./shape/text"), e("./shape/heart"), e("./shape/droplet"), e("./shape/path"), e("./shape/image"), e("./shape/beziercurve"), e("./shape/star"), e("./shape/isogon");
            var l;
            if (typeof i.shape == "undefined") l = f; else {
                l = {};
                for (var c in i.shape) l[c] = i.shape[c];
                l.get = function (e) {
                    return l[e] || f.get(e)
                }
            }
            var h = new o(l), p = new u(r, h, l), d = new a(r, h, p, l), v = e("./animation/animation"), m = [],
                g = new v({
                    stage: {
                        update: function () {
                            s.update(m)
                        }
                    }
                });
            g.start(), s.getId = function () {
                return t
            }, s.addShape = function (e) {
                return h.add(e), s
            }, s.delShape = function (e) {
                return h.del(e), s
            }, s.modShape = function (e, t, n) {
                return h.mod(e, t, n), s
            }, s.addHoverShape = function (e) {
                return h.addHover(e), s
            }, s.render = function (e) {
                return p.render(e), s
            }, s.refresh = function (e) {
                return p.refresh(e), s
            }, s.refreshHover = function (e) {
                return p.refreshHover(e), s
            }, s.update = function (e, t) {
                return p.update(e, t), s
            }, s.resize = function () {
                return p.resize(), s
            }, s.animate = function (t, r, i) {
                var s = e("./tool/util"), o = h.get(t);
                if (o) {
                    var u;
                    if (r) {
                        var a = r.split("."), f = o;
                        for (var l = 0, c = a.length; l < c; l++) {
                            if (!f) continue;
                            f = f[a[l]]
                        }
                        f && (u = f)
                    } else u = o;
                    if (!u) {
                        n.log('Property "' + r + '" is not existed in shape ' + t);
                        return
                    }
                    return typeof o.__aniCount == "undefined" && (o.__aniCount = 0), o.__aniCount === 0 && m.push(o), o.__aniCount++, g.animate(u, {loop: i}).done(function () {
                        o.__aniCount--;
                        if (o.__aniCount === 0) {
                            var e = s.indexOf(m, o);
                            m.splice(e, 1)
                        }
                    })
                }
                n.log('Shape "' + t + '" not existed')
            }, s.clearAnimation = function () {
                g.clear()
            }, s.showLoading = function (e) {
                return p.showLoading(e), s
            }, s.hideLoading = function () {
                return p.hideLoading(), s
            }, s.newShapeId = function (e) {
                return h.newShapeId(e)
            }, s.getWidth = function () {
                return p.getWidth()
            }, s.getHeight = function () {
                return p.getHeight()
            }, s.toDataURL = function (e, t) {
                return p.toDataURL(e, t)
            }, s.on = function (e, t) {
                return d.on(e, t), s
            }, s.un = function (e, t) {
                return d.un(e, t), s
            }, s.clear = function () {
                return h.del(), p.clear(), s
            }, s.dispose = function () {
                g.stop(), g = null, m = null, s.clear(), s = null, h.dispose(), h = null, p.dispose(), p = null, d.dispose(), d = null, n.delInstance(t);
                return
            }
        }

        function o(t) {
            function c(e) {
                e.hoverable || e.onclick || e.draggable || e.onmousemove || e.onmouseover || e.onmouseout || e.onmousedown || e.onmouseup || e.ondragenter || e.ondragover || e.ondragleave || e.ondrop ? e.__silent = !1 : e.__silent = !0, Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1, e.style = e.style || {}, e.style.__rect = null
            }

            function h(e) {
                return (e || "") + ++s
            }

            function p(e) {
                var t = {
                    shape: "circle",
                    id: e.id || i.newShapeId(),
                    zlevel: 0,
                    draggable: !1,
                    clickable: !1,
                    hoverable: !0,
                    position: [0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 0, 0]
                };
                return r.merge(t, e, {
                    overwrite: !0,
                    recursive: !0
                }), c(t), o[t.id] = t, u[t.zlevel] = u[t.zlevel] || [], u[t.zlevel].push(t), f = Math.max(f, t.zlevel), l[t.zlevel] = !0, i
            }

            function d(e) {
                return o[e]
            }

            function v(e) {
                if (typeof e != "undefined") {
                    var t = {};
                    if (e instanceof Array) for (var n = 0, r = e.length; n < r; n++) t[e[n].id] = !0; else t[e] = !0;
                    var s, c, h, p = {};
                    for (var d in t) if (o[d]) {
                        h = o[d].zlevel, l[h] = !0;
                        if (!p[h]) {
                            c = u[h], s = [];
                            for (var n = 0, r = c.length; n < r; n++) t[c[n].id] || s.push(c[n]);
                            u[h] = s, p[h] = !0
                        }
                        delete o[d]
                    }
                } else o = {}, u = [], a = [], f = 0, l = {all: !0};
                return i
            }

            function m(e, t, n) {
                var s = o[e];
                return s && (l[s.zlevel] = !0, n ? r.mergeFast(s, t, !0, !0) : r.merge(s, t, {
                    overwrite: !0,
                    recursive: !0
                }), c(s), l[s.zlevel] = !0, f = Math.max(f, s.zlevel)), i
            }

            function g(e, r, s) {
                var u = o[e];
                if (!u) return;
                u.__needTransform = !0;
                if (!u.ondrift || u.ondrift && !u.ondrift(u, r, s)) if (n.catchBrushException) try {
                    t.get(u.shape).drift(u, r, s)
                } catch (a) {
                    n.log(a, "drift error of " + u.shape, u)
                } else t.get(u.shape).drift(u, r, s);
                return l[u.zlevel] = !0, i
            }

            function y(e) {
                return e.rotation && Math.abs(e.rotation[0]) > 1e-4 || e.position && (Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4) || e.scale && (Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4) ? e.__needTransform = !0 : e.__needTransform = !1, a.push(e), i
            }

            function b() {
                return a = [], i
            }

            function w() {
                return a.length > 0
            }

            function E(e, t) {
                t || (t = {hover: !1, normal: "down"});
                if (t.hover) for (var n = 0, r = a.length; n < r; n++) if (e(a[n])) return i;
                var s, f;
                if (typeof t.normal != "undefined") switch (t.normal) {
                    case"down":
                        for (var r = u.length - 1; r >= 0; r--) {
                            s = u[r];
                            if (s) {
                                f = s.length;
                                while (f--) if (e(s[f])) return i
                            }
                        }
                        break;
                    case"up":
                        for (var n = 0, r = u.length; n < r; n++) {
                            s = u[n];
                            if (s) {
                                f = s.length;
                                for (var l = 0; l < f; l++) if (e(s[l])) return i
                            }
                        }
                        break;
                    default:
                        for (var n in o) if (e(o[n])) return i
                }
                return i
            }

            function S() {
                return f
            }

            function x() {
                return l
            }

            function T() {
                return l = {}, i
            }

            function N(e) {
                return l[e] = !0, i
            }

            function C() {
                o = null, u = null, a = null, i = null;
                return
            }

            var r = e("./tool/util"), i = this, s = 0, o = {}, u = [], a = [], f = 0, l = {};
            i.newShapeId = h, i.add = p, i.get = d, i.del = v, i.addHover = y, i.delHover = b, i.hasHoverShape = w, i.mod = m, i.drift = g, i.iterShape = E, i.getMaxZlevel = S, i.getChangedZlevel = x, i.clearChangedZlevel = T, i.setChangedZlevle = N, i.dispose = C
        }

        function u(t, r, i) {
            function v() {
                var e = t.currentStyle || document.defaultView.getComputedStyle(t);
                return t.clientWidth - e.paddingLeft.replace(/\D/g, "") - e.paddingRight.replace(/\D/g, "")
            }

            function m() {
                var e = t.currentStyle || document.defaultView.getComputedStyle(t);
                return t.clientHeight - e.paddingTop.replace(/\D/g, "") - e.paddingBottom.replace(/\D/g, "")
            }

            function g() {
                c.innerHTML = "", t.innerHTML = "", h = v(), p = m(), c.style.position = "relative", c.style.overflow = "hidden", c.style.width = h + "px", c.style.height = p + "px", t.appendChild(c), u = {}, a = {}, f = r.getMaxZlevel(), u.bg = b("bg", "div"), c.appendChild(u.bg);
                for (var e = 0; e <= f; e++) u[e] = b(e, "canvas"), c.appendChild(u[e]), G_vmlCanvasManager && G_vmlCanvasManager.initElement(u[e]), a[e] = u[e].getContext("2d"), d != 1 && a[e].scale(d, d);
                u.hover = b("hover", "canvas"), u.hover.id = "_zrender_hover_", c.appendChild(u.hover), G_vmlCanvasManager && G_vmlCanvasManager.initElement(u.hover), a.hover = u.hover.getContext("2d"), d != 1 && a.hover.scale(d, d)
            }

            function y() {
                var e = r.getMaxZlevel();
                if (f < e) {
                    for (var t = f + 1; t <= e; t++) u[t] = b(t, "canvas"), c.insertBefore(u[t], u.hover), G_vmlCanvasManager && G_vmlCanvasManager.initElement(u[t]), a[t] = u[t].getContext("2d"), d != 1 && a[t].scale(d, d);
                    f = e
                }
            }

            function b(e, t) {
                var n = document.createElement(t);
                return n.style.position = "absolute", n.style.left = 0, n.style.top = 0, n.style.width = h + "px", n.style.height = p + "px", n.setAttribute("width", h * d), n.setAttribute("height", p * d), n.setAttribute("data-id", e), n
            }

            function w(e) {
                return function (t) {
                    if ((e.all || e[t.zlevel]) && !t.invisible) {
                        var r = a[t.zlevel];
                        if (r) {
                            if (!t.onbrush || t.onbrush && !t.onbrush(r, t, !1)) if (n.catchBrushException) try {
                                i.get(t.shape).brush(r, t, !1, T)
                            } catch (s) {
                                n.log(s, "brush error of " + t.shape, t)
                            } else i.get(t.shape).brush(r, t, !1, T)
                        } else n.log("can not find the specific zlevel canvas!")
                    }
                }
            }

            function E(e) {
                var t = a.hover;
                if (!e.onbrush || e.onbrush && !e.onbrush(t, e, !0)) if (n.catchBrushException) try {
                    i.get(e.shape).brush(t, e, !0, T)
                } catch (r) {
                    n.log(r, "hoverBrush error of " + e.shape, e)
                } else i.get(e.shape).brush(t, e, !0, T)
            }

            function S(e) {
                return O() && A(), y(), r.iterShape(w({all: !0}), {normal: "up"}), r.clearChangedZlevel(), typeof e == "function" && e(), o
            }

            function x(e) {
                y();
                var t = r.getChangedZlevel();
                if (t.all) N(); else for (var n in t) a[n] && a[n].clearRect(0, 0, h * d, p * d);
                return r.iterShape(w(t), {normal: "up"}), r.clearChangedZlevel(), typeof e == "function" && e(), o
            }

            function T(e, t) {
                var n;
                for (var i = 0, s = e.length; i < s; i++) n = e[i], r.mod(n.id, n);
                return x(t), o
            }

            function N() {
                for (var e in a) {
                    if (e == "hover") continue;
                    a[e].clearRect(0, 0, h * d, p * d)
                }
                return o
            }

            function C() {
                return k(), r.iterShape(E, {hover: !0}), r.delHover(), o
            }

            function k() {
                return a && a.hover && a.hover.clearRect(0, 0, h * d, p * d), o
            }

            function L(t) {
                var n = e("./tool/loadingEffect");
                return n.stop(l), t = t || {}, t.effect = t.effect || s.loadingEffect, t.canvasSize = {
                    width: h,
                    height: p
                }, l = n.start(t, r.addHover, C), o.loading = !0, o
            }

            function A() {
                var t = e("./tool/loadingEffect");
                return t.stop(l), k(), o.loading = !1, o
            }

            function O() {
                return o.loading
            }

            function M() {
                return h
            }

            function _() {
                return p
            }

            function D() {
                var e, t, n;
                c.style.display = "none", e = v(), t = m(), c.style.display = "";
                if (h != e || t != p) {
                    h = e, p = t, c.style.width = h + "px", c.style.height = p + "px";
                    for (var i in u) n = u[i], n.setAttribute("width", h), n.setAttribute("height", p), n.style.width = h + "px", n.style.height = p + "px";
                    r.setChangedZlevle("all"), x()
                }
                return o
            }

            function P() {
                O() && A(), t.innerHTML = "", t = null, r = null, i = null, c = null, u = null, a = null, o = null;
                return
            }

            function H() {
                return u.hover
            }

            function B(e, t) {
                if (G_vmlCanvasManager) return null;
                var s = b("image", "canvas");
                u.bg.appendChild(s);
                var o = s.getContext("2d");
                d != 1 && o.scale(d, d), o.fillStyle = "#fff", o.rect(0, 0, h * d, p * d), o.fill(), r.iterShape(function (e) {
                    if (!e.invisible) if (!e.onbrush || e.onbrush && !e.onbrush(o, e, !1)) if (n.catchBrushException) try {
                        i.get(e.shape).brush(o, e, !1, T)
                    } catch (t) {
                        n.log(t, "brush error of " + e.shape, e)
                    } else i.get(e.shape).brush(o, e, !1, T)
                }, {normal: "up"});
                var a = s.toDataURL(e, t);
                return o = null, u.bg.removeChild(s), a
            }

            var s = e("./config"), o = this, u = {}, a = {}, f = 0, l, c = document.createElement("div");
            c.onselectstart = function () {
                return !1
            };
            var h, p, d = window.devicePixelRatio || 1;
            o.render = S, o.refresh = x, o.update = T, o.clear = N, o.refreshHover = C, o.clearHover = k, o.showLoading = L, o.hideLoading = A, o.isLoading = O, o.getWidth = M, o.getHeight = _, o.resize = D, o.dispose = P, o.getDomHover = H, o.toDataURL = B, g()
        }

        function a(t, n, r, i) {
            function T() {
                window.addEventListener ? (window.addEventListener("resize", N), !o.os.tablet && !o.os.phone ? (t.addEventListener("click", C), t.addEventListener("mousewheel", k), t.addEventListener("mousemove", L), t.addEventListener("mousedown", _), t.addEventListener("mouseup", D)) : (t.addEventListener("touchstart", P), t.addEventListener("touchmove", H), t.addEventListener("touchend", B)), t.addEventListener("DOMMouseScroll", k), t.addEventListener("mouseout", A)) : (window.attachEvent("onresize", N), t.attachEvent("onclick", C), t.attachEvent("onmousewheel", k), t.attachEvent("onmousemove", L), t.attachEvent("onmouseout", A), t.attachEvent("onmousedown", _), t.attachEvent("onmouseup", D))
            }

            function N(e) {
                c = e || window.event, p = null, m = !1, a.dispatch(s.EVENT.RESIZE, c)
            }

            function C(e) {
                c = V(e), p ? p && p.clickable && z(p, s.EVENT.CLICK) : z(p, s.EVENT.CLICK), L(c)
            }

            function k(e) {
                c = V(e), z(p, s.EVENT.MOUSEWHEEL), L(c)
            }

            function L(e) {
                if (r.isLoading()) return;
                c = V(e), b = E, w = S, E = f(c), S = l(c), j(), h = !1, n.iterShape(X, {normal: "down"});
                if (!h) {
                    if (!v || p && p.id != v.id) M(), q();
                    p = null, n.delHover(), r.clearHover()
                }
                v && (n.drift(v.id, E - b, S - w), n.addHover(v)), v || h && p.draggable ? t.style.cursor = "move" : h && p.clickable ? t.style.cursor = "pointer" : t.style.cursor = "default", z(p, s.EVENT.MOUSEMOVE), (v || h || n.hasHoverShape()) && r.refreshHover()
            }

            function A(e) {
                c = V(e);
                var n = c.toElement || c.relatedTarget;
                if (n != t) while (n && n.nodeType != 9) {
                    if (n == t) {
                        L(e);
                        return
                    }
                    n = n.parentNode
                }
                c.zrenderX = b, c.zrenderY = w, t.style.cursor = "default", m = !1, M(), R(), U(), r.isLoading() || r.refreshHover(), a.dispatch(s.EVENT.GLOBALOUT, c)
            }

            function O() {
                z(p, s.EVENT.MOUSEOVER)
            }

            function M() {
                z(p, s.EVENT.MOUSEOUT)
            }

            function _(e) {
                c = V(e), m = !0, d = p, z(p, s.EVENT.MOUSEDOWN)
            }

            function D(e) {
                c = V(e), t.style.cursor = "default", m = !1, d = null, z(p, s.EVENT.MOUSEUP), R(), U()
            }

            function P(e) {
                c = V(e, !0), y = new Date, W(), _(c)
            }

            function H(e) {
                c = V(e, !0), L(c), g && u.stop(e)
            }

            function B(e) {
                c = V(e, !0), D(c), new Date - y < s.EVENT.touchClickDelay && (W(), C(c)), r.clearHover()
            }

            function j() {
                m && p && p.draggable && !v && d == p && (v = p, g = !0, v.invisible = !0, n.mod(v.id, v), z(v, s.EVENT.DRAGSTART), r.refresh())
            }

            function F() {
                v && z(p, s.EVENT.DRAGENTER, v)
            }

            function I() {
                v && z(p, s.EVENT.DRAGOVER, v)
            }

            function q() {
                v && z(p, s.EVENT.DRAGLEAVE, v)
            }

            function R() {
                v && (v.invisible = !1, n.mod(v.id, v), r.refresh(), z(p, s.EVENT.DROP, v))
            }

            function U() {
                v && (z(v, s.EVENT.DRAGEND), p = null), g = !1, v = null
            }

            function z(e, t, n) {
                var r = "on" + t, i = {type: t, event: c, target: e};
                n && (i.dragged = n), e ? (!e[r] || !e[r](i)) && a.dispatch(t, c, i) : n || a.dispatch(t, c)
            }

            function W() {
                p = null, E = c.zrenderX, S = c.zrenderY, n.iterShape(X, {normal: "down"}), p || (E += 10, n.iterShape(X, {normal: "down"})), p || (E -= 20, n.iterShape(X, {normal: "down"})), p || (E += 10, S += 10, n.iterShape(X, {normal: "down"})), p || (S -= 20, n.iterShape(X, {normal: "down"})), p && (c.zrenderX = E, c.zrenderY = S)
            }

            function X(e) {
                if (v && v.id == e.id) return !1;
                if (e.__silent) return !1;
                var t = i.get(e.shape);
                return t.isCover(e, E, S) ? (e.hoverable && n.addHover(e), p != e && (M(), q(), p = e, F()), O(), I(), h = !0, !0) : !1
            }

            function V(e, n) {
                if (!n) {
                    c = e || window.event;
                    var r = c.toElement || c.relatedTarget || c.srcElement || c.target;
                    r && r != x && (c.zrenderX = (typeof c.offsetX != "undefined" ? c.offsetX : c.layerX) + r.offsetLeft, c.zrenderY = (typeof c.offsetY != "undefined" ? c.offsetY : c.layerY) + r.offsetTop)
                } else {
                    c = e;
                    var i = c.type != "touchend" ? c.targetTouches[0] : c.changedTouches[0];
                    i && (c.zrenderX = i.clientX - t.offsetLeft + document.body.scrollLeft, c.zrenderY = i.clientY - t.offsetTop + document.body.scrollTop)
                }
                return c
            }

            function $(e, t) {
                return a.bind(e, t), a
            }

            function J(e, t) {
                return a.unbind(e, t), a
            }

            function K() {
                window.removeEventListener ? (window.removeEventListener("resize", N), !o.os.tablet && !o.os.phone ? (t.removeEventListener("click", C), t.removeEventListener("mousewheel", k), t.removeEventListener("mousemove", L), t.removeEventListener("mousedown", _), t.removeEventListener("mouseup", D)) : (t.removeEventListener("touchstart", P), t.removeEventListener("touchmove", H), t.removeEventListener("touchend", B)), t.removeEventListener("DOMMouseScroll", k), t.removeEventListener("mouseout", A)) : (window.detachEvent("onresize", N), t.detachEvent("onclick", C), t.detachEvent("onmousewheel", k), t.detachEvent("onmousemove", L), t.detachEvent("onmouseout", A), t.detachEvent("onmousedown", _), t.detachEvent("onmouseup", D)), t = null, x = null, n = null, r = null, i = null, J(), a = null;
                return
            }

            var s = e("./config"), o = e("./tool/env"), u = e("./tool/event");
            u.Dispatcher.call(this);
            var a = this, f = u.getX, l = u.getY, c, h = !1, p = null, d = null, v = null, m = !1, g = !1, y, b = 0,
                w = 0, E = 0, S = 0, x = r.getDomHover();
            a.on = $, a.un = J, a.dispose = K, T()
        }

        e("./lib/excanvas");
        var t = {}, n = t, r = 0, i = {};
        return t.version = "1.0.7", t.init = function (e, t) {
            var n = new s(++r + "", e, t || {});
            return i[r] = n, n
        }, t.dispose = function (e) {
            if (e) e.dispose(); else {
                for (var n in i) i[n].dispose();
                i = {}
            }
            return t
        }, t.getInstance = function (e) {
            return i[e]
        }, t.delInstance = function (e) {
            return i[e] && (i[e] = null, delete i[e]), t
        }, t.catchBrushException = !1, t.debugMode = 0, t.log = function () {
            if (t.debugMode === 0) return;
            if (t.debugMode == 1) for (var e in arguments) throw new Error(arguments[e]); else if (t.debugMode > 1) for (var e in arguments) console.log(arguments[e]);
            return t
        }, t
    }), r("zrender", ["zrender/zrender"], function (e) {
        return e
    }), r("echarts/util/shape/icon", ["require", "zrender/tool/matrix", "zrender/shape", "zrender/shape", "zrender/shape/base", "zrender/shape"], function (e) {
        function n() {
            this.type = "icon", this._iconLibrary = {
                mark: r,
                markUndo: i,
                markClear: s,
                dataZoom: o,
                dataZoomReset: u,
                restore: a,
                lineChart: f,
                barChart: l,
                dataView: c,
                saveAsImage: h,
                cross: p,
                circle: d,
                rectangle: v,
                triangle: m,
                diamond: g,
                arrow: y,
                star: b,
                image: w
            }
        }

        function r(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r), e.moveTo(t.x + 13 * n, t.y + 10 * r), e.lineTo(t.x + 13 * n, t.y + t.height)
        }

        function i(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r)
        }

        function s(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x + 4 * n, t.y + 15 * r), e.lineTo(t.x + 9 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 8 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.lineTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 4 * n, t.y + 15 * r), e.moveTo(t.x + 5 * n, t.y), e.lineTo(t.x + 11 * n, t.y), e.moveTo(t.x + 5 * n, t.y + r), e.lineTo(t.x + 11 * n, t.y + r), e.moveTo(t.x, t.y + 2 * r), e.lineTo(t.x + t.width, t.y + 2 * r), e.moveTo(t.x, t.y + 5 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 13 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + 5 * r)
        }

        function o(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 3 * r), e.moveTo(t.x + 3 * n, t.y), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.moveTo(t.x + 3 * n, t.y + 8 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 8 * n, t.y + 3 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
        }

        function u(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x + 6 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 6 * r), e.moveTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 11 * r), e.moveTo(t.x + 2 * n, t.y + 5 * r), e.lineTo(t.x + 2 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.moveTo(t.x + 10 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + t.height), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
        }

        function a(e, t) {
            var n = t.width / 16, r = t.height / 16, i = t.width / 2;
            e.lineWidth = 1.5, e.arc(t.x + i, t.y + i, i - n, 0, Math.PI * 2 / 3), e.moveTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 0 * n, t.y + 12 * r), e.lineTo(t.x + 5 * n, t.y + 11 * r), e.moveTo(t.x, t.y + 8 * r), e.arc(t.x + i, t.y + i, i - n, Math.PI, Math.PI * 5 / 3), e.moveTo(t.x + 13 * n, t.y), e.lineTo(t.x + t.width, t.y + 4 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
        }

        function f(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 2 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 6 * r), e.lineTo(t.x + 11 * n, t.y + 11 * r), e.lineTo(t.x + 15 * n, t.y + 2 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
        }

        function l(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 3 * n, t.y + 14 * r), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 14 * r), e.moveTo(t.x + 7 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 14 * r), e.moveTo(t.x + 11 * n, t.y + 14 * r), e.lineTo(t.x + 11 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 14 * r)
        }

        function c(e, t) {
            var n = t.width / 16;
            e.moveTo(t.x + n, t.y), e.lineTo(t.x + n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y), e.lineTo(t.x + n, t.y), e.moveTo(t.x + 3 * n, t.y + 3 * n), e.lineTo(t.x + 13 * n, t.y + 3 * n), e.moveTo(t.x + 3 * n, t.y + 6 * n), e.lineTo(t.x + 13 * n, t.y + 6 * n), e.moveTo(t.x + 3 * n, t.y + 9 * n), e.lineTo(t.x + 13 * n, t.y + 9 * n), e.moveTo(t.x + 3 * n, t.y + 12 * n), e.lineTo(t.x + 9 * n, t.y + 12 * n)
        }

        function h(e, t) {
            var n = t.width / 16, r = t.height / 16;
            e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x, t.y), e.moveTo(t.x + 4 * n, t.y), e.lineTo(t.x + 4 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y), e.moveTo(t.x + 6 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 11 * r), e.moveTo(t.x, t.y), e.lineTo(t.x, t.y)
        }

        function p(e, t) {
            var n = t.x, r = t.y, i = t.width, s = t.height;
            e.moveTo(n, r + s / 2), e.lineTo(n + i, r + s / 2), e.moveTo(n + i / 2, r), e.lineTo(n + i / 2, r + s)
        }

        function d(e, t) {
            var n = t.width / 2, r = t.height / 2;
            e.arc(t.x + n, t.y + r, Math.min(n, r), 0, Math.PI * 2)
        }

        function v(e, t) {
            e.rect(t.x, t.y, t.width, t.height)
        }

        function m(e, t) {
            var n = t.width / 2, r = t.height / 2, i = t.x + n, s = t.y + r, o = Math.min(n, r);
            e.moveTo(i, s - o), e.lineTo(i + o, s + o), e.lineTo(i - o, s + o), e.lineTo(i, s - o)
        }

        function g(e, t) {
            var n = t.width / 2, r = t.height / 2, i = t.x + n, s = t.y + r, o = Math.min(n, r);
            e.moveTo(i, s - o), e.lineTo(i + o, s), e.lineTo(i, s + o), e.lineTo(i - o, s), e.lineTo(i, s - o)
        }

        function y(e, t) {
            var n = t.x, r = t.y, i = t.width / 16;
            e.moveTo(n + 8 * i, r), e.lineTo(n + i, r + t.height), e.lineTo(n + 8 * i, r + t.height / 4 * 3), e.lineTo(n + 15 * i, r + t.height), e.lineTo(n + 8 * i, r)
        }

        function b(t, n) {
            var r = n.width / 2, i = n.height / 2, s = e("zrender/shape").get("star");
            s.buildPath(t, {x: n.x + r, y: n.y + i, r: Math.min(r, i), n: n.n || 5})
        }

        function w(t, n) {
            setTimeout(function () {
                e("zrender/shape").get("image").brush(t, {style: n})
            }, 100)
        }

        var t = e("zrender/tool/matrix");
        return n.prototype = {
            buildPath: function (e, t) {
                this._iconLibrary[t.iconType] ? this._iconLibrary[t.iconType](e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
                return
            }, getRect: function (e) {
                return {x: Math.round(e.x), y: Math.round(e.y), width: e.width, height: e.height}
            }, isCover: function (e, n, r) {
                if (e.__needTransform && e._transform) {
                    var i = [];
                    t.invert(i, e._transform);
                    var s = [n, r];
                    t.mulVector(s, i, [n, r, 1]), n == s[0] && r == s[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), n = s[0], r = s[1]
                }
                var o;
                e.style.__rect ? o = e.style.__rect : (o = this.getRect(e.style), e.style.__rect = o);
                var u = 5;
                return n >= o.x - u && n <= o.x + o.width + 2 * u && r >= o.y - u && r <= o.y + o.height + 2 * u ? !0 : !1
            }, define: function (e, t) {
                this._iconLibrary[e] = t
            }, get: function (e) {
                return this._iconLibrary[e]
            }
        }, e("zrender/shape/base").derive(n), e("zrender/shape").define("icon", new n), n
    }), r("echarts/chart", [], function () {
        var e = {}, t = {};
        return e.define = function (n, r) {
            return t[n] = r, e
        }, e.get = function (e) {
            return t[e]
        }, e
    }), r("echarts/component/base", ["require", "../config", "zrender/tool/util"], function (e) {
        function t(t) {
            function s(e) {
                e = e || i.type + "";
                switch (e) {
                    case n.COMPONENT_TYPE_GRID:
                    case n.COMPONENT_TYPE_AXIS_CATEGORY:
                    case n.COMPONENT_TYPE_AXIS_VALUE:
                        return 0;
                    case n.CHART_TYPE_LINE:
                    case n.CHART_TYPE_BAR:
                    case n.CHART_TYPE_SCATTER:
                    case n.CHART_TYPE_PIE:
                    case n.CHART_TYPE_RADAR:
                    case n.CHART_TYPE_MAP:
                    case n.CHART_TYPE_K:
                    case n.CHART_TYPE_CHORD:
                        return 2;
                    case n.COMPONENT_TYPE_LEGEND:
                    case n.COMPONENT_TYPE_DATARANGE:
                    case n.COMPONENT_TYPE_DATAZOOM:
                        return 4;
                    case n.CHART_TYPE_ISLAND:
                        return 5;
                    case n.COMPONENT_TYPE_TOOLBOX:
                    case n.COMPONENT_TYPE_TITLE:
                        return 6;
                    case n.COMPONENT_TYPE_TOOLTIP:
                        return 7;
                    default:
                        return 0
                }
            }

            function o(e) {
                return r.merge(e || {}, n[i.type] || {}, {overwrite: !1, recursive: !0})
            }

            function u(e) {
                if (!(e instanceof Array)) return [e, e, e, e];
                switch (e.length + "") {
                    case"4":
                        return e;
                    case"3":
                        return [e[0], e[1], e[2], e[1]];
                    case"2":
                        return [e[0], e[1], e[0], e[1]];
                    case"1":
                        return [e[0], e[0], e[0], e[0]];
                    case"0":
                        return [0, 0, 0, 0]
                }
            }

            function a(e, t) {
                if (typeof e == "undefined") return undefined;
                if (!t) return e;
                t = t.split(".");
                var n = t.length, r = 0;
                while (r < n) {
                    e = e[t[r]];
                    if (typeof e == "undefined") return undefined;
                    r++
                }
                return e
            }

            function c(e) {
                var t = r.merge(r.clone(e) || {}, n.textStyle, {overwrite: !1});
                return t.fontStyle + " " + t.fontWeight + " " + t.fontSize + "px " + t.fontFamily
            }

            function h(e, t, n, r, s) {
                var o = [n, t], u = l(o, "itemStyle.normal.label"), a = l(o, "itemStyle.emphasis.label"),
                    f = u.textStyle || {}, c = a.textStyle || {};
                return u.show && (e.style.text = p(t, n, r, "normal"), e.style.textPosition = typeof u.position == "undefined" ? s == "horizontal" ? "right" : "top" : u.position, e.style.textColor = f.color, e.style.textFont = i.getFont(f)), a.show && (e.highlightStyle.text = p(t, n, r, "emphasis"), e.highlightStyle.textPosition = typeof a.position == "undefined" ? s == "horizontal" ? "right" : "top" : a.position, e.highlightStyle.textColor = c.color, e.highlightStyle.textFont = i.getFont(c)), e
            }

            function p(e, t, n, r) {
                var s = i.deepQuery([t, e], "itemStyle." + r + ".label.formatter"),
                    o = typeof t != "undefined" ? typeof t.value != "undefined" ? t.value : t : "-";
                if (!s) return o;
                if (typeof s == "function") return s(e.name, n, o);
                if (typeof s == "string") return s = s.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), s = s.replace("{a0}", e.name).replace("{b0}", n).replace("{c0}", o), s
            }

            function d(e, t) {
                return typeof e == "string" ? g(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : e
            }

            function v(e) {
                return [d(e[0], i.zr.getWidth()), d(e[1], i.zr.getHeight())]
            }

            function m(e) {
                e instanceof Array || (e = [0, e]);
                var t = Math.min(i.zr.getWidth(), i.zr.getHeight()) / 2;
                return [d(e[0], t), d(e[1], t)]
            }

            function g(e) {
                return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }

            function y(e, t) {
                return t % 2 == 1 && (e += e == Math.ceil(e) ? .5 : 0), e
            }

            function b() {
                i.refresh && i.refresh()
            }

            function w() {
                i.zr && (i.zr.delShape(i.shapeList), i.zr.clearAnimation && i.zr.clearAnimation()), i.shapeList = []
            }

            function E() {
                i.clear(), i.shapeList = null, i = null
            }

            var n = e("../config"), r = e("zrender/tool/util"), i = this;
            i.zr = t, i.shapeList = [];
            var f = function () {
                return function (e, t) {
                    var n;
                    for (var r = 0, i = e.length; r < i; r++) {
                        n = a(e[r], t);
                        if (typeof n != "undefined") return n
                    }
                    return undefined
                }
            }(), l = function () {
                return function (e, t) {
                    var n, i, s = e.length;
                    while (s--) i = a(e[s], t), typeof i != "undefined" && (typeof n == "undefined" ? n = r.clone(i) : r.merge(n, i, {
                        overwrite: !0,
                        recursive: !0
                    }));
                    return n
                }
            }();
            i.getZlevelBase = s, i.reformOption = o, i.reformCssArray = u, i.query = a, i.deepQuery = f, i.deepMerge = l, i.getFont = c, i.addLabel = h, i.parsePercent = d, i.parseCenter = v, i.parseRadius = m, i.subPixelOptimize = y, i.clear = w, i.dispose = E, i.resize = b
        }

        return t
    }), r("echarts/util/ecData", [], function () {
        function e(e, t, n, r, i, s, o, u) {
            var a;
            return typeof r != "undefined" && (typeof r.value != "undefined" ? a = r.value : a = r), e._echartsData = {
                _series: t,
                _seriesIndex: n,
                _data: r,
                _dataIndex: i,
                _name: s,
                _value: a,
                _special: o,
                _special2: u
            }, e._echartsData
        }

        function t(e, t) {
            var n = e._echartsData;
            if (!t) return n;
            switch (t) {
                case"series":
                    return n && n._series;
                case"seriesIndex":
                    return n && n._seriesIndex;
                case"data":
                    return n && n._data;
                case"dataIndex":
                    return n && n._dataIndex;
                case"name":
                    return n && n._name;
                case"value":
                    return n && n._value;
                case"special":
                    return n && n._special;
                case"special2":
                    return n && n._special2
            }
            return null
        }

        function n(e, t, n) {
            e._echartsData = e._echartsData || {};
            switch (t) {
                case"series":
                    e._echartsData._series = n;
                    break;
                case"seriesIndex":
                    e._echartsData._seriesIndex = n;
                    break;
                case"data":
                    e._echartsData._data = n;
                    break;
                case"dataIndex":
                    e._echartsData._dataIndex = n;
                    break;
                case"name":
                    e._echartsData._name = n;
                    break;
                case"value":
                    e._echartsData._value = n;
                    break;
                case"special":
                    e._echartsData._special = n;
                    break;
                case"special2":
                    e._echartsData._special2 = n
            }
        }

        return {pack: e, set: n, get: t}
    }), r("echarts/util/accMath", [], function () {
        function e(e, n) {
            return t(e, 1 / n)
        }

        function t(e, t) {
            var n = 0, r = e.toString(), i = t.toString();
            try {
                n += r.split(".")[1].length
            } catch (s) {
            }
            try {
                n += i.split(".")[1].length
            } catch (s) {
            }
            return Number(r.replace(".", "")) * Number(i.replace(".", "")) / Math.pow(10, n)
        }

        function n(e, t) {
            var n, r, i;
            try {
                n = e.toString().split(".")[1].length
            } catch (s) {
                n = 0
            }
            try {
                r = t.toString().split(".")[1].length
            } catch (s) {
                r = 0
            }
            return i = Math.pow(10, Math.max(n, r)), (Math.round(e * i) + Math.round(t * i)) / i
        }

        function r(e, t) {
            return n(e, -t)
        }

        return {accDiv: e, accMul: t, accAdd: n, accSub: r}
    }), r("echarts/chart/calculableBase", ["require", "../util/ecData", "../util/accMath", "zrender/tool/util"], function (e) {
        function t(t, n) {
            function u(e) {
                return e.ondragover = o.shapeHandler.ondragover, e.ondragend = o.shapeHandler.ondragend, e.ondrop = o.shapeHandler.ondrop, e
            }

            function a(e, t) {
                if (!o.isDrop || !e.target) return;
                var s = e.target, u = e.dragged, a = r.get(s, "seriesIndex"), f = r.get(s, "dataIndex"),
                    l = n.series[a].data[f] || "-";
                l.value ? l.value != "-" ? n.series[a].data[f].value = i.accAdd(n.series[a].data[f].value, r.get(u, "value")) : n.series[a].data[f].value = r.get(u, "value") : l != "-" ? n.series[a].data[f] = i.accAdd(n.series[a].data[f], r.get(u, "value")) : n.series[a].data[f] = r.get(u, "value"), t.dragIn = t.dragIn || !0, o.isDrop = !1;
                return
            }

            function f(e, t) {
                if (!o.isDragend || !e.target) return;
                var i = e.target, s = r.get(i, "seriesIndex"), u = r.get(i, "dataIndex");
                n.series[s].data[u] = "-", t.dragOut = !0, t.needRefresh = !0, o.isDragend = !1;
                return
            }

            function l(e, t) {
                var n = e.selected;
                for (var r in o.selectedMap) if (o.selectedMap[r] != n[r]) {
                    t.needRefresh = !0;
                    return
                }
            }

            var r = e("../util/ecData"), i = e("../util/accMath"), s = e("zrender/tool/util"), o = this;
            o.selectedMap = {}, o.shapeHandler = {
                onclick: function () {
                    o.isClick = !0
                }, ondragover: function (e) {
                    var t = s.clone(e.target);
                    t.highlightStyle = {
                        text: "",
                        r: t.style.r + 5,
                        brushType: "stroke",
                        strokeColor: o.zr.getCalculableColor(),
                        lineWidth: (t.style.lineWidth || 1) + 12
                    }, o.zr.addHoverShape(t)
                }, ondrop: function (e) {
                    typeof r.get(e.dragged, "data") != "undefined" && (o.isDrop = !0)
                }, ondragend: function () {
                    o.isDragend = !0
                }
            }, o.setCalculable = u, o.ondrop = a, o.ondragend = f, o.onlegendSelected = l
        }

        return t
    }), r("echarts/chart/island", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/event", "zrender/tool/color", "../util/accMath", "../chart"], function (e) {
        function t(t, n) {
            function v(t, n) {
                var r = e("zrender/tool/color"), i = e("../util/accMath"),
                    s = i.accAdd(o.get(t, "value"), o.get(n, "value")), u = o.get(t, "name") + c + o.get(n, "name");
                t.style.text = u + h + s, o.set(t, "value", s), o.set(t, "name", u), t.style.r = f.island.r, t.style.color = r.mix(t.style.color, n.style.color)
            }

            function m(e) {
                e && (e.island = a.reformOption(e.island), f = e, c = f.nameConnector, h = f.valueConnector)
            }

            function g(e) {
                m(e);
                for (var t = 0, r = a.shapeList.length; t < r; t++) n.addShape(a.shapeList[t])
            }

            function y() {
                return f
            }

            function b() {
                var e = n.getWidth(), t = n.getHeight(), r = e / (d || e), i = t / (p || t);
                if (r == 1 && i == 1) return;
                d = e, p = t;
                for (var s = 0, o = a.shapeList.length; s < o; s++) n.modShape(a.shapeList[s].id, {
                    style: {
                        x: Math.round(a.shapeList[s].style.x * r),
                        y: Math.round(a.shapeList[s].style.y * i)
                    }
                }, !0)
            }

            function w(e) {
                var t = o.get(e, "name"), r = o.get(e, "value"),
                    i = typeof o.get(e, "series") != "undefined" ? o.get(e, "series").name : "",
                    s = a.getFont(f.island.textStyle), u = {
                        shape: "circle",
                        id: n.newShapeId(a.type),
                        zlevel: l,
                        style: {
                            x: e.style.x,
                            y: e.style.y,
                            r: f.island.r,
                            color: e.style.color || e.style.strokeColor,
                            text: t + h + r,
                            textFont: s
                        },
                        draggable: !0,
                        hoverable: !0,
                        onmousewheel: a.shapeHandler.onmousewheel,
                        _type: "island"
                    };
                u.style.color == "#fff" && (u.style.color = e.style.strokeColor), a.setCalculable(u), o.pack(u, {name: i}, -1, r, -1, t), a.shapeList.push(u), n.addShape(u)
            }

            function E(e) {
                n.delShape(e.id);
                var t = [];
                for (var r = 0, i = a.shapeList.length; r < i; r++) a.shapeList[r].id != e.id && t.push(a.shapeList[r]);
                a.shapeList = t
            }

            function S(e, t) {
                if (!a.isDrop || !e.target) return;
                var r = e.target, i = e.dragged;
                v(r, i), n.modShape(r.id, r), t.dragIn = !0, a.isDrop = !1;
                return
            }

            function x(e, t) {
                var n = e.target;
                a.isDragend ? t.dragIn && (E(n), t.needRefresh = !0) : t.dragIn || (n.style.x = u.getX(e.event), n.style.y = u.getY(e.event), w(n), t.needRefresh = !0), a.isDragend = !1;
                return
            }

            var r = e("../component/base");
            r.call(this, n);
            var i = e("./calculableBase");
            i.call(this, n);
            var s = e("../config"), o = e("../util/ecData"), u = e("zrender/tool/event"), a = this;
            a.type = s.CHART_TYPE_ISLAND;
            var f, l = a.getZlevelBase(), c, h, p = n.getHeight(), d = n.getWidth();
            a.shapeHandler.onmousewheel = function (e) {
                var t = e.target, r = e.event, i = u.getDelta(r);
                i = i > 0 ? -1 : 1, t.style.r -= i, t.style.r = t.style.r < 5 ? 5 : t.style.r;
                var s = o.get(t, "value"), a = s * f.island.calculateStep;
                a > 1 ? s = Math.round(s - a * i) : s = (s - a * i).toFixed(2) - 0;
                var l = o.get(t, "name");
                t.style.text = l + ":" + s, o.set(t, "value", s), o.set(t, "name", l), n.modShape(t.id, t), n.refresh(), u.stop(r)
            }, a.refresh = m, a.render = g, a.resize = b, a.getOption = y, a.add = w, a.del = E, a.ondrop = S, a.ondragend = x
        }

        return e("../chart").define("island", t), t
    }), r("echarts/component", [], function () {
        var e = {}, t = {};
        return e.define = function (n, r) {
            return t[n] = r, e
        }, e.get = function (e) {
            return t[e]
        }, e
    }), r("echarts/component/title", ["require", "./base", "../config", "zrender/tool/area", "zrender/tool/util", "../component"], function (e) {
        function t(t, n, r) {
            function h() {
                c = v(), d(), p();
                for (var e = 0, t = a.shapeList.length; e < t; e++) a.shapeList[e].id = n.newShapeId(a.type), n.addShape(a.shapeList[e])
            }

            function p() {
                var e = f.text, t = f.link, n = f.subtext, r = f.sublink, i = a.getFont(f.textStyle),
                    s = a.getFont(f.subtextStyle), o = c.x, u = c.y, h = c.width, p = c.height, d = {
                        shape: "text",
                        zlevel: l,
                        style: {y: u, color: f.textStyle.color, text: e, textFont: i, textBaseline: "top"},
                        hoverable: !1
                    };
                t && (d.hoverable = !0, d.clickable = !0, d.onclick = function () {
                    window.open(t)
                });
                var v = {
                    shape: "text",
                    zlevel: l,
                    style: {y: u + p, color: f.subtextStyle.color, text: n, textFont: s, textBaseline: "bottom"},
                    hoverable: !1
                };
                r && (v.hoverable = !0, v.clickable = !0, v.onclick = function () {
                    window.open(r)
                });
                switch (f.x) {
                    case"center":
                        d.style.x = v.style.x = o + h / 2, d.style.textAlign = v.style.textAlign = "center";
                        break;
                    case"left":
                        d.style.x = v.style.x = o, d.style.textAlign = v.style.textAlign = "left";
                        break;
                    case"right":
                        d.style.x = v.style.x = o + h, d.style.textAlign = v.style.textAlign = "right";
                        break;
                    default:
                        o = f.x - 0, o = isNaN(o) ? 0 : o, d.style.x = v.style.x = o
                }
                f.textAlign && (d.style.textAlign = v.style.textAlign = f.textAlign), a.shapeList.push(d), n !== "" && a.shapeList.push(v)
            }

            function d() {
                var e = f.padding[0], t = f.padding[1], n = f.padding[2], r = f.padding[3];
                a.shapeList.push({
                    shape: "rectangle",
                    zlevel: l,
                    hoverable: !1,
                    style: {
                        x: c.x - r,
                        y: c.y - e,
                        width: c.width + r + t,
                        height: c.height + e + n,
                        brushType: f.borderWidth === 0 ? "fill" : "both",
                        color: f.backgroundColor,
                        strokeColor: f.borderColor,
                        lineWidth: f.borderWidth
                    }
                })
            }

            function v() {
                var e = f.text, t = f.subtext, r = a.getFont(f.textStyle), i = a.getFont(f.subtextStyle),
                    s = Math.max(o.getTextWidth(e, r), o.getTextWidth(t, i)),
                    u = o.getTextWidth("国", r) + (t === "" ? 0 : f.itemGap + o.getTextWidth("国", i)), l,
                    c = n.getWidth();
                switch (f.x) {
                    case"center":
                        l = Math.floor((c - s) / 2);
                        break;
                    case"left":
                        l = f.padding[3] + f.borderWidth;
                        break;
                    case"right":
                        l = c - s - f.padding[1] - f.borderWidth;
                        break;
                    default:
                        l = f.x - 0, l = isNaN(l) ? 0 : l
                }
                var h, p = n.getHeight();
                switch (f.y) {
                    case"top":
                        h = f.padding[0] + f.borderWidth;
                        break;
                    case"bottom":
                        h = p - u - f.padding[2] - f.borderWidth;
                        break;
                    case"center":
                        h = Math.floor((p - u) / 2);
                        break;
                    default:
                        h = f.y - 0, h = isNaN(h) ? 0 : h
                }
                return {x: l, y: h, width: s, height: u}
            }

            function m(e) {
                g(e)
            }

            function g(e) {
                e && (r = e, r.title = a.reformOption(r.title), r.title.padding = a.reformCssArray(r.title.padding), f = r.title, f.textStyle = u.merge(f.textStyle, s.textStyle, {
                    overwrite: !1,
                    recursive: !1
                }), f.subtextStyle = u.merge(f.subtextStyle, s.textStyle, {
                    overwrite: !1,
                    recursive: !1
                }), a.clear(), h())
            }

            function y() {
                a.clear(), h()
            }

            var i = e("./base");
            i.call(this, n);
            var s = e("../config"), o = e("zrender/tool/area"), u = e("zrender/tool/util"), a = this;
            a.type = s.COMPONENT_TYPE_TITLE;
            var f, l = a.getZlevelBase(), c = {};
            a.init = m, a.refresh = g, a.resize = y, m(r)
        }

        return e("../component").define("title", t), t
    }), r("echarts/component/categoryAxis", ["require", "./base", "../config", "zrender/tool/util", "zrender/tool/area", "../component"], function (e) {
        function t(t, n, r, i) {
            function d() {
                var e = u.clone(r.data), t = r.axisLabel.formatter, n;
                for (var i = 0, s = e.length; i < s; i++) n = e[i].formatter || t, n && (typeof n == "function" ? typeof e[i].value != "undefined" ? e[i].value = n(e[i].value) : e[i] = n(e[i]) : typeof n == "string" && (typeof e[i].value != "undefined" ? e[i].value = n.replace("{value}", e[i].value) : e[i] = n.replace("{value}", e[i])));
                return e
            }

            function v() {
                var e = r.axisLabel.interval;
                if (e == "auto") {
                    var t = r.axisLabel.textStyle.fontSize, n = f.getFont(r.axisLabel.textStyle), i = r.data,
                        s = r.data.length;
                    if (r.position == "bottom" || r.position == "top") if (s > 3) {
                        var o = T(), l = !1, c, h;
                        e = 0;
                        while (!l && e < s) {
                            e++, l = !0, c = o * e - 10;
                            for (var d = 0; d < s; d += e) {
                                r.axisLabel.rotate !== 0 ? h = t : i[d].textStyle ? h = a.getTextWidth(p[d].value || p[d], f.getFont(u.merge(i[d].textStyle, r.axisLabel.textStyle, {
                                    overwrite: !1,
                                    recursive: !0
                                }))) : h = a.getTextWidth(p[d].value || p[d], n);
                                if (c < h) {
                                    l = !1;
                                    break
                                }
                            }
                        }
                    } else e = 1; else if (s > 3) {
                        var o = T();
                        e = 1;
                        while (o * e - 6 < t && e < s) e++
                    } else e = 1
                } else e += 1;
                return e
            }

            function m() {
                p = d(), h = v(), r.splitArea.show && E(), r.splitLine.show && w(), r.axisLine.show && g(), r.axisTick.show && y(), r.axisLabel.show && b();
                for (var e = 0, t = f.shapeList.length; e < t; e++) f.shapeList[e].id = n.newShapeId(f.type), n.addShape(f.shapeList[e])
            }

            function g() {
                var e = {shape: "line", zlevel: c + 1, hoverable: !1};
                switch (r.position) {
                    case"left":
                        e.style = {xStart: l.getX(), yStart: l.getY(), xEnd: l.getX(), yEnd: l.getYend()};
                        break;
                    case"right":
                        e.style = {xStart: l.getXend(), yStart: l.getY(), xEnd: l.getXend(), yEnd: l.getYend()};
                        break;
                    case"bottom":
                        e.style = {xStart: l.getX(), yStart: l.getYend(), xEnd: l.getXend(), yEnd: l.getYend()};
                        break;
                    case"top":
                        e.style = {xStart: l.getX(), yStart: l.getY(), xEnd: l.getXend(), yEnd: l.getY()}
                }
                e.style.strokeColor = r.axisLine.lineStyle.color;
                var t = r.axisLine.lineStyle.width;
                e.style.lineWidth = t, r.position == "left" || r.position == "right" ? e.style.xStart = e.style.xEnd = f.subPixelOptimize(e.style.xEnd, t) : e.style.yStart = e.style.yEnd = f.subPixelOptimize(e.style.yEnd, t), e.style.lineType = r.axisLine.lineStyle.type, f.shapeList.push(e)
            }

            function y() {
                var e, t = r.data, n = r.data.length, i = r.axisTick.length, s = r.axisTick.lineStyle.color,
                    o = r.axisTick.lineStyle.width;
                if (r.position == "bottom" || r.position == "top") {
                    var u = r.position == "bottom" ? l.getYend() : l.getY() - i;
                    for (var a = 0; a < n; a++) e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            xStart: N(t[a].value || t[a]),
                            yStart: u,
                            xEnd: N(t[a].value || t[a]),
                            yEnd: u + i,
                            strokeColor: s,
                            lineWidth: o
                        }
                    }, f.shapeList.push(e)
                } else {
                    var h = r.position == "left" ? l.getX() - i : l.getXend();
                    for (var a = 0; a < n; a++) e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            xStart: h,
                            yStart: N(t[a].value || t[a]),
                            xEnd: h + i,
                            yEnd: N(t[a].value || t[a]),
                            strokeColor: s,
                            lineWidth: o
                        }
                    }, f.shapeList.push(e)
                }
            }

            function b() {
                var e, t = r.data, n = r.data.length, i = r.axisLabel.rotate, s = r.axisLabel.margin,
                    o = r.axisLabel.textStyle, a;
                if (r.position == "bottom" || r.position == "top") {
                    var d, v;
                    r.position == "bottom" ? (d = l.getYend() + s, v = "top") : (d = l.getY() - s, v = "bottom");
                    for (var m = 0; m < n; m += h) a = u.merge(t[m].textStyle || {}, o, {overwrite: !1}), e = {
                        shape: "text",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            x: N(t[m].value || t[m]),
                            y: d,
                            color: a.color,
                            text: p[m].value || p[m],
                            textFont: f.getFont(a),
                            textAlign: "center",
                            textBaseline: v
                        }
                    }, i && (e.style.textAlign = i > 0 ? r.position == "bottom" ? "right" : "left" : r.position == "bottom" ? "left" : "right", e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
                } else {
                    var g, y;
                    r.position == "left" ? (g = l.getX() - s, y = "right") : (g = l.getXend() + s, y = "left");
                    for (var m = 0; m < n; m += h) a = u.merge(t[m].textStyle || {}, o, {overwrite: !1}), e = {
                        shape: "text",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            x: g,
                            y: N(t[m].value || t[m]),
                            color: a.color,
                            text: p[m].value || p[m],
                            textFont: f.getFont(a),
                            textAlign: y,
                            textBaseline: "middle"
                        }
                    }, i && (e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
                }
            }

            function w() {
                var e, t = r.data, n = r.data.length, i = r.splitLine.lineStyle.type, s = r.splitLine.lineStyle.width,
                    o = r.splitLine.lineStyle.color;
                o = o instanceof Array ? o : [o];
                var u = o.length;
                if (r.position == "bottom" || r.position == "top") {
                    var a = l.getY(), p = l.getYend(), d;
                    for (var v = 0; v < n; v += h) d = f.subPixelOptimize(N(t[v].value || t[v]), s), e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            xStart: d,
                            yStart: a,
                            xEnd: d,
                            yEnd: p,
                            strokeColor: o[v / h % u],
                            lineType: i,
                            lineWidth: s
                        }
                    }, f.shapeList.push(e)
                } else {
                    var m = l.getX(), g = l.getXend(), y;
                    for (var v = 0; v < n; v += h) y = f.subPixelOptimize(N(t[v].value || t[v]), s), e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            xStart: m,
                            yStart: y,
                            xEnd: g,
                            yEnd: y,
                            strokeColor: o[v / h % u],
                            linetype: i,
                            lineWidth: s
                        }
                    }, f.shapeList.push(e)
                }
            }

            function E() {
                var e, t = r.splitArea.areaStyle.color;
                t = t instanceof Array ? t : [t];
                var n = t.length, i = r.data, s = r.data.length;
                if (r.position == "bottom" || r.position == "top") {
                    var o = l.getY(), u = l.getHeight(), a = l.getX(), p;
                    for (var d = 0; d <= s; d += h) p = d < s ? N(i[d].value || i[d]) : l.getXend(), e = {
                        shape: "rectangle",
                        zlevel: c,
                        hoverable: !1,
                        style: {x: a, y: o, width: p - a, height: u, color: t[d / h % n]}
                    }, f.shapeList.push(e), a = p
                } else {
                    var v = l.getX(), m = l.getWidth(), g = l.getYend(), y;
                    for (var d = 0; d <= s; d += h) y = d < s ? N(i[d].value || i[d]) : l.getY(), e = {
                        shape: "rectangle",
                        zlevel: c,
                        hoverable: !1,
                        style: {x: v, y: y, width: m, height: g - y, color: t[d / h % n]}
                    }, f.shapeList.push(e), g = y
                }
            }

            function S(e, t) {
                if (e.data.length < 1) return;
                l = t, x(e)
            }

            function x(e) {
                e && (r = f.reformOption(e), r.axisLabel.textStyle = u.merge(r.axisLabel.textStyle || {}, o.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), r.axisLabel.textStyle = u.merge(r.axisLabel.textStyle || {}, o.textStyle, {
                    overwrite: !1,
                    recursive: !0
                })), f.clear(), m()
            }

            function T() {
                var e = r.data.length, t = r.position == "bottom" || r.position == "top" ? l.getWidth() : l.getHeight();
                return r.boundaryGap ? t / (e + 1) : t / (e > 1 ? e - 1 : 1)
            }

            function N(e) {
                var t = r.data, n = t.length, i = T(), s = r.boundaryGap ? i : 0;
                for (var o = 0; o < n; o++) {
                    if (t[o] == e || typeof t[o].value != "undefined" && t[o].value == e) return r.position == "bottom" || r.position == "top" ? s = l.getX() + s : s = l.getYend() - s, o === 0 || o == n - 1 ? s : Math.floor(s);
                    s += i
                }
            }

            function C(e) {
                if (e < 0) return r.position == "bottom" || r.position == "top" ? l.getX() : l.getYend();
                if (e >= r.data.length) return r.position == "bottom" || r.position == "top" ? l.getXend() : l.getY();
                var t = T(), n = r.boundaryGap ? t : 0;
                return n += e * t, r.position == "bottom" || r.position == "top" ? n = l.getX() + n : n = l.getYend() - n, e === 0 || e == r.data.length - 1 ? n : Math.floor(n)
            }

            function k(e) {
                return r.data[e]
            }

            function L(e) {
                return e % h === 0
            }

            function A() {
                return r.position
            }

            var s = e("./base");
            s.call(this, n);
            var o = e("../config"), u = e("zrender/tool/util"), a = e("zrender/tool/area"), f = this;
            f.type = o.COMPONENT_TYPE_AXIS_CATEGORY;
            var l = i.grid, c = f.getZlevelBase(), h, p;
            f.init = S, f.refresh = x, f.getGap = T, f.getCoord = N, f.getCoordByIndex = C, f.getNameByIndex = k, f.isMainAxis = L, f.getPosition = A, S(r, l)
        }

        return e("../component").define("categoryAxis", t), t
    }), r("echarts/component/valueAxis", ["require", "./base", "../config", "zrender/tool/util", "../component"], function (e) {
        function t(t, n, r, i, s) {
            function g() {
                d = !1, x();
                if (!d) return;
                r.splitArea.show && S(), r.splitLine.show && E(), r.axisLine.show && y(), r.axisTick.show && b(), r.axisLabel.show && w();
                for (var e = 0, t = f.shapeList.length; e < t; e++) f.shapeList[e].id = n.newShapeId(f.type), n.addShape(f.shapeList[e])
            }

            function y() {
                var e = {shape: "line", zlevel: c + 1, hoverable: !1};
                switch (r.position) {
                    case"left":
                        e.style = {xStart: l.getX(), yStart: l.getYend(), xEnd: l.getX(), yEnd: l.getY()};
                        break;
                    case"right":
                        e.style = {xStart: l.getXend(), yStart: l.getYend(), xEnd: l.getXend(), yEnd: l.getY()};
                        break;
                    case"bottom":
                        e.style = {xStart: l.getX(), yStart: l.getYend(), xEnd: l.getXend(), yEnd: l.getYend()};
                        break;
                    case"top":
                        e.style = {xStart: l.getX(), yStart: l.getY(), xEnd: l.getXend(), yEnd: l.getY()}
                }
                r.name !== "" && (e.style.text = r.name, e.style.textPosition = r.nameLocation), e.style.strokeColor = r.axisLine.lineStyle.color;
                var t = r.axisLine.lineStyle.width;
                e.style.lineWidth = t, r.position == "left" || r.position == "right" ? e.style.xStart = e.style.xEnd = f.subPixelOptimize(e.style.xEnd, t) : e.style.yStart = e.style.yEnd = f.subPixelOptimize(e.style.yEnd, t), e.style.lineType = r.axisLine.lineStyle.type, f.shapeList.push(e)
            }

            function b() {
                var e, t = v, n = v.length, i = r.axisTick.length, s = r.axisTick.lineStyle.color,
                    o = r.axisTick.lineStyle.width;
                if (r.position == "bottom" || r.position == "top") {
                    var u = r.position == "bottom" ? l.getYend() : l.getY() - i;
                    for (var a = 0; a < n; a++) e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {xStart: A(t[a]), yStart: u, xEnd: A(t[a]), yEnd: u + i, strokeColor: s, lineWidth: o}
                    }, f.shapeList.push(e)
                } else {
                    var h = r.position == "left" ? l.getX() - i : l.getXend();
                    for (var a = 0; a < n; a++) e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {xStart: h, yStart: A(t[a]), xEnd: h + i, yEnd: A(t[a]), strokeColor: s, lineWidth: o}
                    }, f.shapeList.push(e)
                }
            }

            function w() {
                var e, t = v, n = v.length, i = r.axisLabel.rotate, s = r.axisLabel.margin, o = r.axisLabel.textStyle;
                if (r.position == "bottom" || r.position == "top") {
                    var u, a;
                    r.position == "bottom" ? (u = l.getYend() + s, a = "top") : (u = l.getY() - s, a = "bottom");
                    for (var h = 0; h < n; h++) e = {
                        shape: "text",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            x: A(t[h]),
                            y: u,
                            color: o.color,
                            text: m[h],
                            textFont: f.getFont(o),
                            textAlign: h === 0 && r.name !== "" ? "left" : h == n - 1 && r.name !== "" ? "right" : "center",
                            textBaseline: a
                        }
                    }, i && (e.style.textAlign = i > 0 ? r.position == "bottom" ? "right" : "left" : r.position == "bottom" ? "left" : "right", e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
                } else {
                    var p, d;
                    r.position == "left" ? (p = l.getX() - s, d = "right") : (p = l.getXend() + s, d = "left");
                    for (var h = 0; h < n; h++) e = {
                        shape: "text",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            x: p,
                            y: A(t[h]),
                            color: o.color,
                            text: m[h],
                            textFont: f.getFont(o),
                            textAlign: d,
                            textBaseline: h === 0 && r.name !== "" ? "bottom" : h == n - 1 && r.name !== "" ? "top" : "middle"
                        }
                    }, i && (e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), f.shapeList.push(e)
                }
            }

            function E() {
                var e, t = v, n = v.length, i = r.splitLine.lineStyle.type, s = r.splitLine.lineStyle.width,
                    o = r.splitLine.lineStyle.color;
                o = o instanceof Array ? o : [o];
                var u = o.length;
                if (r.position == "bottom" || r.position == "top") {
                    var a = l.getY(), h = l.getYend(), p;
                    for (var d = 0; d < n; d++) p = f.subPixelOptimize(A(t[d]), s), e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            xStart: p,
                            yStart: a,
                            xEnd: p,
                            yEnd: h,
                            strokeColor: o[d % u],
                            lineType: i,
                            lineWidth: s
                        }
                    }, f.shapeList.push(e)
                } else {
                    var m = l.getX(), g = l.getXend(), y;
                    for (var d = 0; d < n; d++) y = f.subPixelOptimize(A(t[d]), s), e = {
                        shape: "line",
                        zlevel: c,
                        hoverable: !1,
                        style: {
                            xStart: m,
                            yStart: y,
                            xEnd: g,
                            yEnd: y,
                            strokeColor: o[d % u],
                            lineType: i,
                            lineWidth: s
                        }
                    }, f.shapeList.push(e)
                }
            }

            function S() {
                var e, t = r.splitArea.areaStyle.color;
                if (t instanceof Array) {
                    var n = t.length, i = v, s = v.length;
                    if (r.position == "bottom" || r.position == "top") {
                        var o = l.getY(), u = l.getHeight(), a = l.getX(), h;
                        for (var p = 0; p <= s; p++) h = p < s ? A(i[p]) : l.getXend(), e = {
                            shape: "rectangle",
                            zlevel: c,
                            hoverable: !1,
                            style: {x: a, y: o, width: h - a, height: u, color: t[p % n]}
                        }, f.shapeList.push(e), a = h
                    } else {
                        var d = l.getX(), m = l.getWidth(), g = l.getYend(), y;
                        for (var p = 0; p <= s; p++) y = p < s ? A(i[p]) : l.getY(), e = {
                            shape: "rectangle",
                            zlevel: c,
                            hoverable: !1,
                            style: {x: d, y: y, width: m, height: g - y, color: t[p % n]}
                        }, f.shapeList.push(e), g = y
                    }
                } else e = {
                    shape: "rectangle",
                    zlevel: c,
                    hoverable: !1,
                    style: {x: l.getX(), y: l.getY(), width: l.getWidth(), height: l.getHeight(), color: t}
                }, f.shapeList.push(e)
            }

            function x() {
                if (isNaN(r.min) || isNaN(r.max)) {
                    var e, t = {}, n, o, a, f = i.legend;
                    for (var l = 0, c = s.length; l < c; l++) {
                        if (s[l].type != u.CHART_TYPE_LINE && s[l].type != u.CHART_TYPE_BAR && s[l].type != u.CHART_TYPE_SCATTER && s[l].type != u.CHART_TYPE_K) continue;
                        if (f && !f.isSelected(s[l].name)) continue;
                        o = s[l].xAxisIndex || 0, a = s[l].yAxisIndex || 0;
                        if (r.xAxisIndex != o && r.yAxisIndex != a) continue;
                        if (!s[l].stack) {
                            var v = s[l].name || "";
                            t[v] = [], e = s[l].data;
                            for (var m = 0, g = e.length; m < g; m++) n = typeof e[m].value != "undefined" ? e[m].value : e[m], s[l].type == u.CHART_TYPE_SCATTER ? (r.xAxisIndex != -1 && t[v].push(n[0]), r.yAxisIndex != -1 && t[v].push(n[1])) : s[l].type == u.CHART_TYPE_K ? (t[v].push(n[0]), t[v].push(n[1]), t[v].push(n[2]), t[v].push(n[3])) : t[v].push(n)
                        } else {
                            var y = "__Magic_Key_Positive__" + s[l].stack, b = "__Magic_Key_Negative__" + s[l].stack;
                            t[y] = t[y] || [], t[b] = t[b] || [], e = s[l].data;
                            for (var m = 0, g = e.length; m < g; m++) {
                                n = typeof e[m].value != "undefined" ? e[m].value : e[m];
                                if (n == "-") continue;
                                n -= 0, n >= 0 ? typeof t[y][m] != "undefined" ? t[y][m] += n : t[y][m] = n : typeof t[b][m] != "undefined" ? t[b][m] += n : t[b][m] = n
                            }
                        }
                    }
                    for (var l in t) {
                        e = t[l];
                        for (var m = 0, g = e.length; m < g; m++) if (!isNaN(e[m])) {
                            d = !0, h = e[m], p = e[m];
                            break
                        }
                        if (d) break
                    }
                    for (var l in t) {
                        e = t[l];
                        for (var m = 0, g = e.length; m < g; m++) isNaN(e[m]) || (h = Math.min(h, e[m]), p = Math.max(p, e[m]))
                    }
                } else d = !0;
                h = isNaN(r.min) ? h - Math.abs(h * r.boundaryGap[0]) : r.min, p = isNaN(r.max) ? p + Math.abs(p * r.boundaryGap[1]) : r.max, h == p && (p === 0 ? p = r.power > 0 ? r.power : 1 : p > 0 ? h = p / r.splitNumber : p /= r.splitNumber), T(r.scale)
            }

            function T(e) {
                var t = r.splitNumber, n = r.precision, i, s;
                n === 0 ? s = r.power : (s = Math.pow(10, n), h *= s, p *= s, s = r.power);
                var o;
                if (h >= 0 && p >= 0) {
                    e || (h = 0);
                    while (p / s < t && s != 1) s /= 10;
                    o = p - h, i = Math.ceil(o / t / s) * s, e && (n === 0 && (h = Math.floor(h / i) * i), h + i * t < p && (i = Math.ceil((p - h) / t / s) * s)), p = h + i * t
                } else if (h <= 0 && p <= 0) {
                    e || (p = 0), s = -s;
                    while (h / s < t && s != -1) s /= 10;
                    o = h - p, i = -Math.ceil(o / t / s) * s, e && (n === 0 && (p = Math.ceil(p / i) * i), p - i * t > h && (i = Math.ceil((h - p) / t / s) * s)), h = -i * t + p
                } else {
                    o = p - h;
                    while (o / s < t && s != 1) s /= 10;
                    var u = Math.round(p / o * t);
                    u -= u == t ? 1 : 0, u += u === 0 ? 1 : 0, i = Math.ceil(Math.max(p / u, h / (u - t)) / s) * s, p = i * u, h = i * (u - t)
                }
                v = [];
                for (var a = 0; a <= t; a++) v.push(h + i * a);
                if (n !== 0) {
                    s = Math.pow(10, n), h = (h / s).toFixed(n) - 0, p = (p / s).toFixed(n) - 0;
                    for (var a = 0; a <= t; a++) v[a] = (v[a] / s).toFixed(n)
                }
                N()
            }

            function N() {
                m = [];
                var e = r.axisLabel.formatter;
                if (e) for (var t = 0, n = v.length; t < n; t++) typeof e == "function" ? m.push(e(v[t])) : typeof e == "string" && m.push(e.replace("{value}", v[t])); else m = v
            }

            function C() {
                return x(), {min: h, max: p}
            }

            function k(e, t, n) {
                if (!n || n.length === 0) return;
                l = t, L(e, n)
            }

            function L(e, t) {
                e && (r = f.reformOption(e), r.axisLabel.textStyle = a.merge(r.axisLabel.textStyle || {}, u.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), r.axisLabel.textStyle = a.merge(r.axisLabel.textStyle || {}, u.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), s = t), n && (f.clear(), g())
            }

            function A(e) {
                e = e < h ? h : e, e = e > p ? p : e;
                var t = p - h, n, i;
                return r.position == "left" || r.position == "right" ? (n = l.getHeight(), i = l.getYend() - (e - h) / t * n) : (n = l.getWidth(), i = (e - h) / t * n + l.getX()), e == h || e == p ? i : Math.floor(i)
            }

            function O() {
                return r.position
            }

            var o = e("./base");
            o.call(this, n);
            var u = e("../config"), a = e("zrender/tool/util"), f = this;
            f.type = u.COMPONENT_TYPE_AXIS_VALUE;
            var l = i.grid, c = f.getZlevelBase(), h, p, d, v, m;
            f.init = k, f.refresh = L, f.getExtremum = C, f.getCoord = A, f.getPosition = O, k(r, l, s)
        }

        return e("../component").define("valueAxis", t), t
    }), r("echarts/component/axis", ["require", "./base", "../config", "./categoryAxis", "./valueAxis", "../component"], function (e) {
        function t(t, n, r, i, s) {
            function l(e) {
                !e || e instanceof Array && e.length === 0 ? e = [{type: u.COMPONENT_TYPE_AXIS_VALUE}] : e instanceof Array || (e = [e]), e.length > 2 && (e = [e[0], e[1]]);
                if (s == "xAxis") {
                    if (!e[0].position || e[0].position != "bottom" && e[0].position != "top") e[0].position = "bottom";
                    e.length > 1 && (e[1].position = e[0].position == "bottom" ? "top" : "bottom");
                    for (var t = 0, n = e.length; t < n; t++) e[t].type = e[t].type || "category", e[t].xAxisIndex = t, e[t].yAxisIndex = -1
                } else {
                    if (!e[0].position || e[0].position != "left" && e[0].position != "right") e[0].position = "left";
                    e.length > 1 && (e[1].position = e[0].position == "left" ? "right" : "left");
                    for (var t = 0, n = e.length; t < n; t++) e[t].type = e[t].type || "value", e[t].xAxisIndex = -1, e[t].yAxisIndex = t
                }
                return e
            }

            function c(o, u, c) {
                i = u, s = c, a.clear();
                var h;
                s == "xAxis" ? (r.xAxis = a.reformOption(o.xAxis), h = r.xAxis) : (r.yAxis = l(o.yAxis), h = r.yAxis);
                var p = e("./categoryAxis"), d = e("./valueAxis");
                for (var v = 0, m = h.length; v < m; v++) f.push(h[v].type == "category" ? new p(t, n, h[v], i) : new d(t, n, h[v], i, r.series))
            }

            function h(e) {
                var t, n;
                e && (s == "xAxis" ? (r.xAxis = a.reformOption(e.xAxis), t = r.xAxis) : (r.yAxis = l(e.yAxis), t = r.yAxis), n = e.series);
                for (var i = 0, o = f.length; i < o; i++) f[i].refresh && f[i].refresh(t ? t[i] : !1, n)
            }

            function p(e) {
                return f[e]
            }

            function d() {
                for (var e = 0, t = f.length; e < t; e++) f[e].dispose && f[e].dispose();
                f = []
            }

            var o = e("./base");
            o.call(this, n);
            var u = e("../config"), a = this;
            a.type = u.COMPONENT_TYPE_AXIS;
            var f = [];
            a.clear = d, a.reformOption = l, a.init = c, a.refresh = h, a.getAxis = p, c(r, i, s)
        }

        return e("../component").define("axis", t), t
    }), r("echarts/component/grid", ["require", "./base", "../config", "../component"], function (e) {
        function t(t, n, r) {
            function d(e) {
                r = e, r.grid = o.reformOption(r.grid);
                var t = r.grid;
                a = t.x, f = t.y;
                var i = t.x2, s = t.y2;
                h = n.getWidth(), p = n.getHeight(), typeof t.width == "undefined" ? l = h - a - i : l = t.width, typeof t.height == "undefined" ? c = p - f - s : c = t.height, a = o.subPixelOptimize(a, t.borderWidth), f = o.subPixelOptimize(f, t.borderWidth), o.shapeList.push({
                    shape: "rectangle",
                    id: n.newShapeId("grid"),
                    zlevel: u,
                    hoverable: !1,
                    style: {
                        x: a,
                        y: f,
                        width: l,
                        height: c,
                        brushType: t.borderWidth > 0 ? "both" : "fill",
                        color: t.backgroundColor,
                        strokeColor: t.borderColor,
                        lineWidth: t.borderWidth
                    }
                }), n.addShape(o.shapeList[0])
            }

            function v() {
                return a
            }

            function m() {
                return f
            }

            function g() {
                return l
            }

            function y() {
                return c
            }

            function b() {
                return a + l
            }

            function w() {
                return f + c
            }

            function E() {
                return {x: a, y: f, width: l, height: c}
            }

            function S(e) {
                if (h != n.getWidth() || p != n.getHeight() || e) o.clear(), d(e || r)
            }

            var i = e("./base");
            i.call(this, n);
            var s = e("../config"), o = this;
            o.type = s.COMPONENT_TYPE_GRID;
            var u = o.getZlevelBase(), a, f, l, c, h, p;
            o.init = d, o.getX = v, o.getY = m, o.getWidth = g, o.getHeight = y, o.getXend = b, o.getYend = w, o.getArea = E, o.refresh = S, d(r)
        }

        return e("../component").define("grid", t), t
    }), r("echarts/component/dataZoom", ["require", "./base", "../config", "../component", "zrender/tool/util", "../component"], function (e) {
        function t(t, n, r, i) {
            function w() {
                N(), C(), k(), L();
                for (var e = 0, t = u.shapeList.length; e < t; e++) u.shapeList[e].id = n.newShapeId(u.type), n.addShape(u.shapeList[e]);
                D()
            }

            function E() {
                var e, t, r, s, o = i.grid;
                return f.orient == "horizontal" ? (r = f.width || o.getWidth(), s = f.height || l, e = typeof f.x != "undefined" ? f.x : o.getX(), t = typeof f.y != "undefined" ? f.y : n.getHeight() - s) : (r = f.width || l, s = f.height || o.getHeight(), e = typeof f.x != "undefined" ? f.x : 0, t = typeof f.y != "undefined" ? f.y : o.getY()), {
                    x: e,
                    y: t,
                    width: r,
                    height: s
                }
            }

            function S() {
                var e = r.series, t = r.xAxis;
                t && !(t instanceof Array) && (t = [t], r.xAxis = t);
                var n = r.yAxis;
                n && !(n instanceof Array) && (n = [n], r.yAxis = n);
                var i = [], s, u, a = f.xAxisIndex;
                if (t && typeof a == "undefined") {
                    s = [];
                    for (var l = 0, c = t.length; l < c; l++) (t[l].type == "category" || typeof t[l].type == "undefined") && s.push(l)
                } else a instanceof Array ? s = a : typeof a != "undefined" ? s = [a] : s = [];
                a = f.yAxisIndex;
                if (n && typeof a == "undefined") {
                    u = [];
                    for (var l = 0, c = n.length; l < c; l++) n[l].type == "category" && u.push(l)
                } else a instanceof Array ? u = a : typeof a != "undefined" ? u = [a] : u = [];
                for (var l = 0, c = e.length; l < c; l++) {
                    if (e[l].type != o.CHART_TYPE_LINE && e[l].type != o.CHART_TYPE_BAR && e[l].type != o.CHART_TYPE_SCATTER && e[l].type != o.CHART_TYPE_K) continue;
                    for (var p = 0, d = s.length; p < d; p++) if (s[p] == (e[l].xAxisIndex || 0)) {
                        i.push(l);
                        break
                    }
                    for (var p = 0, d = u.length; p < d; p++) if (u[p] == (e[l].yAxisIndex || 0)) {
                        i.push(l);
                        break
                    }
                    e[l].type == o.CHART_TYPE_SCATTER && typeof f.xAxisIndex == "undefined" && typeof f.yAxisIndex == "undefined" && i.push(l)
                }
                var v = typeof f.start != "undefined" && f.start >= 0 && f.start <= 100 ? f.start : 0,
                    m = typeof f.end != "undefined" && f.end >= 0 && f.end <= 100 ? f.end : 100;
                v > m && (v += m, m = v - m, v -= m);
                var g = Math.round((m - v) / 100 * (f.orient == "horizontal" ? h.width : h.height));
                return {start: v, end: m, start2: 0, end2: 100, size: g, xAxisIndex: s, yAxisIndex: u, seriesIndex: i}
            }

            function x() {
                b = {xAxis: {}, yAxis: {}, series: {}};
                var e = r.xAxis, t = p.xAxisIndex;
                for (var n = 0, i = t.length; n < i; n++) b.xAxis[t[n]] = e[t[n]].data;
                var s = r.yAxis, u = p.yAxisIndex;
                for (var n = 0, i = u.length; n < i; n++) b.yAxis[u[n]] = s[u[n]].data;
                var a = r.series, f = p.seriesIndex, l;
                for (var n = 0, i = f.length; n < i; n++) l = a[f[n]], b.series[f[n]] = l.data, l.type == o.CHART_TYPE_SCATTER && T(f[n])
            }

            function T(t) {
                p.scatterMap = p.scatterMap || {}, p.scatterMap[t] = p.scatterMap[t] || {};
                var n = e("../component"), s = e("zrender/tool/util"), o = n.get("axis"), u = s.clone(r.xAxis);
                u instanceof Array ? (u[0].type = "value", u[1] && (u[1].type = "value")) : u.type = "value";
                var a = new o(null, !1, {xAxis: u, series: r.series}, i, "xAxis"), f = r.series[t].xAxisIndex || 0;
                p.scatterMap[t].x = a.getAxis(f).getExtremum(), a.dispose(), u = s.clone(r.yAxis), u instanceof Array ? (u[0].type = "value", u[1] && (u[1].type = "value")) : u.type = "value", a = new o(null, !1, {
                    yAxis: u,
                    series: r.series
                }, i, "yAxis"), f = r.series[t].yAxisIndex || 0, p.scatterMap[t].y = a.getAxis(f).getExtremum(), a.dispose()
            }

            function N() {
                u.shapeList.push({
                    shape: "rectangle",
                    zlevel: a,
                    hoverable: !1,
                    style: {x: h.x, y: h.y, width: h.width, height: h.height, color: f.backgroundColor}
                })
            }

            function C() {
                u.shapeList.push({
                    shape: "rectangle",
                    zlevel: a,
                    hoverable: !1,
                    style: {x: h.x, y: h.y, width: h.width, height: h.height, color: f.backgroundColor}
                });
                var e = 0, t = r.xAxis, n = p.xAxisIndex;
                for (var i = 0, s = n.length; i < s; i++) e = Math.max(e, t[n[i]].data.length);
                var l = r.yAxis, c = p.yAxisIndex;
                for (var i = 0, s = c.length; i < s; i++) e = Math.max(e, l[c[i]].data.length);
                var d = r.series[p.seriesIndex[0]].data, v = Number.MIN_VALUE, m = Number.MAX_VALUE, g;
                for (var i = 0, s = d.length; i < s; i++) g = typeof d[i] != "undefined" ? typeof d[i].value != "undefined" ? d[i].value : d[i] : 0, r.series[p.seriesIndex[0]].type == o.CHART_TYPE_K && (g = g[1]), isNaN(g) && (g = 0), v = Math.max(v, g), m = Math.min(m, g);
                var y = [], b = h.width / e, w = h.height / e;
                for (var i = 0, s = e; i < s; i++) g = typeof d[i] != "undefined" ? typeof d[i].value != "undefined" ? d[i].value : d[i] : 0, r.series[p.seriesIndex[0]].type == o.CHART_TYPE_K && (g = g[1]), isNaN(g) && (g = 0), f.orient == "horizontal" ? y.push([h.x + b * i, h.y + h.height - 5 - Math.round((g - m) / (v - m) * (h.height - 10))]) : y.push([h.x + 5 + Math.round((g - m) / (v - m) * (h.width - 10)), h.y + w * i]);
                f.orient == "horizontal" ? (y.push([h.x + h.width, h.y + h.height]), y.push([h.x, h.y + h.height])) : (y.push([h.x, h.y + h.height]), y.push([h.x, h.y])), u.shapeList.push({
                    shape: "polygon",
                    zlevel: a,
                    style: {pointList: y, color: f.dataBackgroundColor},
                    hoverable: !1
                })
            }

            function k() {
                d = {
                    shape: "rectangle",
                    zlevel: a,
                    draggable: !0,
                    ondrift: A,
                    ondragend: H,
                    _type: "filler"
                }, f.orient == "horizontal" ? d.style = {
                    x: h.x + Math.round(p.start / 100 * h.width) + c,
                    y: h.y + 3,
                    width: p.size - c * 2,
                    height: h.height - 6,
                    color: f.fillerColor,
                    text: ":::",
                    textPosition: "inside"
                } : d.style = {
                    x: h.x + 3,
                    y: h.y + Math.round(p.start / 100 * h.height) + c,
                    width: h.width - 6,
                    height: p.size - c * 2,
                    color: f.fillerColor,
                    text: "=",
                    textPosition: "inside"
                }, u.shapeList.push(d)
            }

            function L() {
                v = {shape: "rectangle", zlevel: a}, m = {
                    shape: "rectangle",
                    zlevel: a
                }, v.draggable = !0, v.ondrift = A, v.ondragend = H, m.draggable = !0, m.ondrift = A, m.ondragend = H, f.orient == "horizontal" ? (v.style = {
                    x: d.style.x - c,
                    y: h.y,
                    width: c,
                    height: h.height,
                    color: f.handleColor,
                    text: "|",
                    textPosition: "inside"
                }, m.style = {
                    x: d.style.x + d.style.width,
                    y: h.y,
                    width: c,
                    height: h.height,
                    color: f.handleColor,
                    text: "|",
                    textPosition: "inside"
                }) : (v.style = {
                    x: h.x,
                    y: d.style.y - c,
                    width: h.width,
                    height: c,
                    color: f.handleColor,
                    text: "—",
                    textPosition: "inside"
                }, m.style = {
                    x: h.x,
                    y: d.style.y + d.style.height,
                    width: h.width,
                    height: c,
                    color: f.handleColor,
                    text: "—",
                    textPosition: "inside"
                }), u.shapeList.push(v), u.shapeList.push(m)
            }

            function A(e, t, n) {
                f.zoomLock && (e = d);
                var r = e._type == "filler" ? c : 0;
                return f.orient == "horizontal" ? e.style.x + t - r <= h.x ? e.style.x = h.x + r : e.style.x + t + e.style.width + r >= h.x + h.width ? e.style.x = h.x + h.width - e.style.width - r : e.style.x += t : e.style.y + n - r <= h.y ? e.style.y = h.y + r : e.style.y + n + e.style.height + r >= h.y + h.height ? e.style.y = h.y + h.height - e.style.height - r : e.style.y += n, e._type == "filler" ? O() : M(), f.realtime ? D() : (clearTimeout(g), g = setTimeout(D, 200)), !0
            }

            function O() {
                f.orient == "horizontal" ? (v.style.x = d.style.x - c, m.style.x = d.style.x + d.style.width, p.start = Math.floor((v.style.x - h.x) / h.width * 100), p.end = Math.ceil((m.style.x + c - h.x) / h.width * 100)) : (v.style.y = d.style.y - c, m.style.y = d.style.y + d.style.height, p.start = Math.floor((v.style.y - h.y) / h.height * 100), p.end = Math.ceil((m.style.y + c - h.y) / h.height * 100)), n.modShape(v.id, v), n.modShape(m.id, m), n.refresh()
            }

            function M() {
                var e, t;
                f.orient == "horizontal" ? (e = v.style.x, t = m.style.x, d.style.x = Math.min(e, t) + c, d.style.width = Math.abs(e - t) - c, p.start = Math.floor((Math.min(e, t) - h.x) / h.width * 100), p.end = Math.ceil((Math.max(e, t) + c - h.x) / h.width * 100)) : (e = v.style.y, t = m.style.y, d.style.y = Math.min(e, t) + c, d.style.height = Math.abs(e - t) - c, p.start = Math.floor((Math.min(e, t) - h.y) / h.height * 100), p.end = Math.ceil((Math.max(e, t) + c - h.y) / h.height * 100)), n.modShape(d.id, d), n.refresh()
            }

            function _() {
                if (!f.show) return;
                f.orient == "horizontal" ? (v.style.x = h.x + p.start / 100 * h.width, m.style.x = h.x + p.end / 100 * h.width - c, d.style.x = v.style.x + c, d.style.width = m.style.x - v.style.x - c) : (v.style.y = h.y + p.start / 100 * h.height, m.style.y = h.y + p.end / 100 * h.height - c, d.style.y = v.style.y + c, d.style.height = m.style.y - v.style.y - c), n.modShape(v.id, v), n.modShape(m.id, m), n.modShape(d.id, d), n.refresh()
            }

            function D(e) {
                var n, i, s, u, a;
                for (var l in b) {
                    n = b[l];
                    for (var c in n) a = n[c], u = a.length, i = Math.floor(p.start / 100 * u), s = Math.ceil(p.end / 100 * u), r[l][c].type != o.CHART_TYPE_SCATTER ? r[l][c].data = a.slice(i, s) : r[l][c].data = P(c, a)
                }
                !y && (f.realtime || e) && t.dispatch(o.EVENT.DATA_ZOOM, null, {zoom: p}), f.start = p.start, f.end = p.end
            }

            function P(e, t) {
                var n = [], r = p.scatterMap[e], i, s, o, u, a;
                f.orient == "horizontal" ? (i = r.x.max - r.x.min, s = p.start / 100 * i + r.x.min, o = p.end / 100 * i + r.x.min, i = r.y.max - r.y.min, u = p.start2 / 100 * i + r.y.min, a = p.end2 / 100 * i + r.y.min) : (i = r.x.max - r.x.min, s = p.start2 / 100 * i + r.x.min, o = p.end2 / 100 * i + r.x.min, i = r.y.max - r.y.min, u = p.start / 100 * i + r.y.min, a = p.end / 100 * i + r.y.min);
                for (var l = 0, c = t.length; l < c; l++) t[l][0] >= s && t[l][0] <= o && t[l][1] >= u && t[l][1] <= a && n.push(t[l]);
                return n
            }

            function H() {
                u.isDragend = !0
            }

            function B(e, n) {
                if (!u.isDragend || !e.target) return;
                D(), n.dragOut = !0, n.dragIn = !0, !y && !f.realtime && t.dispatch(o.EVENT.DATA_ZOOM, null, {zoom: p}), n.needRefresh = !1, u.isDragend = !1;
                return
            }

            function j(e, t) {
                t.needRefresh = !0;
                return
            }

            function F(e) {
                f.start = p.start = e.start, f.end = p.end = e.end, f.start2 = p.start2 = e.start2, f.end2 = p.end2 = e.end2, _(), D(!0);
                return
            }

            function I(e) {
                if (!e) return f.start = f.start2 = p.start = p.start2 = 0, f.end = f.end2 = p.end = p.end2 = 100, _(), D(!0), p;
                var t = i.grid.getArea(), n = {x: e.x, y: e.y, width: e.width, height: e.height};
                n.width < 0 && (n.x += n.width, n.width = -n.width), n.height < 0 && (n.y += n.height, n.height = -n.height);
                if (n.x > t.x + t.width || n.y > t.y + t.height) return !1;
                n.x < t.x && (n.x = t.x), n.x + n.width > t.x + t.width && (n.width = t.x + t.width - n.x), n.y + n.height > t.y + t.height && (n.height = t.y + t.height - n.y);
                var r, s = (n.x - t.x) / t.width, o = 1 - (n.x + n.width - t.x) / t.width,
                    u = 1 - (n.y + n.height - t.y) / t.height, a = (n.y - t.y) / t.height;
                return f.orient == "horizontal" ? (r = p.end - p.start, p.start += r * s, p.end -= r * o, r = p.end2 - p.start2, p.start2 += r * u, p.end2 -= r * a) : (r = p.end - p.start, p.start += r * u, p.end -= r * a, r = p.end2 - p.start2, p.start2 += r * s, p.end2 -= r * o), f.start = p.start, f.end = p.end, f.start2 = p.start2, f.end2 = p.end2, _(), D(!0), p
            }

            function q(e, t) {
                var n, r = b.series, i = e.series, s;
                for (var o = 0, u = i.length; o < u; o++) {
                    s = i[o].data, r[o] ? n = Math.floor(p.start / 100 * r[o].length) : n = 0;
                    for (var a = 0, f = s.length; a < f; a++) t.series[o].data[a + n] = s[a], r[o] && (r[o][a + n] = s[a])
                }
            }

            function R(e) {
                y = e
            }

            function U(e) {
                r = e, r.dataZoom = u.reformOption(r.dataZoom), f = r.dataZoom, u.clear();
                if (r.dataZoom.show || u.deepQuery([r], "toolbox.show") && u.deepQuery([r], "toolbox.feature.dataZoom")) h = E(), p = S(), x();
                r.dataZoom.show && w()
            }

            function z() {
                u.clear();
                if (r.dataZoom.show || u.deepQuery([r], "toolbox.show") && u.deepQuery([r], "toolbox.feature.dataZoom")) h = E(), p = S();
                if (r.dataZoom.show) {
                    N(), C(), k(), L();
                    for (var e = 0, t = u.shapeList.length; e < t; e++) u.shapeList[e].id = n.newShapeId(u.type), n.addShape(u.shapeList[e])
                }
            }

            var s = e("./base");
            s.call(this, n);
            var o = e("../config"), u = this;
            u.type = o.COMPONENT_TYPE_DATAZOOM;
            var a = u.getZlevelBase(), f, l = 30, c = 10, h, p, d, v, m, g, y = !1, b;
            u.init = U, u.resize = z, u.syncBackupData = q, u.absoluteZoom = F, u.rectZoom = I, u.ondragend = B, u.ondataZoom = j, u.silence = R, U(r)
        }

        return e("../component").define("dataZoom", t), t
    }), r("echarts/component/legend", ["require", "./base", "../config", "zrender/tool/area", "zrender/shape", "zrender/shape", "zrender/shape", "zrender/shape", "zrender/shape", "../component"], function (e) {
        function t(t, r, i, s) {
            function y() {
                h = E(), w(), b();
                for (var e = 0, t = f.shapeList.length; e < t; e++) f.shapeList[e].id = r.newShapeId(f.type), r.addShape(f.shapeList[e])
            }

            function b() {
                var e = l.data, t = e.length, n, i, s, o, u = f.getFont(l.textStyle), p = r.getWidth(),
                    d = r.getHeight(), m = h.x, g = h.y, y = l.itemWidth, b = l.itemHeight, w = l.itemGap, E;
                l.orient == "vertical" && l.x == "right" && (m = h.x + h.width - y);
                for (var N = 0; N < t; N++) {
                    n = e[N];
                    if (n === "") {
                        l.orient == "horizontal" ? (m = h.x, g += b + w) : (l.x == "right" ? m -= h.maxWidth + w : m += h.maxWidth + w, g = h.y);
                        continue
                    }
                    i = S(n), i ? i = i.type : i = "bar", E = L(n), l.orient == "horizontal" ? p - m < 200 && y + 5 + a.getTextWidth(n, u) + (N == t - 1 || e[N + 1] === "" ? 0 : w) >= p - m && (m = h.x, g += b + w) : d - g < 200 && b + (N == t - 1 || e[N + 1] === "" ? 0 : w) >= d - g && (l.x == "right" ? m -= h.maxWidth + w : m += h.maxWidth + w, g = h.y), s = x(m, g, y, b, v[n] ? E : "#ccc", i), s._name = n, l.selectedMode && (s.onclick = T), f.shapeList.push(s), o = {
                        shape: "text",
                        zlevel: c,
                        style: {
                            x: m + y + 5,
                            y: g,
                            color: v[n] ? l.textStyle.color : "#ccc",
                            text: n,
                            textFont: u,
                            textBaseline: "top"
                        },
                        hoverable: l.selectedMode,
                        clickable: l.selectedMode
                    }, l.orient == "vertical" && l.x == "right" && (o.style.x -= y + 10, o.style.textAlign = "right"), o._name = n, l.selectedMode && (o.onclick = T), f.shapeList.push(o), l.orient == "horizontal" ? m += y + 5 + a.getTextWidth(n, u) + w : g += b + w
                }
            }

            function w() {
                var e = l.padding[0], t = l.padding[1], n = l.padding[2], r = l.padding[3];
                f.shapeList.push({
                    shape: "rectangle",
                    zlevel: c,
                    hoverable: !1,
                    style: {
                        x: h.x - r,
                        y: h.y - e,
                        width: h.width + r + t,
                        height: h.height + e + n,
                        brushType: l.borderWidth === 0 ? "fill" : "both",
                        color: l.backgroundColor,
                        strokeColor: l.borderColor,
                        lineWidth: l.borderWidth
                    }
                })
            }

            function E() {
                var e = l.data, t = e.length, n = l.itemGap, i = l.itemWidth + 5, s = l.itemHeight,
                    o = f.getFont(l.textStyle), u = 0, c = 0, h = l.padding, p = r.getWidth() - h[1] - h[3],
                    d = r.getHeight() - h[0] - h[2], v = 0, m = 0;
                if (l.orient == "horizontal") {
                    c = s;
                    for (var g = 0; g < t; g++) {
                        if (e[g] === "") {
                            v -= n, v > p ? (u = p, c += s + n) : u = Math.max(u, v), c += s + n, v = 0;
                            continue
                        }
                        v += i + a.getTextWidth(e[g], o) + n
                    }
                    c = Math.max(c, s), v -= n, v > p ? (u = p, c += s + n) : u = Math.max(u, v)
                } else {
                    for (var g = 0; g < t; g++) m = Math.max(m, a.getTextWidth(e[g], o));
                    m += i, u = m;
                    for (var g = 0; g < t; g++) {
                        if (e[g] === "") {
                            v -= n, v > d ? (c = d, u += m + n) : c = Math.max(c, v), u += m + n, v = 0;
                            continue
                        }
                        v += s + n
                    }
                    u = Math.max(u, m), v -= n, v > d ? (c = d, u += m + n) : c = Math.max(c, v)
                }
                p = r.getWidth(), d = r.getHeight();
                var y;
                switch (l.x) {
                    case"center":
                        y = Math.floor((p - u) / 2);
                        break;
                    case"left":
                        y = l.padding[3] + l.borderWidth;
                        break;
                    case"right":
                        y = p - u - l.padding[1] - l.padding[3] - l.borderWidth * 2;
                        break;
                    default:
                        y = l.x - 0, y = isNaN(y) ? 0 : y
                }
                var b;
                switch (l.y) {
                    case"top":
                        b = l.padding[0] + l.borderWidth;
                        break;
                    case"bottom":
                        b = d - c - l.padding[0] - l.padding[2] - l.borderWidth * 2;
                        break;
                    case"center":
                        b = Math.floor((d - c) / 2);
                        break;
                    default:
                        b = l.y - 0, b = isNaN(b) ? 0 : b
                }
                return {x: y, y: b, width: u, height: c, maxWidth: m}
            }

            function S(e) {
                var t = i.series, n, r;
                for (var s = 0, o = t.length; s < o; s++) {
                    if (t[s].name == e) return t[s];
                    if (t[s].type == u.CHART_TYPE_PIE || t[s].type == u.CHART_TYPE_RADAR || t[s].type == u.CHART_TYPE_CHORD) {
                        n = !1, r = t[s].data;
                        for (var a = 0, f = r.length; a < f; a++) if (r[a].name == e) {
                            r = r[a], r.type = t[s].type == u.CHART_TYPE_CHORD ? u.CHART_TYPE_PIE : t[s].type, n = !0;
                            break
                        }
                        if (n) return r
                    } else if (t[s].type == u.CHART_TYPE_FORCE) {
                        n = !1, r = t[s].categories;
                        for (var a = 0, f = r.length; a < f; a++) if (r[a].name == e) {
                            r = r[a], r.type = u.CHART_TYPE_FORCE, n = !0;
                            break
                        }
                        if (n) return r
                    }
                }
                return
            }

            function x(e, t, n, r, i, s) {
                var o = {
                    shape: "icon",
                    zlevel: c,
                    style: {
                        iconType: "legendicon" + s,
                        x: e,
                        y: t,
                        width: n,
                        height: r,
                        color: i,
                        strokeColor: i,
                        lineWidth: 3
                    },
                    hoverable: l.selectedMode,
                    clickable: l.selectedMode
                };
                switch (s) {
                    case"line":
                        o.style.brushType = "stroke";
                        break;
                    case"k":
                        o.style.brushType = "both", o.style.color = f.deepQuery([u], "k.itemStyle.normal.color") || "#fff", o.style.strokeColor = i != "#ccc" ? f.deepQuery([u], "k.itemStyle.normal.lineStyle.color") || "#ff3200" : i
                }
                return o
            }

            function T(e) {
                var n = e.target._name;
                v[n] = !v[n], t.dispatch(u.EVENT.LEGEND_SELECTED, e.event, {selected: v})
            }

            function N(e) {
                if (!f.deepQuery([e], "legend.data")) return;
                i = e, i.legend = f.reformOption(i.legend), i.legend.padding = f.reformCssArray(i.legend.padding), l = i.legend, f.clear(), v = {};
                var t = l.data || [], n, r, o;
                for (var a = 0, c = t.length; a < c; a++) {
                    n = t[a];
                    if (n === "") continue;
                    r = S(n), r ? (o = f.deepQuery([r], "itemStyle.normal.color"), o && r.type != u.CHART_TYPE_K && k(n, o), v[n] = !0) : v[n] = !1
                }
                if (s) for (var h in s) v[h] = s[h];
                y()
            }

            function C(e) {
                if (e) {
                    i = e, i.legend = f.reformOption(i.legend), i.legend.padding = f.reformCssArray(i.legend.padding);
                    if (i.legend.selected) for (var t in i.legend.selected) v[t] = i.legend.selected[t]
                }
                l = i.legend, f.clear(), y()
            }

            function k(e, t) {
                d[e] = t
            }

            function L(e) {
                return d[e] || (d[e] = r.getColor(p++)), d[e]
            }

            function A(e) {
                return d[e] ? d[e] : !1
            }

            function O(e, t) {
                l.data.push(e), k(e, t), v[e] = !0
            }

            function M(e) {
                var t = l.data, n = [], r = !1;
                for (var i = 0, s = t.length; i < s; i++) {
                    if (!r && t[i] == e) {
                        r = !0;
                        continue
                    }
                    n.push(t[i])
                }
                l.data = n
            }

            function _(e) {
                if (typeof e == "undefined") return;
                var t;
                for (var n = 0, r = f.shapeList.length; n < r; n++) {
                    t = f.shapeList[n];
                    if (t._name == e && t.shape != "text") return t
                }
            }

            function D(e, t) {
                var n;
                for (var i = 0, s = f.shapeList.length; i < s; i++) n = f.shapeList[i], n._name == e && n.shape != "text" && (v[e] || (t.style.color = "#ccc", t.style.strokeColor = "#ccc"), r.modShape(n.id, t))
            }

            function P(e) {
                return typeof v[e] != "undefined" ? v[e] : !0
            }

            var o = e("./base");
            o.call(this, r);
            var u = e("../config"), a = e("zrender/tool/area"), f = this;
            f.type = u.COMPONENT_TYPE_LEGEND;
            var l, c = f.getZlevelBase(), h = {}, p = 0, d = {}, v = {}, m = e("zrender/shape").get("icon");
            for (var g in n) m.define("legendicon" + g, n[g]);
            f.init = N, f.refresh = C, f.setColor = k, f.getColor = L, f.hasColor = A, f.add = O, f.del = M, f.getItemShape = _, f.setItemShape = D, f.isSelected = P, N(i)
        }

        var n = {
            line: function (e, t) {
                var n = t.height / 2;
                e.moveTo(t.x, t.y + n), e.lineTo(t.x + t.width, t.y + n)
            }, pie: function (t, n) {
                var r = n.x, i = n.y, s = n.width, o = n.height, u = e("zrender/shape").get("sector");
                u.buildPath(t, {x: r + s / 2, y: i + o + 2, r: o + 2, r0: 6, startAngle: 45, endAngle: 135})
            }, chord: function (t, n) {
                var r = n.x, i = n.y, s = n.width, o = n.height, u = e("zrender/shape").get("beziercurve");
                t.moveTo(r, i + o), u.buildPath(t, {
                    xStart: r,
                    yStart: i + o,
                    cpX1: r + s,
                    cpY1: i + o,
                    cpX2: r,
                    cpY2: i + 4,
                    xEnd: r + s,
                    yEnd: i + 4
                }), t.lineTo(r + s, i), u.buildPath(t, {
                    xStart: r + s,
                    yStart: i,
                    cpX1: r,
                    cpY1: i,
                    cpX2: r + s,
                    cpY2: i + o - 4,
                    xEnd: r,
                    yEnd: i + o - 4
                }), t.lineTo(r, i + o)
            }, k: function (t, n) {
                var r = n.x, i = n.y, s = n.width, o = n.height, u = e("zrender/shape").get("candle");
                u.buildPath(t, {x: r + s / 2, y: [i + 1, i + 1, i + o - 6, i + o], width: s - 6})
            }, bar: function (e, t) {
                var n = t.x, r = t.y + 1, i = t.width, s = t.height - 2, o = 3;
                e.moveTo(n + o, r), e.lineTo(n + i - o, r), e.quadraticCurveTo(n + i, r, n + i, r + o), e.lineTo(n + i, r + s - o), e.quadraticCurveTo(n + i, r + s, n + i - o, r + s), e.lineTo(n + o, r + s), e.quadraticCurveTo(n, r + s, n, r + s - o), e.lineTo(n, r + o), e.quadraticCurveTo(n, r, n + o, r)
            }, force: function (t, n) {
                e("zrender/shape").get("icon").get("circle")(t, n)
            }, radar: function (e, t) {
                var n = 6, r = t.x + t.width / 2, i = t.y + t.height / 2, s = t.height / 2, o = 2 * Math.PI / n,
                    u = -Math.PI / 2, a = r + s * Math.cos(u), f = i + s * Math.sin(u);
                e.moveTo(a, f), u += o;
                for (var l = 0, c = n - 1; l < c; l++) e.lineTo(r + s * Math.cos(u), i + s * Math.sin(u)), u += o;
                e.lineTo(a, f)
            }
        };
        return e("../component").define("legend", t), t
    }), r("echarts/component/dataRange", ["require", "./base", "../config", "zrender/tool/area", "zrender/tool/color", "zrender/tool/color", "../component"], function (e) {
        function t(t, n, r) {
            function T() {
                l = M(), O(), a.splitNumber <= 0 || a.calculable ? C() : N();
                for (var e = 0, t = u.shapeList.length; e < t; e++) u.shapeList[e].id = n.newShapeId(u.type), n.addShape(u.shapeList[e]);
                j()
            }

            function N() {
                var e = S, t = e.length, n, r, i, s = u.getFont(a.textStyle), c = l.x, h = l.y, p = a.itemWidth,
                    d = a.itemHeight, v = a.itemGap, m = o.getTextWidth("国", s), g;
                a.orient == "vertical" && a.x == "right" && (c = l.x + l.width - p);
                var y = !0;
                a.text && (y = !1, a.text[0] && (i = _(c, h, a.text[0]), a.orient == "horizontal" ? c += o.getTextWidth(a.text[0], s) + b : h += m + b, u.shapeList.push(i)));
                for (var E = 0; E < t; E++) n = e[E], g = X((t - E) * w + a.min), r = D(c, h, p, d, x[E] ? g : "#ccc"), r._idx = E, r.onclick = U, u.shapeList.push(r), y && (i = {
                    shape: "text",
                    zlevel: f,
                    style: {
                        x: c + p + 5,
                        y: h,
                        color: x[E] ? a.textStyle.color : "#ccc",
                        text: e[E],
                        textFont: s,
                        textBaseline: "top"
                    },
                    clickable: !0
                }, a.orient == "vertical" && a.x == "right" && (i.style.x -= p + 10, i.style.textAlign = "right"), i._idx = E, i.onclick = U, u.shapeList.push(i)), a.orient == "horizontal" ? c += p + (y ? 5 : 0) + (y ? o.getTextWidth(n, s) : 0) + v : h += d + v;
                !y && a.text[1] && (a.orient == "horizontal" ? c = c - v + b : h = h - v + b, i = _(c, h, a.text[1]), u.shapeList.push(i))
            }

            function C() {
                var t, n, r = u.getFont(a.textStyle), i = l.x, s = l.y, h = a.itemWidth, p = a.itemHeight,
                    d = o.getTextWidth("国", r), v = !0;
                a.text && (v = !1, a.text[0] && (n = _(i, s, a.text[0]), a.orient == "horizontal" ? i += o.getTextWidth(a.text[0], r) + b : s += d + b, u.shapeList.push(n)));
                var m = e("zrender/tool/color"), g = 1 / (a.color.length - 1), y = [];
                for (var w = 0, E = a.color.length; w < E; w++) y.push([w * g, a.color[w]]);
                a.orient == "horizontal" ? (t = {
                    shape: "rectangle",
                    zlevel: f,
                    style: {x: i, y: s, width: h * 10, height: p, color: m.getLinearGradient(i, s, i + h * 10, s, y)},
                    hoverable: !1
                }, i += h * 10 + b) : (t = {
                    shape: "rectangle",
                    zlevel: f,
                    style: {x: i, y: s, width: h, height: p * 10, color: m.getLinearGradient(i, s, i, s + p * 10, y)},
                    hoverable: !1
                }, s += p * 10 + b), u.shapeList.push(t), a.calculable && (c = t.style, k(), A(), L()), !v && a.text[1] && (n = _(i, s, a.text[1]), u.shapeList.push(n))
            }

            function k() {
                m = {
                    shape: "rectangle",
                    zlevel: f + 1,
                    style: {x: c.x, y: c.y, width: c.width, height: c.height, color: "rgba(255,255,255,0)"},
                    draggable: !0,
                    ondrift: P,
                    ondragend: H,
                    _type: "filler"
                }, u.shapeList.push(m)
            }

            function L() {
                var e = c.x, t = c.y, n = c.width, r = c.height, i = u.getFont(a.textStyle),
                    s = o.getTextWidth("国", i) + 2,
                    l = Math.max(o.getTextWidth(a.precision === 0 ? a.max : a.max.toFixed(a.precision), i), o.getTextWidth(a.precision === 0 ? a.min : a.min.toFixed(a.precision), i)) + 2,
                    p, v, m, g, y, b;
                a.orient == "horizontal" ? a.y != "bottom" ? (p = [[e, t], [e, t + r + s / 2 * 3], [e - l, t + r + s / 2 * 3], [e - l, t + r + s / 2], [e - s / 2, t + r + s / 2], [e - 1, t + r], [e - 1, t]], v = e - l / 2, m = t + r + s, g = [[e + n, t], [e + n, t + r + s / 2 * 3], [e + n + l, t + r + s / 2 * 3], [e + n + l, t + r + s / 2], [e + n + s / 2, t + r + s / 2], [e + n + 1, t + r], [e + n + 1, t]], y = e + n + l / 2, b = m) : (p = [[e, t + r], [e, t - s / 2 * 3], [e - l, t - s / 2 * 3], [e - l, t - s / 2], [e - s / 2, t - s / 2], [e - 1, t], [e - 1, t + r]], v = e - l / 2, m = t - s, g = [[e + n, t + r], [e + n, t - s / 2 * 3], [e + n + l, t - s / 2 * 3], [e + n + l, t - s / 2], [e + n + s / 2, t - s / 2], [e + n + 1, t], [e + n + 1, t + r]], y = e + n + l / 2, b = m) : (l += s, a.x != "right" ? (p = [[e, t], [e + n + l, t], [e + n + l, t - s], [e + n + s, t - s], [e + n, t - 1], [e, t - 1]], v = e + n + l / 2 + s / 2, m = t - s / 2, g = [[e, t + r], [e + n + l, t + r], [e + n + l, t + s + r], [e + n + s, t + s + r], [e + n, t + 1 + r], [e, t + r + 1]], y = v, b = t + r + s / 2) : (p = [[e + n, t], [e - l, t], [e - l, t - s], [e - s, t - s], [e, t - 1], [e + n, t - 1]], v = e - l / 2 - s / 2, m = t - s / 2, g = [[e + n, t + r], [e - l, t + r], [e - l, t + s + r], [e - s, t + s + r], [e, t + 1 + r], [e + n, t + r + 1]], y = v, b = t + r + s / 2)), h = {
                    shape: "polygon",
                    zlevel: f + 1,
                    style: {
                        pointList: p,
                        text: a.max + "",
                        textX: v,
                        textY: m,
                        textPosition: "specific",
                        textAlign: "center",
                        textBaseline: "middle ",
                        textColor: a.textStyle.color,
                        color: X(a.max),
                        width: 0,
                        height: 0,
                        x: p[0][0],
                        y: p[0][1],
                        _x: p[0][0],
                        _y: p[0][1]
                    },
                    draggable: !0,
                    ondrift: P,
                    ondragend: H
                }, d = {
                    shape: "polygon",
                    zlevel: f + 1,
                    style: {
                        pointList: g,
                        text: a.min + "",
                        textX: y,
                        textY: b,
                        textPosition: "specific",
                        textAlign: "center",
                        textBaseline: "middle ",
                        textColor: a.textStyle.color,
                        color: X(a.min),
                        width: 0,
                        height: 0,
                        x: g[0][0],
                        y: g[0][1],
                        _x: g[0][0],
                        _y: g[0][1]
                    },
                    draggable: !0,
                    ondrift: P,
                    ondragend: H
                }, u.shapeList.push(h), u.shapeList.push(d)
            }

            function A() {
                var e = c.x, t = c.y, n = c.width, r = c.height;
                p = {
                    shape: "rectangle",
                    zlevel: f + 1,
                    style: {
                        x: e,
                        y: t,
                        width: a.orient == "horizontal" ? 0 : n,
                        height: a.orient == "horizontal" ? r : 0,
                        color: "#ccc"
                    },
                    hoverable: !1
                }, v = {
                    shape: "rectangle",
                    zlevel: f + 1,
                    style: {
                        x: a.orient == "horizontal" ? e + n : e,
                        y: a.orient == "horizontal" ? t : t + r,
                        width: a.orient == "horizontal" ? 0 : n,
                        height: a.orient == "horizontal" ? r : 0,
                        color: "#ccc"
                    },
                    hoverable: !1
                }, u.shapeList.push(p), u.shapeList.push(v)
            }

            function O() {
                var e = a.padding[0], t = a.padding[1], n = a.padding[2], r = a.padding[3];
                u.shapeList.push({
                    shape: "rectangle",
                    zlevel: f,
                    hoverable: !1,
                    style: {
                        x: l.x - r,
                        y: l.y - e,
                        width: l.width + r + t,
                        height: l.height + e + n,
                        brushType: a.borderWidth === 0 ? "fill" : "both",
                        color: a.backgroundColor,
                        strokeColor: a.borderColor,
                        lineWidth: a.borderWidth
                    }
                })
            }

            function M() {
                var e = S, t = e.length, r = a.itemGap, i = a.itemWidth, s = a.itemHeight, f = 0, l = 0,
                    c = u.getFont(a.textStyle), h = o.getTextWidth("国", c);
                if (a.orient == "horizontal") {
                    if (a.text || a.splitNumber <= 0 || a.calculable) f = (a.splitNumber <= 0 || a.calculable ? i * 10 + r : t * (i + r)) + (a.text && typeof a.text[0] != "undefined" ? o.getTextWidth(a.text[0], c) + b : 0) + (a.text && typeof a.text[1] != "undefined" ? o.getTextWidth(a.text[1], c) + b : 0); else {
                        i += 5;
                        for (var p = 0; p < t; p++) f += i + o.getTextWidth(e[p], c) + r
                    }
                    f -= r, l = Math.max(h, s)
                } else {
                    var d;
                    if (a.text || a.splitNumber <= 0 || a.calculable) l = (a.splitNumber <= 0 || a.calculable ? s * 10 + r : t * (s + r)) + (a.text && typeof a.text[0] != "undefined" ? b + h : 0) + (a.text && typeof a.text[1] != "undefined" ? b + h : 0), d = Math.max(o.getTextWidth(a.text && a.text[0] || "", c), o.getTextWidth(a.text && a.text[1] || "", c)), f = Math.max(i, d); else {
                        l = (s + r) * t, i += 5, d = 0;
                        for (var p = 0; p < t; p++) d = Math.max(d, o.getTextWidth(e[p], c));
                        f = i + d
                    }
                    l -= r
                }
                var v, m = n.getWidth();
                switch (a.x) {
                    case"center":
                        v = Math.floor((m - f) / 2);
                        break;
                    case"left":
                        v = a.padding[3] + a.borderWidth;
                        break;
                    case"right":
                        v = m - f - a.padding[1] - a.borderWidth;
                        break;
                    default:
                        v = a.x - 0, v = isNaN(v) ? 0 : v
                }
                var g, y = n.getHeight();
                switch (a.y) {
                    case"top":
                        g = a.padding[0] + a.borderWidth;
                        break;
                    case"bottom":
                        g = y - l - a.padding[2] - a.borderWidth;
                        break;
                    case"center":
                        g = Math.floor((y - l) / 2);
                        break;
                    default:
                        g = a.y - 0, g = isNaN(g) ? 0 : g
                }
                if (a.calculable) {
                    var w = Math.max(o.getTextWidth(a.max, c), o.getTextWidth(a.min, c));
                    a.orient == "horizontal" ? (v < w && (v = w + 5), v + f + w > m && (v -= w + 5)) : (g < h && (g = h + 5), g + l + h > y && (g -= h + 5))
                }
                return {x: v, y: g, width: f, height: l}
            }

            function _(e, t, n) {
                return {
                    shape: "text",
                    zlevel: f,
                    style: {
                        x: a.orient == "horizontal" ? e : l.x + l.width / 2,
                        y: a.orient == "horizontal" ? l.y + l.height / 2 : t,
                        color: a.textStyle.color,
                        text: n,
                        textFont: u.getFont(a.textStyle),
                        textBaseline: a.orient == "horizontal" ? "middle" : "top",
                        textAlign: a.orient == "horizontal" ? "left" : "center"
                    }
                }
            }

            function D(e, t, n, r, i) {
                return {
                    shape: "rectangle",
                    zlevel: f,
                    style: {x: e, y: t + 1, width: n, height: r - 2, color: i},
                    clickable: !0
                }
            }

            function P(e, t, n) {
                var r = c.x, i = c.y, s = c.width, o = c.height;
                return a.orient == "horizontal" ? e.style.x + t <= r ? e.style.x = r : e.style.x + t + e.style.width >= r + s ? e.style.x = r + s - e.style.width : e.style.x += t : e.style.y + n <= i ? e.style.y = i : e.style.y + n + e.style.height >= i + o ? e.style.y = i + o - e.style.height : e.style.y += n, e._type == "filler" ? F() : I(e), a.realtime ? R() : (clearTimeout(y), y = setTimeout(R, 200)), !0
            }

            function H() {
                u.isDragend = !0
            }

            function B(e, n) {
                if (!u.isDragend || !e.target) return;
                R(), n.dragOut = !0, n.dragIn = !0, a.realtime || t.dispatch(s.EVENT.DATA_RANGE, null, {
                    range: {
                        start: g.end,
                        end: g.start
                    }
                }), n.needRefresh = !1, u.isDragend = !1;
                return
            }

            function j() {
                if (a.range) {
                    typeof a.range.start != "undefined" && (g.end = a.range.start), typeof a.range.end != "undefined" && (g.start = a.range.end);
                    if (g.start != 100 || g.end !== 0) {
                        if (a.orient == "horizontal") {
                            var e = m.style.width;
                            m.style.x += e * (100 - g.start) / 100, m.style.width = e * (g.start - g.end) / 100
                        } else {
                            var t = m.style.height;
                            m.style.y += t * (100 - g.start) / 100, m.style.height = t * (g.start - g.end) / 100
                        }
                        n.modShape(m.id, m), F()
                    }
                }
            }

            function F() {
                var e = c.x, t = c.y, n = c.width, r = c.height;
                a.orient == "horizontal" ? (h.style.x = m.style.x, p.style.width = h.style.x - e, d.style.x = m.style.x + m.style.width, v.style.x = d.style.x, v.style.width = e + n - d.style.x, g.start = Math.ceil(100 - (h.style.x - e) / n * 100), g.end = Math.floor(100 - (d.style.x - e) / n * 100)) : (h.style.y = m.style.y, p.style.height = h.style.y - t, d.style.y = m.style.y + m.style.height, v.style.y = d.style.y, v.style.height = t + r - d.style.y, g.start = Math.ceil(100 - (h.style.y - t) / r * 100), g.end = Math.floor(100 - (d.style.y - t) / r * 100)), q(!1)
            }

            function I(e) {
                var t = c.x, n = c.y, r = c.width, i = c.height, s, o;
                a.orient == "horizontal" ? (s = h.style.x, o = d.style.x, e.id == h.id && s >= o ? (o = s, d.style.x = s) : e.id == d.id && s >= o && (s = o, h.style.x = s), m.style.x = s, m.style.width = o - s, p.style.width = s - t, v.style.x = o, v.style.width = t + r - o, g.start = Math.ceil(100 - (s - t) / r * 100), g.end = Math.floor(100 - (o - t) / r * 100)) : (s = h.style.y, o = d.style.y, e.id == h.id && s >= o ? (o = s, d.style.y = s) : e.id == d.id && s >= o && (s = o, h.style.y = s), m.style.y = s, m.style.height = o - s, p.style.height = s - n, v.style.y = o, v.style.height = n + i - o, g.start = Math.ceil(100 - (s - n) / i * 100), g.end = Math.floor(100 - (o - n) / i * 100)), q(!0)
            }

            function q(e) {
                h.position = [h.style.x - h.style._x, h.style.y - h.style._y], a.precision === 0 ? h.style.text = Math.round(w * g.start + a.min) + "" : h.style.text = (w * g.start + a.min).toFixed(a.precision), h.style.color = X(w * g.start + a.min), n.modShape(h.id, h), d.position = [d.style.x - d.style._x, d.style.y - d.style._y], a.precision === 0 ? d.style.text = Math.round(w * g.end + a.min) + "" : d.style.text = (w * g.end + a.min).toFixed(a.precision), d.style.color = X(w * g.end + a.min), n.modShape(d.id, d), n.modShape(p.id, p), n.modShape(v.id, v), e && n.modShape(m.id, m), n.refresh()
            }

            function R() {
                a.realtime && t.dispatch(s.EVENT.DATA_RANGE, null, {range: {start: g.end, end: g.start}})
            }

            function U(e) {
                var n = e.target._idx;
                x[n] = !x[n], t.dispatch(s.EVENT.REFRESH)
            }

            function z(t) {
                if (typeof u.deepQuery([t], "dataRange.min") == "undefined" || typeof u.deepQuery([t], "dataRange.max") == "undefined") return;
                r = t, r.dataRange = u.reformOption(r.dataRange), r.dataRange.padding = u.reformCssArray(r.dataRange.padding), a = r.dataRange, u.clear(), x = {};
                var n = e("zrender/tool/color"), i = a.splitNumber <= 0 || a.calculable ? 100 : a.splitNumber;
                E = n.getGradientColors(a.color, (i - a.color.length) / (a.color.length - 1) + 1), E = E.slice(0, i), a.precision === 0 ? w = Math.round((a.max - a.min) / i) || 1 : (w = (a.max - a.min) / i, w = w.toFixed(a.precision) - 0), S = [];
                for (var s = 0; s < i; s++) x[s] = !0, S.unshift((s * w + a.min).toFixed(a.precision) + " - " + ((s + 1) * w + a.min).toFixed(a.precision));
                g = {start: 100, end: 0}, T()
            }

            function W(e) {
                e && (r = e, r.dataRange = u.reformOption(r.dataRange), r.dataRange.padding = u.reformCssArray(r.dataRange.padding)), a = r.dataRange, a.range = {
                    start: g.end,
                    end: g.start
                }, u.clear(), T()
            }

            function X(e) {
                if (isNaN(e)) return null;
                e < a.min ? e = a.min : e > a.max && (e = a.max);
                if (a.calculable) if (e > w * g.start + a.min || e < w * g.end + a.min) return null;
                var t = E.length - Math.ceil((e - a.min) / (a.max - a.min) * E.length);
                return t == E.length && t--, x[t] ? E[t] : null
            }

            var i = e("./base");
            i.call(this, n);
            var s = e("../config"), o = e("zrender/tool/area"), u = this;
            u.type = s.COMPONENT_TYPE_DATARANGE;
            var a, f = u.getZlevelBase(), l = {}, c, h, p, d, v, m, g, y, b = 10, w, E, S, x = {};
            u.init = z, u.refresh = W, u.getColor = X, u.ondragend = B, z(r)
        }

        return e("../component").define("dataRange", t), t
    }), r("echarts/component/tooltip", ["require", "./base", "../config", "../util/ecData", "zrender/config", "zrender/shape", "zrender/tool/event", "zrender/tool/area", "zrender/tool/color", "zrender/tool/util", "zrender/shape/base", "../component"], function (e) {
        function t(t, n, r, i) {
            function I(e) {
                if (!e) return "";
                var t = [];
                if (e.transitionDuration) {
                    var n = "left " + e.transitionDuration + "s," + "top " + e.transitionDuration + "s";
                    t.push("transition:" + n), t.push("-moz-transition:" + n), t.push("-webkit-transition:" + n), t.push("-o-transition:" + n)
                }
                e.backgroundColor && (t.push("background-Color:" + h.toHex(e.backgroundColor)), t.push("filter:alpha(opacity=70)"), t.push("background-Color:" + e.backgroundColor)), typeof e.borderWidth != "undefined" && t.push("border-width:" + e.borderWidth + "px"), typeof e.borderColor != "undefined" && t.push("border-color:" + e.borderColor), typeof e.borderRadius != "undefined" && (t.push("border-radius:" + e.borderRadius + "px"), t.push("-moz-border-radius:" + e.borderRadius + "px"), t.push("-webkit-border-radius:" + e.borderRadius + "px"), t.push("-o-border-radius:" + e.borderRadius + "px"));
                var r = e.textStyle;
                r && (r.color && t.push("color:" + r.color), r.decoration && t.push("text-decoration:" + r.decoration), r.align && t.push("text-align:" + r.align), r.fontFamily && t.push("font-family:" + r.fontFamily), r.fontSize && t.push("font-size:" + r.fontSize + "px"), r.fontSize && t.push("line-height:" + Math.round(r.fontSize * 3 / 2) + "px"), r.fontStyle && t.push("font-style:" + r.fontStyle), r.fontWeight && t.push("font-weight:" + r.fontWeight));
                var i = e.padding;
                return typeof i != "undefined" && (i = m.reformCssArray(i), t.push("padding:" + i[0] + "px " + i[1] + "px " + i[2] + "px " + i[3] + "px")), t = t.join(";") + ";", t
            }

            function q() {
                x && (x.style.display = "none");
                var e = !1;
                j.invisible || (j.invisible = !0, n.modShape(j.id, j), e = !0), F.invisible || (F.invisible = !0, n.modShape(F.id, F), e = !0), B && B.tipShape.length > 0 && (n.delShape(B.tipShape), B = !1), e && n.refresh()
            }

            function R(e, t, n) {
                var r = x.offsetHeight, i = x.offsetWidth;
                e + i > H && (e = H - i), t + r > P && (t = P - r), t < 20 && (t = 0), x.style.cssText = T + N + (n ? n : "") + "left:" + e + "px;top:" + t + "px;", (H - e < 100 || P - t < 100) && setTimeout(U, 20)
            }

            function U() {
                if (x) {
                    var e = "", t = x.offsetHeight, n = x.offsetWidth;
                    x.offsetLeft + n > H && (e += "left:" + (H - n) + "px;"), x.offsetTop + t > P && (e += "top:" + (P - t) + "px;"), e !== "" && (x.style.cssText += e)
                }
            }

            function z() {
                var e, t;
                if (!M) X() || W(); else {
                    if (M._type == "island" && r.tooltip.show) {
                        K();
                        return
                    }
                    var n = u.get(M, "series"), i = u.get(M, "data");
                    e = m.deepQuery([i, n, r], "tooltip.show"), typeof n == "undefined" || typeof i == "undefined" || e === !1 ? (clearTimeout(k), clearTimeout(A), k = setTimeout(q, L)) : (t = m.deepQuery([i, n, r], "tooltip.trigger"), t == "axis" ? $(n.xAxisIndex, n.yAxisIndex, u.get(M, "dataIndex")) : K())
                }
            }

            function W() {
                if (!w || !E) {
                    k = setTimeout(q, L);
                    return
                }
                var e = r.series, t, n;
                for (var i = 0, s = e.length; i < s; i++) if (m.deepQuery([e[i], r], "tooltip.trigger") == "axis") {
                    t = e[i].xAxisIndex || 0, n = e[i].yAxisIndex || 0;
                    if (w.getAxis(t) && w.getAxis(t).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                        $(t, n, V("x", w.getAxis(t)));
                        return
                    }
                    if (E.getAxis(n) && E.getAxis(n).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                        $(t, n, V("y", E.getAxis(n)));
                        return
                    }
                }
            }

            function X() {
                if (!S) return !1;
                var e = l.getX(_), t = l.getY(_), n = S.getNearestIndex([e, t]), r;
                return n ? (r = n.valueIndex, n = n.polarIndex) : n = -1, n != -1 ? J(n, r) : !1
            }

            function V(e, t) {
                var n = -1, r = l.getX(_), i = l.getY(_);
                if (e == "x") {
                    var s, o, u = b.getXend(), a = t.getCoordByIndex(n);
                    while (a < u) {
                        a <= r && (s = a);
                        if (a >= r) break;
                        a = t.getCoordByIndex(++n), o = a
                    }
                    return r - s < o - r ? n -= 1 : typeof t.getNameByIndex(n) == "undefined" && (n = -1), n
                }
                var f, c, h = b.getY(), a = t.getCoordByIndex(n);
                while (a > h) {
                    a >= i && (c = a);
                    if (a <= i) break;
                    a = t.getCoordByIndex(++n), f = a
                }
                return i - f > c - i ? n -= 1 : typeof t.getNameByIndex(n) == "undefined" && (n = -1), n
            }

            function $(e, n, s) {
                if (typeof w == "undefined" || typeof E == "undefined" || typeof e == "undefined" || typeof n == "undefined" || s < 0) {
                    clearTimeout(k), clearTimeout(A), k = setTimeout(q, L);
                    return
                }
                var u = r.series, a = [], f = [], c, h, p, d, v, g = "";
                if (r.tooltip.trigger == "axis") {
                    if (r.tooltip.show === !1) return;
                    d = r.tooltip.formatter
                }
                if (e != -1 && w.getAxis(e).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                    c = w.getAxis(e);
                    for (var y = 0, S = u.length; y < S; y++) u[y].xAxisIndex == e && m.deepQuery([u[y], r], "tooltip.trigger") == "axis" && (v = m.deepQuery([u[y]], "tooltip.showContent") || v, d = m.deepQuery([u[y]], "tooltip.formatter") || d, g += I(m.deepQuery([u[y]], "tooltip")), a.push(u[y]), f.push(y));
                    t.dispatch(o.EVENT.TOOLTIP_HOVER, _, {
                        seriesIndex: f,
                        dataIndex: s
                    }), p = l.getY(_) + 10, h = c.getCoordByIndex(s), Q(a, h, b.getY(), h, b.getYend(), c.getGap()), h += 10
                } else if (n != -1 && E.getAxis(n).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                    c = E.getAxis(n);
                    for (var y = 0, S = u.length; y < S; y++) u[y].yAxisIndex == n && m.deepQuery([u[y], r], "tooltip.trigger") == "axis" && (v = m.deepQuery([u[y]], "tooltip.showContent") || v, d = m.deepQuery([u[y]], "tooltip.formatter") || d, g += I(m.deepQuery([u[y]], "tooltip")), a.push(u[y]), f.push(y));
                    t.dispatch(o.EVENT.TOOLTIP_HOVER, _, {
                        seriesIndex: f,
                        dataIndex: s
                    }), h = l.getX(_) + 10, p = c.getCoordByIndex(s), Q(a, b.getX(), p, b.getXend(), p, c.getGap()), p += 10
                }
                if (a.length > 0) {
                    var T;
                    if (typeof d == "function") {
                        var N = [];
                        for (var y = 0, S = a.length; y < S; y++) T = a[y].data[s], T = typeof T != "undefined" ? typeof T.value != "undefined" ? T.value : T : "-", N.push([a[y].name || "", c.getNameByIndex(s), T]);
                        D = "axis:" + s, x.innerHTML = d(N, D, Z)
                    } else if (typeof d == "string") {
                        D = NaN, d = d.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}");
                        for (var y = 0, S = a.length; y < S; y++) d = d.replace("{a" + y + "}", ut(a[y].name || "")), d = d.replace("{b" + y + "}", ut(c.getNameByIndex(s))), T = a[y].data[s], T = typeof T != "undefined" ? typeof T.value != "undefined" ? T.value : T : "-", d = d.replace("{c" + y + "}", T);
                        x.innerHTML = d
                    } else {
                        D = NaN, d = ut(c.getNameByIndex(s));
                        for (var y = 0, S = a.length; y < S; y++) d += "<br/>" + ut(a[y].name || "") + " : ", T = a[y].data[s], T = typeof T != "undefined" ? typeof T.value != "undefined" ? T.value : T : "-", d += T;
                        x.innerHTML = d
                    }
                    if (v === !1 || !r.tooltip.showContent) return;
                    m.hasAppend || (x.style.left = H / 2 + "px", x.style.top = P / 2 + "px", i.firstChild.appendChild(x), m.hasAppend = !0), R(h, p, g)
                }
            }

            function J(e, t) {
                if (typeof S == "undefined" || typeof e == "undefined" || typeof t == "undefined" || t < 0) return !1;
                var n = r.series, s = [], o, u, a = "";
                if (r.tooltip.trigger == "axis") {
                    if (r.tooltip.show === !1) return !1;
                    o = r.tooltip.formatter
                }
                for (var f = 0, c = n.length; f < c; f++) n[f].polarIndex == e && m.deepQuery([n[f], r], "tooltip.trigger") == "axis" && (u = m.deepQuery([n[f]], "tooltip.showContent") || u, o = m.deepQuery([n[f]], "tooltip.formatter") || o, a += I(m.deepQuery([n[f]], "tooltip")), s.push(n[f]));
                if (s.length > 0) {
                    var h, p, d = [], v = r.polar[e].indicator[t].text;
                    for (var f = 0, c = s.length; f < c; f++) {
                        h = s[f].data;
                        for (var g = 0, y = h.length; g < y; g++) p = h[g], p = typeof p != "undefined" ? p : {
                            name: "",
                            value: {dataIndex: "-"}
                        }, d.push([s[f].name || "", p.name, p.value[t], v])
                    }
                    if (d.length <= 0) return;
                    if (typeof o == "function") D = "axis:" + t, x.innerHTML = o(d, D, Z); else if (typeof o == "string") {
                        o = o.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}");
                        for (var f = 0, c = d.length; f < c; f++) o = o.replace("{a" + f + "}", ut(d[f][0])), o = o.replace("{b" + f + "}", ut(d[f][1])), o = o.replace("{c" + f + "}", d[f][2]), o = o.replace("{d" + f + "}", ut(d[f][3]));
                        x.innerHTML = o
                    } else {
                        o = ut(d[0][1]) + "<br/>" + ut(d[0][3]) + " : " + d[0][2];
                        for (var f = 1, c = d.length; f < c; f++) o += "<br/>" + ut(d[f][1]) + "<br/>", o += ut(d[f][3]) + " : " + d[f][2];
                        x.innerHTML = o
                    }
                    if (u === !1 || !r.tooltip.showContent) return;
                    return m.hasAppend || (x.style.left = H / 2 + "px", x.style.top = P / 2 + "px", i.firstChild.appendChild(x), m.hasAppend = !0), R(l.getX(_), l.getY(_), a), !0
                }
            }

            function K() {
                var e = u.get(M, "series"), t = u.get(M, "data"), s = u.get(M, "name"), a = u.get(M, "value"),
                    f = u.get(M, "special"), c = u.get(M, "special2"), h, p, d = "", v, g = "";
                M._type != "island" ? (r.tooltip.trigger == "item" && (h = r.tooltip.formatter), m.deepQuery([e], "tooltip.trigger") == "item" && (p = m.deepQuery([e], "tooltip.showContent") || p, h = m.deepQuery([e], "tooltip.formatter") || h, d += I(m.deepQuery([e], "tooltip"))), p = m.deepQuery([t], "tooltip.showContent") || p, h = m.deepQuery([t], "tooltip.formatter") || h, d += I(m.deepQuery([t], "tooltip"))) : (p = m.deepQuery([t, e, r], "tooltip.showContent"), h = m.deepQuery([t, e, r], "tooltip.islandFormatter"));
                if (typeof h == "function") D = (e.name || "") + ":" + u.get(M, "dataIndex"), x.innerHTML = h([e.name || "", s, a, f, c], D, Z); else if (typeof h == "string") D = NaN, h = h.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), h = h.replace("{a0}", ut(e.name || "")).replace("{b0}", ut(s)).replace("{c0}", a), h = h.replace("{d}", "{d0}").replace("{d0}", f || ""), h = h.replace("{e}", "{e0}").replace("{e0}", u.get(M, "special2") || ""), x.innerHTML = h; else {
                    D = NaN;
                    if (e.type == o.CHART_TYPE_SCATTER) x.innerHTML = (typeof e.name != "undefined" ? ut(e.name) + "<br/>" : "") + (s === "" ? "" : ut(s) + " : ") + a + (typeof f == "undefined" ? "" : " (" + f + ")"); else if (e.type == o.CHART_TYPE_RADAR) {
                        v = f, g += ut(s === "" ? e.name || "" : s), g += g === "" ? "" : "<br />";
                        for (var y = 0; y < v.length; y++) g += ut(v[y].text) + " : " + a[y] + "<br />";
                        x.innerHTML = g
                    } else if (e.type == o.CHART_TYPE_CHORD) if (typeof c == "undefined") x.innerHTML = ut(s) + " (" + a + ")"; else {
                        var b = ut(s), w = ut(f);
                        x.innerHTML = (typeof e.name != "undefined" ? ut(e.name) + "<br/>" : "") + b + " -> " + w + " (" + a + ")" + "<br />" + w + " -> " + b + " (" + c + ")"
                    } else x.innerHTML = (typeof e.name != "undefined" ? ut(e.name) + "<br/>" : "") + ut(s) + " : " + a + (typeof f == "undefined" ? "" : " (" + f + ")")
                }
                j.invisible || (j.invisible = !0, n.modShape(j.id, j), n.refresh());
                if (p === !1 || !r.tooltip.showContent) return;
                m.hasAppend || (x.style.left = H / 2 + "px", x.style.top = P / 2 + "px", i.firstChild.appendChild(x), m.hasAppend = !0), R(l.getX(_) + 20, l.getY(_) - 20, d)
            }

            function Q(e, t, i, s, o, u) {
                if (e.length > 0) {
                    var a, f, l = r.tooltip.axisPointer, c = l.type, h = l.lineStyle.color, p = l.lineStyle.width,
                        d = l.lineStyle.type, v = l.areaStyle.size, g = l.areaStyle.color;
                    for (var y = 0, w = e.length; y < w; y++) m.deepQuery([e[y], r], "tooltip.trigger") == "axis" && (a = [e[y]], f = m.deepQuery(a, "tooltip.axisPointer.type"), c = f || c, f == "line" ? (h = m.deepQuery(a, "tooltip.axisPointer.lineStyle.color") || h, p = m.deepQuery(a, "tooltip.axisPointer.lineStyle.width") || p, d = m.deepQuery(a, "tooltip.axisPointer.lineStyle.type") || d) : f == "shadow" && (v = m.deepQuery(a, "tooltip.axisPointer.areaStyle.size") || v, g = m.deepQuery(a, "tooltip.axisPointer.areaStyle.color") || g));
                    c == "line" ? (j.style = {
                        xStart: t,
                        yStart: i,
                        xEnd: s,
                        yEnd: o,
                        strokeColor: h,
                        lineWidth: p,
                        lineType: d
                    }, j.invisible = !1, n.modShape(j.id, j)) : c == "shadow" && (typeof v == "undefined" || v == "auto" || isNaN(v) ? p = u : p = v, t == s ? Math.abs(b.getX() - t) < 2 ? (p /= 2, t = s += p / 2) : Math.abs(b.getXend() - t) < 2 && (p /= 2, t = s -= p / 2) : i == o && (Math.abs(b.getY() - i) < 2 ? (p /= 2, i = o += p / 2) : Math.abs(b.getYend() - i) < 2 && (p /= 2, i = o -= p / 2)), F.style = {
                        xStart: t,
                        yStart: i,
                        xEnd: s,
                        yEnd: o,
                        strokeColor: g,
                        lineWidth: p
                    }, F.invisible = !1, n.modShape(F.id, F)), n.refresh()
                }
            }

            function G(e) {
                clearTimeout(k), clearTimeout(A);
                var t = e.target, n = l.getX(e.event), i = l.getY(e.event);
                if (!t) M = !1, _ = e.event, _._target = _.target || _.toElement, _.zrenderX = n, _.zrenderY = i, C && b && c.isInside(v, b.getArea(), n, i) ? A = setTimeout(z, O) : C && S && S.isInside([n, i]) != -1 ? A = setTimeout(z, O) : k = setTimeout(q, L); else {
                    M = t, _ = e.event, _._target = _.target || _.toElement, _.zrenderX = n, _.zrenderY = i;
                    var s;
                    if (C && S && (s = S.isInside([n, i])) != -1) {
                        var o = r.series;
                        for (var u = 0, a = o.length; u < a; u++) if (o[u].polarIndex == s && m.deepQuery([o[u], r], "tooltip.trigger") == "axis") {
                            M = null;
                            break
                        }
                    }
                    A = setTimeout(z, O)
                }
            }

            function Y() {
                clearTimeout(k), clearTimeout(A), k = setTimeout(q, L)
            }

            function Z(e, t) {
                e == D && (x.innerHTML = t);
                var n = "", r = x.offsetHeight, i = x.offsetWidth;
                x.offsetLeft + i > H && (n += "left:" + (H - i) + "px;"), x.offsetTop + r > P && (n += "top:" + (P - r) + "px;"), n !== "" && (x.style.cssText += n), (H - x.offsetLeft < 100 || P - x.offsetTop < 100) && setTimeout(U, 20)
            }

            function et(e) {
                y = e, b = y.grid, w = y.xAxis, E = y.yAxis, S = y.polar
            }

            function tt(e, t) {
                if (!B || B && B.dataIndex != e.dataIndex) {
                    B && B.tipShape.length > 0 && n.delShape(B.tipShape);
                    for (var r = 0, i = t.length; r < i; r++) t[r].id = n.newShapeId("tooltip"), t[r].zlevel = g, t[r].style = d.getHighlightStyle(t[r].style, t[r].highlightStyle), t[r].draggable = !1, t[r].hoverable = !1, t[r].clickable = !1, t[r].ondragend = null, t[r].ondragover = null, t[r].ondrop = null, n.addShape(t[r]);
                    B = {dataIndex: e.dataIndex, tipShape: t}
                }
            }

            function nt() {
                q()
            }

            function rt(e, t) {
                r = e, i = t, r.tooltip = m.reformOption(r.tooltip), r.tooltip.textStyle = p.merge(r.tooltip.textStyle, o.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), r.tooltip.padding = m.reformCssArray(r.tooltip.padding), C = !1, r.tooltip.trigger == "axis" && (C = !0);
                var n = r.series;
                for (var s = 0, u = n.length; s < u; s++) if (m.deepQuery([n[s]], "tooltip.trigger") == "axis") {
                    C = !0;
                    break
                }
                O = r.tooltip.showDelay, L = r.tooltip.hideDelay, N = I(r.tooltip), x.style.position = "absolute", m.hasAppend = !1
            }

            function it(e) {
                e && (r = e, r.tooltip = m.reformOption(r.tooltip), r.tooltip.textStyle = p.merge(r.tooltip.textStyle, o.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), r.tooltip.padding = m.reformCssArray(r.tooltip.padding))
            }

            function st() {
                P = n.getHeight(), H = n.getWidth()
            }

            function ot() {
                clearTimeout(k), clearTimeout(A), n.un(a.EVENT.MOUSEMOVE, G), n.un(a.EVENT.GLOBALOUT, Y), m.hasAppend && i.firstChild.removeChild(x), x = null, m.shapeList = null, m = null
            }

            function ut(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }

            var s = e("./base");
            s.call(this, n);
            var o = e("../config"), u = e("../util/ecData"), a = e("zrender/config"), f = e("zrender/shape"),
                l = e("zrender/tool/event"), c = e("zrender/tool/area"), h = e("zrender/tool/color"),
                p = e("zrender/tool/util"), d = e("zrender/shape/base"), v = f.get("rectangle"), m = this;
            m.type = o.COMPONENT_TYPE_TOOLTIP;
            var g = m.getZlevelBase(), y = {}, b, w, E, S, x = document.createElement("div"),
                T = "position:absolute;display:block;border-style:solid;white-space:nowrap;", N, C, k, L, A, O, M, _, D,
                P = n.getHeight(), H = n.getWidth(), B = !1,
                j = {shape: "line", id: n.newShapeId("tooltip"), zlevel: g, invisible: !0, hoverable: !1, style: {}},
                F = {shape: "line", id: n.newShapeId("tooltip"), zlevel: 1, invisible: !0, hoverable: !1, style: {}};
            n.addShape(j), n.addShape(F), n.on(a.EVENT.MOUSEMOVE, G), n.on(a.EVENT.GLOBALOUT, Y), m.dispose = ot, m.init = rt, m.refresh = it, m.resize = st, m.setComponent = et, m.ontooltipHover = tt, m.ondragend = nt, rt(r, i)
        }

        return e("../component").define("tooltip", t), t
    }), r("echarts/component/toolbox", ["require", "./base", "../config", "zrender/config", "zrender/tool/event", "../component", "../component"], function (e) {
        function t(t, n, r) {
            function L() {
                d = [];
                var e = a.toolbox.feature;
                for (var t in e) if (e[t]) switch (t) {
                    case"mark":
                        d.push("mark"), d.push("markUndo"), d.push("markClear");
                        break;
                    case"magicType":
                        for (var r = 0, i = e[t].length; r < i; r++) d.push(e[t][r] + "Chart");
                        break;
                    case"dataZoom":
                        d.push("dataZoom"), d.push("dataZoomReset");
                        break;
                    case"saveAsImage":
                        G_vmlCanvasManager || d.push("saveAsImage");
                        break;
                    default:
                        d.push(t)
                }
                if (d.length > 0) {
                    m = M(), O(), A();
                    for (var r = 0, i = l.shapeList.length; r < i; r++) l.shapeList[r].id = n.newShapeId(l.type), n.addShape(l.shapeList[r]);
                    v.mark && (z(v.markUndo), z(v.markClear)), v.dataZoomReset && C.length === 0 && z(v.dataZoomReset)
                }
            }

            function A() {
                var i = a.toolbox, s = d.length, o = m.x, u = m.y, f = i.itemSize, p = i.itemGap, y,
                    w = i.color instanceof Array ? i.color : [i.color], E = l.getFont(i.textStyle), S, x, T;
                i.orient == "horizontal" ? (S = m.y / n.getHeight() < .5 ? "bottom" : "top", x = m.x / n.getWidth() < .5 ? "left" : "right", T = m.y / n.getHeight() < .5 ? "top" : "bottom") : S = m.x / n.getWidth() < .5 ? "right" : "left", v = {};
                for (var N = 0; N < s; N++) {
                    y = {
                        shape: "icon",
                        zlevel: c,
                        style: {
                            x: o,
                            y: u,
                            width: f,
                            height: f,
                            iconType: d[N],
                            strokeColor: w[N % w.length],
                            shadowColor: "#ccc",
                            shadowBlur: 2,
                            shadowOffsetX: 2,
                            shadowOffsetY: 2,
                            brushType: "stroke"
                        },
                        highlightStyle: {
                            lineWidth: 2,
                            shadowBlur: 5,
                            text: i.showTitle ? i.featureTitle[d[N]] : !1,
                            textFont: E,
                            textPosition: S,
                            strokeColor: w[N % w.length]
                        },
                        hoverable: !0,
                        clickable: !0
                    }, i.orient == "horizontal" && (N === 0 && x == "left" && (y.highlightStyle.textPosition = "specific", y.highlightStyle.textAlign = x, y.highlightStyle.textBaseLine = T, y.highlightStyle.textX = o, y.highlightStyle.textY = T == "top" ? u + f + 10 : u - 10), N == s - 1 && x == "right" && (y.highlightStyle.textPosition = "specific", y.highlightStyle.textAlign = x, y.highlightStyle.textBaseLine = T, y.highlightStyle.textX = o + f, y.highlightStyle.textY = T == "top" ? u + f + 10 : u - 10));
                    switch (d[N]) {
                        case"mark":
                            y.onclick = _, b = y.style.strokeColor;
                            break;
                        case"markUndo":
                            y.onclick = F;
                            break;
                        case"markClear":
                            y.onclick = I;
                            break;
                        case"dataZoom":
                            y.onclick = D;
                            break;
                        case"dataZoomReset":
                            y.onclick = q;
                            break;
                        case"dataView":
                            if (!k) {
                                var C = e("../component"), L = C.get("dataView");
                                k = new L(t, n, a, r)
                            }
                            y.onclick = X;
                            break;
                        case"restore":
                            y.onclick = V;
                            break;
                        case"saveAsImage":
                            y.onclick = $;
                            break;
                        default:
                            d[N].match("Chart") && (y._name = d[N].replace("Chart", ""), y._name == h && (y.style.strokeColor = g), y.onclick = J)
                    }
                    l.shapeList.push(y), v[d[N]] = y, i.orient == "horizontal" ? o += f + p : u += f + p
                }
            }

            function O() {
                var e = a.toolbox, t = e.padding[0], n = e.padding[1], r = e.padding[2], i = e.padding[3];
                l.shapeList.push({
                    shape: "rectangle",
                    zlevel: c,
                    hoverable: !1,
                    style: {
                        x: m.x - i,
                        y: m.y - t,
                        width: m.width + i + n,
                        height: m.height + t + r,
                        brushType: e.borderWidth === 0 ? "fill" : "both",
                        color: e.backgroundColor,
                        strokeColor: e.borderColor,
                        lineWidth: e.borderWidth
                    }
                })
            }

            function M() {
                var e = a.toolbox, t = d.length, r = e.itemGap, i = e.itemSize, s = 0, o = 0;
                e.orient == "horizontal" ? (s = (i + r) * t - r, o = i) : (o = (i + r) * t - r, s = i);
                var u, f = n.getWidth();
                switch (e.x) {
                    case"center":
                        u = Math.floor((f - s) / 2);
                        break;
                    case"left":
                        u = e.padding[3] + e.borderWidth;
                        break;
                    case"right":
                        u = f - s - e.padding[1] - e.borderWidth;
                        break;
                    default:
                        u = e.x - 0, u = isNaN(u) ? 0 : u
                }
                var l, c = n.getHeight();
                switch (e.y) {
                    case"top":
                        l = e.padding[0] + e.borderWidth;
                        break;
                    case"bottom":
                        l = c - o - e.padding[2] - e.borderWidth;
                        break;
                    case"center":
                        l = Math.floor((c - o) / 2);
                        break;
                    default:
                        l = e.y - 0, l = isNaN(l) ? 0 : l
                }
                return {x: u, y: l, width: s, height: o}
            }

            function _(e) {
                var t = e.target;
                return E || w ? (R(), n.refresh()) : (U(), n.modShape(t.id, {style: {strokeColor: g}}), n.refresh(), w = !0, setTimeout(function () {
                    n && n.on(o.EVENT.CLICK, j) && n.on(o.EVENT.MOUSEMOVE, P)
                }, 10)), !0
            }

            function D(e) {
                var t = e.target;
                return T || x ? (U(), n.refresh(), r.style.cursor = "default") : (R(), n.modShape(t.id, {style: {strokeColor: g}}), n.refresh(), x = !0, setTimeout(function () {
                    n && n.on(o.EVENT.MOUSEDOWN, H) && n.on(o.EVENT.MOUSEUP, B) && n.on(o.EVENT.MOUSEMOVE, P)
                }, 10), r.style.cursor = "crosshair"), !0
            }

            function P(e) {
                E && (S.style.xEnd = u.getX(e.event), S.style.yEnd = u.getY(e.event), n.addHoverShape(S)), T && (N.style.width = u.getX(e.event) - N.style.x, N.style.height = u.getY(e.event) - N.style.y, n.addHoverShape(N), r.style.cursor = "crosshair"), x && r.style.cursor != "pointer" && r.style.cursor != "move" && (r.style.cursor = "crosshair")
            }

            function H(e) {
                if (e.target) return;
                T = !0;
                var t = u.getX(e.event), r = u.getY(e.event), i = a.dataZoom || {};
                return N = {
                    shape: "rectangle",
                    id: n.newShapeId("zoom"),
                    zlevel: c,
                    style: {x: t, y: r, width: 1, height: 1, brushType: "both"},
                    highlightStyle: {
                        lineWidth: 2,
                        color: i.fillerColor || s.dataZoom.fillerColor,
                        strokeColor: i.handleColor || s.dataZoom.handleColor,
                        brushType: "both"
                    }
                }, n.addHoverShape(N), !0
            }

            function B() {
                if (!N || Math.abs(N.style.width) < 10 || Math.abs(N.style.height) < 10) return T = !1, !0;
                if (T && f.dataZoom) {
                    T = !1;
                    var e = f.dataZoom.rectZoom(N.style);
                    e && (C.push({
                        start: e.start,
                        end: e.end,
                        start2: e.start2,
                        end2: e.end2
                    }), W(v.dataZoomReset), n.refresh())
                }
                return !0
            }

            function j(e) {
                if (E) E = !1, l.shapeList.push(S), W(v.markUndo), W(v.markClear), n.addShape(S), n.refresh(); else if (w) {
                    E = !0;
                    var t = u.getX(e.event), r = u.getY(e.event);
                    S = {
                        shape: "line",
                        id: n.newShapeId("mark"),
                        zlevel: c,
                        style: {
                            xStart: t,
                            yStart: r,
                            xEnd: t,
                            yEnd: r,
                            lineWidth: l.deepQuery([a], "toolbox.feature.mark.lineStyle.width") || 2,
                            strokeColor: l.deepQuery([a], "toolbox.feature.mark.lineStyle.color") || b,
                            lineType: l.deepQuery([a], "toolbox.feature.mark.lineStyle.type") || "dashed"
                        }
                    }, n.addHoverShape(S)
                }
            }

            function F() {
                if (E) E = !1; else {
                    var e = l.shapeList.length - 1;
                    d.length == e - 1 && (z(v.markUndo), z(v.markClear));
                    if (d.length < e) {
                        var t = l.shapeList[l.shapeList.length - 1];
                        n.delShape(t.id), n.refresh(), l.shapeList.pop()
                    }
                }
                return !0
            }

            function I() {
                E && (E = !1);
                var e = l.shapeList.length - d.length - 1, t = !1;
                while (e--) n.delShape(l.shapeList.pop().id), t = !0;
                return t && (z(v.markUndo), z(v.markClear), n.refresh()), !0
            }

            function q() {
                return T && (T = !1), C.pop(), C.length > 0 ? f.dataZoom.absoluteZoom(C[C.length - 1]) : (f.dataZoom.rectZoom(), z(v.dataZoomReset), n.refresh()), !0
            }

            function R() {
                E = !1, w && (w = !1, v.mark && n.modShape(v.mark.id, {style: {strokeColor: v.mark.highlightStyle.strokeColor}}), n.un(o.EVENT.CLICK, j), n.un(o.EVENT.MOUSEMOVE, P))
            }

            function U() {
                T = !1, x && (x = !1, v.dataZoom && n.modShape(v.dataZoom.id, {style: {strokeColor: v.dataZoom.highlightStyle.strokeColor}}), n.un(o.EVENT.MOUSEDOWN, H), n.un(o.EVENT.MOUSEUP, B), n.un(o.EVENT.MOUSEMOVE, P))
            }

            function z(e) {
                n.modShape(e.id, {hoverable: !1, clickable: !1, style: {strokeColor: y}})
            }

            function W(e) {
                n.modShape(e.id, {hoverable: !0, clickable: !0, style: {strokeColor: e.highlightStyle.strokeColor}})
            }

            function X() {
                return k.show(a), !0
            }

            function V() {
                return R(), U(), t.dispatch(s.EVENT.RESTORE), !0
            }

            function $() {
                var e = a.toolbox.feature.saveAsImage, t = e.type || "png";
                t != "png" && t != "jpeg" && (t = "png");
                var r = n.toDataURL("image/" + t), i = document.createElement("div");
                i.id = "__echarts_download_wrap__", i.style.cssText = "position:fixed;z-index:99999;display:block;top:0;left:0;background-color:rgba(33,33,33,0.5);text-align:center;width:100%;height:100%;line-height:" + document.documentElement.clientHeight + "px;";
                var s = document.createElement("a");
                s.href = r, s.setAttribute("download", (e.name ? e.name : a.title && (a.title.text || a.title.subtext) ? a.title.text || a.title.subtext : "ECharts") + "." + t), s.innerHTML = '<img src="' + r + '" title="' + (!window.attachEvent || navigator.userAgent.indexOf("Opera") !== -1 ? e.lang ? e.lang : "点击保存" : "右键->图片另存为") + '"/>', i.appendChild(s), document.body.appendChild(i), s = null, i = null, setTimeout(function () {
                    var e = document.getElementById("__echarts_download_wrap__");
                    e && (e.onclick = function () {
                        var e = document.getElementById("__echarts_download_wrap__");
                        e.onclick = null, e.innerHTML = "", document.body.removeChild(e), e = null
                    }, e = null)
                }, 500);
                return
            }

            function J(e) {
                R();
                var n = e.target._name;
                return n == h ? h = !1 : h = n, t.dispatch(s.EVENT.MAGIC_TYPE_CHANGED, e.event, {magicType: h}), !0
            }

            function K(e) {
                if (e.toolbox && e.toolbox.show && e.toolbox.feature.magicType && e.toolbox.feature.magicType.length > 0) {
                    var t = e.toolbox.feature.magicType, n = t.length;
                    p = {};
                    while (n--) p[t[n]] = !0;
                    n = e.series.length;
                    var r, i;
                    while (n--) r = e.series[n].type, p[r] && (i = e.xAxis instanceof Array ? e.xAxis[e.series[n].xAxisIndex || 0] : e.xAxis, i && i.type == "category" && (i.__boundaryGap = typeof i.boundaryGap != "undefined" ? i.boundaryGap : !0), i = e.yAxis instanceof Array ? e.yAxis[e.series[n].yAxisIndex || 0] : e.yAxis, i && i.type == "category" && (i.__boundaryGap = typeof i.boundaryGap != "undefined" ? i.boundaryGap : !0), e.series[n].__type = r)
                }
                h = !1;
                var s = e.dataZoom;
                if (s && s.show) {
                    var o = typeof s.start != "undefined" && s.start >= 0 && s.start <= 100 ? s.start : 0,
                        u = typeof s.end != "undefined" && s.end >= 0 && s.end <= 100 ? s.end : 100;
                    o > u && (o += u, u = o - u, o -= u), C = [{start: o, end: u, start2: 0, end2: 100}]
                } else C = []
            }

            function Q() {
                if (h) {
                    for (var e = 0, t = a.series.length; e < t; e++) p[a.series[e].type] && (a.series[e].type = h);
                    var n = h == s.CHART_TYPE_LINE ? !1 : !0, r;
                    if (a.xAxis instanceof Array) {
                        r = a.xAxis.length;
                        while (r--) (a.xAxis[r].type || "category") == "category" && (a.xAxis[r].boundaryGap = n)
                    } else a.xAxis && (a.xAxis.type || "category") == "category" && (a.xAxis.boundaryGap = n);
                    if (a.yAxis instanceof Array) {
                        r = a.yAxis.length;
                        while (r--) a.yAxis[r].type == "category" && (a.yAxis[r].boundaryGap = n)
                    } else a.yAxis && a.yAxis.type == "category" && (a.yAxis.boundaryGap = n)
                } else {
                    var i;
                    for (var e = 0, t = a.series.length; e < t; e++) p[a.series[e].type] && (a.series[e].type = a.series[e].__type, a.xAxis instanceof Array ? (i = a.xAxis[a.series[e].xAxisIndex || 0], i.type == "category" && (i.boundaryGap = i.__boundaryGap)) : (i = a.xAxis, i && i.type == "category" && (i.boundaryGap = i.__boundaryGap)), a.yAxis instanceof Array ? (i = a.yAxis[a.series[e].yAxisIndex || 0], i.type == "category" && (i.boundaryGap = i.__boundaryGap)) : (i = a.yAxis, i && i.type == "category" && (i.boundaryGap = i.__boundaryGap)))
                }
                return a
            }

            function G(e, t) {
                R(), U(), e.toolbox = l.reformOption(e.toolbox), e.toolbox.padding = l.reformCssArray(e.toolbox.padding), a = e, f = t, l.shapeList = [], e.toolbox.show && L(), Z()
            }

            function Y() {
                R(), l.clear(), a.toolbox.show && L(), k && k.resize()
            }

            function Z() {
                k && k.hide()
            }

            function et() {
                k && k.dispose(), l.clear(), l.shapeList = null, l = null
            }

            function tt(e) {
                e && (e.toolbox = l.reformOption(e.toolbox), e.toolbox.padding = l.reformCssArray(e.toolbox.padding), a = e)
            }

            var i = e("./base");
            i.call(this, n);
            var s = e("../config"), o = e("zrender/config"), u = e("zrender/tool/event"), a, f, l = this;
            l.type = s.COMPONENT_TYPE_TOOLBOX;
            var c = l.getZlevelBase(), h, p, d, v = {}, m, g = "red", y = "#ccc", b, w, E, S, x, T, N, C, k;
            l.dispose = et, l.render = G, l.resize = Y, l.hideDataView = Z, l.getMagicOption = Q, l.reset = K, l.refresh = tt
        }

        return e("../component").define("toolbox", t), t
    }), r("echarts/component/dataView", ["require", "./base", "../config", "../component"], function (e) {
        function t(t, n, r, i) {
            function b() {
                v = "width:" + y + "px;" + "height:" + 0 + "px;" + "background-color:#f0ffff;", f.style.cssText = d + v, i.onselectstart = function () {
                    return !1
                }
            }

            function w(e) {
                p = !0;
                var t = u.deepQuery([r], "toolbox.feature.dataView.lang") || a;
                r = e, f.innerHTML = '<p style="padding:8px 0;margin:0 0 10px 0;border-bottom:1px solid #eee">' + (t[0] || a[0]) + "</p>", l.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (y - 15) + "px;" + "height:" + (g - 100) + "px;";
                var n = u.deepQuery([r], "toolbox.feature.dataView.optionToContent");
                typeof n != "function" ? l.value = E() : l.value = n(r), f.appendChild(l), h.style.cssText = "float:right;padding:1px 6px;", h.innerHTML = t[1] || a[1], h.onclick = b, f.appendChild(h), u.deepQuery([r], "toolbox.feature.dataView.readOnly") === !1 ? (c.style.cssText = "float:right;margin-right:10px;padding:1px 6px;", c.innerHTML = t[2] || a[2], c.onclick = S, f.appendChild(c), l.readOnly = !1, l.style.cursor = "default") : (l.readOnly = !0, l.style.cursor = "text"), v = "width:" + y + "px;" + "height:" + g + "px;" + "background-color:#fff;", f.style.cssText = d + v, i.onselectstart = function () {
                    return !0
                }
            }

            function E() {
                var e, t, n, i, s, u, a = [], f = "";
                if (r.xAxis) {
                    r.xAxis instanceof Array ? a = r.xAxis : a = [r.xAxis];
                    for (e = 0, i = a.length; e < i; e++) if ((a[e].type || "category") == "category") {
                        u = [];
                        for (t = 0, n = a[e].data.length; t < n; t++) s = a[e].data[t], u.push(typeof s.value != "undefined" ? s.value : s);
                        f += u.join(", ") + "\n\n"
                    }
                }
                if (r.yAxis) {
                    r.yAxis instanceof Array ? a = r.yAxis : a = [r.yAxis];
                    for (e = 0, i = a.length; e < i; e++) if (a[e].type == "category") {
                        u = [];
                        for (t = 0, n = a[e].data.length; t < n; t++) s = a[e].data[t], u.push(typeof s.value != "undefined" ? s.value : s);
                        f += u.join(", ") + "\n\n"
                    }
                }
                var l = r.series, c;
                for (e = 0, i = l.length; e < i; e++) {
                    u = [];
                    for (t = 0, n = l[e].data.length; t < n; t++) s = l[e].data[t], l[e].type == o.CHART_TYPE_PIE || l[e].type == o.CHART_TYPE_MAP ? c = (s.name || "-") + ":" : c = "", l[e].type == o.CHART_TYPE_SCATTER && (s = typeof s.value != "undefined" ? s.value : s, s = s.join(", ")), u.push(c + (typeof s.value != "undefined" ? s.value : s));
                    f += (l[e].name || "-") + " : \n", f += u.join(l[e].type == o.CHART_TYPE_SCATTER ? "\n" : ", "), f += "\n\n"
                }
                return f
            }

            function S() {
                var e = l.value, n = u.deepQuery([r], "toolbox.feature.dataView.contentToOption");
                if (typeof n != "function") {
                    e = e.split("\n");
                    var i = [];
                    for (var s = 0, a = e.length; s < a; s++) e[s] = T(e[s]), e[s] !== "" && i.push(e[s]);
                    x(i)
                } else n(e, r);
                b(), setTimeout(function () {
                    t && t.dispatch(o.EVENT.DATA_VIEW_CHANGED, null, {option: r})
                }, G_vmlCanvasManager ? 100 : 800)
            }

            function x(e) {
                var t, n, i, s, u, a = [], f = 0, l, c;
                if (r.xAxis) {
                    r.xAxis instanceof Array ? a = r.xAxis : a = [r.xAxis];
                    for (t = 0, s = a.length; t < s; t++) if ((a[t].type || "category") == "category") {
                        l = e[f].split(",");
                        for (n = 0, i = a[t].data.length; n < i; n++) c = T(l[n] || ""), u = a[t].data[n], typeof a[t].data[n].value != "undefined" ? a[t].data[n].value = c : a[t].data[n] = c;
                        f++
                    }
                }
                if (r.yAxis) {
                    r.yAxis instanceof Array ? a = r.yAxis : a = [r.yAxis];
                    for (t = 0, s = a.length; t < s; t++) if (a[t].type == "category") {
                        l = e[f].split(",");
                        for (n = 0, i = a[t].data.length; n < i; n++) c = T(l[n] || ""), u = a[t].data[n], typeof a[t].data[n].value != "undefined" ? a[t].data[n].value = c : a[t].data[n] = c;
                        f++
                    }
                }
                var h = r.series;
                for (t = 0, s = h.length; t < s; t++) {
                    f++;
                    if (h[t].type == o.CHART_TYPE_SCATTER) for (var n = 0, i = h[t].data.length; n < i; n++) l = e[f], c = l.replace(" ", "").split(","), typeof h[t].data[n].value != "undefined" ? h[t].data[n].value = c : h[t].data[n] = c, f++; else {
                        l = e[f].split(",");
                        for (var n = 0, i = h[t].data.length; n < i; n++) c = (l[n] || "").replace(/.*:/, ""), c = T(c), c = c != "-" && c !== "" ? c - 0 : "-", typeof h[t].data[n].value != "undefined" ? h[t].data[n].value = c : h[t].data[n] = c;
                        f++
                    }
                }
            }

            function T(e) {
                var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
                return e.replace(t, "")
            }

            function N(e) {
                e = e || window.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }

            function C() {
                f.className = m, b(), i.firstChild.appendChild(f), window.addEventListener ? (f.addEventListener("click", N), f.addEventListener("mousewheel", N), f.addEventListener("mousemove", N), f.addEventListener("mousedown", N), f.addEventListener("mouseup", N), f.addEventListener("touchstart", N), f.addEventListener("touchmove", N), f.addEventListener("touchend", N)) : (f.attachEvent("onclick", N), f.attachEvent("onmousewheel", N), f.attachEvent("onmousemove", N), f.attachEvent("onmousedown", N), f.attachEvent("onmouseup", N))
            }

            function k() {
                g = n.getHeight(), y = n.getWidth(), f.offsetHeight > 10 && (v = "width:" + y + "px;" + "height:" + g + "px;" + "background-color:#fff;", f.style.cssText = d + v, l.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (y - 15) + "px;" + "height:" + (g - 100) + "px;")
            }

            function L() {
                window.removeEventListener ? (f.removeEventListener("click", N), f.removeEventListener("mousewheel", N), f.removeEventListener("mousemove", N), f.removeEventListener("mousedown", N), f.removeEventListener("mouseup", N), f.removeEventListener("touchstart", N), f.removeEventListener("touchmove", N), f.removeEventListener("touchend", N)) : (f.detachEvent("onclick", N), f.detachEvent("onmousewheel", N), f.detachEvent("onmousemove", N), f.detachEvent("onmousedown", N), f.detachEvent("onmouseup", N)), c.onclick = null, h.onclick = null, p && (f.removeChild(l), f.removeChild(c), f.removeChild(h)), l = null, c = null, h = null, i.firstChild.removeChild(f), f = null, u = null
            }

            var s = e("./base");
            s.call(this, n);
            var o = e("../config"), u = this;
            u.type = o.COMPONENT_TYPE_DATAVIEW;
            var a = ["Data View", "close", "refresh"], f = document.createElement("div"),
                l = document.createElement("textArea"), c = document.createElement("button"),
                h = document.createElement("button"), p = !1,
                d = "position:absolute;display:block;overflow:hidden;transition:height 0.8s,background-color 1s;-moz-transition:height 0.8s,background-color 1s;-webkit-transition:height 0.8s,background-color 1s;-o-transition:height 0.8s,background-color 1s;z-index:1;left:0;top:0;",
                v, m = "echarts-dataview", g = n.getHeight(), y = n.getWidth();
            u.dispose = L, u.resize = k, u.show = w, u.hide = b, C()
        }

        return e("../component").define("dataView", t), t
    }), r("echarts/util/coordinates", ["require", "zrender/tool/math"], function (e) {
        function n(e, n) {
            return [e * t.sin(n), e * t.cos(n)]
        }

        function r(e, t) {
            return [Math.sqrt(e * e + t * t), Math.atan(t / e)]
        }

        var t = e("zrender/tool/math");
        return {polar2cartesian: n, cartesian2polar: r}
    }), r("echarts/component/polar", ["require", "./base", "../config", "../util/coordinates", "zrender/tool/util", "../component"], function (e) {
        function t(t, n, r, i) {
            function p(e, t) {
                i = t, B(e)
            }

            function d() {
                for (var e = 0; e < l.length; e++) f.reformOption(l[e]), h = [l[e], r], v(e), m(e), y(e), L(e), g(e);
                for (var e = 0; e < f.shapeList.length; e++) f.shapeList[e].id = n.newShapeId(f.type), n.addShape(f.shapeList[e])
            }

            function v(e) {
                var t = l[e], r = f.deepQuery(h, "indicator"), i = r.length, s = t.startAngle, o = 2 * Math.PI / i,
                    a = f.parsePercent(t.radius, Math.min(n.getWidth(), n.getHeight()) / 2), c = t.__ecIndicator = [],
                    p;
                for (var d = 0; d < i; d++) p = u.polar2cartesian(a, s * Math.PI / 180 + o * d), c.push({vector: [p[1], -p[0]]})
            }

            function m(e) {
                var t = l[e], n = t.__ecIndicator, r = t.splitArea, i = t.splitLine, s = N(e), o = t.splitNumber,
                    u = i.lineStyle.color, a = i.lineStyle.width, c = i.show, p = f.deepQuery(h, "axisLine");
                w(n, o, s, r, u, a, c), C(n, s, p)
            }

            function g(e) {
                var t = l[e], n = f.deepQuery(h, "indicator"), i = t.__ecIndicator, s, o, u, c,
                    p = f.deepQuery(h, "splitNumber"), d = N(e), o, v, m, g, y, b = f.deepQuery(h, "precision");
                for (var w = 0; w < n.length; w++) {
                    s = f.deepQuery([n[w], t, r], "axisLabel");
                    if (s.show) {
                        u = {}, u.textFont = f.getFont(), u = a.merge(u, s), u.lineWidth = u.width, o = i[w].vector, v = i[w].value, g = w / n.length * 2 * Math.PI, y = s.offset || 10;
                        for (var E = 1; E <= p; E++) c = a.merge({}, u), m = E * (v.max - v.min) / p + v.min, b && (m = m.toFixed(b)), c.text = m, c.x = E * o[0] / p + Math.cos(g) * y + d[0], c.y = E * o[1] / p + Math.sin(g) * y + d[1], f.shapeList.push({
                            shape: "text",
                            style: c,
                            draggable: !1,
                            hoverable: !1
                        })
                    }
                }
            }

            function y(e) {
                var t = l[e], n = t.__ecIndicator, i, s = f.deepQuery(h, "indicator"), o = N(e), u, a, c, p, d = 0,
                    v = 0, m, g;
                for (var y = 0; y < s.length; y++) {
                    c = f.deepQuery([s[y], t, r], "name");
                    if (!c.show) continue;
                    g = f.deepQuery([c, t, r], "textStyle"), u = {}, u.textFont = f.getFont(g), u.color = g.color, typeof c.formatter == "function" ? u.text = c.formatter(s[y].text, y) : typeof c.formatter == "string" ? u.text = c.formatter.replace("{value}", s[y].text) : u.text = s[y].text, i = n[y].vector, Math.round(i[0]) > 0 ? a = "left" : Math.round(i[0]) < 0 ? a = "right" : a = "center", c.margin ? (m = c.margin, d = i[0] > 0 ? m : -m, v = i[1] > 0 ? m : -m, d = i[0] === 0 ? 0 : d, v = i[1] === 0 ? 0 : v, i = T(i, o, 1)) : i = T(i, o, 1.2), u.textAlign = a, u.x = i[0] + d, u.y = i[1] + v, c.rotate && (p = [c.rotate / 180 * Math.PI, i[0], i[1]]), f.shapeList.push({
                        shape: "text",
                        style: u,
                        draggable: !1,
                        hoverable: !1,
                        rotation: p
                    })
                }
            }

            function b(e) {
                var e = e || 0, t = l[e], n = N(e), r = t.__ecIndicator, i = r.length, s = [], o, u;
                for (var a = 0; a < i; a++) o = r[a].vector, s.push(T(o, n, 1.2));
                return u = S(s, "fill", "rgba(0,0,0,0)", "", 1), u
            }

            function w(e, t, n, r, i, s, o) {
                var u, a, l, c;
                for (var h = 0; h < t; h++) a = (t - h) / t, c = E(e, a, n), o && (u = S(c, "stroke", "", i, s), f.shapeList.push(u)), r.show && (l = (t - h - 1) / t, x(e, r, a, l, n, h))
            }

            function E(e, t, n) {
                var r = [], i = e.length, s;
                for (var o = 0; o < i; o++) s = e[o].vector, r.push(T(s, n, t));
                return r
            }

            function S(e, t, n, r, i, s, o) {
                return {
                    shape: "polygon",
                    style: {pointList: e, brushType: t, color: n, strokeColor: r, lineWidth: i},
                    hoverable: s || !1,
                    draggable: o || !1
                }
            }

            function x(e, t, n, r, i, s) {
                var o = e.length, u, a = t.areaStyle.color, l, c, h, p = [], o = e.length, d;
                typeof a == "string" && (a = [a]), l = a.length, u = a[s % l];
                for (var v = 0; v < o; v++) p = [], c = e[v].vector, h = e[(v + 1) % o].vector, p.push(T(c, i, n)), p.push(T(c, i, r)), p.push(T(h, i, r)), p.push(T(h, i, n)), d = S(p, "fill", u, "", 1), f.shapeList.push(d)
            }

            function T(e, t, n) {
                return [e[0] * n + t[0], e[1] * n + t[1]]
            }

            function N(e) {
                var e = e || 0;
                return f.parseCenter(l[e].center)
            }

            function C(e, t, n) {
                var r = e.length, i, s, o = n.lineStyle, u = o.color, a = o.width, l = o.type;
                for (var c = 0; c < r; c++) s = e[c].vector, i = k(t[0], t[1], s[0] + t[0], s[1] + t[1], u, a, l), f.shapeList.push(i)
            }

            function k(e, t, n, r, i, s, o) {
                return {
                    shape: "line",
                    style: {xStart: e, yStart: t, xEnd: n, yEnd: r, strokeColor: i, lineWidth: s, lineType: o},
                    hoverable: !1
                }
            }

            function L(e) {
                var t = l[e], n = f.deepQuery(h, "indicator"), r = n.length, i = t.__ecIndicator, s, o, u, a = A(e),
                    c = t.splitNumber, p = f.deepQuery(h, "boundaryGap"), d = f.deepQuery(h, "precision"),
                    v = f.deepQuery(h, "power"), m = f.deepQuery(h, "scale");
                for (var g = 0; g < r; g++) typeof n[g].max == "number" ? (o = n[g].max, u = n[g].min || 0, s = {
                    max: o,
                    min: u
                }) : s = O(a, g, c, p, d, v, m), i[g].value = s
            }

            function A(e) {
                var t = [], n, s, o = i.legend;
                for (var u = 0; u < c.length; u++) {
                    n = c[u], s = n.data || [];
                    for (var a = 0; a < s.length; a++) polarIndex = f.deepQuery([s[a], n, r], "polarIndex") || 0, polarIndex == e && (!o || o.isSelected(s[a].name)) && t.push(s[a])
                }
                return t
            }

            function O(e, t, n, r, i, s, o) {
                function m(e) {
                    (e > u || u === undefined) && (u = e), (e < a || a === undefined) && (a = e)
                }

                var u, a, f, l, c, h = 0, p, d, v;
                if (!e || e.length === 0) return;
                e.length == 1 && (a = 0);
                if (e.length != 1) for (var g = 0; g < e.length; g++) f = e[g].value[t], m(f); else {
                    v = e[0];
                    for (var g = 0; g < v.value.length; g++) m(v.value[g])
                }
                if (e.length != 1) if (o) {
                    l = M(u, a, n, i, s);
                    if (l >= 1) a = Math.floor(a / l) * l - l; else {
                        if (l === 0) return u > 0 ? (d = 0, p = 2 * u) : u === 0 ? (d = 0, p = 100) : (p = 0, d = 2 * a), {
                            max: p,
                            min: d
                        };
                        c = (l + "").split(".")[1], h = c.length, a = Math.floor(a * Math.pow(10, h)) / Math.pow(10, h) - l
                    }
                    Math.abs(a) <= l && (a = 0), u = a + Math.floor(l * Math.pow(10, h) * (n + 1)) / Math.pow(10, h)
                } else a = a > 0 ? 0 : a;
                return r && (u = u > 0 ? u * 1.2 : u * .8, a = a > 0 ? a * .8 : a * 1.2), {max: u, min: a}
            }

            function M(e, t, n, r, i) {
                var s = (e - t) / n, o, u;
                if (s > 1) return i ? (s = Math.ceil(s), s % i > 0 ? (Math.ceil(s / i) + 1) * i : s) : (o = (s + "").split(".")[0], u = o.length, o[0] >= 5 ? Math.pow(10, u) : (o[0] - 0 + 1) * Math.pow(10, u - 1));
                if (s == 1) return 1;
                if (s === 0) return 0;
                if (!r) {
                    o = (s + "").split(".")[1], u = 0;
                    while (o[u] == "0") u++;
                    return o[u] >= 5 ? "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u) : "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u + 1)
                }
                return Math.ceil(s * Math.pow(10, r)) / Math.pow(10, r)
            }

            function _(e, t, n) {
                e = e || 0, t = t || 0;
                var r = l[e].__ecIndicator;
                if (t >= r.length) return;
                var i = l[e].__ecIndicator[t], s = N(e), o = i.vector, u = i.value.max, a = i.value.min, f;
                return typeof n != "number" ? s : (u != a ? f = (n - a) / (u - a) : f = .5, T(o, s, f))
            }

            function D(e) {
                var t = P(e);
                return t ? t.polarIndex : -1
            }

            function P(e) {
                var t, r, i, s, o, a, c, h, p, d = Math.min(n.getWidth(), n.getHeight()) / 2;
                for (var v = 0; v < l.length; v++) {
                    t = l[v], r = N(v);
                    if (e[0] == r[0] && e[1] == r[1]) return {polarIndex: v, valueIndex: 0};
                    i = f.parsePercent(t.radius, d), o = t.startAngle, a = t.indicator, c = a.length, h = 2 * Math.PI / c, s = u.cartesian2polar(e[0] - r[0], r[1] - e[1]), e[0] - r[0] < 0 && (s[1] += Math.PI), s[1] < 0 && (s[1] += 2 * Math.PI), p = s[1] - o / 180 * Math.PI + Math.PI * 2;
                    if (Math.abs(Math.cos(p % (h / 2))) * i > s[0]) return {
                        polarIndex: v,
                        valueIndex: Math.floor((p + h / 2) / h) % c
                    }
                }
            }

            function H(e) {
                var e = e || 0;
                return l[e].indicator
            }

            function B(e) {
                e && (r = e, l = r.polar, c = r.series), f.clear(), d()
            }

            var s = e("./base");
            s.call(this, n);
            var o = e("../config"), u = e("../util/coordinates"), a = e("zrender/tool/util"), f = this;
            f.type = o.COMPONENT_TYPE_POLAR;
            var l, c, h;
            f.refresh = B, f.getVector = _, f.getDropBox = b, f.getCenter = N, f.getIndicator = H, f.isInside = D, f.getNearestIndex = P, p(r, i)
        }

        return e("../component").define("polar", t), t
    }), r("echarts/echarts", ["require", "./config", "zrender", "zrender/tool/util", "zrender/tool/event", "zrender/config", "./util/shape/icon", "./chart", "./chart/island", "./component", "./component/title", "./component/axis", "./component/categoryAxis", "./component/valueAxis", "./component/grid", "./component/dataZoom", "./component/legend", "./component/dataRange", "./component/tooltip", "./component/toolbox", "./component/dataView", "./component/polar", "./util/ecData", "./chart", "./component", "zrender/tool/util", "zrender/tool/util", "zrender/tool/util", "zrender/tool/color", "zrender/tool/util", "zrender/tool/util", "zrender/tool/util"], function (e) {
        function r(t, r) {
            function y() {
                var s = e("zrender");
                (s.version || "1.0.3").replace(".", "") - 0 < n.dependencies.zrender.replace(".", "") - 0 && console.error("ZRender " + (s.version || "1.0.3-") + " is too old for ECharts " + n.version + ". Current version need ZRender " + n.dependencies.zrender + "+"), u = s.init(t);
                var o = e("zrender/tool/util");
                a = o.clone(r || {}), c = [], h = {};
                var f = e("zrender/tool/event");
                f.Dispatcher.call(h), h.bind(i.EVENT.LEGEND_SELECTED, L), h.bind(i.EVENT.DATA_ZOOM, A), h.bind(i.EVENT.DATA_RANGE, O), h.bind(i.EVENT.MAGIC_TYPE_CHANGED, M), h.bind(i.EVENT.DATA_VIEW_CHANGED, _), h.bind(i.EVENT.TOOLTIP_HOVER, D), h.bind(i.EVENT.RESTORE, P), h.bind(i.EVENT.REFRESH, H);
                var l = e("zrender/config");
                u.on(l.EVENT.CLICK, b), u.on(l.EVENT.MOUSEOVER, w), u.on(l.EVENT.MOUSEWHEEL, E), u.on(l.EVENT.DRAGSTART, S), u.on(l.EVENT.DRAGEND, k), u.on(l.EVENT.DRAGENTER, x), u.on(l.EVENT.DRAGOVER, T), u.on(l.EVENT.DRAGLEAVE, N), u.on(l.EVENT.DROP, C), e("./util/shape/icon");
                var p = e("./chart");
                e("./chart/island");
                var d = p.get("island");
                v = new d(h, u);
                var g = e("./component");
                e("./component/title"), e("./component/axis"), e("./component/categoryAxis"), e("./component/valueAxis"), e("./component/grid"), e("./component/dataZoom"), e("./component/legend"), e("./component/dataRange"), e("./component/tooltip"), e("./component/toolbox"), e("./component/dataView"), e("./component/polar");
                var y = g.get("toolbox");
                m = new y(h, u, t)
            }

            function b(e) {
                var t = c.length;
                while (t--) c[t] && c[t].onclick && c[t].onclick(e);
                if (e.target) {
                    var n = F(e.target);
                    n && typeof n.seriesIndex != "undefined" && h.dispatch(i.EVENT.CLICK, e.event, n)
                }
            }

            function w(e) {
                if (e.target) {
                    var t = F(e.target);
                    t && typeof t.seriesIndex != "undefined" && h.dispatch(i.EVENT.HOVER, e.event, t)
                }
            }

            function E(e) {
                h.dispatch(i.EVENT.MOUSEWHEEL, e.event, F(e.target))
            }

            function S(e) {
                p = {dragIn: !1, dragOut: !1, needRefresh: !1};
                var t = c.length;
                while (t--) c[t] && c[t].ondragstart && c[t].ondragstart(e)
            }

            function x(e) {
                var t = c.length;
                while (t--) c[t] && c[t].ondragenter && c[t].ondragenter(e)
            }

            function T(e) {
                var t = c.length;
                while (t--) c[t] && c[t].ondragover && c[t].ondragover(e)
            }

            function N(e) {
                var t = c.length;
                while (t--) c[t] && c[t].ondragleave && c[t].ondragleave(e)
            }

            function C(e) {
                var t = c.length;
                while (t--) c[t] && c[t].ondrop && c[t].ondrop(e, p);
                v.ondrop(e, p)
            }

            function k(e) {
                var t = c.length;
                while (t--) c[t] && c[t].ondragend && c[t].ondragend(e, p);
                v.ondragend(e, p), p.needRefresh && (j(v.getOption()), h.dispatch(i.EVENT.DATA_CHANGED, e.event, F(e.target)), h.dispatch(i.EVENT.REFRESH))
            }

            function L(e) {
                p.needRefresh = !1;
                var t = c.length;
                while (t--) c[t] && c[t].onlegendSelected && c[t].onlegendSelected(e, p);
                d = e.selected, p.needRefresh && h.dispatch(i.EVENT.REFRESH)
            }

            function A(e) {
                p.needRefresh = !1;
                var t = c.length;
                while (t--) c[t] && c[t].ondataZoom && c[t].ondataZoom(e, p);
                p.needRefresh && h.dispatch(i.EVENT.REFRESH)
            }

            function O(e) {
                p.needRefresh = !1;
                var t = c.length;
                while (t--) c[t] && c[t].ondataRange && c[t].ondataRange(e, p);
                p.needRefresh && u.refresh()
            }

            function M() {
                I(B())
            }

            function _(e) {
                j(e.option), h.dispatch(i.EVENT.DATA_CHANGED, null, e), h.dispatch(i.EVENT.REFRESH)
            }

            function D(e) {
                var t = c.length, n = [];
                while (t--) c[t] && c[t].ontooltipHover && c[t].ontooltipHover(e, n)
            }

            function P() {
                s.restore()
            }

            function H(e) {
                g = !0, s.refresh(e), g = !1
            }

            function B(e) {
                var t = e || m.getMagicOption(), n;
                if (f.xAxis) if (f.xAxis instanceof Array) {
                    n = f.xAxis.length;
                    while (n--) t.xAxis[n].data = f.xAxis[n].data
                } else t.xAxis.data = f.xAxis.data;
                if (f.yAxis) if (f.yAxis instanceof Array) {
                    n = f.yAxis.length;
                    while (n--) t.yAxis[n].data = f.yAxis[n].data
                } else t.yAxis.data = f.yAxis.data;
                n = t.series.length;
                while (n--) t.series[n].data = f.series[n].data;
                return t
            }

            function j(e) {
                if (e.dataZoom && e.dataZoom.show || e.toolbox && e.toolbox.show && e.toolbox.feature && e.toolbox.feature.dataZoom) for (var t = 0, n = c.length; t < n; t++) if (c[t].type == i.COMPONENT_TYPE_DATAZOOM) {
                    c[t].syncBackupData(e, f);
                    return
                }
                var r = e.series, s;
                for (var t = 0, n = r.length; t < n; t++) {
                    s = r[t].data;
                    for (var o = 0, u = s.length; o < u; o++) f.series[t].data[o] = s[o]
                }
            }

            function F(t) {
                if (t) {
                    var n = e("./util/ecData");
                    return {
                        seriesIndex: n.get(t, "seriesIndex"),
                        dataIndex: n.get(t, "dataIndex"),
                        data: n.get(t, "data")
                    }
                }
                return
            }

            function I(n) {
                U(), u.clear();
                var r = e("./chart"), i = e("./component"), s;
                if (n.title) {
                    var a = new i.get("title");
                    s = new a(h, u, n), c.push(s)
                }
                var f;
                if (n.tooltip) {
                    var l = i.get("tooltip");
                    f = new l(h, u, n, t), c.push(f)
                }
                var p;
                if (n.legend) {
                    var g = new i.get("legend");
                    p = new g(h, u, n, d), c.push(p)
                }
                var y;
                if (n.dataRange) {
                    var b = new i.get("dataRange");
                    y = new b(h, u, n), c.push(y)
                }
                var w, E, S, x;
                if (n.grid || n.xAxis || n.yAxis) {
                    var T = i.get("grid");
                    w = new T(h, u, n), c.push(w);
                    var N = i.get("dataZoom");
                    E = new N(h, u, n, {legend: p, grid: w}), c.push(E);
                    var C = i.get("axis");
                    S = new C(h, u, n, {legend: p, grid: w}, "xAxis"), c.push(S), x = new C(h, u, n, {
                        legend: p,
                        grid: w
                    }, "yAxis"), c.push(x)
                }
                var k;
                if (n.polar) {
                    var L = i.get("polar");
                    k = new L(h, u, n, {legend: p}), c.push(k)
                }
                f && f.setComponent({grid: w, xAxis: S, yAxis: x, polar: k});
                var A, O, M, _ = {};
                for (var D = 0, P = n.series.length; D < P; D++) {
                    O = n.series[D].type;
                    if (!O) continue;
                    _[O] || (_[O] = !0, A = r.get(O), A && (M = new A(h, u, n, {
                        tooltip: f,
                        legend: p,
                        dataRange: y,
                        grid: w,
                        xAxis: S,
                        yAxis: x,
                        polar: k
                    }), c.push(M)))
                }
                v.render(n), m.render(n, {dataZoom: E});
                if (n.animation && !n.renderAsImage) {
                    var H = c.length;
                    while (H--) c[H] && c[H].animation && c[H].animation()
                }
                u.render();
                var B = "IMG" + o, j = document.getElementById(B);
                n.renderAsImage && !G_vmlCanvasManager ? (j ? j.src = K(n.renderAsImage) : (j = Q(n.renderAsImage), j.id = B, j.style.position = "absolute", j.style.left = 0, j.style.top = 0, t.firstChild.appendChild(j)), Y(), u.un(), U(), u.clear()) : j && j.parentNode.removeChild(j), j = null
            }

            function q() {
                var t = e("zrender/tool/util");
                l.legend && l.legend.selected ? d = l.legend.selected : d = {}, f = t.clone(l), a = t.clone(l), v.clear(), m.reset(a), I(a)
            }

            function R(t) {
                t = t || {};
                var n = t.option;
                if (!g && t.option) {
                    var r = e("zrender/tool/util");
                    f.toolbox && f.toolbox.show && f.toolbox.feature.magicType && f.toolbox.feature.magicType.length > 0 ? n = B() : n = B(v.getOption()), r.merge(n, t.option, {
                        overwrite: !0,
                        recursive: !0
                    }), r.merge(f, t.option, {overwrite: !0, recursive: !0}), r.merge(l, t.option, {
                        overwrite: !0,
                        recursive: !0
                    }), v.refresh(n), m.refresh(n)
                }
                for (var i = 0, s = c.length; i < s; i++) c[i].refresh && c[i].refresh(n);
                u.refresh()
            }

            function U() {
                var e = c.length;
                while (e--) c[e] && c[e].dispose && c[e].dispose();
                c = []
            }

            function z(t, n) {
                var r = e("zrender/tool/util");
                n ? a = r.clone(t) : r.merge(a, r.clone(t), {overwrite: !0, recursive: !0});
                if (!a.series || a.series.length === 0) return;
                typeof a.calculable == "undefined" && (a.calculable = i.calculable), typeof a.nameConnector == "undefined" && (a.nameConnector = i.nameConnector), typeof a.valueConnector == "undefined" && (a.valueConnector = i.valueConnector), typeof a.animation == "undefined" && (a.animation = i.animation), typeof a.animationDuration == "undefined" && (a.animationDuration = i.animationDuration), typeof a.animationEasing == "undefined" && (a.animationEasing = i.animationEasing), typeof a.addDataAnimation == "undefined" && (a.addDataAnimation = i.addDataAnimation);
                var o = e("zrender/tool/color");
                return a.color && a.color.length > 0 ? u.getColor = function (e) {
                    return o.getColor(e, a.color)
                } : u.getColor = function (e) {
                    return o.getColor(e, i.color)
                }, u.getCalculableColor = function () {
                    return a.calculableColor || i.calculableColor
                }, f = r.clone(a), l = r.clone(a), a.legend && a.legend.selected ? d = a.legend.selected : d = {}, v.clear(), m.reset(a), I(a), s
            }

            function W() {
                var t = e("zrender/tool/util");
                return f.toolbox && f.toolbox.show && f.toolbox.feature.magicType && f.toolbox.feature.magicType.length > 0 ? t.clone(B()) : t.clone(B(v.getOption()))
            }

            function X(e, t) {
                return t ? (a.series = e, s.setOption(a, t)) : s.setOption({series: e}), s
            }

            function V() {
                return W().series
            }

            function $(t, n, r, o, u) {
                var a = e("zrender/tool/util"), p = t instanceof Array ? t : [[t, n, r, o, u]], g, y, b;
                f.toolbox && f.toolbox.show && f.toolbox.feature.magicType && f.toolbox.feature.magicType.length > 0 ? b = B() : b = B(v.getOption());
                for (var w = 0, E = p.length; w < E; w++) {
                    t = p[w][0], n = p[w][1], r = p[w][2], o = p[w][3], u = p[w][4];
                    if (l.series[t]) {
                        r ? (l.series[t].data.unshift(n), f.series[t].data.unshift(n), o || (l.series[t].data.pop(), n = f.series[t].data.pop())) : (l.series[t].data.push(n), f.series[t].data.push(n), o || (l.series[t].data.shift(), n = f.series[t].data.shift()));
                        if (typeof u != "undefined" && l.series[t].type == i.CHART_TYPE_PIE && f.legend && f.legend.data) b.legend.data = f.legend.data, r ? (l.legend.data.unshift(u), f.legend.data.unshift(u)) : (l.legend.data.push(u), f.legend.data.push(u)), o || (y = a.indexOf(f.legend.data, n.name), y != -1 && (l.legend.data.splice(y, 1), f.legend.data.splice(y, 1))), d[u] = !0; else if (typeof u != "undefined" && typeof l.xAxis != "undefined" && typeof l.yAxis != "undefined") {
                            g = l.series[t].xAxisIndex || 0;
                            if (typeof l.xAxis[g].type == "undefined" || l.xAxis[g].type == "category") r ? (l.xAxis[g].data.unshift(u), f.xAxis[g].data.unshift(u), o || (l.xAxis[g].data.pop(), f.xAxis[g].data.pop())) : (l.xAxis[g].data.push(u), f.xAxis[g].data.push(u), o || (l.xAxis[g].data.shift(), f.xAxis[g].data.shift()));
                            g = l.series[t].yAxisIndex || 0, l.yAxis[g].type == "category" && (r ? (l.yAxis[g].data.unshift(u), f.yAxis[g].data.unshift(u), o || (l.yAxis[g].data.pop(), f.yAxis[g].data.pop())) : (l.yAxis[g].data.push(u), f.yAxis[g].data.push(u), o || (l.yAxis[g].data.shift(), f.yAxis[g].data.shift())))
                        }
                    }
                }
                b.legend && (b.legend.selected = d);
                for (var w = 0, E = c.length; w < E; w++) b.addDataAnimation && c[w].addDataAnimation && c[w].addDataAnimation(p), c[w].type == i.COMPONENT_TYPE_DATAZOOM && (c[w].silence(!0), c[w].init(b), c[w].silence(!1));
                return v.refresh(b), m.refresh(b), setTimeout(function () {
                    h.dispatch(i.EVENT.REFRESH, "", {option: b})
                }, b.addDataAnimation ? 500 : 0), s
            }

            function J() {
                return u
            }

            function K(e) {
                if (G_vmlCanvasManager) return "";
                if (c.length === 0) {
                    var t = "IMG" + o, n = document.getElementById(t);
                    if (n) return n.src
                }
                return e = e || "png", e != "png" && e != "jpeg" && (e = "png"), u.toDataURL("image/" + e)
            }

            function Q(e) {
                var t = document.createElement("img");
                return t.src = K(e), t.title = l.title && l.title.text || "ECharts", t
            }

            function G(e, t) {
                return h.bind(e, t), s
            }

            function Y(e, t) {
                return h.unbind(e, t), s
            }

            function Z(t) {
                m.hideDataView();
                var n = e("zrender/tool/util");
                t = t || {}, t.textStyle = t.textStyle || {};
                var r = n.merge(n.clone(t.textStyle), i.textStyle, {overwrite: !1});
                return t.textStyle.textFont = r.fontStyle + " " + r.fontWeight + " " + r.fontSize + "px " + r.fontFamily, t.textStyle.text = t.text || "Loading...", typeof t.x != "undefined" && (t.textStyle.x = t.x), typeof t.y != "undefined" && (t.textStyle.y = t.y), u.showLoading(t), s
            }

            function et() {
                return u.hideLoading(), s
            }

            function tt() {
                u.resize();
                if (a.renderAsImage && !G_vmlCanvasManager) return I(a), s;
                for (var e = 0, t = c.length; e < t; e++) c[e].resize && c[e].resize();
                return v.resize(), m.resize(), u.refresh(), s
            }

            function nt() {
                return u.clear(), s
            }

            function rt() {
                v.dispose(), m.dispose(), U(), h.unbind(), u.dispose(), s = null;
                return
            }

            var i = e("./config"), s = this, o = "__ECharts__" + new Date - 0, u, a, f, l, c, h,
                p = {dragIn: !1, dragOut: !1, needRefresh: !1}, d, v, m, g;
            y(), s.setOption = z, s.setSeries = X, s.addData = $, s.getOption = W, s.getSeries = V, s.getZrender = J, s.getDataURL = K, s.getImage = Q, s.on = G, s.un = Y, s.showLoading = Z, s.hideLoading = et, s.resize = tt, s.refresh = R, s.restore = q, s.clear = nt, s.dispose = rt
        }

        var t = {}, n = t;
        return t.version = "1.3.5", t.dependencies = {zrender: "1.0.7"}, t.init = function (e, t) {
            t = t || {type: "canvas"};
            if (t.type == "canvas") return new r(e);
            t.type == "flash" && alert("未配置")
        }, t
    }), r("echarts", ["echarts/echarts"], function (e) {
        return e
    }), r("echarts/util/shape/symbol", ["require", "zrender/tool/color", "zrender/shape", "zrender/shape/base", "zrender/shape"], function (e) {
        function t() {
            this.type = "symbol"
        }

        return t.prototype = {
            _buildSinglePoint: function (e, t) {
                switch (t[3]) {
                    case"circle":
                    case"emptyCircle":
                        e.arc(t[0], t[1], t[2], 0, Math.PI * 2, !0);
                        break;
                    case"rectangle":
                    case"emptyRectangle":
                        e.rect(t[0] - t[2], t[1] - t[2], t[2] * 2, t[2] * 2);
                        break;
                    case"triangle":
                    case"emptyTriangle":
                        itemShape = {
                            shape: "polygon",
                            style: {
                                pointList: [[x, y - symbolSize], [x + symbolSize, y + symbolSize], [x - symbolSize, y + symbolSize]],
                                brushType: symbolType == "triangle" ? "fill" : "stroke"
                            }
                        };
                        break;
                    case"diamond":
                    case"emptyDiamond":
                        itemShape = {
                            shape: "polygon",
                            style: {
                                pointList: [[x, y - symbolSize], [x + symbolSize, y], [x, y + symbolSize], [x - symbolSize, y]],
                                brushType: symbolType == "diamond" ? "fill" : "stroke"
                            }
                        };
                        break;
                    default:
                        itemShape = {shape: "circle", style: {x: x, y: y, r: symbolSize, brushType: "fill"}}
                }
            }, buildPath: function (t, n) {
                var r = n.pointList, i = this.getRect(n), s = window.devicePixelRatio || 1,
                    o = t.getImageData(i.x * s, i.y * s, i.width * s, i.height * s), u = o.data, a,
                    f = e("zrender/tool/color"), l = f.toArray(n.color), c = l[0], h = l[1], p = l[2], d = i.width;
                for (var v = 1, m = r.length; v < m; v++) a = ((r[v][0] - i.x) * s + (r[v][1] - i.y) * d * s * s) * 4, u[a] = c, u[a + 1] = h, u[a + 2] = p, u[a + 3] = 255;
                t.putImageData(o, i.x * s, i.y * s);
                return
            }, getRect: function (t) {
                var n = e("zrender/shape");
                return n.get("polygon").getRect(t)
            }, isCover: function () {
                return !1
            }
        }, e("zrender/shape/base").derive(t), e("zrender/shape").define("symbol", new t), t
    }), r("echarts/chart/scatter", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/color", "../util/shape/symbol", "../chart"], function (e) {
        function t(t, n, r, i) {
            function m() {
                l.selectedMap = {};
                var e = i.legend, t = [], r, s, o, a;
                for (var h = 0, m = c.length; h < m; h++) {
                    r = c[h], s = r.name;
                    if (r.type == u.CHART_TYPE_SCATTER) {
                        c[h] = l.reformOption(c[h]), v[h] = l.deepQuery([r], "symbol") || d[h % d.length];
                        if (e) {
                            l.selectedMap[s] = e.isSelected(s), p[h] = f.alpha(e.getColor(s), .5), o = e.getItemShape(s);
                            if (o) {
                                o.shape = "icon";
                                var a = v[h];
                                o.style.brushType = a.match("empty") ? "stroke" : "both", a = a.replace("empty", "").toLowerCase(), a.match("star") && (o.style.n = a.replace("star", "") - 0 || 5, a = "star"), a.match("image") && (o.style.image = a.replace(new RegExp("^image:\\/\\/"), ""), o.style.x += Math.round((o.style.width - o.style.height) / 2), o.style.width = o.style.height, a = "image"), o.style.iconType = a, e.setItemShape(s, o)
                            }
                        } else l.selectedMap[s] = !0, p[h] = n.getColor(h);
                        l.selectedMap[s] && t.push(h)
                    }
                }
                if (t.length === 0) return;
                g(t);
                for (var h = 0, m = l.shapeList.length; h < m; h++) l.shapeList[h].id = n.newShapeId(l.type), n.addShape(l.shapeList[h])
            }

            function g(e) {
                var t, n, r, s, o, u, a = {}, f, h, p;
                for (var d = 0, m = e.length; d < m; d++) {
                    t = e[d], n = c[t];
                    if (n.data.length === 0) continue;
                    o = i.xAxis.getAxis(n.xAxisIndex || 0), u = i.yAxis.getAxis(n.yAxisIndex || 0), p = l.deepQuery([n], "symbolSize"), a[t] = [];
                    for (var g = 0, b = n.data.length; g < b; g++) {
                        r = n.data[g], s = typeof r != "undefined" ? typeof r.value != "undefined" ? r.value : r : "-";
                        if (s == "-" || s.length < 2) continue;
                        f = o.getCoord(s[0]), h = u.getCoord(s[1]), a[t].push([f, h, typeof p == "function" ? p(s) : p, v[t], g, r.name || ""])
                    }
                }
                y(a)
            }

            function y(e) {
                var t = i.dataRange, n, r, s, o, u, a, f, h, d, v, m;
                for (var g in e) {
                    a = c[g], d = e[g], f = [a], r = l.deepQuery(f, "itemStyle.normal.color") || p[g], s = l.deepQuery(f, "itemStyle.normal.lineStyle.width"), o = l.deepQuery(f, "itemStyle.emphasis.color"), u = l.deepQuery(f, "itemStyle.emphasis.lineStyle.width"), m = l.deepQuery(f, "symbolRotate");
                    if (a.large && a.data.length > a.largeThreshold) {
                        l.shapeList.push(w(d, r, o));
                        continue
                    }
                    for (var y = 0, E = d.length; y < E; y++) {
                        v = d[y], h = a.data[v[4]];
                        if (t) {
                            if (isNaN(h[2])) continue;
                            n = t.getColor(h[2]);
                            if (!n) continue
                        } else n = r;
                        f = [h], l.shapeList.push(b(g, v[4], v[5], v[0], v[1], l.deepQuery(f, "symbolSize") || v[2], l.deepQuery(f, "symbolRotate") || m, l.deepQuery(f, "symbol") || v[3], l.deepQuery(f, "itemStyle.normal.color") || n, l.deepQuery(f, "itemStyle.normal.lineStyle.width") || s, l.deepQuery(f, "itemStyle.emphasis.color") || o || r, l.deepQuery(f, "itemStyle.emphasis.lineStyle.width") || u || s))
                    }
                }
            }

            function b(e, t, n, r, i, s, o, u, f, p, d, v) {
                var m = {
                    shape: "icon",
                    zlevel: h,
                    style: {
                        iconType: u.replace("empty", "").toLowerCase(),
                        x: r - s,
                        y: i - s,
                        width: s * 2,
                        height: s * 2,
                        brushType: u.match("empty") ? "stroke" : "fill",
                        color: f,
                        strokeColor: f,
                        lineWidth: p
                    },
                    highlightStyle: {color: d, strokeColor: d, lineWidth: v},
                    clickable: !0
                };
                return typeof o != "undefined" && (m.rotation = [o * Math.PI / 180, r, i]), u.match("image") && (m.style.image = u.replace(new RegExp("^image:\\/\\/"), ""), m.shape = "image"), u.match("star") && (m.style.iconType = "star", m.style.n = u.replace("empty", "").replace("star", "") - 0 || 5), u == "none" && (m.invisible = !0, m.hoverable = !1), m = l.addLabel(m, c[e], c[e].data[t], n, "vertical"), a.pack(m, c[e], e, c[e].data[t], t, n), m._x = r, m._y = i, m
            }

            function w(e, t, n) {
                return {
                    shape: "symbol",
                    zlevel: h,
                    hoverable: !1,
                    style: {pointList: e, color: t, strokeColor: t},
                    highlightStyle: {color: n, strokeColor: n}
                }
            }

            function E(e, t) {
                i = t, S(e)
            }

            function S(e) {
                e && (r = e, c = r.series), l.clear(), m()
            }

            function x(e, t) {
                i.dataRange && (S(), t.needRefresh = !0);
                return
            }

            function T() {
                var e = l.deepQuery([r], "animationDuration"), t = l.deepQuery([r], "animationEasing"), i, s, o;
                for (var u = 0, a = l.shapeList.length; u < a; u++) i = l.shapeList[u]._x || 0, s = l.shapeList[u]._y || 0, n.modShape(l.shapeList[u].id, {scale: [0, 0, i, s]}, !0), n.animate(l.shapeList[u].id, "").when(l.deepQuery([o], "animationDuration") || e, {scale: [1, 1, i, s]}).start(l.deepQuery([o], "animationEasing") || t)
            }

            var s = e("../component/base");
            s.call(this, n);
            var o = e("./calculableBase");
            o.call(this, n, r);
            var u = e("../config"), a = e("../util/ecData"), f = e("zrender/tool/color"), l = this;
            l.type = u.CHART_TYPE_SCATTER;
            var c, h = l.getZlevelBase(), p = {},
                d = ["circle", "rectangle", "triangle", "diamond", "emptyCircle", "emptyRectangle", "emptyTriangle", "emptyDiamond"],
                v = {};
            l.init = E, l.refresh = S, l.ondataRange = x, l.animation = T, E(r, i)
        }

        return e("../util/shape/symbol"), e("../chart").define("scatter", t), t
    }), r("echarts/util/shape/candle", ["require", "zrender/tool/matrix", "zrender/shape/base", "zrender/shape"], function (e) {
        function n() {
            this.type = "candle"
        }

        var t = e("zrender/tool/matrix");
        return n.prototype = {
            _numberOrder: function (e, t) {
                return t - e
            }, buildPath: function (e, t) {
                t.y.sort(this._numberOrder), e.moveTo(t.x, t.y[3]), e.lineTo(t.x, t.y[2]), e.moveTo(t.x - t.width / 2, t.y[2]), e.rect(t.x - t.width / 2, t.y[2], t.width, t.y[1] - t.y[2]), e.moveTo(t.x, t.y[1]), e.lineTo(t.x, t.y[0]);
                return
            }, getRect: function (e) {
                var t;
                return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, {
                    x: Math.round(e.x - e.width / 2 - t / 2),
                    y: Math.round(e.y[3] - t / 2),
                    width: e.width + t,
                    height: e.y[0] - e.y[3] + t
                }
            }, isCover: function (e, n, r) {
                if (e.__needTransform && e._transform) {
                    var i = [];
                    t.invert(i, e._transform);
                    var s = [n, r];
                    t.mulVector(s, i, [n, r, 1]), n == s[0] && r == s[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), n = s[0], r = s[1]
                }
                var o;
                return e.style.__rect ? o = e.style.__rect : (o = this.getRect(e.style), o = [o.x, o.x + o.width, o.y, o.y + o.height], e.style.__rect = o), n >= o[0] && n <= o[1] && r >= o[2] && r <= o[3] ? !0 : !1
            }
        }, e("zrender/shape/base").derive(n), e("zrender/shape").define("candle", new n), n
    }), r("echarts/chart/k", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "../util/shape/candle", "../chart"], function (e) {
        function t(t, n, r, i) {
            function h() {
                f.selectedMap = {};
                var e = {top: [], bottom: []}, t;
                for (var r = 0, s = l.length; r < s; r++) l[r].type == u.CHART_TYPE_K && (l[r] = f.reformOption(l[r]), t = i.xAxis.getAxis(l[r].xAxisIndex), t.type == u.COMPONENT_TYPE_AXIS_CATEGORY && e[t.getPosition()].push(r));
                for (var o in e) e[o].length > 0 && p(o, e[o]);
                for (var r = 0, s = f.shapeList.length; r < s; r++) f.shapeList[r].id = n.newShapeId(f.type), n.addShape(f.shapeList[r])
            }

            function p(e, t) {
                var n = d(t), r = n.locationMap, i = n.maxDataLength;
                if (i === 0 || r.length === 0) return;
                v(i, r)
            }

            function d(e) {
                var t, n, r = i.legend, s = [], o = 0;
                for (var u = 0, a = e.length; u < a; u++) t = l[e[u]], n = t.name, r ? f.selectedMap[n] = r.isSelected(n) : f.selectedMap[n] = !0, f.selectedMap[n] && s.push(e[u]), o = Math.max(o, t.data.length);
                return {locationMap: s, maxDataLength: o}
            }

            function v(e, t) {
                var n, r, s, o, u, a, f = {}, c, h, p, d;
                for (var v = 0, g = t.length; v < g; v++) {
                    n = t[v], r = l[n], s = r.xAxisIndex || 0, o = i.xAxis.getAxis(s), c = r.barWidth || Math.floor(o.getGap() / 2), d = r.barMaxWidth, d && d < c && (c = d), u = r.yAxisIndex || 0, a = i.yAxis.getAxis(u), f[n] = [];
                    for (var y = 0, b = e; y < b; y++) {
                        if (typeof o.getNameByIndex(y) == "undefined") break;
                        h = r.data[y], p = typeof h != "undefined" ? typeof h.value != "undefined" ? h.value : h : "-";
                        if (p == "-" || p.length != 4) continue;
                        f[n].push([o.getCoordByIndex(y), c, a.getCoord(p[0]), a.getCoord(p[1]), a.getCoord(p[2]), a.getCoord(p[3]), y, o.getNameByIndex(y)])
                    }
                }
                m(f)
            }

            function m(e) {
                var t, n, r, i, s, o, a, c, h, p, d, v, m, y, b, w;
                for (var E = 0, S = l.length; E < S; E++) {
                    d = l[E], y = e[E];
                    if (d.type == u.CHART_TYPE_K && typeof y != "undefined") {
                        v = [d], t = f.deepQuery(v, "itemStyle.normal.lineStyle.width"), n = f.deepQuery(v, "itemStyle.normal.lineStyle.color"), r = f.deepQuery(v, "itemStyle.normal.lineStyle.color0"), i = f.deepQuery(v, "itemStyle.normal.color"), s = f.deepQuery(v, "itemStyle.normal.color0"), o = f.deepQuery(v, "itemStyle.emphasis.lineStyle.width"), a = f.deepQuery(v, "itemStyle.emphasis.lineStyle.color"), c = f.deepQuery(v, "itemStyle.emphasis.lineStyle.color0"), h = f.deepQuery(v, "itemStyle.emphasis.color"), p = f.deepQuery(v, "itemStyle.emphasis.color0");
                        for (var x = 0, T = y.length; x < T; x++) b = y[x], m = d.data[b[6]], v = [m], w = b[3] < b[2], f.shapeList.push(g(E, b[6], b[7], b[0], b[1], b[2], b[3], b[4], b[5], w ? f.deepQuery(v, "itemStyle.normal.color") || i : f.deepQuery(v, "itemStyle.normal.color0") || s, f.deepQuery(v, "itemStyle.normal.lineStyle.width") || t, w ? f.deepQuery(v, "itemStyle.normal.lineStyle.color") || n : f.deepQuery(v, "itemStyle.normal.lineStyle.color0") || r, w ? f.deepQuery(v, "itemStyle.emphasis.color") || h || i : f.deepQuery(v, "itemStyle.emphasis.color0") || p || s, f.deepQuery(v, "itemStyle.emphasis.lineStyle.width") || o || t, w ? f.deepQuery(v, "itemStyle.emphasis.lineStyle.color") || a || n : f.deepQuery(v, "itemStyle.emphasis.lineStyle.color0") || c || r))
                    }
                }
            }

            function g(e, t, n, r, i, s, o, u, f, h, p, d, v, m, g) {
                var y = {
                    shape: "candle",
                    zlevel: c,
                    clickable: !0,
                    style: {x: r, y: [s, o, u, f], width: i, color: h, strokeColor: d, lineWidth: p, brushType: "both"},
                    highlightStyle: {color: v, strokeColor: g, lineWidth: m},
                    _seriesIndex: e
                };
                return a.pack(y, l[e], e, l[e].data[t], t, n), y
            }

            function y(e, t) {
                i = t, b(e)
            }

            function b(e) {
                e && (r = e, l = r.series), f.clear(), h()
            }

            function w(e) {
                var t = {};
                for (var r = 0, s = e.length; r < s; r++) t[e[r][0]] = e[r];
                var o, u, c, h, p, d;
                for (var r = 0, s = f.shapeList.length; r < s; r++) {
                    p = f.shapeList[r]._seriesIndex;
                    if (t[p] && !t[p][3] && f.shapeList[r].shape == "candle") {
                        d = a.get(f.shapeList[r], "dataIndex"), h = l[p];
                        if (t[p][2] && d == h.data.length - 1) {
                            n.delShape(f.shapeList[r].id);
                            continue
                        }
                        if (!t[p][2] && d === 0) {
                            n.delShape(f.shapeList[r].id);
                            continue
                        }
                        u = i.xAxis.getAxis(h.xAxisIndex || 0).getGap(), o = t[p][2] ? u : -u, c = 0, n.animate(f.shapeList[r].id, "").when(500, {position: [o, c]}).start()
                    }
                }
            }

            function E() {
                var e = f.deepQuery([r], "animationDuration"), t = f.deepQuery([r], "animationEasing"), i, s, o;
                for (var u = 0, a = f.shapeList.length; u < a; u++) f.shapeList[u].shape == "candle" && (o = l[f.shapeList[u]._seriesIndex], i = f.shapeList[u].style.x, s = f.shapeList[u].style.y[0], n.modShape(f.shapeList[u].id, {scale: [1, 0, i, s]}, !0), n.animate(f.shapeList[u].id, "").when(f.deepQuery([o], "animationDuration") || e, {scale: [1, 1, i, s]}).start(f.deepQuery([o], "animationEasing") || t))
            }

            var s = e("../component/base");
            s.call(this, n);
            var o = e("./calculableBase");
            o.call(this, n, r);
            var u = e("../config"), a = e("../util/ecData"), f = this;
            f.type = u.CHART_TYPE_K;
            var l, c = f.getZlevelBase();
            f.init = y, f.refresh = b, f.addDataAnimation = w, f.animation = E, y(r, i)
        }

        return e("../util/shape/candle"), e("../chart").define("k", t), t
    }), r("echarts/chart/radar", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/color", "../util/accMath", "../chart"], function (e) {
        function t(t, n, r, i) {
            function y() {
                l.selectedMap = {}, v = [], g = 0;
                for (var e = 0, t = c.length; e < t; e++) c[e].type == u.CHART_TYPE_RADAR && (h = l.reformOption(c[e]), d = [h, r], l.deepQuery(d, "calculable") && T(e), b(e));
                for (var e = 0, t = l.shapeList.length; e < t; e++) l.shapeList[e].id = n.newShapeId(l.type), n.addShape(l.shapeList[e])
            }

            function b(e) {
                var t = i.legend, r, s = h.data, o, u, a, f = l.deepQuery(d, "calculable");
                for (var c = 0; c < s.length; c++) {
                    u = s[c].name || "", l.selectedMap[u] = t ? t.isSelected(u) : !0;
                    if (!l.selectedMap[u]) continue;
                    t ? (o = t.getColor(u), r = t.getItemShape(u), r && (r.style.brushType = l.deepQuery([s[c], h], "itemStyle.normal.areaStyle") ? "both" : "stroke", t.setItemShape(u, r))) : o = n.getColor(c), a = w(h.polarIndex, s[c]), S(a, o, s[c], e), x(a, o, s[c], e, c, f), g++
                }
            }

            function w(e, t) {
                var n = [], r, s = i.polar;
                for (var o = 0, u = t.value.length; o < u; o++) r = s.getVector(e, o, t.value[o]), r && n.push(r);
                return n
            }

            function E(e, t, n, r, i, s, o) {
                var u = {
                    shape: "icon",
                    zlevel: p + 1,
                    style: {
                        iconType: n.replace("empty", "").toLowerCase(),
                        x: e - r,
                        y: t - r,
                        width: r * 2,
                        height: r * 2,
                        brushType: "both",
                        color: n.match("empty") ? "#fff" : i,
                        strokeColor: i,
                        lineWidth: o * 2
                    },
                    hoverable: !1
                };
                return n.match("star") && (u.style.iconType = "star", u.style.n = n.replace("empty", "").replace("star", "") - 0 || 5), u._x = e, u._y = t, u
            }

            function S(e, t, n) {
                var r = [n, h], i = l.deepQuery(r, "symbol") || m[g % m.length] || "cricle";
                if (i != "none") {
                    var s = l.deepQuery(r, "symbolSize"), o = l.deepQuery(r, "itemStyle.normal.color"),
                        u = l.deepQuery(r, "itemStyle.emphasis.color"),
                        a = l.deepQuery(r, "itemStyle.normal.lineStyle.width");
                    for (var f = 0, c = e.length; f < c; f++) l.shapeList.push(E(e[f][0], e[f][1], i, s, o || t, u || o || t, a))
                }
            }

            function x(e, t, n, r, s, o) {
                var u = [n, h], d = l.deepQuery(u, "itemStyle.normal.color"),
                    v = l.deepQuery(u, "itemStyle.normal.lineStyle.width"),
                    m = l.deepQuery(u, "itemStyle.normal.lineStyle.type"),
                    g = l.deepQuery(u, "itemStyle.normal.areaStyle.color"),
                    y = l.deepQuery(u, "itemStyle.normal.areaStyle"), b = {
                        shape: "polygon",
                        zlevel: p,
                        style: {
                            pointList: e,
                            brushType: y ? "both" : "stroke",
                            color: g || d || f.alpha(t, .5),
                            strokeColor: d || t,
                            lineWidth: v,
                            lineType: m
                        },
                        highlightStyle: {
                            brushType: l.deepQuery(u, "itemStyle.emphasis.areaStyle") || y ? "both" : "stroke",
                            color: l.deepQuery(u, "itemStyle.emphasis.areaStyle.color") || g || d || f.alpha(t, .5),
                            strokeColor: l.deepQuery(u, "itemStyle.emphasis.color") || d || t,
                            lineWidth: l.deepQuery(u, "itemStyle.emphasis.lineStyle.width") || v,
                            lineType: l.deepQuery(u, "itemStyle.emphasis.lineStyle.type") || m
                        }
                    };
                a.pack(b, c[r], r, n, s, n.name, i.polar.getIndicator(c[r].polarIndex)), o && (b.draggable = !0, l.setCalculable(b)), l.shapeList.push(b)
            }

            function T(e) {
                var t = l.deepQuery(d, "polarIndex");
                if (!v[t]) {
                    var n = i.polar.getDropBox(t);
                    n.zlevel = p, l.setCalculable(n), a.pack(n, c, e, undefined, -1), l.shapeList.push(n), v[t] = !0
                }
            }

            function N(e, t) {
                if (!l.isDragend || !e.target) return;
                var n = e.target, r = a.get(n, "seriesIndex"), s = a.get(n, "dataIndex");
                i.legend && i.legend.del(c[r].data[s].name), c[r].data.splice(s, 1), t.dragOut = !0, t.needRefresh = !0, l.isDragend = !1;
                return
            }

            function C(t, n) {
                if (!l.isDrop || !t.target) return;
                var s = t.target, o = t.dragged, u = a.get(s, "seriesIndex"), f = a.get(s, "dataIndex"), h,
                    p = i.legend, d;
                if (f == -1) h = {
                    value: a.get(o, "value"),
                    name: a.get(o, "name")
                }, c[u].data.push(h), p && p.add(h.name, o.style.color || o.style.strokeColor); else {
                    var v = e("../util/accMath");
                    h = c[u].data[f], p && p.del(h.name), h.name += r.nameConnector + a.get(o, "name"), d = a.get(o, "value");
                    for (var m = 0; m < d.length; m++) h.value[m] = v.accAdd(h.value[m], d[m]);
                    p && p.add(h.name, o.style.color || o.style.strokeColor)
                }
                n.dragIn = n.dragIn || !0, l.isDrop = !1;
                return
            }

            function k(e, t) {
                i = t, L(e)
            }

            function L(e) {
                e && (r = e, c = r.series), l.clear(), y()
            }

            function A() {
                var e = l.deepQuery([r], "animationDuration"), t = l.deepQuery([r], "animationEasing"), s, o, u, f, h,
                    p = i.polar, d, v, m, g;
                for (var y = 0, b = l.shapeList.length; y < b; y++) l.shapeList[y].shape == "polygon" ? (v = l.shapeList[y], o = a.get(v, "seriesIndex"), s = a.get(v, "dataIndex"), f = c[o], u = f.data[s], h = l.deepQuery([u, f, r], "polarIndex"), d = p.getCenter(h), m = d[0], g = d[1], n.modShape(l.shapeList[y].id, {scale: [.1, .1, m, g]}, !0), n.animate(v.id, "").when((l.deepQuery([f], "animationDuration") || e) + s * 100, {scale: [1, 1, m, g]}).start(l.deepQuery([f], "animationEasing") || t)) : (m = l.shapeList[y]._x || 0, g = l.shapeList[y]._y || 0, n.modShape(l.shapeList[y].id, {scale: [0, 0, m, g]}, !0), n.animate(l.shapeList[y].id, "").when(e, {scale: [1, 1, m, g]}).start("QuinticOut"))
            }

            var s = e("../component/base");
            s.call(this, n);
            var o = e("./calculableBase");
            o.call(this, n, r);
            var u = e("../config"), a = e("../util/ecData"), f = e("zrender/tool/color"), l = this;
            l.type = u.CHART_TYPE_RADAR;
            var c, h, p = l.getZlevelBase(), d, v,
                m = ["circle", "rectangle", "triangle", "diamond", "emptyCircle", "emptyRectangle", "emptyTriangle", "emptyDiamond"],
                g;
            l.init = k, l.refresh = L, l.animation = A, l.ondrop = C, l.ondragend = N, k(r, i)
        }

        return e("../chart").define("radar", t), t
    }), r("echarts/util/shape/chord", ["require", "zrender/tool/util", "zrender/shape/base", "zrender/shape"], function (e) {
        function n() {
            this.type = "chord"
        }

        var t = e("zrender/tool/util"), r = t.getContext();
        return n.prototype = {
            buildPath: function (e, t) {
                var n = Math.PI * 2, r = t.center[0], i = t.center[1], s = t.r, o = t.source0 / 180 * Math.PI,
                    u = t.source1 / 180 * Math.PI, a = t.target0 / 180 * Math.PI, f = t.target1 / 180 * Math.PI,
                    l = r + Math.cos(n - o) * s, c = i - Math.sin(n - o) * s, h = r + Math.cos(n - u) * s,
                    p = i - Math.sin(n - u) * s, d = r + Math.cos(n - a) * s, v = i - Math.sin(n - a) * s,
                    m = r + Math.cos(n - f) * s, g = i - Math.sin(n - f) * s;
                e.moveTo(l, c), e.arc(r, i, t.r, o, u, !1), e.bezierCurveTo((r - h) * .7 + h, (i - p) * .7 + p, (r - d) * .7 + d, (i - v) * .7 + v, d, v);
                if (t.source0 === t.target0 && t.source1 === t.target1) return;
                e.arc(r, i, t.r, a, f, !1), e.bezierCurveTo((r - m) * .7 + m, (i - g) * .7 + g, (r - l) * .7 + l, (i - c) * .7 + c, l, c)
            }, getRect: function () {
                return {x: 0, y: 0, width: 0, height: 0}
            }, isCover: function (e, t, i) {
                if (!r.isPointInPath) return !1;
                if (e.__needTransform && e._transform) {
                    var s = [];
                    matrix.invert(s, e._transform);
                    var o = [t, i];
                    matrix.mulVector(o, s, [t, i, 1]), t == o[0] && i == o[1] && (Math.abs(e.rotation[0]) > 1e-4 || Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4 || Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4 ? e.__needTransform = !0 : e.__needTransform = !1), t = o[0], i = o[1]
                }
                return r.beginPath(), n.prototype.buildPath.call(null, r, e.style), r.closePath(), r.isPointInPath(t, i)
            }
        }, e("zrender/shape/base").derive(n), e("zrender/shape").define("chord", new n), n
    }), r("echarts/util/kwargs", [], function () {
        function e(e) {
            var t = this,
                n = new RegExp("(\\/\\*[\\w\\'\\,\\(\\)\\s\\r\\n\\*]*\\*\\/)|(\\/\\/[\\w\\s\\'][^\\n\\r]*$)|(<![\\-\\-\\s\\w\\>\\/]*>)", "gim"),
                r = new RegExp("\\s+", "gim"), i = new RegExp("function.*?\\((.*?)\\)", "i"),
                s = t.toString().replace(n, "").replace(r, "").match(i)[1].split(",");
            return e !== Object(e) && (e = {}), function () {
                var n = Array.prototype.slice.call(arguments), r = n[n.length - 1];
                r && r.constructor === Object ? n.pop() : r = {};
                for (var i = 0; i < s.length; i++) {
                    var o = s[i];
                    o in r ? n[i] = r[o] : o in e && n[i] === undefined && (n[i] = e[o])
                }
                return t.apply(this, n)
            }
        }

        Function.prototype.kwargs = e
    }), r("echarts/util/ndarray", ["require", "./kwargs"], function (e) {
        function d(e) {
            if (typeof e == "undefined") return "number";
            switch (Object.prototype.toString.call(e)) {
                case"[object Int32Array]":
                    return "int32";
                case"[object Int16Array]":
                    return "int16";
                case"[object Int8Array]":
                    return "int8";
                case"[object Uint32Array]":
                    return "uint32";
                case"[object Uint16Array]":
                    return "uint16";
                case"[object Uint8Array]":
                    return "uint8";
                case"[object Uint8ClampedArray]":
                    return "uint8c";
                case"[object Float32Array]":
                    return "float32";
                case"[object Float64Array]":
                    return "float64";
                default:
                    return "number"
            }
        }

        function m(e, t) {
            if (e.indexOf(":") >= 0) {
                var n = e.split(/\s*:\s*/), r = parseInt(n[2] || 1, 10), i, s;
                if (r === 0) throw new Error("Slice step cannot be zero");
                return r > 0 ? (i = parseInt(n[0] || 0, 10), s = parseInt(n[1] || t, 10)) : (i = parseInt(n[0] || t - 1, 10), s = parseInt(n[1] || -1, 10)), i < 0 && (i = t + i), s < 0 && n[1] && (s = t + s), r > 0 ? (i = Math.max(Math.min(t, i), 0), s = Math.max(Math.min(t, s), 0)) : (i = Math.max(Math.min(t - 1, i), -1), s = Math.max(Math.min(t - 1, s), -1)), [i, s, r]
            }
            var i = parseInt(e, 10);
            i < 0 && (i = t + i);
            if (i < 0 || i > t) throw new Error(N(e));
            return i = Math.max(Math.min(t - 1, i), 0), [i, i + 1, 1]
        }

        function g(e) {
            var t = e[0];
            for (var n = 1; n < e.length; n++) t *= e[n];
            return t
        }

        function y(e) {
            var t = 1, n = e[0];
            while (n instanceof Array) n = n[0], t++;
            return t
        }

        function b(e) {
            var t = [e.length], n = e[0];
            while (n instanceof Array) t.push(n.length), n = n[0];
            return t
        }

        function w(e, t) {
            if (t == e.length - 1) return 1;
            var n = e[t + 1];
            for (var r = t + 2; r < e.length; r++) n *= e[r];
            return n
        }

        function E(e) {
            var t = [], n = 1, r = g(e);
            for (var i = 0; i < e.length; i++) n *= e[i], t.push(r / n);
            return t
        }

        function S(e, t) {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0
        }

        function x(e, t) {
            return "Shape (" + e.toString() + ") (" + t.toString() + ") could not be broadcast together"
        }

        function T(e) {
            return "Axis " + e + " out of bounds"
        }

        function N(e) {
            return "Index " + e + " out of bounds"
        }

        e("./kwargs");
        var t = Array.prototype.slice, n = window;
        n.Int32Array = n.Int32Array || Array, n.Int16Array = n.Int16Array || Array, n.Int8Array = n.Int8Array || Array, n.Uint32Array = n.Uint32Array || Array, n.Uint16Array = n.Uint16Array || Array, n.Uint8Array = n.Uint8Array || Array, n.Float32Array = n.Float32Array || Array, n.Float64Array = n.Float64Array || Array;
        var r = {
            int32: n.Int32Array,
            int16: n.Int16Array,
            int8: n.Int8Array,
            uint32: n.Uint32Array,
            uint16: n.Uint16Array,
            uint8: n.Uint8Array,
            uint8c: n.Uint8ClampedArray,
            float32: n.Float32Array,
            float64: n.Float64Array,
            number: Array
        }, i = {
            int32: 4,
            int16: 2,
            int8: 1,
            uint32: 4,
            uint16: 2,
            uint8: 1,
            uint8c: 1,
            float32: 4,
            float64: 8,
            number: 1
        }, s = 0, o = 1, u = 2, a = 3, f = 4, l = 5, c = 6, h = 7, p = 8, v = function (e) {
            var t = arguments[arguments.length - 1];
            typeof t == "string" ? this._dtype = t : this._dtype = d(e);
            if (e && typeof e != "string") {
                if (e instanceof v) return e._dtype = this._dtype, e;
                typeof e.length != "undefined" ? this.initFromArray(e) : typeof e == "number" && this.initFromShape.apply(this, arguments)
            } else this._array = new r[this._dtype], this._shape = [0], this._size = 0
        };
        return v.prototype = {
            initFromArray: function (e) {
                function i(e, r, s) {
                    var o = s.length;
                    for (var u = 0; u < o; u++) e < t - 1 ? i(e + 1, r, s[u]) : r[n++] = s[u]
                }

                var t = y(e), n = 0, s = b(e), o = g(s);
                return this._array = new r[this._dtype](o), i(0, this._array, e), this._shape = s, this._size = o, this
            }, initFromShape: function (e) {
                typeof e == "number" && (e = Array.prototype.slice.call(arguments));
                if (e) {
                    var t = g(e);
                    if (this._dtype === "number") {
                        this._array = [];
                        var n = this._array;
                        for (var i = 0; i < t; i++) n[i] = 0
                    } else this._array = new r[this._dtype](t)
                }
                return this._shape = e, this._size = g(e), this
            }, fill: function (e) {
                var t = this._array;
                for (var n = 0; n < t.length; n++) t[n] = e;
                return this
            }, shape: function () {
                return this._shape.slice()
            }, size: function () {
                return this._size
            }, dtype: function () {
                return this._dtype
            }, dimension: function () {
                return this._shape.length
            }, strides: function () {
                var e = E(this._shape), t = i[this._dtype];
                for (var n = 0; n < e.length; n++) e[n] *= t;
                return e
            }, reshape: function (e) {
                typeof e == "number" && (e = Array.prototype.slice.call(arguments));
                if (!this._isShapeValid(e)) throw new Error("Total size of new array must be unchanged");
                return this._shape = e, this
            }, _isShapeValid: function (e) {
                return g(e) === this._size
            }, resize: function (e) {
                typeof e == "number" && (e = Array.prototype.slice.call(arguments));
                var t = g(e);
                if (t < this._size) this._dtype === "number" && (this._array.length = t); else if (this._dtype === "number") for (var n = this._array.length; n < t; n++) this._array[n] = 0; else {
                    var i = new r[this._dtype](t), s = this._array;
                    for (var n = 0; n < s.length; n++) i[n] = s[n];
                    this._array = i
                }
                return this._shape = e, this._size = t, this
            }, transpose: function (e, t) {
                var n = [];
                for (var r = 0; r < this._shape.length; r++) n.push(r);
                typeof e == "undefined" && (e = n.slice());
                for (var r = 0; r < e.length; r++) if (e[r] >= this._shape.length) throw new Error(T(e[r]));
                if (e.length <= 1) return this;
                var i = n.slice();
                for (var r = 0; r < Math.floor(e.length / 2); r++) for (var s = e.length - 1; s >= Math.ceil(e.length / 2); s--) i[e[r]] = e[s], i[e[s]] = e[r];
                return this._transposelike(i, t)
            }.kwargs(), swapaxes: function (e, t, n) {
                return this.transpose([e, t], n)
            }.kwargs(), rollaxis: function (e, t, n) {
                if (e >= this._shape.length) throw new Error(T(e));
                var r = [];
                for (var i = 0; i < this._shape.length; i++) r.push(i);
                return r.splice(e, 1), r.splice(t, 0, e), this._transposelike(r, n)
            }.kwargs({start: 0}), _transposelike: function (e, t) {
                function p(e, t, r) {
                    var u = i[e], a = s[e], f = c[e];
                    if (e < o - 1) for (var l = 0; l < u; l++) p(e + 1, t + a * l, r + f * l); else for (var l = 0; l < u; l++) h[r + l] = n[t + a * l]
                }

                var n = this._array, i = this._shape.slice(), s = E(this._shape), o = i.length, u = [], a = [];
                for (var f = 0; f < e.length; f++) {
                    var l = e[f];
                    a[f] = i[l], u[f] = s[l]
                }
                s = u, i = a, this._shape = i;
                var c = E(this._shape);
                t || (t = new v, t._shape = this._shape.slice(), t._dtype = this._dtype, t._size = this._size);
                var h = new r[this._dtype](this._size);
                return t._array = h, p(0, 0, 0), t
            }, repeat: function (e, t, n) {
                var r;
                typeof t == "undefined" ? (r = [this._size], t = 0) : r = this._shape.slice();
                var i = r.slice();
                r[t] *= e;
                if (!n) n = new v(this._dtype), n.initFromShape(r); else if (!S(r, n._shape)) throw new Error(x(r, n._shape));
                var s = n._array, o = w(i, t), u = i[t], a = this._array, f = o * u;
                for (var l = 0; l < this._size; l += f) for (var c = 0; c < o; c++) {
                    var h = l + c, p = l * e + c;
                    for (var d = 0; d < u; d++) {
                        for (var m = 0; m < e; m++) s[p] = a[h], p += o;
                        h += o
                    }
                }
                return n
            }.kwargs(), choose: function () {
                console.warn("TODO")
            }, take: function () {
                console.warn("TODO")
            }, tile: function () {
                console.warn("TODO")
            }, _withPreprocess1: function (e, t, n, r) {
                var i = this._array;
                if (!this._size) return;
                if (typeof e != "undefined") {
                    e < 0 && (e = this._shape.length + e);
                    if (e >= this._shape.length || e < 0) throw new Error(T(e));
                    var s = this._shape.slice();
                    s.splice(e, 1);
                    if (t && !S(s, t._shape)) throw new Error(x(s, t._shape));
                    t || (t = new v(this._dtype), t.initFromShape(s));
                    var o = t._array, u = w(this._shape, e), a = this._shape[e], f = u * a;
                    return n.call(this, o, i, f, a, u), t
                }
                return r.call(this, i)
            }, _withPreprocess2: function (e, t, n, r) {
                var i = this._array;
                if (!this._size) return;
                if (t && !S(this._shape, t._shape)) throw new Error(x(this._shape, t._shape));
                t || (t = new v(this._dtype), t.initFromShape(this._shape));
                var s = t._array;
                if (typeof e != "undefined") {
                    e < 0 && (e = this._shape.length + e);
                    if (e >= this._shape.length || e < 0) throw new Error(T(e));
                    if (e >= this._shape.length) throw new Error(T(e));
                    var o = w(this._shape, e), u = this._shape[e], a = o * u;
                    n.call(this, s, i, a, u, o)
                } else t.reshape([this._size]), r.call(this, s, i);
                return t
            }, max: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = u + o, f = t[a];
                        for (var l = 0; l < r; l++) {
                            var c = t[a];
                            c > f && (f = c), a += i
                        }
                        e[s++] = f
                    }
                }

                function t(e) {
                    var t = e[0];
                    for (var n = 1; n < this._size; n++) e[n] > t && (t = e[n]);
                    return t
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), min: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = u + o, f = t[a];
                        for (var l = 0; l < r; l++) {
                            var c = t[a];
                            c < f && (f = c), a += i
                        }
                        e[s++] = f
                    }
                }

                function t(e) {
                    var t = e[0];
                    for (var n = 1; n < this._size; n++) e[n] < t && (t = e[n]);
                    return t
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), argmax: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o, l = t[f];
                        for (var c = 0; c < r; c++) {
                            var h = t[f];
                            h > l && (l = h, a = c), f += i
                        }
                        e[s++] = a
                    }
                }

                function t(e) {
                    var t = e[0], n = 0;
                    for (var r = 1; r < this._size; r++) e[r] > t && (n = r, t = e[r]);
                    return n
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), argmin: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o, l = t[f];
                        for (var c = 0; c < r; c++) {
                            var h = t[f];
                            h < l && (l = h, a = c), f += i
                        }
                        e[s++] = a
                    }
                }

                function t(e) {
                    var t = e[0], n = 0;
                    for (var r = 1; r < this._size; r++) e[r] < t && (n = r, t = e[r]);
                    return n
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), sum: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        e[s++] = a
                    }
                }

                function t(e) {
                    var t = 0;
                    for (var n = 0; n < this._size; n++) t += e[n];
                    return t
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), prod: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 1, f = u + o;
                        for (var l = 0; l < r; l++) a *= t[f], f += i;
                        e[s++] = a
                    }
                }

                function t(e) {
                    var t = 1;
                    for (var n = 0; n < this._size; n++) t *= e[n];
                    return t
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), mean: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        var c = a / r;
                        e[s++] = c
                    }
                }

                function t(e) {
                    var t = 0, n = e.length;
                    for (var r = 0; r < n; r++) t += e[r];
                    var i = t / n;
                    return i
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), "var": function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        var c = a / r, h = 0;
                        f = u + o;
                        for (var l = 0; l < r; l++) {
                            var p = t[f] - c;
                            h += p * p, f += i
                        }
                        e[s++] = h / r
                    }
                }

                function t(e) {
                    var t = 0, n = e.length;
                    for (var r = 0; r < n; r++) t += e[r];
                    var i = t / n, s = 0;
                    for (var r = 0; r < n; r++) {
                        var o = e[r] - i;
                        s += o * o
                    }
                    return s / n
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), std: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = 0, f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        var c = a / r, h = 0;
                        f = u + o;
                        for (var l = 0; l < r; l++) {
                            var p = t[f] - c;
                            h += p * p, f += i
                        }
                        e[s++] = Math.sqrt(h / r)
                    }
                }

                function t(e) {
                    var t = 0, n = e.length;
                    for (var r = 0; r < n; r++) t += e[r];
                    var i = t / n, s = 0;
                    for (var r = 0; r < n; r++) {
                        var o = e[r] - i;
                        s += o * o
                    }
                    return Math.sqrt(s / n)
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), ptp: function () {
                function e(e, t, n, r, i) {
                    var s = 0;
                    for (var o = 0; o < this._size; o += n) for (var u = 0; u < i; u++) {
                        var a = o + u, f = t[a], l = t[a];
                        for (var c = 0; c < r; c++) {
                            var h = t[a];
                            h < f && (f = h), h > l && (l = h), a += i
                        }
                        e[s++] = l - f
                    }
                }

                function t(e) {
                    var t = e[0], n = e[0];
                    for (var r = 1; r < this._size; r++) e[r] < t && (t = e[r]), e[r] > n && (n = e[r]);
                    return n - t
                }

                return function (n, r) {
                    return this._withPreprocess1(n, r, e, t)
                }
            }().kwargs(), sort: function (e, t) {
                e < 0 && (e = this._shape.length + e);
                var n;
                t === "ascending" ? n = function (e, t) {
                    return e - t
                } : t === "descending" && (n = function (e, t) {
                    return t - e
                });
                var r = this._array, i = w(this._shape, e), s = this._shape[e], o = i * s, u = new Array(s);
                for (var a = 0; a < this._size; a += o) for (var f = 0; f < i; f++) {
                    var l = a + f;
                    for (var c = 0; c < s; c++) u[c] = r[l], l += i;
                    u.sort(n);
                    var l = a + f;
                    for (var c = 0; c < s; c++) r[l] = u[c], l += i
                }
                return this
            }.kwargs({axis: -1, order: "ascending"}), argsort: function (e, t, n) {
                e < 0 && (e = this._shape.length + e);
                if (!this._size) return;
                if (n && !S(this._shape, n._shape)) throw new Error(x(this._shape, n._shape));
                n || (n = new v(this._dtype), n.initFromShape(this._shape));
                var r = n._array, i;
                t === "ascending" ? i = function (e, t) {
                    return f[e] - f[t]
                } : t === "descending" && (i = function (e, t) {
                    return f[t] - f[e]
                });
                var s = this._array, o = w(this._shape, e), u = this._shape[e], a = o * u, f = new Array(u),
                    l = new Array(u);
                for (var c = 0; c < this._size; c += a) for (var h = 0; h < o; h++) {
                    var p = c + h;
                    for (var d = 0; d < u; d++) f[d] = s[p], l[d] = d, p += o;
                    l.sort(i);
                    var p = c + h;
                    for (var d = 0; d < u; d++) r[p] = l[d], p += o
                }
                return n
            }.kwargs({axis: -1, order: "ascending"}), cumsum: function () {
                function e(e, t, n, r, i) {
                    for (var s = 0; s < this._size; s += n) for (var o = 0; o < i; o++) {
                        var u = s + o, a = u;
                        e[u] = t[u];
                        for (var f = 1; f < r; f++) a = u, u += i, e[u] = e[a] + t[u]
                    }
                }

                function t(e, t) {
                    e[0] = t[0];
                    for (var n = 1; n < e.length; n++) e[n] = e[n - 1] + t[n]
                }

                return function (n, r) {
                    return this._withPreprocess2(n, r, e, t)
                }
            }().kwargs(), cumprod: function () {
                function e(e, t, n, r, i) {
                    for (var s = 0; s < this._size; s += n) for (var o = 0; o < i; o++) {
                        var u = s + o, a = u;
                        e[u] = t[u];
                        for (var f = 1; f < r; f++) a = u, u += i, e[u] = e[a] * t[u]
                    }
                }

                function t(e, t) {
                    e[0] = t[0];
                    for (var n = 1; n < e.length; n++) e[n] = e[n - 1] * t[n]
                }

                return function (n, r) {
                    return this._withPreprocess2(n, r, e, t)
                }
            }().kwargs(), dot: function () {
                console.warn("TODO")
            }, map: function (e, t) {
                var n = this._array, r = this._array, i = n[0], s = n[0], o = this._size;
                for (var u = 1; u < o; u++) {
                    var a = n[u];
                    a < i && (i = a), a > s && (s = a)
                }
                var f = s - i, l = t - e;
                for (var u = 0; u < o; u++) if (f === 0) r[u] = e; else {
                    var a = n[u], c = (a - i) / f;
                    r[u] = l * c + e
                }
                return this
            }, add: function (e, t) {
                return this.binaryOperation(this, e, s, t)
            }, sub: function (e, t) {
                return this.binaryOperation(this, e, o, t)
            }, mul: function (e, t) {
                return this.binaryOperation(this, e, u, t)
            }, div: function (e, t) {
                return this.binaryOperation(this, e, a, t)
            }, mod: function (e, t) {
                return this.binaryOperation(this, e, f, t)
            }, and: function (e, t) {
                return this.binaryOperation(this, e, l, t)
            }, or: function (e, t) {
                return this.binaryOperation(this, e, c, t)
            }, xor: function (e, t) {
                return this.binaryOperation(this, e, h, t)
            }, equal: function (e) {
                return this.binaryOperation(this, e, p, out)
            }, binaryOperation: function (e, t, n, r) {
                var i = [], d = typeof e == "number", m = typeof t == "number";
                if (d) i = t._shape.slice(); else if (m) i = e._shape.slice(); else {
                    var g = e._shape.length - 1, y = t._shape.length - 1, b = e, E = t;
                    while (g >= 0 && y >= 0) {
                        if (e._shape[g] == 1) i.unshift(t._shape[y]), b = e.repeat(t._shape[y], g); else if (t._shape[y] == 1) i.unshift(e._shape[g]), E = t.repeat(e._shape[g], y); else {
                            if (t._shape[y] != e._shape[g]) throw new Error(x(e._shape, t._shape));
                            i.unshift(e._shape[g])
                        }
                        g--, y--
                    }
                    for (var T = g; T >= 0; T--) i.unshift(e._shape[T]);
                    for (var T = y; T >= 0; T--) i.unshift(t._shape[T]);
                    e = b, t = E
                }
                if (!r) r = new v(this._dtype), r.initFromShape(i); else if (!S(i, r._shape)) throw new Error(x(i, r._shape));
                var N = r._array, C, k, L, A;
                d ? (C = t._shape.length - 1, k = !1, L = e, A = t._array) : m ? (C = e._shape.length - 1, k = !0, A = t, L = e._array) : (C = Math.abs(e._shape.length - t._shape.length), k = e._shape.length >= t._shape.length, L = e._array, A = t._array);
                var O = w(i, C), M = i[C], _ = O * M, D = r._size / _, P, H, B, j = 0;
                if (k) if (m) for (var F = 0; F < D; F++) for (var T = 0; T < _; T++) {
                    P = L[j], H = A;
                    switch (n) {
                        case s:
                            B = P + H;
                            break;
                        case o:
                            B = P - H;
                            break;
                        case u:
                            B = P * H;
                            break;
                        case a:
                            B = P / H;
                            break;
                        case f:
                            B = P % H;
                            break;
                        case l:
                            B = P & H;
                            break;
                        case c:
                            B = P | H;
                            break;
                        case h:
                            B = P ^ H;
                            break;
                        case p:
                            B = P == H;
                            break;
                        default:
                            throw new Error("Unkown operation " + n)
                    }
                    N[j] = B, j++
                } else for (var F = 0; F < D; F++) for (var T = 0; T < _; T++) {
                    P = L[j], H = A[T];
                    switch (n) {
                        case s:
                            B = P + H;
                            break;
                        case o:
                            B = P - H;
                            break;
                        case u:
                            B = P * H;
                            break;
                        case a:
                            B = P / H;
                            break;
                        case f:
                            B = P % H;
                            break;
                        case l:
                            B = P & H;
                            break;
                        case c:
                            B = P | H;
                            break;
                        case h:
                            B = P ^ H;
                            break;
                        case p:
                            B = P == H;
                            break;
                        default:
                            throw new Error("Unkown operation " + n)
                    }
                    N[j] = B, j++
                } else if (d) for (var F = 0; F < D; F++) for (var T = 0; T < _; T++) {
                    P = L, H = A[j];
                    switch (n) {
                        case s:
                            B = P + H;
                            break;
                        case o:
                            B = P - H;
                            break;
                        case u:
                            B = P * H;
                            break;
                        case a:
                            B = P / H;
                            break;
                        case f:
                            B = P % H;
                            break;
                        case l:
                            B = P & H;
                            break;
                        case c:
                            B = P | H;
                            break;
                        case h:
                            B = P ^ H;
                            break;
                        case p:
                            B = P == H;
                            break;
                        default:
                            throw new Error("Unkown operation " + n)
                    }
                    N[j] = B, j++
                } else for (var F = 0; F < D; F++) for (var T = 0; T < _; T++) {
                    P = L[j], H = A[T];
                    switch (n) {
                        case s:
                            B = P + H;
                            break;
                        case o:
                            B = P - H;
                            break;
                        case u:
                            B = P * H;
                            break;
                        case a:
                            B = P / H;
                            break;
                        case f:
                            B = P % H;
                            break;
                        case l:
                            B = P & H;
                            break;
                        case c:
                            B = P | H;
                            break;
                        case h:
                            B = P ^ H;
                            break;
                        case p:
                            B = P == H;
                            break;
                        default:
                            throw new Error("Unkown operation " + n)
                    }
                    N[j] = B, j++
                }
                return r
            }, neg: function () {
                var e = this._array;
                for (var t = 0; t < this._size; t++) e[t] = -e[t];
                return this
            }, sin: function () {
                return this._mathAdapter(Math.sin)
            }, cos: function () {
                return this._mathAdapter(Math.cos)
            }, tan: function () {
                return this._mathAdapter(Math.tan)
            }, abs: function () {
                return this._mathAdapter(Math.abs)
            }, log: function () {
                return this._mathAdapter(Math.log)
            }, sqrt: function () {
                return this._mathAdapter(Math.sqrt)
            }, ceil: function () {
                return this._mathAdapter(Math.ceil)
            }, floor: function () {
                return this._mathAdapter(Math.floor)
            }, pow: function (e) {
                var t = this._array;
                for (var n = 0; n < this._size; n++) t[n] = Math.pow(t[n], e);
                return this
            }, _mathAdapter: function (e) {
                var t = this._array;
                for (var n = 0; n < this._size; n++) t[n] = e(t[n]);
                return this
            }, round: function (e) {
                e = Math.floor(e || 0);
                var t = Math.pow(10, e), n = this._array;
                if (e === 0) for (var r = 0; r < this._size; r++) n[r] = Math.round(n[r]); else for (var r = 0; r < this._size; r++) n[r] = Math.round(n[r] * t) / t;
                return this
            }, clip: function (e, t) {
                var n = this._array;
                for (var r = 0; r < this._size; r++) n[r] = Math.max(Math.min(n[r], t), e);
                return this
            }, get: function (e, t) {
                function l(e, t) {
                    var r = i[e], s = n[e];
                    if (e < o - 1) if (r[2] > 0) for (var c = r[0]; c < r[1]; c += r[2]) l(e + 1, t + s * c); else for (var c = r[0]; c > r[1]; c += r[2]) l(e + 1, t + s * c); else if (r[2] > 0) for (var c = r[0]; c < r[1]; c += r[2]) for (var h = 0; h < s; h++) u[f++] = a[c * s + h + t]; else for (var c = r[0]; c > r[1]; c += r[2]) for (var h = 0; h < s; h++) u[f++] = a[c * s + h + t]
                }

                typeof e == "number" && (e = e.toString());
                var n = E(this._shape), r = this._parseRanges(e), i = r[0], s = r[1];
                if (i.length > this._shape.length) throw new Error("Too many indices");
                var o = i.length, u;
                s.length ? (t = new v(this._dtype), t.initFromShape(s), u = t._array) : u = [];
                var a = this._array, f = 0;
                return l(0, 0), s.length ? t : u[0]
            }, set: function (e, t) {
                typeof e == "number" && (e = e.toString());
                var n = E(this._shape), r = this._parseRanges(e), i = r[0], s = r[1];
                if (i.length > this._shape.length) throw new Error("Too many indices");
                var o = typeof t == "number", u = i.length, a = this._array;
                if (o) var f = t; else {
                    if (!S(s, t.shape())) throw new Error(x(s, t.shape()));
                    var f = t._array
                }
                var l = 0, c = function (e, t) {
                    var r = i[e], s = n[e];
                    if (e < u - 1) if (r[2] > 0) for (var h = r[0]; h < r[1]; h += r[2]) c(e + 1, t + s * h); else for (var h = r[0]; h > r[1]; h += r[2]) c(e + 1, t + s * h); else if (r[2] > 0) for (var h = r[0]; h < r[1]; h += r[2]) for (var p = 0; p < s; p++) o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++]; else for (var h = r[0]; h > r[1]; h += r[2]) for (var p = 0; p < s; p++) o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++]
                };
                return c(0, 0), this
            }, insert: function (e, t, n) {
                var i = this._array, s = !1;
                typeof e == "number" && (e = [e], s = !0), typeof t == "number" ? t = new v([t]) : t instanceof Array && (t = new v(t)), typeof n == "undefined" && (this._shape = [this._size], n = 0);
                var o = e[0], u = this._shape[n];
                for (var a = 0; a < e.length; a++) {
                    e[a] < 0 && (e[a] = u + e[a]);
                    if (e[a] > u) throw new Error(N(e[a]));
                    if (e[a] < o) throw new Error("Index must be in ascending order");
                    o = e[a]
                }
                var f = this._shape.slice();
                s ? f.splice(n, 1) : f[n] = e.length;
                var l = t._shape, c = l.length - 1, h = f.length - 1, p = t;
                while (c >= 0 && h >= 0) {
                    if (l[c] === 1) p = t.repeat(f[h], c); else if (l[c] !== f[h]) throw new Error(x(l, f));
                    c--, h--
                }
                t = p;
                var d = w(this._shape, n), u = this._shape[n], m = u * d, y = this._size / m, b = e.length,
                    E = new Uint32Array(y * b), S = 0;
                for (var T = 0; T < this._size; T += m) for (var a = 0; a < b; a++) {
                    var C = e[a];
                    E[S++] = T + C * d
                }
                var k = this._shape.slice();
                k[n] += e.length;
                var L = g(k);
                if (this._array.length < L) var i = new r[this._dtype](L); else var i = this._array;
                var A = this._array, O = t._array, M = E.length - 1, _ = this._size, D = E[M], P = L - 1,
                    H = t._size - 1;
                while (M >= 0) {
                    for (var a = _ - 1; a >= D; a--) i[P--] = A[a];
                    _ = D, D = E[--M];
                    for (var a = 0; a < d; a++) H < 0 && (H = t._size - 1), i[P--] = O[H--]
                }
                for (var a = _ - 1; a >= 0; a--) i[P--] = A[a];
                return this._array = i, this._shape = k, this._size = L, this
            }.kwargs(), append: function () {
                console.warn("TODO")
            }.kwargs(), "delete": function (e, t) {
                var n = this._array;
                typeof e == "number" && (e = [e]);
                var r = this._size;
                typeof t == "undefined" && (this._shape = [r], t = 0);
                var i = w(this._shape, t), s = this._shape[t], o = i * s, u = 0;
                for (var a = 0; a < r; a += o) {
                    var f = 0, l = e[0], c = 0;
                    while (c < e.length) {
                        l < 0 && (l += s);
                        if (l > s) throw new Error(N(l));
                        if (l < f) throw new Error("Index must be in ascending order");
                        for (var h = f; h < l; h++) for (var p = 0; p < i; p++) n[u++] = n[h * i + p + a];
                        f = l + 1, l = e[++c]
                    }
                    for (var h = f; h < s; h++) for (var p = 0; p < i; p++) n[u++] = n[h * i + p + a]
                }
                return this._shape[t] -= e.length, this._size = g(this._shape), this
            }.kwargs(), _parseRanges: function (e) {
                var t = e.split(/\s*,\s*/), n = [], r = [], i = 0;
                for (var s = 0; s < t.length; s++) if (t[s] === "...") {
                    var o = this._shape.length - (t.length - s);
                    while (i <= o) n.push([0, this._shape[i], 1]), r.push(this._shape[i]), i++
                } else {
                    var u = m(t[s], this._shape[i]);
                    n.push(u);
                    if (t[s].indexOf(":") >= 0) {
                        var a = Math.floor((u[1] - u[0]) / u[2]);
                        a = a < 0 ? 0 : a, r.push(a)
                    }
                    i++
                }
                for (; i < this._shape.length; i++) r.push(this._shape[i]);
                return [n, r]
            }, toArray: function () {
                function i(s, o) {
                    var u = n[s];
                    for (var a = 0; a < u; a++) s < r - 1 ? i(s + 1, o[a] = []) : o[a] = e[t++]
                }

                var e = this._array, t = 0, n = this._shape, r = n.length, s = [];
                return i(0, s), s
            }, copy: function () {
                var e = new v;
                return e._array = t.call(this._array), e._shape = this._shape.slice(), e._dtype = this._dtype, e._size = this._size, e
            }, constructor: v
        }, v.range = function (e, n, i, s) {
            var o = t.call(arguments), u = o[o.length - 1];
            if (typeof u == "string") {
                var s = u;
                o.pop()
            }
            o.length === 1 ? (n = o[0], i = 1, e = 0) : o.length == 2 && (i = 1), s = s || "number";
            var a = new r[s](Math.ceil((n - e) / i)), f = 0;
            for (var l = e; l < n; l += i) a[f++] = l;
            var c = new v;
            return c._array = a, c._shape = [a.length], c._dtype = s, c._size = a.length, c
        }.kwargs(), v.zeros = function (e, t) {
            var n = new v(t);
            return n.initFromShape(e), n
        }.kwargs(), v
    }), r("echarts/chart/chord", ["require", "../util/shape/chord", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/vector", "../util/ndarray", "../chart"], function (e) {
        function n(n, r, i, s) {
            function F() {
                o.selectedMap = {}, w = [], b = null;
                var e = [], n = 0;
                for (var i = 0, s = g.length; i < s; i++) if (g[i].type === o.type) {
                    b || (b = g[i], o.reformOption(b));
                    var u = m(g[i].name);
                    o.selectedMap[g[i].name] = u;
                    if (!u) continue;
                    w.push(g[i]), e.push(g[i].matrix), n++
                }
                if (!b) return;
                if (!w.length) return;
                var a = r.getWidth(), f = r.getHeight(), l = Math.min(a, f);
                E = b.data, S = b.startAngle, S %= 360, S < 0 && (S += 360), x = b.clockWise, T = o.parsePercent(b.radius[0], l / 2), N = o.parsePercent(b.radius[1], l / 2), C = b.padding, k = b.sort, L = b.sortSub, O = b.showScale, M = b.showScaleText, A = [o.parsePercent(b.center[0], a), o.parsePercent(b.center[1], f)];
                var c = b.itemStyle.normal.chordStyle.lineStyle.width - b.itemStyle.normal.lineStyle.width;
                _ = c / t / T / Math.PI * 180, D = new p(e), D = D._transposelike([1, 2, 0]);
                var h = I(D, E);
                D = h[0], E = h[1];
                var d = D.shape();
                if (d[0] !== d[1] || d[0] !== E.length) throw new Error("Data not valid");
                if (d[0] === 0 || d[2] === 0) return;
                D.reshape(d[0], d[1] * d[2]);
                var v = D.sum(1), y = v.mul(1 / v.sum()), B = d[0], j = d[1] * d[2], F = y.mul(360 - C * B),
                    W = D.div(D.sum(1).reshape(B, 1));
                W = W.mul(F.sub(_ * 2).reshape(B, 1));
                switch (k) {
                    case"ascending":
                    case"descending":
                        var X = F.argsort(0, k);
                        F.sort(0, k), v.sort(0, k);
                        break;
                    default:
                        var X = p.range(d[0])
                }
                switch (L) {
                    case"ascending":
                    case"descending":
                        var V = W.argsort(1, L);
                        W.sort(1, L);
                        break;
                    default:
                        var V = p.range(j).reshape(1, j).repeat(B, 0)
                }
                var $ = X.toArray(), J = F.toArray(), K = V.toArray(), Q = W.toArray(), G = v.toArray(), Y = [],
                    Z = (new p(B, j)).toArray(), et = [], tt = 0, nt = 0;
                for (var i = 0; i < B; i++) {
                    var rt = $[i];
                    et[rt] = G[i], nt = tt + J[i], Y[rt] = [tt, nt];
                    var it = tt + _, st = it;
                    for (var ot = 0; ot < j; ot++) {
                        st = it + Q[rt][ot];
                        var ut = K[rt][ot];
                        Z[rt][ut] = [it, st], it = st
                    }
                    tt = nt + C
                }
                H = (new p(B, B, n)).toArray(), P = [], q(Y, et), Z = (new p(Z)).reshape(B, B, n, 2).toArray(), R(Z, D.reshape(d).toArray());
                var h = z(et);
                O && U(h[0], h[1], Y, (new p(h[0])).sum() / (360 - C * B))
            }

            function I(e, t) {
                var n = [], r = [];
                for (var i = 0; i < t.length; i++) {
                    var s = t[i].name;
                    o.selectedMap[s] = m(s), o.selectedMap[s] ? r.push(t[i]) : n.push(i)
                }
                n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1));
                if (!e.size()) return [e, r];
                n = [];
                var u = [], a = e.shape();
                e.reshape(a[0], a[1] * a[2]);
                var f = e.sum(1).toArray();
                e.reshape(a);
                for (var i = 0; i < r.length; i++) f[i] === 0 ? n.push(i) : u.push(r[i]);
                return n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1)), [e, u]
            }

            function q(e, t) {
                function f(e) {
                    return function () {
                        s && clearTimeout(s), s = setTimeout(function () {
                            for (var t = 0; t < n; t++) {
                                P[t].style.opacity = t === e ? 1 : .1, r.modShape(P[t].id, P[t]);
                                for (var s = 0; s < n; s++) for (var o = 0; o < i; o++) {
                                    var u = H[t][s][o];
                                    u && (u.style.opacity = t === e || s === e ? .5 : .03, r.modShape(u.id, u))
                                }
                            }
                            r.refresh()
                        }, 50)
                    }
                }

                function c() {
                    return function () {
                        s && clearTimeout(s), s = setTimeout(function () {
                            for (var e = 0; e < n; e++) {
                                P[e].style.opacity = 1, r.modShape(P[e].id, P[e]);
                                for (var t = 0; t < n; t++) for (var s = 0; s < i; s++) {
                                    var o = H[e][t][s];
                                    o && (o.style.opacity = .5, r.modShape(o.id, o))
                                }
                            }
                            r.refresh()
                        }, 50)
                    }
                }

                var n = E.length, i = w.length, s, u = o.deepQuery([b], "itemStyle.normal.label.show"),
                    a = o.deepQuery([b], "itemStyle.normal.label.color");
                for (var p = 0; p < n; p++) {
                    var d = E[p], m = e[p], g = (x ? 360 - m[1] : m[0]) + S, C = (x ? 360 - m[0] : m[1]) + S, k = {
                        id: r.newShapeId(o.type),
                        shape: "sector",
                        zlevel: y,
                        style: {
                            x: A[0],
                            y: A[1],
                            r0: T,
                            r: N,
                            startAngle: g,
                            endAngle: C,
                            brushType: "fill",
                            opacity: 1,
                            color: v(d.name)
                        },
                        highlightStyle: {brushType: "fill"}
                    };
                    k.style.lineWidth = o.deepQuery([d, b], "itemStyle.normal.lineStyle.width"), k.highlightStyle.lineWidth = o.deepQuery([d, b], "itemStyle.emphasis.lineStyle.width"), k.style.strokeColor = o.deepQuery([d, b], "itemStyle.normal.lineStyle.color"), k.highlightStyle.strokeColor = o.deepQuery([d, b], "itemStyle.emphasis.lineStyle.color"), k.style.lineWidth > 0 && (k.style.brushType = "both"), k.highlightStyle.lineWidth > 0 && (k.highlightStyle.brushType = "both"), l.pack(k, w[0], 0, t[p], 0, d.name);
                    if (u) {
                        var L = [g + C] / 2;
                        L %= 360;
                        var O = L <= 90 || L >= 270;
                        L = L * Math.PI / 180;
                        var _ = [Math.cos(L), -Math.sin(L)], D = M ? 45 : 20, B = h.scale([], _, N + D);
                        h.add(B, B, A);
                        var j = {
                            shape: "text",
                            id: r.newShapeId(o.type),
                            zlevel: y - 1,
                            hoverable: !1,
                            style: {x: B[0], y: B[1], text: d.name, textAlign: O ? "left" : "right", color: a}
                        };
                        j.style.textColor = o.deepQuery([d, b], "itemStyle.normal.label.textStyle.color") || "#fff", j.style.textFont = o.getFont(o.deepQuery([d, b], "itemStyle.normal.label.textStyle")), r.addShape(j), o.shapeList.push(j)
                    }
                    k.onmouseover = f(p), k.onmouseout = c(), o.shapeList.push(k), P.push(k), r.addShape(k)
                }
            }

            function R(e, t) {
                var n = e.length;
                if (!n) return;
                var i = e[0][0].length, s = b.itemStyle.normal.chordStyle.lineStyle,
                    u = b.itemStyle.emphasis.chordStyle.lineStyle;
                for (var a = 0; a < n; a++) for (var f = 0; f < n; f++) for (var c = 0; c < i; c++) {
                    if (H[f][a][c]) continue;
                    var h = e[a][f][c][0], p = e[f][a][c][0], d = e[a][f][c][1], m = e[f][a][c][1];
                    if (h - m === 0 || p - m === 0) {
                        H[a][f][c] = null;
                        continue
                    }
                    var g;
                    i === 1 ? d - h <= m - p ? g = v(E[a].name) : g = v(E[f].name) : g = v(w[c].name);
                    var N = x ? h : 360 - d, C = x ? d : 360 - h, k = x ? p : 360 - m, L = x ? m : 360 - p, O = {
                        id: r.newShapeId(o.type),
                        shape: "chord",
                        zlevel: y,
                        style: {
                            center: A,
                            r: T,
                            source0: N - S,
                            source1: C - S,
                            target0: k - S,
                            target1: L - S,
                            brushType: "both",
                            opacity: .5,
                            color: g,
                            lineWidth: s.width,
                            strokeColor: s.color
                        },
                        highlightStyle: {brushType: "both", lineWidth: u.width, strokeColor: u.color}
                    };
                    l.pack(O, w[c], c, t[a][f][c], 0, E[a].name, E[f].name, t[f][a][c]), H[a][f][c] = O, o.shapeList.push(O), r.addShape(O)
                }
            }

            function U(e, t, n, i) {
                for (var s = 0; s < n.length; s++) {
                    var u = n[s][0], a = n[s][1], f = u;
                    while (f < a) {
                        var l = ((x ? 360 - f : f) + S) / 180 * Math.PI, c = [Math.cos(l), -Math.sin(l)],
                            d = h.scale([], c, N + 1);
                        h.add(d, d, A);
                        var v = h.scale([], c, N + B);
                        h.add(v, v, A);
                        var m = {
                            shape: "line",
                            id: r.newShapeId(o.type),
                            zlevel: y - 1,
                            hoverable: !1,
                            style: {
                                xStart: d[0],
                                yStart: d[1],
                                xEnd: v[0],
                                yEnd: v[1],
                                lineCap: "round",
                                brushType: "stroke",
                                strokeColor: "#666"
                            }
                        };
                        o.shapeList.push(m), r.addShape(m), f += j
                    }
                    if (!M) continue;
                    var g = u, b = i * 5 * j, w = p.range(0, e[s], b).toArray();
                    while (g < a) {
                        var l = x ? 360 - g : g;
                        l = (l + S) % 360;
                        var E = l <= 90 || l >= 270, T = {
                            shape: "text",
                            id: r.newShapeId(o.type),
                            zlevel: y - 1,
                            hoverable: !1,
                            style: {
                                x: E ? N + B + 4 : -N - B - 4,
                                y: 0,
                                text: Math.round(w.shift() * 10) / 10 + t,
                                textAlign: E ? "left" : "right"
                            },
                            position: A.slice(),
                            rotation: E ? [l / 180 * Math.PI, 0, 0] : [(l + 180) / 180 * Math.PI, 0, 0]
                        };
                        o.shapeList.push(T), r.addShape(T), g += j * 5
                    }
                }
            }

            function z(e) {
                var t = [], n = (new p(e)).max(), r, i;
                n > 1e4 ? (r = "k", i = .001) : n > 1e7 ? (r = "m", i = 1e-6) : n > 1e10 ? (r = "b", i = 1e-9) : (r = "", i = 1);
                for (var s = 0; s < e.length; s++) t[s] = e[s] * i;
                return [t, r]
            }

            function W(e, t) {
                s = t, X(e)
            }

            function X(e) {
                e && (i = e, g = i.series), o.clear(), d = s.legend;
                if (d) v = d.getColor, m = d.isSelected; else {
                    var t = {}, n = {}, u = 0;
                    v = function (e) {
                        if (n[e]) return n[e];
                        t[e] === undefined && (t[e] = u++);
                        for (var i = 0; i < w.length; i++) if (w[i].name === e) {
                            n[e] = o.deepQuery([w[i]], "itemStyle.normal.color");
                            break
                        }
                        if (!n[e]) {
                            var s = E.length;
                            for (var i = 0; i < s; i++) if (E[i].name === e) {
                                n[e] = o.deepQuery([E[i]], "itemStyle.normal.color");
                                break
                            }
                        }
                        return n[e] || (n[e] = r.getColor(t[e])), n[e]
                    }, m = function () {
                        return !0
                    }
                }
                F()
            }

            function V(e) {
                var t = c.merge;
                e = t(e || {}, f.chord, {
                    overwrite: !1,
                    recursive: !0
                }), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, f.textStyle, {
                    overwrite: !1,
                    recursive: !0
                })
            }

            var o = this, u = e("../component/base");
            u.call(this, r);
            var a = e("./calculableBase");
            a.call(this, r, i);
            var f = e("../config"), l = e("../util/ecData"), c = e("zrender/tool/util"), h = e("zrender/tool/vector"),
                p = e("../util/ndarray"), d, v, m, g;
            this.type = f.CHART_TYPE_CHORD;
            var y = o.getZlevelBase(), b, w = [], E, S, x, T, N, C, k, L, A, O, M, _ = 0, D, P = [], H = [], B = 4,
                j = 4;
            o.init = W, o.refresh = X, o.reformOption = V, W(i, s)
        }

        e("../util/shape/chord");
        var t = window.devicePixelRatio || 1;
        return e("../chart").define("chord", n), n
    }), r("echarts/chart/force", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/config", "zrender/tool/event", "zrender/tool/util", "zrender/tool/vector", "../util/ndarray", "../chart"], function (e) {
        function n(n, s, o, u) {
            function Q() {
                var e = u.legend;
                j = 1, X = s.getWidth(), V = s.getHeight(), $ = [X / 2, V / 2];
                for (var t = 0, n = y.length; t < n; t++) {
                    var r = y[t];
                    if (r.type === l.CHART_TYPE_FORCE) {
                        y[t] = g.reformOption(y[t]), b = r;
                        var i = g.deepQuery([r], "minRadius"), o = g.deepQuery([r], "maxRadius");
                        z = g.deepQuery([r], "attractiveness"), I = g.deepQuery([r], "density"), q = g.deepQuery([r], "initSize"), U = g.deepQuery([r], "centripetal"), R = g.deepQuery([r], "coolDown"), S = g.deepQuery([r], "categories");
                        for (var a = 0, f = S.length; a < f; a++) S[a].name && (e ? g.selectedMap[a] = e.isSelected(S[a].name) : g.selectedMap[a] = !0);
                        N = g.deepQuery([r], "itemStyle.normal.linkStyle"), C = g.deepQuery([r], "itemStyle.emphasis.linkStyle"), x = g.deepQuery([r], "itemStyle.normal.nodeStyle"), T = g.deepQuery([r], "itemStyle.emphasis.nodeStyle"), k = g.deepQuery([r], "nodes"), L = d.clone(g.deepQuery([r], "links")), G(k, L), P = [], H = [], B = [], M = [], _ = [], B = [], w = [], E = [];
                        var c = X * V;
                        F = .5 / z * Math.sqrt(c / A.length), Z(A, O), Y(A, i, o)
                    }
                }
            }

            function G(e, t) {
                var n = [], r = 0;
                A = i(e, function (e, t) {
                    if (!e) return;
                    if (g.selectedMap[e.category]) return n[t] = r++, !0;
                    n[t] = -1
                });
                var s, o, u;
                O = i(t, function (e, t) {
                    return s = e.source, o = e.target, u = !0, n[s] >= 0 ? e.source = n[s] : u = !1, n[o] >= 0 ? e.target = n[o] : u = !1, e.rawIndex = t, u
                })
            }

            function Y(e, t, n) {
                var i = [], o = e.length;
                for (var u = 0; u < o; u++) {
                    var a = e[u];
                    i.push(a.value)
                }
                var f = new m(i);
                i = f.map(t, n).toArray();
                var l = f.max();
                l !== 0 && (M = f.mul(1 / l, f).toArray());
                for (var u = 0; u < o; u++) {
                    var a = e[u], h, p, y = i[u], E = r(X / 2, V / 2, q);
                    h = typeof a.initial == "undefined" ? E.x : a.initial[0], p = typeof a.initial == "undefined" ? E.y : a.initial[1], P[u] = v.create(h, p), H[u] = v.create(h, p), D[u] = v.create(0, 0), B[u] = y * y * I * .035;
                    var N = {
                        id: s.newShapeId(g.type),
                        shape: "circle",
                        style: {r: y, x: 0, y: 0},
                        clickable: !0,
                        highlightStyle: {},
                        position: [h, p],
                        __forceIndex: u
                    }, C;
                    g.deepQuery([b], "itemStyle.normal.label.show") && (N.style.text = a.name, N.style.textPosition = "inside", C = g.deepQuery([b], "itemStyle.normal.label.textStyle") || {}, N.style.textColor = C.color || "#fff", N.style.textAlign = C.align || "center", N.style.textBaseLine = C.baseline || "middle", N.style.textFont = g.getFont(C)), g.deepQuery([b], "itemStyle.emphasis.label.show") && (N.highlightStyle.text = a.name, N.highlightStyle.textPosition = "inside", C = g.deepQuery([b], "itemStyle.emphasis.label.textStyle") || {}, N.highlightStyle.textColor = C.color || "#fff", N.highlightStyle.textAlign = C.align || "center", N.highlightStyle.textBaseLine = C.baseline || "middle", N.highlightStyle.textFont = g.getFont(C)), d.merge(N.style, x), d.merge(N.highlightStyle, T);
                    if (typeof a.category != "undefined") {
                        var L = S[a.category];
                        if (L) {
                            var A = L.itemStyle;
                            A && (A.normal && d.merge(N.style, A.normal, {overwrite: !0}), A.emphasis && d.merge(N.highlightStyle, A.emphasis, {overwrite: !0}))
                        }
                    }
                    if (typeof a.itemStyle != "undefined") {
                        var A = a.itemStyle;
                        A.normal && d.merge(N.style, A.normal, {overwrite: !0}), A.normal && d.merge(N.highlightStyle, A.emphasis, {overwrite: !0})
                    }
                    g.setCalculable(N), N.ondragstart = g.shapeHandler.ondragstart, N.draggable = !0, w.push(N), g.shapeList.push(N);
                    var O = "";
                    if (typeof a.category != "undefined") {
                        var L = S[a.category];
                        O = L && L.name || ""
                    }
                    c.pack(N, {name: O}, 0, a, k.indexOf(a), a.name || "", a.value), s.addShape(N)
                }
            }

            function Z(e, t) {
                var n = t.length;
                for (var r = 0; r < n; r++) {
                    var i = t[r], o = i.weight || 1;
                    _.push(o);
                    var u = {
                        id: s.newShapeId(g.type),
                        shape: "line",
                        style: {xStart: 0, yStart: 0, xEnd: 0, yEnd: 0, lineWidth: 1},
                        clickable: !0,
                        highlightStyle: {}
                    };
                    d.merge(u.style, N), d.merge(u.highlightStyle, C), typeof i.itemStyle != "undefined" && (i.itemStyle.normal && d.merge(u.style, i.itemStyle.normal, {overwrite: !0}), i.itemStyle.emphasis && d.merge(u.highlightStyle, i.itemStyle.emphasis, {overwrite: !0})), E.push(u), g.shapeList.push(u);
                    var a = A[i.source], f = A[i.target], i = L[i.rawIndex];
                    c.pack(u, b, 0, {
                        source: i.source,
                        target: i.target,
                        value: i.value || 0
                    }, i.rawIndex, a.name + " - " + f.name, i.value || 0, !0), s.addShape(u)
                }
                var l = new m(_), h = l.max();
                h !== 0 && (_ = l.mul(1 / h, l).toArray())
            }

            function et() {
                for (var e = 0, t = O.length; e < t; e++) {
                    var n = O[e], r = E[e], i = w[n.source], s = w[n.target];
                    r.style.xStart = i.position[0], r.style.yStart = i.position[1], r.style.xEnd = s.position[0], r.style.yEnd = s.position[1]
                }
            }

            function tt(e) {
                var t = P.length, n = [], r = F * F;
                for (var i = 0; i < t; i++) D[i][0] = 0, D[i][1] = 0;
                for (var i = 0; i < t; i++) for (var s = i + 1; s < t; s++) {
                    var o = M[i], u = M[s], a = P[i], f = P[s];
                    v.sub(n, f, a);
                    var l = v.length(n);
                    if (l > 500) continue;
                    l < 5 && (l = 5), v.scale(n, n, 1 / l);
                    var c = 1 * (o + u) * r / l;
                    v.scaleAndAdd(D[i], D[i], n, -c), v.scaleAndAdd(D[s], D[s], n, c)
                }
                for (var i = 0, h = O.length; i < h; i++) {
                    var p = O[i], d = _[i], m = p.source, g = p.target, a = P[m], f = P[g];
                    v.sub(n, f, a);
                    var y = v.lengthSquare(n);
                    if (y === 0) continue;
                    var c = d * y / F / Math.sqrt(y);
                    v.scaleAndAdd(D[m], D[m], n, c), v.scaleAndAdd(D[g], D[g], n, -c)
                }
                for (var i = 0, h = A.length; i < h; i++) {
                    var b = P[i];
                    v.sub(n, $, b);
                    var y = v.lengthSquare(n), c = y * U / (100 * Math.sqrt(y));
                    v.scaleAndAdd(D[i], D[i], n, c)
                }
                var E = [];
                for (var i = 0, h = P.length; i < h; i++) {
                    if (A[i].fixed) {
                        v.set(P[i], J, K), v.set(H[i], J, K), v.set(w[i].position, J, K), v.set(A[i].initial, J, K);
                        continue
                    }
                    var b = P[i], S = H[i];
                    v.sub(E, b, S), S[0] = b[0], S[1] = b[1], v.scaleAndAdd(E, E, D[i], e / B[i]), v.scale(E, E, j), E[0] = Math.max(Math.min(E[0], 100), -100), E[1] = Math.max(Math.min(E[1], 100), -100), v.add(b, b, E), v.copy(w[i].position, b), A[i].initial === undefined && (A[i].initial = v.create()), v.copy(A[i].initial, b)
                }
            }

            function nt() {
                if (j < .01) return;
                tt(W), et();
                var e = {};
                for (var t = 0; t < w.length; t++) {
                    var n = w[t];
                    e.position = n.position, s.modShape(n.id, e, !0)
                }
                e = {};
                for (var t = 0; t < E.length; t++) {
                    var n = E[t];
                    e.style = n.style, s.modShape(n.id, e, !0)
                }
                s.refresh(), j *= R
            }

            function it(e, n) {
                function r() {
                    rt && (nt(), t(r))
                }

                o = e, u = n, y = o.series, g.clear(), Q(), rt = !0, t(r)
            }

            function st(e) {
                e && (o = e, y = o.series), g.clear(), Q(), j = 1
            }

            function ot() {
                rt = !1
            }

            function ut() {
            }

            function at(e) {
                if (!g.isDragstart || !e.target) return;
                var t = e.target, n = t.__forceIndex, r = A[n];
                r.fixed = !0, g.isDragstart = !1, s.on(h.EVENT.MOUSEMOVE, lt)
            }

            function ft(e, t) {
                if (!g.isDragend || !e.target) return;
                var n = e.target, r = n.__forceIndex, i = A[r];
                i.fixed = !1, t.dragIn = !0, t.needRefresh = !1, g.isDragend = !1, s.un(h.EVENT.MOUSEMOVE, lt)
            }

            function lt(e) {
                j = .8, J = p.getX(e.event), K = p.getY(e.event)
            }

            var a = e("../component/base");
            a.call(this, s);
            var f = e("./calculableBase");
            f.call(this, s, o);
            var l = e("../config"), c = e("../util/ecData"), h = e("zrender/config"), p = e("zrender/tool/event"),
                d = e("zrender/tool/util"), v = e("zrender/tool/vector"), m = e("../util/ndarray"), g = this;
            g.type = l.CHART_TYPE_FORCE;
            var y, b, w = [], E = [], S = [], x, T, N, C, k, L, A = [], O = [], M = [], _ = [], D = [], P = [], H = [],
                B = [], j, F, I, q, R, U, z, W = 1 / 60, X, V, $ = [], J, K, rt;
            g.shapeHandler.ondragstart = function () {
                g.isDragstart = !0
            }, g.init = it, g.refresh = st, g.ondragstart = at, g.ondragend = ft, g.dispose = ot, g.onclick = ut, it(o, u)
        }

        function r(e, t, n) {
            return {x: (Math.random() - .5) * n + e, y: (Math.random() - .5) * n + t}
        }

        function i(e, t) {
            var n = e.length, r = [];
            for (var i = 0; i < n; i++) t(e[i], i) && r.push(e[i]);
            return r
        }

        var t = window.requrestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (e) {
            setTimeout(e, 16)
        };
        return e("../chart").define("force", n), n
    }), r("echarts/util/shape/halfSmoothPolygon", ["require", "zrender/shape", "zrender/shape/base", "zrender/shape"], function (e) {
        function t() {
            this.type = "halfSmoothPolygon"
        }

        return t.prototype = {
            buildPath: function (t, n) {
                var r = n.pointList;
                if (r.length < 2) return;
                if (n.smooth) {
                    var i = this.smoothBezier(r.slice(0, -2), n.smooth);
                    t.moveTo(r[0][0], r[0][1]);
                    var s, o, u, a = r.length;
                    for (var f = 0; f < a - 3; f++) s = i[f * 2], o = i[f * 2 + 1], u = r[f + 1], t.bezierCurveTo(s[0], s[1], o[0], o[1], u[0], u[1]);
                    t.lineTo(r[a - 2][0], r[a - 2][1]), t.lineTo(r[a - 1][0], r[a - 1][1]), t.lineTo(r[0][0], r[0][1])
                } else e("zrender/shape").get("polygon").buildPath(t, n);
                return
            }
        }, e("zrender/shape/base").derive(t), e("zrender/shape").define("halfSmoothPolygon", new t), t
    }), r("echarts/chart/line", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/color", "zrender/shape", "zrender/shape", "../util/shape/halfSmoothPolygon", "../chart"], function (e) {
        function t(t, r, i, s) {
            function y() {
                d = {}, c.selectedMap = {};
                var e = {top: [], bottom: [], left: [], right: []}, t, n, i, o;
                for (var u = 0, f = h.length; u < f; u++) h[u].type == c.type && (h[u] = c.reformOption(h[u]), t = h[u].xAxisIndex, n = h[u].yAxisIndex, i = s.xAxis.getAxis(t), o = s.yAxis.getAxis(n), i.type == a.COMPONENT_TYPE_AXIS_CATEGORY ? e[i.getPosition()].push(u) : o.type == a.COMPONENT_TYPE_AXIS_CATEGORY && e[o.getPosition()].push(u));
                for (var l in e) e[l].length > 0 && b(l, e[l]);
                for (var u = 0, f = c.shapeList.length; u < f; u++) c.shapeList[u].id = r.newShapeId(c.type), r.addShape(c.shapeList[u])
            }

            function b(e, t) {
                var n = w(t), r = n.locationMap, i = n.maxDataLength;
                if (i === 0 || r.length === 0) return;
                switch (e) {
                    case"bottom":
                    case"top":
                        E(i, r);
                        break;
                    case"left":
                    case"right":
                        S(i, r)
                }
            }

            function w(e) {
                var t, n = 0, i = {}, o = "__kener__stack__", u, a, f = s.legend, l = [], p = 0, d;
                for (var y = 0, b = e.length; y < b; y++) t = h[e[y]], a = t.name, g[e[y]] = g[e[y]] || c.deepQuery([t], "symbol") || m[y % m.length], f ? (c.selectedMap[a] = f.isSelected(a), v[e[y]] = f.getColor(a), d = f.getItemShape(a), d && (d.shape = "icon", d.style.iconType = "legendLineIcon", d.style.symbol = g[e[y]], f.setItemShape(a, d))) : (c.selectedMap[a] = !0, v[e[y]] = r.getColor(e[y])), c.selectedMap[a] && (u = t.stack || o + e[y], typeof i[u] == "undefined" ? (i[u] = n, l[n] = [e[y]], n++) : l[i[u]].push(e[y])), p = Math.max(p, t.data.length);
                return {locationMap: l, maxDataLength: p}
            }

            function E(e, t) {
                var n = t[0][0], r = h[n], o = r.xAxisIndex, u = s.xAxis.getAxis(o), a, f, l, p, v, m, g, y, b = {}, w,
                    E;
                for (var S = 0, T = e; S < T; S++) {
                    if (typeof u.getNameByIndex(S) == "undefined") break;
                    l = u.getCoordByIndex(S);
                    for (var C = 0, k = t.length; C < k; C++) {
                        a = h[t[C][0]].yAxisIndex || 0, f = s.yAxis.getAxis(a), m = v = y = g = f.getCoord(0);
                        for (var L = 0, A = t[C].length; L < A; L++) {
                            n = t[C][L], r = h[n], w = r.data[S], E = typeof w != "undefined" ? typeof w.value != "undefined" ? w.value : w : "-", b[n] = b[n] || [];
                            if (E == "-") {
                                b[n].length > 0 && (d[n] = d[n] || [], d[n].push(b[n]), b[n] = []);
                                continue
                            }
                            p = f.getCoord(E), E >= 0 ? (v -= m - p, p = v) : E < 0 && (g += p - y, p = g), b[n].push([l, p, S, u.getNameByIndex(S), l, m])
                        }
                    }
                    v = s.grid.getY();
                    var O;
                    for (var C = 0, k = t.length; C < k; C++) for (var L = 0, A = t[C].length; L < A; L++) {
                        n = t[C][L], r = h[n], w = r.data[S], E = typeof w != "undefined" ? typeof w.value != "undefined" ? w.value : w : "-";
                        if (E != "-") continue;
                        c.deepQuery([w, r, i], "calculable") && (O = c.deepQuery([w, r], "symbolSize"), v += O * 2 + 5, p = v, c.shapeList.push(N(n, S, u.getNameByIndex(S), l, p, "horizontal")))
                    }
                }
                for (var M in b) b[M].length > 0 && (d[M] = d[M] || [], d[M].push(b[M]), b[M] = []);
                x(d, u, "horizontal")
            }

            function S(e, t) {
                var n = t[0][0], r = h[n], o = r.yAxisIndex, u = s.yAxis.getAxis(o), a, f, l, p, v, m, g, y, b = {}, w,
                    E;
                for (var S = 0, T = e; S < T; S++) {
                    if (typeof u.getNameByIndex(S) == "undefined") break;
                    p = u.getCoordByIndex(S);
                    for (var C = 0, k = t.length; C < k; C++) {
                        a = h[t[C][0]].xAxisIndex || 0, f = s.xAxis.getAxis(a), m = v = y = g = f.getCoord(0);
                        for (var L = 0, A = t[C].length; L < A; L++) {
                            n = t[C][L], r = h[n], w = r.data[S], E = typeof w != "undefined" ? typeof w.value != "undefined" ? w.value : w : "-", b[n] = b[n] || [];
                            if (E == "-") {
                                b[n].length > 0 && (d[n] = d[n] || [], d[n].push(b[n]), b[n] = []);
                                continue
                            }
                            l = f.getCoord(E), E >= 0 ? (v += l - m, l = v) : E < 0 && (g -= y - l, l = g), b[n].push([l, p, S, u.getNameByIndex(S), m, p])
                        }
                    }
                    v = s.grid.getXend();
                    var O;
                    for (var C = 0, k = t.length; C < k; C++) for (var L = 0, A = t[C].length; L < A; L++) {
                        n = t[C][L], r = h[n], w = r.data[S], E = typeof w != "undefined" ? typeof w.value != "undefined" ? w.value : w : "-";
                        if (E != "-") continue;
                        c.deepQuery([w, r, i], "calculable") && (O = c.deepQuery([w, r], "symbolSize"), v -= O * 2 + 5, l = v, c.shapeList.push(N(n, S, u.getNameByIndex(S), l, p, "vertical")))
                    }
                }
                for (var M in b) b[M].length > 0 && (d[M] = d[M] || [], d[M].push(b[M]), b[M] = []);
                x(d, u, "vertical")
            }

            function x(e, t, n) {
                var r, s, o, u, a, f, d, m, g, y, b, w;
                for (var E = h.length - 1; E >= 0; E--) {
                    g = h[E], b = e[E];
                    if (g.type == c.type && typeof b != "undefined") {
                        r = v[E], s = c.deepQuery([g], "itemStyle.normal.lineStyle.width"), o = c.deepQuery([g], "itemStyle.normal.lineStyle.type"), u = c.deepQuery([g], "itemStyle.normal.lineStyle.color"), a = c.deepQuery([g], "itemStyle.normal.color"), f = c.deepQuery([g], "itemStyle.emphasis.color"), d = typeof c.deepQuery([g], "itemStyle.normal.areaStyle") != "undefined", m = c.deepQuery([g], "itemStyle.normal.areaStyle.color");
                        for (var S = 0, x = b.length; S < x; S++) {
                            w = b[S];
                            for (var N = 0, k = w.length; N < k; N++) y = g.data[w[N][2]], (c.deepQuery([y, g], "showAllSymbol") || t.isMainAxis(w[N][2]) && c.deepQuery([y, g], "symbol") != "none" || c.deepQuery([y, g, i], "calculable")) && c.shapeList.push(C(E, w[N][2], w[N][3], w[N][0], w[N][1], c.deepQuery([y], "itemStyle.normal.color") || a || r, c.deepQuery([y], "itemStyle.emphasis.color") || f || a || r, s, c.deepQuery([y, g], "symbolRotate"), n));
                            c.shapeList.push({
                                shape: "brokenLine",
                                zlevel: p,
                                style: {
                                    pointList: w,
                                    strokeColor: u || a || r,
                                    lineWidth: s,
                                    lineType: o,
                                    smooth: T(g.smooth),
                                    shadowColor: c.deepQuery([g], "itemStyle.normal.lineStyle.shadowColor"),
                                    shadowBlur: c.deepQuery([g], "itemStyle.normal.lineStyle.shadowBlur"),
                                    shadowOffsetX: c.deepQuery([g], "itemStyle.normal.lineStyle.shadowOffsetX"),
                                    shadowOffsetY: c.deepQuery([g], "itemStyle.normal.lineStyle.shadowOffsetY")
                                },
                                hoverable: !1,
                                _main: !0,
                                _seriesIndex: E,
                                _orient: n
                            }), d && c.shapeList.push({
                                shape: "halfSmoothPolygon",
                                zlevel: p,
                                style: {
                                    pointList: w.concat([[w[w.length - 1][4], w[w.length - 1][5] - 2], [w[0][4], w[0][5] - 2]]),
                                    brushType: "fill",
                                    smooth: T(g.smooth),
                                    color: m ? m : l.alpha(r, .5)
                                },
                                hoverable: !1,
                                _main: !0,
                                _seriesIndex: E,
                                _orient: n
                            })
                        }
                    }
                }
            }

            function T(e) {
                return e ? .3 : 0
            }

            function N(e, t, n, r, i, s) {
                var o = h[e].calculableHolderColor || a.calculableHolderColor, u = C(e, t, n, r, i, o, v[e], 2, 0, s);
                return u.hoverable = !1, u.draggable = !1, u.style.text = undefined, u
            }

            function C(e, t, n, r, s, o, u, a, l, d) {
                var v = h[e], m = v.data[t], y = c.deepQuery([m], "symbol") || g[e] || "cricle",
                    b = c.deepQuery([m, v], "symbolSize"), w = {
                        shape: "icon",
                        zlevel: p + 1,
                        style: {
                            iconType: y.replace("empty", "").toLowerCase(),
                            x: r - b,
                            y: s - b,
                            width: b * 2,
                            height: b * 2,
                            brushType: "both",
                            color: y.match("empty") ? "#fff" : o,
                            strokeColor: o,
                            lineWidth: a * 2
                        },
                        highlightStyle: {color: y.match("empty") ? "#fff" : u, strokeColor: u, lineWidth: a * 2 + 2},
                        clickable: !0
                    };
                return y.match("image") && (w.style.image = y.replace(new RegExp("^image:\\/\\/"), ""), w.shape = "image"), typeof l != "undefined" && (w.rotation = [l * Math.PI / 180, r, s]), y.match("star") && (w.style.iconType = "star", w.style.n = y.replace("empty", "").replace("star", "") - 0 || 5), y == "none" && (w.invisible = !0, w.hoverable = !1), c.deepQuery([m, v, i], "calculable") && (c.setCalculable(w), w.draggable = !0), w = c.addLabel(w, h[e], h[e].data[t], n, d == "vertical" ? "horizontal" : "vertical"), y.match("empty") && (typeof w.style.textColor == "undefined" && (w.style.textColor = w.style.strokeColor), typeof w.highlightStyle.textColor == "undefined" && (w.highlightStyle.textColor = w.highlightStyle.strokeColor)), f.pack(w, h[e], e, h[e].data[t], t, n), w._x = r, w._y = s, w._dataIndex = t, w._seriesIndex = e, w
            }

            function k(e, t) {
                s = t, L(e)
            }

            function L(e) {
                e && (i = e, h = i.series), c.clear(), y()
            }

            function A(e, t) {
                var n = e.seriesIndex, r = e.dataIndex, i, s, o, u, a, f, l, p, m = n.length;
                while (m--) {
                    i = d[n[m]];
                    if (i) {
                        o = h[n[m]], u = [o], p = v[n[m]], a = c.deepQuery(u, "itemStyle.normal.lineStyle.width"), f = c.deepQuery(u, "itemStyle.normal.color"), l = c.deepQuery(u, "itemStyle.emphasis.color");
                        var g, y;
                        for (var b = 0, w = i.length; b < w; b++) {
                            s = i[b];
                            for (var E = 0, S = s.length; E < S; E++) r == s[E][2] && (y = o.data[s[E][2]], g = C(n[m], s[E][2], s[E][3], s[E][0], s[E][1], c.deepQuery([y], "itemStyle.normal.color") || f || p, c.deepQuery([y], "itemStyle.emphasis.color") || l || f || p, a, c.deepQuery([y, o], "symbolRotate"), "horizontal"), t.push(g))
                        }
                    }
                }
            }

            function O(e) {
                var t = {};
                for (var n = 0, i = e.length; n < i; n++) t[e[n][0]] = e[n];
                var s, o, u, a, f, l, p;
                for (var n = c.shapeList.length - 1; n >= 0; n--) {
                    f = c.shapeList[n]._seriesIndex;
                    if (t[f] && !t[f][3]) {
                        if (c.shapeList[n]._main) {
                            l = c.shapeList[n].style.pointList, o = Math.abs(l[0][0] - l[1][0]), a = Math.abs(l[0][1] - l[1][1]), p = c.shapeList[n]._orient == "horizontal";
                            if (t[f][2]) {
                                if (c.shapeList[n].shape == "polygon") {
                                    var d = l.length;
                                    c.shapeList[n].style.pointList[d - 3] = l[d - 2], p ? c.shapeList[n].style.pointList[d - 3][0] = l[d - 4][0] : c.shapeList[n].style.pointList[d - 3][1] = l[d - 4][1], c.shapeList[n].style.pointList[d - 2] = l[d - 1]
                                }
                                c.shapeList[n].style.pointList.pop(), p ? (s = o, u = 0) : (s = 0, u = -a)
                            } else {
                                c.shapeList[n].style.pointList.shift();
                                if (c.shapeList[n].shape == "polygon") {
                                    var v = c.shapeList[n].style.pointList.pop();
                                    p ? v[0] = l[0][0] : v[1] = l[0][1], c.shapeList[n].style.pointList.push(v)
                                }
                                p ? (s = -o, u = 0) : (s = 0, u = a)
                            }
                            r.modShape(c.shapeList[n].id, {style: {pointList: c.shapeList[n].style.pointList}}, !0)
                        } else {
                            if (t[f][2] && c.shapeList[n]._dataIndex == h[f].data.length - 1) {
                                r.delShape(c.shapeList[n].id);
                                continue
                            }
                            if (!t[f][2] && c.shapeList[n]._dataIndex === 0) {
                                r.delShape(c.shapeList[n].id);
                                continue
                            }
                        }
                        r.animate(c.shapeList[n].id, "").when(500, {position: [s, u]}).start()
                    }
                }
            }

            function M() {
                var e = c.deepQuery([i], "animationDuration"), t = c.deepQuery([i], "animationEasing"), n, s, o, u = 0;
                for (var a = 0, f = c.shapeList.length; a < f; a++) c.shapeList[a]._main ? (o = h[c.shapeList[a]._seriesIndex], u += 1, n = c.shapeList[a].style.pointList[0][0], s = c.shapeList[a].style.pointList[0][1], c.shapeList[a]._orient == "horizontal" ? r.modShape(c.shapeList[a].id, {scale: [0, 1, n, s]}, !0) : r.modShape(c.shapeList[a].id, {scale: [1, 0, n, s]}, !0), r.animate(c.shapeList[a].id, "").when((c.deepQuery([o], "animationDuration") || e) + u * 100, {scale: [1, 1, n, s]}).start(c.deepQuery([o], "animationEasing") || t)) : (n = c.shapeList[a]._x || 0, s = c.shapeList[a]._y || 0, r.modShape(c.shapeList[a].id, {scale: [0, 0, n, s]}, !0), r.animate(c.shapeList[a].id, "").when(e, {scale: [1, 1, n, s]}).start("QuinticOut"))
            }

            var o = e("../component/base");
            o.call(this, r);
            var u = e("./calculableBase");
            u.call(this, r, i);
            var a = e("../config"), f = e("../util/ecData"), l = e("zrender/tool/color"), c = this;
            c.type = a.CHART_TYPE_LINE;
            var h, p = c.getZlevelBase(), d = {}, v = {},
                m = ["circle", "rectangle", "triangle", "diamond", "emptyCircle", "emptyRectangle", "emptyTriangle", "emptyDiamond"],
                g = {};
            e("zrender/shape").get("icon").define("legendLineIcon", n), c.init = k, c.refresh = L, c.ontooltipHover = A, c.addDataAnimation = O, c.animation = M, k(i, s)
        }

        function n(t, n) {
            var r = n.x, i = n.y, s = n.width, o = n.height, u = o / 2;
            t.moveTo(r, i + u), t.lineTo(r + s, i + u), n.symbol.match("empty") && (t.fillStyle = "#fff"), n.brushType = "both";
            var a = n.symbol.replace("empty", "").toLowerCase();
            if (a.match("star")) u = a.replace("star", "") - 0 || 5, i -= 1, a = "star"; else if (a == "rectangle" || a == "arrow") r += (s - o) / 2, s = o;
            var f = "";
            a.match("image") && (f = a.replace(new RegExp("^image:\\/\\/"), ""), a = "image", r += Math.round((s - o) / 2), s = o), a = e("zrender/shape").get("icon").get(a), a && a(t, {
                x: r + 3,
                y: i + 3,
                width: s - 6,
                height: o - 6,
                n: u,
                image: f
            })
        }

        return e("../util/shape/halfSmoothPolygon"), e("../chart").define("line", t), t
    }), r("echarts/chart/bar", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/color", "../chart"], function (e) {
        function t(t, n, r, i) {
            function d() {
                l.selectedMap = {};
                var e = {top: [], bottom: [], left: [], right: []}, t, r, s, o;
                for (var a = 0, f = c.length; a < f; a++) c[a].type == u.CHART_TYPE_BAR && (c[a] = l.reformOption(c[a]), t = c[a].xAxisIndex, r = c[a].yAxisIndex, s = i.xAxis.getAxis(t), o = i.yAxis.getAxis(r), s.type == u.COMPONENT_TYPE_AXIS_CATEGORY ? e[s.getPosition()].push(a) : o.type == u.COMPONENT_TYPE_AXIS_CATEGORY && e[o.getPosition()].push(a));
                for (var h in e) e[h].length > 0 && v(h, e[h]);
                for (var a = 0, f = l.shapeList.length; a < f; a++) l.shapeList[a].id = n.newShapeId(l.type), n.addShape(l.shapeList[a])
            }

            function v(e, t) {
                var n = m(t), r = n.locationMap, i = n.maxDataLength;
                if (i === 0 || r.length === 0) return;
                switch (e) {
                    case"bottom":
                    case"top":
                        g(i, r);
                        break;
                    case"left":
                    case"right":
                        y(i, r)
                }
            }

            function m(e) {
                var t, r = 0, s = {}, o = "__kener__stack__", u, a, f = i.legend, h = [], d = 0, v;
                for (var m = 0, g = e.length; m < g; m++) t = c[e[m]], a = t.name, f ? (l.selectedMap[a] = f.isSelected(a), p[e[m]] = f.getColor(a), v = f.getItemShape(a), v && (v.style.strokeColor = t.itemStyle.normal.borderColor, v.style.brushType = "both", f.setItemShape(a, v))) : (l.selectedMap[a] = !0, p[e[m]] = n.getColor(e[m])), l.selectedMap[a] && (u = t.stack || o + e[m], typeof s[u] == "undefined" ? (s[u] = r, h[r] = [e[m]], r++) : h[s[u]].push(e[m])), d = Math.max(d, t.data.length);
                return {locationMap: h, maxDataLength: d}
            }

            function g(e, t) {
                var n = t[0][0], s = c[n], o = s.xAxisIndex, a = i.xAxis.getAxis(o), f, h, p = b(a, t), d = p.gap,
                    v = p.barGap, m = p.barWidthMap, g = p.barWidth, y = p.barMinHeightMap, E, S, x, T, N, C, k, L, A,
                    O;
                for (var M = 0, _ = e; M < _; M++) {
                    if (typeof a.getNameByIndex(M) == "undefined") break;
                    S = a.getCoordByIndex(M) - d / 2;
                    for (var D = 0, P = t.length; D < P; D++) {
                        f = c[t[D][0]].yAxisIndex || 0, h = i.yAxis.getAxis(f), N = T = h.getCoord(0) - 1, k = C = T + 2;
                        for (var H = 0, B = t[D].length; H < B; H++) {
                            n = t[D][H], s = c[n], A = s.data[M], O = typeof A != "undefined" ? typeof A.value != "undefined" ? A.value : A : "-";
                            if (O == "-") continue;
                            x = h.getCoord(O), O > 0 ? (E = N - x, B == 1 && y[n] > E && (E = y[n]), T -= E, x = T) : O < 0 ? (E = x - k, B == 1 && y[n] > E && (E = y[n]), x = C, C += E) : (E = N - x, T -= E, x = T), L = w(n, M, a.getNameByIndex(M), S, x, m[n] || g, E, "vertical"), l.shapeList.push(L)
                        }
                        for (var H = 0, B = t[D].length; H < B; H++) {
                            n = t[D][H], s = c[n], A = s.data[M], O = typeof A != "undefined" ? typeof A.value != "undefined" ? A.value : A : "-";
                            if (O != "-") continue;
                            l.deepQuery([A, s, r], "calculable") && (T -= u.island.r, x = T, L = w(n, M, a.getNameByIndex(M), S + 1, x, (m[n] || g) - 2, u.island.r, "vertical"), L.hoverable = !1, L.draggable = !1, L.style.brushType = "stroke", L.style.strokeColor = s.calculableHolderColor || u.calculableHolderColor, l.shapeList.push(L))
                        }
                        S += (m[n] || g) + v
                    }
                }
            }

            function y(e, t) {
                var n = t[0][0], s = c[n], o = s.yAxisIndex, a = i.yAxis.getAxis(o), f, h, p = b(a, t), d = p.gap,
                    v = p.barGap, m = p.barWidthMap, g = p.barWidth, y = p.barMinHeightMap, E, S, x, T, N, C, k, L, A,
                    O;
                for (var M = 0, _ = e; M < _; M++) {
                    if (typeof a.getNameByIndex(M) == "undefined") break;
                    x = a.getCoordByIndex(M) + d / 2;
                    for (var D = 0, P = t.length; D < P; D++) {
                        f = c[t[D][0]].xAxisIndex || 0, h = i.xAxis.getAxis(f), N = T = h.getCoord(0) + 1, k = C = T - 2;
                        for (var H = 0, B = t[D].length; H < B; H++) {
                            n = t[D][H], s = c[n], A = s.data[M], O = typeof A != "undefined" ? typeof A.value != "undefined" ? A.value : A : "-";
                            if (O == "-") continue;
                            S = h.getCoord(O), O > 0 ? (E = S - N, B == 1 && y[n] > E && (E = y[n]), S = T, T += E) : O < 0 ? (E = k - S, B == 1 && y[n] > E && (E = y[n]), C -= E, S = C) : (E = S - N, S = T, T += E), L = w(n, M, a.getNameByIndex(M), S, x - (m[n] || g), E, m[n] || g, "horizontal"), l.shapeList.push(L)
                        }
                        for (var H = 0, B = t[D].length; H < B; H++) {
                            n = t[D][H], s = c[n], A = s.data[M], O = typeof A != "undefined" ? typeof A.value != "undefined" ? A.value : A : "-";
                            if (O != "-") continue;
                            l.deepQuery([A, s, r], "calculable") && (S = T, T += u.island.r, L = w(n, M, a.getNameByIndex(M), S, x + 1 - (m[n] || g), u.island.r, (m[n] || g) - 2, "horizontal"), L.hoverable = !1, L.draggable = !1, L.style.brushType = "stroke", L.style.strokeColor = s.calculableHolderColor || u.calculableHolderColor, l.shapeList.push(L))
                        }
                        x -= (m[n] || g) + v
                    }
                }
            }

            function b(e, t, n) {
                var r = {}, i = {}, s, o = 0, u = 0, a, f, h, p;
                for (var d = 0, v = t.length; d < v; d++) {
                    h = !1;
                    for (var m = 0, g = t[d].length; m < g; m++) seriesIndex = t[d][m], p = c[seriesIndex], n || (h ? r[seriesIndex] = s : (s = l.query(p, "barWidth"), typeof s != "undefined" && (r[seriesIndex] = s, u += s, o++, h = !0))), i[seriesIndex] = l.query(p, "barMinHeight"), a = typeof a != "undefined" ? a : l.query(p, "barGap"), f = typeof f != "undefined" ? f : l.query(p, "barCategoryGap")
                }
                var y, w;
                if (t.length != o) if (!n) {
                    y = typeof f == "string" && f.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(f)) / 100) : e.getGap() - f, typeof a == "string" && a.match(/%$/) ? (a = parseFloat(a) / 100, w = Math.floor((y - u) / ((t.length - 1) * a + t.length - o)), a = Math.floor(w * a)) : (a = parseFloat(a), w = Math.floor((y - u - a * (t.length - 1)) / (t.length - o)));
                    if (w < 0) return b(e, t, !0)
                } else y = e.getGap(), a = 0, w = Math.floor(y / t.length), w < 0 && (w = 1); else {
                    y = o > 1 ? typeof f == "string" && f.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(f)) / 100) : e.getGap() - f : u, w = 0, a = o > 1 ? Math.floor((y - u) / (o - 1)) : 0;
                    if (a < 0) return b(e, t, !0)
                }
                return {barWidthMap: r, barMinHeightMap: i, gap: y, barWidth: w, barGap: a}
            }

            function w(e, t, n, i, s, o, u, d) {
                var v, m = c[e], g = m.data[t], y = p[e], b = [g, m], w = l.deepQuery(b, "itemStyle.normal.color") || y,
                    E = l.deepQuery(b, "itemStyle.emphasis.color"), S = l.deepMerge(b, "itemStyle.normal"),
                    x = S.borderWidth, T = l.deepMerge(b, "itemStyle.emphasis");
                return v = {
                    shape: "rectangle",
                    zlevel: h,
                    clickable: !0,
                    style: {
                        x: i,
                        y: s,
                        width: o,
                        height: u,
                        brushType: "both",
                        color: w,
                        radius: S.borderRadius,
                        lineWidth: x,
                        strokeColor: S.borderColor
                    },
                    highlightStyle: {
                        color: E || (typeof w == "string" ? f.lift(w, -0.2) : w),
                        radius: T.borderRadius,
                        lineWidth: T.borderWidth,
                        strokeColor: T.borderColor
                    },
                    _orient: d
                }, v.style.height > x && v.style.width > x ? (v.style.y += x / 2, v.style.height -= x, v.style.x += x / 2, v.style.width -= x) : v.style.brushType = "fill", v.highlightStyle.textColor = v.highlightStyle.color, v = l.addLabel(v, m, g, n, d), l.deepQuery([g, m, r], "calculable") && (l.setCalculable(v), v.draggable = !0), a.pack(v, c[e], e, c[e].data[t], t, n), v
            }

            function E(e, t) {
                i = t, S(e)
            }

            function S(e) {
                e && (r = e, c = r.series), l.clear(), d()
            }

            function x(e) {
                var t = {};
                for (var r = 0, s = e.length; r < s; r++) t[e[r][0]] = e[r];
                var o, u, f, h, p, d, v;
                for (var r = l.shapeList.length - 1; r >= 0; r--) {
                    d = a.get(l.shapeList[r], "seriesIndex");
                    if (t[d] && !t[d][3] && l.shapeList[r].shape == "rectangle") {
                        v = a.get(l.shapeList[r], "dataIndex"), p = c[d];
                        if (t[d][2] && v == p.data.length - 1) {
                            n.delShape(l.shapeList[r].id);
                            continue
                        }
                        if (!t[d][2] && v === 0) {
                            n.delShape(l.shapeList[r].id);
                            continue
                        }
                        l.shapeList[r]._orient == "horizontal" ? (h = i.yAxis.getAxis(p.yAxisIndex || 0).getGap(), f = t[d][2] ? -h : h, o = 0) : (u = i.xAxis.getAxis(p.xAxisIndex || 0).getGap(), o = t[d][2] ? u : -u, f = 0), n.animate(l.shapeList[r].id, "").when(500, {position: [o, f]}).start()
                    }
                }
            }

            function T() {
                var e, t, i, s, o, u, f, c, h;
                for (var p = 0, d = l.shapeList.length; p < d; p++) l.shapeList[p].shape == "rectangle" && (f = a.get(l.shapeList[p], "series"), c = a.get(l.shapeList[p], "dataIndex"), h = a.get(l.shapeList[p], "value"), e = l.deepQuery([f, r], "animationDuration"), t = l.deepQuery([f, r], "animationEasing"), l.shapeList[p]._orient == "horizontal" ? (i = l.shapeList[p].style.width, o = l.shapeList[p].style.x, h < 0 ? (n.modShape(l.shapeList[p].id, {
                    style: {
                        x: o + i,
                        width: 0
                    }
                }, !0), n.animate(l.shapeList[p].id, "style").when(e + c * 100, {
                    x: o,
                    width: i
                }).start(t)) : (n.modShape(l.shapeList[p].id, {style: {width: 0}}, !0), n.animate(l.shapeList[p].id, "style").when(e + c * 100, {width: i}).start(t))) : (s = l.shapeList[p].style.height, u = l.shapeList[p].style.y, h < 0 ? (n.modShape(l.shapeList[p].id, {style: {height: 0}}, !0), n.animate(l.shapeList[p].id, "style").when(e + c * 100, {height: s}).start(t)) : (n.modShape(l.shapeList[p].id, {
                    style: {
                        y: u + s,
                        height: 0
                    }
                }, !0), n.animate(l.shapeList[p].id, "style").when(e + c * 100, {y: u, height: s}).start(t))))
            }

            var s = e("../component/base");
            s.call(this, n);
            var o = e("./calculableBase");
            o.call(this, n, r);
            var u = e("../config"), a = e("../util/ecData"), f = e("zrender/tool/color"), l = this;
            l.type = u.CHART_TYPE_BAR;
            var c, h = l.getZlevelBase(), p = {};
            l.init = E, l.refresh = S, l.addDataAnimation = x, l.animation = T, E(r, i)
        }

        return e("../chart").define("bar", t), t
    }), r("echarts/chart/pie", ["require", "../component/base", "./calculableBase", "../config", "../util/ecData", "zrender/tool/math", "zrender/tool/util", "zrender/tool/color", "../util/accMath", "../chart"], function (e) {
        function t(t, n, r, i) {
            function g() {
                h.selectedMap = {}, m = {};
                var e, t, i;
                v = !1;
                for (var s = 0, o = p.length; s < o; s++) p[s].type == u.CHART_TYPE_PIE && (p[s] = h.reformOption(p[s]), e = h.parseCenter(p[s].center), t = h.parseRadius(p[s].radius), v = v || p[s].selectedMode, m[s] = [], h.deepQuery([p[s], r], "calculable") && (i = {
                    shape: t[0] <= 10 ? "circle" : "ring",
                    zlevel: d,
                    hoverable: !1,
                    style: {
                        x: e[0],
                        y: e[1],
                        r0: t[0] <= 10 ? 0 : t[0] - 10,
                        r: t[1] + 10,
                        brushType: "stroke",
                        strokeColor: p[s].calculableHolderColor || u.calculableHolderColor
                    }
                }, a.pack(i, p[s], s, undefined, -1), h.setCalculable(i), h.shapeList.push(i)), y(s));
                for (var s = 0, o = h.shapeList.length; s < o; s++) h.shapeList[s].id = n.newShapeId(h.type), n.addShape(h.shapeList[s])
            }

            function y(e) {
                var t = p[e], r = t.data, s = i.legend, o, u = 0, a = 0, f = Number.NEGATIVE_INFINITY;
                for (var l = 0, c = r.length; l < c; l++) o = r[l].name, s ? h.selectedMap[o] = s.isSelected(o) : h.selectedMap[o] = !0, h.selectedMap[o] && (u++, a += +r[l].value, f = Math.max(f, +r[l].value));
                var d, v = t.startAngle.toFixed(2) - 0, m, g = t.minAngle || .01, y = 360 - g * u, w, E = t.roseType, S,
                    x, T;
                for (var l = 0, c = r.length; l < c; l++) {
                    o = r[l].name;
                    if (!h.selectedMap[o]) continue;
                    s ? w = s.getColor(o) : w = n.getColor(l), d = r[l].value / a, E != "area" ? m = (d * y + v + g).toFixed(2) - 0 : m = (y / c + v + g).toFixed(2) - 0, d = (d * 100).toFixed(2), S = h.parseRadius(t.radius), x = +S[0], T = +S[1], E == "radius" ? T = r[l].value / f * (T - x) * .8 + (T - x) * .2 + x : E == "area" && (T = Math.sqrt(r[l].value / f) * (T - x) + x), b(e, l, d, r[l].selected, x, T, v, m, w), v = m
                }
            }

            function b(e, t, n, r, i, s, o, u, f) {
                var l = w(e, t, n, r, i, s, o, u, f);
                a.pack(l, p[e], e, p[e].data[t], t, p[e].data[t].name, n), h.shapeList.push(l);
                var c = E(e, t, n, o, u, f, !1);
                c && (c._dataIndex = t, h.shapeList.push(c));
                var d = x(e, t, i, s, o, u, f, !1);
                d && (d._dataIndex = t, h.shapeList.push(d))
            }

            function w(e, t, n, i, s, o, u, a, l) {
                var g = p[e], y = g.data[t], b = h.parseCenter(g.center),
                    w = h.deepQuery([y, g], "itemStyle.normal.color") || l,
                    E = h.deepQuery([y, g], "itemStyle.emphasis.color"), x = {
                        shape: "sector",
                        zlevel: d,
                        clickable: !0,
                        style: {
                            x: b[0],
                            y: b[1],
                            r0: s,
                            r: o,
                            startAngle: u,
                            endAngle: a,
                            brushType: "both",
                            color: w,
                            strokeColor: "#fff",
                            lineWidth: 1
                        },
                        highlightStyle: {
                            color: E || (typeof w == "string" ? c.lift(w, -0.2) : w),
                            strokeColor: "rgba(0,0,0,0)"
                        },
                        _seriesIndex: e,
                        _dataIndex: t
                    };
                if (i) {
                    var C = ((x.style.startAngle + x.style.endAngle) / 2).toFixed(2) - 0;
                    x.style._hasSelected = !0, x.style._x = x.style.x, x.style._y = x.style.y;
                    var k = h.deepQuery([g], "selectedOffset");
                    x.style.x += f.cos(C, !0) * k, x.style.y -= f.sin(C, !0) * k, m[e][t] = !0
                } else m[e][t] = !1;
                v && (x.onclick = h.shapeHandler.onclick), h.deepQuery([y, g, r], "calculable") && (h.setCalculable(x), x.draggable = !0), T(g, y, !1) && h.deepQuery([y, g], "itemStyle.normal.label.position") == "inner" && (x.style.text = S(e, t, n, "normal"), x.style.textPosition = "specific", x.style.textColor = h.deepQuery([y, g], "itemStyle.normal.label.textStyle.color") || "#fff", x.style.textAlign = h.deepQuery([y, g], "itemStyle.normal.label.textStyle.align") || "center", x.style.textBaseLine = h.deepQuery([y, g], "itemStyle.normal.label.textStyle.baseline") || "middle", x.style.textX = Math.round(b[0] + (o + s) / 2 * f.cos((u + a) / 2, !0)), x.style.textY = Math.round(b[1] - (o + s) / 2 * f.sin((u + a) / 2, !0)), x.style.textFont = h.getFont(h.deepQuery([y, g], "itemStyle.normal.label.textStyle"))), T(g, y, !0) && h.deepQuery([y, g], "itemStyle.emphasis.label.position") == "inner" && (x.highlightStyle.text = S(e, t, n, "emphasis"), x.highlightStyle.textPosition = "specific", x.highlightStyle.textColor = h.deepQuery([y, g], "itemStyle.emphasis.label.textStyle.color") || "#fff", x.highlightStyle.textAlign = h.deepQuery([y, g], "itemStyle.emphasis.label.textStyle.align") || "center", x.highlightStyle.textBaseLine = h.deepQuery([y, g], "itemStyle.normal.label.textStyle.baseline") || "middle", x.highlightStyle.textX = Math.round(b[0] + (o + s) / 2 * f.cos((u + a) / 2, !0)), x.highlightStyle.textY = Math.round(b[1] - (o + s) / 2 * f.sin((u + a) / 2, !0)), x.highlightStyle.textFont = h.getFont(h.deepQuery([y, g], "itemStyle.emphasis.label.textStyle")));
                if (T(g, y, !0) || N(g, y, !0)) x.onmouseover = h.shapeHandler.onmouserover;
                return x
            }

            function E(e, t, n, r, i, s, o) {
                var u = p[e], a = u.data[t];
                if (T(u, a, o)) {
                    var c = o ? "emphasis" : "normal",
                        v = l.merge(l.clone(a.itemStyle) || {}, u.itemStyle, {overwrite: !1, recursive: !0}),
                        m = v[c].label, g = m.textStyle || {}, y = h.parseCenter(u.center), b = y[0], w = y[1],
                        E = (i + r) / 2 % 360, x = h.parseRadius(u.radius), N;
                    if (m.position == "outer") return x = x[1] - -v[c].labelLine.length - -g.fontSize, N = E >= 150 && E <= 210 ? "right" : E <= 30 || E >= 330 ? "left" : "center", {
                        shape: "text",
                        zlevel: d + 1,
                        hoverable: !1,
                        style: {
                            x: b + x * f.cos(E, !0),
                            y: w - x * f.sin(E, !0),
                            color: g.color || s,
                            text: S(e, t, n, c),
                            textAlign: g.align || N,
                            textBaseline: g.baseline || "middle",
                            textFont: h.getFont(g)
                        },
                        highlightStyle: {brushType: "fill"},
                        _seriesIndex: e,
                        _dataIndex: t
                    };
                    if (m.position == "center") return {
                        shape: "text",
                        zlevel: d + 1,
                        hoverable: !1,
                        style: {
                            x: b,
                            y: w,
                            color: g.color || s,
                            text: S(e, t, n, c),
                            textAlign: g.align || "center",
                            textBaseline: g.baseline || "middle",
                            textFont: h.getFont(g)
                        },
                        highlightStyle: {brushType: "fill"},
                        _seriesIndex: e,
                        _dataIndex: t
                    };
                    return
                }
                return
            }

            function S(e, t, n, r) {
                var i = p[e], s = i.data[t], o = h.deepQuery([s, i], "itemStyle." + r + ".label.formatter");
                if (!o) return s.name;
                if (typeof o == "function") return o(i.name, s.name, s.value, n);
                if (typeof o == "string") return o = o.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}"), o = o.replace("{a0}", i.name).replace("{b0}", s.name).replace("{c0}", s.value).replace("{d0}", n), o
            }

            function x(e, t, n, r, i, s, o, u) {
                var a = p[e], c = a.data[t];
                if (N(a, c, u)) {
                    var v = u ? "emphasis" : "normal",
                        m = l.merge(l.clone(c.itemStyle) || {}, a.itemStyle, {overwrite: !1, recursive: !0}),
                        g = m[v].labelLine, y = g.lineStyle || {}, b = h.parseCenter(a.center), w = b[0], E = b[1],
                        S = r, x = h.parseRadius(a.radius)[1] - -g.length, T = (s + i) / 2 % 360, C = f.cos(T, !0),
                        k = f.sin(T, !0);
                    return {
                        shape: "line",
                        zlevel: d + 1,
                        hoverable: !1,
                        style: {
                            xStart: w + S * C,
                            yStart: E - S * k,
                            xEnd: w + x * C,
                            yEnd: E - x * k,
                            strokeColor: y.color || o,
                            lineType: y.type,
                            lineWidth: y.width
                        },
                        _seriesIndex: e,
                        _dataIndex: t
                    }
                }
                return
            }

            function T(e, t, n) {
                return h.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".label.show")
            }

            function N(e, t, n) {
                return h.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".labelLine.show")
            }

            function C(e) {
                var t = l.merge;
                return e = t(e || {}, u.pie, {
                    overwrite: !1,
                    recursive: !0
                }), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, u.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), e.itemStyle.emphasis.label.textStyle = t(e.itemStyle.emphasis.label.textStyle || {}, u.textStyle, {
                    overwrite: !1,
                    recursive: !0
                }), e
            }

            function k(e, t) {
                i = t, L(e)
            }

            function L(e) {
                e && (r = e, p = r.series), h.clear(), g()
            }

            function A(e) {
                var t = {};
                for (var r = 0, i = e.length; r < i; r++) t[e[r][0]] = e[r];
                var s = {}, o = {}, a = {}, f = l.clone(h.shapeList);
                h.shapeList = [];
                var c, d, v, m = {};
                for (var r = 0, i = e.length; r < i; r++) c = e[r][0], d = e[r][2], v = e[r][3], p[c] && p[c].type == u.CHART_TYPE_PIE && (d ? (v || (s[c + "_" + p[c].data.length] = "delete"), m[c] = 1) : v ? m[c] = 0 : (s[c + "_-1"] = "delete", m[c] = -1), y(c));
                var g, b;
                for (var r = 0, i = h.shapeList.length; r < i; r++) {
                    c = h.shapeList[r]._seriesIndex, g = h.shapeList[r]._dataIndex, b = c + "_" + g;
                    switch (h.shapeList[r].shape) {
                        case"sector":
                            s[b] = h.shapeList[r];
                            break;
                        case"text":
                            o[b] = h.shapeList[r];
                            break;
                        case"line":
                            a[b] = h.shapeList[r]
                    }
                }
                h.shapeList = [];
                var w;
                for (var r = 0, i = f.length; r < i; r++) {
                    c = f[r]._seriesIndex;
                    if (t[c]) {
                        g = f[r]._dataIndex + m[c], b = c + "_" + g, w = s[b];
                        if (!w) continue;
                        if (f[r].shape == "sector") w != "delete" ? n.animate(f[r].id, "style").when(400, {
                            startAngle: w.style.startAngle,
                            endAngle: w.style.endAngle
                        }).start() : n.animate(f[r].id, "style").when(400, m[c] < 0 ? {endAngle: f[r].style.startAngle} : {startAngle: f[r].style.endAngle}).start(); else if (f[r].shape == "text" || f[r].shape == "line") if (w == "delete") n.delShape(f[r].id); else switch (f[r].shape) {
                            case"text":
                                w = o[b], n.animate(f[r].id, "style").when(400, {x: w.style.x, y: w.style.y}).start();
                                break;
                            case"line":
                                w = a[b], n.animate(f[r].id, "style").when(400, {
                                    xStart: w.style.xStart,
                                    yStart: w.style.yStart,
                                    xEnd: w.style.xEnd,
                                    yEnd: w.style.yEnd
                                }).start()
                        }
                    }
                }
                h.shapeList = f
            }

            function O() {
                var e = h.deepQuery([r], "animationDuration"), t = h.deepQuery([r], "animationEasing"), i, s, o, u, f,
                    l;
                for (var c = 0, p = h.shapeList.length; c < p; c++) h.shapeList[c].shape == "sector" || h.shapeList[c].shape == "circle" || h.shapeList[c].shape == "ring" ? (i = h.shapeList[c].style.x, s = h.shapeList[c].style.y, o = h.shapeList[c].style.r0, u = h.shapeList[c].style.r, n.modShape(h.shapeList[c].id, {
                    rotation: [Math.PI * 2, i, s],
                    style: {r0: 0, r: 0}
                }, !0), f = a.get(h.shapeList[c], "series"), l = a.get(h.shapeList[c], "dataIndex"), n.animate(h.shapeList[c].id, "style").when((h.deepQuery([f], "animationDuration") || e) + l * 10, {
                    r0: o,
                    r: u
                }).start("QuinticOut"), n.animate(h.shapeList[c].id, "").when((h.deepQuery([f], "animationDuration") || e) + l * 100, {rotation: [0, i, s]}).start(h.deepQuery([f], "animationEasing") || t)) : (l = h.shapeList[c]._dataIndex, n.modShape(h.shapeList[c].id, {scale: [0, 0, i, s]}, !0), n.animate(h.shapeList[c].id, "").when(e + l * 100, {scale: [1, 1, i, s]}).start("QuinticOut"))
            }

            function M(e) {
                if (!h.isClick || !e.target) return;
                var r, i = e.target, s = i.style, o = a.get(i, "seriesIndex"), l = a.get(i, "dataIndex");
                for (var c = 0, d = h.shapeList.length; c < d; c++) if (h.shapeList[c].id == i.id) {
                    o = a.get(i, "seriesIndex"), l = a.get(i, "dataIndex");
                    if (!s._hasSelected) {
                        var g = ((s.startAngle + s.endAngle) / 2).toFixed(2) - 0;
                        i.style._hasSelected = !0, m[o][l] = !0, i.style._x = i.style.x, i.style._y = i.style.y, r = h.deepQuery([p[o]], "selectedOffset"), i.style.x += f.cos(g, !0) * r, i.style.y -= f.sin(g, !0) * r
                    } else i.style.x = i.style._x, i.style.y = i.style._y, i.style._hasSelected = !1, m[o][l] = !1;
                    n.modShape(i.id, i)
                } else h.shapeList[c].style._hasSelected && v == "single" && (o = a.get(h.shapeList[c], "seriesIndex"), l = a.get(h.shapeList[c], "dataIndex"), h.shapeList[c].style.x = h.shapeList[c].style._x, h.shapeList[c].style.y = h.shapeList[c].style._y, h.shapeList[c].style._hasSelected = !1, m[o][l] = !1, n.modShape(h.shapeList[c].id, h.shapeList[c]));
                t.dispatch(u.EVENT.PIE_SELECTED, e.event, {selected: m}), n.refresh()
            }

            function _(t, n) {
                if (!h.isDrop || !t.target) return;
                var s = t.target, o = t.dragged, u = a.get(s, "seriesIndex"), f = a.get(s, "dataIndex"), l,
                    c = i.legend;
                if (f == -1) l = {
                    value: a.get(o, "value"),
                    name: a.get(o, "name")
                }, l.value < 0 && (l.value = 0), p[u].data.push(l), c && c.add(l.name, o.style.color || o.style.strokeColor); else {
                    var d = e("../util/accMath");
                    l = p[u].data[f], c && c.del(l.name), l.name += r.nameConnector + a.get(o, "name"), l.value = d.accAdd(l.value, a.get(o, "value")), c && c.add(l.name, o.style.color || o.style.strokeColor)
                }
                n.dragIn = n.dragIn || !0, h.isDrop = !1;
                return
            }

            function D(e, t) {
                if (!h.isDragend || !e.target) return;
                var n = e.target, r = a.get(n, "seriesIndex"), s = a.get(n, "dataIndex");
                i.legend && i.legend.del(p[r].data[s].name), p[r].data.splice(s, 1), t.dragOut = !0, t.needRefresh = !0, h.isDragend = !1;
                return
            }

            var s = e("../component/base");
            s.call(this, n);
            var o = e("./calculableBase");
            o.call(this, n, r);
            var u = e("../config"), a = e("../util/ecData"), f = e("zrender/tool/math"), l = e("zrender/tool/util"),
                c = e("zrender/tool/color"), h = this;
            h.type = u.CHART_TYPE_PIE;
            var p, d = h.getZlevelBase(), v, m = {};
            h.shapeHandler.onmouserover = function (e) {
                var t = e.target, r = a.get(t, "seriesIndex"), i = a.get(t, "dataIndex"), s = a.get(t, "special"),
                    o = t.style.startAngle, u = t.style.endAngle, f = t.highlightStyle.color,
                    l = E(r, i, s, o, u, f, !0);
                l && n.addHoverShape(l);
                var c = x(r, i, t.style.r0, t.style.r, o, u, f, !0);
                c && n.addHoverShape(c)
            }, h.reformOption = C, h.init = k, h.refresh = L, h.addDataAnimation = A, h.animation = O, h.onclick = M, h.ondrop = _, h.ondragend = D, k(r, i)
        }

        return e("../chart").define("pie", t), t
    }), r("_chart", ["require", "echarts/chart/scatter", "echarts/chart/k", "echarts/chart/radar", "echarts/chart/chord", "echarts/chart/force", "echarts/chart/line", "echarts/chart/bar", "echarts/chart/pie"], function (e) {
        e("echarts/chart/scatter"), e("echarts/chart/k"), e("echarts/chart/radar"), e("echarts/chart/chord"), e("echarts/chart/force"), e("echarts/chart/line"), e("echarts/chart/bar"), e("echarts/chart/pie")
    });
    var i = n("zrender");
    i.tool = {
        color: n("zrender/tool/color"),
        math: n("zrender/tool/math"),
        util: n("zrender/tool/util"),
        vector: n("zrender/tool/vector"),
        area: n("zrender/tool/area"),
        event: n("zrender/tool/event")
    }, i.animation = {
        Animation: n("zrender/animation/animation"),
        Cip: n("zrender/animation/clip"),
        easing: n("zrender/animation/easing")
    };
    var s = n("echarts");
    s.config = n("echarts/config"), s.util = {mapData: {params: n("echarts/util/mapData/params")}};
    var o = n("_chart");
    e.echarts = s, e.zrender = i
})(window);