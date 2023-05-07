const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    switch (choice){
        case 'square':
            if (side < 0 || side == null){
                area = -1;
                break;
            }
            area = side * 4;
            break;
        case 'rectangle':
            if (length < 0 || length == null || breadth < 0 || breadth == null){
                area = -1;
                break;
            }
            area = length * breadth;
            break;
        case 'circle':
            if(radius < 0 || radius == null){
                area = -1;
                break;
            }
            area = radius * radius * 3.14;
            break;
        default:
            area = -1;
    }
    return area
}
module.exports = {calculateArea}
