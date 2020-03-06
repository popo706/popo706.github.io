(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{404:function(n,s,e){"use strict";e.r(s);var a=e(40),r=Object(a.a)({},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("blockquote",[e("p",[n._v("背景：企业微信第三方应用开发，存在三种token, cropToken(企业级别token),suitToken(应用级别token),providerToken(服务商级别token);\n对于一个服务商而言，问题一：测试环境和生产环境 的 providerToken 会存在竞争关系，问题二：多次请求 providerToken，token未过期时，获取到的数据一样，\n数据结构如ProviderToken 数据结构，\n过期时间一直为 7200s,(ΩДΩ) 但不知道token 何时生效的，所以有效时间0<x<7200s,不知何时过期，所以需要在token 过期时，自动刷新token")])]),n._v(" "),e("p",[n._v("ProviderToken 数据结构：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n    "provider_access_token":"XXXXXXXXXXXXXXXX",\n    "expires_in":7200\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("思路如下：自定义异常，捕获微信或企业微信 特定异常码，全局异常处理器 处理对应异常，实现自动刷新\n例如：企业微信 token 无效 状态码为 40014，invalid access_token")]),n._v(" "),e("p",[n._v("处理逻辑如下：\n自定义企业微信请求异常")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package ky.edu.saas.exception;\n\nimport lombok.Data;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n\n/**\n * 企业微信api调用的异常封装\n * errcode 参见：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1433747234&token=&lang=zh_CN\n */\n@Data\n@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)\npublic class QYWXAPIAccessException extends RuntimeException {\n\n    /**\n     * 错误码\n     */\n    private String errcode;\n\n    /**\n     * 错误信息\n     */\n    private String errmsg;\n\n    /**\n     * 对应类型，例：crop:ww031b410ce418c708;suit;provider, 其中 crop 包含 需要刷新的 corpId\n     */\n    private String typeString;\n\n    /**\n     * 通过errcode和errmsg构造\n     *\n     * @param errcode    微信返回的errcode\n     * @param errmsg     微信返回errmsg\n     * @param typeString 对应类型，例：crop:ww031b410ce418c708;suit;provider, 其中 crop 包含 需要刷新的 corpId\n     *                   suiteTicket;\n     */\n    public QYWXAPIAccessException(String errcode, String errmsg, String typeString) {\n        super(String.format("errcode:%s, errmsg:%s", errcode, errmsg));\n        this.errcode = errcode;\n        this.errmsg = errmsg;\n        this.typeString = typeString;\n    }\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br")])]),e("p",[n._v("在请求企业微信时，需要token(无论哪种token）并且请求失败后，抛出此异常；\n然后定义自定义异常处理器，捕获并处理该异常，然后抛出异常")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package ky.edu.saas.handler;\n\nimport ky.edu.saas.datasync.domain.service.CropService;\nimport ky.edu.saas.datasync.domain.service.ProviderService;\nimport ky.edu.saas.datasync.domain.service.SuiteService;\nimport ky.edu.saas.exception.QYWXAPIAccessException;\nimport lombok.RequiredArgsConstructor;\nimport org.apache.commons.lang.StringUtils;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.ResponseBody;\nimport org.springframework.web.bind.annotation.ResponseStatus;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\nimport org.springframework.web.servlet.ModelAndView;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * 微信api调用的异常封装\n * errcode参见：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1433747234&token=&lang=zh_CN\n */\n@RestControllerAdvice\n@RequiredArgsConstructor\npublic class CustomizeExceptionHandler extends RuntimeException {\n\n    private final ProviderService providerService;\n    private final CropService cropService;\n    private final SuiteService suiteService;\n\n    /**\n     * 捕获CustomException\n     *\n     * @param e\n     * @return json格式类型\n     */\n    @ResponseBody\n    @ExceptionHandler({QYWXAPIAccessException.class}) //指定拦截异常的类型\n    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR) //自定义浏览器返回状态码\n    public ModelAndView customExceptionHandler(QYWXAPIAccessException e) {\n        Map<String, Object> map = new HashMap<>();\n        ModelAndView modelAndView = new ModelAndView();\n        modelAndView.setViewName("error");\n        modelAndView.addObject(map);\n\n        String typeString = e.getTypeString();\n        if (e.getErrcode().equals("40014") && StringUtils.isNotBlank(typeString)) {\n            if (typeString.contains("crop:")) {\n                cropService.getCropToken(typeString.split(":")[1], true);\n            } else if (typeString.equals("suit")) {\n                suiteService.getSuiteToken(true);\n            } else if (typeString.equals("provider")) {\n                providerService.getProviderToken(true);\n            }\n        }\n        return modelAndView;\n    }\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br")])]),e("p",[n._v("微信token 自动刷新处理思路也是如此，关键点在于：")]),n._v(" "),e("ol",[e("li",[n._v("找到请求微信（企业微信）api,需要token（获取ticket,etc）的地方，分析可能会出现什么问题")]),n._v(" "),e("li",[n._v("制造条件复现出该问题，找到对应的 错误码，进行处理")])]),n._v(" "),e("hr"),n._v(" "),e("p",[e("a",{attrs:{href:"https://popo706.cn/",target:"_blank",rel:"noopener noreferrer"}},[n._v("popo先生的博客"),e("OutboundLink")],1)]),n._v(" "),e("hr")])},[],!1,null,null,null);s.default=r.exports}}]);