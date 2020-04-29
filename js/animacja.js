

const $doc=$(document);
const $header=$('header');
const $main=$('main');


$doc.on("scroll", function(){
 //aktualna wartosc scrolla 763
const scrollPos=$doc.scrollTop();

const sectionOffset=$main.offset().top;
// console.log(sectionOffset);

const headerHeight=$header.outerHeight();
// console.log(aniHeight);
//console.log(scrollPos);
// console.log("scroll");


if(scrollPos>='660')
  {
    $main.css({'display':'flex'});
  }
  else{
    $main.css({'display':'none'});
  }
})
