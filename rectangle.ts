class Rectangle
{
    private length: Number;
    private height: Number; 
    constructor(l,h)
    {
        this.height=h;
        this.length=l;
    }

    getArea(): Number{
        let area = Number(this.length)* Number(this.height);
        return area;
    }

    getPerimeter(l: any , h:any): any{
        return 2*(Number(this.length) + Number(this.height));
    }
}

var obj = new Rectangle(40,20);
var area=obj.getArea();
console.log(area);

  
