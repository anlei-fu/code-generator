<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 16:27:01
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-01 17:44:43
 -->

## Password
----
#### bcrypt
- bcrypt是专门为密码存储而设计的算法，基于Blowfish加密算法变形而来，由Niels ProvosDavid Mazières发表于1999年的USENIX。
bcrypt最大的好处是有一个参数（work factor)，可用于调整计算强度，而且work factor是包括在输出的摘要中的。随着攻击者计算能力的提高，使用者可以逐步增大work factor，而且不会影响已有用户的登陆。
bcrypt经过了很多安全专家的仔细分析，使用在以安全著称的OpenBSD中，一般认为它比PBKDF2更能承受随着计算能力加强而带来的风险。bcrypt也有广泛的函数库支持，因此我们建议使用这种方式存储密码。
 
#### scrypt
-  scrypt是由著名的FreeBSD黑客 Colin Percival为他的备份服务 Tarsnap开发的。
和上述两种方案不同，scrypt不仅计算所需时间长，而且占用的内存也多，使得并行计算多个摘要异常困难，因此利用rainbow table进行暴力攻击更加困难。scrypt没有在生产环境中大规模应用，并且缺乏仔细的审察和广泛的函数库支持。但是，scrypt在算法层面只要没有破绽，它的安全性应该高于PBKDF2和bcrypt。

#### PBKDF2
- PBKDF2简单而言就是将salted hash进行多次重复计算，这个次数是可选择的。如果计算一次所需要的时间是1微秒，那么计算1百万次就需要1秒钟。假如攻击一个密码所需的rainbow table有1千万条，建立所对应的rainbow table所需要的时间就是115天。这个代价足以让大部分的攻击者忘而生畏。
美国政府机构已经将这个方法标准化，并且用于一些政府和军方的系统。 这个方案最大的优点是标准化，实现容易同时采用了久经考验的SHA算法。

------
<br>

## Secure Hash Algorithm
-----
|Algorithm and variant|Algorithm and variant|Output size(bits)|Internal state size(bits)|Block size(bits)|Rounds|Operations|Security (in bits) against collision attacks|Capacityagainst length extension attacks|Performance on Skylake (median cpb)[1]|Performance on Skylake (median cpb)[1]|First published|
|---|---|---|---|---|---|---|---|---|---|---|---|
|Algorithm and variant|Algorithm and variant|Output size(bits)|Internal state size(bits)|Block size(bits)|Rounds|Operations|Security (in bits) against collision attacks|Capacityagainst length extension attacks|long messages|8 bytes|First published|
|MD5 (as reference)|MD5 (as reference)|128|128(4 × 32)|512|64|And, Xor, Rot, Add (mod 232), Or|≤18(collisionsfound)[2]|0|4.99|55.00|1992|
|SHA-0|SHA-0|160|160(5 × 32)|512|80|And, Xor, Rot, Add (mod 232), Or|<34(collisionsfound)|0|≈ SHA-1|≈ SHA-1|1993|
|SHA-1|SHA-1|160|160(5 × 32)|512|80|And, Xor, Rot, Add (mod 232), Or|<63(collisionsfound)[3]|0|3.47|52.00|1995|
|SHA-2|SHA-224SHA-256|224256|256(8 × 32)|512|64|And, Xor, Rot, Add (mod 232), Or, Shr|112  128|320|7.627.63|84.5085.25|20042001|
|SHA-2|SHA-384SHA-512|384512|512(8 × 64)|1024|80|And, Xor, Rot, Add (mod 264), Or, Shr|192256|128(≤ 384)0|5.125.06|135.75135.50|2001|
|SHA-2|SHA-512/224SHA-512/256|224256|512(8 × 64)|1024|80|And, Xor, Rot, Add (mod 264), Or, Shr|112128|288256|≈ SHA-384|≈ SHA-384|2012|
|SHA-3|SHA3-224SHA3-256SHA3-384SHA3-512|224256384512|1600(5 × 5 × 64)|11521088832576|24[4]|And, Xor, Rot, Not|112128192256|4485127681024|8.128.5911.0615.88|154.25155.50164.00164.00|2015|
|SHA-3|SHAKE128SHAKE256|d (arbitrary)d (arbitrary)|1600(5 × 5 × 64)|13441088|24[4]|And, Xor, Rot, Not|min(d/2, 128)min(d/2, 256)|256512|7.088.59|155.25155.50|2015|
- md5(Message Digest Algorithm)