const headView = document.getElementById('headView');
const torsoView = document.getElementById('torsoView');
const legsView = document.getElementById('legsView');

document.addEventListener('click', (event) => {
     event = window.event;
     const target = event.target;
     let headRegex = /[hf]./;
     let torsoRegex = /t./;
     let legsRegex = /l./;
     if (headRegex.test(target.id)) {
          headView.className = "";
          if (target.id === "f1") {
               headView.classList.add('dripHead');
          } else if (target.id === "f2") {
               headView.classList.add('ratniHead');
          } else if (target.id === "f3") {
               headView.classList.add('royalHead');
          }
     } else if (torsoRegex.test(target.id)) {
          torsoView.className = "";
          if (target.id === "t1") {
               torsoView.classList.add('dripTorso');
          } else if (target.id === "t2") {
               torsoView.classList.add('ratniTorso');
          } else if (target.id === "t3") {
               torsoView.classList.add('royalTorso');
          }
     } else if (legsRegex.test(target.id)) {
          legsView.className = "";
          if (target.id === "l1") {
               legsView.classList.add('dripLegs');
          } else if (target.id === "l2") {
               legsView.classList.add('ratniLegs');
          } else if (target.id === "l3") {
               legsView.classList.add('royalLegs');
          }
     }

 }, false);