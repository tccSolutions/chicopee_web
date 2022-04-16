import React from 'react'

const ContactPage = () => {

    return(
    <div>
        <div className="container position-absolute start-50 top-50 translate-middle">
            <div class="row justify-content-center mt-3">
                <img
                src="https://www.hallcounty.org/ImageRepository/Path?filePath=%2fdocuments%5cIntranet%5c20%2fagcenter1_201410271149598036.jpg"
                alt=""
                className="rounded"
                style={{'maxHeight':'50%', 'maxWidth':'50%', 'minWidth':'300px'}}
              />
            </div>
            <div className="row text-center justify-content-center">
                <h2>Chicopee Woods Agricultural Center</h2>
                <h5>1855 Calvary Church Road</h5>
                <h5>Gainesville, Ga. 30506</h5>
                <h5>Phone: 770-531-6855</h5>
                <a className='btn btn-primary w-25'href="mailto: tmobley@hallcounty.org">&#128231; Send Email</a>
            </div>
        </div>
        
    </div>
    )
}

export default ContactPage