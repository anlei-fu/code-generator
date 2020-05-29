const {TYPE} =require("./../../libs/utils");

const COMMANDS = {
        CLICK: 0,
        DOUBEL_CLICK: 1,
        PRINT: 2,
        WAIT: 3,
        SCROLL_UP: 4,
        SCROLL_DOWN: 5,
        TYPE: 6,
        KEY_DOWN: 7,
        KEY_UP: 8,
        MOUSE_DOWN: 9,
        MOUSE_UP: 10,
        LEFT_MOUSE_DOWN: 11,
        LEFT_MOUSE_UP: 12,
        MIDDLE_MOUSE_DOWN: 13,
        MIDDLE_MOUSE_UP: 14,
        RIGHT_MOUSE_DOWN: 15,
        RIGHT_MOUSE_UP: 16,
        MOVE: 17,
        INFO: 18,
        SNAPSHOT: 19,
        PAUSE: 20,
        RESUME: 21,
        START: 22,
        STOP: 23,
        RESTART: 24
};

const KEYS = {
        // A,
        // B,
        // C,
        // D,
        // E,
        // F,
        // G,
        // H,
        // I,
        // J,
        // K,
        // L,
        // M,
        // N,
        // O,
        // P,
        // Q,
        // R,
        // S,
        // T,
        // U,
        // V,
        // W,
        // X,
        // Y,
        // Z,
        // HOME,
        // END,
        // SHIFT,
        // CTRL,
        // ALT,
        // WINDOWS,
        // INSERT,
        // DELETE,
}



class Point {

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         */
        constructor (x, y) {
                this.x = x;
                this.y = y;
        }
}

class Command {
        /**
         * 
         * @param {Number} type  @see COMMANDS
         * @param {String|Number} value 
         * @param {Point} point 
         */
        constructor (type, value, point) {
                this.type = type;
                this.value = value;
                this.location = point;
        }
}

class UiCommandBuilder {

        constructor (interceptors) {
                this._commands = [];
                this._interceptors = interceptors || {};
                this._name = "";
                this._description = "";
        }

        clear(){
                this._commands=[];
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y
         * @returns {UiCommandBuilder} 
         */
        click(x, y) {
                
                return this._pushInternal(new Command(COMMANDS.CLICK, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} elapse 
         * @returns {UiCommandBuilder} 
         */
        wait(elapse) {
                return this._pushInternal(new Command(COMMANDS.WAIT, elapse, null));
        }

        /**
         * 
         * @param {String} text 
         * @returns {UiCommandBuilder}
         */
        print(text) {
                return this._pushInternal(new Command(COMMANDS.PRINT, text, null));
        }

        /**
         * 
         * @param {Number} value 
         * @returns {UiCommandBuilder}
         */
        scrollUp(value) {
                return this._pushInternal(new Command(COMMANDS.SCROLL_UP, value, null));
        }

        /**
         * 
         * @param {Number} key 
         * @returns {UiCommandBuilder}
         */
        keyDown(key) {
                return this._pushInternal(new Command(COMMANDS.KEY_DOWN, key, null));
        }

        /**
         * 
         * @param {Number} key 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         * 
         */
        mouseDown(key, x, y) {
                return this._pushInternal(new Command(COMMANDS.MOUSE_DOWN, key, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        leftMouseDonw(x, y) {
                return this._pushInternal(new Command(COMMANDS.LEFT_MOUSE_DOWN, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} key 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        mouseUp(key, x, y) {
                return this._pushInternal(new Command(COMMANDS.MOUSE_UP, key, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        leftMouseUp(x, y) {
                return this._pushInternal(new Command(COMMANDS.LEFT_MOUSE_UP, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        middleMouseDown(x, y) {
                return this._pushInternal(new Command(COMMANDS.MIDDLE_MOUSE_DOWN, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        middleMouseUp(x, y) {
                return this._pushInternal(new Command(COMMANDS.MIDDLE_MOUSE_UP, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        rightMouseDown(x, y) {
                return this._pushInternal(new Command(COMMANDS.RIGHT_MOUSE_DOWN, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {UiCommandBuilder}
         */
        rightMouseUp(x, y) {
                return this._pushInternal(new Command(COMMANDS.RIGHT_MOUSE_UP, null, this._toPoint(x, y)));
        }

        /**
         * 
         * @param {String} msg 
         * @returns {UiCommandBuilder}
         */
        info(msg) {
                return this._pushInternal(new Command(COMMANDS.INFO, msg));
        }

        /**
         * 
         * @param {Number} value 
         * @returns {UiCommandBuilder}
         */
        scrollDonw(value) {
                return this._pushInternal(new Command(COMMANDS.SCROLL_DOWN, value));
        }

        /**
         * 
         * @param {string} description 
         * @returns {UiCommandBuilder}
         */
        snapshot(description) {
                return this._pushInternal(new Command(COMMANDS.SNAPSHOT, description));
        }

        pause() {
                return this._pushInternal(new Command(COMMANDS.PAUSE));
        }

        resume() {
                return this._pushInternal(new Command(COMMANDS.RESUME));
        }

        start() {
                return this._pushInternal(new Command(COMMANDS.START));
        }

        stop() {
                return this._pushInternal(new Command(COMMANDS.STOP));
        }

        restart() {
                return this._pushInternal(new Command(COMMANDS.RESTART));
        }

        name(name) {
                this._name = name;
                return this;
        }

        description(description) {
                this._description = description;
                return this;
        }

        type(text){
                return this._pushInternal(new Command(COMMANDS.TYPE, text));
        }

        /**
         * 
         * @param {Command} command 
         */
        _pushInternal(command) {
                Object.keys(this._interceptors).forEach(name => {
                        command = this._interceptors[name](this, command);
                });

                this._commands.push(command);
                return this;
        }

        _toPoint(x,y){
                
                if(y==undefined){
                        if(!x.x&&!x.y)
                           throw new TypeError(`unexcepted type ${x}`);
                        
                        return x;
                }

                return new Point(x,y);
        }

        /**
         * 
         */
        build() {
                return {
                        Commands: this._commands,
                        Name: this._name,
                        Description: this._description
                }
        }
}

module.exports = {
        UiCommandBuilder,
       COMMANDS,
        KEYS,
        Point
}