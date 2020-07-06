const { AnalyzeConfigBuilder } = require(
        "libPath/builders/AnalyzerConfig"
)

exports.analyzeConfig = new AnalyzeConfigBuilder().build();