import * as wasm from './wasm_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
*/
export function main_js() {
    wasm.main_js();
}

/**
*/
export class CounterState {

    static __wrap(ptr) {
        const obj = Object.create(CounterState.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_counterstate_free(ptr);
    }
    /**
    * @returns {CounterState}
    */
    static new() {
        const ret = wasm.counterstate_new();
        return CounterState.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    increment_counter() {
        const ret = wasm.counterstate_increment_counter(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    decrement_counter() {
        const ret = wasm.counterstate_decrement_counter(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_counter() {
        const ret = wasm.counterstate_get_counter(this.ptr);
        return ret;
    }
    /**
    * @param {number} new_counter
    */
    set_counter(new_counter) {
        wasm.counterstate_set_counter(this.ptr, new_counter);
    }
}

export function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

export function __wbg_log_e8ba7b992c7ad0eb(arg0) {
    console.log(getObject(arg0));
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

