// Default package paths
exports.packages = {
        "List<": {
                package: "import java.util.List;",
                isSystem: true,
        },
        "Date ": {
                package: "import java.util.Date;",
                isSystem: true,
        },
        "@Params": {
                isSystem: false,
                package: "import org.apache.ibatis.annotations.Param;",
        },
        "PageInfo<": {
                package: "import com.github.pagehelper.PageInfo;",
                isSystem: false
        },
        "@NotBlank": {
                package: "import javax.validation.constraints.NotBlank;",
                isSystem: true
        },
        "@NotBlank": {
                package: "import javax.validation.constraints.NotNull;",
                isSystem: true
        },
        "@NotNull": {
                package: "import javax.validation.constraints.NotNull;",
                isSystem: true
        },
}