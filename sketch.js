var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time ( predefined func in p5)
    hr = hour();
   
    mn = minute();
    console.log(mn)
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

   

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(0,230,230);
    strokeWeight(7);
    line(0,0,75,0);
    pop()


     //drawing seconds hand
     push();
     //rotate the hand based on angle calculated
     rotate(scAngle); 
     stroke(230,230,0);
     strokeWeight(7);
     line(0,0,100,0);
     pop()

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(230,230,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,230,230);
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke(255,0,0);
    arc(0,0,260,260,0,hrAngle);
}
