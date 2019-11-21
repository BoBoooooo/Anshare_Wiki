# tomcat下http转https

**邹海鹏** :man:  2019年11月21日

* 自签发CA证书
``` java
keytool -genkeypair -alias "tomcat" -keyalg "RSA" -keystore "d:\tomcat.keystore" 
```  
在jdk的bin目录中的命令窗口输入以上命令,生成密钥文件，存放在d盘，上述命令输入后会让你输入密码，然后用户名建议输入ip地址
将文件复制到tomcat的conf文件下，打开serve.xml，修改成以下内容:
``` java
<Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true" >
        <SSLHostConfig>
            <Certificate certificateKeystoreFile="conf/tomcat.keystore"
                         certificateKeystorePassword="123456"       
                         type="RSA" />
        </SSLHostConfig>
</Connector>
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
```
这里的certificateKeystoreFile指的就是密钥文件的地址，certificateKeystorePassword指的是上述操作输入的密码

* 将生成的p12后缀的文件放入到classpath路径下面
* 添加一下内容到cofig的web.xml文件
```
<!--强制使用https，http请求会自动转为https -->
<login-config>
    <auth-method>CLIENT-CERT</auth-method>
    <realm-name>Client Cert Users-only Area</realm-name>
</login-config>
<!--配置网站支持https，/* 表示全部请求都走https， transport-guarantee 标签设置为 CONFIDENTIAL以便使应用支持 SSL。 如果需要关闭 SSL ，将 CONFIDENTIAL 改为 NONE 即可 -->
<security-constraint>
    <web-resource-collection>
        <web-resource-name>SSL</web-resource-name>
        <url-pattern>/*</url-pattern>
    </web-resource-collection>
    <user-data-constraint>
        <transport-guarantee>CONFIDENTIAL</transport-guarantee>
    </user-data-constraint>
</security-constraint>
``` 
* 将项目的配置文件做以下修改，方便能以https路径访问
```
server.ssl.key-store:classpath:client.p12
server.ssl.key-store-password：123456
server.ssl.keyStore: PKCS12
server.ssl.keyAlias:tomcat
server.servlet.context-path=/FlowSCBackend
```

