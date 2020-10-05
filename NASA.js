/**
 * Author: evilbutcher
 * Github: https://github.com/evilbutcher
 **/
const $ = require("Config");
const ERR = MYERR();

!(async () => {
  if (init() == true) {
    var imglink = await getinfo();
    var flag = Math.floor(Math.random() * 10);
    if ($.headers.statusCode == 200) {
      if (flag >= 0 && flag < 2) {
        console.log(`${flag} 展示备用图片1`);
        var cover = $.thisimglink;
      } else if (flag >= 2 && flag < 4) {
        console.log(`${flag} 展示备用图片2`);
        cover = $.thisimglink2;
      } else {
        console.log(`${flag} 展示NASA图片`);
        cover = imglink;
      }
    } else {
      if (flag >= 0 && flag < 5) {
        console.log(`${flag} 展示备用图片1`);
        cover = $.thisimglink;
      } else {
        console.log(`${flag} 展示备用图片2`);
        cover = $.thisimglink2;
      }
    }
    $widget.setTimeline(ctx => {
      return {
        type: "image",
        props: {
          uri: cover,
          resizable: true,
          scaledToFit: true,
          frame: {
            width: 400,
            height: 400,
            alignment: $widget.alignment.center
          }
        }
      };
    });
  }
})()
  .catch(err => {
    if (err instanceof ERR.TokenError) {
      $push.schedule({
        title: "NASA - Config配置错误❌",
        body: err.message
      });
    } else {
      $push.schedule({
        title: "NASA - 出现错误❌",
        body: JSON.stringify(err)
      });
    }
  })
  .finally();

function init() {
  try {
    $.thisapikey = $.nasaapi();
    $.thisimglink = $.imglink();
    $.thisimglink2 = $.imglink2();
    return true;
  } catch (err) {
    throw new ERR.TokenError("配置文件中未找到NASA API或备用图片地址");
  }
}

function MYERR() {
  class TokenError extends Error {
    constructor(message) {
      super(message);
      this.name = "TokenError";
    }
  }
  class TimeError extends Error {
    constructor(message) {
      super(message);
      this.name = "TimeError";
    }
  }
  class ImageError extends Error {
    constructor(message) {
      super(message);
      this.name = "ImageError";
    }
  }
  return {
    TokenError,
    TimeError,
    ImageError
  };
}

async function getinfo() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${$.thisapikey}`;
  var resp = await $http.get({
    url: url
  });
  $.headers = resp.response;
  var cover = resp.data.url;
  return cover;
}
