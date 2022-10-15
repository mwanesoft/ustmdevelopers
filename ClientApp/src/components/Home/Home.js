import React, { Component, useEffect } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  // useEffect(() => {
  //   document.body.classList.toggle("landing-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     document.body.classList.toggle("landing-page");
  //   };
  // }, []);


  render() {
    return(
      <>
        {/* // Show case section */}
        <section className="d-flex text-light bg-dark text-center text-sm-start p-5 p-lg-0">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h1>Question with Style! <span className="purple-600 fw-bold">Active Student</span>.</h1>
                <p className="lead">
                  Welcome to USTM Developers a Mozambican platform to share Knowledge. <br/>
                  Find the best answers for your native questions that your collegues have benn through, so you don't hae to reinvent the wheal all over again 
                </p>
              </div>
              <img src="images/question.svg" alt="" srcset="" className="img-fluid w-50"/>
            </div>
          </div>
        </section>

        {/* // for Who */}
        <section className="p-5" id="forwho">
          <div className="container">
            <div className="row">
              <div className="col-md">
                  <div class="card bg-dark text-dark p-lg-5">
                      <div class="card-body text-center">
                          <h3 class="card-title mb-3">USTM Developers for Students</h3>

                          <div class="h1 mb-3">
                              {/* <i class="bi bi-laptop"></i> */}
                              <img src="images/books.svg" class="img-fluid w-75"/>
                          </div>
                          <h3 class="card-title mb-3">A public platform building the definitive collection of coding questions & answers</h3>
                          <p class="card-text lead">

                          A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
                          </p>
                          <a href="#" class="btn btn-secondary">Join the Community</a>

                          <p>or <a href="#">search content</a></p>
                      </div>
                    </div>
              </div>
              
              <div className="col-md">
                  <div class="card bg-red text-dark p-lg-5">
                      <div class="card-body text-center">
                          <h3 class="card-title mb-3">USTM Developers for Students</h3>

                          <div class="h1 mb-3">
                              {/* <i class="bi bi-laptop"></i> */}
                              <img src="images/books.svg" class="img-fluid w-75"/>
                          </div>
                          <h3 class="card-title mb-3">A public platform building the definitive collection of coding questions & answers</h3>
                          <p class="card-text lead">

                          A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
                          </p>
                          <a href="#" class="btn btn-primary">Join the Community</a>

                          <p>or <a href="#">search content</a></p>
                      </div>
                    </div>
              </div>
            </div>
          </div>

        </section>
      </>
    );
  }
}