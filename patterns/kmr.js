(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsKmr = factory();
  }
})(this, function () {
  return [
    "006,01,004,6,4,0056,3,2,1,04,22,0006,0004,002,000006,02,003,00006,606,202,0404,404,232,0000006,034",
    '{".":[{"k":[{"a":[{"r":[{"a":[{},0]}]}]}]}],"a":[{"l":[{"a":[{},2]}],"m":[{"î":[{"t":[{".":[{},3]}]}]}],"n":[{},4],"r":[{"a":[{"n":[{"î":[{},5]}]}]}],"v":[{"a":[{"y":[{},4]}]},6],"y":[{},7]},1],"b":[{"a":[{},9],"b":[{},7],"l":[{},7],"r":[{},7],"s":[{},7],"x":[{},7]},8],"c":[{"b":[{},7],"k":[{},10],"l":[{},7]},8],"ç":[{"k":[{},7]},8],"d":[{"a":[{"v":[{"ê":[{"j":[{"i":[{},0]}]}]}]}],"b":[{"û":[{"n":[{"a":[{},11]}]}]},7],"d":[{"a":[{},12]},7],"g":[{},7],"r":[{},7],"t":[{},7],"y":[{"o":[{},9],"û":[{},4]}]},8],"e":[{"a":[{},13],"d":[{"y":[{},9]}],"e":[{},13],"ê":[{},13],"f":[{"r":[{},9]}],"l":[{"a":[{},2]}],"r":[{"d":[{"e":[{"s":[{"t":[{"a":[{},0]}]},14]}]}]}],"t":[{"r":[{},9]}],"z":[{},7]},1],"ê":[{"a":[{},15],"l":[{"a":[{"v":[{},12]}]}]},1],"f":[{"l":[{"î":[{},9],"û":[{},4]},2],"r":[{"o":[{},9]}],"s":[{},7],"ş":[{},7],"t":[{},7],"x":[{},7]},8],"g":[{"b":[{},7],"h":[{},7],"k":[{},7],"l":[{},15],"n":[{},7],"r":[{},7],"s":[{},7],"t":[{},7]},8],"h":[{"b":[{},7],"d":[{},7],"k":[{},7],"m":[{},7],"n":[{},7],"r":[{},7],"s":[{},7],"t":[{},7]},8],"i":[{"i":[{},13],"l":[{"a":[{},2]}],"n":[{"ê":[{"r":[{},9]}]}],"r":[{"e":[{"h":[{},12]}]}],"s":[{},15]},1],"î":[{"a":[{},15],"d":[{},7],"e":[{"t":[{},2]}],"j":[{},15],"l":[{},16],"p":[{"l":[{},9]}],"s":[{"t":[{"i":[{"y":[{"e":[{},17]}]}]}]}]},1],"j":[{"a":[{"v":[{"a":[{".":[{},18]}]}]}],"h":[{},7],"k":[{},7],"m":[{},7],"n":[{},7],"t":[{},7]},8],"k":[{"b":[{},7],"ç":[{},7],"k":[{},7],"l":[{},7],"m":[{},7],"n":[{},7],"r":[{},7],"s":[{},7],"t":[{},7],"v":[{},7],"w":[{},7],"x":[{},7],"y":[{},7]},8],"l":[{"a":[{"m":[{"î":[{"t":[{"ê":[{},3]}]}]}]}],"b":[{},7],"c":[{},7],"ç":[{},7],"d":[{},7],"e":[{},9],"f":[{},7],"g":[{},7],"h":[{},7],"k":[{},7],"l":[{},7],"m":[{},7],"n":[{},7],"p":[{},7],"q":[{},7],"s":[{},7],"t":[{},7],"v":[{},7],"w":[{},7],"x":[{},7],"y":[{},7],"z":[{},7]},8],"m":[{"a":[{"î":[{},2]}],"b":[{},7],"d":[{},7],"f":[{},7],"î":[{"t":[{"ê":[{},4]}]}],"m":[{},7],"p":[{},19],"r":[{},7],"s":[{},7],"w":[{},7],"y":[{},7],"z":[{},7]},8],"n":[{"a":[{},9],"b":[{},7],"c":[{},7],"ç":[{},7],"d":[{},7],"ê":[{"r":[{"e":[{},2]}]}],"f":[{},7],"g":[{},7],"h":[{},7],"k":[{"i":[{},12]},7],"n":[{},7],"p":[{},7],"s":[{},7],"ş":[{},7],"t":[{},7],"v":[{},7],"x":[{},7],"y":[{},7],"z":[{},10]},8],"o":[{"f":[{},13],"h":[{},15],"s":[{},15],"w":[{},15]},7],"p":[{"s":[{},7],"t":[{},7]},8],"q":[{"p":[{},7],"ş":[{},7]},8],"r":[{"a":[{"î":[{},12]},9],"b":[{},7],"c":[{},7],"ç":[{},7],"d":[{},7],"f":[{"i":[{},20]},7],"g":[{},7],"h":[{},7],"j":[{},7],"k":[{},7],"l":[{},7],"m":[{},7],"n":[{},7],"p":[{},7],"q":[{},7],"r":[{},7],"s":[{},7],"t":[{},7],"v":[{},7],"w":[{},7],"x":[{},7],"y":[{},7],"z":[{},7]},8],"s":[{"a":[{},6],"b":[{},7],"e":[{},6],"g":[{},7],"î":[{},6],"k":[{},7],"p":[{},7],"r":[{},7],"s":[{},7],"t":[{"a":[{"v":[{},12]}],"r":[{},2]},7],"u":[{},6],"û":[{},6],"y":[{},7]},8],"ş":[{"a":[{"v":[{},21]}],"b":[{},7],"d":[{},7],"ê":[{"l":[{},2]}],"g":[{},7],"h":[{},7],"k":[{},7],"m":[{},7],"n":[{},7],"p":[{},7],"t":[{},19],"v":[{},7],"x":[{},7]},8],"t":[{"a":[{"v":[{},4]}],"g":[{"e":[{},12]},7],"k":[{},7],"l":[{},7],"m":[{},7],"n":[{"î":[{},12]},7],"p":[{},7],"r":[{"a":[{},9],"û":[{},9]}],"s":[{},22],"t":[{},7],"x":[{},7],"y":[{},7]},8],"u":[{"e":[{},13],"i":[{},15],"k":[{},15],"r":[{"a":[{"n":[{"d":[{"i":[{},23]}]}]}]}],"ş":[{},15]},1],"v":[{"b":[{},7],"ç":[{},7],"d":[{},7],"g":[{},7],"h":[{},7],"k":[{},7],"n":[{},7],"r":[{},7],"s":[{},7],"ş":[{},7],"y":[{},7]},8],"w":[{"c":[{},7],"d":[{},7],"h":[{},7],"k":[{},7],"l":[{},7],"n":[{},7],"r":[{},7],"s":[{},7],"ş":[{},7],"t":[{},7]},8],"x":[{"a":[{},9],"ç":[{},7],"l":[{},7],"n":[{},7],"t":[{"r":[{},9]},7],"w":[{},15]},8],"y":[{"b":[{},7],"d":[{"a":[{},12]},7],"l":[{},7],"n":[{},7],"r":[{},7],"s":[{},7],"t":[{},7],"v":[{},7],"w":[{},7]},8],"z":[{"b":[{},7],"d":[{},7],"e":[{"z":[{},24]}],"k":[{},7],"m":[{},7],"r":[{},7],"t":[{},7],"y":[{},7],"z":[{},7]},8]}',
    []
  ];
});
