import React from 'react'
import "C:/Users/ankit/Downloads/VirtualMedic/client/node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Diagnostics.css'

const Diagnostics = () => {
    return(
        <React.Fragment>
            <div className="container">
  <div className="row">
    <div class="col-sm">
      <div class="cardib" >
  <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/MD/PV/UG/14568530/ge-definium-656-hd-x-ray-machine-500x500.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>X-Ray</b></h5>
    <p class="card-text"><i>An X-ray, or X-radiation, is a penetrating form of high-energy electromagnetic radiation. Most X-rays have a wavelength ranging from 10 picometers to 10 nanometers, corresponding to frequencies in the range 30 petahertz to 30 exahertz and energies in the range 124 eV to 124 keV.</i></p>
    <a href="https://en.wikipedia.org/wiki/X-ray" class="btn btn-primary">Know More</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="cardib" >
  <img src="https://cdn10.bigcommerce.com/s-p10g1rn/product_images/uploaded_images/shutterstock-414452563-ecg2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>ECG</b></h5>
    <p className="card-text"><i>Electrocardiography is the process of producing an electrocardiogram. It is a graph of voltage versus time of the electrical activity of the heart using electrodes placed on the skin.These electrodes detect the small electrical changes that are a consequence of cardiac muscle depolarization followed by repolarization during each cardiac cycle (heartbeat). </i> </p>
    <a href="https://en.wikipedia.org/wiki/Electrocardiography" className="btn btn-primary">Know More</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="cardib" >
  <img src="https://www.researchgate.net/profile/Zohair-Al-Ameen/publication/309609776/figure/fig1/AS:423892511662082@1478075258792/A-Modern-CT-Scan-Machine.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>CT-Scan</b></h5>
    <p className="card-text"><i>A CT scan or computed tomography scan is a medical imaging technique used in radiology to get detailed images of the body noninvasively for diagnostic purposes. The personnel that perform CT scans are called radiographers or radiology technologists.</i></p>
    <a href="https://en.wikipedia.org/wiki/CT_scan" className="btn btn-primary">Know More</a>
  </div>
</div>
</div>
    
  </div>
</div>
        </React.Fragment>
    )
}

export default Diagnostics;