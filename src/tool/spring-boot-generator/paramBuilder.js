exports.paramBuilder = () => {
        this.map = new Map();
        function defaultValue(name, value) {
                this.map.add(name, value);
                return this;
        }
}