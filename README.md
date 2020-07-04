# 个人脚本整理
⚠️所有内容仅供交流学习，请于下载后24h内删除，勿挪作他用，否则后果自负⚠️  
⚠️一旦下载即视为您同意上述要求⚠️
## 【JSBox】
### [文献下载助手](https://github.com/evilbutcher/Code/tree/master/%E6%96%87%E7%8C%AE%E4%B8%8B%E8%BD%BD/%E6%96%87%E7%8C%AE%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B5.1)
##### 功能特点
1、输入doi号(默认复制剪贴板文本)，点击“下载”按钮即可下载文献；可批量下载，doi用英文逗号(,)隔开。  
2、长按地址栏可检测链接是否可用。  
3、若提示错误，长按对应的链接尝试手动下载。  
4、在文献界面，点击文献可以删除，长按可以分享。  
5、打开重命名开关将采用标题-期刊-卷-doi方式命名，因为需要向同一网址请求数据，批量下载大于5篇时会关闭，否则有拉黑ip风险。  
6、关闭iCloud Drive，文献存储在脚本目录articles下(可打包分享)；打开iCloud Drive，文献存储在JSBox/ArticlesHelper/articles目录下。  
7、iCloud中的ArticlesHelper/download目录用来存储wos下载的html记录。具体方法：Safari下载html格式的wos文献记录，下载完成后打开目录，转存至ArticlesHelper/download文件夹，打开脚本，通过载入文件解析doi，若有多篇文献记录默认载入最后一个文件的doi。所有文献记录以txt格式保存在ArticlesHelper/articles目录下，可通过文献界面下拉刷新对解析记录进行管理。  
8、Windows用户可在Microsoft Store下载iCloud进行同步。  

### [缩写翻译](https://github.com/evilbutcher/Code/blob/master/%E7%BC%A9%E5%86%99%E7%BF%BB%E8%AF%91/1.2%E7%BC%A9%E5%86%99%E7%BF%BB%E8%AF%91%E8%BE%93%E5%85%A5%E7%B2%98%E8%B4%B4%E5%B9%B6%E5%AD%98.js)
##### 功能特点
复制带有缩写的文字运行脚本即可。

### [下载INS图片](https://github.com/evilbutcher/Code/blob/master/%E4%B8%8B%E8%BD%BDINS%E5%9B%BE%E7%89%87.js)
##### 功能特点
需要自行填入cookie。  
其他方式：[大佬的捷径](https://www.icloud.com/shortcuts/3b6e85cd3f114ac79baf056765127dae)。

### [去重小工具](https://github.com/evilbutcher/Code/blob/master/%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.js)
##### 功能特点
以英文,分隔，去除重复（可根据情况改）。

## 【网页】
### [神秘博士2048](https://github.com/evilbutcher/Code/tree/master/MyWeb/custome%202048)
##### 功能特点
打开index.html即可玩，picture内图片可自定义。