/**
 * Art Jam : By the Seaside
 * Carael Bandojo
 * 
 * 
 * 
 */

"use strict";

let sky = {
    r: 212,
    g: 119,
    b: 83,
    }
  
  let sun = {
    x: 450,
    y: 200,
    w: 100,
    h: 100,
    minY: 100,
    maxY: 600, 
    }
  
  let wave = {
    min: (230),
    max: (405)
  }
  
  /**
  * Simply creates a 900x800 canvas.
  */
  function setup() {
    createCanvas(900, 800);
   
    
  } 
  
  // Begin drawing.
  function draw() {

    // Sets background to orange
    background(sky.r, sky.g, sky.b);
    
    // Adds a transparent rectangle that fades with mouseY
    drawNightSky();

    // Adds a ellipse that fades and changes height with mouseY
    drawSun();
    
    // Draw the nice blue water that is just a rectangle
    drawWater();
    
    checkFlood();
    
    drawSand();
    
  }
  
    /**
    * Draw Night Sky Function
    * 
    * Adds a transparent rectangle that is controlled by mouseY
    */
  function drawNightSky() {

    // Set colour of rect to a deep blue
    let nightColour = color(7, 6, 31);
    
    // Map mouseY to a range for the night color's alpha
    let nightAlpha = map(mouseY, 0, height, 0, 255);
    
    //  Set transparency of night sky based on mouseY
    nightColour.setAlpha(nightAlpha);
  
    // Draw the night sky
    push();
    noStroke();
    fill(nightColour);
    rect(0, 0, 900, 800);
    pop();
    
  }
  
   /**
    * Draw Sun Function
    * 
    * Adds a ellipse that fades and moves with mouseY
    */
  function drawSun() {

    // Set colour of ellipse to a light yellow
    let sunColour = color(255, 243, 156);
    
    // Map mouseY to a range for the night color's alpha
    let sunAlpha = map(mouseY, 0, 800, 255, 0);
    
    // Sets transparency of sun based on mouseY
    sunColour.setAlpha(sunAlpha);
    
    // Remap the mouseX to change the sun height
    let sunRise = map(mouseY, 0, 900, sun.minY, sun.maxY);
    
    // Draw the sun
    push();
    ellipseMode(CENTER);
    noStroke();
    fill(sunColour);
    ellipse(sun.x, sunRise, sun.w, sun.h);
    pop();
  
  }


  /**
  * Draw Water Function
  * 
  * Draw the nice blue water that is just a rectangle
  */
  function drawWater() {
    
    // Remap the mouseX to change the wave size
    let waveSize = map(mouseX, 0, 900, wave.min, wave.max);
    
    // Draw the waves
    push();
    rectMode(CENTER);
    noStroke();
    fill(123, 193, 209);
    rect(450, 700, 900, waveSize);
    pop();
  }
  
  // draw a yellow strip of sand
  function drawSand() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 229, 163);
    rect(450, 700, 900, 200);
    pop();
  }
  
  function checkFlood() {
    if (wave.min >= 1300) {
      floodMessage();
    }
  }
  
  function floodMessage() {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0); // Set text color to black for visibility
      text("🐟 More room for me!", 450, 300);
  }
  
  
  function mouseClicked() {
      wave.max += 100 ;
      wave.min += 100 ;
  }