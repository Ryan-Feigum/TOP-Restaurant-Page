function loadHomeModule() {
  const contentDiv = document.getElementById('content');
  const newDiv = document.createElement('div');

    newDiv.innerHTML = `
    <div class="container-fluid">
      <hr>
      <div class="jumbotron" align="center">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
    
          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <p>New location opening soon!!</p>
            </div>
    
            <div class="item">
              <p>We're rolling out our seasonal menu, with special options for the season</p>
            </div>
    
            <div class="item">
              <p>The Drink of the Month SG Special Brew</p>
            </div>
          </div>
    
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <hr>
      <div>
        <p style="text-align: center;"><img src=""/></p>
        <div>
          <p style="text-align:center; border:1px solid black">
            Here at RJ's all are welcome. From in-laws to outlaws, even the outlaws' in-laws.
            This began as a foggy dream between two close friends in 2012.
            A few years later and the dream became a mission.
          </p>
        </div>
        <hr>
      </div>
      <footer>
        <p style="text-align:center">
          123 2nd St NW, Boulder, CO, 02400<br/>
          555-555-5555
        </p>
        <hr>
        <p style="text-align:center">
          This site is best viewed with JavaScript enabled
        </p>
      </footer>
    </div>
    `;

  contentDiv.appendChild(newDiv);

  // Debugging to ensure module is loaded upon button click
  console.log("Module loaded");

};


export { loadHomeModule };