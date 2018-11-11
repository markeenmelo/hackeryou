$(document).ready(function(){


var x = function(){
  return 'foo';
}


// select the body
    const body = $('body');
    console.log(body);

// select all paragraphs
    const ps = $('p');
    console.log(ps);

// Log "There are __ paragraph tags in this site"
    console.log('There are ' + ps.length + ' paragraphs on this page');

// select all the heading 2 elements and log them
    const headings = $('head');
    console.log(headings);

// select all the links in the nav
    const navs = $('.nav');

// log how many links are in the nav
    console.log(navs);

// There are 9 points in the first section of the website  (Web Typography CSS3 Techniques Advanced Styling...). Select all of these.
    const firstSection = $('.learned');
    console.log(firstSection);

// select the last point
    const lastPoint = $('.learned').lastChild;
    console.log(lastPoint);

// Select the sentence underneath "Work" that says "please take a second to check..."
    const work = $('p.desc');
    console.log(work);

// skills and services is an unordered list, select it, but only it
    const skillServices = $('.skillMeter');
    console.log(skillServices);

// select all the skills inside the skill meter
    const allSkills = skillServices.$('li');
    console.log(allSkills);

// select the even skills
    const evenSkills = allSkills.$()

// select the odd skills

// select every other skill starting at the thrid one

// select all spans

// select the "good" and "hero" spans in a single selector

// Select the link inside the h1 at the top of the page AND the "© Hacker You" at the bottom of the page

// select all the section divs

// select the process div

// select "your name, your email and your message" in the contact form

// select the "send message" input[type="text"]

// select all paragraphs in the footer

// select all the process boxes

// select all the work boxes

// select all the titles inside of them

}); // END doc ready
