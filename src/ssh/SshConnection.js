const { Client } = require('ssh2');
const { STR } = require('../libs');
const { defaultSplit } = require("./../tools/csv-resolver/csv-resolver")

class SshClient {
        constructor () {
                this._client = new Client();
                this._connected = false;
        }

        connect(config = { host, port, userName, password }) {
                return new Promise((resolve, reject) => {
                        this._client.on("ready", x => {
                                this._connected = true;
                                resolve()
                        });
                        this._client.on("error", x => {
                                this._connected = false;
                                reject(x)
                        }
                        );
                        this._client.connect(config);
                })

        }

        disconnect() {
                if (!this._connected) {
                        return;
                }

                this._connected = false;

                return new Promise((resolve, reject) => {
                        this._client.on("end", x => { resolve(); });
                        this._client.on("error", x => reject(x));
                        this._client.end()
                })

        }

        exec(command, split = false) {
                if (!this._connected) {
                        return;
                }


                return new Promise((resolve, reject) => {
                        this._client.exec(command, async (err, channel) => {
                                if (err) {
                                        await this.disconnect();
                                        reject(err);
                                }

                                channel.on("data", data => {
                                        let resp = data.toString();
                                        resolve(split ? defaultSplit(STR.singleBlank(resp), "/n", " ") : resp);
                                })
                                        .stderr.on('data', (data) => {
                                        });
                        });
                })

        }

        uploadFile(localFile, remoteFile) {
                if (!this._connected) {
                        return;
                }

                return new Promise((resolve, reject) => {
                        this._client.sftp((err, sftp) => {
                                if (err) {
                                        reject(err)
                                        return;
                                };

                                sftp.fastPut(localFile, remoteFile, async (err, result) => {
                                        if (err) {
                                                reject(err);
                                        } else {
                                                resolve("success");
                                        }
                                });
                        });
                });

        }

        downloadFile(remoteFile, localFile) {
                if (!this._connected) {
                        return;
                }

                return new Promise((resolve, reject) => {
                        this._client.sftp((err, sftp) => {
                                if (err) {
                                        reject(err)
                                        return;
                                };

                                sftp.fastGet(remoteFile, localFile, async (err, result) => {
                                        if (err) {
                                                reject(err);
                                        } else {
                                                resolve("success");
                                        }
                                });
                        });
                });

        }
}

class Software {
        constructor () {
                this.sourceFile;
                this.targetFolder;
                this.installShell;
                this.removeSourceFile;
                this.installResultCheckCommand;
                this.installResultComfirmer;
                this.name;
        }
}

class BaseCommand extends SshClient {
        unzip(sourceFile, taregtFolder, removeSorce) {

        }

        zip(sourceFolder, targetFile) {

        }

        cd(folder) {

        }

        runShell(shellFile) {

        }

        pwd() {

        }

        changeMod(file) {

        }

        removeFile(...file) {

        }

        removeFolder(...folder) {

        }

        createFolder(...fodler) {

        }

        createFile(...file) {

        }

        fileExist(...folder) {

        }

        folderExist(folder) {

        }

        fileExist(file) {

        }
}

class SoftwareManager extends BaseCommand {
        async install(config = { sorceFile, unzipFolder, installShell }) {
                let logs = "";
                try {
                        if (!this.folderExist(unzipFolder)) {
                                this.createFolder(unzipFolder);
                        }

                        await this.uploadFile(sourceFile, unzipFolder + "/" + sourceFile);

                        await this.runShell(installShell);

                        if (this.installCheckCommand) {
                                let resp = await this.exec(this.installCheckCommand);

                        }

                        // install check
                } catch (ex) {

                }
        }

        start() {

        }

        stop() {

        }

        restart() {

        }

        status() {

        }
}

let shellCommand = {

}



class ServerMonitor extends SshClient {
        getServerInfo() {

        }

        getHardwareInfo() {

        }

        getProcessStat() {

        }

        getProcessDetail() {

        }
}

class ProcessMonitor extends SshClient {
        getServerInfo() {

        }

        getHardwareInfo() {

        }

        getProcessStat() {

        }

        getProcessDetail() {

        }
}

async function main() {
        let client = new SshClient();
        await client.connect({
                host: "192.168.5.188",
                port: 22,
                username: 'root',
                password: "P192d168.5!@##@!"
        });

        let execute = async (description, command) => {
                console.log("***************" + description + "**************")
                console.log(await client.exec(command, false));
        }


        // await execute("查看内核/操作系统/CPU信息", "uname -a");
        // await execute("查看操作系统版本", "head -n 1 /etc/issue");
        // await execute("查看CPU信息", "cat /proc/cpuinfo");
        // await execute("查看计算机名", "hostname");
        // await execute("列出加载的内核模块", "lsmod");
        // await execute("查看环境变量资源", "env");
        // await execute("查看各分区使用情况", "df -h");
        // await execute("查看内存总量", "grep MemTotal /proc/meminfo");
        // await execute("查看空闲内存量", "grep MemFree /proc/meminfo");
        // await execute("查看系统运行时间、用户数、负载", "uptime");
        // await execute("查看系统负载磁盘和分区", "cat /proc/loadavg");
        // await execute("查看挂接的分区状态", "mount | column -t");
        // await execute("查看所有分区", "fdisk -l");
        // await execute("查看所有交换分区", "swapon -s");
        // await execute("查看启动时IDE设备检测状况网络", "dmesg | grep IDE");
        // await execute("查看所有网络接口的属性", "ifconfig");
        // await execute("查看所有监听端口", "netstat -lntp");
        // await execute("查看所有已经建立的连接", "netstat -antp");
        // await execute("查看网络统计信息进程", "netstat -s");
        // await execute("查看所有进程", "ps -ef");
        // await execute("查看活动用户", "w");
        // await execute("查看用户登录日志", "last");
        // await execute("查看系统所有用户", "cut -d: -f1 /etc/passwd");
        // await execute("查看系统所有组", "cut -d: -f1 /etc/group");


        // let result = await client.uploadFile("E:/guoweicode/非充发布/Web.config", "/home/Web.config")
        try {
                await client.disconnect();
        } catch (ex) {
                console.log(ex);
        }

        // const conn = new Client();
        // conn.on('ready', () => {
        //         console.log('Client :: ready');
        //         conn.sftp((err, sftp) => {
        //                 if (err) throw err;
        //                 sftp.fastPut("E:/guoweicode/非充发布/Web.config", "/home/Web.config", async (err) => {
        //                 });
        //         });
        // }).connect({
        //         host: '192.168.5.188',
        //         port: 22,
        //         username: 'root',
        //         password: 'P192d168.5!@##@!'
        // });
}

main();

