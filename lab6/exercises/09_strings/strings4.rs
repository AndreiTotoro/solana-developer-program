fn placeholder() {}

fn string_slice(arg: &str) {
    println!("{arg}");
}

fn string(arg: String) {
    println!("{arg}");
}

// TODO: Here are a bunch of values - some are `String`, some are `&str`.
// Your task is to replace `placeholder(…)` with either `string_slice(…)`
// or `string(…)` depending on what you think each value is.
fn main() {
    string_slice("blue"); // String slice: string literal

    string("red".to_string()); // String: `.to_string()` converts to `String`

    string(String::from("hi")); // String: `String::from()` creates a `String`

    string("rust is fun!".to_owned()); // String: `.to_owned()` converts to `String`

    string("nice weather".into()); // String: `.into()` converts to `String`

    string(format!("Interpolation {}", "Station")); // String: `format!` creates a `String`

    string_slice(&String::from("abc")[0..1]); // String slice: slice of a `String`

    string_slice("  hello there ".trim()); // String slice: `.trim()` returns `&str`

    string("Happy Monday!".replace("Mon", "Tues")); // String: `.replace()` creates a `String`

    string("mY sHiFt KeY iS sTiCkY".to_lowercase()); // String: `.to_lowercase()` creates a `String`
}

