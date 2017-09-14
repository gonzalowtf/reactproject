import React from "react";

export default class Layout2 extends React.Component{
  constructor(){
    super();



      }
  render(){
    return(
      <div class = "container">
      <div class = "row"></div>
      <div class = "row"></div>
      <div class = "row">
      <div class = "col s3"></div>
      <div class = "col s4">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/33/thumb_32773_default_news_size_5.jpeg" alt="First slide">
              </img>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="http://images4.fanpop.com/image/photos/23500000/LFC-Wallpaper-liverpool-fc-23510828-1024-768.jpg" alt="Second slide">
              </img>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/40/thumb_39618_default_news_size_5.jpeg" alt="Third slide">
              </img>
            </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }

}
