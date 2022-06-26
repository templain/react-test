use wasm_bindgen::prelude::*;

struct Point(f64, f64);

struct Curve(f64, f64, f64, f64, f64, f64);

struct Path {
    start: Point,
    curves: Vec<Curve>,
    close: bool,
}

impl Path {
    fn to_svg_value(&self) -> String {
        let mut string = String::new();
        string.push_str(&format!(" M {} {}", self.start.0, self.start.1));
        for c in &self.curves {
            string.push_str(&format!(" C {} {} {} {} {} {}", c.0, c.1, c.2, c.3, c.4, c.5));
        }
        if self.close {
            string.push_str(" Z ");
        }
        string
    }
}

fn get_path(num: u8) -> Path {
    match num {
        0 => Path {
            start: Point(38.0,19.0),
            curves: vec![
                Curve(38.0, 19.0, 25.0, 37.0, 25.0, 37.0 ),
                Curve(25.0, 40.333, 25.0, 43.667, 25.0, 47.0 ),
                Curve(25.0, 53.578, 51.0, 51.667, 51.0, 49.0),
                Curve(51.0, 44.084, 54.0, 34.646, 54.0, 28.0),
                Curve(54.0, 19.653, 45.975, 19.0, 39.0, 19.0),
                Curve(38.0, 19.0, 36.0, 19.0, 38.0, 19.0),
            ],
            close: true,
        },
        1 => Path {
            start: Point(24.0,12.0),
            curves: vec![
                Curve(24.0, 12.0, 27.0, 0.0, 27.0, 0.0),
                Curve(27.0, 0.0, 28.0, 21.0, 28.0, 21.0),
                Curve(28.0, 30.774, 29.0, 38.348, 29.0, 47.0),
                Curve(29.0, 50.667, 29.0, 53.333, 29.0, 56.0),
            ],
            close: false,
        },
        2 => Path {
            start: Point(12.0,22.0),
            curves: vec![
                Curve(11.768, 12.344, 17.245, 6.0, 27.0, 6.0 ),
                Curve(38.152, 6.0, 49.0, 4.144, 49.0, 16.0),
                Curve(49.0, 20.347, 50.825, 23.35, 49.0, 27.0),
                Curve(49.0, 27.0, 44.0, 36.0, 44.0, 36.0 ),
                Curve( 44.0, 40.307, 25.06, 39.47, 22.0, 41.0),
                Curve( 16.798, 43.601, 14.145, 42.855, 11.0, 46.0),
                Curve(10.52, 46.48, 4.801, 54.0, 9.0, 54.0 ),
                Curve( 26.0, 54.0, 37.0, 54.0, 48.0, 54.0),
                Curve( 52.333, 54.0, 55.667, 54.0, 59.0, 54.0),
            ],
            close: false,
        },
        3 => Path {
            start: Point(18.0,15.0),
            curves: vec![
                Curve(18.127, 8.576, 28.149, 9.5, 34.0, 9.5 ),
                Curve( 44.282, 9.5, 45.0, 11.94, 45.0, 18.5 ),
                Curve(45.0, 21.622, 25.236, 29.5, 37.0, 29.5 ),
                Curve(49.319, 29.5, 54.0, 35.449, 54.0, 43.5),
                Curve(54.0, 53.36, 40.166, 53.5, 34.0, 53.5),
                Curve(26.667, 53.5, 20.333, 53.5, 14.0, 53.5),
                Curve(9.542, 53.5, 9.0, 52.545, 9.0, 49.5),
            ],
            close: false,
        },
        4 => Path {
            start: Point(35.0,54.0),
            curves: vec![
                Curve(34.359, 45.108, 33.0, 37.685, 33.0, 28.5 ),
                Curve(33.0, 20.5, 33.0, 13.5, 33.0, 6.5),
                Curve(33.0, 3.581, 8.0, 12.823, 8.0, 19.5),
                Curve(8.0, 20.5, 4.0, 28.5, 4.0, 28.5),
                Curve(15.736, 31.434, 31.638, 29.5, 44.0, 29.5 ),
                Curve(50.333, 29.5, 54.667, 29.5, 59.0, 29.5),
            ],
            close: false,
        },
        5 => Path {
            start: Point(48.0,10.0),
            curves: vec![
                Curve(48.0, 10.0, 22.0, 9.5, 22.0, 9.5),
                Curve( 19.098, 9.5, 19.0, 24.568, 19.0, 27.5 ),
                Curve(19.0, 32.314, 37.537, 27.037, 40.0, 29.5),
                Curve(45.339, 34.839, 53.0, 37.634, 53.0, 45.5),
                Curve( 53.0, 55.05, 47.277, 56.5, 39.0, 56.5 ),
                Curve(29.349, 56.5, 23.078, 56.578, 18.0, 51.5),
                Curve(14.844, 48.344, 14.131, 46.894, 13.0, 43.5),
            ],
            close: false,
        },
        6 => Path {
            start: Point(41.0,7.0),
            curves: vec![
                Curve(32.018, 10.304, 23.399, 11.101, 16.0, 18.5),
                Curve(16.0, 19.5, 11.0, 30.5, 11.0, 30.5),
                Curve(10.143, 31.357, 11.0, 38.761, 11.0, 40.5 ),
                Curve(11.0, 47.726, 10.439, 56.5, 17.0, 56.5),
                Curve(23.847, 56.5, 31.476, 57.5, 38.0, 57.5 ),
                Curve(45.616, 57.5, 54.0, 56.912, 54.0, 50.5 ),
                Curve(54.0, 44.713, 54.67, 31.5, 48.0, 31.5),
                Curve(42.759, 31.5, 35.983, 28.5, 29.0, 28.5),
                Curve(21.11, 28.5, 17.211, 29.763, 12.0, 31.5),
            ],
            close: false,
        },
        7 => Path {
            start: Point(15.0,21.0),
            curves: vec![
                Curve(13.18, 6.904, 19.978, 9.5, 32.0, 9.5),
                Curve(38.714, 9.5, 57.139, 10.5, 48.0, 10.5),
                Curve( 43.745, 10.5, 33.0, 19.583, 33.0, 22.5 ),
                Curve(33.0, 29.83, 27.0, 36.266, 27.0, 43.5),
                Curve(27.0, 47.5, 27.0, 50.5, 27.0, 53.5),
            ],
            close: false,
        },
        8 => Path {
            start: Point(44.0,17.0),
            curves: vec![
                Curve( 39.798, 13.1, 33.802, 10.767, 27.0, 8.5),
                Curve(16.359, 8.5, 9.0, 6.923, 9.0, 18.5 ),
                Curve( 9.0, 25.049, 22.595, 35.5, 27.0, 35.5 ),
                Curve(31.187, 35.5, 35.0, 47.92, 35.0, 51.5),
                Curve(35.0, 56.211, 20.4, 57.7, 16.0, 55.5),
                Curve( 10.692, 52.846, 2.7, 36.5, 12.0, 36.5 ),
                Curve(17.289, 36.5, 37.0, 29.953, 37.0, 26.5),
                Curve( 37.0, 23.884, 43.122, 18.133, 44.0, 17.0 ),
            ],
            close: true,
        },
        9 => Path {
            start: Point(42.0,20.0),
            curves: vec![
                Curve(43.428, 8.12, 35.948, 8.5, 26.0, 8.5 ),
                Curve( 15.323, 8.5, 7.0, 9.962, 7.0, 20.5),
                Curve(7.0, 30.723, 12.027, 32.5, 21.0, 32.5),
                Curve(26.429, 32.5, 42.0, 33.455, 42.0, 28.5),
                Curve(42.0, 16.806, 43.0, 19.704, 43.0, 29.5),
                Curve(43.0, 34.052, 38.667, 48.833, 37.0, 50.5 ),
                Curve(32.358, 55.142, 31.554, 59.5, 23.0, 59.5),
                Curve( 15.012, 59.5, 10.208, 57.708, 7.0, 54.5),
            ],
            close: false,
        },
        _ => panic!("Parameter error."),
    }
}

