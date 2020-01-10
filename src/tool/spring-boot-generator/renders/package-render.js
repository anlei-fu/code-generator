const { STR } = require("./../../../libs/str");
const {ARRAY} =require("./../../../libs/utils");


const PACKAGES = new Map();
PACKAGES.set("List", {
        package: "import java.util.List;",
        isSystem: true,
});
PACKAGES.set("Date", {
        package: "import java.util.Date;",
        isSystem: true,
});

PACKAGES.set("@Param", {
        isSystem: false,
        package: "import org.apache.ibatis.annotations.Param;",
});

PACKAGES.set("@NotBlank", {
        package: "import javax.validation.constraints.NotBlank;",
        isSystem: true
});

PACKAGES.set("@NotNull", {
        package: "import javax.validation.constraints.NotNull;",
        isSystem: true
});

PACKAGES.set("PageInfo", {
        package: "import com.github.pagehelper.PageInfo;",
        isSystem: false
});

PACKAGES.set("PageHelperUtils", {
        package: "import com.@project.utils.PageHelperUtils;",
        isSystem: false
});

PACKAGES.set("@Email", {
        package: "import com.@project.validate.annotation.Email;",
        isSystem: false
});

PACKAGES.set("@Enum", {
        package: "import com.@project.validate.annotation.Enum;",
        isSystem: false
});

PACKAGES.set("@IdCardNo", {
        package: "import com.@project.validate.annotation.IdCardNo;",
        isSystem: false
});

PACKAGES.set("@Ip", {
        package: "import com.@project.validate.annotation.Ip;",
        isSystem: false
});

PACKAGES.set("@Password", {
        package: "import com.@project.validate.annotation.Password;",
        isSystem: false
});

PACKAGES.set("@Path", {
        package: "import com.@project.validate.annotation.Path;",
        isSystem: false
});

PACKAGES.set("@Phone", {
        package: "import com.@project.validate.annotation.Phone;",
        isSystem: false
});

PACKAGES.set("@PostCode", {
        package: "import com.@project.validate.annotation.PostCode;",
        isSystem: false
});

PACKAGES.set("@Telephone", {
        package: "import com.@project.validate.annotation.Telephone;",
        isSystem: false
});

PACKAGES.set("@Url", {
        package: "import com.@project.validate.annotation.Url;",
        isSystem: false
});

/**
 * Manage packages and render package segment
 */
class PackegeRender {
        constructor (project) {
                this._project = project;
        }

        /**
         * Add package
         * 
         * @param {Package} pk 
         */
        addPackage(pk) {
                if (!PACKAGES.has(pk.name))
                        PACKAGES.set(pk.name, pk);
        }

        /**
         * Render package segment
         * 
         * @param {String} content 
         * @returns {String}
         */
        renderPackage(content) {

                // find @package segment
                let ls = STR.select(content, "@packages", "@packages");
                if (ls.length == 0)
                        return content;

                let packagesPattern = ls[0]
                        , systems = []
                        , others = STR.remove(packagesPattern, "@packages")
                                .replace(/@project/g, this._project)
                                .split("\n");

                PACKAGES.forEach((value, key) => {

                        if (key == "List" && !content.includes("List<"))
                                return;

                        if (!STR.includesAny(content, [`${key} `,
                        `${key}\n`,
                        `${key}>`,
                        `${key}(`,
                        `${key}<`]) || packagesPattern.includes(key))
                                return;

                        if (value.isSystem) {
                                systems.push(value.package);
                        } else {
                                others.push(value.package || `import com.@project.pojo.${value.type}.${key};`);
                        }
                });

                others.forEach((x, i) => {
                        others[i] = x.replace(/@project/g, this._project);
                });

                others =ARRAY.distinct(others,x=> x.trim());

                systems.forEach((x, i) => {
                        systems[i] = x.replace(/@project/g, this._project);
                });

                others = others.sort();
                systems = systems.sort();

                let pcontent = STR.arrayToString(others, "", "\r\n");
                pcontent = STR.removeEmptyLine(pcontent);

                if (systems.length != 0) {
                        let scontent = STR.arrayToString(systems, "", "\r\n");
                        scontent = STR.removeEmptyLine(scontent);
                        pcontent += "\r\n" + scontent;
                }

                return content.replace(packagesPattern, pcontent.trimRight() + "\r\n");
        }
}

exports.PackegeRender = PackegeRender;