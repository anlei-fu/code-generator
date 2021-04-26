class CsvResolver {
        /**
         * 解析 str 到 value
         * 
         * @param {String} field 
         * @param {(String)=>Object} resolverFunc 
         */
        constructor (field, resolverFunc) {
                this._field = field;
                this._resolveFunc = resolverFunc;
        }

        /**
         * @returns {String}
         */
        get field() {
                return this._field;
        }

        /**
         * @returns {(String)=>Object}
         */
        get resolveFunc() {
                return this._resolveFunc;
        }

}

class CsvConverter {

        /**
         * 96
         * @param {String} field 
         * @param {String} title 
         * @param {(Object)=>String} convertFunc 
         */
        constructor (field, title, convertFunc) {
                this._field = field;
                this._title = title;
                this._convertFunc = convertFunc;
        }

        /**
         * @returns {String}
         */
        get title() {
                return this._title;
        }

        /**
         * @returns {String}
         */
        get field() {
                return this._field;
        }

        /**
         * @returns {(Object)=>String}
         */
        get convertFunc() {
                return this._convertFunc;
        }
}

class CsvResolverBuilder {

        constructor () {
                this._resolvers = [];
        }

        /**
         * 
         * @param {String} field 
         * @returns {CsvResolverBuilder}
         */
        str(field) {
                this._resolvers.push(new CsvResolver(field, str => str));
                return this;
        }

        /**
         * 
         * @param {String} field 
         * @returns {CsvResolverBuilder}
         */
        number(field) {
                this._resolvers.push(new CsvResolver(field, str => parseFloat(str)));
                return this;
        }

        /**
         * 
         * @param {String} field 
         * @returns {CsvResolverBuilder}
         */
        percent(field) {
                this._resolvers.push(new CsvResolver(field, str => parseFloat(str.replace("%", "")) / 100));
                return this;
        }

        /**
         * 
         * @param {String} field 
         * @returns {CsvResolverBuilder}
         */
        boolean(field) {
                this._resolvers.push(new CsvResolver(field, str => !!str));
                return this;
        }

        /**
         * 
         * @param {String} field 
         * @returns {CsvResolverBuilder}
         */
        date(field) {
                this._resolvers.push(new CsvResolver(field, str => new Date(str)));
                return this;
        }

        /**
         * @returns {[CsvResolver]}
         */
        build() {
                return this._resolvers;
        }
}

class CsvConverterBuilder {

        constructor () {
                this._converters = [];
        }

        normal(field, title) {
                this._converters.push(new CsvConverter(field, title, value => value + ""))
                return this;
        }

        date(field, title, pattern) {
                this._converters.push(new CsvConverter(field, title, value => value + ""))
                return this;
        }

        float(field, title, digit) {
                this._converters.push(new CsvConverter(field, title, value => {
                        if (digit) {
                                return value.toFixed(digit) + "";
                        }

                        return value + "";
                }))
                return this;
        }

        percent(field, title, digit) {
                this._converters.push(new CsvConverter(field, title, value => {
                        if (digit) {
                                return value.toFixed(digit) * 100 + "%";
                        }

                        return value * 100 + "%";
                }))
                return this;
        }

        build() {
                return this._converters;
        }
}

class CsvParser {

        constructor (content) {
                this._content = content;
                this._currentIndex = -1;
                this._rows = [];
                this._currentRow = [];
        }

        parse() {
                if (this._content.includes("\n")) {
                        let index = this._content.indexOf("\n");
                        this._content = this._content.substr(index + 1, this._content.length - index - 1);
                }

                while (this._hasNext()) {
                        let c = this._next();
                        if (c == '"') {
                                this._parseQuotation();
                        } else if (c == "\n") {
                                this._endRow;
                        } else {
                                this._parseNormal();
                        }
                }

                return this._rows;
        }

        _parseQuotation() {
                let cell = "";
                while (this._hasNext()) {
                        let c = this._next();
                        if (c == '"') {
                                if (this._hasNext()) {
                                        let d = this._next();
                                        if (d == '"') {
                                                cell += '"';
                                        } else {
                                                this._previous();
                                                break;
                                        }
                                }

                        } else {
                                cell += c;
                        }
                }

                this._finishQuotationCell(cell);
        }

        _finishQuotationCell(cell) {
                this._currentRow.push(cell);
                while (this._hasNext()) {
                        let c = this._next();
                        if (c == '\n') {
                                this._endRow();
                                return;
                        } else if (c == ",") {
                                return;
                        } else {
                                continue;
                        }
                }

                this._endRow();

        }

        _parseNormal() {
                let cell = this._current();
                while (this._hasNext()) {
                        let c = this._next();
                        if (c == ",") {
                                this._currentRow.push(cell);
                                return;
                        } else if (c == "\n") {
                                if (cell.endsWith("\r"))
                                        cell = cell.substr(0, cell.length - 1);

                                this._currentRow.push(cell);
                                this._endRow();
                                return;
                        } else {
                                cell += c;
                        }
                }
                this._currentRow.push(cell);
                this._endRow();
        }

        _endRow() {
                this._rows.push(this._currentRow);
                this._currentRow = [];
        }

        _next() {
                this._currentIndex += 1;
                return this._current();
        }
        _previous() {
                this._currentIndex -= 1;
                return this._current();
        }

        _current() {
                return this._content[this._currentIndex];
        }

        _hasNext() {
                return this._currentIndex + 1 < this._content.length;
        }
}

class CsvHelper {
        /**
         * 
         * @param {[Object]} data 
         * @param {[CsvConverter]} converters 
         */
        toCsvString(data, converters) {
                let content = "";
                converters.forEach(s => {
                        content += s.title.replace(/"/g, "\"") + ",";
                })
                if (content.endsWith(","))
                        content = content.substr(0, content.length - 1);

                content += "\r\n";

                data.forEach(x => {
                        let row = "";
                        converters.forEach(s => {
                                if (!x[s.field]) {
                                        row += `"",`
                                        return;
                                }

                                try {
                                        row += `"${s.convertFunc(x[s.field]).replace(/"/g, '""')}",`;
                                } catch {
                                        throw new Error(`serializer of field '${s.field}' convert failed,value is '${x[s.field]}'`);
                                }
                        });

                        if (row.endsWith(","))
                                row = row.substr(0, row.length - 1);

                        row += "\r\n";
                        content += row;
                });

                return content;
        }

        /**
         * 
         * @param {String} csvStr 
         * @param {[CsvResolver]} resolvers 
         */
        resolveCsv(csvStr, resolvers) {
                let parser = new CsvParser(csvStr);
                let rows = parser.parse();

                let data = [];
                rows.forEach(row => {
                        let obj = {};
                        resolvers.forEach((r, i) => {
                                if (i > row.length - 1) {
                                        obj[r.field] = null;
                                        return;
                                }

                                obj[r.field] = r.resolveFunc(row[i]);
                        });

                        data.push(obj);
                })

                return data;
        }
}

module.exports = {
        CsvHelper,
        CsvResolverBuilder,
        CsvConverterBuilder
}