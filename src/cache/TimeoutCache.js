exports.TimeoutCache = class TimeoutCache {
        constructor () {
                this._caches = new Map();
        }

        get(key) {
                return this._caches.get(key);
        }

        cache(key, value, expire) {
                this._caches.set(key, value);
                setTimeout(() => caches.delete(key), expire);
        }

        getAll() {
                return this._caches;
        }

        has(key) {
                return this._caches.has(key);
        }

        get count() {
                return this._caches.size;
        }
}
