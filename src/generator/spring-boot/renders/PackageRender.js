const { STR, ARRAY } = require("../../../libs/");
const { tokenize, TOKEN_TYPE } = require("./../../../tools/tokenization/")

const PACKAGES = new Map();
PACKAGES.set("List", {
        package: "import java.util.List;",
        isSystem: true,
});
PACKAGES.set("LinkedList", {
        package: "import java.util.LinkedList;",
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

PACKAGES.set("NotBlank", {
        package: "import javax.validation.constraints.NotBlank;",
        isSystem: true
});


PACKAGES.set("@NotEmpty", {
        package: "import javax.validation.constraints.NotEmpty;",
        isSystem: true
});

PACKAGES.set("@Id", {
        package: "import javax.persistence.Id;",
        isSystem: true
});

PACKAGES.set("@Column", {
        package: "import javax.persistence.Column;",
        isSystem: true
});


PACKAGES.set("@NotNull", {
        package: "import javax.validation.constraints.NotNull;",
        isSystem: true
});

PACKAGES.set("PageResult", {
        package: "import com.@project.pojo.resp.PageResult;",
        isSystem: false
});

PACKAGES.set("Page", {
        package: "import com.github.pagehelper.Page;",
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

class Packege {
        constructor () {

        }
}

/**
 * Manage packages and render package segment
 */
class PackegeRender {
        constructor (project, company) {
                this._project = `${company}.${project}`;
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
                let ls = STR.select1(content, "@packages", "@packages");
                if (ls.length == 0)
                        return content;

                let packagesPattern = ls[0]
                        , systems = []
                        , others = STR.remove(packagesPattern, "@packages")
                                .replace(/@project/g, this._project)
                                .split("\n").filter(x => x.trim());

                let tokens = tokenize(content);
                tokens.forEach(x => {

                        if (x.type == TOKEN_TYPE.symbol && PACKAGES.has(x.value)) {
                                let p = PACKAGES.get(x.value);
                                if (p.isSystem) {
                                        systems.push(p.package)
                                } else {
                                        others.push(p.package);
                                }
                        }
                });


                others.forEach((x, i) => {
                        others[i] = x.replace(/@project/g, this._project);
                });

                others = ARRAY.distinct(others, x => x.trim());

                systems.forEach((x, i) => {
                        systems[i] = x.replace(/@project/g, this._project);
                });
                systems = ARRAY.distinct(systems, x => x.trim());

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