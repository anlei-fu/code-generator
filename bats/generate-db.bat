@echo off
xcopy /y /e C:\Users\Administrator\Documents\plsqldoc  C:\Users\Administrator\Desktop\code-generator\resources\plsqldoc
cd C:\Users\Administrator\Desktop\code-generator\src\resolvers
node db-info-resolver
