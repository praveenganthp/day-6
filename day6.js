//constructor for the class Movie:

class Movie{
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var movie = new Movie('Iron Man', 'Marvel', '10');
console.log(movie);

//The constructor for the class Movie
// will set the class property rating to "PG" as
// default when no rating provided
class Movie5{
    constructor(title, studio, rating='pg'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    // here in movies2 we didn't initialize the value here but we already assigned up
    // but movie1 we assigned value at below. // so both are working
}
var movie2 = new Movie5('Iron Man', 'Marvel');
var movie1= new Movie5('c_A', 'marvel',10)
console.log(movie2, movie1);

//3
class mmovie {
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var mmmovie =new mmovie('casino royale','eon productions','pg13');
console.log(mmmovie);

//4
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    Circle(){
        console.log("this is circle ");
    }
    Circle(radius){
        console.log("method overriding ");
    }
    Circle(radius,color){
        console.log(this.radius,this.color)
    }
    getradius(){
        console.log("the radius of circle is "+this.radius)
    }
    setradius(newradius){
        this.radius=newradius;
    }
    getcolor(){
        console.log("the color of the circle is "+this.color);
    }
    setcolor(newcolor){
        this.color=newcolor;
    }
    getarea(){
        console.log('area of circle is '+(Math.PI*Math.pow(this.radius,2)))
    }
    getcircumference(){
        console.log('circumference of circle is '+(2*Math.PI*this.radius))
    }

}

var newcircle = new Circle(1,'green');
newcircle.getradius();
newcircle.setradius(3);
newcircle.getradius();
newcircle.getcolor();
newcircle.setcolor('red');
newcircle.getcolor();
newcircle.getarea();
newcircle.getcircumference();

//5
class Person{
    constructor(name, fatheName, motherName, gender, email, mobile,state){
        this.name=name;
        this.fatheName=fatheName;
        this.motherName=motherName;
        this.gender=gender;
        this.email=email;
        this.mobile=mobile;
        this.state=state;
    }
    myName(){
        return `my name is ${this.name}`;
    }
    myFathername(){
        return `my father name is ${this.fatheName}`;
    }
    myMothername(){
        return `my mother name is ${this.motherName}`;
    }
    myGender(){
        return `my gender is ${this.gender}`;
    }
    myEmail(){
        return `my email is ${this.email}`;
    }
    myMobile(){
        return `my mobile number is ${this.mobile}`;
    }
    myState(){
        return `my state is ${this.state}`
    }
}

const details = new Person('praveen', 'dad', 'mom', 'male','hello@gmail.com','950091','nearby kannada');

console.log(details.myName());
console.log(details.myFathername());
console.log(details.myMothername());
console.log(details.myGender());
console.log(details.myEmail());
console.log(details.myMobile());
console.log(details.myState());

// uber
class Uber{
    constructor(CRD,SBM,basefare,CPM,TR,ridedistance,bookingfee){

    
        this.CRD=CRD;
        this.SBM=SBM;
        this.basefare=basefare;
        this.CPM=CPM;
        this.TR=TR;
        this.ridedistance=ridedistance
        this.bookingfee=bookingfee;

    }
    getprice(){
        console.log(" UBER PRICE IS "+(this.basefare + ((this.CPM * this.TR) + (this.CRD* this.ridedistance) *this.SBM) + this.bookingfee ))
    }
    
     setprice(newCRD,newSBM,newbasefare,newCPM,newTR,newridedistance,newbookingfee){
            
            this.CRD=newCRD;
            this.SBM=newSBM;
            this.basefare=newbasefare;
            this.CPM=newCPM;
            this.TR=newTR;
            this.ridedistance=newridedistance
            this.bookingfee=newbookingfee;
    
        }    
}
var cost1=new Uber();
cost1.setprice(100,5,20,15,10,3,20)
cost1.getprice()



