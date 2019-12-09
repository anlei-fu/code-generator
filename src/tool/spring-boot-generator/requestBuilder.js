exports.functionBuilder = function () {
        this.items = [];
        this.exclude;
        function build() {
                return this;
        }

        function exclude(items) {
                this.exclude = items;
                return this;
        }

        function include(name, type, description, option) {
                this.items.push({ name, type, description, option });
                return this;
        }

        function name(name) {
                this.name = name;
                return this;
        }

        function description(description) {
                this.description = description;
                return this;

        }

        function page() {
                this.extendPage = true;
                return this;
        }
}