import React from 'react';


export default function cardOf({ jobs }) {
  return (
    <div class="right-column">

      {jobs.map((job) => (
        <div class="aux">
          <div class="small-square">
            <div class="btn-group">
              <label class="btn btn-primary btn-pic img-wrapper">
                <button type="button" data-toggle="modal" data-target={job.dataTarget} name="options"
                  id="option1" autocomplete="off" checked><img
                    src={job.imgSrc} />
                </button>
              </label>
            </div>

            <div class="github-link">
              <button onclick={job.githubClick} type="button"
                class="btn btn-primary">GitHub</button>
              <button onclick={job.openClick} type="button"
                class="btn btn-primary">OPEN</button>
            </div>
          </div>

          <div class="modal fade" id={job.modalId} tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{`${job.modalLabel}`}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src={job.modalSrc} />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))
      }
    </div >
  );
}
