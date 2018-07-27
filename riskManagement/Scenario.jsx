import React from 'react';

class Scenario extends React.Component {
   render() {
      return (
         <div>
             <div className="modal fade" id="scenarioModal" tabIndex="-1" role="dialog" aria-labelledby="scenarioModalLabel" aria-hidden="true">
                 <div className="modal-dialog" role="document">
                     <div className="modal-content">
                         <div className="modal-header">
                             <span className="marginpopup"><label className="fontvalue">ADD SCENARIO</label></span><br/>
                             <span className="marginpopup2"><label className="fontlabel">Categoria di Rischio: CRO_1_1</label></span>
                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                 <span><img className="width75" src="./assets/close_icon.svg"/></span>
                             </button>
                         </div>
                         <div className="modal-body">
                             <div className="row">
                                 <div className="col-sm-12 col-md-12 col-lg-12">
                                     <label className="fontlabel">Scenario of Rischio</label>
                                     <input type="text" className="form-control fontvalue" />
                                 </div>
                             </div>
                             <div className="mTop20">
                                 <div className="row">
                                     <div className="col-sm-6 col-md-6 col-lg-6">
                                         <label className="fontlabel">FaYore di Rischio</label>
                                         <select className="form-control fontvalue">
                                         <option>CRO_1 - Non Conformità</option>
                                         <option>MRO_1 - Non Conformità</option>
                                         <option>NRO_1 - Non Conformità</option>
                                         <option>PRO_1 - Non Conformità</option>
                                         <option>DRO_1 - Non Conformità</option>
                                         </select>
                                         <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                     </div>
                                     <div className="col-sm-6 col-md-6 col-lg-6">
                                         <label className="fontlabel">Periodicità dell'avità</label>
                                         <select className="form-control fontvalue">
                                             <option>CRO_1 - Non Conformità</option>
                                             <option>MRO_1 - Non Conformità</option>
                                             <option>NRO_1 - Non Conformità</option>
                                             <option>PRO_1 - Non Conformità</option>
                                             <option>DRO_1 - Non Conformità</option>
                                         </select>
                                         <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                     </div>
                                 </div>
                             </div>
                             <div className="mTop20">
                                 <div className="row">
                                     <div className="col-sm-6 col-md-6 col-lg-6">
                                         <label className="fontlabel">Event Type</label>
                                         <select className="form-control fontvalue">
                                             <option>CRO_1 - Non Conformità</option>
                                             <option>MRO_1 - Non Conformità</option>
                                             <option>NRO_1 - Non Conformità</option>
                                             <option>PRO_1 - Non Conformità</option>
                                             <option>DRO_1 - Non Conformità</option>
                                         </select>
                                         <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                     </div>
                                     <div className="col-sm-6 col-md-6 col-lg-6">
                                         <label className="fontlabel">Effecto</label>
                                         <select className="form-control fontvalue">
                                             <option>CRO_1 - Non Conformità</option>
                                             <option>MRO_1 - Non Conformità</option>
                                             <option>NRO_1 - Non Conformità</option>
                                             <option>PRO_1 - Non Conformità</option>
                                             <option>DRO_1 - Non Conformità</option>
                                         </select>
                                         <span><img src="./assets/dropdown_down.svg" className="dropdownicon-align"/></span>
                                     </div>
                                 </div>
                             </div>
                             <div className="row mTop20">
                                 <div className="col-sm-12 col-md-12 col-lg-12">
                                     <label className="fontlabel">Descrizione Scenario di Rischio</label>
                                     <textarea className="form-control fontvalue" rows="5" id="comment"></textarea>
                                 </div>
                             </div>
                         </div>
                         <div className="modal-footer">
                             <button type="button" className="btn btnsecondary" data-dismiss="modal">Cancel</button>
                             <button type="button" className="btn btn-primary">Save changes</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      );
   }
}

export default Scenario;

