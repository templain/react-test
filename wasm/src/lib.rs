use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
pub struct CounterState {
  counter: i32
}

#[wasm_bindgen]
impl CounterState {
    pub fn new() -> CounterState {
        let counter = 0;

        CounterState {
            counter,
        }
    }

    pub fn increment_counter(&mut self) -> i32 {
        self.counter = self.counter + 1;
        self.counter
    }

    pub fn decrement_counter(&mut self) -> i32 {
        self.counter = self.counter - 1;
        self.counter
    }

    pub fn get_counter(&self) -> i32 {
        self.counter
    }
    
    pub fn set_counter(&mut self, new_counter:i32){
        self.counter = new_counter;
    }
}

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    // Your code goes here!
    console::log_1(&JsValue::from_str("Wasm Started!"));

    Ok(())
}
