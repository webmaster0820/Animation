! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    t.exports = n(70)
}, function(t, e, n) {
    ! function(e, n) {
        t.exports = n()
    }(this, function() {
        return function(t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            t.exports = n(78)
        }, function(t, e) {
            "use strict";
            e.__esModule = !0, e.default = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            e.__esModule = !0;
            var i = n(108),
                o = r(i);
            e.default = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }()
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(8),
                l = r(s),
                f = n(104),
                c = r(f),
                h = n(103),
                d = r(h),
                p = n(105),
                _ = r(p),
                v = n(106),
                m = r(v),
                x = n(58),
                g = (r(x), n(98)),
                b = r(g),
                M = void 0,
                y = function() {
                    function t() {
                        (0, o.default)(this, t), this.canvas, this._viewport = [0, 0, 0, 0], this._enabledVertexAttribute = [], this.identityMatrix = l.default.mat4.create(), this._normalMatrix = l.default.mat3.create(), this._inverseModelViewMatrix = l.default.mat3.create(), this._modelMatrix = l.default.mat4.create(), this._matrix = l.default.mat4.create(), this._lastMesh = null, this._useWebGL2 = !1, this._hasArrayInstance, this._extArrayInstance, this._hasCheckedExt = !1, l.default.mat4.identity(this.identityMatrix, this.identityMatrix), this.isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.isMobile = !0)
                    }
                    return (0, u.default)(t, [{
                        key: "init",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            if (null !== t && void 0 !== t) {
                                void 0 !== this.canvas && null !== this.canvas && this.destroy(), this.canvas = t, this.setSize(window.innerWidth, window.innerHeight);
                                var n = void 0;
                                e.ignoreWebgl2 ? n = this.canvas.getContext("webgl", e) || this.canvas.getContext("experimental-webgl", e) : (n = this.canvas.getContext("experimental-webgl2", e) || this.canvas.getContext("webgl2", e), n ? this._useWebGL2 = !0 : n = this.canvas.getContext("webgl", e) || this.canvas.getContext("experimental-webgl", e)), this.initWithGL(n)
                            }
                        }
                    }, {
                        key: "initWithGL",
                        value: function(t) {
                            this.canvas || (this.canvas = t.canvas), M = this.gl = t, this.extensions = {};
                            for (var e = 0; e < b.default.length; e++) this.extensions[b.default[e]] = M.getExtension(b.default[e]);
                            (0, d.default)(), (0, c.default)(M, "OES_vertex_array_object"), (0, c.default)(M, "ANGLE_instanced_arrays"), (0, c.default)(M, "WEBGL_draw_buffers"), this.enable(this.DEPTH_TEST), this.enable(this.CULL_FACE), this.enable(this.BLEND), this.enableAlphaBlending()
                        }
                    }, {
                        key: "setViewport",
                        value: function(t, e, n, r) {
                            var i = !1;
                            t !== this._viewport[0] && (i = !0), e !== this._viewport[1] && (i = !0), n !== this._viewport[2] && (i = !0), r !== this._viewport[3] && (i = !0), i && (M.viewport(t, e, n, r), this._viewport = [t, e, n, r])
                        }
                    }, {
                        key: "scissor",
                        value: function(t, e, n, r) {
                            M.scissor(t, e, n, r)
                        }
                    }, {
                        key: "clear",
                        value: function(t, e, n, r) {
                            M.clearColor(t, e, n, r), M.clear(M.COLOR_BUFFER_BIT | M.DEPTH_BUFFER_BIT)
                        }
                    }, {
                        key: "setMatrices",
                        value: function(t) {
                            this.camera = t, this.rotate(this.identityMatrix)
                        }
                    }, {
                        key: "useShader",
                        value: function(t) {
                            this.shader = t, this.shaderProgram = this.shader.shaderProgram
                        }
                    }, {
                        key: "rotate",
                        value: function(t) {
                            l.default.mat4.copy(this._modelMatrix, t), l.default.mat4.multiply(this._matrix, this.camera.matrix, this._modelMatrix), l.default.mat3.fromMat4(this._normalMatrix, this._matrix), l.default.mat3.invert(this._normalMatrix, this._normalMatrix), l.default.mat3.transpose(this._normalMatrix, this._normalMatrix), l.default.mat3.fromMat4(this._inverseModelViewMatrix, this._matrix), l.default.mat3.invert(this._inverseModelViewMatrix, this._inverseModelViewMatrix)
                        }
                    }, {
                        key: "draw",
                        value: function(t, e) {
                            if (t.length)
                                for (var n = 0; n < t.length; n++) this.draw(t[n]);
                            else {
                                t.bind(this.shaderProgram), void 0 !== this.camera && (this.shader.uniform("uProjectionMatrix", "mat4", this.camera.projection), this.shader.uniform("uViewMatrix", "mat4", this.camera.matrix)), this.shader.uniform("uModelMatrix", "mat4", this._modelMatrix), this.shader.uniform("uNormalMatrix", "mat3", this._normalMatrix), this.shader.uniform("uModelViewMatrixInverse", "mat3", this._inverseModelViewMatrix);
                                var r = t.drawType;
                                void 0 !== e && (r = e), t.isInstanced ? M.drawElementsInstanced(t.drawType, t.iBuffer.numItems, M.UNSIGNED_SHORT, 0, t.numInstance) : r === M.POINTS ? M.drawArrays(r, 0, t.vertexSize) : M.drawElements(r, t.iBuffer.numItems, M.UNSIGNED_SHORT, 0), t.unbind()
                            }
                        }
                    }, {
                        key: "drawTransformFeedback",
                        value: function(t) {
                            var e = t.meshSource,
                                n = t.meshDestination,
                                r = t.numPoints,
                                i = t.transformFeedback;
                            e.bind(this.shaderProgram), n.generateBuffers(this.shaderProgram), M.bindTransformFeedback(M.TRANSFORM_FEEDBACK, i), n.attributes.forEach(function(t, e) {
                                M.bindBufferBase(M.TRANSFORM_FEEDBACK_BUFFER, e, t.buffer)
                            }), M.enable(M.RASTERIZER_DISCARD), M.beginTransformFeedback(M.POINTS), M.drawArrays(M.POINTS, 0, r), M.endTransformFeedback(), M.disable(M.RASTERIZER_DISCARD), M.useProgram(null), M.bindBuffer(M.ARRAY_BUFFER, null), n.attributes.forEach(function(t, e) {
                                M.bindBufferBase(M.TRANSFORM_FEEDBACK_BUFFER, e, null)
                            }), M.bindTransformFeedback(M.TRANSFORM_FEEDBACK, null), e.unbind()
                        }
                    }, {
                        key: "setSize",
                        value: function(t, e) {
                            this._width = t, this._height = e, this.canvas.width = this._width, this.canvas.height = this._height, this._aspectRatio = this._width / this._height, M && this.viewport(0, 0, this._width, this._height)
                        }
                    }, {
                        key: "showExtensions",
                        value: function() {
                            for (var t in this.extensions) this.extensions[t] && void 0
                        }
                    }, {
                        key: "checkExtension",
                        value: function(t) {
                            return !!this.extensions[t]
                        }
                    }, {
                        key: "getExtension",
                        value: function(t) {
                            return this.extensions[t]
                        }
                    }, {
                        key: "enableAlphaBlending",
                        value: function() {
                            M.blendFunc(M.SRC_ALPHA, M.ONE_MINUS_SRC_ALPHA)
                        }
                    }, {
                        key: "enableAdditiveBlending",
                        value: function() {
                            M.blendFunc(M.ONE, M.ONE)
                        }
                    }, {
                        key: "enable",
                        value: function(t) {
                            M.enable(t)
                        }
                    }, {
                        key: "disable",
                        value: function(t) {
                            M.disable(t)
                        }
                    }, {
                        key: "viewport",
                        value: function(t, e, n, r) {
                            this.setViewport(t, e, n, r)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if (this.canvas.parentNode) try {
                                this.canvas.parentNode.removeChild(this.canvas)
                            } catch (t) {}
                            this.canvas = null
                        }
                    }, {
                        key: "FLOAT",
                        get: function() {
                            return (0, _.default)()
                        }
                    }, {
                        key: "HALF_FLOAT",
                        get: function() {
                            return (0, m.default)()
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this._width
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this._height
                        }
                    }, {
                        key: "aspectRatio",
                        get: function() {
                            return this._aspectRatio
                        }
                    }, {
                        key: "webgl2",
                        get: function() {
                            return this._useWebGL2
                        }
                    }]), t
                }(),
                E = new y;
            e.default = E, t.exports = e.default
        }, function(t, e, n) {
            t.exports = {
                "default": n(116),
                __esModule: !0
            }
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            e.__esModule = !0;
            var i = n(110),
                o = r(i),
                a = n(107),
                u = r(a),
                s = n(36),
                l = r(s);
            e.default = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, l.default)(e)));
                t.prototype = (0, u.default)(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (o.default ? (0, o.default)(t, e) : t.__proto__ = e)
            }
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            e.__esModule = !0;
            var i = n(36),
                o = r(i);
            e.default = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o.default)(e)) && "function" != typeof e ? t : e
            }
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(36),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(3),
                c = r(f),
                h = (n(154), function(t, e) {
                    if (t.length !== e.length) return !1;
                    for (var n = 0; n < t.length; n++)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }),
                d = function(t) {
                    return t.slice ? t.slice(0) : new Float32Array(t)
                },
                p = void 0,
                _ = n(51),
                v = n(158),
                m = {
                    "float": "uniform1f",
                    vec2: "uniform2fv",
                    vec3: "uniform3fv",
                    vec4: "uniform4fv",
                    "int": "uniform1i",
                    mat3: "uniformMatrix3fv",
                    mat4: "uniformMatrix4fv"
                },
                x = function() {
                    function t() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? _ : arguments[0],
                            n = arguments.length <= 1 || void 0 === arguments[1] ? v : arguments[1],
                            r = arguments[2];
                        (0, u.default)(this, t), p = c.default.gl, this.parameters = [], this.uniformTextures = [], this._varyings = r, e || (e = _), n || (n = _);
                        var i = this._createShaderProgram(e, !0),
                            o = this._createShaderProgram(n, !1);
                        this._attachShaderProgram(i, o)
                    }
                    return (0, l.default)(t, [{
                        key: "bind",
                        value: function() {
                            c.default.shader !== this && (p.useProgram(this.shaderProgram), c.default.useShader(this), this.uniformTextures = [])
                        }
                    }, {
                        key: "uniform",
                        value: function(t, e, n) {
                            if ("object" === ("undefined" == typeof t ? "undefined" : (0, o.default)(t))) return void this.uniformObject(t);
                            for (var r = m[e] || e, i = !1, a = void 0, u = -1, s = 0; s < this.parameters.length; s++)
                                if (a = this.parameters[s], a.name === t) {
                                    i = !0, u = s;
                                    break
                                }
                            var l = !1;
                            if (i ? (this.shaderProgram[t] = a.uniformLoc, l = a.isNumber) : (l = "uniform1i" === r || "uniform1f" === r, this.shaderProgram[t] = p.getUniformLocation(this.shaderProgram, t), l ? this.parameters.push({
                                    name: t,
                                    type: r,
                                    value: n,
                                    uniformLoc: this.shaderProgram[t],
                                    isNumber: l
                                }) : this.parameters.push({
                                    name: t,
                                    type: r,
                                    value: d(n),
                                    uniformLoc: this.shaderProgram[t],
                                    isNumber: l
                                }), u = this.parameters.length - 1), this.parameters[u].uniformLoc)
                                if (-1 === r.indexOf("Matrix"))
                                    if (l) {
                                        var f = this.parameters[u].value !== n || !i;
                                        f && (p[r](this.shaderProgram[t], n), this.parameters[u].value = n)
                                    } else h(this.parameters[u].value, n) && i || (p[r](this.shaderProgram[t], n), this.parameters[u].value = d(n));
                            else h(this.parameters[u].value, n) && i || (p[r](this.shaderProgram[t], !1, n), this.parameters[u].value = d(n))
                        }
                    }, {
                        key: "uniformObject",
                        value: function(e) {
                            for (var n in e) {
                                var r = e[n],
                                    i = t.getUniformType(r);
                                if (r.concat && r[0].concat) {
                                    for (var o = [], a = 0; a < r.length; a++) o = o.concat(r[a]);
                                    r = o
                                }
                                this.uniform(n, i, r)
                            }
                        }
                    }, {
                        key: "_createShaderProgram",
                        value: function(t, e) {
                            var n = e ? c.default.VERTEX_SHADER : c.default.FRAGMENT_SHADER,
                                r = p.createShader(n);
                            return p.shaderSource(r, t), p.compileShader(r), p.getShaderParameter(r, p.COMPILE_STATUS) ? r : null
                        }
                    }, {
                        key: "_attachShaderProgram",
                        value: function(t, e) {
                            this.shaderProgram = p.createProgram(), p.attachShader(this.shaderProgram, t), p.attachShader(this.shaderProgram, e), p.deleteShader(t), p.deleteShader(e), this._varyings && p.transformFeedbackVaryings(this.shaderProgram, this._varyings, p.SEPARATE_ATTRIBS), p.linkProgram(this.shaderProgram)
                        }
                    }]), t
                }();
            x.getUniformType = function(t) {
                var e = !!t.concat,
                    n = function(t) {
                        return 9 === t.length ? "uniformMatrix3fv" : 16 === t.length ? "uniformMatrix4fv" : "vec" + t.length
                    };
                return e ? n(t[0].concat ? t[0] : t) : "float"
            }, e.default = x, t.exports = e.default
        }, function(t, e, n) {
            e.glMatrix = n(10), e.mat2 = n(149), e.mat2d = n(150), e.mat3 = n(71), e.mat4 = n(151), e.quat = n(152), e.vec2 = n(153), e.vec3 = n(72), e.vec4 = n(73)
        }, function(t, e) {
            var n = t.exports = {
                version: "2.4.0"
            };
            "number" == typeof __e && (__e = n)
        }, function(t, e) {
            var n = {};
            n.EPSILON = 1e-6, n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function(t) {
                n.ARRAY_TYPE = t
            };
            var r = Math.PI / 180;
            n.toRadian = function(t) {
                return t * r
            }, n.equals = function(t, e) {
                return Math.abs(t - e) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
            }, t.exports = n
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(3),
                l = r(s),
                f = function() {
                    function t(e, n) {
                        (0, o.default)(this, t), this._mesh = e, this._shader = n
                    }
                    return (0, u.default)(t, [{
                        key: "draw",
                        value: function() {
                            this._shader.bind(), l.default.draw(this.mesh)
                        }
                    }, {
                        key: "mesh",
                        get: function() {
                            return this._mesh
                        }
                    }, {
                        key: "shader",
                        get: function() {
                            return this._shader
                        }
                    }]), t
                }();
            e.default = f, t.exports = e.default
        }, function(t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, function(t, e, n) {
            var r = n(125),
                i = n(37);
            t.exports = function(t) {
                return r(i(t))
            }
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(3),
                l = r(s),
                f = n(8),
                c = n(58),
                h = r(c),
                d = void 0,
                p = 35044,
                _ = function(t) {
                    var e = void 0;
                    return void 0 !== t.buffer ? e = t.buffer : (e = d.createBuffer(), t.buffer = e), e
                },
                v = function() {
                    function t() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? 4 : arguments[0],
                            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                        (0, o.default)(this, t), d = l.default.gl, this.drawType = e, this._attributes = [], this._numInstance = -1, this._enabledVertexAttribute = [], this._indices = [], this._faces = [], this._bufferChanged = [], this._hasIndexBufferChanged = !1, this._hasVAO = !1, this._isInstanced = !1, this._extVAO = !!l.default.gl.createVertexArray, this._useVAO = !!this._extVAO && n
                    }
                    return (0, u.default)(t, [{
                        key: "bufferVertex",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? p : arguments[1];
                            this.bufferData(t, "aVertexPosition", 3, e), this.normals.length < this.vertices.length && this.bufferNormal(t, e)
                        }
                    }, {
                        key: "bufferTexCoord",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? p : arguments[1];
                            this.bufferData(t, "aTextureCoord", 2, e)
                        }
                    }, {
                        key: "bufferNormal",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? p : arguments[1];
                            this.bufferData(t, "aNormal", 3, e)
                        }
                    }, {
                        key: "bufferIndex",
                        value: function(t) {
                            var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                            this._drawType = e ? d.DYNAMIC_DRAW : d.STATIC_DRAW, this._indices = new Uint16Array(t), this._numItems = this._indices.length
                        }
                    }, {
                        key: "bufferData",
                        value: function e(t, n, r) {
                            var i = arguments.length <= 3 || void 0 === arguments[3] ? p : arguments[3],
                                o = !(arguments.length <= 4 || void 0 === arguments[4]) && arguments[4],
                                a = 0,
                                u = i,
                                e = [];
                            for (r || (r = t[0].length), this._isInstanced = o || this._isInstanced, a = 0; a < t.length; a++)
                                for (var s = 0; s < t[a].length; s++) e.push(t[a][s]);
                            var l = new Float32Array(e),
                                f = this.getAttribute(n);
                            f ? (f.itemSize = r, f.dataArray = l, f.source = t) : this._attributes.push({
                                name: n,
                                source: t,
                                itemSize: r,
                                drawType: u,
                                dataArray: l,
                                isInstanced: o
                            }), this._bufferChanged.push(n)
                        }
                    }, {
                        key: "bufferInstance",
                        value: function(t, e) {
                            if (l.default.gl.vertexAttribDivisor) {
                                var n = t[0].length;
                                this._numInstance = t.length, this.bufferData(t, e, n, p, !0)
                            }
                        }
                    }, {
                        key: "bind",
                        value: function(t) {
                            this.generateBuffers(t), this.hasVAO ? d.bindVertexArray(this.vao) : (this.attributes.forEach(function(t) {
                                d.bindBuffer(d.ARRAY_BUFFER, t.buffer);
                                var e = t.attrPosition;
                                d.vertexAttribPointer(e, t.itemSize, d.FLOAT, !1, 0, 0), t.isInstanced && d.vertexAttribDivisor(e, 1)
                            }), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.iBuffer))
                        }
                    }, {
                        key: "generateBuffers",
                        value: function(t) {
                            var e = this;
                            0 != this._bufferChanged.length && (this._useVAO ? (this._vao || (this._vao = d.createVertexArray()), d.bindVertexArray(this._vao), this._attributes.forEach(function(n) {
                                if (-1 !== e._bufferChanged.indexOf(n.name)) {
                                    var r = _(n);
                                    d.bindBuffer(d.ARRAY_BUFFER, r), d.bufferData(d.ARRAY_BUFFER, n.dataArray, n.drawType);
                                    var i = (0, h.default)(d, t, n.name);
                                    d.enableVertexAttribArray(i), d.vertexAttribPointer(i, n.itemSize, d.FLOAT, !1, 0, 0), n.attrPosition = i, n.isInstanced && d.vertexAttribDivisor(i, 1)
                                }
                            }), this._updateIndexBuffer(), d.bindVertexArray(null), this._hasVAO = !0) : (this._attributes.forEach(function(n) {
                                if (-1 !== e._bufferChanged.indexOf(n.name)) {
                                    var r = _(n);
                                    d.bindBuffer(d.ARRAY_BUFFER, r), d.bufferData(d.ARRAY_BUFFER, n.dataArray, n.drawType);
                                    var i = (0, h.default)(d, t, n.name);
                                    d.enableVertexAttribArray(i), d.vertexAttribPointer(i, n.itemSize, d.FLOAT, !1, 0, 0), n.attrPosition = i, n.isInstanced && d.vertexAttribDivisor(i, 1)
                                }
                            }), this._updateIndexBuffer()), this._hasIndexBufferChanged = !1, this._bufferChanged = [])
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            this._useVAO && d.bindVertexArray(null), this._attributes.forEach(function(t) {
                                t.isInstanced && d.vertexAttribDivisor(t.attrPosition, 0)
                            })
                        }
                    }, {
                        key: "_updateIndexBuffer",
                        value: function() {
                            this._hasIndexBufferChanged || (this.iBuffer || (this.iBuffer = d.createBuffer()), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.iBuffer), d.bufferData(d.ELEMENT_ARRAY_BUFFER, this._indices, this._drawType), this.iBuffer.itemSize = 1, this.iBuffer.numItems = this._numItems)
                        }
                    }, {
                        key: "computeNormals",
                        value: function() {
                            var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                            this.generateFaces(), t ? this._computeFaceNormals() : this._computeVertexNormals()
                        }
                    }, {
                        key: "_computeFaceNormals",
                        value: function() {
                            for (var t = void 0, e = void 0, n = [], r = 0; r < this._indices.length; r += 3) {
                                t = r / 3, e = this._faces[t];
                                var i = e.normal;
                                n[e.indices[0]] = i, n[e.indices[1]] = i, n[e.indices[2]] = i
                            }
                            this.bufferNormal(n)
                        }
                    }, {
                        key: "_computeVertexNormals",
                        value: function() {
                            for (var t = void 0, e = f.vec3.create(), n = [], r = this.vertices, i = 0; i < r.length; i++) {
                                f.vec3.set(e, 0, 0, 0);
                                for (var o = 0; o < this._faces.length; o++) t = this._faces[o], t.indices.indexOf(i) >= 0 && (e[0] += t.normal[0], e[1] += t.normal[1], e[2] += t.normal[2]);
                                f.vec3.normalize(e, e), n.push([e[0], e[1], e[2]])
                            }
                            this.bufferNormal(n)
                        }
                    }, {
                        key: "generateFaces",
                        value: function() {
                            for (var t = void 0, e = void 0, n = void 0, r = void 0, i = void 0, o = void 0, a = (f.vec3.create(), f.vec3.create(), f.vec3.create(), this.vertices), u = 0; u < this._indices.length; u += 3) {
                                t = this._indices[u], e = this._indices[u + 1], n = this._indices[u + 2], r = a[t], i = a[e], o = a[n];
                                var s = {
                                    indices: [t, e, n],
                                    vertices: [r, i, o]
                                };
                                this._faces.push(s)
                            }
                        }
                    }, {
                        key: "getAttribute",
                        value: function(t) {
                            return this._attributes.find(function(e) {
                                return e.name === t
                            })
                        }
                    }, {
                        key: "getSource",
                        value: function(t) {
                            var e = this.getAttribute(t);
                            return e ? e.source : []
                        }
                    }, {
                        key: "vertices",
                        get: function() {
                            return this.getSource("aVertexPosition")
                        }
                    }, {
                        key: "normals",
                        get: function() {
                            return this.getSource("aNormal")
                        }
                    }, {
                        key: "coords",
                        get: function() {
                            return this.getSource("aTextureCoord")
                        }
                    }, {
                        key: "indices",
                        get: function() {
                            return this._indices
                        }
                    }, {
                        key: "vertexSize",
                        get: function() {
                            return this.vertices.length
                        }
                    }, {
                        key: "faces",
                        get: function() {
                            return this._faces
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return this._attributes
                        }
                    }, {
                        key: "hasVAO",
                        get: function() {
                            return this._hasVAO
                        }
                    }, {
                        key: "vao",
                        get: function() {
                            return this._vao
                        }
                    }, {
                        key: "numInstance",
                        get: function() {
                            return this._numInstance
                        }
                    }, {
                        key: "isInstanced",
                        get: function() {
                            return this._isInstanced
                        }
                    }]), t
                }();
            e.default = v, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            e.__esModule = !0;
            var i = n(4),
                o = r(i),
                a = n(109),
                u = r(a);
            e.default = function s(t, e, n) {
                null === t && (t = Function.prototype);
                var r = (0, u.default)(t, e);
                if (void 0 === r) {
                    var i = (0, o.default)(t);
                    return null === i ? void 0 : s(i, e, n)
                }
                if ("value" in r) return r.value;
                var a = r.get;
                return void 0 !== a ? a.call(n) : void 0
            }
        }, function(t, e, n) {
            t.exports = !n(25)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e)
            }
        }, function(t, e, n) {
            var r = n(24),
                i = n(62),
                o = n(48),
                a = Object.defineProperty;
            e.f = n(16) ? Object.defineProperty : function(t, e, n) {
                if (r(t), e = o(e, !0), r(n), i) try {
                    return a(t, e, n)
                } catch (u) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t
            }
        }, function(t, e, n) {
            var r = n(12),
                i = n(9),
                o = n(60),
                a = n(20),
                u = "prototype",
                s = function(t, e, n) {
                    var l, f, c, h = t & s.F,
                        d = t & s.G,
                        p = t & s.S,
                        _ = t & s.P,
                        v = t & s.B,
                        m = t & s.W,
                        x = d ? i : i[e] || (i[e] = {}),
                        g = x[u],
                        b = d ? r : p ? r[e] : (r[e] || {})[u];
                    d && (n = e);
                    for (l in n) f = !h && b && void 0 !== b[l], f && l in x || (c = f ? b[l] : n[l], x[l] = d && "function" != typeof b[l] ? n[l] : v && f ? o(c, r) : m && b[l] == c ? function(t) {
                        var e = function(e, n, r) {
                            if (this instanceof t) {
                                switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e);
                                    case 2:
                                        return new t(e, n)
                                }
                                return new t(e, n, r)
                            }
                            return t.apply(this, arguments)
                        };
                        return e[u] = t[u], e
                    }(c) : _ && "function" == typeof c ? o(Function.call, c) : c, _ && ((x.virtual || (x.virtual = {}))[l] = c, t & s.R && g && !g[l] && a(g, l, c)))
                };
            s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
        }, function(t, e, n) {
            var r = n(18),
                i = n(28);
            t.exports = n(16) ? function(t, e, n) {
                return r.f(t, e, i(1, n))
            } : function(t, e, n) {
                return t[e] = n, t
            }
        }, function(t, e, n) {
            var r = n(46)("wks"),
                i = n(29),
                o = n(12).Symbol,
                a = "function" == typeof o,
                u = t.exports = function(t) {
                    return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
                };
            u.store = r
        }, function(t, e) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = 60,
                o = function() {
                    function t() {
                        n(this, t), this._delayTasks = [], this._nextTasks = [], this._deferTasks = [], this._highTasks = [], this._usurpTask = [], this._enterframeTasks = [], this._idTable = 0, this._loop()
                    }
                    return r(t, [{
                        key: "addEF",
                        value: function(t, e) {
                            e = e || [];
                            var n = this._idTable;
                            return this._enterframeTasks[n] = {
                                func: t,
                                params: e
                            }, this._idTable++, n
                        }
                    }, {
                        key: "removeEF",
                        value: function(t) {
                            return void 0 !== this._enterframeTasks[t] && (this._enterframeTasks[t] = null), -1
                        }
                    }, {
                        key: "delay",
                        value: function(t, e, n) {
                            var r = (new Date).getTime(),
                                i = {
                                    func: t,
                                    params: e,
                                    delay: n,
                                    time: r
                                };
                            this._delayTasks.push(i)
                        }
                    }, {
                        key: "defer",
                        value: function(t, e) {
                            var n = {
                                func: t,
                                params: e
                            };
                            this._deferTasks.push(n)
                        }
                    }, {
                        key: "next",
                        value: function(t, e) {
                            var n = {
                                func: t,
                                params: e
                            };
                            this._nextTasks.push(n)
                        }
                    }, {
                        key: "usurp",
                        value: function(t, e) {
                            var n = {
                                func: t,
                                params: e
                            };
                            this._usurpTask.push(n)
                        }
                    }, {
                        key: "_process",
                        value: function() {
                            var t = 0,
                                e = void 0,
                                n = void 0,
                                r = void 0;
                            for (t = 0; t < this._enterframeTasks.length; t++) e = this._enterframeTasks[t], null !== e && void 0 !== e && e.func(e.params);
                            for (; this._highTasks.length > 0;) e = this._highTasks.pop(), e.func(e.params);
                            var o = (new Date).getTime();
                            for (t = 0; t < this._delayTasks.length; t++) e = this._delayTasks[t], o - e.time > e.delay && (e.func(e.params), this._delayTasks.splice(t, 1));
                            for (o = (new Date).getTime(), n = 1e3 / i; this._deferTasks.length > 0;) {
                                if (e = this._deferTasks.shift(), r = (new Date).getTime(), !(n > r - o)) {
                                    this._deferTasks.unshift(e);
                                    break
                                }
                                e.func(e.params)
                            }
                            for (o = (new Date).getTime(), n = 1e3 / i; this._usurpTask.length > 0;) e = this._usurpTask.shift(), r = (new Date).getTime(), n > r - o && e.func(e.params);
                            this._highTasks = this._highTasks.concat(this._nextTasks), this._nextTasks = [], this._usurpTask = []
                        }
                    }, {
                        key: "_loop",
                        value: function() {
                            var t = this;
                            this._process(), window.requestAnimationFrame(function() {
                                return t._loop()
                            })
                        }
                    }]), t
                }(),
                a = new o;
            e.default = a
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(14),
                o = r(i),
                a = {},
                u = void 0;
            a.plane = function(t, e, n) {
                for (var r = arguments.length <= 3 || void 0 === arguments[3] ? "xy" : arguments[3], i = arguments.length <= 4 || void 0 === arguments[4] ? 4 : arguments[4], a = [], u = [], s = [], l = [], f = t / n, c = e / n, h = 1 / n, d = .5 * -t, p = .5 * -e, _ = 0, v = 0; n > v; v++)
                    for (var m = 0; n > m; m++) {
                        var x = f * v + d,
                            g = c * m + p,
                            b = v / n,
                            M = m / n;
                        "xz" === r ? (a.push([x, 0, g + c]), a.push([x + f, 0, g + c]), a.push([x + f, 0, g]), a.push([x, 0, g]), u.push([b, 1 - (M + h)]), u.push([b + h, 1 - (M + h)]), u.push([b + h, 1 - M]), u.push([b, 1 - M]), l.push([0, 1, 0]), l.push([0, 1, 0]), l.push([0, 1, 0]), l.push([0, 1, 0])) : "yz" === r ? (a.push([0, g, x]), a.push([0, g, x + f]), a.push([0, g + c, x + f]), a.push([0, g + c, x]), u.push([b, M]), u.push([b + h, M]), u.push([b + h, M + h]), u.push([b, M + h]), l.push([1, 0, 0]), l.push([1, 0, 0]), l.push([1, 0, 0]), l.push([1, 0, 0])) : (a.push([x, g, 0]), a.push([x + f, g, 0]), a.push([x + f, g + c, 0]), a.push([x, g + c, 0]), u.push([b, M]), u.push([b + h, M]), u.push([b + h, M + h]), u.push([b, M + h]), l.push([0, 0, 1]), l.push([0, 0, 1]), l.push([0, 0, 1]), l.push([0, 0, 1])), s.push(4 * _ + 0), s.push(4 * _ + 1), s.push(4 * _ + 2), s.push(4 * _ + 0), s.push(4 * _ + 2), s.push(4 * _ + 3), _++
                    }
                var y = new o.default(i);
                return y.bufferVertex(a), y.bufferTexCoord(u), y.bufferIndex(s), y.bufferNormal(l), y
            }, a.sphere = function(t, e) {
                function n(n, r) {
                    var i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                        o = n / e * Math.PI - .5 * Math.PI,
                        a = r / e * Math.PI * 2,
                        u = i ? 1 : t,
                        s = [];
                    s[1] = Math.sin(o) * u;
                    var l = Math.cos(o) * u;
                    s[0] = Math.cos(a) * l, s[2] = Math.sin(a) * l;
                    var f = 1e4;
                    return s[0] = Math.floor(s[0] * f) / f, s[1] = Math.floor(s[1] * f) / f, s[2] = Math.floor(s[2] * f) / f, s
                }
                for (var r = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2], i = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3], a = [], u = [], s = [], l = [], f = 1 / e, c = 0, h = 0; e > h; h++)
                    for (var d = 0; e > d; d++) {
                        a.push(n(h, d)), a.push(n(h + 1, d)), a.push(n(h + 1, d + 1)), a.push(n(h, d + 1)), l.push(n(h, d, !0)), l.push(n(h + 1, d, !0)), l.push(n(h + 1, d + 1, !0)), l.push(n(h, d + 1, !0));
                        var p = d / e,
                            _ = h / e;
                        u.push([1 - p, _]), u.push([1 - p, _ + f]), u.push([1 - p - f, _ + f]), u.push([1 - p - f, _]), s.push(4 * c + 0), s.push(4 * c + 1), s.push(4 * c + 2), s.push(4 * c + 0), s.push(4 * c + 2), s.push(4 * c + 3), c++
                    }
                r && s.reverse();
                var v = new o.default(i);
                return v.bufferVertex(a), v.bufferTexCoord(u), v.bufferIndex(s), v.bufferNormal(l), v
            }, a.cube = function(t, e, n) {
                var r = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3];
                e = e || t, n = n || t;
                var i = t / 2,
                    a = e / 2,
                    u = n / 2,
                    s = [],
                    l = [],
                    f = [],
                    c = [],
                    h = 0;
                s.push([-i, a, -u]), s.push([i, a, -u]), s.push([i, -a, -u]), s.push([-i, -a, -u]), c.push([0, 0, -1]), c.push([0, 0, -1]), c.push([0, 0, -1]), c.push([0, 0, -1]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), f.push(4 * h + 0), f.push(4 * h + 1), f.push(4 * h + 2), f.push(4 * h + 0), f.push(4 * h + 2), f.push(4 * h + 3), h++, s.push([i, a, -u]), s.push([i, a, u]), s.push([i, -a, u]), s.push([i, -a, -u]), c.push([1, 0, 0]), c.push([1, 0, 0]), c.push([1, 0, 0]), c.push([1, 0, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), f.push(4 * h + 0), f.push(4 * h + 1), f.push(4 * h + 2), f.push(4 * h + 0), f.push(4 * h + 2), f.push(4 * h + 3), h++, s.push([i, a, u]), s.push([-i, a, u]), s.push([-i, -a, u]), s.push([i, -a, u]), c.push([0, 0, 1]), c.push([0, 0, 1]), c.push([0, 0, 1]), c.push([0, 0, 1]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), f.push(4 * h + 0), f.push(4 * h + 1), f.push(4 * h + 2), f.push(4 * h + 0), f.push(4 * h + 2), f.push(4 * h + 3), h++, s.push([-i, a, u]), s.push([-i, a, -u]), s.push([-i, -a, -u]), s.push([-i, -a, u]), c.push([-1, 0, 0]), c.push([-1, 0, 0]), c.push([-1, 0, 0]), c.push([-1, 0, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), f.push(4 * h + 0), f.push(4 * h + 1), f.push(4 * h + 2), f.push(4 * h + 0), f.push(4 * h + 2), f.push(4 * h + 3), h++, s.push([i, a, -u]), s.push([-i, a, -u]), s.push([-i, a, u]), s.push([i, a, u]), c.push([0, 1, 0]), c.push([0, 1, 0]), c.push([0, 1, 0]), c.push([0, 1, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), f.push(4 * h + 0), f.push(4 * h + 1), f.push(4 * h + 2), f.push(4 * h + 0), f.push(4 * h + 2), f.push(4 * h + 3), h++, s.push([i, -a, u]), s.push([-i, -a, u]), s.push([-i, -a, -u]), s.push([i, -a, -u]), c.push([0, -1, 0]), c.push([0, -1, 0]), c.push([0, -1, 0]), c.push([0, -1, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), f.push(4 * h + 0), f.push(4 * h + 1), f.push(4 * h + 2), f.push(4 * h + 0), f.push(4 * h + 2), f.push(4 * h + 3), h++;
                var d = new o.default(r);
                return d.bufferVertex(s), d.bufferTexCoord(l), d.bufferIndex(f), d.bufferNormal(c), d
            }, a.skybox = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? 4 : arguments[1],
                    n = [],
                    r = [],
                    i = [],
                    a = [],
                    u = 0;
                n.push([t, t, -t]), n.push([-t, t, -t]), n.push([-t, -t, -t]), n.push([t, -t, -t]), a.push([0, 0, -1]), a.push([0, 0, -1]), a.push([0, 0, -1]), a.push([0, 0, -1]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * u + 0), i.push(4 * u + 1), i.push(4 * u + 2), i.push(4 * u + 0), i.push(4 * u + 2), i.push(4 * u + 3), u++, n.push([t, -t, -t]), n.push([t, -t, t]), n.push([t, t, t]), n.push([t, t, -t]), a.push([1, 0, 0]), a.push([1, 0, 0]), a.push([1, 0, 0]), a.push([1, 0, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * u + 0), i.push(4 * u + 1), i.push(4 * u + 2), i.push(4 * u + 0), i.push(4 * u + 2), i.push(4 * u + 3), u++, n.push([-t, t, t]), n.push([t, t, t]), n.push([t, -t, t]), n.push([-t, -t, t]), a.push([0, 0, 1]), a.push([0, 0, 1]), a.push([0, 0, 1]), a.push([0, 0, 1]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * u + 0), i.push(4 * u + 1), i.push(4 * u + 2), i.push(4 * u + 0), i.push(4 * u + 2), i.push(4 * u + 3), u++, n.push([-t, -t, t]), n.push([-t, -t, -t]), n.push([-t, t, -t]), n.push([-t, t, t]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * u + 0), i.push(4 * u + 1), i.push(4 * u + 2), i.push(4 * u + 0), i.push(4 * u + 2), i.push(4 * u + 3), u++, n.push([t, t, t]), n.push([-t, t, t]), n.push([-t, t, -t]), n.push([t, t, -t]), a.push([0, 1, 0]), a.push([0, 1, 0]), a.push([0, 1, 0]), a.push([0, 1, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * u + 0), i.push(4 * u + 1), i.push(4 * u + 2), i.push(4 * u + 0), i.push(4 * u + 2), i.push(4 * u + 3), u++, n.push([t, -t, -t]), n.push([-t, -t, -t]), n.push([-t, -t, t]), n.push([t, -t, t]), a.push([0, -1, 0]), a.push([0, -1, 0]), a.push([0, -1, 0]), a.push([0, -1, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * u + 0), i.push(4 * u + 1), i.push(4 * u + 2), i.push(4 * u + 0), i.push(4 * u + 2), i.push(4 * u + 3);
                var s = new o.default(e);
                return s.bufferVertex(n), s.bufferTexCoord(r), s.bufferIndex(i), s.bufferNormal(a), s
            }, a.bigTriangle = function() {
                if (!u) {
                    var t = [2, 1, 0],
                        e = [
                            [-1, -1],
                            [-1, 4],
                            [4, -1]
                        ];
                    u = new o.default, u.bufferData(e, "aPosition", 2), u.bufferIndex(t)
                }
                return u
            }, e.default = a, t.exports = e.default
        }, function(t, e, n) {
            var r = n(26);
            t.exports = function(t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }, function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        }, function(t, e) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, function(t, e, n) {
            var r = n(67),
                i = n(38);
            t.exports = Object.keys || function(t) {
                return r(t, i)
            }
        }, function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }, function(t, e) {
            var n = 0,
                r = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
            }
        }, function(t, e) {
            t.exports = "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}"
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                return 0 !== t && !(t & t - 1)
            }

            function o(t) {
                var e = t.width || t.videoWidth,
                    n = t.height || t.videoHeight;
                return !(!e || !n) && (i(e) && i(n))
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(3),
                c = r(f),
                h = void 0,
                d = function() {
                    function t(e) {
                        var n = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                            r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        if ((0, u.default)(this, t), h = c.default.gl, n) this._texture = e;
                        else {
                            this._mSource = e, this._texture = h.createTexture(), this._isVideo = "VIDEO" === e.tagName, this.magFilter = r.magFilter || h.LINEAR, this.minFilter = r.minFilter || h.LINEAR_MIPMAP_NEAREST, this.wrapS = r.wrapS || h.MIRRORED_REPEAT, this.wrapT = r.wrapT || h.MIRRORED_REPEAT;
                            var i = e.width || e.videoWidth;
                            i ? o(e) || (this.wrapS = this.wrapT = h.CLAMP_TO_EDGE, this.minFilter === h.LINEAR_MIPMAP_NEAREST && (this.minFilter = h.LINEAR)) : (this.wrapS = this.wrapT = h.CLAMP_TO_EDGE, this.minFilter === h.LINEAR_MIPMAP_NEAREST && (this.minFilter = h.LINEAR)), h.bindTexture(h.TEXTURE_2D, this._texture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0), e.exposure ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, e.shape[0], e.shape[1], 0, h.RGBA, h.FLOAT, e.data) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this.minFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, this.wrapT);
                            var a = c.default.getExtension("EXT_texture_filter_anisotropic");
                            if (a) {
                                var s = h.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                h.texParameterf(h.TEXTURE_2D, a.TEXTURE_MAX_ANISOTROPY_EXT, s)
                            }
                            this.minFilter === h.LINEAR_MIPMAP_NEAREST && h.generateMipmap(h.TEXTURE_2D), h.bindTexture(h.TEXTURE_2D, null)
                        }
                    }
                    return (0, l.default)(t, [{
                        key: "minFilter",
                        value: function(t) {
                            return t !== h.LINEAR && t !== h.NEAREST && t !== h.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = t, this)
                        }
                    }, {
                        key: "magFilter",
                        value: function(t) {
                            return t !== h.LINEAR && t !== h.NEAREST && t !== h.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = t, this)
                        }
                    }, {
                        key: "wrapS",
                        value: function(t) {
                            return t !== h.CLAMP_TO_EDGE && t !== h.REPEAT && t !== h.MIRRORED_REPEAT ? this : (this.wrapS = t, this)
                        }
                    }, {
                        key: "wrapT",
                        value: function(t) {
                            return t !== h.CLAMP_TO_EDGE && t !== h.REPEAT && t !== h.MIRRORED_REPEAT ? this : (this.wrapT = t, this)
                        }
                    }, {
                        key: "updateTexture",
                        value: function(t) {
                            t && (this._mSource = t), h.bindTexture(h.TEXTURE_2D, this._texture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, this._mSource), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this.minFilter), this.minFilter === h.LINEAR_MIPMAP_NEAREST && h.generateMipmap(h.TEXTURE_2D),
                                h.bindTexture(h.TEXTURE_2D, null)
                        }
                    }, {
                        key: "bind",
                        value: function(t) {
                            void 0 === t && (t = 0), c.default.shader && (h.activeTexture(h.TEXTURE0 + t), h.bindTexture(h.TEXTURE_2D, this._texture), this._bindIndex = t)
                        }
                    }, {
                        key: "texture",
                        get: function() {
                            return this._texture
                        }
                    }]), t
                }(),
                p = void 0,
                _ = void 0,
                v = void 0;
            d.whiteTexture = function() {
                if (void 0 === p) {
                    var t = document.createElement("canvas");
                    t.width = t.height = 4;
                    var e = t.getContext("2d");
                    e.fillStyle = "#fff", e.fillRect(0, 0, 4, 4), p = new d(t)
                }
                return p
            }, d.greyTexture = function() {
                if (void 0 === _) {
                    var t = document.createElement("canvas");
                    t.width = t.height = 4;
                    var e = t.getContext("2d");
                    e.fillStyle = "rgb(127, 127, 127)", e.fillRect(0, 0, 4, 4), _ = new d(t)
                }
                return _
            }, d.blackTexture = function() {
                if (void 0 === v) {
                    var t = document.createElement("canvas");
                    t.width = t.height = 4;
                    var e = t.getContext("2d");
                    e.fillStyle = "rgb(127, 127, 127)", e.fillRect(0, 0, 4, 4), v = new d(t)
                }
                return v
            }, e.default = d, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(8),
                l = r(s),
                f = function() {
                    function t() {
                        (0, o.default)(this, t), this._matrix = l.default.mat4.create(), this._quat = l.default.quat.create(), this._orientation = l.default.mat4.create(), this._projection = l.default.mat4.create(), this.position = l.default.vec3.create()
                    }
                    return (0, u.default)(t, [{
                        key: "lookAt",
                        value: function(t, e) {
                            var n = arguments.length <= 2 || void 0 === arguments[2] ? [0, 1, 0] : arguments[2];
                            this._eye = vec3.clone(t), this._center = vec3.clone(e), l.default.vec3.copy(this.position, t), l.default.mat4.identity(this._matrix), l.default.mat4.lookAt(this._matrix, t, e, n)
                        }
                    }, {
                        key: "setFromOrientation",
                        value: function(t, e, n, r) {
                            l.default.quat.set(this._quat, t, e, n, r), l.default.mat4.fromQuat(this._orientation, this._quat), l.default.mat4.translate(this._matrix, this._orientation, this.positionOffset)
                        }
                    }, {
                        key: "setProjection",
                        value: function(t) {
                            this._projection = l.default.mat4.clone(t)
                        }
                    }, {
                        key: "setView",
                        value: function(t) {
                            this._matrix = l.default.mat4.clone(t)
                        }
                    }, {
                        key: "setFromViewProj",
                        value: function(t, e) {
                            this.setView(t), this.setProjection(e)
                        }
                    }, {
                        key: "matrix",
                        get: function() {
                            return this._matrix
                        }
                    }, {
                        key: "viewMatrix",
                        get: function() {
                            return this._matrix
                        }
                    }, {
                        key: "projection",
                        get: function() {
                            return this._projection
                        }
                    }, {
                        key: "projectionMatrix",
                        get: function() {
                            return this._projection
                        }
                    }, {
                        key: "eye",
                        get: function() {
                            return this._eye
                        }
                    }, {
                        key: "center",
                        get: function() {
                            return this._center
                        }
                    }]), t
                }();
            e.default = f, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(5),
                d = r(h),
                p = n(32),
                _ = r(p),
                v = n(55),
                m = r(v),
                x = n(8),
                g = r(x),
                b = g.default.mat4,
                M = g.default.vec3,
                y = b.create(),
                E = M.create(),
                S = function(t) {
                    function e() {
                        return (0, u.default)(this, e), (0, c.default)(this, (0, o.default)(e).apply(this, arguments))
                    }
                    return (0, d.default)(e, t), (0, l.default)(e, [{
                        key: "setPerspective",
                        value: function(t, e, n, r) {
                            this._fov = t, this._near = n, this._far = r, this._aspectRatio = e, g.default.mat4.perspective(this._projection, t, e, n, r)
                        }
                    }, {
                        key: "setAspectRatio",
                        value: function(t) {
                            this._aspectRatio = t, g.default.mat4.perspective(this.projection, this._fov, t, this._near, this._far)
                        }
                    }, {
                        key: "generateRay",
                        value: function(t, e) {
                            var n = this.projectionMatrix,
                                r = this.viewMatrix;
                            return b.multiply(y, n, r), b.invert(y, y), M.transformMat4(E, t, y), M.sub(E, E, this.position), M.normalize(E, E), e ? (e.origin = this.position, e.direction = E) : e = new m.default(this.position, E), e
                        }
                    }]), e
                }(_.default);
            e.default = S, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = function() {
                    function t() {
                        var e = this,
                            n = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                        (0, o.default)(this, t), this._req = new XMLHttpRequest, this._req.addEventListener("load", function(t) {
                            return e._onLoaded(t)
                        }), this._req.addEventListener("progress", function(t) {
                            return e._onProgress(t)
                        }), n && (this._req.responseType = "arraybuffer")
                    }
                    return (0, u.default)(t, [{
                        key: "load",
                        value: function(t, e) {
                            this._callback = e, this._req.open("GET", t), this._req.send()
                        }
                    }, {
                        key: "_onLoaded",
                        value: function() {
                            this._callback(this._req.response)
                        }
                    }, {
                        key: "_onProgress",
                        value: function() {}
                    }]), t
                }();
            e.default = s, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(22),
                l = r(s),
                f = function() {
                    function t(e) {
                        var n = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];
                        (0, o.default)(this, t), this.easing = r, this._value = e, this._targetValue = e, this._efIndex = l.default.addEF(function() {
                            return n._update()
                        })
                    }
                    return (0, u.default)(t, [{
                        key: "_update",
                        value: function() {
                            var t = 1e-4;
                            this._checkLimit(), this._value += (this._targetValue - this._value) * this.easing, Math.abs(this._targetValue - this._value) < t && (this._value = this._targetValue)
                        }
                    }, {
                        key: "setTo",
                        value: function(t) {
                            this._targetValue = this._value = t
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            this._targetValue += t
                        }
                    }, {
                        key: "limit",
                        value: function(t, e) {
                            return t > e ? void this.limit(e, t) : (this._min = t, this._max = e, void this._checkLimit())
                        }
                    }, {
                        key: "_checkLimit",
                        value: function() {
                            void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            l.default.removeEF(this._efIndex)
                        }
                    }, {
                        key: "value",
                        set: function(t) {
                            this._targetValue = t
                        },
                        get: function() {
                            return this._value
                        }
                    }, {
                        key: "targetValue",
                        get: function() {
                            return this._targetValue
                        }
                    }]), t
                }();
            e.default = f, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            e.__esModule = !0;
            var i = n(112),
                o = r(i),
                a = n(111),
                u = r(a),
                s = "function" == typeof u.default && "symbol" == typeof o.default ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof u.default && t.constructor === u.default ? "symbol" : typeof t
                };
            e.default = "function" == typeof u.default && "symbol" === s(o.default) ? function(t) {
                return "undefined" == typeof t ? "undefined" : s(t)
            } : function(t) {
                return t && "function" == typeof u.default && t.constructor === u.default ? "symbol" : "undefined" == typeof t ? "undefined" : s(t)
            }
        }, function(t, e) {
            t.exports = function(t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        }, function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, function(t, e) {
            t.exports = {}
        }, function(t, e) {
            t.exports = !0
        }, function(t, e, n) {
            var r = n(24),
                i = n(131),
                o = n(38),
                a = n(45)("IE_PROTO"),
                u = function() {},
                s = "prototype",
                l = function() {
                    var t, e = n(61)("iframe"),
                        r = o.length,
                        i = ">";
                    for (e.style.display = "none", n(124).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + i), t.close(), l = t.F; r--;) delete l[s][o[r]];
                    return l()
                };
            t.exports = Object.create || function(t, e) {
                var n;
                return null !== t ? (u[s] = r(t), n = new u, u[s] = null, n[a] = t) : n = l(), void 0 === e ? n : i(n, e)
            }
        }, function(t, e, n) {
            var r = n(43),
                i = n(28),
                o = n(13),
                a = n(48),
                u = n(17),
                s = n(62),
                l = Object.getOwnPropertyDescriptor;
            e.f = n(16) ? l : function(t, e) {
                if (t = o(t), e = a(e, !0), s) try {
                    return l(t, e)
                } catch (n) {}
                return u(t, e) ? i(!r.f.call(t, e), t[e]) : void 0
            }
        }, function(t, e) {
            e.f = {}.propertyIsEnumerable
        }, function(t, e, n) {
            var r = n(18).f,
                i = n(17),
                o = n(21)("toStringTag");
            t.exports = function(t, e, n) {
                t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                    configurable: !0,
                    value: e
                })
            }
        }, function(t, e, n) {
            var r = n(46)("keys"),
                i = n(29);
            t.exports = function(t) {
                return r[t] || (r[t] = i(t))
            }
        }, function(t, e, n) {
            var r = n(12),
                i = "__core-js_shared__",
                o = r[i] || (r[i] = {});
            t.exports = function(t) {
                return o[t] || (o[t] = {})
            }
        }, function(t, e) {
            var n = Math.ceil,
                r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
            }
        }, function(t, e, n) {
            var r = n(26);
            t.exports = function(t, e) {
                if (!r(t)) return t;
                var n, i;
                if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
                if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function(t, e, n) {
            var r = n(12),
                i = n(9),
                o = n(40),
                a = n(50),
                u = n(18).f;
            t.exports = function(t) {
                var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
                "_" == t.charAt(0) || t in e || u(e, t, {
                    value: a.f(t)
                })
            }
        }, function(t, e, n) {
            e.f = n(21)
        }, function(t, e) {
            t.exports = "// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"
        }, function(t, e) {
            t.exports = "// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}"
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(3),
                l = r(s),
                f = n(155),
                c = r(f),
                h = void 0,
                d = 131072,
                p = 7,
                _ = 31,
                v = function() {
                    function t(e) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            r = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                        if ((0, o.default)(this, t), h = l.default.gl, r) return void(this.texture = e);
                        var i = e.length > 6;
                        e[0].mipmapCount && (i = e[0].mipmapCount > 1), this.texture = h.createTexture(), this.magFilter = n.magFilter || h.LINEAR, this.minFilter = n.minFilter || h.LINEAR_MIPMAP_LINEAR, this.wrapS = n.wrapS || h.CLAMP_TO_EDGE, this.wrapT = n.wrapT || h.CLAMP_TO_EDGE, i || this.minFilter != h.LINEAR_MIPMAP_LINEAR || (this.minFilter = h.LINEAR), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture);
                        var a = [h.TEXTURE_CUBE_MAP_POSITIVE_X, h.TEXTURE_CUBE_MAP_NEGATIVE_X, h.TEXTURE_CUBE_MAP_POSITIVE_Y, h.TEXTURE_CUBE_MAP_NEGATIVE_Y, h.TEXTURE_CUBE_MAP_POSITIVE_Z, h.TEXTURE_CUBE_MAP_NEGATIVE_Z],
                            u = 1,
                            s = 0;
                        if (u = e.length / 6, this.numLevels = u, i)
                            for (var f = 0; 6 > f; f++)
                                for (var c = 0; u > c; c++) h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), s = f * u + c, e[s].shape ? h.texImage2D(a[f], c, h.RGBA, e[s].shape[0], e[s].shape[1], 0, h.RGBA, h.FLOAT, e[s].data) : h.texImage2D(a[f], c, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[s]), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter);
                        else {
                            for (var d = 0, p = 0; 6 > p; p++) d = p * u, h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), e[d].shape ? h.texImage2D(a[p], 0, h.RGBA, e[d].shape[0], e[d].shape[1], 0, h.RGBA, h.FLOAT, e[d].data) : h.texImage2D(a[p], 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[d]), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter);
                            h.generateMipmap(h.TEXTURE_CUBE_MAP)
                        }
                        h.bindTexture(h.TEXTURE_CUBE_MAP, null)
                    }
                    return (0, u.default)(t, [{
                        key: "bind",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                            l.default.shader && (h.activeTexture(h.TEXTURE0 + t), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture), h.uniform1i(l.default.shader.uniformTextures[t], t), this._bindIndex = t)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            h.bindTexture(h.TEXTURE_CUBE_MAP, null)
                        }
                    }]), t
                }();
            v.parseDDS = function(t) {
                var e = (0, c.default)(t),
                    n = e.flags,
                    r = new Int32Array(t, 0, _),
                    i = 1;
                n & d && (i = Math.max(1, r[p]));
                var o = e.images.map(function(e) {
                    var n = new Float32Array(t.slice(e.offset, e.offset + e.length));
                    return {
                        data: n,
                        shape: e.shape,
                        mipmapCount: i
                    }
                });
                return new v(o)
            }, e.default = v, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(5),
                d = r(h),
                p = n(32),
                _ = r(p),
                v = n(8),
                m = r(v),
                x = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = (0, c.default)(this, (0, o.default)(e).call(this)),
                            n = m.default.vec3.clone([0, 0, 15]),
                            r = m.default.vec3.create(),
                            i = m.default.vec3.clone([0, -1, 0]);
                        return t.lookAt(n, r, i), t.ortho(1, -1, 1, -1), t
                    }
                    return (0, d.default)(e, t), (0, l.default)(e, [{
                        key: "setBoundary",
                        value: function(t, e, n, r) {
                            var i = arguments.length <= 4 || void 0 === arguments[4] ? .1 : arguments[4],
                                o = arguments.length <= 5 || void 0 === arguments[5] ? 100 : arguments[5];
                            this.ortho(t, e, n, r, i, o)
                        }
                    }, {
                        key: "ortho",
                        value: function(t, e, n, r) {
                            var i = arguments.length <= 4 || void 0 === arguments[4] ? .1 : arguments[4],
                                o = arguments.length <= 5 || void 0 === arguments[5] ? 100 : arguments[5];
                            this.left = t, this.right = e, this.top = n, this.bottom = r, m.default.mat4.ortho(this._projection, t, e, n, r, i, o)
                        }
                    }]), e
                }(_.default);
            e.default = x, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(8),
                l = r(s),
                f = (l.default.mat4, l.default.vec3),
                c = f.create(),
                h = f.create(),
                d = f.create(),
                p = f.create(),
                _ = f.create(),
                v = f.create(),
                m = f.create(),
                x = f.create(),
                g = function() {
                    function t(e, n) {
                        (0, o.default)(this, t), this.origin = f.clone(e), this.direction = f.clone(n)
                    }
                    return (0, u.default)(t, [{
                        key: "at",
                        value: function(t) {
                            return f.copy(p, this.direction), f.scale(p, p, t), f.add(p, p, this.origin), p
                        }
                    }, {
                        key: "lookAt",
                        value: function(t) {
                            f.sub(this.direction, t, this.origin), f.normalize(this.origin, this.origin)
                        }
                    }, {
                        key: "closestPointToPoint",
                        value: function(t) {
                            var e = f.create();
                            f.sub(t, this.origin);
                            var n = f.dot(e, this.direction);
                            return 0 > n ? f.clone(this.origin) : (f.copy(e, this.direction), f.scale(e, e, n), f.add(e, e, this.origin), e)
                        }
                    }, {
                        key: "distanceToPoint",
                        value: function(t) {
                            return Math.sqrt(this.distanceSqToPoint(t))
                        }
                    }, {
                        key: "distanceSqToPoint",
                        value: function(t) {
                            var e = f.create();
                            f.sub(e, t, this.origin);
                            var n = f.dot(e, this.direction);
                            return 0 > n ? f.squaredDistance(this.origin, t) : (f.copy(e, this.direction), f.scale(e, e, n), f.add(e, e, this.origin), f.squaredDistance(e, t))
                        }
                    }, {
                        key: "intersectsSphere",
                        value: function(t, e) {
                            return this.distanceToPoint(t) <= e
                        }
                    }, {
                        key: "intersectSphere",
                        value: function(t, e) {
                            var n = f.create();
                            f.sub(n, t, this.origin);
                            var r = f.dot(n, this.direction),
                                i = f.dot(n, n) - r * r,
                                o = e * e;
                            if (i > o) return null;
                            var a = Math.sqrt(o - i),
                                u = r - a,
                                s = r + a;
                            return 0 > u && 0 > s ? null : 0 > u ? this.at(s) : this.at(u)
                        }
                    }, {
                        key: "distanceToPlane",
                        value: function(t, e) {
                            f.dot(e, this.direction)
                        }
                    }, {
                        key: "intersectTriangle",
                        value: function(t, e, n) {
                            var r = arguments.length <= 3 || void 0 === arguments[3] || arguments[3];
                            f.copy(c, t), f.copy(h, e), f.copy(d, n), f.sub(_, h, c), f.sub(v, d, c), f.cross(m, _, v);
                            var i = f.dot(this.direction, m),
                                o = void 0;
                            if (i > 0) {
                                if (r) return null;
                                o = 1
                            } else {
                                if (!(0 > i)) return null;
                                o = -1, i = -i
                            }
                            f.sub(x, this.origin, c), f.cross(v, x, v);
                            var a = o * f.dot(this.direction, v);
                            if (0 > a) return null;
                            f.cross(_, _, x);
                            var u = o * f.dot(this.direction, _);
                            if (0 > u) return null;
                            if (a + u > i) return null;
                            var s = -o * f.dot(x, m);
                            return 0 > s ? null : this.at(s / i)
                        }
                    }]), t
                }();
            e.default = g, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(8),
                l = function() {
                    function t() {
                        (0, o.default)(this, t), this._needUpdate = !0, this._x = 0, this._y = 0, this._z = 0, this._sx = 1, this._sy = 1, this._sz = 1, this._rx = 0, this._ry = 0, this._rz = 0, this._position = s.vec3.create(), this._scale = s.vec3.fromValues(1, 1, 1), this._rotation = s.vec3.create(), this._matrix = s.mat4.create(), this._matrixRotation = s.mat4.create(), this._matrixScale = s.mat4.create(), this._matrixTranslation = s.mat4.create(), this._matrixQuaternion = s.mat4.create(), this._quat = s.quat.create()
                    }
                    return (0, u.default)(t, [{
                        key: "_update",
                        value: function() {
                            s.vec3.set(this._scale, this._sx, this._sy, this._sz), s.vec3.set(this._rotation, this._rx, this._ry, this._rz), s.vec3.set(this._position, this._x, this._y, this._z), s.mat4.identity(this._matrixTranslation, this._matrixTranslation), s.mat4.identity(this._matrixScale, this._matrixScale), s.mat4.identity(this._matrixRotation, this._matrixRotation), s.mat4.rotateX(this._matrixRotation, this._matrixRotation, this._rx), s.mat4.rotateY(this._matrixRotation, this._matrixRotation, this._ry), s.mat4.rotateZ(this._matrixRotation, this._matrixRotation, this._rz), s.mat4.fromQuat(this._matrixQuaternion, this._quat), s.mat4.mul(this._matrixRotation, this._matrixQuaternion, this._matrixRotation), s.mat4.scale(this._matrixScale, this._matrixScale, this._scale), s.mat4.translate(this._matrixTranslation, this._matrixTranslation, this._position), s.mat4.mul(this._matrix, this._matrixTranslation, this._matrixRotation), s.mat4.mul(this._matrix, this._matrix, this._matrixScale), this._needUpdate = !1
                        }
                    }, {
                        key: "setRotationFromQuaternion",
                        value: function(t) {
                            s.quat.copy(this._quat, t), this._needUpdate = !0
                        }
                    }, {
                        key: "matrix",
                        get: function() {
                            return this._needUpdate && this._update(), this._matrix
                        }
                    }, {
                        key: "x",
                        get: function() {
                            return this._x
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._x = t
                        }
                    }, {
                        key: "y",
                        get: function() {
                            return this._y
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._y = t
                        }
                    }, {
                        key: "z",
                        get: function() {
                            return this._z
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._z = t
                        }
                    }, {
                        key: "scaleX",
                        get: function() {
                            return this._sx
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._sx = t
                        }
                    }, {
                        key: "scaleY",
                        get: function() {
                            return this._sy
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._sy = t
                        }
                    }, {
                        key: "scaleZ",
                        get: function() {
                            return this._sz
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._sz = t
                        }
                    }, {
                        key: "rotationX",
                        get: function() {
                            return this._rx
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._rx = t
                        }
                    }, {
                        key: "rotationY",
                        get: function() {
                            return this._ry
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._ry = t
                        }
                    }, {
                        key: "rotationZ",
                        get: function() {
                            return this._rz
                        },
                        set: function(t) {
                            this._needUpdate = !0, this._rz = t
                        }
                    }]), t
                }();
            e.default = l, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(35),
                l = r(s),
                f = n(22),
                c = r(f),
                h = n(8),
                d = r(h),
                p = function(t, e) {
                    var n = e || {};
                    return t.touches ? (n.x = t.touches[0].pageX, n.y = t.touches[0].pageY) : (n.x = t.clientX, n.y = t.clientY), n
                },
                _ = function() {
                    function t(e) {
                        var n = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
                            i = arguments.length <= 2 || void 0 === arguments[2] ? 500 : arguments[2];
                        (0, o.default)(this, t), this._target = e, this._fireEvent = 0, this._listenerTarget = r, this._mouse = {}, this._preMouse = {}, this.center = d.default.vec3.create(), this._up = d.default.vec3.fromValues(0, 1, 0), this.radius = new l.default(i), this.position = d.default.vec3.fromValues(0, 0, this.radius.value), this.positionOffset = d.default.vec3.create(), this._rx = new l.default(0), this._rx.limit(-Math.PI / 2, Math.PI / 2), this._ry = new l.default(0), this._preRX = 0, this._preRY = 0, this._isLockZoom = !1, this._isLockRotation = 0, this._isInvert = !1, this.sensitivity = 1, this._listenerTarget.addEventListener("mousewheel", function(t) {
                            //return n._onWheel(t)
                        }), this._listenerTarget.addEventListener("DOMMouseScroll", function(t) {
                            //return n._onWheel(t)
                        }), this._listenerTarget.addEventListener("mousedown", function(t) {
                            return n._onDown(t)
                        }), this._listenerTarget.addEventListener("touchstart", function(t) {
                            return n._onDown(t)
                        }), this._listenerTarget.addEventListener("mousemove", function(t) {
                            return n._onMove(t)
                        }), this._listenerTarget.addEventListener("touchmove", function(t) {
                            return n._onMove(t)
                        }), window.addEventListener("touchend", function() {
                            return n._onUp()
                        }), window.addEventListener("mouseup", function() {
//                            return n._onUp()
                        }), c.default.addEF(function() {
                            return n._loop()
                        })
                    }
                    return (0, u.default)(t, [{
                        key: "lock",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            this._isLockZoom = t, this._isLockRotation = t
                        }
                    }, {
                        key: "lockZoom",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            this._isLockZoom = t
                        }
                    }, {
                        key: "lockRotation",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            this._isLockRotation = t
                        }
                    }, {
                        key: "inverseControl",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            this._isInvert = t
                        }
                    }, {
                        key: "_onDown",
                        value: function(t) {
                            this._isLockRotation || (this._isMouseDown = !0, p(t, this._mouse), p(t, this._preMouse), this._preRX = this._rx.targetValue, this._preRY = this._ry.targetValue)
                        }
                    }, {
                        key: "_onMove",
                        value: function(t) {
                            // if (!this._isLockRotation && (p(t, this._mouse), t.touches && t.preventDefault(), this._isMouseDown)) {
                            //     var e = -(this._mouse.x - this._preMouse.x);
                            //     this._isInvert && (e *= -1), this._ry.value = this._preRY - .01 * e * this.sensitivity;
                            //     var n = -(this._mouse.y - this._preMouse.y);
                            //     this._isInvert && (n *= -1), this._rx.value = this._preRX - .01 * n * this.sensitivity
                            // }

                            (this._isMouseDown = !0, p(t, this._mouse), p(t, this._preMouse), this._preRX = this._rx.targetValue, this._preRY = this._ry.targetValue)
                            if (!this._isLockRotation && (p(t, this._mouse), t.touches && t.preventDefault(), this._isMouseDown)) {

                                var e = -(this._mouse.x - window.innerWidth / 2);
                                this._isInvert && (e *= -1), this._ry.value = e * 0.0035;
                                var n = -(this._mouse.y - window.innerHeight / 2);
                                this._isInvert && (n *= -1), this._rx.value = n * 0.0035;
                            }                            
                        }
                    }, {
                        key: "_onUp",
                        value: function() {
                            this._isLockRotation || (this._isMouseDown = !0)
                        }
                    }, {
                        key: "_onWheel",
                        value: function(t) {
                            if (!this._isLockZoom) {
                                var e = t.wheelDelta,
                                    n = t.detail,
                                    r = 0;
                                r = n ? e ? e / n / 40 * n > 0 ? 1 : -1 : -n / 3 : e / 120, this.radius.add(2 * -r)
                            }
                        }
                    }, {
                        key: "_loop",
                        value: function(e) {
                            // var r = (new Date).getTime()
                            // this._fireEvent += 0.02;
                            // if (this._fireEvent >= 5) {
                            //     this._rx.value = Math.sin(r * 0.01);
                            //     this._ry.value = Math.cos(r * 0.01);
                            //     this._fireEvent = 0;
                            // }

                            this._updatePosition(), this._target && this._updateCamera()
                        }
                    }, {
                        key: "_updatePosition",
                        value: function() {
                            this.position[1] = Math.sin(this._rx.value) * this.radius.value;
                            var t = Math.cos(this._rx.value) * this.radius.value;
                            this.position[0] = Math.cos(this._ry.value + .5 * Math.PI) * t, 
                            this.position[2] = Math.sin(this._ry.value + .5 * Math.PI) * t, 
                            d.default.vec3.add(this.position, this.position, this.positionOffset)
                        }
                    }, {
                        key: "_updateCamera",
                        value: function() {
                            this._target.lookAt(this.position, this.center, this._up)
                        }
                    }, {
                        key: "rx",
                        get: function() {
                            return this._rx
                        }
                    }, {
                        key: "ry",
                        get: function() {
                            return this._ry
                        }
                    }]), t
                }();
            e.default = _, t.exports = e.default
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t, e, n) {
                return void 0 === e.cacheAttribLoc && (e.cacheAttribLoc = {}), void 0 === e.cacheAttribLoc[n] && (e.cacheAttribLoc[n] = t.getAttribLocation(e, n)), e.cacheAttribLoc[n]
            }, t.exports = e.default
        }, function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        }, function(t, e, n) {
            var r = n(120);
            t.exports = function(t, e, n) {
                if (r(t), void 0 === e) return t;
                switch (n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        };
                    case 2:
                        return function(n, r) {
                            return t.call(e, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return t.call(e, n, r, i)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }, function(t, e, n) {
            var r = n(26),
                i = n(12).document,
                o = r(i) && r(i.createElement);
            t.exports = function(t) {
                return o ? i.createElement(t) : {}
            }
        }, function(t, e, n) {
            t.exports = !n(16) && !n(25)(function() {
                return 7 != Object.defineProperty(n(61)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(t, e, n) {
            "use strict";
            var r = n(40),
                i = n(19),
                o = n(69),
                a = n(20),
                u = n(17),
                s = n(39),
                l = n(127),
                f = n(44),
                c = n(66),
                h = n(21)("iterator"),
                d = !([].keys && "next" in [].keys()),
                p = "@@iterator",
                _ = "keys",
                v = "values",
                m = function() {
                    return this
                };
            t.exports = function(t, e, n, x, g, b, M) {
                l(n, e, x);
                var y, E, S, w = function(t) {
                        if (!d && t in F) return F[t];
                        switch (t) {
                            case _:
                                return function() {
                                    return new n(this, t)
                                };
                            case v:
                                return function() {
                                    return new n(this, t)
                                }
                        }
                        return function() {
                            return new n(this, t)
                        }
                    },
                    T = e + " Iterator",
                    A = g == v,
                    I = !1,
                    F = t.prototype,
                    R = F[h] || F[p] || g && F[g],
                    D = R || w(g),
                    P = g ? A ? w("entries") : D : void 0,
                    O = "Array" == e ? F.entries || R : R;
                if (O && (S = c(O.call(new t)), S !== Object.prototype && (f(S, T, !0), r || u(S, h) || a(S, h, m))), A && R && R.name !== v && (I = !0, D = function() {
                        return R.call(this)
                    }), r && !M || !d && !I && F[h] || a(F, h, D), s[e] = D, s[T] = m, g)
                    if (y = {
                            values: A ? D : w(v),
                            keys: b ? D : w(_),
                            entries: P
                        }, M)
                        for (E in y) E in F || o(F, E, y[E]);
                    else i(i.P + i.F * (d || I), e, y);
                return y
            }
        }, function(t, e, n) {
            var r = n(67),
                i = n(38).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return r(t, i)
            }
        }, function(t, e) {
            e.f = Object.getOwnPropertySymbols
        }, function(t, e, n) {
            var r = n(17),
                i = n(70),
                o = n(45)("IE_PROTO"),
                a = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
        }, function(t, e, n) {
            var r = n(17),
                i = n(13),
                o = n(122)(!1),
                a = n(45)("IE_PROTO");
            t.exports = function(t, e) {
                var n, u = i(t),
                    s = 0,
                    l = [];
                for (n in u) n != a && r(u, n) && l.push(n);
                for (; e.length > s;) r(u, n = e[s++]) && (~o(l, n) || l.push(n));
                return l
            }
        }, function(t, e, n) {
            var r = n(19),
                i = n(9),
                o = n(25);
            t.exports = function(t, e) {
                var n = (i.Object || {})[t] || Object[t],
                    a = {};
                a[t] = e(n), r(r.S + r.F * o(function() {
                    n(1)
                }), "Object", a)
            }
        }, function(t, e, n) {
            t.exports = n(20)
        }, function(t, e, n) {
            var r = n(37);
            t.exports = function(t) {
                return Object(r(t))
            }
        }, function(t, e, n) {
            var r = n(10),
                i = {};
            i.create = function() {
                var t = new r.ARRAY_TYPE(9);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, i.fromMat4 = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(9);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
            }, i.fromValues = function(t, e, n, i, o, a, u, s, l) {
                var f = new r.ARRAY_TYPE(9);
                return f[0] = t, f[1] = e, f[2] = n, f[3] = i, f[4] = o, f[5] = a, f[6] = u, f[7] = s, f[8] = l, f
            }, i.set = function(t, e, n, r, i, o, a, u, s, l) {
                return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = u, t[7] = s, t[8] = l, t
            }, i.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, i.transpose = function(t, e) {
                if (t === e) {
                    var n = e[1],
                        r = e[2],
                        i = e[5];
                    t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i
                } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
                return t
            }, i.invert = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    u = e[5],
                    s = e[6],
                    l = e[7],
                    f = e[8],
                    c = f * a - u * l,
                    h = -f * o + u * s,
                    d = l * o - a * s,
                    p = n * c + r * h + i * d;
                return p ? (p = 1 / p, t[0] = c * p, t[1] = (-f * r + i * l) * p, t[2] = (u * r - i * a) * p, t[3] = h * p, t[4] = (f * n - i * s) * p, t[5] = (-u * n + i * o) * p, t[6] = d * p, t[7] = (-l * n + r * s) * p, t[8] = (a * n - r * o) * p, t) : null
            }, i.adjoint = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    u = e[5],
                    s = e[6],
                    l = e[7],
                    f = e[8];
                return t[0] = a * f - u * l, t[1] = i * l - r * f, t[2] = r * u - i * a, t[3] = u * s - o * f, t[4] = n * f - i * s, t[5] = i * o - n * u, t[6] = o * l - a * s, t[7] = r * s - n * l, t[8] = n * a - r * o, t
            }, i.determinant = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2],
                    i = t[3],
                    o = t[4],
                    a = t[5],
                    u = t[6],
                    s = t[7],
                    l = t[8];
                return e * (l * o - a * s) + n * (-l * i + a * u) + r * (s * i - o * u)
            }, i.multiply = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = e[6],
                    f = e[7],
                    c = e[8],
                    h = n[0],
                    d = n[1],
                    p = n[2],
                    _ = n[3],
                    v = n[4],
                    m = n[5],
                    x = n[6],
                    g = n[7],
                    b = n[8];
                return t[0] = h * r + d * a + p * l, t[1] = h * i + d * u + p * f, t[2] = h * o + d * s + p * c, t[3] = _ * r + v * a + m * l, t[4] = _ * i + v * u + m * f, t[5] = _ * o + v * s + m * c, t[6] = x * r + g * a + b * l, t[7] = x * i + g * u + b * f, t[8] = x * o + g * s + b * c, t
            }, i.mul = i.multiply, i.translate = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = e[6],
                    f = e[7],
                    c = e[8],
                    h = n[0],
                    d = n[1];
                return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = u, t[5] = s, t[6] = h * r + d * a + l, t[7] = h * i + d * u + f, t[8] = h * o + d * s + c, t
            }, i.rotate = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = e[6],
                    f = e[7],
                    c = e[8],
                    h = Math.sin(n),
                    d = Math.cos(n);
                return t[0] = d * r + h * a, t[1] = d * i + h * u, t[2] = d * o + h * s, t[3] = d * a - h * r, t[4] = d * u - h * i, t[5] = d * s - h * o, t[6] = l, t[7] = f, t[8] = c, t
            }, i.scale = function(t, e, n) {
                var r = n[0],
                    i = n[1];
                return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
            }, i.fromTranslation = function(t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
            }, i.fromRotation = function(t, e) {
                var n = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, i.fromScaling = function(t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, i.fromMat2d = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
            }, i.fromQuat = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = n + n,
                    u = r + r,
                    s = i + i,
                    l = n * a,
                    f = r * a,
                    c = r * u,
                    h = i * a,
                    d = i * u,
                    p = i * s,
                    _ = o * a,
                    v = o * u,
                    m = o * s;
                return t[0] = 1 - c - p, t[3] = f - m, t[6] = h + v, t[1] = f + m, t[4] = 1 - l - p, t[7] = d - _, t[2] = h - v, t[5] = d + _, t[8] = 1 - l - c, t
            }, i.normalFromMat4 = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    u = e[5],
                    s = e[6],
                    l = e[7],
                    f = e[8],
                    c = e[9],
                    h = e[10],
                    d = e[11],
                    p = e[12],
                    _ = e[13],
                    v = e[14],
                    m = e[15],
                    x = n * u - r * a,
                    g = n * s - i * a,
                    b = n * l - o * a,
                    M = r * s - i * u,
                    y = r * l - o * u,
                    E = i * l - o * s,
                    S = f * _ - c * p,
                    w = f * v - h * p,
                    T = f * m - d * p,
                    A = c * v - h * _,
                    I = c * m - d * _,
                    F = h * m - d * v,
                    R = x * F - g * I + b * A + M * T - y * w + E * S;
                return R ? (R = 1 / R, t[0] = (u * F - s * I + l * A) * R, t[1] = (s * T - a * F - l * w) * R, t[2] = (a * I - u * T + l * S) * R, t[3] = (i * I - r * F - o * A) * R, t[4] = (n * F - i * T + o * w) * R, t[5] = (r * T - n * I - o * S) * R, t[6] = (_ * E - v * y + m * M) * R, t[7] = (v * b - p * E - m * g) * R, t[8] = (p * y - _ * b + m * x) * R, t) : null
            }, i.str = function(t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
            }, i.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t
            }, i.sub = i.subtract, i.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t
            }, i.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t
            }, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    u = t[4],
                    s = t[5],
                    l = t[6],
                    f = t[7],
                    c = t[8],
                    h = e[0],
                    d = e[1],
                    p = e[2],
                    _ = e[3],
                    v = e[4],
                    m = e[5],
                    x = t[6],
                    g = e[7],
                    b = e[8];
                return Math.abs(n - h) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(i - d) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - p) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(a - _) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(_)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(s - m) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(l - x) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) && Math.abs(f - g) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(g)) && Math.abs(c - b) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(b))
            }, t.exports = i
        }, function(t, e, n) {
            var r = n(10),
                i = {};
            i.create = function() {
                var t = new r.ARRAY_TYPE(3);
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(3);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
            }, i.fromValues = function(t, e, n) {
                var i = new r.ARRAY_TYPE(3);
                return i[0] = t, i[1] = e, i[2] = n, i
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
            }, i.set = function(t, e, n, r) {
                return t[0] = e, t[1] = n, t[2] = r, t
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t
            }, i.sub = i.subtract, i.multiply = function(t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t
            }, i.mul = i.multiply, i.divide = function(t, e, n) {
                return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t
            }, i.div = i.divide, i.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
            }, i.floor = function(t, e) {
                return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
            }, i.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t
            }, i.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t
            }, i.round = function(t, e) {
                return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
            }, i.scale = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
            }, i.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t
            }, i.distance = function(t, e) {
                var n = e[0] - t[0],
                    r = e[1] - t[1],
                    i = e[2] - t[2];
                return Math.sqrt(n * n + r * r + i * i)
            }, i.dist = i.distance, i.squaredDistance = function(t, e) {
                var n = e[0] - t[0],
                    r = e[1] - t[1],
                    i = e[2] - t[2];
                return n * n + r * r + i * i
            }, i.sqrDist = i.squaredDistance, i.length = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2];
                return Math.sqrt(e * e + n * n + r * r)
            }, i.len = i.length, i.squaredLength = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2];
                return e * e + n * n + r * r
            }, i.sqrLen = i.squaredLength, i.negate = function(t, e) {
                return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
            }, i.inverse = function(t, e) {
                return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
            }, i.normalize = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = n * n + r * r + i * i;
                return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
            }, i.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }, i.cross = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = n[0],
                    u = n[1],
                    s = n[2];
                return t[0] = i * s - o * u, t[1] = o * a - r * s, t[2] = r * u - i * a, t
            }, i.lerp = function(t, e, n, r) {
                var i = e[0],
                    o = e[1],
                    a = e[2];
                return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t
            }, i.hermite = function(t, e, n, r, i, o) {
                var a = o * o,
                    u = a * (2 * o - 3) + 1,
                    s = a * (o - 2) + o,
                    l = a * (o - 1),
                    f = a * (3 - 2 * o);
                return t[0] = e[0] * u + n[0] * s + r[0] * l + i[0] * f, t[1] = e[1] * u + n[1] * s + r[1] * l + i[1] * f, t[2] = e[2] * u + n[2] * s + r[2] * l + i[2] * f, t
            }, i.bezier = function(t, e, n, r, i, o) {
                var a = 1 - o,
                    u = a * a,
                    s = o * o,
                    l = u * a,
                    f = 3 * o * u,
                    c = 3 * s * a,
                    h = s * o;
                return t[0] = e[0] * l + n[0] * f + r[0] * c + i[0] * h, t[1] = e[1] * l + n[1] * f + r[1] * c + i[1] * h, t[2] = e[2] * l + n[2] * f + r[2] * c + i[2] * h, t
            }, i.random = function(t, e) {
                e = e || 1;
                var n = 2 * r.RANDOM() * Math.PI,
                    i = 2 * r.RANDOM() - 1,
                    o = Math.sqrt(1 - i * i) * e;
                return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = i * e, t
            }, i.transformMat4 = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = n[3] * r + n[7] * i + n[11] * o + n[15];
                return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t
            }, i.transformMat3 = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2];
                return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t
            }, i.transformQuat = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = n[0],
                    u = n[1],
                    s = n[2],
                    l = n[3],
                    f = l * r + u * o - s * i,
                    c = l * i + s * r - a * o,
                    h = l * o + a * i - u * r,
                    d = -a * r - u * i - s * o;
                return t[0] = f * l + d * -a + c * -s - h * -u, t[1] = c * l + d * -u + h * -a - f * -s, t[2] = h * l + d * -s + f * -u - c * -a, t
            }, i.rotateX = function(t, e, n, r) {
                var i = [],
                    o = [];
                return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
            }, i.rotateY = function(t, e, n, r) {
                var i = [],
                    o = [];
                return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
            }, i.rotateZ = function(t, e, n, r) {
                var i = [],
                    o = [];
                return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
            }, i.forEach = function() {
                var t = i.create();
                return function(e, n, r, i, o, a) {
                    var u, s;
                    for (n || (n = 3), r || (r = 0), s = i ? Math.min(i * n + r, e.length) : e.length, u = r; s > u; u += n) t[0] = e[u], t[1] = e[u + 1], t[2] = e[u + 2], o(t, t, a), e[u] = t[0], e[u + 1] = t[1], e[u + 2] = t[2];
                    return e
                }
            }(), i.angle = function(t, e) {
                var n = i.fromValues(t[0], t[1], t[2]),
                    r = i.fromValues(e[0], e[1], e[2]);
                i.normalize(n, n), i.normalize(r, r);
                var o = i.dot(n, r);
                return o > 1 ? 0 : Math.acos(o)
            }, i.str = function(t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = e[0],
                    u = e[1],
                    s = e[2];
                return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s))
            }, t.exports = i
        }, function(t, e, n) {
            var r = n(10),
                i = {};
            i.create = function() {
                var t = new r.ARRAY_TYPE(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(4);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
            }, i.fromValues = function(t, e, n, i) {
                var o = new r.ARRAY_TYPE(4);
                return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
            }, i.set = function(t, e, n, r, i) {
                return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
            }, i.sub = i.subtract, i.multiply = function(t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t[3] = e[3] * n[3], t
            }, i.mul = i.multiply, i.divide = function(t, e, n) {
                return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t[3] = e[3] / n[3], t
            }, i.div = i.divide, i.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t
            }, i.floor = function(t, e) {
                return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t
            }, i.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t[3] = Math.min(e[3], n[3]), t
            }, i.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t[3] = Math.max(e[3], n[3]), t
            }, i.round = function(t, e) {
                return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t
            }, i.scale = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
            }, i.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
            }, i.distance = function(t, e) {
                var n = e[0] - t[0],
                    r = e[1] - t[1],
                    i = e[2] - t[2],
                    o = e[3] - t[3];
                return Math.sqrt(n * n + r * r + i * i + o * o)
            }, i.dist = i.distance, i.squaredDistance = function(t, e) {
                var n = e[0] - t[0],
                    r = e[1] - t[1],
                    i = e[2] - t[2],
                    o = e[3] - t[3];
                return n * n + r * r + i * i + o * o
            }, i.sqrDist = i.squaredDistance, i.length = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2],
                    i = t[3];
                return Math.sqrt(e * e + n * n + r * r + i * i)
            }, i.len = i.length, i.squaredLength = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2],
                    i = t[3];
                return e * e + n * n + r * r + i * i
            }, i.sqrLen = i.squaredLength, i.negate = function(t, e) {
                return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
            }, i.inverse = function(t, e) {
                return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t
            }, i.normalize = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = n * n + r * r + i * i + o * o;
                return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n * a, t[1] = r * a, t[2] = i * a, t[3] = o * a), t
            }, i.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }, i.lerp = function(t, e, n, r) {
                var i = e[0],
                    o = e[1],
                    a = e[2],
                    u = e[3];
                return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t[3] = u + r * (n[3] - u), t
            }, i.random = function(t, e) {
                return e = e || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), i.normalize(t, t), i.scale(t, t, e), t
            }, i.transformMat4 = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3];
                return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * a, t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * a, t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * a, t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * a, t
            }, i.transformQuat = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = n[0],
                    u = n[1],
                    s = n[2],
                    l = n[3],
                    f = l * r + u * o - s * i,
                    c = l * i + s * r - a * o,
                    h = l * o + a * i - u * r,
                    d = -a * r - u * i - s * o;
                return t[0] = f * l + d * -a + c * -s - h * -u, t[1] = c * l + d * -u + h * -a - f * -s, t[2] = h * l + d * -s + f * -u - c * -a, t[3] = e[3], t
            }, i.forEach = function() {
                var t = i.create();
                return function(e, n, r, i, o, a) {
                    var u, s;
                    for (n || (n = 4), r || (r = 0), s = i ? Math.min(i * n + r, e.length) : e.length, u = r; s > u; u += n) t[0] = e[u], t[1] = e[u + 1], t[2] = e[u + 2], t[3] = e[u + 3], o(t, t, a), e[u] = t[0], e[u + 1] = t[1], e[u + 2] = t[2], e[u + 3] = t[3];
                    return e
                }
            }(), i.str = function(t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    u = e[0],
                    s = e[1],
                    l = e[2],
                    f = e[3];
                return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - f) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(f))
            }, t.exports = i
        }, function(t, e) {
            t.exports = "// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}"
        }, function(t, e) {
            t.exports = "// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tvec3 pos      = aVertexPosition * scale;\n\tpos           += position;\n\tgl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\t\n\tvTextureCoord = aTextureCoord;\n\tvNormal       = normalize(uNormalMatrix * aNormal);\n}"
        }, function(t, e) {
            t.exports = "// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}"
        }, function(t, e) {
            t.exports = "// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n\tgl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\t\n\tvVertex = aVertexPosition;\n\tvNormal = aNormal;\n}"
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(8),
                l = r(s),
                f = n(3),
                c = r(f),
                h = n(7),
                d = r(h),
                p = n(31),
                _ = r(p),
                v = n(53),
                m = r(v),
                x = n(14),
                g = r(x),
                b = n(23),
                M = r(b),
                y = n(11),
                E = r(y),
                S = n(80),
                w = r(S),
                T = n(79),
                A = r(T),
                I = n(81),
                F = r(I),
                R = n(82),
                D = r(R),
                P = n(22),
                O = r(P),
                L = n(97),
                C = r(L),
                k = n(35),
                N = r(k),
                B = n(102),
                U = r(B),
                V = n(57),
                z = r(V),
                j = n(100),
                G = r(j),
                X = n(32),
                Y = r(X),
                H = n(54),
                q = r(H),
                W = n(33),
                Q = r(W),
                K = n(83),
                Z = r(K),
                J = n(55),
                $ = r(J),
                tt = n(56),
                et = r(tt),
                nt = n(34),
                rt = r(nt),
                it = n(96),
                ot = r(it),
                at = n(95),
                ut = r(at),
                st = n(86),
                lt = r(st),
                ft = n(84),
                ct = r(ft),
                ht = n(85),
                dt = r(ht),
                pt = n(87),
                _t = r(pt),
                vt = n(88),
                mt = r(vt),
                xt = n(90),
                gt = r(xt),
                bt = n(89),
                Mt = r(bt),
                yt = n(91),
                Et = r(yt),
                St = n(93),
                wt = r(St),
                Tt = n(94),
                At = r(Tt),
                It = n(92),
                Ft = r(It),
                Rt = n(101),
                Dt = r(Rt),
                Pt = function() {
                    function t() {
                        (0, o.default)(this, t), this.glm = l.default, this.GL = c.default, this.GLTool = c.default, this.GLShader = d.default, this.GLTexture = _.default, this.GLCubeTexture = m.default, this.Mesh = g.default, this.Geom = M.default, this.Batch = E.default, this.FrameBuffer = w.default, this.CubeFrameBuffer = A.default, this.Scheduler = O.default, this.EventDispatcher = C.default, this.EaseNumber = N.default, this.TweenNumber = U.default, this.Camera = Y.default, this.CameraOrtho = q.default, this.CameraPerspective = Q.default, this.Ray = $.default, this.CameraCube = Z.default, this.OrbitalControl = z.default, this.QuatRotation = G.default, this.BinaryLoader = rt.default, this.ObjLoader = ot.default, this.HDRLoader = ut.default, this.BatchCopy = lt.default, this.BatchAxis = ct.default, this.BatchBall = dt.default, this.BatchBall = dt.default, this.BatchLine = mt.default, this.BatchSkybox = gt.default, this.BatchSky = Mt.default, this.BatchDotsPlane = _t.default, this.Scene = Et.default, this.View = wt.default, this.View3D = At.default, this.Object3D = et.default, this.ShaderLibs = Dt.default, this.ShaderUtils = Ft.default, this.MultisampleFrameBuffer = F.default, this.TransformFeedbackObject = D.default;
                        for (var e in l.default) l.default[e] && (window[e] = l.default[e])
                    }
                    return (0, u.default)(t, [{
                        key: "log",
                        value: function() {
                            void(navigator.userAgent.indexOf("Chrome") > -1);
                            for (var t in this) this[t] && void 0
                        }
                    }]), t
                }(),
                Ot = new Pt;
            e.default = Ot, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(3),
                l = r(s),
                f = n(53),
                c = r(f),
                h = void 0,
                d = function() {
                    function t(e) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        (0, o.default)(this, t), h = l.default.gl, this._size = e, this.magFilter = n.magFilter || h.LINEAR, this.minFilter = n.minFilter || h.LINEAR, this.wrapS = n.wrapS || h.CLAMP_TO_EDGE, this.wrapT = n.wrapT || h.CLAMP_TO_EDGE, this._init()
                    }
                    return (0, u.default)(t, [{
                        key: "_init",
                        value: function() {
                            this.texture = h.createTexture(), this.glTexture = new c.default(this.texture, {}, (!0)), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT);
                            for (var t = [h.TEXTURE_CUBE_MAP_POSITIVE_X, h.TEXTURE_CUBE_MAP_NEGATIVE_X, h.TEXTURE_CUBE_MAP_POSITIVE_Y, h.TEXTURE_CUBE_MAP_NEGATIVE_Y, h.TEXTURE_CUBE_MAP_POSITIVE_Z, h.TEXTURE_CUBE_MAP_NEGATIVE_Z], e = 0; e < t.length; e++) h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), h.texImage2D(t[e], 0, h.RGBA, this.width, this.height, 0, h.RGBA, h.FLOAT, null);
                            this._frameBuffers = [];
                            for (var n = 0; n < t.length; n++) {
                                var r = h.createFramebuffer();
                                h.bindFramebuffer(h.FRAMEBUFFER, r), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, t[n], this.texture, 0);
                                var i = h.checkFramebufferStatus(h.FRAMEBUFFER);
                                i !== h.FRAMEBUFFER_COMPLETE && void 0, this._frameBuffers.push(r)
                            }
                            h.bindFramebuffer(h.FRAMEBUFFER, null), h.bindRenderbuffer(h.RENDERBUFFER, null), h.bindTexture(h.TEXTURE_CUBE_MAP, null)
                        }
                    }, {
                        key: "bind",
                        value: function(t) {
                            l.default.viewport(0, 0, this.width, this.height), h.bindFramebuffer(h.FRAMEBUFFER, this._frameBuffers[t])
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            h.bindFramebuffer(h.FRAMEBUFFER, null), l.default.viewport(0, 0, l.default.width, l.default.height)
                        }
                    }, {
                        key: "getTexture",
                        value: function() {
                            return this.glTexture
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this._size
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this._size
                        }
                    }]), t
                }();
            e.default = d, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                return 0 !== t && !(t & t - 1)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1),
                a = r(o),
                u = n(2),
                s = r(u),
                l = n(3),
                f = r(l),
                c = n(31),
                h = r(c),
                d = void 0,
                p = void 0,
                _ = !1,
                v = void 0,
                m = function() {
                    return !!f.default.webgl2 || (v = f.default.getExtension("WEBGL_draw_buffers"), !!v)
                },
                x = function() {
                    function t(e, n) {
                        var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                            o = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        (0, a.default)(this, t), d = f.default.gl, p = f.default.checkExtension("WEBGL_depth_texture"), this.width = e, this.height = n, this._multipleTargets = o, this.magFilter = r.magFilter || d.LINEAR, this.minFilter = r.minFilter || d.LINEAR, this.wrapS = r.wrapS || d.CLAMP_TO_EDGE, this.wrapT = r.wrapT || d.CLAMP_TO_EDGE, this.useDepth = r.useDepth || !0, this.useStencil = r.useStencil || !1, this.texelType = r.type, i(this.width) && i(this.height) || (this.wrapS = this.wrapT = d.CLAMP_TO_EDGE, this.minFilter === d.LINEAR_MIPMAP_NEAREST && (this.minFilter = d.LINEAR)), _ || m(), this._init()
                    }
                    return (0, s.default)(t, [{
                        key: "_init",
                        value: function() {
                            var t = d.UNSIGNED_BYTE;
                            if (this.texelType && (t = this.texelType), this.texelType = t, this._textures = [], this._initTextures(), this.frameBuffer = d.createFramebuffer(), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer), f.default.webgl2) {
                                this.renderBufferDepth = d.createRenderbuffer(), d.bindRenderbuffer(d.RENDERBUFFER, this.renderBufferDepth), d.renderbufferStorage(d.RENDERBUFFER, d.DEPTH_COMPONENT16, this.width, this.height), d.framebufferRenderbuffer(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.RENDERBUFFER, this.renderBufferDepth);
                                for (var e = 0; e < this._textures.length; e++) d.framebufferTexture2D(d.DRAW_FRAMEBUFFER, d.COLOR_ATTACHMENT0 + e, d.TEXTURE_2D, this._textures[e].texture, 0);
                                d.drawBuffers([d.COLOR_ATTACHMENT0, d.COLOR_ATTACHMENT1, d.COLOR_ATTACHMENT2, d.COLOR_ATTACHMENT3])
                            } else {




                                for (var n = 0; n < this._textures.length; n++) d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0 + n, d.TEXTURE_2D, this._textures[n].texture, 0);
                                this._multipleTargets && v.drawBuffersWEBGL([v.COLOR_ATTACHMENT0_WEBGL, v.COLOR_ATTACHMENT1_WEBGL, v.COLOR_ATTACHMENT2_WEBGL, v.COLOR_ATTACHMENT3_WEBGL])





                            }
                            if (p && d.framebufferTexture2D(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.TEXTURE_2D, this.glDepthTexture.texture, 0), this.minFilter === d.LINEAR_MIPMAP_NEAREST)
                                for (var r = 0; r < this._textures.length; r++) d.bindTexture(d.TEXTURE_2D, this._textures[r].texture), d.generateMipmap(d.TEXTURE_2D);
                            var i = d.checkFramebufferStatus(d.FRAMEBUFFER);
                            i != d.FRAMEBUFFER_COMPLETE && void 0, d.bindTexture(d.TEXTURE_2D, null), d.bindRenderbuffer(d.RENDERBUFFER, null), d.bindFramebuffer(d.FRAMEBUFFER, null), this.clear()
                        }
                    }, {
                        key: "_initTextures",
                        value: function() {
                            for (var t = (this._multipleTargets ? 4 : 1, 0); 4 > t; t++) {
                                var e = this._createTexture();
                                this._textures.push(e)
                            }
                            p && (this.glDepthTexture = this._createTexture(d.DEPTH_COMPONENT, d.UNSIGNED_SHORT))
                        }
                    }, {
                        key: "_createTexture",
                        value: function(t, e) {
                            void 0 === t && (t = d.RGBA), void 0 === e && (e = this.texelType);
                            var n = d.createTexture(),
                                r = new h.default(n, (!0));
                            return d.bindTexture(d.TEXTURE_2D, n), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, this.magFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, this.minFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, this.wrapS), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, this.wrapT), d.texImage2D(d.TEXTURE_2D, 0, t, this.width, this.height, 0, t, e, null), d.bindTexture(d.TEXTURE_2D, null), r
                        }
                    }, {
                        key: "bind",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            t && f.default.viewport(0, 0, this.width, this.height), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            t && f.default.viewport(0, 0, f.default.width, f.default.height), d.bindFramebuffer(d.FRAMEBUFFER, null)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                                e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                                n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                                r = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
                            this.bind(), f.default.clear(t, e, n, r), this.unbind()
                        }
                    }, {
                        key: "getTexture",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                            return this._textures[t]
                        }
                    }, {
                        key: "getDepthTexture",
                        value: function() {
                            return this.glDepthTexture
                        }
                    }, {
                        key: "minFilter",
                        value: function(t) {
                            return t !== d.LINEAR && t !== d.NEAREST && t !== d.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = t, this)
                        }
                    }, {
                        key: "magFilter",
                        value: function(t) {
                            return t !== d.LINEAR && t !== d.NEAREST && t !== d.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = t, this)
                        }
                    }, {
                        key: "wrapS",
                        value: function(t) {
                            return t !== d.CLAMP_TO_EDGE && t !== d.REPEAT && t !== d.MIRRORED_REPEAT ? this : (this.wrapS = t, this)
                        }
                    }, {
                        key: "wrapT",
                        value: function(t) {
                            return t !== d.CLAMP_TO_EDGE && t !== d.REPEAT && t !== d.MIRRORED_REPEAT ? this : (this.wrapT = t, this)
                        }
                    }]), t
                }();
            e.default = x, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                return 0 !== t && !(t & t - 1)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1),
                a = r(o),
                u = n(2),
                s = r(u),
                l = n(3),
                f = r(l),
                c = n(31),
                h = r(c),
                d = void 0,
                p = function() {
                    function t(e, n) {
                        var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        (0, a.default)(this, t), d = f.default.gl, this.width = e, this.height = n, this.magFilter = r.magFilter || d.LINEAR, this.minFilter = r.minFilter || d.LINEAR, this.wrapS = r.wrapS || d.CLAMP_TO_EDGE, this.wrapT = r.wrapT || d.CLAMP_TO_EDGE, this.useDepth = r.useDepth || !0, this.useStencil = r.useStencil || !1, this.texelType = r.type, this._numSample = r.numSample || 8, i(this.width) && i(this.height) || (this.wrapS = this.wrapT = d.CLAMP_TO_EDGE, this.minFilter === d.LINEAR_MIPMAP_NEAREST && (this.minFilter = d.LINEAR)), this._init()
                    }
                    return (0, s.default)(t, [{
                        key: "_init",
                        value: function() {
                            var t = d.UNSIGNED_BYTE;
                            this.texelType && (t = this.texelType), this.texelType = t, this.frameBuffer = d.createFramebuffer(), this.frameBufferColor = d.createFramebuffer(), this.renderBufferColor = d.createRenderbuffer(), this.renderBufferDepth = d.createRenderbuffer(), this.glTexture = this._createTexture(), d.bindRenderbuffer(d.RENDERBUFFER, this.renderBufferColor), d.renderbufferStorageMultisample(d.RENDERBUFFER, this._numSample, d.RGBA8, this.width, this.height), d.bindRenderbuffer(d.RENDERBUFFER, this.renderBufferDepth), d.renderbufferStorageMultisample(d.RENDERBUFFER, this._numSample, d.DEPTH_COMPONENT16, this.width, this.height), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer), d.framebufferRenderbuffer(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.RENDERBUFFER, this.renderBufferColor), d.framebufferRenderbuffer(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.RENDERBUFFER, this.renderBufferDepth), d.bindFramebuffer(d.FRAMEBUFFER, null), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBufferColor), d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, this.glTexture.texture, 0), d.bindFramebuffer(d.FRAMEBUFFER, null)
                        }
                    }, {
                        key: "_createTexture",
                        value: function(t, e) {
                            void 0 === t && (t = d.RGBA), void 0 === e && (e = this.texelType);
                            var n = d.createTexture(),
                                r = new h.default(n, (!0));
                            return d.bindTexture(d.TEXTURE_2D, n), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, this.magFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, this.minFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, this.wrapS), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, this.wrapT), d.texImage2D(d.TEXTURE_2D, 0, t, this.width, this.height, 0, t, e, null), d.bindTexture(d.TEXTURE_2D, null), r
                        }
                    }, {
                        key: "bind",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            t && f.default.viewport(0, 0, this.width, this.height), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer)
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            t && f.default.viewport(0, 0, f.default.width, f.default.height);
                            var e = this.width,
                                n = this.height;
                            d.bindFramebuffer(d.FRAMEBUFFER, null), d.bindFramebuffer(d.READ_FRAMEBUFFER, this.frameBuffer), d.bindFramebuffer(d.DRAW_FRAMEBUFFER, this.frameBufferColor), d.clearBufferfv(d.COLOR, 0, [0, 0, 0, 0]), d.blitFramebuffer(0, 0, e, n, 0, 0, e, n, d.COLOR_BUFFER_BIT, this.magFilter), d.bindFramebuffer(d.FRAMEBUFFER, null)
                        }
                    }, {
                        key: "getTexture",
                        value: function() {
                            return arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0], this.glTexture
                        }
                    }]), t
                }();
            e.default = p, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(3),
                l = r(s),
                f = n(7),
                c = r(f),
                h = n(14),
                d = r(h),
                p = void 0,
                _ = function() {
                    function t(e, n) {
                        (0, o.default)(this, t), p = l.default.gl, this._vs = e, this._fs = n, this._init()
                    }
                    return (0, u.default)(t, [{
                        key: "_init",
                        value: function() {
                            this._meshCurrent = new d.default, this._meshTarget = new d.default, this._numPoints = -1, this._varyings = [], this.transformFeedback = p.createTransformFeedback()
                        }
                    }, {
                        key: "bufferData",
                        value: function(t, e, n) {
                            var r = !!n;
                            this._meshCurrent.bufferData(t, e, null, p.STREAM_COPY, !1), this._meshTarget.bufferData(t, e, null, p.STREAM_COPY, !1), r && (this._varyings.push(n), this._numPoints < 0 && (this._numPoints = t.length))
                        }
                    }, {
                        key: "bufferIndex",
                        value: function(t) {
                            this._meshCurrent.bufferIndex(t), this._meshTarget.bufferIndex(t)
                        }
                    }, {
                        key: "uniform",
                        value: function(t, e, n) {
                            this.shader && this.shader.uniform(t, e, n)
                        }
                    }, {
                        key: "generate",
                        value: function() {
                            this.shader = new c.default(this._vs, this._fs, this._varyings)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.shader || this.generate(), this.shader.bind(), l.default.drawTransformFeedback(this), this._swap()
                        }
                    }, {
                        key: "_swap",
                        value: function() {
                            var t = this._meshCurrent;
                            this._meshCurrent = this._meshTarget, this._meshTarget = t
                        }
                    }, {
                        key: "numPoints",
                        get: function() {
                            return this._numPoints
                        }
                    }, {
                        key: "meshCurrent",
                        get: function() {
                            return this._meshCurrent
                        }
                    }, {
                        key: "meshTarget",
                        get: function() {
                            return this._meshTarget
                        }
                    }, {
                        key: "meshSource",
                        get: function() {
                            return this._meshCurrent
                        }
                    }, {
                        key: "meshDestination",
                        get: function() {
                            return this._meshTarget
                        }
                    }]), t
                }();
            e.default = _, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(5),
                d = r(h),
                p = n(33),
                _ = r(p),
                v = n(8),
                m = r(v),
                x = m.default.vec3,
                g = [
                    [x.fromValues(0, 0, 0), x.fromValues(1, 0, 0), x.fromValues(0, -1, 0)],
                    [x.fromValues(0, 0, 0), x.fromValues(-1, 0, 0), x.fromValues(0, -1, 0)],
                    [x.fromValues(0, 0, 0), x.fromValues(0, 1, 0), x.fromValues(0, 0, 1)],
                    [x.fromValues(0, 0, 0), x.fromValues(0, -1, 0), x.fromValues(0, 0, -1)],
                    [x.fromValues(0, 0, 0), x.fromValues(0, 0, 1), x.fromValues(0, -1, 0)],
                    [x.fromValues(0, 0, 0), x.fromValues(0, 0, -1), x.fromValues(0, -1, 0)]
                ],
                b = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = (0, c.default)(this, (0, o.default)(e).call(this));
                        return t.setPerspective(Math.PI / 2, 1, .1, 1e3), t
                    }
                    return (0, d.default)(e, t), (0, l.default)(e, [{
                        key: "face",
                        value: function(t) {
                            var e = g[t];
                            this.lookAt(e[0], e[1], e[2])
                        }
                    }]), e
                }(_.default);
            e.default = b, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(6),
                l = r(s),
                f = n(5),
                c = r(f),
                h = n(3),
                d = r(h),
                p = n(14),
                _ = r(p),
                v = n(7),
                m = r(v),
                x = n(11),
                g = r(x),
                b = n(157),
                M = n(156),
                y = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = [],
                            n = [],
                            r = [0, 1, 2, 3, 4, 5],
                            i = 9999;
                        t.push([-i, 0, 0]), t.push([i, 0, 0]), t.push([0, -i, 0]), t.push([0, i, 0]), t.push([0, 0, -i]), t.push([0, 0, i]), n.push([1, 0, 0]), n.push([1, 0, 0]), n.push([0, 1, 0]), n.push([0, 1, 0]), n.push([0, 0, 1]), n.push([0, 0, 1]);
                        var a = new _.default(d.default.LINES);
                        a.bufferVertex(t), a.bufferIndex(r), a.bufferData(n, "aColor", 3);
                        var s = new m.default(b, M);
                        return (0, l.default)(this, (0, o.default)(e).call(this, a, s))
                    }
                    return (0, c.default)(e, t), e
                }(g.default);
            e.default = y, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(23),
                m = r(v),
                x = n(7),
                g = r(x),
                b = n(11),
                M = r(b),
                y = n(75),
                E = n(30),
                S = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = m.default.sphere(1, 24),
                            n = new g.default(y, E);
                        return (0, c.default)(this, (0, o.default)(e).call(this, t, n))
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "draw",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? [0, 0, 0] : arguments[0],
                                n = arguments.length <= 1 || void 0 === arguments[1] ? [1, 1, 1] : arguments[1],
                                r = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                                i = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
                            this.shader.bind(), this.shader.uniform("position", "uniform3fv", t), this.shader.uniform("scale", "uniform3fv", n), this.shader.uniform("color", "uniform3fv", r), this.shader.uniform("opacity", "uniform1f", i), (0, d.default)((0, o.default)(e.prototype), "draw", this).call(this)
                        }
                    }]), e
                }(M.default);
            e.default = S, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(23),
                m = r(v),
                x = n(7),
                g = r(x),
                b = n(11),
                M = r(b),
                y = n(74),
                E = n(52),
                S = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = m.default.bigTriangle(),
                            n = new g.default(y, E),
                            r = (0, c.default)(this, (0, o.default)(e).call(this, t, n));
                        return n.bind(), n.uniform("texture", "uniform1i", 0), r
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "draw",
                        value: function(t) {
                            this.shader.bind(), t.bind(0), (0, d.default)((0, o.default)(e.prototype), "draw", this).call(this)
                        }
                    }]), e
                }(M.default);
            e.default = S, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(3),
                m = r(v),
                x = n(14),
                g = r(x),
                b = n(7),
                M = r(b),
                y = n(11),
                E = r(y),
                S = n(159),
                w = n(30),
                T = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = [],
                            n = [],
                            r = 0,
                            i = 100,
                            a = void 0,
                            s = void 0;
                        for (a = -i; i > a; a += 1)
                            for (s = -i; i > s; s += 1) t.push([a, s, 0]), n.push(r), r++, t.push([a, 0, s]), n.push(r), r++;
                        var l = new g.default(m.default.POINTS);
                        l.bufferVertex(t), l.bufferIndex(n);
                        var f = new M.default(S, w),
                            h = (0, c.default)(this, (0, o.default)(e).call(this, l, f));
                        return h.color = [1, 1, 1], h.opacity = .5, h
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "draw",
                        value: function() {
                            this.shader.bind(), this.shader.uniform("color", "uniform3fv", this.color), this.shader.uniform("opacity", "uniform1f", this.opacity), (0, d.default)((0, o.default)(e.prototype), "draw", this).call(this)
                        }
                    }]), e
                }(E.default);
            e.default = T, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(3),
                m = r(v),
                x = n(14),
                g = r(x),
                b = n(7),
                M = r(b),
                y = n(11),
                E = r(y),
                S = n(51),
                w = n(30),
                T = function(t) {
                    function e() {
                        (0, u.default)(this, e);
                        var t = [],
                            n = [0, 1],
                            r = [
                                [0, 0],
                                [1, 1]
                            ];
                        t.push([0, 0, 0]), t.push([0, 0, 0]);
                        var i = new g.default(m.default.LINES);
                        i.bufferVertex(t), i.bufferTexCoord(r), i.bufferIndex(n);
                        var a = new M.default(S, w);
                        return (0, c.default)(this, (0, o.default)(e).call(this, i, a))
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "draw",
                        value: function(t, n) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                                i = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
                            this._mesh.bufferVertex([t, n]), this._shader.bind(), this._shader.uniform("color", "vec3", r), this._shader.uniform("opacity", "float", i), (0, d.default)((0, o.default)(e.prototype), "draw", this).call(this)
                        }
                    }]), e
                }(E.default);
            e.default = T, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(23),
                m = r(v),
                x = n(7),
                g = r(x),
                b = n(11),
                M = r(b),
                y = n(160),
                E = n(52),
                S = function(t) {
                    function e() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? 50 : arguments[0],
                            n = arguments.length <= 1 || void 0 === arguments[1] ? 24 : arguments[1];
                        (0, u.default)(this, e);
                        var r = m.default.sphere(t, n, !0),
                            i = new g.default(y, E);
                        return (0, c.default)(this, (0, o.default)(e).call(this, r, i))
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "draw",
                        value: function(t) {
                            this.shader.bind(), t.bind(0), (0, d.default)((0, o.default)(e.prototype), "draw", this).call(this)
                        }
                    }]), e
                }(M.default);
            e.default = S, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(23),
                m = r(v),
                x = n(7),
                g = r(x),
                b = n(11),
                M = r(b),
                y = n(77),
                E = n(76),
                S = function(t) {
                    function e() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? 20 : arguments[0];
                        (0, u.default)(this, e);
                        var n = m.default.skybox(t),
                            r = new g.default(y, E);
                        return (0, c.default)(this, (0, o.default)(e).call(this, n, r))
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "draw",
                        value: function(t) {
                            this.shader.bind(), t.bind(0), (0, d.default)((0, o.default)(e.prototype), "draw", this).call(this)
                        }
                    }]), e
                }(M.default);
            e.default = S, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(22),
                l = r(s),
                f = n(3),
                c = r(f),
                h = n(33),
                d = r(h),
                p = n(54),
                _ = r(p),
                v = n(57),
                m = r(v),
                x = function() {
                    function t() {
                        var e = this;
                        (0, o.default)(this, t), this._children = [], this._matrixIdentity = mat4.create(), c.default.enableAlphaBlending(), this._init(), this._initTextures(), this._initViews(), this._efIndex = l.default.addEF(function() {
                            return e._loop()
                        }), window.addEventListener("resize", function() {
                            return e.resize()
                        })
                    }
                    return (0, u.default)(t, [{
                        key: "update",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }, {
                        key: "stop",
                        value: function() {
                            -1 !== this._efIndex && (this._efIndex = l.default.removeEF(this._efIndex))
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var t = this; - 1 === this._efIndex && (this._efIndex = l.default.addEF(function() {
                                return t._loop()
                            }))
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            c.default.setSize(window.innerWidth, window.innerHeight), this.camera.setAspectRatio(c.default.aspectRatio)
                        }
                    }, {
                        key: "addChild",
                        value: function(t) {
                            this._children.push(t)
                        }
                    }, {
                        key: "removeChild",
                        value: function(t) {
                            var e = this._children.indexOf(t);
                            return -1 == e ? void 0 : void this._children.splice(e, 1)
                        }
                    }, {
                        key: "_initTextures",
                        value: function() {}
                    }, {
                        key: "_initViews",
                        value: function() {}
                    }, {
                        key: "_renderChildren",
                        value: function() {
                            for (var t = void 0, e = 0; e < this._children.length; e++) t = this._children[e], t.toRender();
                            c.default.rotate(this._matrixIdentity)
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            this.camera = new d.default, this.camera.setPerspective(45 * Math.PI / 180, c.default.aspectRatio, .1, 100), this.orbitalControl = new m.default(this.camera, window, 15), this.orbitalControl.radius.value = 10, this.cameraOrtho = new _.default
                        }
                    }, {
                        key: "_loop",
                        value: function() {
                            c.default.viewport(0, 0, c.default.width, c.default.height), c.default.setMatrices(this.camera), this.update(), this._renderChildren(), this.render()
                        }
                    }]), t
                }();
            e.default = x, t.exports = e.default
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = {},
                r = function(t) {
                    return t.length ? "vec" + t.length : "float"
                };
            n.addUniforms = function(t, e) {
                var n = "";
                for (var i in e) {
                    var o = e[i],
                        a = r(o);
                    n += "uniform " + a + " " + i + ";\n"
                }
                return t = t.replace("{{UNIFORMS}}", n)
            }, n.bindUniforms = function(t, e) {
                for (var n in e) {
                    var i = e[n],
                        o = r(i);
                    t.uniform(n, o, i)
                }
            }, e.default = n, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(7),
                l = r(s),
                f = function() {
                    function t(e, n) {
                        (0, o.default)(this, t), this.shader = new l.default(e, n), this._init()
                    }
                    return (0, u.default)(t, [{
                        key: "_init",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }();
            e.default = f, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(5),
                d = r(h),
                p = n(56),
                _ = r(p),
                v = n(7),
                m = r(v),
                x = n(3),
                g = r(x),
                b = function(t) {
                    function e(t, n) {
                        (0, u.default)(this, e);
                        var r = (0, c.default)(this, (0, o.default)(e).call(this));
                        return r._children = [], r.shader = new m.default(t, n), r._init(), r._matrixTemp = mat4.create(), r
                    }
                    return (0, d.default)(e, t), (0, l.default)(e, [{
                        key: "_init",
                        value: function() {}
                    }, {
                        key: "addChild",
                        value: function(t) {
                            this._children.push(t)
                        }
                    }, {
                        key: "removeChild",
                        value: function(t) {
                            var e = this._children.indexOf(t);
                            return -1 == e ? void 0 : void this._children.splice(e, 1)
                        }
                    }, {
                        key: "toRender",
                        value: function(t) {
                            void 0 === t && (t = mat4.create()), mat4.mul(this._matrixTemp, t, this.matrix), g.default.rotate(this._matrixTemp), this.render();
                            for (var e = 0; e < this._children.length; e++) {
                                var n = this._children[e];
                                n.toRender(this.matrix)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {}
                    }]), e
                }(_.default);
            e.default = b, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(5),
                d = r(h),
                p = n(34),
                _ = r(p),
                v = n(99),
                m = r(v),
                x = function(t) {
                    function e() {
                        return (0, u.default)(this, e), (0, c.default)(this, (0, o.default)(e).call(this, !0))
                    }
                    return (0, d.default)(e, t), (0, l.default)(e, [{
                        key: "parse",
                        value: function(t) {
                            return (0, m.default)(t)
                        }
                    }, {
                        key: "_onLoaded",
                        value: function() {
                            var t = this.parse(this._req.response);
                            this._callback && this._callback(t)
                        }
                    }]), e
                }(_.default);
            x.parse = function(t) {
                return (0, m.default)(t)
            }, e.default = x, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4),
                o = r(i),
                a = n(1),
                u = r(a),
                s = n(2),
                l = r(s),
                f = n(6),
                c = r(f),
                h = n(15),
                d = r(h),
                p = n(5),
                _ = r(p),
                v = n(34),
                m = r(v),
                x = n(14),
                g = r(x),
                b = function(t) {
                    function e() {
                        return (0, u.default)(this, e), (0, c.default)(this, (0, o.default)(e).apply(this, arguments))
                    }
                    return (0, _.default)(e, t), (0, l.default)(e, [{
                        key: "load",
                        value: function(t, n) {
                            var r = arguments.length <= 2 || void 0 === arguments[2] ? 4 : arguments[2];
                            this._drawType = r, (0, d.default)((0, o.default)(e.prototype), "load", this).call(this, t, n)
                        }
                    }, {
                        key: "_onLoaded",
                        value: function() {
                            this.parseObj(this._req.response)
                        }
                    }, {
                        key: "parseObj",
                        value: function(t) {
                            function e(t) {
                                var e = parseInt(t);
                                return 3 * (e >= 0 ? e - 1 : e + h.length / 3)
                            }

                            function n(t) {
                                var e = parseInt(t);
                                return 3 * (e >= 0 ? e - 1 : e + d.length / 3)
                            }

                            function r(t) {
                                var e = parseInt(t);
                                return 2 * (e >= 0 ? e - 1 : e + p.length / 2)
                            }

                            function i(t, e, n) {
                                l.push([h[t], h[t + 1], h[t + 2]]), l.push([h[e], h[e + 1], h[e + 2]]), l.push([h[n], h[n + 1], h[n + 2]]), _.push(3 * v + 0), _.push(3 * v + 1), _.push(3 * v + 2), v++
                            }

                            function o(t, e, n) {
                                f.push([p[t], p[t + 1]]), f.push([p[e], p[e + 1]]), f.push([p[n], p[n + 1]])
                            }

                            function a(t, e, n) {
                                c.push([d[t], d[t + 1], d[t + 2]]), c.push([d[e], d[e + 1], d[e + 2]]), c.push([d[n], d[n + 1], d[n + 2]])
                            }

                            function u(t, u, s, l, f, c, h, d, p, _, v, m) {
                                var x = e(t),
                                    g = e(u),
                                    b = e(s),
                                    M = void 0;
                                void 0 === l ? i(x, g, b) : (M = e(l), i(x, g, M), i(g, b, M)), void 0 !== f && (x = r(f), g = r(c), b = r(h), void 0 === l ? o(x, g, b) : (M = r(d), o(x, g, M), o(g, b, M))), void 0 !== p && (x = n(p), g = n(_), b = n(v), void 0 === l ? a(x, g, b) : (M = n(m), a(x, g, M), a(g, b, M)))
                            }
                            for (var s = t.split("\n"), l = [], f = [], c = [], h = [], d = [], p = [], _ = [], v = 0, m = void 0, x = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, g = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, b = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, M = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/, y = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/, E = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/, S = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/, w = 0; w < s.length; w++) {
                                var T = s[w];
                                T = T.trim(), 0 !== T.length && "#" !== T.charAt(0) && (null !== (m = x.exec(T)) ? h.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])) : null !== (m = g.exec(T)) ? d.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])) : null !== (m = b.exec(T)) ? p.push(parseFloat(m[1]), parseFloat(m[2])) : null !== (m = M.exec(T)) ? u(m[1], m[2], m[3], m[4]) : null !== (m = y.exec(T)) ? u(m[2], m[5], m[8], m[11], m[3], m[6], m[9], m[12]) : null !== (m = E.exec(T)) ? u(m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15], m[4], m[8], m[12], m[16]) : null !== (m = S.exec(T)) && u(m[2], m[5], m[8], m[11], void 0, void 0, void 0, void 0, m[3], m[6], m[9], m[12]))
                            }
                            return this._generateMeshes({
                                positions: l,
                                coords: f,
                                normals: c,
                                indices: _
                            })
                        }
                    }, {
                        key: "_generateMeshes",
                        value: function(t) {
                            var e = 65535,
                                n = t.normals.length > 0,
                                r = t.coords.length > 0,
                                i = void 0;
                            if (t.positions.length > e) {
                                var o = [],
                                    a = 0,
                                    u = {};
                                for (u.positions = t.positions.concat(), u.coords = t.coords.concat(), u.indices = t.indices.concat(), u.normals = t.normals.concat(); t.indices.length > 0;) {
                                    for (var s = Math.min(e, t.positions.length), l = t.indices.splice(0, s), f = [], c = [], h = [], d = void 0, p = 0, _ = 0; _ < l.length; _++) l[_] > p && (p = l[_]), d = l[_], f.push(u.positions[d]), r && c.push(u.coords[d]), n && h.push(u.normals[d]), l[_] -= a;
                                    a = p + 1, i = new g.default(this._drawType), i.bufferVertex(f), r && i.bufferTexCoord(c), i.bufferIndex(l), n && i.bufferNormal(h), o.push(i)
                                }
                                return this._callback && this._callback(o, u), o
                            }
                            return i = new g.default(this._drawType), i.bufferVertex(t.positions), r && i.bufferTexCoord(t.coords), i.bufferIndex(t.indices), n && i.bufferNormal(t.normals), this._callback && this._callback(i, t), i
                        }
                    }]), e
                }(m.default);
            b.parse = function(t) {
                var e = new b;
                return e.parseObj(t)
            }, e.default = b, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = !0;
            try {
                var l = document.createEvent("CustomEvent");
                l = null
            } catch (f) {
                s = !1
            }
            var c = function() {
                function t() {
                    (0, o.default)(this, t), this._eventListeners = {}
                }
                return (0, u.default)(t, [{
                    key: "addEventListener",
                    value: function(t, e) {
                        return null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {}), this._eventListeners[t] || (this._eventListeners[t] = []), this._eventListeners[t].push(e), this
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        return this.addEventListener(t, e)
                    }
                }, {
                    key: "removeEventListener",
                    value: function(t, e) {
                        null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {});
                        var n = this._eventListeners[t];
                        if ("undefined" == typeof n) return this;
                        for (var r = n.length, i = 0; r > i; i++) n[i] === e && (n.splice(i, 1), i--, r--);
                        return this
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        return this.removeEventListener(t, e)
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(t) {
                        null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {});
                        var e = t.type;
                        try {
                            null === t.target && (t.target = this), t.currentTarget = this
                        } catch (n) {
                            var r = {
                                type: e,
                                detail: t.detail,
                                dispatcher: this
                            };
                            return this.dispatchEvent(r)
                        }
                        var i = this._eventListeners[e];
                        if (null !== i && void 0 !== i)
                            for (var o = this._copyArray(i), a = o.length, u = 0; a > u; u++) {
                                var s = o[u];
                                s.call(this, t)
                            }
                        return this
                    }
                }, {
                    key: "dispatchCustomEvent",
                    value: function(t, e) {
                        var n = void 0;
                        return s ? (n = document.createEvent("CustomEvent"), n.dispatcher = this, n.initCustomEvent(t, !1, !1, e)) : n = {
                            type: t,
                            detail: e,
                            dispatcher: this
                        }, this.dispatchEvent(n)
                    }
                }, {
                    key: "trigger",
                    value: function(t, e) {
                        return this.dispatchCustomEvent(t, e)
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        if (null !== this._eventListeners) {
                            for (var t in this._eventListeners)
                                if (this._eventListeners.hasOwnProperty(t)) {
                                    for (var e = this._eventListeners[t], n = e.length, r = 0; n > r; r++) e[r] = null;
                                    delete this._eventListeners[t]
                                }
                            this._eventListeners = null
                        }
                    }
                }, {
                    key: "_copyArray",
                    value: function(t) {
                        for (var e = new Array(t.length), n = e.length, r = 0; n > r; r++) e[r] = t[r];
                        return e
                    }
                }]), t
            }();
            e.default = c, t.exports = e.default
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = ["EXT_shader_texture_lod", "EXT_sRGB", "EXT_frag_depth", "OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "OES_vertex_array_object", "ANGLE_instanced_arrays", "WEBGL_draw_buffers"], t.exports = e.default
        }, function(t, e) {
            "use strict";

            function n(t, e, n, r, i, o) {
                function a(e) {
                    var n = 0;
                    do e[n++] = t[r]; while (++r < _ && n < e.length);
                    return n
                }

                function u(e, n, i) {
                    var o = 0;
                    do e[n + o++] = t[r]; while (++r < _ && i > o);
                    return o
                }

                function s(t, e, n, r) {
                    var i = 4 * r,
                        o = u(e, n, i);
                    if (i > o) throw new Error("Error reading raw pixels: got " + o + " bytes, expected " + i)
                }
                for (var l = new Array(4), f = null, c = void 0, h = void 0, d = void 0, p = new Array(2), _ = t.length; o > 0;) {
                    if (a(l) < l.length) throw new Error("Error reading bytes: expected " + l.length);
                    if (2 !== l[0] || 2 !== l[1] || 0 !== (128 & l[2])) return e[n++] = l[0], e[n++] = l[1], e[n++] = l[2], e[n++] = l[3], void s(t, e, n, i * o - 1);
                    if (((255 & l[2]) << 8 | 255 & l[3]) !== i) throw new Error("Wrong scanline width " + ((255 & l[2]) << 8 | 255 & l[3]) + ", expected " + i);
                    null === f && (f = new Array(4 * i)), c = 0;
                    for (var v = 0; 4 > v; v++)
                        for (h = (v + 1) * i; h > c;) {
                            if (a(p) < p.length) throw new Error("Error reading 2-byte buffer");
                            if ((255 & p[0]) > 128) {
                                if (d = (255 & p[0]) - 128, 0 === d || d > h - c) throw new Error("Bad scanline data");
                                for (; d-- > 0;) f[c++] = p[1]
                            } else {
                                if (d = 255 & p[0], 0 === d || d > h - c) throw new Error("Bad scanline data");
                                if (f[c++] = p[1], --d > 0) {
                                    if (u(f, c, d) < d) throw new Error("Error reading non-run data");
                                    c += d
                                }
                            }
                        }
                    for (var m = 0; i > m; m++) e[n + 0] = f[m], e[n + 1] = f[m + i], e[n + 2] = f[m + 2 * i], e[n + 3] = f[m + 3 * i], n += 4;
                    o--
                }
            }

            function r(t) {
                function e() {
                    var e = "";
                    do {
                        var n = t[r];
                        if (n === f) {
                            ++r;
                            break
                        }
                        e += String.fromCharCode(n)
                    } while (++r < l);
                    return e
                }
                t instanceof ArrayBuffer && (t = new Uint8Array(t));
                for (var r = 0, l = t.length, f = 10, c = 0, h = 0, d = 1, p = 1, _ = !1, v = 0; 20 > v; v++) {
                    var m = e(),
                        x = void 0;
                    if (x = m.match(i));
                    else if (x = m.match(u)) _ = !0;
                    else if (x = m.match(a)) d = Number(x[1]);
                    else if (x = m.match(o));
                    else if (x = m.match(s)) {
                        h = Number(x[1]), c = Number(x[2]);
                        break
                    }
                }
                if (!_) throw new Error("File is not run length encoded!");
                var g = new Uint8Array(c * h * 4),
                    b = c,
                    M = h;
                n(t, g, 0, r, b, M);
                for (var y = new Float32Array(c * h * 4), E = 0; E < g.length; E += 4) {
                    var S = g[E + 0] / 255,
                        w = g[E + 1] / 255,
                        T = g[E + 2] / 255,
                        A = g[E + 3],
                        I = Math.pow(2, A - 128);
                    S *= I, w *= I, T *= I;
                    var F = E;
                    y[F + 0] = S, y[F + 1] = w, y[F + 2] = T, y[F + 3] = 1
                }
                return {
                    shape: [c, h],
                    exposure: d,
                    gamma: p,
                    data: y
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = "#\\?RADIANCE",
                o = "#.*",
                a = "EXPOSURE=\\s*([0-9]*[.][0-9]*)",
                u = "FORMAT=32-bit_rle_rgbe",
                s = "-Y ([0-9]+) \\+X ([0-9]+)";
            e.default = r, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(1),
                o = r(i),
                a = n(2),
                u = r(a),
                s = n(8),
                l = r(s),
                f = n(35),
                c = r(f),
                h = n(22),
                d = r(h),
                p = function(t, e) {
                    var n = e || {};
                    return t.touches ? (n.x = t.touches[0].pageX, n.y = t.touches[0].pageY) : (n.x = t.clientX, n.y = t.clientY), n
                },
                _ = function() {
                    function t(e) {
                        var n = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
                            i = arguments.length <= 2 || void 0 === arguments[2] ? .1 : arguments[2];
                        (0, o.default)(this, t), this._target = e, this._listenerTarget = r, this.matrix = l.default.mat4.create(), this.m = l.default.mat4.create(), this._vZaxis = l.default.vec3.clone([0, 0, 0]), this._zAxis = l.default.vec3.clone([0, 0, 1]), this.preMouse = {
                            x: 0,
                            y: 0
                        }, this.mouse = {
                            x: 0,
                            y: 0
                        }, this._isMouseDown = !0, this._rotation = l.default.quat.create(), this.tempRotation = l.default.quat.create(), this._rotateZMargin = 0, this._offset = .004, this._slerp = -1, this._isLocked = !1, this._diffX = new c.default(0, i), this._diffY = new c.default(0, i), this._listenerTarget.addEventListener("mousedown", function(t) {
                            return n._onDown(t)
                        }), this._listenerTarget.addEventListener("touchstart", function(t) {
                            return n._onDown(t)
                        }), this._listenerTarget.addEventListener("mousemove", function(t) {
                            return n._onMove(t)
                        }), this._listenerTarget.addEventListener("touchmove", function(t) {
                            return n._onMove(t)
                        }), window.addEventListener("touchend", function() {
                            return n._onUp()
                        }), window.addEventListener("mouseup", function() {
                            return n._onUp()
                        }), d.default.addEF(function() {
                            return n._loop()
                        })
                    }
                    return (0, u.default)(t, [{
                        key: "inverseControl",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            this._isInvert = t
                        }
                    }, {
                        key: "lock",
                        value: function() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                            this._isLocked = t
                        }
                    }, {
                        key: "setCameraPos",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];
                            if (this.easing = e, !(this._slerp > 0)) {
                                var n = l.default.quat.clone(this._rotation);
                                this._updateRotation(n), this._rotation = l.default.quat.clone(n), this._currDiffX = this.diffX = 0, this._currDiffY = this.diffY = 0, this._isMouseDown = !0, this._isRotateZ = 0, this._targetQuat = l.default.quat.clone(t), this._slerp = 1
                            }
                        }
                    }, {
                        key: "resetQuat",
                        value: function() {
                            this._rotation = l.default.quat.clone([0, 0, 1, 0]), this.tempRotation = l.default.quat.clone([0, 0, 0, 0]), this._targetQuat = void 0, this._slerp = -1
                        }
                    }, {
                        key: "_onDown",
                        value: function(t) {
                            if (!this._isLocked) {
                                var e = p(t),
                                    n = l.default.quat.clone(this._rotation);
                                this._updateRotation(n), this._rotation = n, this._isMouseDown = !0, this._isRotateZ = 0, this.preMouse = {
                                    x: e.x,
                                    y: e.y
                                }, e.y < this._rotateZMargin || e.y > window.innerHeight - this._rotateZMargin ? this._isRotateZ = 1 : (e.x < this._rotateZMargin || e.x > window.innerWidth - this._rotateZMargin) && (this._isRotateZ = 2), this._diffX.setTo(0), this._diffY.setTo(0)
                            }
                        }
                    }, {
                        key: "_onMove",
                        value: function(t) {
                            this._isLocked || p(t, this.mouse)
                        }
                    }, {
                        key: "_onUp",
                        value: function() {
                            this._isLocked || (this._isMouseDown = !0)
                        }
                    }, {
                        key: "_updateRotation",
                        value: function(t) {
                            this._isMouseDown && !this._isLocked && (this._diffX.value = -(this.mouse.x - this.preMouse.x), this._diffY.value = this.mouse.y - this.preMouse.y, this._isInvert && (this._diffX.value = -this._diffX.targetValue, this._diffY.value = -this._diffY.targetValue));
                            var e = void 0,
                                n = void 0;
                            if (this._isRotateZ > 0) 1 === this._isRotateZ ? (e = -this._diffX.value * this._offset, e *= this.preMouse.y < this._rotateZMargin ? -1 : 1, n = l.default.quat.clone([0, 0, Math.sin(e), Math.cos(e)]), l.default.quat.multiply(n, t, n)) : (e = -this._diffY.value * this._offset, e *= this.preMouse.x < this._rotateZMargin ? 1 : -1, n = l.default.quat.clone([0, 0, Math.sin(e), Math.cos(e)]), l.default.quat.multiply(n, t, n));
                            else {
                                var r = l.default.vec3.clone([this._diffX.value, this._diffY.value, 0]),
                                    i = l.default.vec3.create();
                                l.default.vec3.cross(i, r, this._zAxis), l.default.vec3.normalize(i, i), e = l.default.vec3.length(r) * this._offset, n = l.default.quat.clone([Math.sin(e) * i[0], Math.sin(e) * i[1], Math.sin(e) * i[2], Math.cos(e)]), l.default.quat.multiply(t, n, t)
                            }
                        }
                    }, {
                        key: "_loop",
                        value: function() {
                            l.default.mat4.identity(this.m), void 0 === this._targetQuat ? (l.default.quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]), this._updateRotation(this.tempRotation)) : (this._slerp += .1 * (0 - this._slerp), this._slerp < 5e-4 ? (l.default.quat.copy(this._rotation, this._targetQuat), l.default.quat.copy(this.tempRotation, this._targetQuat), this._targetQuat = void 0, this._diffX.setTo(0), this._diffY.setTo(0), this._slerp = -1) : (l.default.quat.set(this.tempRotation, 0, 0, 0, 0), l.default.quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp))), l.default.vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation), l.default.mat4.fromQuat(this.matrix, this.tempRotation)
                        }
                    }, {
                        key: "easing",
                        set: function(t) {
                            this._diffX.easing = t, this._diffY.easing = t
                        },
                        get: function() {
                            return this._diffX.easing
                        }
                    }]), t
                }();
            e.default = _, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(30),
                o = r(i),
                a = n(74),
                u = r(a),
                s = n(75),
                l = r(s),
                f = n(52),
                c = r(f),
                h = n(51),
                d = r(h),
                p = n(77),
                _ = r(p),
                v = n(76),
                m = r(v),
                x = {
                    simpleColorFrag: o.default,
                    bigTriangleVert: u.default,
                    generalVert: l.default,
                    copyFrag: c.default,
                    basicVert: d.default,
                    skyboxVert: _.default,
                    skyboxFrag: m.default
                };
            e.default = x, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                switch (t) {
                    default:
                        case "linear":
                        return c.Linear.None;
                    case "expIn":
                            return c.Exponential.In;
                    case "expOut":
                            return c.Exponential.Out;
                    case "expInOut":
                            return c.Exponential.InOut;
                    case "cubicIn":
                            return c.Cubic.In;
                    case "cubicOut":
                            return c.Cubic.Out;
                    case "cubicInOut":
                            return c.Cubic.InOut;
                    case "quarticIn":
                            return c.Quartic.In;
                    case "quarticOut":
                            return c.Quartic.Out;
                    case "quarticInOut":
                            return c.Quartic.InOut;
                    case "quinticIn":
                            return c.Quintic.In;
                    case "quinticOut":
                            return c.Quintic.Out;
                    case "quinticInOut":
                            return c.Quintic.InOut;
                    case "sinusoidalIn":
                            return c.Sinusoidal.In;
                    case "sinusoidalOut":
                            return c.Sinusoidal.Out;
                    case "sinusoidalInOut":
                            return c.Sinusoidal.InOut;
                    case "circularIn":
                            return c.Circular.In;
                    case "circularOut":
                            return c.Circular.Out;
                    case "circularInOut":
                            return c.Circular.InOut;
                    case "elasticIn":
                            return c.Elastic.In;
                    case "elasticOut":
                            return c.Elastic.Out;
                    case "elasticInOut":
                            return c.Elastic.InOut;
                    case "backIn":
                            return c.Back.In;
                    case "backOut":
                            return c.Back.Out;
                    case "backInOut":
                            return c.Back.InOut;
                    case "bounceIn":
                            return c.Bounce.in;
                    case "bounceOut":
                            return c.Bounce.out;
                    case "bounceInOut":
                            return c.Bounce.inOut
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1),
                a = r(o),
                u = n(2),
                s = r(u),
                l = n(22),
                f = r(l),
                c = {
                    Linear: {
                        None: function(t) {
                            return t
                        }
                    },
                    Quadratic: {
                        In: function(t) {
                            return t * t
                        },
                        Out: function(t) {
                            return t * (2 - t)
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                        }
                    },
                    Cubic: {
                        In: function(t) {
                            return t * t * t
                        },
                        Out: function(t) {
                            return --t * t * t + 1
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                        }
                    },
                    Quartic: {
                        In: function(t) {
                            return t * t * t * t
                        },
                        Out: function(t) {
                            return 1 - --t * t * t * t
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                        }
                    },
                    Quintic: {
                        In: function(t) {
                            return t * t * t * t * t
                        },
                        Out: function(t) {
                            return --t * t * t * t * t + 1
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                        }
                    },
                    Sinusoidal: {
                        In: function(t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        },
                        Out: function(t) {
                            return Math.sin(t * Math.PI / 2)
                        },
                        InOut: function(t) {
                            return .5 * (1 - Math.cos(Math.PI * t))
                        }
                    },
                    Exponential: {
                        In: function(t) {
                            return 0 === t ? 0 : Math.pow(1024, t - 1)
                        },
                        Out: function(t) {
                            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                        },
                        InOut: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                        }
                    },
                    Circular: {
                        In: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Out: function(t) {
                            return Math.sqrt(1 - --t * t)
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        }
                    },
                    Elastic: {
                        In: function(t) {
                            var e = void 0,
                                n = .1,
                                r = .4;
                            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)))
                        },
                        Out: function(t) {
                            var e = void 0,
                                n = .1,
                                r = .4;
                            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1)
                        },
                        InOut: function(t) {
                            var e = void 0,
                                n = .1,
                                r = .4;
                            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1)
                        }
                    },
                    Back: {
                        In: function(t) {
                            var e = 1.70158;
                            return t * t * ((e + 1) * t - e)
                        },
                        Out: function(t) {
                            var e = 1.70158;
                            return --t * t * ((e + 1) * t + e) + 1
                        },
                        InOut: function(t) {
                            var e = 2.5949095;
                            return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                        }
                    },
                    Bounce: {
                        "in": function(t) {
                            return 1 - c.Bounce.out(1 - t)
                        },
                        out: function(t) {
                            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        },
                        inOut: function(t) {
                            return .5 > t ? .5 * c.Bounce.in(2 * t) : .5 * c.Bounce.out(2 * t - 1) + .5
                        }
                    }
                },
                h = function() {
                    function t(e) {
                        var n = this,
                            r = arguments.length <= 1 || void 0 === arguments[1] ? "expOut" : arguments[1],
                            i = arguments.length <= 2 || void 0 === arguments[2] ? .01 : arguments[2];
                        (0, a.default)(this, t), this._value = e, this._startValue = e, this._targetValue = e, this._counter = 1, this.speed = i, this.easing = r, this._needUpdate = !0, this._efIndex = f.default.addEF(function() {
                            return n._update()
                        })
                    }
                    return (0, s.default)(t, [{
                        key: "_update",
                        value: function() {
                            var t = this._counter + this.speed;
                            return t > 1 && (t = 1), this._counter === t ? void(this._needUpdate = !1) : (this._counter = t, void(this._needUpdate = !0))
                        }
                    }, {
                        key: "limit",
                        value: function(t, e) {
                            return t > e ? void this.limit(e, t) : (this._min = t, this._max = e, void this._checkLimit())
                        }
                    }, {
                        key: "setTo",
                        value: function(t) {
                            this._value = t, this._targetValue = t, this._counter = 1
                        }
                    }, {
                        key: "_checkLimit",
                        value: function() {
                            void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            f.default.removeEF(this._efIndex)
                        }
                    }, {
                        key: "value",
                        set: function(t) {
                            this._startValue = this._value, this._targetValue = t, this._checkLimit(), this._counter = 0
                        },
                        get: function() {
                            if (this._needUpdate) {
                                var t = i(this.easing),
                                    e = t(this._counter);
                                this._value = this._startValue + e * (this._targetValue - this._startValue), this._needUpdate = !1
                            }
                            return this._value
                        }
                    }, {
                        key: "targetValue",
                        get: function() {
                            return this._targetValue
                        }
                    }]), t
                }();
            e.default = h, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(3),
                o = r(i),
                a = function() {
                    o.default.VERTEX_SHADER = o.default.gl.VERTEX_SHADER, o.default.FRAGMENT_SHADER = o.default.gl.FRAGMENT_SHADER, o.default.COMPILE_STATUS = o.default.gl.COMPILE_STATUS, o.default.DEPTH_TEST = o.default.gl.DEPTH_TEST, o.default.CULL_FACE = o.default.gl.CULL_FACE, o.default.BLEND = o.default.gl.BLEND, o.default.POINTS = o.default.gl.POINTS, o.default.LINES = o.default.gl.LINES, o.default.TRIANGLES = o.default.gl.TRIANGLES, o.default.LINEAR = o.default.gl.LINEAR, o.default.NEAREST = o.default.gl.NEAREST, o.default.LINEAR_MIPMAP_NEAREST = o.default.gl.LINEAR_MIPMAP_NEAREST, o.default.MIRRORED_REPEAT = o.default.gl.MIRRORED_REPEAT, o.default.CLAMP_TO_EDGE = o.default.gl.CLAMP_TO_EDGE, o.default.SCISSOR_TEST = o.default.gl.SCISSOR_TEST, o.default.UNSIGNED_BYTE = o.default.gl.UNSIGNED_BYTE
                };
            e.default = a, t.exports = e.default
        }, function(t, e) {
            "use strict";

            function n(t, e) {
                var n = t.getExtension(e);
                if (!n) return !1;
                var r = e.split("_")[0],
                    i = new RegExp(r + "$");
                for (var o in n) {
                    var a = n[o];
                    if ("function" == typeof a) {
                        var u = o.replace(i, "");
                        o.substring && (t[u] = n[o].bind(n))
                    }
                }
                return !0
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = n, t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i() {
                if (a.default.webgl2) return a.default.gl.FLOAT;
                var t = a.default.getExtension("OES_texture_float");
                return t ? a.default.gl.FLOAT : a.default.gl.UNSIGNED_BYTE
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                return u || (s = i()), s
            };
            var o = n(3),
                a = r(o),
                u = !1,
                s = void 0;
            t.exports = e.default
        }, function(t, e, n) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i() {
                if (a.default.webgl2) return a.default.gl.HALF_FLOAT;
                var t = a.default.getExtension("OES_texture_half_float");
                return t ? t.HALF_FLOAT_OES : a.default.gl.UNSIGNED_BYTE
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                return u || (s = i()), s
            };
            var o = n(3),
                a = r(o),
                u = !1,
                s = void 0;
            t.exports = e.default
        }, function(t, e, n) {
            t.exports = {
                "default": n(113),
                __esModule: !0
            }
        }, function(t, e, n) {
            t.exports = {
                "default": n(114),
                __esModule: !0
            }
        }, function(t, e, n) {
            t.exports = {
                "default": n(115),
                __esModule: !0
            }
        }, function(t, e, n) {
            t.exports = {
                "default": n(117),
                __esModule: !0
            }
        }, function(t, e, n) {
            t.exports = {
                "default": n(118),
                __esModule: !0
            }
        }, function(t, e, n) {
            t.exports = {
                "default": n(119),
                __esModule: !0
            }
        }, function(t, e, n) {
            n(138);
            var r = n(9).Object;
            t.exports = function(t, e) {
                return r.create(t, e)
            }
        }, function(t, e, n) {
            n(139);
            var r = n(9).Object;
            t.exports = function(t, e, n) {
                return r.defineProperty(t, e, n)
            }
        }, function(t, e, n) {
            n(140);
            var r = n(9).Object;
            t.exports = function(t, e) {
                return r.getOwnPropertyDescriptor(t, e)
            }
        }, function(t, e, n) {
            n(141), t.exports = n(9).Object.getPrototypeOf
        }, function(t, e, n) {
            n(142), t.exports = n(9).Object.setPrototypeOf
        }, function(t, e, n) {
            n(145), n(143), n(146), n(147), t.exports = n(9).Symbol
        }, function(t, e, n) {
            n(144), n(148), t.exports = n(50).f("iterator")
        }, function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }, function(t, e) {
            t.exports = function() {}
        }, function(t, e, n) {
            var r = n(13),
                i = n(136),
                o = n(135);
            t.exports = function(t) {
                return function(e, n, a) {
                    var u, s = r(e),
                        l = i(s.length),
                        f = o(a, l);
                    if (t && n != n) {
                        for (; l > f;)
                            if (u = s[f++], u != u) return !0
                    } else
                        for (; l > f; f++)
                            if ((t || f in s) && s[f] === n) return t || f || 0;
                    return !t && -1
                }
            }
        }, function(t, e, n) {
            var r = n(27),
                i = n(65),
                o = n(43);
            t.exports = function(t) {
                var e = r(t),
                    n = i.f;
                if (n)
                    for (var a, u = n(t), s = o.f, l = 0; u.length > l;) s.call(t, a = u[l++]) && e.push(a);
                return e
            }
        }, function(t, e, n) {
            t.exports = n(12).document && document.documentElement
        }, function(t, e, n) {
            var r = n(59);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == r(t) ? t.split("") : Object(t)
            }
        }, function(t, e, n) {
            var r = n(59);
            t.exports = Array.isArray || function(t) {
                return "Array" == r(t)
            }
        }, function(t, e, n) {
            "use strict";
            var r = n(41),
                i = n(28),
                o = n(44),
                a = {};
            n(20)(a, n(21)("iterator"), function() {
                return this
            }), t.exports = function(t, e, n) {
                t.prototype = r(a, {
                    next: i(1, n)
                }), o(t, e + " Iterator")
            }
        }, function(t, e) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }, function(t, e, n) {
            var r = n(27),
                i = n(13);
            t.exports = function(t, e) {
                for (var n, o = i(t), a = r(o), u = a.length, s = 0; u > s;)
                    if (o[n = a[s++]] === e) return n
            }
        }, function(t, e, n) {
            var r = n(29)("meta"),
                i = n(26),
                o = n(17),
                a = n(18).f,
                u = 0,
                s = Object.isExtensible || function() {
                    return !0
                },
                l = !n(25)(function() {
                    return s(Object.preventExtensions({}))
                }),
                f = function(t) {
                    a(t, r, {
                        value: {
                            i: "O" + ++u,
                            w: {}
                        }
                    })
                },
                c = function(t, e) {
                    if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, r)) {
                        if (!s(t)) return "F";
                        if (!e) return "E";
                        f(t)
                    }
                    return t[r].i
                },
                h = function(t, e) {
                    if (!o(t, r)) {
                        if (!s(t)) return !0;
                        if (!e) return !1;
                        f(t)
                    }
                    return t[r].w
                },
                d = function(t) {
                    return l && p.NEED && s(t) && !o(t, r) && f(t), t
                },
                p = t.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: c,
                    getWeak: h,
                    onFreeze: d
                }
        }, function(t, e, n) {
            var r = n(18),
                i = n(24),
                o = n(27);
            t.exports = n(16) ? Object.defineProperties : function(t, e) {
                i(t);
                for (var n, a = o(e), u = a.length, s = 0; u > s;) r.f(t, n = a[s++], e[n]);
                return t
            }
        }, function(t, e, n) {
            var r = n(13),
                i = n(64).f,
                o = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                u = function(t) {
                    try {
                        return i(t)
                    } catch (e) {
                        return a.slice()
                    }
                };
            t.exports.f = function(t) {
                return a && "[object Window]" == o.call(t) ? u(t) : i(r(t))
            }
        }, function(t, e, n) {
            var r = n(26),
                i = n(24),
                o = function(t, e) {
                    if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                };
            t.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                    try {
                        r = n(60)(Function.call, n(42).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
                    } catch (i) {
                        e = !0
                    }
                    return function(t, n) {
                        return o(t, n), e ? t.__proto__ = n : r(t, n), t
                    }
                }({}, !1) : void 0),
                check: o
            }
        }, function(t, e, n) {
            var r = n(47),
                i = n(37);
            t.exports = function(t) {
                return function(e, n) {
                    var o, a, u = String(i(e)),
                        s = r(n),
                        l = u.length;
                    return 0 > s || s >= l ? t ? "" : void 0 : (o = u.charCodeAt(s), 55296 > o || o > 56319 || s + 1 === l || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : o : t ? u.slice(s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
                }
            }
        }, function(t, e, n) {
            var r = n(47),
                i = Math.max,
                o = Math.min;
            t.exports = function(t, e) {
                return t = r(t), 0 > t ? i(t + e, 0) : o(t, e)
            }
        }, function(t, e, n) {
            var r = n(47),
                i = Math.min;
            t.exports = function(t) {
                return t > 0 ? i(r(t), 9007199254740991) : 0
            }
        }, function(t, e, n) {
            "use strict";
            var r = n(121),
                i = n(128),
                o = n(39),
                a = n(13);
            t.exports = n(63)(Array, "Array", function(t, e) {
                this._t = a(t), this._i = 0, this._k = e
            }, function() {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
            }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
        }, function(t, e, n) {
            var r = n(19);
            r(r.S, "Object", {
                create: n(41)
            })
        }, function(t, e, n) {
            var r = n(19);
            r(r.S + r.F * !n(16), "Object", {
                defineProperty: n(18).f
            })
        }, function(t, e, n) {
            var r = n(13),
                i = n(42).f;
            n(68)("getOwnPropertyDescriptor", function() {
                return function(t, e) {
                    return i(r(t), e)
                }
            })
        }, function(t, e, n) {
            var r = n(70),
                i = n(66);
            n(68)("getPrototypeOf", function() {
                return function(t) {
                    return i(r(t))
                }
            })
        }, function(t, e, n) {
            var r = n(19);
            r(r.S, "Object", {
                setPrototypeOf: n(133).set
            })
        }, function(t, e) {}, function(t, e, n) {
            "use strict";
            var r = n(134)(!0);
            n(63)(String, "String", function(t) {
                this._t = String(t), this._i = 0
            }, function() {
                var t, e = this._t,
                    n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = r(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }, function(t, e, n) {
            "use strict";
            var r = n(12),
                i = n(17),
                o = n(16),
                a = n(19),
                u = n(69),
                s = n(130).KEY,
                l = n(25),
                f = n(46),
                c = n(44),
                h = n(29),
                d = n(21),
                p = n(50),
                _ = n(49),
                v = n(129),
                m = n(123),
                x = n(126),
                g = n(24),
                b = n(13),
                M = n(48),
                y = n(28),
                E = n(41),
                S = n(132),
                w = n(42),
                T = n(18),
                A = n(27),
                I = w.f,
                F = T.f,
                R = S.f,
                D = r.Symbol,
                P = r.JSON,
                O = P && P.stringify,
                L = "prototype",
                C = d("_hidden"),
                k = d("toPrimitive"),
                N = {}.propertyIsEnumerable,
                B = f("symbol-registry"),
                U = f("symbols"),
                V = f("op-symbols"),
                z = Object[L],
                j = "function" == typeof D,
                G = r.QObject,
                X = !G || !G[L] || !G[L].findChild,
                Y = o && l(function() {
                    return 7 != E(F({}, "a", {
                        get: function() {
                            return F(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(t, e, n) {
                    var r = I(z, e);
                    r && delete z[e], F(t, e, n), r && t !== z && F(z, e, r)
                } : F,
                H = function(t) {
                    var e = U[t] = E(D[L]);
                    return e._k = t, e
                },
                q = j && "symbol" == typeof D.iterator ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    return t instanceof D
                },
                W = function(t, e, n) {
                    return t === z && W(V, e, n), g(t), e = M(e, !0), g(n), i(U, e) ? (n.enumerable ? (i(t, C) && t[C][e] && (t[C][e] = !1), n = E(n, {
                        enumerable: y(0, !1)
                    })) : (i(t, C) || F(t, C, y(1, {})), t[C][e] = !0), Y(t, e, n)) : F(t, e, n)
                },
                Q = function(t, e) {
                    g(t);
                    for (var n, r = m(e = b(e)), i = 0, o = r.length; o > i;) W(t, n = r[i++], e[n]);
                    return t
                },
                K = function(t, e) {
                    return void 0 === e ? E(t) : Q(E(t), e)
                },
                Z = function(t) {
                    var e = N.call(this, t = M(t, !0));
                    return !(this === z && i(U, t) && !i(V, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, C) && this[C][t]) || e)
                },
                J = function(t, e) {
                    if (t = b(t), e = M(e, !0), t !== z || !i(U, e) || i(V, e)) {
                        var n = I(t, e);
                        return !n || !i(U, e) || i(t, C) && t[C][e] || (n.enumerable = !0), n
                    }
                },
                $ = function(t) {
                    for (var e, n = R(b(t)), r = [], o = 0; n.length > o;) i(U, e = n[o++]) || e == C || e == s || r.push(e);
                    return r
                },
                tt = function(t) {
                    for (var e, n = t === z, r = R(n ? V : b(t)), o = [], a = 0; r.length > a;) i(U, e = r[a++]) && (!n || i(z, e)) && o.push(U[e]);
                    return o
                };
            j || (D = function() {
                if (this instanceof D) throw TypeError("Symbol is not a constructor!");
                var t = h(arguments.length > 0 ? arguments[0] : void 0),
                    e = function(n) {
                        this === z && e.call(V, n), i(this, C) && i(this[C], t) && (this[C][t] = !1), Y(this, t, y(1, n))
                    };
                return o && X && Y(z, t, {
                    configurable: !0,
                    set: e
                }), H(t)
            }, u(D[L], "toString", function() {
                return this._k
            }), w.f = J, T.f = W, n(64).f = S.f = $, n(43).f = Z, n(65).f = tt, o && !n(40) && u(z, "propertyIsEnumerable", Z, !0), p.f = function(t) {
                return H(d(t))
            }), a(a.G + a.W + a.F * !j, {
                Symbol: D
            });
            for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
            for (var et = A(d.store), nt = 0; et.length > nt;) _(et[nt++]);
            a(a.S + a.F * !j, "Symbol", {
                "for": function(t) {
                    return i(B, t += "") ? B[t] : B[t] = D(t)
                },
                keyFor: function(t) {
                    if (q(t)) return v(B, t);
                    throw TypeError(t + " is not a symbol!")
                },
                useSetter: function() {
                    X = !0
                },
                useSimple: function() {
                    X = !1
                }
            }), a(a.S + a.F * !j, "Object", {
                create: K,
                defineProperty: W,
                defineProperties: Q,
                getOwnPropertyDescriptor: J,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: tt
            }), P && a(a.S + a.F * (!j || l(function() {
                var t = D();
                return "[null]" != O([t]) || "{}" != O({
                    a: t
                }) || "{}" != O(Object(t))
            })), "JSON", {
                stringify: function(t) {
                    if (void 0 !== t && !q(t)) {
                        for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                        return e = r[1], "function" == typeof e && (n = e), !n && x(e) || (e = function(t, e) {
                            return n && (e = n.call(this, t, e)), q(e) ? void 0 : e
                        }), r[1] = e, O.apply(P, r)
                    }
                }
            }), D[L][k] || n(20)(D[L], k, D[L].valueOf), c(D, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0)
        }, function(t, e, n) {
            n(49)("asyncIterator")
        }, function(t, e, n) {
            n(49)("observable")
        }, function(t, e, n) {
            n(137);
            for (var r = n(12), i = n(20), o = n(39), a = n(21)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; 5 > s; s++) {
                var l = u[s],
                    f = r[l],
                    c = f && f.prototype;
                c && !c[a] && i(c, a, l), o[l] = o.Array
            }
        }, function(t, e, n) {
            var r = n(10),
                i = {};
            i.create = function() {
                var t = new r.ARRAY_TYPE(4);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(4);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
            }, i.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, i.fromValues = function(t, e, n, i) {
                var o = new r.ARRAY_TYPE(4);
                return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o
            }, i.set = function(t, e, n, r, i) {
                return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t
            }, i.transpose = function(t, e) {
                if (t === e) {
                    var n = e[1];
                    t[1] = e[2], t[2] = n
                } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];
                return t
            }, i.invert = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = n * o - i * r;
                return a ? (a = 1 / a, t[0] = o * a, t[1] = -r * a, t[2] = -i * a, t[3] = n * a, t) : null
            }, i.adjoint = function(t, e) {
                var n = e[0];
                return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = n, t
            }, i.determinant = function(t) {
                return t[0] * t[3] - t[2] * t[1]
            }, i.multiply = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = n[0],
                    s = n[1],
                    l = n[2],
                    f = n[3];
                return t[0] = r * u + o * s, t[1] = i * u + a * s, t[2] = r * l + o * f, t[3] = i * l + a * f, t
            }, i.mul = i.multiply, i.rotate = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = Math.sin(n),
                    s = Math.cos(n);
                return t[0] = r * s + o * u, t[1] = i * s + a * u, t[2] = r * -u + o * s, t[3] = i * -u + a * s, t
            }, i.scale = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = n[0],
                    s = n[1];
                return t[0] = r * u, t[1] = i * u, t[2] = o * s, t[3] = a * s, t
            }, i.fromRotation = function(t, e) {
                var n = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t
            }, i.fromScaling = function(t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t
            }, i.str = function(t) {
                return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, i.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
            }, i.LDU = function(t, e, n, r) {
                return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], [t, e, n]
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
            }, i.sub = i.subtract, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    u = e[0],
                    s = e[1],
                    l = e[2],
                    f = e[3];
                return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - f) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(f))
            }, i.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
            }, i.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
            }, t.exports = i
        }, function(t, e, n) {
            var r = n(10),
                i = {};
            i.create = function() {
                var t = new r.ARRAY_TYPE(6);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(6);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }, i.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, i.fromValues = function(t, e, n, i, o, a) {
                var u = new r.ARRAY_TYPE(6);
                return u[0] = t, u[1] = e, u[2] = n, u[3] = i, u[4] = o, u[5] = a, u
            }, i.set = function(t, e, n, r, i, o, a) {
                return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t
            }, i.invert = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    u = e[5],
                    s = n * o - r * i;
                return s ? (s = 1 / s, t[0] = o * s, t[1] = -r * s, t[2] = -i * s, t[3] = n * s, t[4] = (i * u - o * a) * s, t[5] = (r * a - n * u) * s, t) : null
            }, i.determinant = function(t) {
                return t[0] * t[3] - t[1] * t[2]
            }, i.multiply = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = n[0],
                    f = n[1],
                    c = n[2],
                    h = n[3],
                    d = n[4],
                    p = n[5];
                return t[0] = r * l + o * f, t[1] = i * l + a * f, t[2] = r * c + o * h, t[3] = i * c + a * h, t[4] = r * d + o * p + u, t[5] = i * d + a * p + s, t
            }, i.mul = i.multiply, i.rotate = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = Math.sin(n),
                    f = Math.cos(n);
                return t[0] = r * f + o * l, t[1] = i * f + a * l, t[2] = r * -l + o * f, t[3] = i * -l + a * f, t[4] = u, t[5] = s, t
            }, i.scale = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = n[0],
                    f = n[1];
                return t[0] = r * l, t[1] = i * l, t[2] = o * f, t[3] = a * f, t[4] = u, t[5] = s, t
            }, i.translate = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = n[0],
                    f = n[1];
                return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = r * l + o * f + u, t[5] = i * l + a * f + s, t
            }, i.fromRotation = function(t, e) {
                var n = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t
            }, i.fromScaling = function(t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t
            }, i.fromTranslation = function(t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t
            }, i.str = function(t) {
                return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
            }, i.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t
            }, i.sub = i.subtract, i.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t
            }, i.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t
            }, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    u = t[4],
                    s = t[5],
                    l = e[0],
                    f = e[1],
                    c = e[2],
                    h = e[3],
                    d = e[4],
                    p = e[5];
                return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(i - f) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(o - c) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(a - h) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(u - d) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(d)) && Math.abs(s - p) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(p))
            }, t.exports = i
        }, function(t, e, n) {
            var r = n(10),
                i = {
                    scalar: {},
                    SIMD: {}
                };
            i.create = function() {
                var t = new r.ARRAY_TYPE(16);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(16);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }, i.fromValues = function(t, e, n, i, o, a, u, s, l, f, c, h, d, p, _, v) {
                var m = new r.ARRAY_TYPE(16);
                return m[0] = t, m[1] = e, m[2] = n, m[3] = i, m[4] = o, m[5] = a, m[6] = u, m[7] = s, m[8] = l, m[9] = f, m[10] = c, m[11] = h, m[12] = d, m[13] = p, m[14] = _, m[15] = v, m
            }, i.set = function(t, e, n, r, i, o, a, u, s, l, f, c, h, d, p, _, v) {
                return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = u, t[7] = s, t[8] = l, t[9] = f, t[10] = c, t[11] = h, t[12] = d, t[13] = p, t[14] = _, t[15] = v, t
            }, i.identity = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.scalar.transpose = function(t, e) {
                if (t === e) {
                    var n = e[1],
                        r = e[2],
                        i = e[3],
                        o = e[6],
                        a = e[7],
                        u = e[11];
                    t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = i, t[13] = a, t[14] = u
                } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
                return t
            }, i.SIMD.transpose = function(t, e) {
                var n, r, i, o, a, u, s, l, f, c;
                return n = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), i = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), a = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(a, u, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(a, u, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, s), SIMD.Float32x4.store(t, 4, l), a = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), u = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), f = SIMD.Float32x4.shuffle(a, u, 0, 2, 4, 6), c = SIMD.Float32x4.shuffle(a, u, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, f), SIMD.Float32x4.store(t, 12, c), t
            }, i.transpose = r.USE_SIMD ? i.SIMD.transpose : i.scalar.transpose, i.scalar.invert = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    u = e[5],
                    s = e[6],
                    l = e[7],
                    f = e[8],
                    c = e[9],
                    h = e[10],
                    d = e[11],
                    p = e[12],
                    _ = e[13],
                    v = e[14],
                    m = e[15],
                    x = n * u - r * a,
                    g = n * s - i * a,
                    b = n * l - o * a,
                    M = r * s - i * u,
                    y = r * l - o * u,
                    E = i * l - o * s,
                    S = f * _ - c * p,
                    w = f * v - h * p,
                    T = f * m - d * p,
                    A = c * v - h * _,
                    I = c * m - d * _,
                    F = h * m - d * v,
                    R = x * F - g * I + b * A + M * T - y * w + E * S;
                return R ? (R = 1 / R, t[0] = (u * F - s * I + l * A) * R, t[1] = (i * I - r * F - o * A) * R, t[2] = (_ * E - v * y + m * M) * R, t[3] = (h * y - c * E - d * M) * R, t[4] = (s * T - a * F - l * w) * R, t[5] = (n * F - i * T + o * w) * R, t[6] = (v * b - p * E - m * g) * R, t[7] = (f * E - h * b + d * g) * R, t[8] = (a * I - u * T + l * S) * R, t[9] = (r * T - n * I - o * S) * R, t[10] = (p * y - _ * b + m * x) * R, t[11] = (c * b - f * y - d * x) * R, t[12] = (u * w - a * A - s * S) * R, t[13] = (n * A - r * w + i * S) * R, t[14] = (_ * g - p * M - v * x) * R, t[15] = (f * M - c * g + h * x) * R, t) : null
            }, i.SIMD.invert = function(t, e) {
                var n, r, i, o, a, u, s, l, f, c, h = SIMD.Float32x4.load(e, 0),
                    d = SIMD.Float32x4.load(e, 4),
                    p = SIMD.Float32x4.load(e, 8),
                    _ = SIMD.Float32x4.load(e, 12);
                return a = SIMD.Float32x4.shuffle(h, d, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(p, _, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(a, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, a, 1, 3, 5, 7), a = SIMD.Float32x4.shuffle(h, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(p, _, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(a, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7), a = SIMD.Float32x4.mul(i, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.mul(r, a), s = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, a), u), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), a = SIMD.Float32x4.mul(r, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), u), f = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(o, a)), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), a = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), u), l = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(i, a)), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), a = SIMD.Float32x4.mul(n, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), l), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), f), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), l), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.mul(n, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(i, a)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), l), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), s), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.mul(n, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), s), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, a)), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), f), c = SIMD.Float32x4.mul(n, u), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), a = SIMD.Float32x4.reciprocalApproximation(c), c = SIMD.Float32x4.sub(SIMD.Float32x4.add(a, a), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(a, a))), (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, u)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, s)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, l)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, f)), t) : null
            }, i.invert = r.USE_SIMD ? i.SIMD.invert : i.scalar.invert, i.scalar.adjoint = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4],
                    u = e[5],
                    s = e[6],
                    l = e[7],
                    f = e[8],
                    c = e[9],
                    h = e[10],
                    d = e[11],
                    p = e[12],
                    _ = e[13],
                    v = e[14],
                    m = e[15];
                return t[0] = u * (h * m - d * v) - c * (s * m - l * v) + _ * (s * d - l * h), t[1] = -(r * (h * m - d * v) - c * (i * m - o * v) + _ * (i * d - o * h)), t[2] = r * (s * m - l * v) - u * (i * m - o * v) + _ * (i * l - o * s), t[3] = -(r * (s * d - l * h) - u * (i * d - o * h) + c * (i * l - o * s)), t[4] = -(a * (h * m - d * v) - f * (s * m - l * v) + p * (s * d - l * h)), t[5] = n * (h * m - d * v) - f * (i * m - o * v) + p * (i * d - o * h), t[6] = -(n * (s * m - l * v) - a * (i * m - o * v) + p * (i * l - o * s)), t[7] = n * (s * d - l * h) - a * (i * d - o * h) + f * (i * l - o * s), t[8] = a * (c * m - d * _) - f * (u * m - l * _) + p * (u * d - l * c), t[9] = -(n * (c * m - d * _) - f * (r * m - o * _) + p * (r * d - o * c)), t[10] = n * (u * m - l * _) - a * (r * m - o * _) + p * (r * l - o * u), t[11] = -(n * (u * d - l * c) - a * (r * d - o * c) + f * (r * l - o * u)), t[12] = -(a * (c * v - h * _) - f * (u * v - s * _) + p * (u * h - s * c)), t[13] = n * (c * v - h * _) - f * (r * v - i * _) + p * (r * h - i * c), t[14] = -(n * (u * v - s * _) - a * (r * v - i * _) + p * (r * s - i * u)), t[15] = n * (u * h - s * c) - a * (r * h - i * c) + f * (r * s - i * u), t
            }, i.SIMD.adjoint = function(t, e) {
                var n, r, i, o, a, u, s, l, f, c, h, d, p, n = SIMD.Float32x4.load(e, 0),
                    r = SIMD.Float32x4.load(e, 4),
                    i = SIMD.Float32x4.load(e, 8),
                    o = SIMD.Float32x4.load(e, 12);
                return f = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(f, u, 0, 2, 4, 6), u = SIMD.Float32x4.shuffle(u, f, 1, 3, 5, 7), f = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(f, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, f, 1, 3, 5, 7), f = SIMD.Float32x4.mul(s, l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), c = SIMD.Float32x4.mul(u, f), h = SIMD.Float32x4.mul(a, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, f), c), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, f), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), f = SIMD.Float32x4.mul(u, s), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), c), p = SIMD.Float32x4.mul(a, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(l, f)), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, f), p), p = SIMD.Float32x4.swizzle(p, 2, 3, 0, 1), f = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), c), d = SIMD.Float32x4.mul(a, f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(s, f)), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, f), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), f = SIMD.Float32x4.mul(a, u), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), d), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, f), p), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, f), d), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(s, f)), f = SIMD.Float32x4.mul(a, l), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(s, f)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, f), d), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, f), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(u, f)), f = SIMD.Float32x4.mul(a, s), f = SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, f), h), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(u, f)), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, f)), p = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, f), p), SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, h), SIMD.Float32x4.store(t, 8, d), SIMD.Float32x4.store(t, 12, p), t
            }, i.adjoint = r.USE_SIMD ? i.SIMD.adjoint : i.scalar.adjoint, i.determinant = function(t) {
                var e = t[0],
                    n = t[1],
                    r = t[2],
                    i = t[3],
                    o = t[4],
                    a = t[5],
                    u = t[6],
                    s = t[7],
                    l = t[8],
                    f = t[9],
                    c = t[10],
                    h = t[11],
                    d = t[12],
                    p = t[13],
                    _ = t[14],
                    v = t[15],
                    m = e * a - n * o,
                    x = e * u - r * o,
                    g = e * s - i * o,
                    b = n * u - r * a,
                    M = n * s - i * a,
                    y = r * s - i * u,
                    E = l * p - f * d,
                    S = l * _ - c * d,
                    w = l * v - h * d,
                    T = f * _ - c * p,
                    A = f * v - h * p,
                    I = c * v - h * _;
                return m * I - x * A + g * T + b * w - M * S + y * E
            }, i.SIMD.multiply = function(t, e, n) {
                var r = SIMD.Float32x4.load(e, 0),
                    i = SIMD.Float32x4.load(e, 4),
                    o = SIMD.Float32x4.load(e, 8),
                    a = SIMD.Float32x4.load(e, 12),
                    u = SIMD.Float32x4.load(n, 0),
                    s = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 3, 3, 3, 3), a))));
                SIMD.Float32x4.store(t, 0, s);
                var l = SIMD.Float32x4.load(n, 4),
                    f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), a))));
                SIMD.Float32x4.store(t, 4, f);
                var c = SIMD.Float32x4.load(n, 8),
                    h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), a))));
                SIMD.Float32x4.store(t, 8, h);
                var d = SIMD.Float32x4.load(n, 12),
                    p = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), a))));
                return SIMD.Float32x4.store(t, 12, p), t
            }, i.scalar.multiply = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    l = e[6],
                    f = e[7],
                    c = e[8],
                    h = e[9],
                    d = e[10],
                    p = e[11],
                    _ = e[12],
                    v = e[13],
                    m = e[14],
                    x = e[15],
                    g = n[0],
                    b = n[1],
                    M = n[2],
                    y = n[3];
                return t[0] = g * r + b * u + M * c + y * _, t[1] = g * i + b * s + M * h + y * v, t[2] = g * o + b * l + M * d + y * m, t[3] = g * a + b * f + M * p + y * x, g = n[4], b = n[5], M = n[6], y = n[7], t[4] = g * r + b * u + M * c + y * _, t[5] = g * i + b * s + M * h + y * v, t[6] = g * o + b * l + M * d + y * m, t[7] = g * a + b * f + M * p + y * x, g = n[8], b = n[9], M = n[10], y = n[11], t[8] = g * r + b * u + M * c + y * _, t[9] = g * i + b * s + M * h + y * v, t[10] = g * o + b * l + M * d + y * m, t[11] = g * a + b * f + M * p + y * x, g = n[12], b = n[13], M = n[14], y = n[15], t[12] = g * r + b * u + M * c + y * _, t[13] = g * i + b * s + M * h + y * v, t[14] = g * o + b * l + M * d + y * m, t[15] = g * a + b * f + M * p + y * x, t
            }, i.multiply = r.USE_SIMD ? i.SIMD.multiply : i.scalar.multiply, i.mul = i.multiply, i.scalar.translate = function(t, e, n) {
                var r, i, o, a, u, s, l, f, c, h, d, p, _ = n[0],
                    v = n[1],
                    m = n[2];
                return e === t ? (t[12] = e[0] * _ + e[4] * v + e[8] * m + e[12], t[13] = e[1] * _ + e[5] * v + e[9] * m + e[13], t[14] = e[2] * _ + e[6] * v + e[10] * m + e[14], t[15] = e[3] * _ + e[7] * v + e[11] * m + e[15]) : (r = e[0], i = e[1], o = e[2], a = e[3], u = e[4], s = e[5], l = e[6], f = e[7], c = e[8], h = e[9], d = e[10], p = e[11], t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = u, t[5] = s, t[6] = l, t[7] = f, t[8] = c, t[9] = h, t[10] = d, t[11] = p, t[12] = r * _ + u * v + c * m + e[12], t[13] = i * _ + s * v + h * m + e[13], t[14] = o * _ + l * v + d * m + e[14], t[15] = a * _ + f * v + p * m + e[15]), t
            }, i.SIMD.translate = function(t, e, n) {
                var r = SIMD.Float32x4.load(e, 0),
                    i = SIMD.Float32x4.load(e, 4),
                    o = SIMD.Float32x4.load(e, 8),
                    a = SIMD.Float32x4.load(e, 12),
                    u = SIMD.Float32x4(n[0], n[1], n[2], 0);
                e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0)), i = SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2));
                var s = SIMD.Float32x4.add(r, SIMD.Float32x4.add(i, SIMD.Float32x4.add(o, a)));
                return SIMD.Float32x4.store(t, 12, s), t
            }, i.translate = r.USE_SIMD ? i.SIMD.translate : i.scalar.translate, i.scalar.scale = function(t, e, n) {
                var r = n[0],
                    i = n[1],
                    o = n[2];
                return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }, i.SIMD.scale = function(t, e, n) {
                var r, i, o, a = SIMD.Float32x4(n[0], n[1], n[2], 0);
                return r = SIMD.Float32x4.load(e, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0))), i = SIMD.Float32x4.load(e, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1))), o = SIMD.Float32x4.load(e, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2))), t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }, i.scale = r.USE_SIMD ? i.SIMD.scale : i.scalar.scale, i.rotate = function(t, e, n, i) {
                var o, a, u, s, l, f, c, h, d, p, _, v, m, x, g, b, M, y, E, S, w, T, A, I, F = i[0],
                    R = i[1],
                    D = i[2],
                    P = Math.sqrt(F * F + R * R + D * D);
                return Math.abs(P) < r.EPSILON ? null : (P = 1 / P, F *= P, R *= P, D *= P, o = Math.sin(n), a = Math.cos(n), u = 1 - a, s = e[0], l = e[1], f = e[2], c = e[3], h = e[4], d = e[5], p = e[6], _ = e[7], v = e[8], m = e[9], x = e[10], g = e[11], b = F * F * u + a, M = R * F * u + D * o, y = D * F * u - R * o, E = F * R * u - D * o, S = R * R * u + a, w = D * R * u + F * o, T = F * D * u + R * o, A = R * D * u - F * o, I = D * D * u + a, t[0] = s * b + h * M + v * y, t[1] = l * b + d * M + m * y, t[2] = f * b + p * M + x * y, t[3] = c * b + _ * M + g * y, t[4] = s * E + h * S + v * w, t[5] = l * E + d * S + m * w, t[6] = f * E + p * S + x * w, t[7] = c * E + _ * S + g * w, t[8] = s * T + h * A + v * I, t[9] = l * T + d * A + m * I, t[10] = f * T + p * A + x * I, t[11] = c * T + _ * A + g * I, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
            }, i.scalar.rotateX = function(t, e, n) {
                var r = Math.sin(n),
                    i = Math.cos(n),
                    o = e[4],
                    a = e[5],
                    u = e[6],
                    s = e[7],
                    l = e[8],
                    f = e[9],
                    c = e[10],
                    h = e[11];
                return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * i + l * r, t[5] = a * i + f * r, t[6] = u * i + c * r, t[7] = s * i + h * r, t[8] = l * i - o * r, t[9] = f * i - a * r, t[10] = c * i - u * r, t[11] = h * i - s * r, t
            }, i.SIMD.rotateX = function(t, e, n) {
                var r = SIMD.Float32x4.splat(Math.sin(n)),
                    i = SIMD.Float32x4.splat(Math.cos(n));
                e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                var o = SIMD.Float32x4.load(e, 4),
                    a = SIMD.Float32x4.load(e, 8);
                return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t
            }, i.rotateX = r.USE_SIMD ? i.SIMD.rotateX : i.scalar.rotateX, i.scalar.rotateY = function(t, e, n) {
                var r = Math.sin(n),
                    i = Math.cos(n),
                    o = e[0],
                    a = e[1],
                    u = e[2],
                    s = e[3],
                    l = e[8],
                    f = e[9],
                    c = e[10],
                    h = e[11];
                return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i - l * r, t[1] = a * i - f * r, t[2] = u * i - c * r, t[3] = s * i - h * r, t[8] = o * r + l * i, t[9] = a * r + f * i, t[10] = u * r + c * i, t[11] = s * r + h * i, t
            }, i.SIMD.rotateY = function(t, e, n) {
                var r = SIMD.Float32x4.splat(Math.sin(n)),
                    i = SIMD.Float32x4.splat(Math.cos(n));
                e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                var o = SIMD.Float32x4.load(e, 0),
                    a = SIMD.Float32x4.load(e, 8);
                return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), t
            }, i.rotateY = r.USE_SIMD ? i.SIMD.rotateY : i.scalar.rotateY, i.scalar.rotateZ = function(t, e, n) {
                var r = Math.sin(n),
                    i = Math.cos(n),
                    o = e[0],
                    a = e[1],
                    u = e[2],
                    s = e[3],
                    l = e[4],
                    f = e[5],
                    c = e[6],
                    h = e[7];
                return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i + l * r, t[1] = a * i + f * r, t[2] = u * i + c * r, t[3] = s * i + h * r, t[4] = l * i - o * r, t[5] = f * i - a * r, t[6] = c * i - u * r, t[7] = h * i - s * r, t
            }, i.SIMD.rotateZ = function(t, e, n) {
                var r = SIMD.Float32x4.splat(Math.sin(n)),
                    i = SIMD.Float32x4.splat(Math.cos(n));
                e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                var o = SIMD.Float32x4.load(e, 0),
                    a = SIMD.Float32x4.load(e, 4);
                return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t
            }, i.rotateZ = r.USE_SIMD ? i.SIMD.rotateZ : i.scalar.rotateZ, i.fromTranslation = function(t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
            }, i.fromScaling = function(t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.fromRotation = function(t, e, n) {
                var i, o, a, u = n[0],
                    s = n[1],
                    l = n[2],
                    f = Math.sqrt(u * u + s * s + l * l);
                return Math.abs(f) < r.EPSILON ? null : (f = 1 / f, u *= f, s *= f, l *= f, i = Math.sin(e), o = Math.cos(e), a = 1 - o, t[0] = u * u * a + o, t[1] = s * u * a + l * i, t[2] = l * u * a - s * i, t[3] = 0, t[4] = u * s * a - l * i, t[5] = s * s * a + o, t[6] = l * s * a + u * i, t[7] = 0, t[8] = u * l * a + s * i, t[9] = s * l * a - u * i, t[10] = l * l * a + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
            }, i.fromXRotation = function(t, e) {
                var n = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.fromYRotation = function(t, e) {
                var n = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.fromZRotation = function(t, e) {
                var n = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.fromRotationTranslation = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = r + r,
                    s = i + i,
                    l = o + o,
                    f = r * u,
                    c = r * s,
                    h = r * l,
                    d = i * s,
                    p = i * l,
                    _ = o * l,
                    v = a * u,
                    m = a * s,
                    x = a * l;
                return t[0] = 1 - (d + _), t[1] = c + x, t[2] = h - m, t[3] = 0, t[4] = c - x, t[5] = 1 - (f + _), t[6] = p + v, t[7] = 0, t[8] = h + m, t[9] = p - v, t[10] = 1 - (f + d), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
            }, i.getTranslation = function(t, e) {
                return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
            }, i.getRotation = function(t, e) {
                var n = e[0] + e[5] + e[10],
                    r = 0;
                return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] & e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
            }, i.fromRotationTranslationScale = function(t, e, n, r) {
                var i = e[0],
                    o = e[1],
                    a = e[2],
                    u = e[3],
                    s = i + i,
                    l = o + o,
                    f = a + a,
                    c = i * s,
                    h = i * l,
                    d = i * f,
                    p = o * l,
                    _ = o * f,
                    v = a * f,
                    m = u * s,
                    x = u * l,
                    g = u * f,
                    b = r[0],
                    M = r[1],
                    y = r[2];
                return t[0] = (1 - (p + v)) * b, t[1] = (h + g) * b, t[2] = (d - x) * b, t[3] = 0, t[4] = (h - g) * M, t[5] = (1 - (c + v)) * M, t[6] = (_ + m) * M, t[7] = 0, t[8] = (d + x) * y, t[9] = (_ - m) * y, t[10] = (1 - (c + p)) * y, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
            }, i.fromRotationTranslationScaleOrigin = function(t, e, n, r, i) {
                var o = e[0],
                    a = e[1],
                    u = e[2],
                    s = e[3],
                    l = o + o,
                    f = a + a,
                    c = u + u,
                    h = o * l,
                    d = o * f,
                    p = o * c,
                    _ = a * f,
                    v = a * c,
                    m = u * c,
                    x = s * l,
                    g = s * f,
                    b = s * c,
                    M = r[0],
                    y = r[1],
                    E = r[2],
                    S = i[0],
                    w = i[1],
                    T = i[2];
                return t[0] = (1 - (_ + m)) * M, t[1] = (d + b) * M, t[2] = (p - g) * M, t[3] = 0, t[4] = (d - b) * y, t[5] = (1 - (h + m)) * y, t[6] = (v + x) * y, t[7] = 0, t[8] = (p + g) * E, t[9] = (v - x) * E, t[10] = (1 - (h + _)) * E, t[11] = 0, t[12] = n[0] + S - (t[0] * S + t[4] * w + t[8] * T), t[13] = n[1] + w - (t[1] * S + t[5] * w + t[9] * T), t[14] = n[2] + T - (t[2] * S + t[6] * w + t[10] * T), t[15] = 1, t
            }, i.fromQuat = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = n + n,
                    u = r + r,
                    s = i + i,
                    l = n * a,
                    f = r * a,
                    c = r * u,
                    h = i * a,
                    d = i * u,
                    p = i * s,
                    _ = o * a,
                    v = o * u,
                    m = o * s;
                return t[0] = 1 - c - p, t[1] = f + m, t[2] = h - v, t[3] = 0, t[4] = f - m, t[5] = 1 - l - p, t[6] = d + _, t[7] = 0, t[8] = h + v, t[9] = d - _, t[10] = 1 - l - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, i.frustum = function(t, e, n, r, i, o, a) {
                var u = 1 / (n - e),
                    s = 1 / (i - r),
                    l = 1 / (o - a);
                return t[0] = 2 * o * u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * s, t[6] = 0, t[7] = 0, t[8] = (n + e) * u, t[9] = (i + r) * s, t[10] = (a + o) * l, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * o * 2 * l, t[15] = 0, t
            }, i.perspective = function(t, e, n, r, i) {
                var o = 1 / Math.tan(e / 2),
                    a = 1 / (r - i);
                return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (i + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * i * r * a, t[15] = 0, t
            }, i.perspectiveFromFieldOfView = function(t, e, n, r) {
                var i = Math.tan(e.upDegrees * Math.PI / 180),
                    o = Math.tan(e.downDegrees * Math.PI / 180),
                    a = Math.tan(e.leftDegrees * Math.PI / 180),
                    u = Math.tan(e.rightDegrees * Math.PI / 180),
                    s = 2 / (a + u),
                    l = 2 / (i + o);
                return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = -((a - u) * s * .5), t[9] = (i - o) * l * .5, t[10] = r / (n - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t
            }, i.ortho = function(t, e, n, r, i, o, a) {
                var u = 1 / (e - n),
                    s = 1 / (r - i),
                    l = 1 / (o - a);
                return t[0] = -2 * u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + n) * u, t[13] = (i + r) * s, t[14] = (a + o) * l, t[15] = 1, t
            }, i.lookAt = function(t, e, n, o) {
                var a, u, s, l, f, c, h, d, p, _, v = e[0],
                    m = e[1],
                    x = e[2],
                    g = o[0],
                    b = o[1],
                    M = o[2],
                    y = n[0],
                    E = n[1],
                    S = n[2];
                return Math.abs(v - y) < r.EPSILON && Math.abs(m - E) < r.EPSILON && Math.abs(x - S) < r.EPSILON ? i.identity(t) : (h = v - y, d = m - E, p = x - S, _ = 1 / Math.sqrt(h * h + d * d + p * p), h *= _, d *= _, p *= _, a = b * p - M * d, u = M * h - g * p, s = g * d - b * h, _ = Math.sqrt(a * a + u * u + s * s), _ ? (_ = 1 / _, a *= _, u *= _, s *= _) : (a = 0, u = 0, s = 0), l = d * s - p * u, f = p * a - h * s, c = h * u - d * a, _ = Math.sqrt(l * l + f * f + c * c), _ ? (_ = 1 / _, l *= _, f *= _, c *= _) : (l = 0, f = 0, c = 0), t[0] = a, t[1] = l, t[2] = h, t[3] = 0, t[4] = u, t[5] = f, t[6] = d, t[7] = 0, t[8] = s, t[9] = c, t[10] = p, t[11] = 0, t[12] = -(a * v + u * m + s * x), t[13] = -(l * v + f * m + c * x), t[14] = -(h * v + d * m + p * x), t[15] = 1, t)
            }, i.str = function(t) {
                return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
            }, i.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t[9] = e[9] + n[9], t[10] = e[10] + n[10], t[11] = e[11] + n[11], t[12] = e[12] + n[12], t[13] = e[13] + n[13], t[14] = e[14] + n[14], t[15] = e[15] + n[15], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t[9] = e[9] - n[9], t[10] = e[10] - n[10], t[11] = e[11] - n[11], t[12] = e[12] - n[12], t[13] = e[13] - n[13], t[14] = e[14] - n[14], t[15] = e[15] - n[15], t
            }, i.sub = i.subtract, i.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12] * n, t[13] = e[13] * n, t[14] = e[14] * n, t[15] = e[15] * n, t
            }, i.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t[9] = e[9] + n[9] * r, t[10] = e[10] + n[10] * r, t[11] = e[11] + n[11] * r, t[12] = e[12] + n[12] * r, t[13] = e[13] + n[13] * r, t[14] = e[14] + n[14] * r, t[15] = e[15] + n[15] * r, t
            }, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = t[2],
                    a = t[3],
                    u = t[4],
                    s = t[5],
                    l = t[6],
                    f = t[7],
                    c = t[8],
                    h = t[9],
                    d = t[10],
                    p = t[11],
                    _ = t[12],
                    v = t[13],
                    m = t[14],
                    x = t[15],
                    g = e[0],
                    b = e[1],
                    M = e[2],
                    y = e[3],
                    E = e[4],
                    S = e[5],
                    w = e[6],
                    T = e[7],
                    A = e[8],
                    I = e[9],
                    F = e[10],
                    R = e[11],
                    D = e[12],
                    P = e[13],
                    O = e[14],
                    L = e[15];
                return Math.abs(n - g) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(g)) && Math.abs(i - b) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(o - M) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(a - y) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(y)) && Math.abs(u - E) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(s - S) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(S)) && Math.abs(l - w) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(w)) && Math.abs(f - T) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(T)) && Math.abs(c - A) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(A)) && Math.abs(h - I) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(I)) && Math.abs(d - F) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(F)) && Math.abs(p - R) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(_ - D) <= r.EPSILON * Math.max(1, Math.abs(_), Math.abs(D)) && Math.abs(v - P) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(P)) && Math.abs(m - O) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(x - L) <= r.EPSILON * Math.max(1, Math.abs(x), Math.abs(L))
            }, t.exports = i
        }, function(t, e, n) {
            var r = n(10),
                i = n(71),
                o = n(72),
                a = n(73),
                u = {};
            u.create = function() {
                var t = new r.ARRAY_TYPE(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, u.rotationTo = function() {
                var t = o.create(),
                    e = o.fromValues(1, 0, 0),
                    n = o.fromValues(0, 1, 0);
                return function(r, i, a) {
                    var s = o.dot(i, a);
                    return -.999999 > s ? (o.cross(t, e, i), o.length(t) < 1e-6 && o.cross(t, n, i), o.normalize(t, t), u.setAxisAngle(r, t, Math.PI), r) : s > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (o.cross(t, i, a), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + s, u.normalize(r, r))
                }
            }(), u.setAxes = function() {
                var t = i.create();
                return function(e, n, r, i) {
                    return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = i[0], t[4] = i[1], t[7] = i[2], t[2] = -n[0], t[5] = -n[1], t[8] = -n[2], u.normalize(e, u.fromMat3(e, t))
                }
            }(), u.clone = a.clone, u.fromValues = a.fromValues, u.copy = a.copy, u.set = a.set, u.identity = function(t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, u.setAxisAngle = function(t, e, n) {
                n = .5 * n;
                var r = Math.sin(n);
                return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(n), t
            }, u.getAxisAngle = function(t, e) {
                var n = 2 * Math.acos(e[3]),
                    r = Math.sin(n / 2);
                return 0 != r ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), n
            }, u.add = a.add, u.multiply = function(t, e, n) {
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = n[0],
                    s = n[1],
                    l = n[2],
                    f = n[3];
                return t[0] = r * f + a * u + i * l - o * s, t[1] = i * f + a * s + o * u - r * l, t[2] = o * f + a * l + r * s - i * u, t[3] = a * f - r * u - i * s - o * l, t
            }, u.mul = u.multiply, u.scale = a.scale, u.rotateX = function(t, e, n) {
                n *= .5;
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = Math.sin(n),
                    s = Math.cos(n);
                return t[0] = r * s + a * u, t[1] = i * s + o * u, t[2] = o * s - i * u, t[3] = a * s - r * u, t
            }, u.rotateY = function(t, e, n) {
                n *= .5;
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = Math.sin(n),
                    s = Math.cos(n);
                return t[0] = r * s - o * u, t[1] = i * s + a * u,
                    t[2] = o * s + r * u, t[3] = a * s - i * u, t
            }, u.rotateZ = function(t, e, n) {
                n *= .5;
                var r = e[0],
                    i = e[1],
                    o = e[2],
                    a = e[3],
                    u = Math.sin(n),
                    s = Math.cos(n);
                return t[0] = r * s + i * u, t[1] = i * s - r * u, t[2] = o * s + a * u, t[3] = a * s - o * u, t
            }, u.calculateW = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2];
                return t[0] = n, t[1] = r, t[2] = i, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), t
            }, u.dot = a.dot, u.lerp = a.lerp, u.slerp = function(t, e, n, r) {
                var i, o, a, u, s, l = e[0],
                    f = e[1],
                    c = e[2],
                    h = e[3],
                    d = n[0],
                    p = n[1],
                    _ = n[2],
                    v = n[3];
                return o = l * d + f * p + c * _ + h * v, 0 > o && (o = -o, d = -d, p = -p, _ = -_, v = -v), 1 - o > 1e-6 ? (i = Math.acos(o), a = Math.sin(i), u = Math.sin((1 - r) * i) / a, s = Math.sin(r * i) / a) : (u = 1 - r, s = r), t[0] = u * l + s * d, t[1] = u * f + s * p, t[2] = u * c + s * _, t[3] = u * h + s * v, t
            }, u.sqlerp = function() {
                var t = u.create(),
                    e = u.create();
                return function(n, r, i, o, a, s) {
                    return u.slerp(t, r, a, s), u.slerp(e, i, o, s), u.slerp(n, t, e, 2 * s * (1 - s)), n
                }
            }(), u.invert = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    a = n * n + r * r + i * i + o * o,
                    u = a ? 1 / a : 0;
                return t[0] = -n * u, t[1] = -r * u, t[2] = -i * u, t[3] = o * u, t
            }, u.conjugate = function(t, e) {
                return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
            }, u.length = a.length, u.len = u.length, u.squaredLength = a.squaredLength, u.sqrLen = u.squaredLength, u.normalize = a.normalize, u.fromMat3 = function(t, e) {
                var n, r = e[0] + e[4] + e[8];
                if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n;
                else {
                    var i = 0;
                    e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
                    var o = (i + 1) % 3,
                        a = (i + 2) % 3;
                    n = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * a + a] + 1), t[i] = .5 * n, n = .5 / n, t[3] = (e[3 * o + a] - e[3 * a + o]) * n, t[o] = (e[3 * o + i] + e[3 * i + o]) * n, t[a] = (e[3 * a + i] + e[3 * i + a]) * n
                }
                return t
            }, u.str = function(t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, u.exactEquals = a.exactEquals, u.equals = a.equals, t.exports = u
        }, function(t, e, n) {
            var r = n(10),
                i = {};
            i.create = function() {
                var t = new r.ARRAY_TYPE(2);
                return t[0] = 0, t[1] = 0, t
            }, i.clone = function(t) {
                var e = new r.ARRAY_TYPE(2);
                return e[0] = t[0], e[1] = t[1], e
            }, i.fromValues = function(t, e) {
                var n = new r.ARRAY_TYPE(2);
                return n[0] = t, n[1] = e, n
            }, i.copy = function(t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, i.set = function(t, e, n) {
                return t[0] = e, t[1] = n, t
            }, i.add = function(t, e, n) {
                return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
            }, i.subtract = function(t, e, n) {
                return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
            }, i.sub = i.subtract, i.multiply = function(t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
            }, i.mul = i.multiply, i.divide = function(t, e, n) {
                return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
            }, i.div = i.divide, i.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
            }, i.floor = function(t, e) {
                return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
            }, i.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
            }, i.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
            }, i.round = function(t, e) {
                return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
            }, i.scale = function(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t
            }, i.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t
            }, i.distance = function(t, e) {
                var n = e[0] - t[0],
                    r = e[1] - t[1];
                return Math.sqrt(n * n + r * r)
            }, i.dist = i.distance, i.squaredDistance = function(t, e) {
                var n = e[0] - t[0],
                    r = e[1] - t[1];
                return n * n + r * r
            }, i.sqrDist = i.squaredDistance, i.length = function(t) {
                var e = t[0],
                    n = t[1];
                return Math.sqrt(e * e + n * n)
            }, i.len = i.length, i.squaredLength = function(t) {
                var e = t[0],
                    n = t[1];
                return e * e + n * n
            }, i.sqrLen = i.squaredLength, i.negate = function(t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, i.inverse = function(t, e) {
                return t[0] = 1 / e[0], t[1] = 1 / e[1], t
            }, i.normalize = function(t, e) {
                var n = e[0],
                    r = e[1],
                    i = n * n + r * r;
                return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t
            }, i.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, i.cross = function(t, e, n) {
                var r = e[0] * n[1] - e[1] * n[0];
                return t[0] = t[1] = 0, t[2] = r, t
            }, i.lerp = function(t, e, n, r) {
                var i = e[0],
                    o = e[1];
                return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t
            }, i.random = function(t, e) {
                e = e || 1;
                var n = 2 * r.RANDOM() * Math.PI;
                return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t
            }, i.transformMat2 = function(t, e, n) {
                var r = e[0],
                    i = e[1];
                return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t
            }, i.transformMat2d = function(t, e, n) {
                var r = e[0],
                    i = e[1];
                return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t
            }, i.transformMat3 = function(t, e, n) {
                var r = e[0],
                    i = e[1];
                return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t
            }, i.transformMat4 = function(t, e, n) {
                var r = e[0],
                    i = e[1];
                return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t
            }, i.forEach = function() {
                var t = i.create();
                return function(e, n, r, i, o, a) {
                    var u, s;
                    for (n || (n = 2), r || (r = 0), s = i ? Math.min(i * n + r, e.length) : e.length, u = r; s > u; u += n) t[0] = e[u], t[1] = e[u + 1], o(t, t, a), e[u] = t[0], e[u + 1] = t[1];
                    return e
                }
            }(), i.str = function(t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            }, i.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1]
            }, i.equals = function(t, e) {
                var n = t[0],
                    i = t[1],
                    o = e[0],
                    a = e[1];
                return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a))
            }, t.exports = i
        }, function(t, e) {
            t.exports = function() {
                throw new Error("It appears that you're using glslify in browserify without its transform applied. Make sure that you've set up glslify as a source transform: https://github.com/substack/node-browserify#browserifytransform")
            }
        }, function(t, e) {
            function n(t) {
                var e = new Int32Array(t, 0, v);
                if (e[m] !== o) throw new Error("Invalid magic number in DDS header");
                if (!e[E] & u) throw new Error("Unsupported format, must contain a FourCC code");
                var n, r, T = e[S];
                switch (T) {
                    case s:
                        n = 8, r = "dxt1";
                        break;
                    case l:
                        n = 16, r = "dxt3";
                        break;
                    case f:
                        n = 16, r = "dxt5";
                        break;
                    case h:
                        r = "rgba32f";
                        break;
                    case c:
                        var A = new Uint32Array(t.slice(128, 148));
                        r = A[0];
                        var I = A[1];
                        if (A[2], A[3], A[4], I !== p || r !== _) throw new Error("Unsupported DX10 texture format " + r);
                        r = "rgba32f";
                        break;
                    default:
                        throw new Error("Unsupported FourCC code: " + i(T))
                }
                var F = e[g],
                    R = 1;
                F & a && (R = Math.max(1, e[y]));
                var D = !1,
                    P = e[w];
                P & d && (D = !0);
                var O, L = e[M],
                    C = e[b],
                    k = e[x] + 4,
                    N = L,
                    B = C,
                    U = [];
                if (T === c && (k += 20), D)
                    for (var V = 0; 6 > V; V++) {
                        if ("rgba32f" !== r) throw new Error("Only RGBA32f cubemaps are supported");
                        var z = 16;
                        L = N, C = B;
                        for (var j = Math.log(L) / Math.log(2) + 1, G = 0; j > G; G++) O = L * C * z, U.push({
                            offset: k,
                            length: O,
                            shape: [L, C]
                        }), R > G && (k += O), L = Math.floor(L / 2), C = Math.floor(C / 2)
                    } else
                        for (var G = 0; R > G; G++) O = Math.max(4, L) / 4 * Math.max(4, C) / 4 * n, U.push({
                            offset: k,
                            length: O,
                            shape: [L, C]
                        }), k += O, L = Math.floor(L / 2), C = Math.floor(C / 2);
                return {
                    shape: [N, B],
                    images: U,
                    format: r,
                    flags: F,
                    cubemap: D
                }
            }

            function r(t) {
                return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24)
            }

            function i(t) {
                return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255)
            }
            var o = 542327876,
                a = 131072,
                u = 4,
                s = r("DXT1"),
                l = r("DXT3"),
                f = r("DXT5"),
                c = r("DX10"),
                h = 116,
                d = 512,
                p = 3,
                _ = 2,
                v = 31,
                m = 0,
                x = 1,
                g = 2,
                b = 3,
                M = 4,
                y = 7,
                E = 20,
                S = 21,
                w = 28;
            t.exports = n
        }, function(t, e) {
            t.exports = "// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\t// vec3 color = vNormal;\n\tvec3 color = vColor + vNormal * 0.0001;\n    gl_FragColor = vec4(color, 1.0);\n}"
        }, function(t, e) {
            t.exports = "// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n    vNormal = aNormal;\n}"
        }, function(t, e) {
            t.exports = "// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}"
        }, function(t, e) {
            t.exports = "// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition + aNormal * 0.000001, 1.0);\n    gl_PointSize = 1.0;\n    vNormal = aNormal;\n}"
        }, function(t, e) {
            t.exports = "// sky.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n    gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"
        }])
    })
}, function(t, e) {
    "use strict";
    e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(72),
        o = r(i);
    e.default = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }()
}, function(t, e, n) {
    t.exports = {
        "default": n(78),
        __esModule: !0
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(73),
        o = r(i),
        a = n(71),
        u = r(a),
        s = n(39),
        l = r(s);
    e.default = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, l.default)(e)));
        t.prototype = (0, u.default)(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (o.default ? (0, o.default)(t, e) : t.__proto__ = e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(39),
        o = r(i);
    e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o.default)(e)) && "function" != typeof e ? t : e
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    t.exports = !n(17)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(43),
        o = n(33),
        a = Object.defineProperty;
    e.f = n(9) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (u) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(87),
        i = n(23);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(7),
        o = n(41),
        a = n(14),
        u = "prototype",
        s = function(t, e, n) {
            var l, f, c, h = t & s.F,
                d = t & s.G,
                p = t & s.S,
                _ = t & s.P,
                v = t & s.B,
                m = t & s.W,
                x = d ? i : i[e] || (i[e] = {}),
                g = x[u],
                b = d ? r : p ? r[e] : (r[e] || {})[u];
            d && (n = e);
            for (l in n) f = !h && b && void 0 !== b[l], f && l in x || (c = f ? b[l] : n[l], x[l] = d && "function" != typeof b[l] ? n[l] : v && f ? o(c, r) : m && b[l] == c ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, r)
                    }
                    return t.apply(this, arguments)
                };
                return e[u] = t[u], e
            }(c) : _ && "function" == typeof c ? o(Function.call, c) : c, _ && ((x.virtual || (x.virtual = {}))[l] = c, t & s.R && g && !g[l] && a(g, l, c)))
        };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t, e, n) {
    var r = n(11),
        i = n(21);
    t.exports = n(9) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(31)("wks"),
        i = n(22),
        o = n(8).Symbol,
        a = "function" == typeof o,
        u = t.exports = function(t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
        };
    u.store = r
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(38),
        o = r(i),
        a = n(1),
        u = r(a),
        s = {},
        l = [],
        f = function(t) {
            return assets.find(function(e) {
                return e.id === t
            }).file
        },
        c = function(t) {
            var e = t.split(".");
            return e[e.length - 1]
        };
    s.init = function() {
        var t = {};
        l = o.default.map(function(e) {
            var n = c(e.url),
                r = f(e.id),
                i = void 0;
            switch (n) {
                case "jpg":
                case "png":
                    return i = new a.GLTexture(r), {
                        id: e.id,
                        file: i
                    };
                case "hdr":
                    var o = e.id.split("_")[0];
                    i = u.default.HDRLoader.parse(r);
                    var s = {
                        id: e.id,
                        file: i
                    };
                    return t[o] || (t[o] = []), t[o].push(s), s;
                case "dds":
                    return i = a.GLCubeTexture.parseDDS(r), {
                        id: e.id,
                        file: i
                    };
                case "obj":
                    var l = a.ObjLoader.parse(r);
                    return {
                        id: e.id,
                        file: l
                    }
            }
        });
        for (var e in t)
            if (6 == t[e].length) {
                var n = [s.get(e + "_posx"), s.get(e + "_negx"), s.get(e + "_posy"), s.get(e + "_negy"), s.get(e + "_posz"), s.get(e + "_negz")],
                    r = new u.default.GLCubeTexture(n);
                l.push({
                    id: e,
                    file: r
                })
            }
        l.length > 0
    }, s.get = function(t) {
        return l.find(function(e) {
            return e.id === t
        }).file
    }, e.default = s, t.exports = e.default
}, function(t, e, n) {
    var r = n(49),
        i = n(24);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e) {
    t.exports = {}
}, function(t, e) {
    t.exports = !0
}, function(t, e, n) {
    var r = n(16),
        i = n(93),
        o = n(24),
        a = n(30)("IE_PROTO"),
        u = function() {},
        s = "prototype",
        l = function() {
            var t, e = n(42)("iframe"),
                r = o.length,
                i = "<",
                a = ">";
            for (e.style.display = "none", n(86).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(i + "script" + a + "document.F=Object" + i + "/script" + a), t.close(), l = t.F; r--;) delete l[s][o[r]];
            return l()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (u[s] = r(t), n = new u, u[s] = null, n[a] = t) : n = l(), void 0 === e ? n : i(n, e)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var r = n(11).f,
        i = n(10),
        o = n(15)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(31)("keys"),
        i = n(22);
    t.exports = function(t) {
        return r[t] || (r[t] = i(t))
    }
}, function(t, e, n) {
    var r = n(8),
        i = "__core-js_shared__",
        o = r[i] || (r[i] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(7),
        o = n(26),
        a = n(35),
        u = n(11).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || u(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    e.f = n(15)
}, function(t, e, n) {
    "use strict";

    function r() {
        i.call(this), this.setMaxListeners(20)
    }
    var i = n(114).EventEmitter;
    r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.prototype.off = function(t, e) {
        return e ? this.removeListener(t, e) : t ? this.removeAllListeners(t) : this.removeAllListeners()
    }, t.exports = r
}, function(t, e) {
    "use strict";
    t.exports = {
        mbs: 0,
        secs: 0,
        update: function(t, e, n, r) {
            var i, o = t.getAllResponseHeaders();
            if (o) {
                var a = o.match(/content-length: (\d+)/i);
                a && a.length && (i = a[1])
            }
            if (i) {
                i = parseInt(i, 10);
                var u = i / 1024 / 1024,
                    s = (Date.now() - e) / 1e3;
                this.secs += s, this.mbs += u, r && this.log(n, u, s)
            }
        },
        log: function(t, e, n) {
            if (t) {
                "File loaded: " + t.substr(t.lastIndexOf("/") + 1) + " size:" + e.toFixed(2) + "mb time:" + n.toFixed(2) + "s speed:" + (e / n).toFixed(2) + "mbps"
            }
            "Total loaded: " + this.mbs.toFixed(2) + "mb time:" + this.secs.toFixed(2) + "s speed:" + this.getMbps().toFixed(2) + "mbps"
        },
        getMbps: function() {
            return this.mbs / this.secs
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = [{
        id: "noise",
        url: themeUrl + "/assets/img/noise.png",
        type: "png"
    }, {
        id: "paper-ball",
        url: themeUrl + "/assets/img/paper-ball.jpg",
        type: "jpg"
    }];
    e.default = n, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    e.__esModule = !0;
    var i = n(75),
        o = r(i),
        a = n(74),
        u = r(a),
        s = "function" == typeof u.default && "symbol" == typeof o.default ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : typeof t
        };
    e.default = "function" == typeof u.default && "symbol" === s(o.default) ? function(t) {
        return "undefined" == typeof t ? "undefined" : s(t)
    } : function(t) {
        return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : s(t)
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var r = n(82);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(18),
        i = n(8).document,
        o = r(i) && r(i.createElement);
    t.exports = function(t) {
        return o ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    t.exports = !n(9) && !n(17)(function() {
        return 7 != Object.defineProperty(n(42)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(26),
        i = n(13),
        o = n(50),
        a = n(14),
        u = n(10),
        s = n(25),
        l = n(89),
        f = n(29),
        c = n(48),
        h = n(15)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = "@@iterator",
        _ = "keys",
        v = "values",
        m = function() {
            return this
        };
    t.exports = function(t, e, n, x, g, b, M) {
        l(n, e, x);
        var y, E, S, w = function(t) {
                if (!d && t in F) return F[t];
                switch (t) {
                    case _:
                        return function() {
                            return new n(this, t)
                        };
                    case v:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            T = e + " Iterator",
            A = g == v,
            I = !1,
            F = t.prototype,
            R = F[h] || F[p] || g && F[g],
            D = R || w(g),
            P = g ? A ? w("entries") : D : void 0,
            O = "Array" == e ? F.entries || R : R;
        if (O && (S = c(O.call(new t)), S !== Object.prototype && (f(S, T, !0), r || u(S, h) || a(S, h, m))), A && R && R.name !== v && (I = !0, D = function() {
                return R.call(this)
            }), r && !M || !d && !I && F[h] || a(F, h, D), s[e] = D, s[T] = m, g)
            if (y = {
                    values: A ? D : w(v),
                    keys: b ? D : w(_),
                    entries: P
                }, M)
                for (E in y) E in F || o(F, E, y[E]);
            else i(i.P + i.F * (d || I), e, y);
        return y
    }
}, function(t, e, n) {
    var r = n(28),
        i = n(21),
        o = n(12),
        a = n(33),
        u = n(10),
        s = n(43),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(9) ? l : function(t, e) {
        if (t = o(t), e = a(e, !0), s) try {
            return l(t, e)
        } catch (n) {}
        if (u(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(49),
        i = n(24).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(10),
        i = n(51),
        o = n(30)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(12),
        o = n(84)(!1),
        a = n(30)("IE_PROTO");
    t.exports = function(t, e) {
        var n, u = i(t),
            s = 0,
            l = [];
        for (n in u) n != a && r(u, n) && l.push(n);
        for (; e.length > s;) r(u, n = e[s++]) && (~o(l, n) || l.push(n));
        return l
    }
}, function(t, e, n) {
    t.exports = n(14)
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e) {
    "use strict";
    t.exports = function() {
        try {
            return !!new Blob
        } catch (t) {
            return !1
        }
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(36),
        i = n(55),
        o = 0;
    t.exports = function a(t) {
        var e, n = {},
            u = [],
            s = [],
            l = 0,
            f = 0,
            c = {},
            h = function(n) {
                if (Array.isArray(n)) return n.forEach(h), e;
                var r, o = !!n.assets && Array.isArray(n.assets);
                return r = o ? a(v(n, t)) : i(v(n, t)), r.once("destroy", M), s.push(r), c[r.id] = r, e
            },
            d = function(t) {
                return arguments.length ? n[t] : u
            },
            p = function(t) {
                if (d(t)) return d(t);
                var e = null;
                return Object.keys(c).some(function(n) {
                    return e = c[n].find && c[n].find(t), !!e
                }), e
            },
            _ = function(t) {
                return t && t.split("?")[0].split(".").pop().toLowerCase()
            },
            v = function(t, e) {
                if ("string" == typeof t) {
                    var n = t;
                    t = {
                        url: n
                    }
                }
                return void 0 === t.isTouchLocked && (t.isTouchLocked = e.isTouchLocked), void 0 === t.blob && (t.blob = e.blob), void 0 === t.basePath && (t.basePath = e.basePath), t.id = t.id || t.url || String(++o), t.type = t.type || _(t.url), t.crossOrigin = t.crossOrigin || e.crossOrigin, t.webAudioContext = t.webAudioContext || e.webAudioContext, t.log = e.log, t
            },
            m = function() {
                return f = s.length, s.forEach(function(t) {
                    t.on("progress", x).once("complete", g).once("error", b).start()
                }), s = [], e
            },
            x = function(t) {
                var n = l + t;
                e.emit("progress", n / f)
            },
            g = function(t, r, i) {
                Array.isArray(t) && (t = {
                    id: r,
                    file: t,
                    type: i
                }), l++, e.emit("progress", l / f), n[t.id] = t.file, u.push(t), e.emit("childcomplete", t), y()
            },
            b = function(t) {
                f--, e.listeners("error").length && e.emit("error", t), y()
            },
            M = function(t) {
                c[t] = null, delete c[t], n[t] = null, delete n[t], u.some(function(e, n) {
                    if (e.id === t) return u.splice(n, 1), !0
                })
            },
            y = function() {
                l >= f && e.emit("complete", u, t.id, "group")
            },
            E = function() {
                for (; s.length;) s.pop().destroy();
                return e.off("error"), e.off("progress"), e.off("complete"), u = [], n = {}, t.webAudioContext = null, f = 0, l = 0, Object.keys(c).forEach(function(t) {
                    c[t].destroy()
                }), c = {}, e.emit("destroy", e.id), e
            };
        return e = Object.create(r.prototype, {
            _events: {
                value: {}
            },
            id: {
                get: function() {
                    return t.id
                }
            },
            add: {
                value: h
            },
            start: {
                value: m
            },
            get: {
                value: d
            },
            find: {
                value: p
            },
            getLoader: {
                value: function(t) {
                    return c[t]
                }
            },
            loaded: {
                get: function() {
                    return l >= f
                }
            },
            file: {
                get: function() {
                    return u
                }
            },
            destroy: {
                value: E
            }
        }), t = v(t || {}, {
            basePath: "",
            blob: !1,
            touchLocked: !1,
            crossOrigin: null,
            webAudioContext: null,
            log: !1
        }), Array.isArray(t.assets) && h(t.assets), Object.freeze(e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(53);
    r.stats = n(37), t.exports = r
}, function(t, e, n) {
    "use strict";
    var r = n(36),
        i = n(52),
        o = n(37);
    t.exports = function(t) {
        var e, n, a, u, s, l, f = t.id,
            c = t.basePath || "",
            h = t.url,
            d = t.type,
            p = t.crossOrigin,
            _ = t.isTouchLocked,
            v = t.blob && i,
            m = t.webAudioContext,
            x = t.log,
            g = function() {
                switch (u = Date.now(), d) {
                    case "json":
                        w();
                        break;
                    case "jpg":
                    case "png":
                    case "gif":
                    case "webp":
                        T();
                        break;
                    case "mp3":
                    case "ogg":
                    case "opus":
                    case "wav":
                    case "m4a":
                        D();
                        break;
                    case "ogv":
                    case "mp4":
                    case "webm":
                    case "hls":
                        P();
                        break;
                    case "bin":
                    case "binary":
                        M("arraybuffer");
                        break;
                    case "txt":
                    case "text":
                        M("text");
                        break;
                    default:
                        throw "AssetsLoader ERROR: Unknown type for file with URL: " + c + h + " (" + d + ")"
                }
            },
            b = function(t) {
                t && (l = {
                    id: f,
                    file: t,
                    type: d
                }, e.emit("progress", 1), e.emit("complete", l, f, d), k())
            },
            M = function(t, e) {
                n = e || E, a = new XMLHttpRequest, a.open("GET", c + h, !0), a.responseType = t, a.addEventListener("progress", y), a.addEventListener("load", n), a.addEventListener("error", C), a.send()
            },
            y = function(t) {
                t.lengthComputable && e.emit("progress", t.loaded / t.total)
            },
            E = function() {
                S() && b(a.response)
            },
            S = function() {
                return a && a.status < 400 ? (o.update(a, u, h, x), !0) : (C(a && a.statusText), !1)
            },
            w = function() {
                M("json", function() {
                    if (S()) {
                        var t = a.response;
                        "string" == typeof t && (t = JSON.parse(t)), b(t)
                    }
                })
            },
            T = function() {
                v ? F() : A()
            },
            A = function() {
                a = new Image, p && (a.crossOrigin = "anonymous"), a.addEventListener("error", C, !1), a.addEventListener("load", I, !1), a.src = c + h
            },
            I = function() {
                window.clearTimeout(s), b(a)
            },
            F = function() {
                M("blob", function() {
                    S() && (a = new Image, a.addEventListener("error", C, !1), a.addEventListener("load", R, !1), a.src = window.URL.createObjectURL(a.response))
                })
            },
            R = function() {
                window.URL.revokeObjectURL(a.src), b(a)
            },
            D = function() {
                m ? O() : L("audio")
            },
            P = function() {
                v ? M("blob") : L("video")
            },
            O = function() {
                M("arraybuffer", function() {
                    S() && m.decodeAudioData(a.response, function(t) {
                        a = null, b(t)
                    }, function(t) {
                        C(t)
                    })
                })
            },
            L = function(t) {
                a = document.createElement(t), _ || (window.clearTimeout(s), s = window.setTimeout(I, 2e3), a.addEventListener("canplaythrough", I, !1)), a.addEventListener("error", C, !1), a.preload = "auto", a.src = c + h, a.load(), _ && b(a)
            },
            C = function(t) {
                window.clearTimeout(s);
                var n = t;
                if (a && a.tagName && a.error) {
                    var r = ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"];
                    n = "MediaError: " + r[a.error.code] + " " + a.src
                } else a && a.statusText ? n = a.statusText : t && t.message ? n = t.message : t && t.type && (n = t.type);
                e.emit("error", 'Error loading "' + c + h + '" ' + n), N()
            },
            k = function() {
                e.off("error"), e.off("progress"), e.off("complete"), a && (a.removeEventListener("progress", y), a.removeEventListener("load", n), a.removeEventListener("error", C), a.removeEventListener("load", I), a.removeEventListener("canplaythrough", I), a.removeEventListener("load", R))
            },
            N = function() {
                k(), a && a.abort && a.readyState < 4 && a.abort(), a = null, m = null, l = null, window.clearTimeout(s), e.emit("destroy", f)
            };
        return e = Object.create(r.prototype, {
            _events: {
                value: {}
            },
            id: {
                value: t.id
            },
            start: {
                value: g
            },
            loaded: {
                get: function() {
                    return !!l
                }
            },
            file: {
                get: function() {
                    return l
                }
            },
            destroy: {
                value: N
            }
        }), Object.freeze(e)
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2),
        o = r(i),
        a = n(3),
        u = r(a),
        s = n(1),
        l = (r(s), n(64)),
        f = r(l),
        c = function() {
            function t() {
                (0, o.default)(this, t), this._vLines = new f.default
            }
            return (0, u.default)(t, [{
                key: "render",
                value: function(t, e) {
                    for (var n = void 0, r = void 0, i = 1; i < t.length - 2; i++) n = t[i].getTexture(), r = t[i + 1].getTexture(), this._vLines.render(n, r, e)
                }
            }]), t
        }();
    e.default = c, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2),
        o = r(i),
        a = n(3),
        u = r(a),
        s = n(1),
        l = r(s),
        f = function() {
            function t() {
                (0, o.default)(this, t), this._init()
            }
            return (0, u.default)(t, [{
                key: "_init",
                value: function() {
                    this._lineMaps = [];
                    for (var t = params.numParticles, e = {
                            minFilter: s.GL.NEAREST,
                            magFilter: s.GL.NEAREST,
                            type: s.GL.FLOAT
                        }, n = 0; n < params.numSeg; n++) {
                        var r = new l.default.FrameBuffer(t, t, e);
                        this._lineMaps.push(r)
                    }
                    this._bCopy = new l.default.BatchCopy
                }
            }, {
                key: "reset",
                value: function(t) {
                    for (var e = 0; e < this._lineMaps.length; e++) this.save(t)
                }
            }, {
                key: "save",
                value: function(t) {
                    var e = this._lineMaps.pop();
                    e.bind(), s.GL.clear(0, 0, 0, 0), this._bCopy.draw(t.getTexture()), e.unbind(), this._lineMaps.unshift(e)
                }
            }, {
                key: "maps",
                get: function() {
                    return this._lineMaps
                }
            }]), t
        }();
    e.default = f, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(68),
        m = r(v),
        x = n(67),
        g = r(x),
        b = n(69),
        M = r(b),
        y = n(62),
        E = r(y),
        S = n(61),
        w = r(S),
        T = n(66),
        A = r(T),
        I = n(63),
        F = (r(I), n(65)),
        R = r(F),
        D = n(59),
        P = r(D),
        O = n(57),
        L = r(O),
        C = n(60),
        k = r(C),
        N = n(56),
        B = r(N);
    window.getAsset = function(t) {
        return assets.find(function(e) {
            return e.id === t
        }).file
    };
    var U = function(t) {
        function e() {
            (0, u.default)(this, e);
            var t = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this));
            return p.GL.enableAlphaBlending(), t._count = 0, t.camera.setPerspective(Math.PI / 2, p.GL.aspectRatio, .1, 100), t.orbitalControl.radius.value = 10, t.orbitalControl.rx.value = t.orbitalControl.ry.value = .3, t.orbitalControl.radius.limit(9, 15), t.resize(), t
        }
        return (0, d.default)(e, t), (0, l.default)(e, [{
            key: "_initTextures",
            value: function() {
                var t = params.numParticles,
                    e = {
                        minFilter: p.GL.NEAREST,
                        magFilter: p.GL.NEAREST,
                        type: p.GL.FLOAT
                    };
                this._fboCurrent = new _.default.FrameBuffer(t, t, e, (!0)), this._fboTarget = new _.default.FrameBuffer(t, t, e, (!0)), this._fboRender = new _.default.FrameBuffer(p.GL.width, p.GL.height), this._fboFXAA = new _.default.FrameBuffer(p.GL.width, p.GL.height)
            }
        }, {
            key: "_initViews",
            value: function() {
                this._bBall = new _.default.BatchBall, this._vBg = new E.default, this._vBall = new w.default, this._vPost = new A.default, this._vNoise = new R.default, this._touchDetect = new k.default(this._vBall.mesh, this.camera, p.GL.canvas), this._vRender = new g.default, this._vSim = new M.default, this._vSave = new m.default, p.GL.setMatrices(this.cameraOrtho), this._fboCurrent.bind(), p.GL.clear(0, 0, 0, 0), this._vSave.render(), this._fboCurrent.unbind(), this._fboTarget.bind(), p.GL.clear(0, 0, 0, 0), this._vSave.render(), this._fboTarget.unbind(), p.GL.setMatrices(this.camera), this._sphereMap = new P.default, this._linesMap = new L.default, this._linesMap.reset(this._fboCurrent), this._lineRenderer = new B.default
            }
        }, {
            key: "updateFbo",
            value: function() {
                var t = this._touchDetect.hit;
                this._fboTarget.bind(), p.GL.clear(0, 0, 0, 1), this._vSim.render(this._fboCurrent.getTexture(1), this._fboCurrent.getTexture(0), this._fboCurrent.getTexture(2), this._fboCurrent.getTexture(3), t), this._fboTarget.unbind();
                var e = this._fboCurrent;
                this._fboCurrent = this._fboTarget, this._fboTarget = e, this._linesMap.save(this._fboCurrent)
            }
        }, {
            key: "render",
            value: function() {
                this._count++, this._count % params.skipCount == 0 && (this._count = 0, this.updateFbo());
                var t = this._count / params.skipCount;
                this._sphereMap.update(), this._fboRender.bind(), p.GL.clear(0, 0, 0, 0), p.GL.disable(p.GL.DEPTH_TEST), this._vBg.render(), this._vNoise.render(), p.GL.enable(p.GL.DEPTH_TEST), this._vBall.render(), this._vRender.render(this._fboTarget.getTexture(0), this._fboCurrent.getTexture(0), t, this._fboCurrent.getTexture(2)), this._lineRenderer.render(this._linesMap.maps, this._fboCurrent.getTexture(2)), this._fboRender.unbind(), p.GL.clear(0, 0, 0, 0), this._vPost.render(this._fboRender.getTexture(), this._sphereMap.getTexture())
            }
        }, {
            key: "resize",
            value: function() {
                var t = 1;
                p.GL.setSize(window.innerWidth * t, window.innerHeight * t), this.camera.setAspectRatio(p.GL.aspectRatio), this._fboRender = new _.default.FrameBuffer(p.GL.width, p.GL.height), this._fboFXAA = new _.default.FrameBuffer(p.GL.width, p.GL.height)
            }
        }]), e
    }(_.default.Scene);
    e.default = U, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(2),
        o = r(i),
        a = n(3),
        u = r(a),
        s = n(1),
        l = r(s),
        f = function() {
            function t() {
                (0, o.default)(this, t);
                var e = 512;
                this._fboSphere = new l.default.FrameBuffer(e, e), this._bBall = new l.default.BatchBall
            }
            return (0, u.default)(t, [{
                key: "update",
                value: function() {
                    this._fboSphere.bind(), s.GL.clear();
                    var t = params.sphereSize;
                    this._bBall.draw([0, 0, 0], [t, t, t], [1, 1, 1]), this._fboSphere.unbind()
                }
            }, {
                key: "getTexture",
                value: function() {
                    return this._fboSphere.getTexture()
                }
            }]), t
        }();
    e.default = f, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = (r(p), void 0),
        v = void 0,
        m = void 0,
        x = function(t) {
            function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                (0, u.default)(this, e);
                var i = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this));
                return i._mesh = t, i._camera = n, i._isMouseDown = !0, i._listenerTarget = r, i._ray = new p.Ray([0, 0, 0], [0, 0, -1]), i._hit = vec3.fromValues(-999, -999, -999), i._count = 0, t.generateFaces(), i._faceVertices = t.faces.map(function(t) {
                    return t.vertices
                }), i._initEvents(), i
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_initEvents",
                value: function() {
                    var t = this;
                    this._listenerTarget.addEventListener("mousedown", function() {
                        return t._onDown()
                    }), this._listenerTarget.addEventListener("mouseup", function() {
                        return t._onUp()
                    }), this._listenerTarget.addEventListener("mousemove", function(e) {
                        return t._onMove(e)
                    })
                }
            }, {
                key: "_onDown",
                value: function(t) {
                    this._isMouseDown = !0, this.trigger("down")
                }
            }, {
                key: "_onUp",
                value: function(t) {
                    this._isMouseDown = !0, this.trigger("up")
                }
            }, {
                key: "_onMove",
                value: function(t) {
                    if (this._count++ % 5 === 0) {
                        var e = t.clientX / window.innerWidth * 2 - 1,
                            n = 2 * -(t.clientY / window.innerHeight) + 1;
                        this._camera.generateRay([e, n, 0], this._ray);
                        for (var r = void 0, i = 0, o = this._faceVertices, a = 0; a < o.length; a++) {
                            var u = o[a];
                            if (_ = [u[0][0], u[0][1] + i, u[0][2]], v = [u[1][0], u[1][1] + i, u[1][2]], m = [u[2][0], u[2][1] + i, u[2][2]], r = this._ray.intersectTriangle(_, v, m)) break
                        }
                        r || (r = [-999, -999, -999]), vec3.copy(this._hit, r)
                    }
                }
            }, {
                key: "isMouseDown",
                get: function() {
                    return this._isMouseDown
                }
            }, {
                key: "hit",
                get: function() {
                    return this._hit
                }
            }]), e
        }(p.EventDispatcher);
    e.default = x, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(19),
        m = r(v),
        x = n(117),
        g = r(x),
        b = n(116),
        M = r(b),
        y = function(t) {
            function e() {
                (0, u.default)(this, e);
                var t = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, null, M.default));
                return t.shaderOutline = new _.default.GLShader(g.default, _.default.ShaderLibs.simpleColorFrag), t.shaderOutline.bind(), t.shaderOutline.uniform("uLineWidth", "float", 1.025), t.shaderOutline.uniform("color", "vec3", [1, 1, 1]), t.shaderOutline.uniform("opacity", "float", 1), t.shader.bind(), t.shader.uniform(params.light), t.shader.uniform("texture", "uniform1i", 0), t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    this.mesh = _.default.Geom.sphere(params.sphereSize, 36), this.texture = m.default.get("paper-ball")
                }
            }, {
                key: "render",
                value: function() {
                    this.shader.bind(), this.texture.bind(0), p.GL.draw(this.mesh), this.shaderOutline.bind(), p.GL.gl.cullFace(p.GL.gl.FRONT), p.GL.draw(this.mesh), p.GL.gl.cullFace(p.GL.gl.BACK)
                }
            }]), e
        }(_.default.View);
    e.default = y, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(19),
        m = r(v),
        x = n(118),
        g = r(x),
        b = function(t) {
            function e() {
                return (0, u.default)(this, e), (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, _.default.ShaderLibs.bigTriangleVert, g.default))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    this.mesh = _.default.Geom.bigTriangle(), this.texture = m.default.get("paper-ball")
                }
            }, {
                key: "render",
                value: function() {
                    this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this.texture.bind(0), this.shader.uniform("uRatio", "float", p.GL.aspectRatio), p.GL.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = b, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(119),
        m = r(v),
        x = function(t) {
            function e() {
                return (0, u.default)(this, e), (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, _.default.ShaderLibs.bigTriangleVert, m.default))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    this.mesh = _.default.Geom.bigTriangle()
                }
            }, {
                key: "render",
                value: function(t) {
                    this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), t.bind(0), this.shader.uniform("rtWidth", "float", p.GL.width), this.shader.uniform("rtHeight", "float", p.GL.height), p.GL.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = x, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(121),
        m = r(v),
        x = n(120),
        g = r(x),
        b = function(t) {
            function e() {
                return (0, u.default)(this, e), (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, m.default, g.default))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    for (var t = params, e = t.numParticles, n = [], r = [], i = 0, o = void 0, a = void 0, u = 0; u < e; u++)
                        for (var s = 0; s < e; s++) o = s / e, a = u / e, n.push([o, a, 0]), n.push([o, a, 1]), r.push(i), r.push(i + 1), i += 2;
                    this.mesh = new _.default.Mesh(p.GL.LINES), this.mesh.bufferVertex(n), this.mesh.bufferIndex(r), this.shader.bind();
                    var l = .4;
                    this.shader.uniform("color", "vec3", [l, l, l]), this.shader.uniform("opacity", "float", .25), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("uNumSeg", "float", params.numSeg), this.shader.uniform(params.lineLife)
                }
            }, {
                key: "render",
                value: function(t, e, n) {
                    this.shader.bind(), t.bind(0), e.bind(1), n.bind(2), p.GL.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = b, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(19),
        m = r(v),
        x = n(123),
        g = r(x),
        b = n(122),
        M = r(b),
        y = 200,
        E = function(t, e) {
            return t + Math.random() * (e - t)
        },
        S = function(t) {
            function e() {
                (0, u.default)(this, e);
                var t = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, g.default, M.default));
                return t.time = 0, t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    function t() {
                        var t = vec3.fromValues(0, 0, -params.sphereSize + E(.1, 1));
                        return mat4.identity(o, o), mat4.rotateY(o, o, Math.random() * Math.PI * 2), mat4.rotateX(o, o, Math.random() * Math.PI - Math.PI / 2), vec3.transformMat4(t, t, o), t
                    }
                    for (var e = [], n = [], r = [], i = 0, o = mat4.create(), a = 0; a < y; a++) e.push(t()), n.push([Math.random(), Math.random(), Math.random()]), r.push(i), i++;
                    this.mesh = new _.default.Mesh(p.GL.POINTS), this.mesh.bufferVertex(e), this.mesh.bufferData(n, "aExtra"), this.texture = m.default.get("noise")
                }
            }, {
                key: "render",
                value: function() {
                    this.time += .01, this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), this.texture.bind(0), this.shader.uniform("time", "float", this.time), p.GL.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = S, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(124),
        m = r(v),
        x = function(t) {
            function e() {
                (0, u.default)(this, e);
                var t = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, _.default.ShaderLibs.bigTriangleVert, m.default));
                return t.offset = new _.default.EaseNumber(1), t._toggle = !1, window.addEventListener("keydown", function(e) {
//                    32 === e.keyCode && (t._toggle = !t._toggle, t.offset.value = t._toggle ? 1 : 0, document.body.classList.toggle("interacted", !0))
                }), t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    this.mesh = _.default.Geom.bigTriangle()
                }
            }, {
                key: "render",
                value: function(t, e) {
                    this.shader.bind(), this.shader.uniform("texture", "uniform1i", 0), t.bind(0), this.shader.uniform("textureMap", "uniform1i", 1), e.bind(1), this.shader.uniform("offset", "float", this.offset.value), p.GL.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = x, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(126),
        m = n(125),
        x = _.default.GL,
        g = function(t) {
            function e() {
                (0, u.default)(this, e);
                var t = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, v, m));
                return t.time = 4095 * Math.random(), t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    for (var t = [], e = [], n = 0, r = params.numParticles, i = void 0, o = void 0, a = 0; a < r; a++)
                        for (var u = 0; u < r; u++) i = u / r, o = a / r, t.push([i, o, 0]), e.push(n), n++;
                    this.mesh = new _.default.Mesh(x.POINTS), this.mesh.bufferVertex(t), this.mesh.bufferIndex(e), this.shader.bind(), this.shader.uniform(params.lineLife), this.shader.uniform("textureCurr", "uniform1i", 0), this.shader.uniform("textureNext", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("uNumSeg", "float", params.numSeg)
                }
            }, {
                key: "render",
                value: function(t, e, n, r) {
                    this.time += .1, this.shader.bind(), t.bind(0), e.bind(1), r.bind(2), this.shader.uniform("uViewport", "vec2", [x.width, x.height]), this.shader.uniform("percent", "float", n), this.shader.uniform("time", "float", this.time), x.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = g, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = n(128),
        m = n(127),
        x = _.default.GL,
        g = function(t, e) {
            return t + Math.random() * (e - t)
        },
        b = function(t) {
            function e() {
                return (0, u.default)(this, e), (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, v, m))
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    function t() {
                        var t = vec3.fromValues(0, 0, -params.sphereSize);
                        return mat4.identity(l, l), mat4.rotateY(l, l, Math.random() * Math.PI * 2), mat4.rotateX(l, l, Math.random() * Math.PI - Math.PI / 2), vec3.transformMat4(t, t, l), t
                    }
                    for (var e = [], n = [], r = [], i = [], o = 0, a = params.numParticles, u = void 0, s = void 0, l = mat4.create(), f = 0; f < a; f++)
                        for (var c = 0; c < a; c++) e.push(t()), u = c / a * 2 - 1 + .5 / a, s = f / a * 2 - 1 + .5 / a, i.push([Math.random(), Math.random(), g(1, params.lineLife.uEnd)]), n.push([u, s]), r.push(o), o++;
                    this.mesh = new _.default.Mesh(x.POINTS), this.mesh.bufferVertex(e), this.mesh.bufferData(i, "aExtra", 3), this.mesh.bufferTexCoord(n), this.mesh.bufferIndex(r)
                }
            }, {
                key: "render",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.shader.bind(), x.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = b, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = r(i),
        a = n(2),
        u = r(a),
        s = n(3),
        l = r(s),
        f = n(6),
        c = r(f),
        h = n(5),
        d = r(h),
        p = n(1),
        _ = r(p),
        v = _.default.GL,
        m = n(129),
        x = function(t) {
            function e() {
                (0, u.default)(this, e);
                var t = (0, c.default)(this, (e.__proto__ || (0, o.default)(e)).call(this, _.default.ShaderLibs.bigTriangleVert, m));
                return t.time = 255 * Math.random(), t
            }
            return (0, d.default)(e, t), (0, l.default)(e, [{
                key: "_init",
                value: function() {
                    this.mesh = _.default.Geom.bigTriangle(), this.shader.bind(), this.shader.uniform("textureVel", "uniform1i", 0), this.shader.uniform("texturePos", "uniform1i", 1), this.shader.uniform("textureExtra", "uniform1i", 2), this.shader.uniform("textureOrgPos", "uniform1i", 3), this.shader.uniform(params.lineLife), this.shader.uniform("uNumSeg", "float", params.numSeg), this.shader.uniform("uSphereSize", "float", params.sphereSize)
                }
            }, {
                key: "render",
                value: function(t, e, n, r, i) {
                    this.time += .01, this.shader.bind(), this.shader.uniform("time", "float", this.time), t.bind(0), e.bind(1), n.bind(2), r.bind(3), this.shader.uniform("uHit", "vec3", i), v.draw(this.mesh)
                }
            }]), e
        }(_.default.View);
    e.default = x, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }















































    function i() {
        if (_.default.length > 0) {
            new c.default({
                assets: _.default
            }).on("error", function(t) {}).on("progress", function(t) {
                //var e = document.body.querySelector(".Loading-Bar");
                //e && (e.style.width = (100 * t).toFixed(2) + "%")
            }).on("complete", o).start()
        } else a()
    }

    function o(t) {
        window.assets = t;
        a();
//        var e = document.body.querySelector(".Loading-Bar");
        // e.style.width = "100%", a(), setTimeout(function() {
        //     document.body.classList.remove("isLoading")
        // }, 250)
    }

    function a() {
        if ($('html').hasClass('desktop') && $('body').hasClass('home')) {
            var t = document.createElement("canvas");
            t.className = "particles"; 
            $(t).prependTo('.intro .media-holder');
            //document.body.appendChild(t);
            u.GL.init(t, {
                ignoreWebgl2: !0
            }), m.default.init();
            new l.default
        }
    }
    n(115);
    var u = n(1),
        s = (r(u), n(58)),
        l = r(s),
        f = n(54),
        c = r(f),
        h = n(111),
        d = (r(h), n(130)),
        p = (r(d), n(38)),
        _ = r(p),
        v = n(19),
        m = r(v);
    window.params = {
        numParticles: 64,
        skipCount: 4,
        maxRadius: 0.5,
        sphereSize: 0.5,
        numSeg: 40,
        light: {
            lightPos: [0, 0, 1]
        },
        lineLife: {
            uEnd: 250,
            uLength: 30
        }
    }; 
    if (document.body) { 
        i() 
    } else { 
        window.addEventListener("DOMContentLoaded", i) 
//        $(document).on('historySwapCallback', i)
    }
}, function(t, e, n) {
    t.exports = {
        "default": n(76),
        __esModule: !0
    }
}, function(t, e, n) {
    t.exports = {
        "default": n(77),
        __esModule: !0
    }
}, function(t, e, n) {
    t.exports = {
        "default": n(79),
        __esModule: !0
    }
}, function(t, e, n) {
    t.exports = {
        "default": n(80),
        __esModule: !0
    }
}, function(t, e, n) {
    t.exports = {
        "default": n(81),
        __esModule: !0
    }
}, function(t, e, n) {
    n(101);
    var r = n(7).Object;
    t.exports = function(t, e) {
        return r.create(t, e)
    }
}, function(t, e, n) {
    n(102);
    var r = n(7).Object;
    t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
    }
}, function(t, e, n) {
    n(103), t.exports = n(7).Object.getPrototypeOf
}, function(t, e, n) {
    n(104), t.exports = n(7).Object.setPrototypeOf
}, function(t, e, n) {
    n(107), n(105), n(108), n(109), t.exports = n(7).Symbol
}, function(t, e, n) {
    n(106), n(110), t.exports = n(35).f("iterator")
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, n) {
    var r = n(12),
        i = n(99),
        o = n(98);
    t.exports = function(t) {
        return function(e, n, a) {
            var u, s = r(e),
                l = i(s.length),
                f = o(a, l);
            if (t && n != n) {
                for (; l > f;)
                    if (u = s[f++], u != u) return !0
            } else
                for (; l > f; f++)
                    if ((t || f in s) && s[f] === n) return t || f || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(47),
        o = n(28);
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        if (n)
            for (var a, u = n(t), s = o.f, l = 0; u.length > l;) s.call(t, a = u[l++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    t.exports = n(8).document && document.documentElement
}, function(t, e, n) {
    var r = n(40);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var r = n(40);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(27),
        i = n(21),
        o = n(29),
        a = {};
    n(14)(a, n(15)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: i(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(12);
    t.exports = function(t, e) {
        for (var n, o = i(t), a = r(o), u = a.length, s = 0; u > s;)
            if (o[n = a[s++]] === e) return n
    }
}, function(t, e, n) {
    var r = n(22)("meta"),
        i = n(18),
        o = n(10),
        a = n(11).f,
        u = 0,
        s = Object.isExtensible || function() {
            return !0
        },
        l = !n(17)(function() {
            return s(Object.preventExtensions({}))
        }),
        f = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        },
        c = function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, r)) {
                if (!s(t)) return "F";
                if (!e) return "E";
                f(t)
            }
            return t[r].i
        },
        h = function(t, e) {
            if (!o(t, r)) {
                if (!s(t)) return !0;
                if (!e) return !1;
                f(t)
            }
            return t[r].w
        },
        d = function(t) {
            return l && p.NEED && s(t) && !o(t, r) && f(t), t
        },
        p = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: c,
            getWeak: h,
            onFreeze: d
        }
}, function(t, e, n) {
    var r = n(11),
        i = n(16),
        o = n(20);
    t.exports = n(9) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, a = o(e), u = a.length, s = 0; u > s;) r.f(t, n = a[s++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(46).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function(t) {
            try {
                return i(t)
            } catch (e) {
                return a.slice()
            }
        };
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? u(t) : i(r(t))
    }
}, function(t, e, n) {
    var r = n(13),
        i = n(7),
        o = n(17);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * o(function() {
            n(1)
        }), "Object", a)
    }
}, function(t, e, n) {
    var r = n(18),
        i = n(16),
        o = function(t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                r = n(41)(Function.call, n(45).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
            } catch (i) {
                e = !0
            }
            return function(t, n) {
                return o(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(t, e, n) {
    var r = n(32),
        i = n(23);
    t.exports = function(t) {
        return function(e, n) {
            var o, a, u = String(i(e)),
                s = r(n),
                l = u.length;
            return s < 0 || s >= l ? t ? "" : void 0 : (o = u.charCodeAt(s), o < 55296 || o > 56319 || s + 1 === l || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : o : t ? u.slice(s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function(t, e, n) {
    var r = n(32),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var r = n(32),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(83),
        i = n(90),
        o = n(25),
        a = n(12);
    t.exports = n(44)(Array, "Array", function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
    var r = n(13);
    r(r.S, "Object", {
        create: n(27)
    })
}, function(t, e, n) {
    var r = n(13);
    r(r.S + r.F * !n(9), "Object", {
        defineProperty: n(11).f
    })
}, function(t, e, n) {
    var r = n(51),
        i = n(48);
    n(95)("getPrototypeOf", function() {
        return function(t) {
            return i(r(t))
        }
    })
}, function(t, e, n) {
    var r = n(13);
    r(r.S, "Object", {
        setPrototypeOf: n(96).set
    })
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var r = n(97)(!0);
    n(44)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(10),
        o = n(9),
        a = n(13),
        u = n(50),
        s = n(92).KEY,
        l = n(17),
        f = n(31),
        c = n(29),
        h = n(22),
        d = n(15),
        p = n(35),
        _ = n(34),
        v = n(91),
        m = n(85),
        x = n(88),
        g = n(16),
        b = n(12),
        M = n(33),
        y = n(21),
        E = n(27),
        S = n(94),
        w = n(45),
        T = n(11),
        A = n(20),
        I = w.f,
        F = T.f,
        R = S.f,
        D = r.Symbol,
        P = r.JSON,
        O = P && P.stringify,
        L = "prototype",
        C = d("_hidden"),
        k = d("toPrimitive"),
        N = {}.propertyIsEnumerable,
        B = f("symbol-registry"),
        U = f("symbols"),
        V = f("op-symbols"),
        z = Object[L],
        j = "function" == typeof D,
        G = r.QObject,
        X = !G || !G[L] || !G[L].findChild,
        Y = o && l(function() {
            return 7 != E(F({}, "a", {
                get: function() {
                    return F(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var r = I(z, e);
            r && delete z[e], F(t, e, n), r && t !== z && F(z, e, r)
        } : F,
        H = function(t) {
            var e = U[t] = E(D[L]);
            return e._k = t, e
        },
        q = j && "symbol" == typeof D.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof D
        },
        W = function(t, e, n) {
            return t === z && W(V, e, n), g(t), e = M(e, !0), g(n), i(U, e) ? (n.enumerable ? (i(t, C) && t[C][e] && (t[C][e] = !1), n = E(n, {
                enumerable: y(0, !1)
            })) : (i(t, C) || F(t, C, y(1, {})), t[C][e] = !0), Y(t, e, n)) : F(t, e, n)
        },
        Q = function(t, e) {
            g(t);
            for (var n, r = m(e = b(e)), i = 0, o = r.length; o > i;) W(t, n = r[i++], e[n]);
            return t
        },
        K = function(t, e) {
            return void 0 === e ? E(t) : Q(E(t), e)
        },
        Z = function(t) {
            var e = N.call(this, t = M(t, !0));
            return !(this === z && i(U, t) && !i(V, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, C) && this[C][t]) || e)
        },
        J = function(t, e) {
            if (t = b(t), e = M(e, !0), t !== z || !i(U, e) || i(V, e)) {
                var n = I(t, e);
                return !n || !i(U, e) || i(t, C) && t[C][e] || (n.enumerable = !0), n
            }
        },
        $ = function(t) {
            for (var e, n = R(b(t)), r = [], o = 0; n.length > o;) i(U, e = n[o++]) || e == C || e == s || r.push(e);
            return r
        },
        tt = function(t) {
            for (var e, n = t === z, r = R(n ? V : b(t)), o = [], a = 0; r.length > a;) !i(U, e = r[a++]) || n && !i(z, e) || o.push(U[e]);
            return o
        };
    j || (D = function() {
        if (this instanceof D) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === z && e.call(V, n), i(this, C) && i(this[C], t) && (this[C][t] = !1), Y(this, t, y(1, n))
            };
        return o && X && Y(z, t, {
            configurable: !0,
            set: e
        }), H(t)
    }, u(D[L], "toString", function() {
        return this._k
    }), w.f = J, T.f = W, n(46).f = S.f = $, n(28).f = Z, n(47).f = tt, o && !n(26) && u(z, "propertyIsEnumerable", Z, !0), p.f = function(t) {
        return H(d(t))
    }), a(a.G + a.W + a.F * !j, {
        Symbol: D
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
    for (var et = A(d.store), nt = 0; et.length > nt;) _(et[nt++]);
    a(a.S + a.F * !j, "Symbol", {
        "for": function(t) {
            return i(B, t += "") ? B[t] : B[t] = D(t)
        },
        keyFor: function(t) {
            if (q(t)) return v(B, t);
            throw TypeError(t + " is not a symbol!")
        },
        useSetter: function() {
            X = !0
        },
        useSimple: function() {
            X = !1
        }
    }), a(a.S + a.F * !j, "Object", {
        create: K,
        defineProperty: W,
        defineProperties: Q,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: tt
    }), P && a(a.S + a.F * (!j || l(function() {
        var t = D();
        return "[null]" != O([t]) || "{}" != O({
            a: t
        }) || "{}" != O(Object(t))
    })), "JSON", {
        stringify: function(t) {
            if (void 0 !== t && !q(t)) {
                for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                return e = r[1], "function" == typeof e && (n = e), !n && x(e) || (e = function(t, e) {
                    if (n && (e = n.call(this, t, e)), !q(e)) return e
                }), r[1] = e, O.apply(P, r)
            }
        }
    }), D[L][k] || n(14)(D[L], k, D[L].valueOf), c(D, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0)
}, function(t, e, n) {
    n(34)("asyncIterator")
}, function(t, e, n) {
    n(34)("observable")
}, function(t, e, n) {
    n(100);
    for (var r = n(8), i = n(14), o = n(25), a = n(15)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
        var l = u[s],
            f = r[l],
            c = f && f.prototype;
        c && !c[a] && i(c, a, l), o[l] = o.Array
    }
}, function(t, e, n) {
    t.exports = n(113), t.exports.color = n(112)
}, function(t, e) {
    var n = t.exports = n || {};
    n.color = n.color || {}, n.utils = n.utils || {}, n.utils.common = function() {
        var t = Array.prototype.forEach,
            e = Array.prototype.slice;
        return {
            BREAK: {},
            extend: function(t) {
                return this.each(e.call(arguments, 1), function(e) {
                    for (var n in e) this.isUndefined(e[n]) || (t[n] = e[n])
                }, this), t
            },
            defaults: function(t) {
                return this.each(e.call(arguments, 1), function(e) {
                    for (var n in e) this.isUndefined(t[n]) && (t[n] = e[n])
                }, this), t
            },
            compose: function() {
                var t = e.call(arguments);
                return function() {
                    for (var n = e.call(arguments), r = t.length - 1; r >= 0; r--) n = [t[r].apply(this, n)];
                    return n[0]
                }
            },
            each: function(e, n, r) {
                if (t && e.forEach === t) e.forEach(n, r);
                else if (e.length === e.length + 0) {
                    for (var i = 0, o = e.length; i < o; i++)
                        if (i in e && n.call(r, e[i], i) === this.BREAK) return
                } else
                    for (var i in e)
                        if (n.call(r, e[i], i) === this.BREAK) return
            },
            defer: function(t) {
                setTimeout(t, 0)
            },
            toArray: function(t) {
                return t.toArray ? t.toArray() : e.call(t)
            },
            isUndefined: function(t) {
                return void 0 === t
            },
            isNull: function(t) {
                return null === t
            },
            isNaN: function(t) {
                return t !== t
            },
            isArray: Array.isArray || function(t) {
                return t.constructor === Array
            },
            isObject: function(t) {
                return t === Object(t)
            },
            isNumber: function(t) {
                return t === t + 0
            },
            isString: function(t) {
                return t === t + ""
            },
            isBoolean: function(t) {
                return t === !1 || t === !0
            },
            isFunction: function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }
    }(), n.color.toString = function(t) {
        return function(e) {
            if (1 == e.a || t.isUndefined(e.a)) {
                for (var n = e.hex.toString(16); n.length < 6;) n = "0" + n;
                return "#" + n
            }
            return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
        }
    }(n.utils.common), n.Color = n.color.Color = function(t, e, n, r) {
        function i(t, e, n) {
            Object.defineProperty(t, e, {
                get: function() {
                    return "RGB" === this.__state.space ? this.__state[e] : (a(this, e, n), this.__state[e])
                },
                set: function(t) {
                    "RGB" !== this.__state.space && (a(this, e, n), this.__state.space = "RGB"), this.__state[e] = t
                }
            })
        }

        function o(t, e) {
            Object.defineProperty(t, e, {
                get: function() {
                    return "HSV" === this.__state.space ? this.__state[e] : (u(this), this.__state[e])
                },
                set: function(t) {
                    "HSV" !== this.__state.space && (u(this), this.__state.space = "HSV"), this.__state[e] = t
                }
            })
        }

        function a(t, n, i) {
            if ("HEX" === t.__state.space) t.__state[n] = e.component_from_hex(t.__state.hex, i);
            else {
                if ("HSV" !== t.__state.space) throw "Corrupted color state";
                r.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
            }
        }

        function u(t) {
            var n = e.rgb_to_hsv(t.r, t.g, t.b);
            r.extend(t.__state, {
                s: n.s,
                v: n.v
            }), r.isNaN(n.h) ? r.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = n.h
        }
        var s = function() {
            if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1
        };
        return s.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r.extend(s.prototype, {
            toString: function() {
                return n(this)
            },
            toOriginal: function() {
                return this.__state.conversion.write(this)
            }
        }), i(s.prototype, "r", 2), i(s.prototype, "g", 1), i(s.prototype, "b", 0), o(s.prototype, "h"), o(s.prototype, "s"), o(s.prototype, "v"), Object.defineProperty(s.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(t) {
                this.__state.a = t
            }
        }), Object.defineProperty(s.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(t) {
                this.__state.space = "HEX", this.__state.hex = t
            }
        }), s
    }(n.color.interpret = function(t, e) {
        var n, r, i = function() {
                r = !1;
                var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
                return e.each(o, function(i) {
                    if (i.litmus(t)) return e.each(i.conversions, function(i, o) {
                        if (n = i.read(t), r === !1 && n !== !1) return r = n, n.conversionName = o, n.conversion = i, e.BREAK
                    }), e.BREAK
                }), r
            },
            o = [{
                litmus: e.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
                            }
                        },
                        write: t
                    },
                    SIX_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9]{6})$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString())
                            }
                        },
                        write: t
                    },
                    CSS_RGB: {
                        read: function(t) {
                            var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3])
                            }
                        },
                        write: t
                    },
                    CSS_RGBA: {
                        read: function(t) {
                            var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3]),
                                a: parseFloat(e[4])
                            }
                        },
                        write: t
                    }
                }
            }, {
                litmus: e.isNumber,
                conversions: {
                    HEX: {
                        read: function(t) {
                            return {
                                space: "HEX",
                                hex: t,
                                conversionName: "HEX"
                            }
                        },
                        write: function(t) {
                            return t.hex
                        }
                    }
                }
            }, {
                litmus: e.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(t) {
                            return 3 == t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(t) {
                            return 4 == t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2],
                                a: t[3]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b, t.a]
                        }
                    }
                }
            }, {
                litmus: e.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        }
                    }
                }
            }];
        return i
    }(n.color.toString, n.utils.common), n.color.math = function() {
        var t;
        return {
            hsv_to_rgb: function(t, e, n) {
                var r = Math.floor(t / 60) % 6,
                    i = t / 60 - Math.floor(t / 60),
                    o = n * (1 - e),
                    a = n * (1 - i * e),
                    u = n * (1 - (1 - i) * e),
                    s = [
                        [n, u, o],
                        [a, n, o],
                        [o, n, u],
                        [o, a, n],
                        [u, o, n],
                        [n, o, a]
                    ][r];
                return {
                    r: 255 * s[0],
                    g: 255 * s[1],
                    b: 255 * s[2]
                }
            },
            rgb_to_hsv: function(t, e, n) {
                var r, i, o = Math.min(t, e, n),
                    a = Math.max(t, e, n),
                    u = a - o;
                return 0 == a ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (i = u / a, r = t == a ? (e - n) / u : e == a ? 2 + (n - t) / u : 4 + (t - e) / u, r /= 6, r < 0 && (r += 1), {
                    h: 360 * r,
                    s: i,
                    v: a / 255
                })
            },
            rgb_to_hex: function(t, e, n) {
                var r = this.hex_with_component(0, 2, t);
                return r = this.hex_with_component(r, 1, e), r = this.hex_with_component(r, 0, n)
            },
            component_from_hex: function(t, e) {
                return t >> 8 * e & 255
            },
            hex_with_component: function(e, n, r) {
                return r << (t = 8 * n) | e & ~(255 << t)
            }
        }
    }(), n.color.toString, n.utils.common)
}, function(t, e) {
    var n = t.exports = n || {};
    n.gui = n.gui || {}, n.utils = n.utils || {}, n.controllers = n.controllers || {}, n.dom = n.dom || {}, n.color = n.color || {}, n.utils.css = function() {
        return {
            load: function(t, e) {
                e = e || document;
                var n = e.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = t, e.getElementsByTagName("head")[0].appendChild(n)
            },
            inject: function(t, e) {
                e = e || document;
                var n = document.createElement("style");
                n.type = "text/css", n.innerHTML = t, e.getElementsByTagName("head")[0].appendChild(n)
            }
        }
    }(), n.utils.common = function() {
        var t = Array.prototype.forEach,
            e = Array.prototype.slice;
        return {
            BREAK: {},
            extend: function(t) {
                return this.each(e.call(arguments, 1), function(e) {
                    for (var n in e) this.isUndefined(e[n]) || (t[n] = e[n])
                }, this), t
            },
            defaults: function(t) {
                return this.each(e.call(arguments, 1), function(e) {
                    for (var n in e) this.isUndefined(t[n]) && (t[n] = e[n])
                }, this), t
            },
            compose: function() {
                var t = e.call(arguments);
                return function() {
                    for (var n = e.call(arguments), r = t.length - 1; r >= 0; r--) n = [t[r].apply(this, n)];
                    return n[0]
                }
            },
            each: function(e, n, r) {
                if (t && e.forEach === t) e.forEach(n, r);
                else if (e.length === e.length + 0) {
                    for (var i = 0, o = e.length; i < o; i++)
                        if (i in e && n.call(r, e[i], i) === this.BREAK) return
                } else
                    for (var i in e)
                        if (n.call(r, e[i], i) === this.BREAK) return
            },
            defer: function(t) {
                setTimeout(t, 0)
            },
            toArray: function(t) {
                return t.toArray ? t.toArray() : e.call(t)
            },
            isUndefined: function(t) {
                return void 0 === t
            },
            isNull: function(t) {
                return null === t
            },
            isNaN: function(t) {
                return t !== t
            },
            isArray: Array.isArray || function(t) {
                return t.constructor === Array
            },
            isObject: function(t) {
                return t === Object(t)
            },
            isNumber: function(t) {
                return t === t + 0
            },
            isString: function(t) {
                return t === t + ""
            },
            isBoolean: function(t) {
                return t === !1 || t === !0
            },
            isFunction: function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }
    }(), n.controllers.Controller = function(t) {
        var e = function(t, e) {
            this.initialValue = t[e], this.domElement = document.createElement("div"), this.object = t, this.property = e, this.__onChange = void 0, this.__onFinishChange = void 0
        };
        return t.extend(e.prototype, {
            onChange: function(t) {
                return this.__onChange = t, this
            },
            onFinishChange: function(t) {
                return this.__onFinishChange = t, this
            },
            setValue: function(t) {
                return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
            },
            getValue: function() {
                return this.object[this.property]
            },
            updateDisplay: function() {
                return this
            },
            isModified: function() {
                return this.initialValue !== this.getValue()
            }
        }), e
    }(n.utils.common), n.dom.dom = function(t) {
        function e(e) {
            if ("0" === e || t.isUndefined(e)) return 0;
            var n = e.match(i);
            return t.isNull(n) ? 0 : parseFloat(n[1])
        }
        var n = {
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            },
            r = {};
        t.each(n, function(e, n) {
            t.each(e, function(t) {
                r[t] = n
            })
        });
        var i = /(\d+(\.\d+)?)px/,
            o = {
                makeSelectable: function(t, e) {
                    void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function() {
                        return !1
                    } : function() {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
                },
                makeFullscreen: function(e, n, r) {
                    t.isUndefined(n) && (n = !0), t.isUndefined(r) && (r = !0), e.style.position = "absolute", n && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0)
                },
                fakeEvent: function(e, n, i, o) {
                    i = i || {};
                    var a = r[n];
                    if (!a) throw new Error("Event type " + n + " not supported.");
                    var u = document.createEvent(a);
                    switch (a) {
                        case "MouseEvents":
                            var s = i.x || i.clientX || 0,
                                l = i.y || i.clientY || 0;
                            u.initMouseEvent(n, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, s, l, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            var f = u.initKeyboardEvent || u.initKeyEvent;
                            t.defaults(i, {
                                cancelable: !0,
                                ctrlKey: !1,
                                altKey: !1,
                                shiftKey: !1,
                                metaKey: !1,
                                keyCode: void 0,
                                charCode: void 0
                            }), f(n, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                            break;
                        default:
                            u.initEvent(n, i.bubbles || !1, i.cancelable || !0)
                    }
                    t.defaults(u, o), e.dispatchEvent(u)
                },
                bind: function(t, e, n, r) {
                    return r = r || !1, t.addEventListener ? t.addEventListener(e, n, r) : t.attachEvent && t.attachEvent("on" + e, n), o
                },
                unbind: function(t, e, n, r) {
                    return r = r || !1, t.removeEventListener ? t.removeEventListener(e, n, r) : t.detachEvent && t.detachEvent("on" + e, n), o
                },
                addClass: function(t, e) {
                    if (void 0 === t.className) t.className = e;
                    else if (t.className !== e) {
                        var n = t.className.split(/ +/);
                        n.indexOf(e) == -1 && (n.push(e), t.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return o
                },
                removeClass: function(t, e) {
                    if (e)
                        if (void 0 === t.className);
                        else if (t.className === e) t.removeAttribute("class");
                    else {
                        var n = t.className.split(/ +/),
                            r = n.indexOf(e);
                        r != -1 && (n.splice(r, 1), t.className = n.join(" "))
                    } else t.className = void 0;
                    return o
                },
                hasClass: function(t, e) {
                    return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
                },
                getWidth: function(t) {
                    var n = getComputedStyle(t);
                    return e(n["border-left-width"]) + e(n["border-right-width"]) + e(n["padding-left"]) + e(n["padding-right"]) + e(n.width)
                },
                getHeight: function(t) {
                    var n = getComputedStyle(t);
                    return e(n["border-top-width"]) + e(n["border-bottom-width"]) + e(n["padding-top"]) + e(n["padding-bottom"]) + e(n.height)
                },
                getOffset: function(t) {
                    var e = {
                        left: 0,
                        top: 0
                    };
                    if (t.offsetParent)
                        do e.left += t.offsetLeft, e.top += t.offsetTop; while (t = t.offsetParent);
                    return e
                },
                isActive: function(t) {
                    return t === document.activeElement && (t.type || t.href)
                }
            };
        return o
    }(n.utils.common), n.controllers.OptionController = function(t, e, n) {
        var r = function(t, i, o) {
            r.superclass.call(this, t, i);
            var a = this;
            if (this.__select = document.createElement("select"), n.isArray(o)) {
                var u = {};
                n.each(o, function(t) {
                    u[t] = t
                }), o = u
            }
            n.each(o, function(t, e) {
                var n = document.createElement("option");
                n.innerHTML = e, n.setAttribute("value", t), a.__select.appendChild(n)
            }), this.updateDisplay(), e.bind(this.__select, "change", function() {
                var t = this.options[this.selectedIndex].value;
                a.setValue(t)
            }), this.domElement.appendChild(this.__select)
        };
        return r.superclass = t, n.extend(r.prototype, t.prototype, {
            setValue: function(t) {
                var e = r.superclass.prototype.setValue.call(this, t);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e
            },
            updateDisplay: function() {
                return this.__select.value = this.getValue(), r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.NumberController = function(t, e) {
        function n(t) {
            return t = t.toString(), t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
        }
        var r = function(t, i, o) {
            r.superclass.call(this, t, i),
                o = o || {}, this.__min = o.min, this.__max = o.max, this.__step = o.step, e.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = n(this.__impliedStep)
        };
        return r.superclass = t, e.extend(r.prototype, t.prototype, {
            setValue: function(t) {
                return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && t % this.__step != 0 && (t = Math.round(t / this.__step) * this.__step), r.superclass.prototype.setValue.call(this, t)
            },
            min: function(t) {
                return this.__min = t, this
            },
            max: function(t) {
                return this.__max = t, this
            },
            step: function(t) {
                return this.__step = t, this
            }
        }), r
    }(n.controllers.Controller, n.utils.common), n.controllers.NumberControllerBox = function(t, e, n) {
        function r(t, e) {
            var n = Math.pow(10, e);
            return Math.round(t * n) / n
        }
        var i = function(t, r, o) {
            function a() {
                var t = parseFloat(h.__input.value);
                n.isNaN(t) || h.setValue(t)
            }

            function u() {
                a(), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
            }

            function s(t) {
                e.bind(window, "mousemove", l), e.bind(window, "mouseup", f), c = t.clientY
            }

            function l(t) {
                var e = c - t.clientY;
                h.setValue(h.getValue() + e * h.__impliedStep), c = t.clientY
            }

            function f() {
                e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", f)
            }
            this.__truncationSuspended = !1, i.superclass.call(this, t, r, o);
            var c, h = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "change", a), e.bind(this.__input, "blur", u), e.bind(this.__input, "mousedown", s), e.bind(this.__input, "keydown", function(t) {
                13 === t.keyCode && (h.__truncationSuspended = !0, this.blur(), h.__truncationSuspended = !1)
            }), this.updateDisplay(), this.domElement.appendChild(this.__input)
        };
        return i.superclass = t, n.extend(i.prototype, t.prototype, {
            updateDisplay: function() {
                return this.__input.value = this.__truncationSuspended ? this.getValue() : r(this.getValue(), this.__precision), i.superclass.prototype.updateDisplay.call(this)
            }
        }), i
    }(n.controllers.NumberController, n.dom.dom, n.utils.common), n.controllers.NumberControllerSlider = function(t, e, n, r, i) {
        function o(t, e, n, r, i) {
            return r + (i - r) * ((t - e) / (n - e))
        }
        var a = function(t, n, r, i, u) {
            function s(t) {
                e.bind(window, "mousemove", l), e.bind(window, "mouseup", f), l(t)
            }

            function l(t) {
                t.preventDefault();
                var n = e.getOffset(c.__background),
                    r = e.getWidth(c.__background);
                return c.setValue(o(t.clientX, n.left, n.left + r, c.__min, c.__max)), !1
            }

            function f() {
                e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", f), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
            }
            a.superclass.call(this, t, n, {
                min: r,
                max: i,
                step: u
            });
            var c = this;
            this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), e.bind(this.__background, "mousedown", s), e.addClass(this.__background, "slider"), e.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
        };
        return a.superclass = t, a.useDefaultStyles = function() {
            n.inject(i)
        }, r.extend(a.prototype, t.prototype, {
            updateDisplay: function() {
                var t = (this.getValue() - this.__min) / (this.__max - this.__min);
                return this.__foreground.style.width = 100 * t + "%", a.superclass.prototype.updateDisplay.call(this)
            }
        }), a
    }(n.controllers.NumberController, n.dom.dom, n.utils.css, n.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), n.controllers.FunctionController = function(t, e, n) {
        var r = function(t, n, i) {
            r.superclass.call(this, t, n);
            var o = this;
            this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === i ? "Fire" : i, e.bind(this.__button, "click", function(t) {
                return t.preventDefault(), o.fire(), !1
            }), e.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
        };
        return r.superclass = t, n.extend(r.prototype, t.prototype, {
            fire: function() {
                this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
            }
        }), r
    }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.BooleanController = function(t, e, n) {
        var r = function(t, n) {
            function i() {
                o.setValue(!o.__prev)
            }
            r.superclass.call(this, t, n);
            var o = this;
            this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), e.bind(this.__checkbox, "change", i, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
        };
        return r.superclass = t, n.extend(r.prototype, t.prototype, {
            setValue: function(t) {
                var e = r.superclass.prototype.setValue.call(this, t);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e
            },
            updateDisplay: function() {
                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(n.controllers.Controller, n.dom.dom, n.utils.common), n.color.toString = function(t) {
        return function(e) {
            if (1 == e.a || t.isUndefined(e.a)) {
                for (var n = e.hex.toString(16); n.length < 6;) n = "0" + n;
                return "#" + n
            }
            return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
        }
    }(n.utils.common), n.color.interpret = function(t, e) {
        var n, r, i = function() {
                r = !1;
                var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
                return e.each(o, function(i) {
                    if (i.litmus(t)) return e.each(i.conversions, function(i, o) {
                        if (n = i.read(t), r === !1 && n !== !1) return r = n, n.conversionName = o, n.conversion = i, e.BREAK
                    }), e.BREAK
                }), r
            },
            o = [{
                litmus: e.isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
                            }
                        },
                        write: t
                    },
                    SIX_CHAR_HEX: {
                        read: function(t) {
                            var e = t.match(/^#([A-F0-9]{6})$/i);
                            return null !== e && {
                                space: "HEX",
                                hex: parseInt("0x" + e[1].toString())
                            }
                        },
                        write: t
                    },
                    CSS_RGB: {
                        read: function(t) {
                            var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3])
                            }
                        },
                        write: t
                    },
                    CSS_RGBA: {
                        read: function(t) {
                            var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                            return null !== e && {
                                space: "RGB",
                                r: parseFloat(e[1]),
                                g: parseFloat(e[2]),
                                b: parseFloat(e[3]),
                                a: parseFloat(e[4])
                            }
                        },
                        write: t
                    }
                }
            }, {
                litmus: e.isNumber,
                conversions: {
                    HEX: {
                        read: function(t) {
                            return {
                                space: "HEX",
                                hex: t,
                                conversionName: "HEX"
                            }
                        },
                        write: function(t) {
                            return t.hex
                        }
                    }
                }
            }, {
                litmus: e.isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(t) {
                            return 3 == t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(t) {
                            return 4 == t.length && {
                                space: "RGB",
                                r: t[0],
                                g: t[1],
                                b: t[2],
                                a: t[3]
                            }
                        },
                        write: function(t) {
                            return [t.r, t.g, t.b, t.a]
                        }
                    }
                }
            }, {
                litmus: e.isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b,
                                a: t.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b)) && {
                                space: "RGB",
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        },
                        write: function(t) {
                            return {
                                r: t.r,
                                g: t.g,
                                b: t.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v,
                                a: t.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(t) {
                            return !!(e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v)) && {
                                space: "HSV",
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        },
                        write: function(t) {
                            return {
                                h: t.h,
                                s: t.s,
                                v: t.v
                            }
                        }
                    }
                }
            }];
        return i
    }(n.color.toString, n.utils.common), n.GUI = n.gui.GUI = function(t, e, n, r, i, o, a, u, s, l, f, c, h, d, p) {
        function _(t, e, n, o) {
            if (void 0 === e[n]) throw new Error("Object " + e + ' has no property "' + n + '"');
            var a;
            if (o.color) a = new f(e, n);
            else {
                var u = [e, n].concat(o.factoryArgs);
                a = r.apply(t, u)
            }
            o.before instanceof i && (o.before = o.before.__li), x(t, a), d.addClass(a.domElement, "c");
            var s = document.createElement("span");
            d.addClass(s, "property-name"), s.innerHTML = a.property;
            var l = document.createElement("div");
            l.appendChild(s), l.appendChild(a.domElement);
            var c = v(t, l, o.before);
            return d.addClass(c, B.CLASS_CONTROLLER_ROW), d.addClass(c, typeof a.getValue()), m(t, c, a), t.__controllers.push(a), a
        }

        function v(t, e, n) {
            var r = document.createElement("li");
            return e && r.appendChild(e), n ? t.__ul.insertBefore(r, params.before) : t.__ul.appendChild(r), t.onResize(), r
        }

        function m(t, e, n) {
            if (n.__li = e, n.__gui = t, p.extend(n, {
                    options: function(e) {
                        return arguments.length > 1 ? (n.remove(), _(t, n.object, n.property, {
                            before: n.__li.nextElementSibling,
                            factoryArgs: [p.toArray(arguments)]
                        })) : p.isArray(e) || p.isObject(e) ? (n.remove(), _(t, n.object, n.property, {
                            before: n.__li.nextElementSibling,
                            factoryArgs: [e]
                        })) : void 0
                    },
                    name: function(t) {
                        return n.__li.firstElementChild.firstElementChild.innerHTML = t, n
                    },
                    listen: function() {
                        return n.__gui.listen(n), n
                    },
                    remove: function() {
                        return n.__gui.remove(n), n
                    }
                }), n instanceof s) {
                var r = new u(n.object, n.property, {
                    min: n.__min,
                    max: n.__max,
                    step: n.__step
                });
                p.each(["updateDisplay", "onChange", "onFinishChange"], function(t) {
                    var e = n[t],
                        i = r[t];
                    n[t] = r[t] = function() {
                        var t = Array.prototype.slice.call(arguments);
                        return e.apply(n, t), i.apply(r, t)
                    }
                }), d.addClass(e, "has-slider"), n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild)
            } else if (n instanceof u) {
                var i = function(e) {
                    return p.isNumber(n.__min) && p.isNumber(n.__max) ? (n.remove(), _(t, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [n.__min, n.__max, n.__step]
                    })) : e
                };
                n.min = p.compose(i, n.min), n.max = p.compose(i, n.max)
            } else n instanceof o ? (d.bind(e, "click", function() {
                d.fakeEvent(n.__checkbox, "click")
            }), d.bind(n.__checkbox, "click", function(t) {
                t.stopPropagation()
            })) : n instanceof a ? (d.bind(e, "click", function() {
                d.fakeEvent(n.__button, "click")
            }), d.bind(e, "mouseover", function() {
                d.addClass(n.__button, "hover")
            }), d.bind(e, "mouseout", function() {
                d.removeClass(n.__button, "hover")
            })) : n instanceof f && (d.addClass(e, "color"), n.updateDisplay = p.compose(function(t) {
                return e.style.borderLeftColor = n.__color.toString(), t
            }, n.updateDisplay), n.updateDisplay());
            n.setValue = p.compose(function(e) {
                return t.getRoot().__preset_select && n.isModified() && T(t.getRoot(), !0), e
            }, n.setValue)
        }

        function x(t, e) {
            var n = t.getRoot(),
                r = n.__rememberedObjects.indexOf(e.object);
            if (r != -1) {
                var i = n.__rememberedObjectIndecesToControllers[r];
                if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[r] = i), i[e.property] = e, n.load && n.load.remembered) {
                    var o, a = n.load.remembered;
                    if (a[t.preset]) o = a[t.preset];
                    else {
                        if (!a[O]) return;
                        o = a[O]
                    }
                    if (o[r] && void 0 !== o[r][e.property]) {
                        var u = o[r][e.property];
                        e.initialValue = u, e.setValue(u)
                    }
                }
            }
        }

        function g(t, e) {
            return document.location.href + "." + e
        }

        function b(t) {
            function e() {
                l.style.display = t.useLocalStorage ? "block" : "none"
            }
            var n = t.__save_row = document.createElement("li");
            d.addClass(t.domElement, "has-save"), t.__ul.insertBefore(n, t.__ul.firstChild), d.addClass(n, "save-row");
            var r = document.createElement("span");
            r.innerHTML = "&nbsp;", d.addClass(r, "button gears");
            var i = document.createElement("span");
            i.innerHTML = "Save", d.addClass(i, "button"), d.addClass(i, "save");
            var o = document.createElement("span");
            o.innerHTML = "New", d.addClass(o, "button"), d.addClass(o, "save-as");
            var a = document.createElement("span");
            a.innerHTML = "Revert", d.addClass(a, "button"), d.addClass(a, "revert");
            var u = t.__preset_select = document.createElement("select");
            if (t.load && t.load.remembered ? p.each(t.load.remembered, function(e, n) {
                    S(t, n, n == t.preset)
                }) : S(t, O, !1), d.bind(u, "change", function() {
                    for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
                    t.preset = this.value
                }), n.appendChild(u), n.appendChild(r), n.appendChild(i), n.appendChild(o), n.appendChild(a), L) {
                var s = document.getElementById("dg-save-locally"),
                    l = document.getElementById("dg-local-explain");
                s.style.display = "block";
                var f = document.getElementById("dg-local-storage");
                "true" === localStorage.getItem(g(t, "isLocal")) && f.setAttribute("checked", "checked"), e(), d.bind(f, "change", function() {
                    t.useLocalStorage = !t.useLocalStorage, e()
                })
            }
            var c = document.getElementById("dg-new-constructor");
            d.bind(c, "keydown", function(t) {
                !t.metaKey || 67 !== t.which && 67 != t.keyCode || I.hide()
            }), d.bind(r, "click", function() {
                c.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), I.show(), c.focus(), c.select()
            }), d.bind(i, "click", function() {
                t.save()
            }), d.bind(o, "click", function() {
                var e = prompt("Enter a new preset name.");
                e && t.saveAs(e)
            }), d.bind(a, "click", function() {
                t.revert()
            })
        }

        function M(t) {
            function e(e) {
                return e.preventDefault(), i = e.clientX, d.addClass(t.__closeButton, B.CLASS_DRAG), d.bind(window, "mousemove", n), d.bind(window, "mouseup", r), !1
            }

            function n(e) {
                return e.preventDefault(), t.width += i - e.clientX, t.onResize(), i = e.clientX, !1
            }

            function r() {
                d.removeClass(t.__closeButton, B.CLASS_DRAG), d.unbind(window, "mousemove", n), d.unbind(window, "mouseup", r)
            }
            t.__resize_handle = document.createElement("div"), p.extend(t.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            });
            var i;
            d.bind(t.__resize_handle, "mousedown", e), d.bind(t.__closeButton, "mousedown", e), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
        }

        function y(t, e) {
            t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px")
        }

        function E(t, e) {
            var n = {};
            return p.each(t.__rememberedObjects, function(r, i) {
                var o = {},
                    a = t.__rememberedObjectIndecesToControllers[i];
                p.each(a, function(t, n) {
                    o[n] = e ? t.initialValue : t.getValue()
                }), n[i] = o
            }), n
        }

        function S(t, e, n) {
            var r = document.createElement("option");
            r.innerHTML = e, r.value = e, t.__preset_select.appendChild(r), n && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
        }

        function w(t) {
            for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].value == t.preset && (t.__preset_select.selectedIndex = e)
        }

        function T(t, e) {
            var n = t.__preset_select[t.__preset_select.selectedIndex];
            e ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
        }

        function A(t) {
            0 != t.length && c(function() {
                A(t)
            }), p.each(t, function(t) {
                t.updateDisplay()
            })
        }
        t.inject(n);
        var I, F, R = "dg",
            D = 72,
            P = 20,
            O = "Default",
            L = function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (t) {
                    return !1
                }
            }(),
            C = !0,
            k = !1,
            N = [],
            B = function(t) {
                function e() {
                    localStorage.setItem(g(r, "gui"), JSON.stringify(r.getSaveObject()))
                }

                function n() {
                    var t = r.getRoot();
                    t.width += 1, p.defer(function() {
                        t.width -= 1
                    })
                }
                var r = this;
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), d.addClass(this.domElement, R), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = p.defaults(t, {
                    autoPlace: !0,
                    width: B.DEFAULT_WIDTH
                }), t = p.defaults(t, {
                    resizable: t.autoPlace,
                    hideable: t.autoPlace
                }), p.isUndefined(t.load) ? t.load = {
                    preset: O
                } : t.preset && (t.load.preset = t.preset), p.isUndefined(t.parent) && t.hideable && N.push(this), t.resizable = p.isUndefined(t.parent) && t.resizable, t.autoPlace && p.isUndefined(t.scrollable) && (t.scrollable = !0);
                var i = L && "true" === localStorage.getItem(g(this, "isLocal"));
                if (Object.defineProperties(this, {
                        parent: {
                            get: function() {
                                return t.parent
                            }
                        },
                        scrollable: {
                            get: function() {
                                return t.scrollable
                            }
                        },
                        autoPlace: {
                            get: function() {
                                return t.autoPlace
                            }
                        },
                        preset: {
                            get: function() {
                                return r.parent ? r.getRoot().preset : t.load.preset
                            },
                            set: function(e) {
                                r.parent ? r.getRoot().preset = e : t.load.preset = e, w(this), r.revert()
                            }
                        },
                        width: {
                            get: function() {
                                return t.width
                            },
                            set: function(e) {
                                t.width = e, y(r, e)
                            }
                        },
                        name: {
                            get: function() {
                                return t.name
                            },
                            set: function(e) {
                                t.name = e, a && (a.innerHTML = t.name)
                            }
                        },
                        closed: {
                            get: function() {
                                return t.closed
                            },
                            set: function(e) {
                                t.closed = e, t.closed ? d.addClass(r.__ul, B.CLASS_CLOSED) : d.removeClass(r.__ul, B.CLASS_CLOSED), this.onResize(), r.__closeButton && (r.__closeButton.innerHTML = e ? B.TEXT_OPEN : B.TEXT_CLOSED)
                            }
                        },
                        load: {
                            get: function() {
                                return t.load
                            }
                        },
                        useLocalStorage: {
                            get: function() {
                                return i
                            },
                            set: function(t) {
                                L && (i = t, t ? d.bind(window, "unload", e) : d.unbind(window, "unload", e), localStorage.setItem(g(r, "isLocal"), t))
                            }
                        }
                    }), p.isUndefined(t.parent)) {
                    if (t.closed = !1, d.addClass(this.domElement, B.CLASS_MAIN), d.makeSelectable(this.domElement, !1), L && i) {
                        r.useLocalStorage = !0;
                        var o = localStorage.getItem(g(this, "gui"));
                        o && (t.load = JSON.parse(o))
                    }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = B.TEXT_CLOSED, d.addClass(this.__closeButton, B.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), d.bind(this.__closeButton, "click", function() {
                        r.closed = !r.closed
                    })
                } else {
                    void 0 === t.closed && (t.closed = !0);
                    var a = document.createTextNode(t.name);
                    d.addClass(a, "controller-name");
                    var u = v(r, a),
                        s = function(t) {
                            return t.preventDefault(), r.closed = !r.closed, !1
                        };
                    d.addClass(this.__ul, B.CLASS_CLOSED), d.addClass(u, "title"), d.bind(u, "click", s), t.closed || (this.closed = !1)
                }
                t.autoPlace && (p.isUndefined(t.parent) && (C && (F = document.createElement("div"), d.addClass(F, R), d.addClass(F, B.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(F), C = !1), F.appendChild(this.domElement), d.addClass(this.domElement, B.CLASS_AUTO_PLACE)), this.parent || y(r, t.width)), d.bind(window, "resize", function() {
                    r.onResize()
                }), d.bind(this.__ul, "webkitTransitionEnd", function() {
                    r.onResize()
                }), d.bind(this.__ul, "transitionend", function() {
                    r.onResize()
                }), d.bind(this.__ul, "oTransitionEnd", function() {
                    r.onResize()
                }), this.onResize(), t.resizable && M(this);
                r.getRoot();
                t.parent || n()
            };
        return B.toggleHide = function() {
            k = !k, p.each(N, function(t) {
                t.domElement.style.zIndex = k ? -999 : 999, t.domElement.style.opacity = k ? 0 : 1
            })
        }, B.CLASS_AUTO_PLACE = "a", B.CLASS_AUTO_PLACE_CONTAINER = "ac", B.CLASS_MAIN = "main", B.CLASS_CONTROLLER_ROW = "cr", B.CLASS_TOO_TALL = "taller-than-window", B.CLASS_CLOSED = "closed", B.CLASS_CLOSE_BUTTON = "close-button", B.CLASS_DRAG = "drag", B.DEFAULT_WIDTH = 245, B.TEXT_CLOSED = "Close Controls", B.TEXT_OPEN = "Open Controls", d.bind(window, "keydown", function(t) {
            "text" === document.activeElement.type || t.which !== D && t.keyCode != D || B.toggleHide()
        }, !1), p.extend(B.prototype, {
            add: function(t, e) {
                return _(this, t, e, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function(t, e) {
                return _(this, t, e, {
                    color: !0
                })
            },
            remove: function(t) {
                this.__ul.removeChild(t.__li), this.__controllers.slice(this.__controllers.indexOf(t), 1);
                var e = this;
                p.defer(function() {
                    e.onResize()
                })
            },
            destroy: function() {
                this.autoPlace && F.removeChild(this.domElement)
            },
            addFolder: function(t) {
                if (void 0 !== this.__folders[t]) throw new Error('You already have a folder in this GUI by the name "' + t + '"');
                var e = {
                    name: t,
                    parent: this
                };
                e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
                var n = new B(e);
                this.__folders[t] = n;
                var r = v(this, n.domElement);
                return d.addClass(r, "folder"), n
            },
            open: function() {
                this.closed = !1
            },
            close: function() {
                this.closed = !0
            },
            onResize: function() {
                var t = this.getRoot();
                if (t.scrollable) {
                    var e = d.getOffset(t.__ul).top,
                        n = 0;
                    p.each(t.__ul.childNodes, function(e) {
                        t.autoPlace && e === t.__save_row || (n += d.getHeight(e))
                    }), window.innerHeight - e - P < n ? (d.addClass(t.domElement, B.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - P + "px") : (d.removeClass(t.domElement, B.CLASS_TOO_TALL), t.__ul.style.height = "auto")
                }
                t.__resize_handle && p.defer(function() {
                    t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
                }), t.__closeButton && (t.__closeButton.style.width = t.width + "px")
            },
            remember: function() {
                if (p.isUndefined(I) && (I = new h, I.domElement.innerHTML = e), this.parent) throw new Error("You can only call remember on a top level GUI.");
                var t = this;
                p.each(Array.prototype.slice.call(arguments), function(e) {
                    0 == t.__rememberedObjects.length && b(t), t.__rememberedObjects.indexOf(e) == -1 && t.__rememberedObjects.push(e)
                }), this.autoPlace && y(this, this.width)
            },
            getRoot: function() {
                for (var t = this; t.parent;) t = t.parent;
                return t
            },
            getSaveObject: function() {
                var t = this.load;
                return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = E(this)), t.folders = {}, p.each(this.__folders, function(e, n) {
                    t.folders[n] = e.getSaveObject()
                }), t
            },
            save: function() {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = E(this), T(this, !1)
            },
            saveAs: function(t) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered[O] = E(this, !0)), this.load.remembered[t] = E(this), this.preset = t, S(this, t, !0)
            },
            revert: function(t) {
                p.each(this.__controllers, function(e) {
                    this.getRoot().load.remembered ? x(t || this.getRoot(), e) : e.setValue(e.initialValue)
                }, this), p.each(this.__folders, function(t) {
                    t.revert(t)
                }), t || T(this.getRoot(), !1)
            },
            listen: function(t) {
                var e = 0 == this.__listening.length;
                this.__listening.push(t), e && A(this.__listening)
            }
        }), B
    }(n.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", n.controllers.factory = function(t, e, n, r, i, o, a) {
        return function(u, s) {
            var l = u[s];
            return a.isArray(arguments[2]) || a.isObject(arguments[2]) ? new t(u, s, arguments[2]) : a.isNumber(l) ? a.isNumber(arguments[2]) && a.isNumber(arguments[3]) ? new n(u, s, arguments[2], arguments[3]) : new e(u, s, {
                min: arguments[2],
                max: arguments[3]
            }) : a.isString(l) ? new r(u, s) : a.isFunction(l) ? new i(u, s, "") : a.isBoolean(l) ? new o(u, s) : void 0
        }
    }(n.controllers.OptionController, n.controllers.NumberControllerBox, n.controllers.NumberControllerSlider, n.controllers.StringController = function(t, e, n) {
        var r = function(t, n) {
            function i() {
                a.setValue(a.__input.value)
            }

            function o() {
                a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
            }
            r.superclass.call(this, t, n);
            var a = this;
            this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "keyup", i), e.bind(this.__input, "change", i), e.bind(this.__input, "blur", o), e.bind(this.__input, "keydown", function(t) {
                13 === t.keyCode && this.blur()
            }), this.updateDisplay(), this.domElement.appendChild(this.__input)
        };
        return r.superclass = t, n.extend(r.prototype, t.prototype, {
            updateDisplay: function() {
                return e.isActive(this.__input) || (this.__input.value = this.getValue()), r.superclass.prototype.updateDisplay.call(this)
            }
        }), r
    }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.FunctionController, n.controllers.BooleanController, n.utils.common), n.controllers.Controller, n.controllers.BooleanController, n.controllers.FunctionController, n.controllers.NumberControllerBox, n.controllers.NumberControllerSlider, n.controllers.OptionController, n.controllers.ColorController = function(t, e, n, r, i) {
        function o(t, e, n, r) {
            t.style.background = "", i.each(s, function(i) {
                t.style.cssText += "background: " + i + "linear-gradient(" + e + ", " + n + " 0%, " + r + " 100%); "
            })
        }

        function a(t) {
            t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
        }
        var u = function(t, s) {
            function l(t) {
                d(t), e.bind(window, "mousemove", d), e.bind(window, "mouseup", f)
            }

            function f() {
                e.unbind(window, "mousemove", d), e.unbind(window, "mouseup", f)
            }

            function c() {
                var t = r(this.value);
                t !== !1 ? (_.__color.__state = t, _.setValue(_.__color.toOriginal())) : this.value = _.__color.toString()
            }

            function h() {
                e.unbind(window, "mousemove", p), e.unbind(window, "mouseup", h)
            }

            function d(t) {
                t.preventDefault();
                var n = e.getWidth(_.__saturation_field),
                    r = e.getOffset(_.__saturation_field),
                    i = (t.clientX - r.left + document.body.scrollLeft) / n,
                    o = 1 - (t.clientY - r.top + document.body.scrollTop) / n;
                return o > 1 ? o = 1 : o < 0 && (o = 0), i > 1 ? i = 1 : i < 0 && (i = 0), _.__color.v = o, _.__color.s = i, _.setValue(_.__color.toOriginal()), !1
            }

            function p(t) {
                t.preventDefault();
                var n = e.getHeight(_.__hue_field),
                    r = e.getOffset(_.__hue_field),
                    i = 1 - (t.clientY - r.top + document.body.scrollTop) / n;
                return i > 1 ? i = 1 : i < 0 && (i = 0), _.__color.h = 360 * i, _.setValue(_.__color.toOriginal()), !1
            }
            u.superclass.call(this, t, s), this.__color = new n(this.getValue()), this.__temp = new n(0);
            var _ = this;
            this.domElement = document.createElement("div"), e.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", e.bind(this.__input, "keydown", function(t) {
                13 === t.keyCode && c.call(this)
            }), e.bind(this.__input, "blur", c), e.bind(this.__selector, "mousedown", function(t) {
                e.addClass(this, "drag").bind(window, "mouseup", function(t) {
                    e.removeClass(_.__selector, "drag")
                })
            });
            var v = document.createElement("div");
            i.extend(this.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }), i.extend(this.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }), i.extend(this.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }), i.extend(this.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }), i.extend(v.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }), o(v, "top", "rgba(0,0,0,0)", "#000"), i.extend(this.__hue_field.style, {
                width: "15px",
                height: "100px",
                display: "inline-block",
                border: "1px solid #555",
                cursor: "ns-resize"
            }), a(this.__hue_field), i.extend(this.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
            }), e.bind(this.__saturation_field, "mousedown", l), e.bind(this.__field_knob, "mousedown", l), e.bind(this.__hue_field, "mousedown", function(t) {
                p(t), e.bind(window, "mousemove", p), e.bind(window, "mouseup", h)
            }), this.__saturation_field.appendChild(v), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
        };
        u.superclass = t, i.extend(u.prototype, t.prototype, {
            updateDisplay: function() {
                var t = r(this.getValue());
                if (t !== !1) {
                    var e = !1;
                    i.each(n.COMPONENTS, function(n) {
                        if (!i.isUndefined(t[n]) && !i.isUndefined(this.__color.__state[n]) && t[n] !== this.__color.__state[n]) return e = !0, {}
                    }, this), e && i.extend(this.__color.__state, t)
                }
                i.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                var a = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                    u = 255 - a;
                i.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toString(),
                    border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")"
                }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, o(this.__saturation_field, "left", "#fff", this.__temp.toString()), i.extend(this.__input.style, {
                    backgroundColor: this.__input.value = this.__color.toString(),
                    color: "rgb(" + a + "," + a + "," + a + ")",
                    textShadow: this.__input_textShadow + "rgba(" + u + "," + u + "," + u + ",.7)"
                })
            }
        });
        var s = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        return u
    }(n.controllers.Controller, n.dom.dom, n.color.Color = function(t, e, n, r) {
        function i(t, e, n) {
            Object.defineProperty(t, e, {
                get: function() {
                    return "RGB" === this.__state.space ? this.__state[e] : (a(this, e, n), this.__state[e])
                },
                set: function(t) {
                    "RGB" !== this.__state.space && (a(this, e, n), this.__state.space = "RGB"), this.__state[e] = t
                }
            })
        }

        function o(t, e) {
            Object.defineProperty(t, e, {
                get: function() {
                    return "HSV" === this.__state.space ? this.__state[e] : (u(this), this.__state[e])
                },
                set: function(t) {
                    "HSV" !== this.__state.space && (u(this), this.__state.space = "HSV"), this.__state[e] = t
                }
            })
        }

        function a(t, n, i) {
            if ("HEX" === t.__state.space) t.__state[n] = e.component_from_hex(t.__state.hex, i);
            else {
                if ("HSV" !== t.__state.space) throw "Corrupted color state";
                r.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v))
            }
        }

        function u(t) {
            var n = e.rgb_to_hsv(t.r, t.g, t.b);
            r.extend(t.__state, {
                s: n.s,
                v: n.v
            }), r.isNaN(n.h) ? r.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = n.h
        }
        var s = function() {
            if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
            this.__state.a = this.__state.a || 1
        };
        return s.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r.extend(s.prototype, {
            toString: function() {
                return n(this)
            },
            toOriginal: function() {
                return this.__state.conversion.write(this)
            }
        }), i(s.prototype, "r", 2), i(s.prototype, "g", 1), i(s.prototype, "b", 0), o(s.prototype, "h"), o(s.prototype, "s"), o(s.prototype, "v"), Object.defineProperty(s.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(t) {
                this.__state.a = t
            }
        }), Object.defineProperty(s.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(t) {
                this.__state.space = "HEX", this.__state.hex = t
            }
        }), s
    }(n.color.interpret, n.color.math = function() {
        var t;
        return {
            hsv_to_rgb: function(t, e, n) {
                var r = Math.floor(t / 60) % 6,
                    i = t / 60 - Math.floor(t / 60),
                    o = n * (1 - e),
                    a = n * (1 - i * e),
                    u = n * (1 - (1 - i) * e),
                    s = [
                        [n, u, o],
                        [a, n, o],
                        [o, n, u],
                        [o, a, n],
                        [u, o, n],
                        [n, o, a]
                    ][r];
                return {
                    r: 255 * s[0],
                    g: 255 * s[1],
                    b: 255 * s[2]
                }
            },
            rgb_to_hsv: function(t, e, n) {
                var r, i, o = Math.min(t, e, n),
                    a = Math.max(t, e, n),
                    u = a - o;
                return 0 == a ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (i = u / a, r = t == a ? (e - n) / u : e == a ? 2 + (n - t) / u : 4 + (t - e) / u, r /= 6, r < 0 && (r += 1), {
                    h: 360 * r,
                    s: i,
                    v: a / 255
                })
            },
            rgb_to_hex: function(t, e, n) {
                var r = this.hex_with_component(0, 2, t);
                return r = this.hex_with_component(r, 1, e), r = this.hex_with_component(r, 0, n)
            },
            component_from_hex: function(t, e) {
                return t >> 8 * e & 255
            },
            hex_with_component: function(e, n, r) {
                return r << (t = 8 * n) | e & ~(255 << t)
            }
        }
    }(), n.color.toString, n.utils.common), n.color.interpret, n.utils.common), n.utils.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
                window.setTimeout(t, 1e3 / 60)
        }
    }(), n.dom.CenteredDiv = function(t, e) {
        var n = function() {
            this.backgroundElement = document.createElement("div"), e.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear"
            }), t.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), e.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
            }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
            var n = this;
            t.bind(this.backgroundElement, "click", function() {
                n.hide()
            })
        };
        return n.prototype.show = function() {
            var t = this;
            this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), e.defer(function() {
                t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
            })
        }, n.prototype.hide = function() {
            var e = this,
                n = function() {
                    e.domElement.style.display = "none", e.backgroundElement.style.display = "none", t.unbind(e.domElement, "webkitTransitionEnd", n), t.unbind(e.domElement, "transitionend", n), t.unbind(e.domElement, "oTransitionEnd", n)
                };
            t.bind(this.domElement, "webkitTransitionEnd", n), t.bind(this.domElement, "transitionend", n), t.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
        }, n.prototype.layout = function() {
            this.domElement.style.left = window.innerWidth / 2 - t.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - t.getHeight(this.domElement) / 2 + "px"
        }, n
    }(n.dom.dom, n.utils.common), n.dom.dom, n.utils.common)
}, function(t, e) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(t) {
        return "function" == typeof t
    }

    function i(t) {
        return "number" == typeof t
    }

    function o(t) {
        return "object" == typeof t && null !== t
    }

    function a(t) {
        return void 0 === t
    }
    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
        if (!i(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
        return this._maxListeners = t, this
    }, n.prototype.emit = function(t) {
        var e, n, i, u, s, l;
        if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if (e = arguments[1], e instanceof Error) throw e;
            var f = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw f.context = e, f
        }
        if (n = this._events[t], a(n)) return !1;
        if (r(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                u = Array.prototype.slice.call(arguments, 1), n.apply(this, u)
        } else if (o(n))
            for (u = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, s = 0; s < i; s++) l[s].apply(this, u);
        return !0
    }, n.prototype.addListener = function(t, e) {
        var i;
        if (!r(e)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, "function" == typeof console.trace)), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
        function n() {
            this.removeListener(t, n), i || (i = !0, e.apply(this, arguments))
        }
        if (!r(e)) throw TypeError("listener must be a function");
        var i = !1;
        return n.listener = e, this.on(t, n), this
    }, n.prototype.removeListener = function(t, e) {
        var n, i, a, u;
        if (!r(e)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[t]) return this;
        if (n = this._events[t], a = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
        else if (o(n)) {
            for (u = a; u-- > 0;)
                if (n[u] === e || n[u].listener && n[u].listener === e) {
                    i = u;
                    break
                }
            if (i < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }, n.prototype.removeAllListeners = function(t) {
        var e, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
        if (0 === arguments.length) {
            for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[t], r(n)) this.removeListener(t, n);
        else if (n)
            for (; n.length;) this.removeListener(t, n[n.length - 1]);
        return delete this._events[t], this
    }, n.prototype.listeners = function(t) {
        var e;
        return e = this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, n.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (r(e)) return 1;
            if (e) return e.length
        }
        return 0
    }, n.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}, function(t, e) {}, function(t, e) {
    t.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nuniform sampler2D texture;\nuniform vec3 lightPos;\nuniform mat3 uModelViewMatrixInverse;\n\nconst vec3 baseColor = vec3(.1);\n\n\nfloat diffuse(vec3 N, vec3 L) {\n\treturn max(dot(N, normalize(L)), 0.0);\n}\n\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n\treturn diffuse(N, L) * C;\n}\n\n\nvoid main(void) {\n\tvec3 colorPaper = texture2D(texture, vTextureCoord).rgb;\n\tvec3 color = colorPaper * baseColor;\n\tvec3 L = uModelViewMatrixInverse * lightPos;\n\tfloat _diff = 1.0 - diffuse(vNormal, L);\n\n\tcolor.rgb *= 1.0 + _diff * 5.0;\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}"
}, function(t, e) {
    t.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uLineWidth;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tvec3 position = aVertexPosition * uLineWidth;\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"
}, function(t, e) {
    t.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float uRatio;\n\n\nfloat contrast(float mValue, float mScale, float mMidPoint) {\n\treturn clamp( (mValue - mMidPoint) * mScale + mMidPoint, 0.0, 1.0);\n}\n\nfloat contrast(float mValue, float mScale) {\n\treturn contrast(mValue,  mScale, .5);\n}\n\nvec2 contrast(vec2 mValue, float mScale, float mMidPoint) {\n\treturn vec2( contrast(mValue.r, mScale, mMidPoint), contrast(mValue.g, mScale, mMidPoint));\n}\n\nvec2 contrast(vec2 mValue, float mScale) {\n\treturn contrast(mValue, mScale, .5);\n}\n\nvoid main(void) {\n\tvec2 uv = vTextureCoord;\n\tuv.x = contrast(uv.x, uRatio * 0.5);\n\t// uv.y = contrast(uv.y, 1.0/uRatio);\n\n    gl_FragColor = texture2D(texture, uv);\n}"
}, function(t, e) {
    t.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float rtWidth;\nuniform float rtHeight;\n\n\nfloat FXAA_SUBPIX_SHIFT = 1.0/4.0;\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\n\n\nvec4 applyFXAA(vec2 fragCoord, sampler2D tex) {\n    vec4 color;\n    vec2 inverseVP = vec2(1.0 / rtWidth, 1.0 / rtHeight);\n    vec3 rgbNW = texture2D(tex, (fragCoord + vec2(-1.0, -1.0)) * inverseVP).xyz;\n    vec3 rgbNE = texture2D(tex, (fragCoord + vec2(1.0, -1.0)) * inverseVP).xyz;\n    vec3 rgbSW = texture2D(tex, (fragCoord + vec2(-1.0, 1.0)) * inverseVP).xyz;\n    vec3 rgbSE = texture2D(tex, (fragCoord + vec2(1.0, 1.0)) * inverseVP).xyz;\n    vec3 rgbM  = texture2D(tex, fragCoord  * inverseVP).xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    //return texture2D(tex, fragCoord);\n    //return vec4(fragCoord, 0.0, 1.0);\n    //return vec4(rgbM, 1.0);\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, 1.0);\n    else\n        color = vec4(rgbB, 1.0);\n    return color;\n}\n\nvoid main(void) {\n    vec4 posPos = vec4(.0);\n\n\tvec2 rcpFrame = vec2(1.0/rtWidth, 1.0/rtHeight);\n\n \tposPos.xy = vTextureCoord.xy;\n \tposPos.zw = vTextureCoord.xy - (rcpFrame * (0.5 + FXAA_SUBPIX_SHIFT));\n\n \t// vec4 color = applyFXAA(posPos.xy * vec2(rtWidth, rtHeight), texture);\n \tvec4 color = applyFXAA(vTextureCoord * vec2(rtWidth, rtHeight), texture);\n \tgl_FragColor = color;\n}"
}, function(t, e) {
    t.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nvarying float vAlpha;\nuniform sampler2D texture;\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n\tif(vAlpha <= 0.0) discard;\n    gl_FragColor = vec4(color, opacity * vAlpha);\n}"
}, function(t, e) {
    t.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float uNumSeg;\nuniform float uEnd;\nuniform float uLength;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying float vAlpha;\n\nvoid main(void) {\n\n\tvec2 uv      = aVertexPosition.xy;\n\tvec3 posCurr = texture2D(textureCurr, uv).rgb;\n\tvec3 posNext = texture2D(textureNext, uv).rgb;\n\tvec3 extra = texture2D(textureExtra, uv).rgb;\n\n\tfloat a \t = 1.0;\n\tif(extra.b > uEnd + uLength) {\n\t\ta = 0.0;\n\t} else if(extra.b > uEnd ) {\n\t\ta = smoothstep(uEnd + uLength, uEnd, extra.b);\n\t}\n\n\n\tconst float lr = 20.0;\n\n\tif(extra.b < uNumSeg) {\n\t\ta = 0.0;\n\t} else if(extra.b < uNumSeg + lr) {\n\t\ta = smoothstep(uNumSeg, uNumSeg + lr, extra.b);\n\t}\n\n\tfloat dCurr = length(posCurr);\n\tfloat dNext = length(posNext);\n\n\ta = pow(a, 3.0);\n\n\tvAlpha = a;\n\n\tvec3 position = mix(posCurr, posNext, aVertexPosition.z);\n\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n    vNormal = aNormal;\n}"
}, function(t, e) {
    t.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec3 vExtra;\nvarying float vAlpha;\nuniform sampler2D texture;\nuniform float time;\n\nvec2 rotate(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, -s, s, c);\n\treturn m * v;\n}\n\nvoid main(void) {\n\n\tvec2 uv = gl_PointCoord - vec2(.5);\n\tuv = rotate(uv, vExtra.r + time);\n\tuv += vec2(.5);\n\n    vec4 color = texture2D(texture, uv);\n\n    color.a *= 0.5 * vAlpha;\n\n    if(color.a <= 0.05) discard;\n\n    gl_FragColor = color;\n}"
}, function(t, e) {
    t.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aExtra;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float time;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vExtra;\nvarying float vAlpha;\n\nconst float PI = 3.141592653;\n\nvoid main(void) {\n\tvec3 dir = normalize(aVertexPosition);\n\tfloat d = time * (1.0+aExtra.b);\n\tconst float range = 1.0;\n\td = mod(d, range);\n\n\t// vAlpha = smoothstep(range, 0.0, d);\n\tvAlpha = sin(PI * d/range);\n\n\tvec3 position = aVertexPosition + dir * d;\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n    vNormal = aNormal;\n\n    gl_PointSize = aExtra.r * 40.0 + 50.0;\n    vExtra = aExtra;\n}"
}, function(t, e) {





















    t.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform sampler2D textureMap;\n\nconst vec3 color0 = vec3(50.0, 50.0, 50.0)/255.0;\nconst vec3 color1 = vec3(255.0, 255.0, 255.0)/255.0;\nuniform float offset;\n\nvoid main(void) {\n\tvec4 color = texture2D(texture, vTextureCoord);\n\tvec3 colorMap = texture2D(textureMap, vTextureCoord).rgb;\n\n\t// color.r += colorMap.r;\n\n\t// if(colorMap.r > .5 && color.r >= 0.9) {\n\t// \tcolor.rgb = vec3(1.0) - color.rgb;\n\t// }\n\n\tif(color.r >= 0.9 && color.g < 0.01) {\n\t\tif(colorMap.r > .5) {\n\t\t\tcolor.rgb = vec3(1.0);\n\t\t} else {\n\t\t\tcolor.rgb = vec3(0.1);\n\t\t}\n\t}\n\n\n\tfloat br = length(color.rgb) / length(vec3(1.0));\n\tcolor.rgb = mix(color0, color1, br);\n\n\tvec3 invert = vec3(1.0) - color.rgb;\n\n\tcolor.rgb = mix(color.rgb, invert, offset);\n\n    gl_FragColor = color;\n}"

























}, function(t, e) {
    t.exports = "precision highp float;\n#define GLSLIFY 1\nvarying vec4 vColor;\n\nvoid main(void) {\n\tif(distance(gl_PointCoord, vec2(.5)) > .5) discard;\n    gl_FragColor = vColor;\n}"
}, function(t, e) {
    t.exports = "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float percent;\nuniform float time;\nuniform vec2 uViewport;\nuniform float uEnd;\nuniform float uLength;\nuniform float uNumSeg;\n\nvarying vec4 vColor;\nvarying vec3 vNormal;\n\nconst float radius = 0.015;\n\nvoid main(void) {\n\tvec2 uv      = aVertexPosition.xy;\n\tvec3 posCurr = texture2D(textureCurr, uv).rgb;\n\tvec3 posNext = texture2D(textureNext, uv).rgb;\n\tvec3 pos     = mix(posCurr, posNext, percent);\n\tvec3 extra   = texture2D(textureExtra, uv).rgb;\n\tgl_Position  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\n\tfloat a \t = 1.0;\n\tif(extra.b > uEnd + uLength) {\n\t\ta = 0.0;\n\t} else if(extra.b > uEnd ) {\n\t\ta = smoothstep(uEnd + uLength, uEnd, extra.b);\n\t}\n\n\tif(extra.b < uNumSeg) {\n\t\ta = smoothstep(0.0, uNumSeg, extra.b);\n\t}\n\n\tif(length(posNext) < length(posCurr)) {\n\t\ta = 0.0;\n\t}\n\n\ta = pow(a, 3.0);\n\t\n\tvColor       = vec4(vec3(1.0, 0.0, 0.0), a);\n\n\tfloat distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n    gl_PointSize = distOffset * (1.0 + extra.x * 1.0);\n\n\tvNormal \t = aNormal;\n}"
}, function(t, e) {
    t.exports = "// save.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n    gl_FragData[0] = vec4(vColor, 1.0);\n    gl_FragData[1] = vec4(0.0, 0.0, 0.0, 1.0);\n    gl_FragData[2] = vec4(vExtra, 1.0);\n    gl_FragData[3] = vec4(vColor, 1.0);\n}"
}, function(t, e) {
    t.exports = "// save.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aExtra;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vExtra;\n\nvoid main(void) {\n\tvColor       = aVertexPosition;\n\tvec3 pos     = vec3(aTextureCoord, 0.0);\n\tgl_Position  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\t\n\tgl_PointSize = 1.0;\n\t\n\tvNormal      = aNormal;\n\tvExtra       = aExtra;\n}"
}, function(t, e) {
    t.exports = "// sim.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D textureVel;\nuniform sampler2D texturePos;\nuniform sampler2D textureExtra;\nuniform sampler2D textureOrgPos;\nuniform float time;\nuniform float uSphereSize;\nuniform float uEnd;\nuniform float uNumSeg;\nuniform float uLength;\nuniform vec3 uHit;\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 permute(vec4 x) {  return mod289(((x*34.0)+1.0)*x);  }\n\nvec4 taylorInvSqrt(vec4 r) {  return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v) { \n\tconst vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n\tconst vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n\tvec3 i  = floor(v + dot(v, C.yyy) );\n\tvec3 x0 =   v - i + dot(i, C.xxx) ;\n\n\tvec3 g = step(x0.yzx, x0.xyz);\n\tvec3 l = 1.0 - g;\n\tvec3 i1 = min( g.xyz, l.zxy );\n\tvec3 i2 = max( g.xyz, l.zxy );\n\n\tvec3 x1 = x0 - i1 + C.xxx;\n\tvec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n\tvec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n\ti = mod289(i); \n\tvec4 p = permute( permute( permute( \n\t\t\t\t\t\t i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n\t\t\t\t\t + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n\t\t\t\t\t + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n\tfloat n_ = 0.142857142857; // 1.0/7.0\n\tvec3  ns = n_ * D.wyz - D.xzx;\n\n\tvec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n\tvec4 x_ = floor(j * ns.z);\n\tvec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n\tvec4 x = x_ *ns.x + ns.yyyy;\n\tvec4 y = y_ *ns.x + ns.yyyy;\n\tvec4 h = 1.0 - abs(x) - abs(y);\n\n\tvec4 b0 = vec4( x.xy, y.xy );\n\tvec4 b1 = vec4( x.zw, y.zw );\n\n\tvec4 s0 = floor(b0)*2.0 + 1.0;\n\tvec4 s1 = floor(b1)*2.0 + 1.0;\n\tvec4 sh = -step(h, vec4(0.0));\n\n\tvec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n\tvec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n\tvec3 p0 = vec3(a0.xy,h.x);\n\tvec3 p1 = vec3(a0.zw,h.y);\n\tvec3 p2 = vec3(a1.xy,h.z);\n\tvec3 p3 = vec3(a1.zw,h.w);\n\n\tvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\tp0 *= norm.x;\n\tp1 *= norm.y;\n\tp2 *= norm.z;\n\tp3 *= norm.w;\n\n\tvec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n\tm = m * m;\n\treturn 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdot(p2,x2), dot(p3,x3) ) );\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n\tfloat s  = snoise(vec3( x ));\n\tfloat s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n\tfloat s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n\tvec3 c = vec3( s , s1 , s2 );\n\treturn c;\n\n}\n\n\nvec3 curlNoise( vec3 p ){\n\t\n\tconst float e = .1;\n\tvec3 dx = vec3( e   , 0.0 , 0.0 );\n\tvec3 dy = vec3( 0.0 , e   , 0.0 );\n\tvec3 dz = vec3( 0.0 , 0.0 , e   );\n\n\tvec3 p_x0 = snoiseVec3( p - dx );\n\tvec3 p_x1 = snoiseVec3( p + dx );\n\tvec3 p_y0 = snoiseVec3( p - dy );\n\tvec3 p_y1 = snoiseVec3( p + dy );\n\tvec3 p_z0 = snoiseVec3( p - dz );\n\tvec3 p_z1 = snoiseVec3( p + dz );\n\n\tfloat x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n\tfloat y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n\tfloat z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n\tconst float divisor = 1.0 / ( 2.0 * e );\n\treturn normalize( vec3( x , y , z ) * divisor );\n\n}\n\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\tmat4 m = rotationMatrix(axis, angle);\n\treturn (m * vec4(v, 1.0)).xyz;\n}\n\nvec3 power(vec3 v, float t) {\n\treturn vec3(\n\t\t\tpow(v.x, t),\n\t\t\tpow(v.y, t),\n\t\t\tpow(v.z, t)\n\t\t);\n}\n\nvoid main(void) {\n\tvec3 pos        = texture2D(texturePos, vTextureCoord).rgb;\n\tvec3 vel        = texture2D(textureVel, vTextureCoord).rgb;\n\tvec3 extra      = texture2D(textureExtra, vTextureCoord).rgb;\n\tvec3 orgPos     = texture2D(textureOrgPos, vTextureCoord).rgb;\n\tfloat posOffset = mix(extra.r, 1.0, .925) * 0.2;\n\tvec3 acc        = curlNoise(pos * posOffset + time * .35);\n\t// acc \t\t\t= power(acc, 5.0);\n\n\t// float speed = mix(extra.g, 1.0, .95);\n\tfloat speed = 1.0 + extra.g * 0.5;\n\tspeed = pow(speed, 2.0) * (1.5 + acc.r);\n\n\tif(extra.b < uNumSeg) {\n\t\tspeed *= 0.001;\n\t}\n\t\n\tvel += acc * .001 * speed;\n\tvec3 dir = normalize(pos);\n\tvel += dir * 0.002 * speed;\n\n\n\tfloat distToHit = distance(pos, uHit);\n\tconst float minDist = 1.5;\n\tif(distToHit < minDist) {\n\t\tvec3 dirToHit = normalize(uHit - pos);\n\t\tfloat f = (minDist - distToHit) * 0.02;\n\t\tvel += dirToHit * f;\n\t}\n\n\n\tconst float decrease = .93;\n\tvel *= decrease;\n\n\textra.b += 1.0;\n\tpos += vel;\n\n\tif(extra.b > uEnd + uLength) {\n\t\tvec3 axis = normalize(extra);\n\t\torgPos = rotate(orgPos, axis, time * extra.r * extra.g);\n\t\tpos = orgPos;\n\t\textra.b = 0.0;\n\t}\n\n\tgl_FragData[0] = vec4(pos, 1.0);\n\tgl_FragData[1] = vec4(vel, 1.0);\n\tgl_FragData[2] = vec4(extra, 1.0);\n\tgl_FragData[3] = vec4(orgPos, 1.0);\n}"
}, function(t, e) {
    var n = function() {
        function t(t) {
            return i.appendChild(t.dom), t
        }

        function e(t) {
            for (var e = 0; e < i.children.length; e++) i.children[e].style.display = e === t ? "block" : "none";
            r = t
        }
        var r = 0,
            i = document.createElement("div");
        i.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", i.addEventListener("click", function(t) {
            t.preventDefault(), e(++r % i.children.length)
        }, !1);
        var o = (performance || Date).now(),
            a = o,
            u = 0,
            s = t(new n.Panel("FPS", "#0ff", "#002")),
            l = t(new n.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) var f = t(new n.Panel("MB", "#f08", "#201"));
        return e(0), {
            REVISION: 16,
            dom: i,
            addPanel: t,
            showPanel: e,
            begin: function() {
                o = (performance || Date).now()
            },
            end: function() {
                u++;
                var t = (performance || Date).now();
                if (l.update(t - o, 200), t > a + 1e3 && (s.update(1e3 * u / (t - a), 100), a = t, u = 0, f)) {
                    var e = performance.memory;
                    f.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)
                }
                return t
            },
            update: function() {
                o = this.end()
            },
            domElement: i,
            setMode: e
        }
    };
    n.Panel = function(t, e, n) {
        var r = 1 / 0,
            i = 0,
            o = Math.round,
            a = o(window.devicePixelRatio || 1),
            u = 80 * a,
            s = 48 * a,
            l = 3 * a,
            f = 2 * a,
            c = 3 * a,
            h = 15 * a,
            d = 74 * a,
            p = 30 * a,
            _ = document.createElement("canvas");
        _.width = u, _.height = s, _.style.cssText = "width:80px;height:48px";
        var v = _.getContext("2d");
        return v.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", v.textBaseline = "top", v.fillStyle = n, v.fillRect(0, 0, u, s), v.fillStyle = e, v.fillText(t, l, f), v.fillRect(c, h, d, p), v.fillStyle = n, v.globalAlpha = .9, v.fillRect(c, h, d, p), {
            dom: _,
            update: function(s, m) {
                r = Math.min(r, s), i = Math.max(i, s), v.fillStyle = n, v.globalAlpha = 1, v.fillRect(0, 0, u, h), v.fillStyle = e, v.fillText(o(s) + " " + t + " (" + o(r) + "-" + o(i) + ")", l, f), v.drawImage(_, c + a, h, d - a, p, c, h, d - a, p), v.fillRect(c + d - a, h, a, p), v.fillStyle = n, v.globalAlpha = .9, v.fillRect(c + d - a, h, a, o((1 - s / m) * p))
            }
        }
    }, "object" == typeof t && (t.exports = n)
}]);