const { JavaTokenizer } = require("./java-tokenizer");
const { SequenceReader } = require("./../tokenization/sequence-reader");

const KEYWORDS = new Set(["public", "private", "static", "final"]);

class JavaParser {
    constructor() {
        this.imports = [];
        this.package = [];
        this.clazz = new Class();
        this._reader;
    }

    parser(text) {
        this._reader = new SequenceReader(new JavaTokenizer().tokenize(text));
        let package = "";
        let imports = [];
        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.type == "comment") {

            } else if (c.type == "blank") {

            } else {
                if (c.value == "package") {

                } else if (c.value == "import") {

                } else {
                    this._reader.back();
                    this.parseClass();
                }
            }

        }
        this.parseClass();
    }

    parseClass() {
        this.parserClassInfo();
        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.value == "}")
                break;

            this.parseMember();

        }
    }

    parserClassInfo() {
        let extend = "";
        let impls = [];
        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.value == "{")
                break;
        }
    }

    parseMember() {
        let comments = [];
        let annotations = [];
        let isPublic = false;
        let isStatic = false;
        let isFinal = false;
        let finish

        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.type == "comment") {

            } else if (c.type == "blank") {

            } else {
                if (c.value.startsWith("@")) {
                    this._reader.back();
                    annotations.push(this.parserAnnotation());
                } else {
                    if (c.value == "<") {

                    } else if (c.value == "class") {

                    }
                    else if (c.value == "public") {

                    } else if (c.value == "private") {

                    } else if (c.value == "static") {

                    } else if (c.value == "final") {

                    } else if (c.value == "(") {
                        return this.parseFunction();
                    } else if (c.value == "=") {

                    } else if (c.value == ";") {

                    }
                }
            }

        }
    }

    parseFunction() {
        let parameters = [];
        while (this._reader.hasNext) {
            let c = this._reader.next();
            if (c.value == ")") {

            } else {
                this._reader.back();
                parameters.push(this.parseParameter);
            }
        }
    }

    parserAnnotation() {
        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.type == "blank") {

            } else if (c.value = "(") {

            } else {

            }
        }
    }

    parseFiled() {

    }

    parseParameter() {
        let annotations = [];
        let type = "";
        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.value.startsWith("@")) {
                annotations.push(this.parserAnnotation());
            } else if (c.value == ",") {

            } else if (c.value == "...") {

            } else {

            }

        }
    }

    parseBlock() {
        let items = [];
        while (this._reader.hasNext()) {
            let c = this._reader.next();
            if (c.type == "comment") {

            } else if (c.type == "blank") {

            } else if (c.value == "}") {

            } else {
                if (c.value == "if") {
                    items.push(this.parseIf());
                } else if (c.value == "else") {
                    items.push(this.parseElse());
                } else if (c.value == "for") {
                    items.push(this.parseFor());
                } else if (c.value == "do") {
                    items.push(this.parseDoWhile());
                } else if (c.value == "while") {
                    items.push(this.parseWhile());
                } else if (c.value == "switch") {
                    items.push(this.parseSwitch());
                } else {
                    items.push(this.parseExpression());
                }
            }
        }
    }

    parseIf() {
        while (this._reader.hasNext()) {

        }
    }

    parseElse() {
        while (this._reader.hasNext()) {

        }
    }

    parseWhile() {
        while (this._reader.hasNext()) {

        }
    }

    parseDoWhile() {
        while (this._reader.hasNext()) {

        }
    }

    parseFor() {
        while (this._reader.hasNext()) {

        }
    }

    parseSwitch() {
        while (this._reader.hasNext()) {

        }
    }

    parseCase() {
        while (this._reader.hasNext()) {
            let c= this._reader.next();
            if(c.value=="break"){

            }else if(c.value=="return"){
            
            }
        }
    }

    parseDiamond() {
        while (this._reader.hasNext()) {

        }
    }

    parseParenthesis() {
        let content="";
        while(this._reader.hasNext()){
            let c= this._reader.next();
            if(c.value=="["){
  
            }else if(c.value=="("){
  
            }else if(c.value=="{"){

            } else if(c.value==";"){
  
            }else if(c.value=="?"){
  
            }else{
  
            }
        }
    }

    parseBracket() {
        let content="";
        while(this._reader.hasNext()){
            let c= this._reader.next();
            if(c.value=="["){
  
            }else if(c.value=="("){
  
            }else if(c.value=="{"){

            } else if(c.value==";"){
  
            }else if(c.value=="?"){
  
            }else{
  
            }
        }
      }

    parseExpression(){
      while(this._reader.hasNext()){
          let c= this._reader.next();
          if(c.value=="["){

          }else if(c.value=="("){

          }else if(c.value==";"){

          }else if(c.value=="?"){

          }else{

          }
      }
    }
}

class ExpressionParser {
}

class ForParser {

}

class IfPasser {

}

class WhileParser {

}

class DoParser {

}

class SwitchPass {

}

class CaseParser {

}

class BlockParser {

}

class ParameterParser {

}

class MethodParser {

}

class FieldParser {

}

class AnnotationParser {

}



