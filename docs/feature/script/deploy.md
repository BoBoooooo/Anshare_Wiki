# 服务器从零到项目部署

> **汪维平** :man:  2018年1月23日

服务器从零到项目发布
在服务器上发布目前公司的大部分项目可以分为以下三步，第一是MySQL数据库的安装配置，第二是Internet Information Services（IIS）管理器功能添加，最后是发布包在IIS上部署。
其中大多均可在网上查找相应的方法。

## 一．MySQL数据库的安装与配置
* 我们安装MySQL用的版本是压缩包`mysql-5.6.19-winx64.zip`，将其解压到D盘（我们习惯将数据库、发布包统一放在D盘）并将解压后的文件名改为mysql（方便今后操作）
* 将名为my.ini的文件复制到mysql目录下，接着配置环境变量（右击计算机——属性——高级系统设置——环境变量），在path中将目录D:\mysql\bin\添加并与其它目录以“;”隔开（英文分号）。
* 接着Windows+R运行D:\mysql\bin\mysqld.exe -install安装MySQL（应有黑框一闪而过），之后以管理员身份运行cmd，键入命令net start mysql回车，提示MySQL服务启动成功。
* 因个人经验有限，接下来的步骤可能不是必要的，但为了稳妥起见我每次都执行了。
     * 键入`mysql -u root -p`回车，提示输入密码再回车，出现`Welcome to the MySQL monitor……`
     * 键入`use mysql`回车，提示`database changed`
     * 键入`grant all privileges on *.* to 'root'@'localhost' identified by '' with grant option;`回车，提示`Query OK`
     * 键入`grant all privileges on *.* to 'root'@'%' identified by '' with grant option;`回车提示`Query OK……`
     * `flush privileges;`回车
     * `exit`。
* 最后安装Navicat可视化操作工具和mysql-connector-net-6.9.3.msi即可完成数据库的安装配置。
## 二．IIS的配置
找到服务器管理器，选择添加角色和功能，期间角色列表内勾选Web服务器(IIS)，在功能列表中添加相应版本的.net Framework ，再单击左边“角色服务器”，中间角色服务列表选择需要安装的项目（如果你不知道需要选哪些，建议你全部都勾选它）。其它的只要下一步即可。
## 三．发布包部署
打开IIS在网站上右击添加网站，网站名称自定，应用程序池选择相应的.net Framework版本（有时选择DefaultAppPool也没问题），物理路径选择发布包文件夹的路径，在IP地址的端口中选择相应的未被占用的端口，点击确认即可发布成功。
## 四．避坑
* 如果遇需要安装高版本.net，一般稍老的系统的.net 版本较低需要安装高版本的.net（应该是Win7和Windows Server 2008以下的操作系统）
> 要先安装.net后确保IIS应用程序池里有相应版本的.net，然后再安装mysql-connector-net，这一点很重要。
* 有时会出现安装了高版本.net，IIS应用程序池里没有该版本的情况，此时Windows+R键入`C:\\Windows\Microsoft.NET\Framework\v4.0.30319\`
`aspnet_regiis.exe -i`回车即可，具体可参考百度等网站。
* 发布后系统主页可以出来，无法登陆时可考虑这几点
     * `web.config`中数据库地址是否正确；
     * `mysql-connector-net`连接器是否安装，以及连接器和.net的安装先后顺序是否注意；
     * `web.config`文件有时会失效，可复制其它系统的web配置文件。
## 五．总结
实现最终目的方法多种多样，以上总结仅凭本人浅薄经验所书，有一定的片面性；在安装配置期间遇到的种种问题均可度娘解决；
>最后，以上提到的安装文件本人均可提供，欢迎骚扰。
