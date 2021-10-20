let triangle_base = 5;

let triangle_height = 7;

let rectangle_base = 9;

let rectangle_height = 4;

const triangle_area = triangle_base * triangle_height * 1/2;

const rectangle_area = rectangle_base * rectangle_height;

// To find the biggest area between the trisngle and the rectangle.

if (triangle_area > rectangle_area) {

    console.log("The triangle has a bigger area");

} else {

    console.log("The rectangle has a bigger area");
}