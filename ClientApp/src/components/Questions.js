import React from "react";

function Questions() {
  return (
    <div>
      <div className="container bg-dark text-light">
        <div className="row">
          <div className="col-md-2">
            <div className="pt-3">
              <ul>
                <li>Home</li>
                <li>Public</li>
                <li>Messages</li>
                <li>Notifications</li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">


            <div className=" col-md d-flex">
              <div className="col">
                <div className="row d-flex">
                  <div className="lead col">All Questions</div>
                  <button className="ms-auto btn btn-primary col-3">Ask a Questions</button>
                </div>
                <div className="row d-flex mt-md-4">
                  <span className="col">23 Questions</span>
                  <div class="btn-group col-6" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Newest</button>
                    <button type="button" class="btn btn-secondary">Active</button>
                    <button type="button" class="btn btn-secondary">Bountied</button>
                    <button type="button" class="btn btn-secondary">Unanswered</button>
                  </div>
                  <button className="col-2 btn btn-danger" disabled="disabled">Filter</button>
                </div>
              </div>

            </div>

              <div className="col-md-3">
                  Explore the community
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
