// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor == */
/* == Step 2: Volume Method == */
/* == Step 3: Surface Area Method ==  */

class CubioMaker {
    constructor(att) {
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume() {
        return(this.length * this.width * this.height);
    }
    surfaceArea() {
        return( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}


  /* == Step 4: Create a new object that uses CuboidMaker == */
  
const cuboid = new CubioMaker({
    length: 4,
    width: 5,
    height: 5
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CubioMaker {
    constructor(att) {
        super(att)
        
    }
    cubeVolume() {
        return(this.length * this.width * this.height);
    }
    cubeSurfaceArea() {
        return( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cube = new CubeMaker ({
    length: 5,
    width: 5,
    height: 5
})

// cube object using parent class (CubioMaker) method
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150

// cube object using its own class (CubeMaker) method
console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150