fn get_path_string(num: u8, offset: f64) -> String {
    let mut path = get_path(num);
    
    path.start.0 += offset;
    for curve in path.curves.iter_mut() {
        curve.0 += offset;
        curve.2 += offset;       
        curve.4 += offset;              
    }
    
    path.to_svg_value()
}

#[wasm_bindgen]
pub fn update_number(num: usize, id: &str) {
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();


    // SVGの描画領域を作る
    let svg = document.create_element_ns(Some("http://www.w3.org/2000/svg"), "svg").unwrap();
    let nud = format!("{}", num).len();
    svg.set_attribute("width", &format!("{}", nud * 64)).unwrap();
    svg.set_attribute("hight", "64").unwrap();
    svg.set_attribute("viewBox", &format!("0 0 {} 64", nud * 64)).unwrap();

    // パスデータの生成
    let mut temp=num;
    let mut offset = (64 * (nud - 1)) as f64;
    while {
        let path = document.create_element_ns(Some("http://www.w3.org/2000/svg"), "path").unwrap();
        path.set_attribute("d", &get_path_string((temp % 10) as u8, offset)).unwrap();
        path.set_attribute("vector-effect", "non-scaling-stroke").unwrap();
        path.set_attribute("fill", "none").unwrap();
        path.set_attribute("stroke-width","4").unwrap();
        path.set_attribute("stroke","rgb(0,0,0)").unwrap();
        path.set_attribute("stroke-linejoin","miter").unwrap();
        path.set_attribute("stroke-linecap","square").unwrap();
        path.set_attribute("stroke-miterlimit","3").unwrap();
        svg.append_child(&path).unwrap();
        
        temp > 9
    } {
        temp = temp / 10;
        offset -= 64.0;
    }
    
    // 指定されたエレメントの子エレメントを置換
    if let Some(entry_point) = document.get_element_by_id(id) {
        if let Err(_e) = entry_point.replace_child(&svg, &(entry_point.first_element_child().unwrap())) {
            web_sys::console::log_1(&"Replace failed!".into());
        }
    }
    else {
        web_sys::console::log_1(&"Element Not Found!".into());
    }    
}

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    // Your code goes here!
    web_sys::console::log_1(&"Wasm Started!".into());

    Ok(())
}
