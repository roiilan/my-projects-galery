console.log('Starting up');

function init() {
  crateProjs();
  renderProjs();
  // renderModal();
}

function renderProjs() {
  var projs = getProjs();
  var projNum = 1;
  // console.log(projs);

  var strHtmls = projs.map(function (proj) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>         
        <img class="img-fluid" src="img/portfolio/0${projNum++}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
        </div>
        `
  })
  $('.proj').html(strHtmls.join(''));
}


function renderModal(id) {
  console.log(id);
  var proj = getProjById(id);
  // var portfolioModalCounter=1;
  // var picNum = 1;


  var strHtmls = `
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${proj.name}</h2>
                  <p class="item-intro text-muted">${proj.title}.</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.jpg" alt="">
                  <p>${proj.desc}</p>
                  <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Category: ${proj.category}</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    `;

  $('.myModal').html(strHtmls);
}




// function renderModal() {
//   var projs = getProjs();
//   console.log(projs);

//   var portfolioModalCounter=1;
//   var picNum = 1;
//   var strHtmls = projs.map(function (proj) {
//     // var year =proj.publishedAt.getFullYear();
//     return `
//     <div class="portfolio-modal modal fade" id="portfolioModal${portfolioModalCounter++}" tabindex="-1" role="dialog" aria-hidden="true" >
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="close-modal" data-dismiss="modal">
//           <div class="lr">
//             <div class="rl"></div>
//           </div>
//         </div>
//         <div class="container">
//           <div class="row">
//             <div class="col-lg-8 mx-auto">
//               <div class="modal-body">    
//                 <h2>${proj.name}</h2>
//                 <p class="item-intro text-muted">${proj.title}.</p>
//                 <img class="img-fluid d-block mx-auto" src="img/portfolio/0${picNum++}-full.jpg" alt="">
//                 <p>${proj.desc}</p>
//                 <ul class="list-inline">
//                   <li>Date: ${proj.publishedAt}</li>                  
//                   <li>Category: ${proj.category}</li>
//                 </ul>
//                 <button class="btn btn-primary" data-dismiss="modal" type="button">
//                   <i class="fa fa-times"></i>
//                   Close Project</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>    
//     `
//   })
//   $('.myModal').html(strHtmls.join(''));
// }

