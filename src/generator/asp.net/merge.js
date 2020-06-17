const { XML_DOM } = require("./../../libs/xml-dom");
const { FILE } = require("./../../libs/file");
class ProjectMerger {

        /**
         * 
         * @param {String} root  of project file
         * @param {String} name  of model
         * @param {String} project name
         */
        constructor (root, name, project) {
                this.root = root;
                this.name = name;
                this.project = project;
        }

        merge() {

                // entity
                this._mergeCore(
                        `./M${this.name}.cs`,
                        `${this.root}/common Layer/${this.project}.Entity/${this.project}.Entity.csproj`,
                        this._mergeEntity);

                // iaccess
                this._mergeCore(
                        `./I${this.name}Access.cs`,
                        `${this.root}/common Layer/${this.project}.Interfaces/${this.project}.Interfaces.csproj`,
                        this._mergeIAccess);

                // ihandler
                this._mergeCore(
                        `./I${this.name}Handler.cs`,
                        `${this.root}/common Layer/${this.project}.Interfaces/${this.project}.Interfaces.csproj`,
                        this._mergeIHandler);

                // access
                this._mergeCore(
                        `./${this.name}Access.cs`,
                        `${this.root}/Data Layer/${this.project}.DBAccess/${this.project}.DBAccess.csproj`,
                        this._mergeAccess);

                // handler
                this._mergeCore(
                        `./${this.name}Handler.cs`,
                        `${this.root}/Logic Layer/${this.project}.Logic/${this.project}.Logic.csproj`,
                        this._mergeHandler);

                // service
                this._mergeCore(
                        `./${this.name}Service.cs`,
                        `${this.root}/Service Layer/${this.project}.UserService/${this.project}.UserService.csproj`,
                        this._mergeService);

                // models
                this._mergeCore(
                        `./${this.name}ItemModel.cs`,
                        `${this.root}/Service Layer/${this.project}.Model/${this.project}.Model.csproj`,
                        this._mergeServiceModels);

                // controller
                this._mergeCore(
                        `./${this.name}Controller.cs`,
                        `${this.root}/User Layer/${this.project}.UserWeb/${this.project}.UserWeb.csproj`,
                        this._mergeController);

                // controller
                this._mergeCore(
                        `./${this.name}.xml`,
                        `${this.root}/User Layer/${this.project}.UserWeb/${this.project}.UserWeb.csproj`,
                        this._mergeConfigFile);

                // views
                this._mergeCore(
                        `./${this.name}Index.cshtml`,
                        `${this.root}/User Layer/${this.project}.UserWeb/${this.project}.UserWeb.csproj`,
                        this._mergeViews);
        }

        /**
         * 
         * @param {String} target 
         * @param {String} project 
         * @param {String} processor 
         */
        _mergeCore(target, project, processor) {
                if (!this._exists(target))
                        return;

                let doc = XML_DOM.load(FILE.read(project));
                processor.call(this, doc);
                FILE.write(project, XML_DOM.serialize(doc));
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeConfigFile(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `Config\\EConfig\\${this.name}.xml`))
                        return;

                let el = doc.createElement("Content");
                el.setAttribute("Include", `Config\\EConfig\\${this.name}.xml`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeEntity(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `Entity\\M${this.name}.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `Entity\\M${this.name}.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeIAccess(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `DataAccess\\I${this.name}Access.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `DataAccess\\I${this.name}Access.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeAccess(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `${this.name}Access.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `${this.name}Access.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeIHandler(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `Logic\\I${this.name}Handler.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `Logic\\I${this.name}Handler.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeHandler(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `${this.name}Handler.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `${this.name}Handler.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeService(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `${this.name}Service.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `${this.name}Service.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeServiceModels(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");

                if (this._exists(`./${this.name}ItemModel.cs`)) {
                        if (this._uniqueCheck(groups[1],
                                x => XML_DOM.getAttribute(x, "Include") == `${this.name}ItemModel.cs`)) {

                                let el = doc.createElement("Compile");
                                el.setAttribute("Include", `${this.name}ItemModel.cs`);
                                groups[1].appendChild(el);
                        }
                }

                if (this._exists(`./${this.name}ListModel.cs`)) {
                        if (this._uniqueCheck(groups[1],
                                x => XML_DOM.getAttribute(x, "Include") == `${this.name}ListModel.cs`)) {

                                let el = doc.createElement("Compile");
                                el.setAttribute("Include", `${this.name}ListModel.cs`);
                                groups[1].appendChild(el);
                        }
                }

                if (this._exists(`./${this.name}ViewModel.cs`)) {
                        if (this._uniqueCheck(groups[1],
                                x => XML_DOM.getAttribute(x, "Include") == `${this.name}ViewModel.cs`)) {

                                let el = doc.createElement("Compile");
                                el.setAttribute("Include", `${this.name}ViewModel.cs`);
                                groups[1].appendChild(el);
                        }
                }
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeController(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (!this._uniqueCheck(groups[1],
                        x => XML_DOM.getAttribute(x, "Include") == `Controllers\\${this.name}Controller.cs`))
                        return;

                let el = doc.createElement("Compile");
                el.setAttribute("Include", `Controllers\\${this.name}Controller.cs`);
                groups[1].appendChild(el);
        }

        /**
         * 
         * @param {Document} doc 
         */
        _mergeViews(doc) {
                let groups = XML_DOM.selectAll(doc, x => x.tagName == "ItemGroup");
                if (this._exists("./Index.cshtml")) {
                        if (this._uniqueCheck(groups[1],
                                x => XML_DOM.getAttribute(x, "Include") == `Views\\${this.name}\\Index.cshtml`)) {

                                el = doc.createElement("Content");
                                el.setAttribute("Include", `Views\\${this.name}\\Index.cshtml`);
                                groups[4].appendChild(el);
                        }
                }

                if (this._exists("./Item.cshtml")) {
                        if (this._uniqueCheck(groups[1],
                                x => XML_DOM.getAttribute(x, "Include") == `Views\\${this.name}\\Item.cshtml`)) {

                                el = doc.createElement("Content");
                                el.setAttribute("Include", `Views\\${this.name}\\Item.cshtml`);
                                groups[4].appendChild(el);
                        }
                }

                if (this._exists("./ImportExcel.cshtml")) {
                        if (this._uniqueCheck(groups[1],
                                x => XML_DOM.getAttribute(x, "Include") == `Views\\${this.name}\\ImportExcel.cshtml`)) {

                                el = doc.createElement("Content");
                                el.setAttribute("Include", `Views\\${this.name}\\ImportExcel.cshtml`);
                                groups[4].appendChild(el);
                        }
                }

        }

        /**
         * 
         * @param {String} file
         * @returns {Boolean}
         */
        _exists(file) {
                return FILE.exists(file);
        }

        /**
         * 
         * @param {Node} node 
         * @param {(Node)=>boolean}
         * @returns {boolean}
         */
        _uniqueCheck(node, matcher) {
                return XML_DOM.selectAll(node, matcher).length == 0;
        }
}

exports.ProjectMerger = ProjectMerger