<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-21 09:36:42
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 09:44:06
 -->
# Vscode
--------
### ***example launch setting***
``` json
{
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
                




                {
                        "type": "chrome", // debugger type
                        "request": "launch",
                        "name": "Launch Chrome against localhost", // dubugger name
                        "url": "${file}", //page path
                        "sourceMaps": true,
                        "webRoot": "${workspaceRoot}" //www root
                },
                {
                        "name": "nodeLauch", //单独调试js，即可以直接运行js
                        "type": "node",
                        "request": "launch",
                        "program": "${file}", //这个配置成你要调试的文件、${file}当前打开的文件 file to run
                        "stopOnEntry": false,
                        "args": [],
                        "cwd": "${workspaceRoot}",
                        "runtimeExecutable": null,
                        "runtimeArgs": [
                                "--nolazy"
                        ],
                        "env": {
                                "NODE_ENV": "development"
                        },
                        "console": "internalConsole",
                        "preLaunchTask": "",
                        "sourceMaps": false
                }
        ]
}
```