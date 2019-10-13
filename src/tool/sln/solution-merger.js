const BANNER=`
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio Version 16
VisualStudioVersion = 16.0.29306.81
MinimumVisualStudioVersion = 10.0.40219.1`;

const SOLUTION_PLATFORM_CONFIG=`
Debug|Any CPU = Debug|Any CPU
Debug|Mixed Platforms = Debug|Mixed Platforms
Debug|x86 = Debug|x86
DebugLocal|Any CPU = DebugLocal|Any CPU
DebugLocal|Mixed Platforms = DebugLocal|Mixed Platforms
DebugLocal|x86 = DebugLocal|x86
Release|Any CPU = Release|Any CPU
Release|Mixed Platforms = Release|Mixed Platforms
Release|x86 = Release|x86`;

const PROJECT_CONFIG_PREFIX='		';
const PROJECT_PLATFORM_CONFIG=`
@guid.Debug|Any CPU.ActiveCfg = Debug|Any CPU
@guid.Debug|Any CPU.Build.0 = Debug|Any CPU
@guid.Debug|Mixed Platforms.ActiveCfg = Debug|Any CPU
@guid.Debug|Mixed Platforms.Build.0 = Debug|Any CPU
@guid.Debug|x86.ActiveCfg = Debug|Any CPU
@guid.DebugLocal|Any CPU.ActiveCfg = Debug|Any CPU
@guid.DebugLocal|Any CPU.Build.0 = Debug|Any CPU
@guid.DebugLocal|Mixed Platforms.ActiveCfg = Debug|Any CPU
@guid.DebugLocal|Mixed Platforms.Build.0 = Debug|Any CPU
@guid.DebugLocal|x86.ActiveCfg = Debug|Any CPU
@guid.Release|Any CPU.ActiveCfg = Release|Any CPU
@guid.Release|Any CPU.Build.0 = Release|Any CPU
@guid.Release|Mixed Platforms.ActiveCfg = Release|Any CPU
@guid.Release|Mixed Platforms.Build.0 = Release|Any CPU
@guid.Release|x86.ActiveCfg = Release|Any CPU`;
class Solution{
        constructor(){
                this.banner;
                this.path;
        }
}
class Reference{
        constructor(){
                this.path="";
                this.specicVersion="";
        }
}
class Project{
        constructor(){
                this.name="";
                this.path="";
                this.isFolder=false;
                this.guid="";
                this.nestedProject="";
                this.compiles="";
        }
}
/**
 * 
 * @param {*} sln 
 * @param {*} proj 
 */
function addProject(sln,proj){

}
/***
 * 
 */
function removeProject(sln,prjName){

}
/**
 * 
 */
function addItem(prj,path){

}
/**
 * 
 */
function removeItem(proj,path){

}
exports.SLN={
        addProject,
        removeProject,
        addItem,
        removeItem,
}